import react from "react";
import style from "./question.module.scss";

const Answer = ({ answer, correct, type, handler, transcodes, index }) => {
  const isCorrect = correct;
  const id = `question${index}`;
  const clickHandler = (e) => {
    handler(isCorrect);
    const item = document.getElementById(id);
    item.checked = true;
  };
  return (
    <div className={style.radioAnswerContainer} onClick={clickHandler}>
      <input
        type="radio"
        id={id}
        name="questionPMP"
        value={answer}
        className={style.radioAnswer}
        onChange={(e) => console.log(e)}
      />
      <label className={style.labelAnswer}>{answer}</label>
    </div>
  );
};

export default Answer;
