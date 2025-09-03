import supabase from "./supabase";

export async function getSuites() {
  const { data, error } = await supabase.from("suites").select("*");

  if (error) {
    console.error("Error: No Suites Data found");
    throw new Error("Error: No Suites Data found");
  }

  return data;
}
