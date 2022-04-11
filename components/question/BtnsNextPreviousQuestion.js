import react from "react";
import Button from "../buttons /button";
import style from "./BtnsNextPreviousQuestion.module.scss";

const BtnsNextPreviousQuestion = ({
  currentIndex,
  maxLength,
  setCurrentIndex,
  doFinishExam,
}) => {
  const nextQuestionHandler = (e) => {
    setCurrentIndex(currentIndex + 1);
  };

  const previousQuestionHandler = (e) => {
    setCurrentIndex(currentIndex - 1);
  };

  const finishExamQuestionHandler = (e) => {
    doFinishExam();
  };

  return (
    <div className={style.btnContainer}>
      {currentIndex !== 1 ? (
        <Button
          label="Previous"
          classes="btnQuestionNave"
          action={previousQuestionHandler}
          id="previouseQuestion"
        />
      ) : null}
      {currentIndex !== maxLength ? (
        <Button
          label="Next"
          classes="btnQuestionNave"
          action={nextQuestionHandler}
          id="nextQuestion"
        />
      ) : null}
      {currentIndex === maxLength ? (
        <Button
          label="Finish Exam"
          classes="btnQuestionEnd"
          action={finishExamQuestionHandler}
          id="finishExamQuestion"
        />
      ) : null}
    </div>
  );
};

export default BtnsNextPreviousQuestion;
