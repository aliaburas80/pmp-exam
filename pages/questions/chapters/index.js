import axios from "axios";
import { useRouter } from "next/router";
import Question from "../../../components/question/question";
import { setData } from "../../../handlers/passDataBetweenPages";

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
  const router = useRouter();
  const { id } = router.query;
  setData(data);
  return (
    <>
      {/* {data.questions.map((element, index) => { */}
      {/* return ( */}
      <Question key={1} index={1} questionItem={data.questions[0]} />
      {/* ); */}
      {/* })} */}
    </>
  );
};

export default Chapters;
