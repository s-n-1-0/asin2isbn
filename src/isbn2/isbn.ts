export function getIsbn13Checkdigit(isbn: string) {
  if (isbn.length < 12 || isbn.length > 13) return null;
  let isbn12 = isbn;
  if (isbn12.length == 13) {
    isbn12 = isbn12.slice(0, -1);
  }
  let p1 = 0;
  let p2 = 0;
  for (let i = 0; i < isbn12.length; i += 2) {
    p1 += Number(isbn12[i]);
  }
  for (let i = 1; i < isbn12.length; i += 2) {
    p2 += Number(isbn12[i]);
  }

  let d = (p1 + p2 * 3) % 10;
  d = 10 - d;
  if (d == 10) d = 0;
  return {
    isbn: isbn12 + String(d),
    checkdigit: d,
  };
}
/**
 * ISBN10or13 → ISBN10and13
 */
export function convertIsbn(
  isbn: string
): { isbn10: string; isbn13: string } | null {
  let retIsbn: { isbn10: string; isbn13: string } | null = null;
  if (isbn.length == 13) {
    const sum = [...isbn].slice(3, 12).reduce((tmp, c, i) => {
      let n = Number(c);
      return tmp + n * (10 - i);
    }, 0);
    const checkDigit = (11 - (sum % 11)) % 11;
    const checkDigitStr = checkDigit === 10 ? "X" : String(checkDigit);
    const isbn10 = isbn.substring(3, 12) + checkDigitStr;
    retIsbn = {
      isbn10,
      isbn13: isbn,
    };
  } else if (isbn.length == 10) {
    let q = "978" + isbn;
    let isbn13 = getIsbn13Checkdigit(q)?.isbn;
    retIsbn = {
      isbn10: isbn,
      isbn13,
    };
  }
  return retIsbn;
}
