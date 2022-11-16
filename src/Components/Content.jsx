import React from "react";
import "../Cssfiels/Content.css";
import img from "../images/PNG.png";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
// import Typing from "react-typing-animation";
import Typed from "react-typed";

function Content() {
  const navigate = useNavigate();
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
              I'M A {""}
              <br />
              {/* <Typing loop="true">
                <Typing.Speed ms={50} />
                <span style={{ color: "#72b626" }}>Pharaonic Researcher</span>
                <Typing.Delay ms={1000} />
                <Typing.Backspace count={20} />
                <span style={{ color: "#72b626" }}>Geology Teacher</span>
                <Typing.Delay ms={1000} />
                <Typing.Backspace count={20} />
                <span style={{ color: "#72b626" }}>Geographer</span>
                <Typing.Delay ms={1000} />
                <Typing.Backspace count={20} />
              </Typing> */}
              <Typed
                className="h11"
                style={{ color: "#72b626" }}
                strings={[
                  "Geographer",
                  "Geology Teacher",
                  "Pharaonic Researcher",
                ]}
                typeSpeed={150}
                backSpeed={100}
                loop
              />
            </h1>
            <div className="containerr">
              <p className="typed-out" style={{ fontSize: "20px" }}>
                A Geology Teacher making unique web apps and designs I strives
                to build immersive and beautiful web applications through
                carefully crafted code and user-centric design.
              </p>
            </div>
            <Stack spacing={2} direction="row">
              {/* <Button variant="text">Text</Button> */}
              <Button
                style={{
                  borderRadius: "1em",
                  height: "40px",
                  width: "200px",
                  color: "white",
                  backgroundColor: "#72b626",
                }}
                variant="contained"
              >
                More About Me
              </Button>
              <Button
                onClick={() => {
                  navigate("/profile");
                }}
                style={{
                  borderRadius: "1em",
                  height: "40px",
                  width: "200px",
                  color: "white",
                  borderColor: "#72b626",
                }}
                variant="outlined"
              >
                portfolio
              </Button>
            </Stack>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Content;
