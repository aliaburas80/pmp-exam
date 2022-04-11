import axios from "axios";
import { useRouter } from "next/router";
import BtnsNextPreviousQuestion from "../../../components/question/BtnsNextPreviousQuestion";
import Question from "../../../components/question/question";
import { setData } from "../../../handlers/passDataBetweenPages";
import react, { useState } from "react";
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
  const maxQuestionLength = data.questions.length - 1;
  const [currentIndex, setIndexHandler] = useState(1);

  const setCurrentIndexHandler = (index) => setIndexHandler(index);

  const doFinishExam = (e) => {};

  setData(data);
  return (
    <>
      <Question
        key={currentIndex}
        index={currentIndex}
        questionItem={data.questions[currentIndex]}
      />
      <BtnsNextPreviousQuestion
        currentIndex={currentIndex}
        maxLength={maxQuestionLength}
        setCurrentIndex={setCurrentIndexHandler}
        doFinishExam={doFinishExam}
      />
    </>
  );
};

export default Chapters;
