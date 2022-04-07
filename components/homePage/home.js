import React from "react";
import { PAGES_NAME } from "../../utilis/constant";
import Button from "../buttons /button";
import style from "./home.module.scss";
const Home = () => {
  return (
    <div className={style.examContainer}>
      <div className={style.container}>
        <h1>Project Management Professional (PMP) exam</h1>
        <Button
          label="Start"
          classes="homeStartBtn"
          url={PAGES_NAME.QUESTIONS}
        />
      </div>
    </div>
  );
};

export default Home;
