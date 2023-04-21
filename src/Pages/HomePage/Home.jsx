import { useEffect, useState } from "react";
import "./Home.css";
import img1 from "./HomePageImage/image1.jpg"
import img2 from "./HomePageImage/image2.jpeg"
import img3 from "./HomePageImage/image3.jpg"
import img4 from "./HomePageImage/image4.jpg"
import img5 from "./HomePageImage/image5.jpg"
import img6 from "./HomePageImage/image6.jpg"

const images =[img1,img2,img3,img4,img5,img6]
function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((index + 1) % images.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, [index]);

  return (
    <div className="imageContainer">
      <img src={images[index]} alt="Image not available" className="myImage" />
      <div className="imageText">
        <h1 style={{ color: "white" }}>
          Take Care of your <span style={{ color: "#689F38" }}>body.</span>
          <br /> Its the only place you <br />
          have to <span style={{ color: "red" }}>live.</span>
        </h1>
      </div>
    </div>
  );
}

export default Home;
