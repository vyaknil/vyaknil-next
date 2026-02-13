export type ContentStatus = "in-progress" | "planned" | "completed" | "dropped";
export type TableDate = Date | string | null

export interface Content {
  id: number;
  name: string;
  status: ContentStatus;
  link: string | null;
  date_start: TableDate;
  date_end: TableDate;
}