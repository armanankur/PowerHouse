import style from "./Training.module.css";
import React, { useRef } from "react";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import TrainerData from "./TrainerData";

const Training = () => {
  const parentRef = useRef(null);
  function scrollLeft() {
    parentRef.current.scrollBy({ top: 0, left: -200, behaviour: "smooth" });
  }
  function scrollRight() {
    parentRef.current.scrollBy({ top: 0, left: 200, behaviour: "smooth" });
  }
  return (
    <div
      className={style.mainContainer}>
      <div className={style.parentCarouselContainer}>
        <h1 className={style.heading1}>Meet Our Team</h1>
        <h5 className={style.heading2}>
          We are the team of experienced people, nutrition, sports and fitnees
          pattionate experts with talent and knowledge unsurpassed in the
          industry, Get to know us.{" "}
        </h5>
        <div className={style.childCarouselContainer}>
          <button onClick={scrollLeft} className={style.button1}>
            <AiOutlineArrowLeft />
          </button>
          <div className={style.parent} ref={parentRef}>
            {TrainerData.map((item, ind) => (
              <div key={ind} className={style.container}>
                <div className={style.imageContainer}>
                <img src={item.url} className={style.image}  alt="image_not_found"/>
                </div>
               
                <h3 className={style.names}>{item.name}</h3>
                <h5 className={style.job}>{item.job}</h5>
              </div>
            ))}
          </div>
          <button onClick={scrollRight} className={style.button2}>
            <AiOutlineArrowRight />
          </button>
        </div>
        <button className={style.wholeteam}>See the Whole Team</button>
      </div>
    </div>
  );
};

export default Training;
