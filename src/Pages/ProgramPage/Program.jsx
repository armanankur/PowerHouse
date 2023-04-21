import React from "react";
import { useState, useEffect } from "react";
import style from "./Program.module.css";
import img1 from "./ProgramPageImages/img1.jpg"
import img2 from "./ProgramPageImages/img2.jpg";
import img3 from "./ProgramPageImages/img3.jpg";
import img4 from "./ProgramPageImages/img4.jpg";
import img5 from "./ProgramPageImages/img5.jpg"
import img6 from "./ProgramPageImages/img6.jpg"
import img7 from "./ProgramPageImages/img7.jpg"

const Program = () => {
  const [image, setImage] = useState(0);
  const [headings, setHeadings] = useState(0);
  let img = [img1, img2, img3, img4,img5,img6,img7];
  let heading = ["Crunch", "Yoga", "Aerobic", "Flexibility","Zumba","Squat","Weight Lifting",];


  useEffect(() => {
    const interval = setInterval(() => {
      setImage((image + 1) % img.length);
      setHeadings((headings + 1) % heading.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [image, headings]);

  return (
    <div className={style.box}>
      <div className={style.innerBox2}>
        <h2 className={style.h2}>{heading[headings]}</h2>
        <img src={img[image]} alt="error" className={style.img} />
      </div>
    </div>
  );
};

export default Program;
