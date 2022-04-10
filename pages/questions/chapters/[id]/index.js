import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getData } from "../../../../handlers/passDataBetweenPages";

const Chapter = () => {
  const router = useRouter();
  const { id } = router.query;
  const regexHTMLTags = /(<([^>]+)>)/gi;
  const regexUTFCodes = /&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi;
  const regexSpace = /&nbsp;/g;
  const [data, setDataHandler] = useState(null);
  const dataRemoveAllHtmlTags = (string) =>
    string
      .replace(regexHTMLTags, "")
      .replace(regexSpace, " ")
      .replace(regexUTFCodes, "");

  useEffect(() => {
    setDataHandler(getData());
  }, [data]);

  return (
    <>
      <h1>
        <ul>
          {data
            ? data.questions.map((element) => {
                return <li>{dataRemoveAllHtmlTags(element.question_title)}</li>;
              })
            : ""}
        </ul>
      </h1>
    </>
  );
};

export default Chapter;
