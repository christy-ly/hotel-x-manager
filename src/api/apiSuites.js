import supabase from "./supabase";
import { sanitizeFileName } from "../utils/helpers";
export async function getSuites() {
  const { data, error } = await supabase
    .from("suites")
    .select("*")
    .order("code", { ascending: true });

  if (error) {
    console.error("Error: No Suites Data found");
    throw new Error("Error: No Suites Data found");
  }

  return data;
}

export async function createSuite(formData, code = "") {
  // Upload image
  console.log(formData);
  const isEditMode = code;
  const isNewImage =
    formData.image && formData.image[0]?.type?.startsWith("image/");
  const imageName = isNewImage
    ? `${sanitizeFileName(formData.image[0]?.name)}`
    : isEditMode
    ? formData.image
    : "";

  let query = supabase.from("suites");

  if (!isEditMode) {
    await query.insert([{ ...formData, image: imageName }]);
  } else {
    await query.update([{ ...formData, image: imageName }]).eq("code", code);
  }

  const { data, error } = await query.select();

  if (error) {
    throw new Error("Error:  Fail to create sutie. " + error.message);
  }

  if (isNewImage) {
    const uploadImage = formData.image[0];

    const { error: uploadError } = await supabase.storage
      .from("suite-images")
      .upload(imageName, uploadImage);

    if (uploadError) {
      await supabase.from("suite-images").delete().eq("code", formData.code);
      console.error("Error: Fail to upload sutie image");
      console.error(uploadError);
    }
  }

  return data;
}

export async function updateSuite(code) {
  const { error } = await supabase.from("suites").delete().eq("code", code);

  if (error) {
    console.error("Error: Fail to update sutie");
    throw new Error("Error:  Fail to update sutie");
  }
}

export async function removeSuite(code) {
  const { error } = await supabase.from("suites").delete().eq("code", code);

  if (error) {
    console.error("Error: Fail to remove sutie");
    throw new Error("Error:  Fail to remove sutie");
  }
}
export async function findAllCodes() {
  const { data } = await supabase.from("suites").select("code");
  return data?.map((e) => e.code) || [];
}
