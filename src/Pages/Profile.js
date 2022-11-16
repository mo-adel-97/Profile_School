import React from "react";
import Navbar from "../Components/Header";
import "../Cssfiels/Profile.css";
import Button from "@mui/material/Button";
import image from "../images/eslam.png";
import Footer from "../Components/Footer";
function Profile() {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("SamplePDF.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "EslamPDF.pdf";
        alink.click();
      });
    });
  };
  return (
    <div>
      <Navbar />
      <h2
        style={{
          color: "#555555",
          letterSpacing: "1.5px",
          wordSpacing: "2px",
          fontSize: "40px",
          fontFamily: "Poppins",
        }}
      >
        ABOUT <span style={{ color: "#72b626" }}> ME </span>{" "}
      </h2>
      <p class="hr-lines"> A GEOLOGY TEACHER MAKING UNIQUE WEB APPS </p>
      <br />
      <div className="ParentProfile">
        <div className="box1" style={{ textAlign: "right" }}>
          <img src={image} style={{ width: "500px", height: "500px" }}></img>
        </div>
        <div className="box2">
          <div className="box21">
            <ul
              style={{
                listStyleType: "none",
                textAlign: "start",
              }}
            >
              <li>
                <span style={{ fontSize: "17px", fontFamily: "cursive" }}>
                  {" "}
                  FirstName
                </span>{" "}
                <span style={{ paddingLeft: "40px", fontFamily: "cursive" }}>
                  Eslam
                </span>
              </li>
              <br />
              <li>
                <span style={{ fontSize: "17px", fontFamily: "cursive" }}>
                  LastName
                </span>{" "}
                <span style={{ paddingLeft: "40px", fontFamily: "cursive" }}>
                  El_Dsoky
                </span>
              </li>
              <br />
              <li>
                <span style={{ fontSize: "17px", fontFamily: "cursive" }}>
                  BirthDate{" "}
                </span>
                <span style={{ paddingLeft: "40px", fontFamily: "cursive" }}>
                  1998
                </span>
              </li>
              <br />
              <li>
                <span style={{ fontSize: "17px", fontFamily: "cursive" }}>
                  Nationality
                </span>{" "}
                <span style={{ paddingLeft: "40px", fontFamily: "cursive" }}>
                  Arabian
                </span>
              </li>
              <br />
              <li>
                <span style={{ fontSize: "17px", fontFamily: "cursive" }}>
                  Experience
                </span>{" "}
                <span style={{ paddingLeft: "40px", fontFamily: "cursive" }}>
                  5 years
                </span>
              </li>
              <br />
              <li>
                <span style={{ fontSize: "17px", fontFamily: "cursive" }}>
                  Address
                </span>{" "}
                <span style={{ paddingLeft: "50px", fontFamily: "cursive" }}>
                  Mansoura
                </span>
              </li>
              <br />
            </ul>
          </div>
          <div className="box21" style={{ marginLeft: "20px" }}>
            <ul
              style={{
                listStyleType: "none",
                textAlign: "start",
              }}
            >
              <li>
                <span style={{ fontSize: "17px", fontFamily: "cursive" }}>
                  {" "}
                  PhoneNum
                </span>{" "}
                <span style={{ paddingLeft: "40px", fontFamily: "cursive" }}>
                  +02 01274868294
                </span>
              </li>
              <br />
              <li>
                <span style={{ fontSize: "17px", fontFamily: "cursive" }}>
                  Email
                </span>{" "}
                <span style={{ paddingLeft: "40px", fontFamily: "cursive" }}>
                  eslam102@gmail.com
                </span>
              </li>
              <br />
              <li>
                <span style={{ fontSize: "17px", fontFamily: "cursive" }}>
                  Languages{" "}
                </span>
                <span style={{ paddingLeft: "40px", fontFamily: "cursive" }}>
                  Arabic/Language
                </span>
              </li>
              <br />
              <li>
                <span style={{ fontSize: "17px", fontFamily: "cursive" }}>
                  Nationality
                </span>{" "}
                <span style={{ paddingLeft: "40px", fontFamily: "cursive" }}>
                  Arabian
                </span>
              </li>
              <br />
              <li>
                <span style={{ fontSize: "17px", fontFamily: "cursive" }}>
                  Experience
                </span>{" "}
                <span style={{ paddingLeft: "40px", fontFamily: "cursive" }}>
                  5 years
                </span>
              </li>
              <br />
              <li>
                <span style={{ fontSize: "17px", fontFamily: "cursive" }}>
                  Address
                </span>{" "}
                <span style={{ paddingLeft: "50px", fontFamily: "cursive" }}>
                  Mansoura
                </span>
              </li>
              <br />
            </ul>
          </div>
          <Button
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
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
