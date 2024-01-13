import { convertAsin2Isbn } from "./asin2isbn";
import { ConvertIsbnResponse } from "./interfaces";
export function convertUrl2Asin(url: string) {
  try {
    let u = new URL(url);
    let names = u.pathname.split("/");
    let q = names.findIndex((n) => n == "dp");
    if (q == -1) return "";
    return names?.[q + 1] ?? "";
  } catch {
    return "";
  }
}
export function convertUrl2Isbn(url: string): ConvertIsbnResponse {
  let asin = convertUrl2Asin(url);
  if (asin == "")
    return {
      isbn10: "",
      isbn13: "",
      error: "FORMAT",
    };
  return convertAsin2Isbn(asin);
}
