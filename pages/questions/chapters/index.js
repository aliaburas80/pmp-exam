import axios from "axios";
import { useRouter } from "next/router";

export const getServerSideProps = async (context) => {
  const { req, query } = context;
  if (req) {
    let host = req.headers.host;
    const questions = await axios
      .get(`http://${host}/data/Chapters/${query.q || 1}.json`)
      .then((res) => res.data);
    return {
      props: { data: questions },
    };
  }
};

const Chapters = ({ data }) => {
  const regexHTMLTags = /(<([^>]+)>)/gi;
  const regexUTFCodes= /&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/ig
  const regexSpace = /&nbsp;/g;
  const removeAllHtmlTags = (string) => string.replace(regexHTMLTags, "").replace(regexSpace,' ').replace(regexUTFCodes,"")
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <h1>
        <ul>
          {data.questions.map((element) => {
            return <li>{removeAllHtmlTags(element.question_title)}</li>;
          })}
        </ul>
      </h1>
    </>
  );
};

export default Chapters;
