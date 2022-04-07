import React, { useState } from "react";
import Button from "../../components/buttons /button";
import QuestonsList from "../../components/questionsList/questionsList";
import { QuestionType } from "../../utilis/constant";
import styles from "./questionList.module.scss";
// import chapter1 from "../../public/data/Chapters/1.json"
const exams = () => {
  // console.log(chapter1.questions[0].question_title)

  const [openChapters, openChaptersHandler] = useState(false);
  const [openDomains, openDomainsHandler] = useState(false);
  const [openExams, openExamsHandler] = useState(false);

  const hideAll = () => {
    openChaptersHandler(false);
    openDomainsHandler(false);
    openExamsHandler(false);
  };

  const openSection = (section) => {
    hideAll();
    switch (section.target.id) {
      case QuestionType.CHAPTERS:
        openChaptersHandler(!openChapters);
        break;
      case QuestionType.DOMAINS:
        openDomainsHandler(!openDomains);
        break;
      case QuestionType.EXAMS:
        openExamsHandler(!openExams);
        break;
    }
  };

  return (
    <div className={styles.questionsContainer}>
      <h1 className={styles.questionsTitle}>You can chose question by...</h1>
      <div className={styles.questionsBtnContainer}>
        <Button
          id={QuestionType.CHAPTERS}
          label="Chapters"
          classes="questionsType"
          action={openSection}
        />
        <QuestonsList
          questionType={QuestionType.CHAPTERS}
          show={openChapters}
        />
        <Button
          id={QuestionType.DOMAINS}
          label="Domains"
          classes="questionsType"
          action={openSection}
        />
        <QuestonsList questionType={QuestionType.DOMAINS} show={openDomains} />
        <Button
          id={QuestionType.EXAMS}
          label="Exams"
          classes="questionsType"
          action={openSection}
        />
        <QuestonsList questionType={QuestionType.EXAMS} show={openExams} />
      </div>
    </div>
  );
};

export default exams;
