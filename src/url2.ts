import { convertAsin2Isbn13 } from "./asin2isbn";
import { ConvertIsbnResponse } from "./interfaces";
export function convertUrl2Asin(url: string) {
  let u = new URL(url);
  let names = u.pathname.split("/");
  let q = names.findIndex((n) => n == "dp");
  if (q == -1) return "";
  return names?.[q + 1] ?? "";
}
export function convertUrl2Isbn13(url: string): ConvertIsbnResponse {
  let asin = convertUrl2Asin(url);
  if (asin == "")
    return {
      isbn: "",
      error: "FORMAT",
    };
  return convertAsin2Isbn13(asin);
}
