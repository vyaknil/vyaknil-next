import { supabasePublic } from "@/data/supabase";

export type TableName = "contentGames";

export const content = {
  get: async (name: TableName) => {

    const { data } = await supabasePublic
    .from(name)
    .select()
    .order("status")
    .order("name")

    return data;
  }
}