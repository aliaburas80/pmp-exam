import React from "react";
import { QUESTIONS } from "../../utilis/constant";
import Button from "../buttons /button";
import styles from "./questionsList.module.scss";
const QuestonsList = (props) => {
  const { questionType, domain, show } = props;
  const arrOfList = questionType
    ? QUESTIONS[questionType]
    : QUESTIONS.DOMAINS[domain];

  const questionListRender = () => (
    <div className={`${styles.listContainer} ${show?styles.visibel:''}`}>
      <ul>
        {arrOfList.map((item, index) => {
          return (
            <li key={`${index}_type_num${Math.trunc(Math.random() * 1000)}`}>
              <Button
                label={item}
                classes="questionsList"
                url={`/questions/${questionType.toLowerCase()}/${index+1}`}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
  return questionListRender();
};
export default QuestonsList;
