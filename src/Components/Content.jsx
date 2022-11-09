import React from "react";
import "../Cssfiels/Content.css";
import img from "../images/PNG.png";
import Typing from "react-typing-animation";
function Content() {
  return (
    <div>
      <div className="container">
        <div className="box">
          <div className="divforimage">
            <img
              className="image1"
              src={img}
              style={{
                height: "300px",
                width: "300px ",
                borderRadius: "50%",
              }}
            ></img>
          </div>
        </div>

        <div className="box">
          <div className="content">
            <h3>HI THERE !</h3>
            <h1>
              I'M A
              <Typing loop="true">
                <Typing.Speed ms={50} />
                <span style={{ color: "#72b626" }}>Web Developer</span>
                <Typing.Delay ms={1000} />
                <Typing.Backspace count={20} />
                <span style={{ color: "#72b626" }}>Programmer</span>
                <Typing.Delay ms={1000} />
                <Typing.Backspace count={20} />
                <span style={{ color: "#72b626" }}>Snowboarder</span>
                <Typing.Delay ms={1000} />
                <Typing.Backspace count={20} />
              </Typing>
            </h1>
            <div className="containerr">
              <p className="typed-out" style={{ fontSize: "20px" }}>
                A Geology Teacher making unique web apps and designs I strives
                to build immersive and beautiful web applications through
                carefully crafted code and user-centric design.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Content;
