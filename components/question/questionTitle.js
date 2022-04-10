import react from "react";
import style from "./question.module.scss";

const QuestionTitle = ({ questionTitle, index }) => {
  return <div className={style.title}>{`Q${index}) ${questionTitle}`}</div>;
};

export default QuestionTitle;
