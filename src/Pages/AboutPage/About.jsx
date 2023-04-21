import React from 'react'
import style from "./About.module.css"

const About = () => {
  return (
    <div className={style.mainContainer}>
      <div className={style.Container1}>
        <div className={style.video}>
          <iframe   className={style.iframe} width="520" height="250" src="https://www.youtube.com/embed/lDECBe_lphU?mute=1&autoplay=1&loop=1&playlist=lDECBe_lphU" title="YouTube video player" frameborder="0" allowfullscreen></iframe>
        </div>
        <div>
          <h1 className={style.h1}>About Us</h1>
          <p className={style.box}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dolor animi repellendus corporis ea facilis et repellat! Nostrum voluptates expedita veniam odit quia! Vel maxime dignissimos temporibus, vitae praesentium qui.
          </p>
          <button className={style.btn}>Learn More</button>
        </div>
      </div>
      <div className={style.Container2}>
        <div className={style.lists}>
          <h1 className={style.h1}>Why Choose Us?</h1>
          <ul>
            <li className={style.points}>Consultation With Expert</li>
            <ol>
              <li className={style.pointsDec}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
            </ol>
            <li className={style.points}>Best Work Facilities</li>
            <ol>
              <li className={style.pointsDec}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
            </ol>
          </ul>
        </div>
        <div className={style.video}>
          <iframe  className={style.iframe} width="520" height="250" src="https://www.youtube.com/embed/fgxZM-44FzA?mute=1&autoplay=1&loop=1&playlist=fgxZM-44FzA" title="YouTube video player" frameborder="0" allowfullscreen controlled></iframe>
          {/* <video controls autoplay muted>
            <source src="https://www.youtube.com/embed/fgxZM-44FzA" type="video/mp4" />
            <p>Sorry, your broswer doesn't support embedded videos.</p>
          </video> */}
        </div>
      </div>
    </div>
  )
}

export default About;