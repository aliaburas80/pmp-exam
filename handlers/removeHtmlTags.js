const regexHTMLTags = /(<([^>]+)>)/gi;
const regexUTFCodes = /&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi;
const regexSpace = /&nbsp;/g;
export const removeAllHtmlTags = (string) =>
  string
    .replace(regexHTMLTags, "")
    .replace(regexSpace, " ")
    .replace(regexUTFCodes, "");
