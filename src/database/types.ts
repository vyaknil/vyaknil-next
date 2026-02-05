export type contentStatus =
  "in-progress" |
  "planned" |
  "completed" |
  "dropped";

export interface contentGame {
  id: number;
  name: string;
  status: contentStatus;
  link: string | null;
  date_start: string | null;
  date_end: string | null;
}