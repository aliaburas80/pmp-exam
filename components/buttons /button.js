import Link from "next/link";
import React from "react";
import btnStyle from "./button.module.scss";
const Button = (props) => {
  const { label, classes, action, id, url = null } = props;

  let styles = "";
  switch (classes) {
    case "homeStartBtn":
      styles = btnStyle.homeStartBtn;
      break;
    case "questionsType":
      styles = btnStyle.questionsType;
      break;
    case "questionsList":
      styles = btnStyle.questionsList;
      break;
    case "btnQuestionEnd":
      styles = btnStyle.btnQuestionEnd;
      break;
    default:
      styles = btnStyle.btnQuestionNave;
      break;
  }

  const btnWithUrl = () => (
    <Link href={url}>
      <div id={id} className={`${btnStyle.btn} ${styles}`} onClick={action}>
        <a className={btnStyle.btnURL}> {label} </a>
      </div>
    </Link>
  );

  const btn = () => (
    <div id={id} className={`${btnStyle.btn} ${styles}`} onClick={action}>
      {label}
    </div>
  );

  return url ? btnWithUrl() : btn();
};

export default Button;
