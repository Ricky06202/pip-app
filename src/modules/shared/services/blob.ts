import { put } from "@vercel/blob";

export async function uploadFileToBlob(
  file: File,
  fileName: string
): Promise<string> {
  const { url } = await put(fileName, file, { access: "public" });
  return url;
}
