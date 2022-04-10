import react from "react";
import { removeAllHtmlTags } from "../../handlers/removeHtmlTags";
import { ANSWERS_TYPE } from "../../utilis/constant";
import Answer from "./answer";
import style from "./question.module.scss";
import QuestonTitle from "./questionTitle";

const Question = ({ questionItem, index }) => {
    
  const checkAnswer = (isCorrect) => {
    console.log(isCorrect);
  };

  const answersNum = questionItem?.answers?.length;
  return (
    <div className={style.questionContainer}>
      <QuestonTitle
        index={index}
        questionTitle={removeAllHtmlTags(questionItem.question_title)}
        handler={checkAnswer}
      />
      {questionItem?.answers?.map((answerObj, index) => {
        return (
          <Answer
            index={index}
            type={
              answersNum > 4 ? ANSWERS_TYPE.RADIO : ANSWERS_TYPE.checkAnswer
            }
            correct={answerObj.is_correct == 0 ? false : true}
            answer={answerObj.answer}
            handler={checkAnswer}
            transcodes={answerObj.transcodes}
          />
        );
      })}
    </div>
  );
};
export default Question;
