"use server";
import { sql } from '@/database/db';
import { Content, ContentStatus, TableDate } from '@/database/types';
import { auth } from "@/lib/auth";

type AllowedTables = "content_games";
const allowedTables = ["content_games"];

async function verifyAdmin() {
  const session = await auth();

  if (!session || (session.user as any).role !== "admin") {
    throw new Error("Unauthorized: Admin access required");
  }
}

function validateTableName(tableName: string): asserts tableName is AllowedTables {
  if (!allowedTables.includes(tableName as AllowedTables)) {
    throw new Error("Invalid table name");
  }
}

export async function contentTableSelect(tableName: AllowedTables): Promise<Content[]> {
  validateTableName(tableName);

  const rows = await sql`SELECT * from ${tableName}`;
  return rows as Content[];
}

export async function contentTablePut(tableName: AllowedTables, name: string): Promise<Content> {
  await verifyAdmin();
  validateTableName(tableName);

  const result = await sql`
  INSERT INTO ${tableName} (name)
  VALUES (${name})
  RETURNING *
`;
  return result[0] as Content;
}

export async function contentTableUpdate(
  tableName: AllowedTables,
  id: number,
  data: {
    name?: string,
    status?: ContentStatus,
    link?: string,
    date_start?: TableDate,
    date_end?: TableDate
  }
): Promise<Content> {
  await verifyAdmin();
  validateTableName(tableName);

  const result = await sql`
  UPDATE ${tableName}
  SET
    name = CASE WHEN ${data.name === undefined} THEN name ELSE ${data.name} END,
    status = CASE WHEN ${data.status === undefined} THEN status ELSE ${data.status} END,
    link = CASE WHEN ${data.link === undefined} THEN link ELSE ${data.link} END,
    date_start = CASE WHEN ${data.date_start === undefined} THEN date_start ELSE ${data.date_start} END,
    date_end = CASE WHEN ${data.date_end === undefined} THEN date_end ELSE ${data.date_end} END
  WHERE id = ${id}
  RETURNING *
`;

  if (result.length === 0) {
    throw new Error(`Record with id ${id} not found in ${tableName}`);
  }

  return result[0] as Content;
}

export async function contentTableDelete(tableName: AllowedTables, id: number) {
  await verifyAdmin();
  validateTableName(tableName);
  await sql`DELETE FROM ${tableName} WHERE id = ${id}`;
}