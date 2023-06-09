import React, { useState } from "react";

export default function About(props) {

  // const [myStyle, setMyStyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  //  });
  let myStyle = {
    color : props.mode ==='dark'?'white': '#042743',
    backgroundColor: props.mode ==='dark'?'rgb(36 74 104)': 'white'
  }

  return (
    <>
      <div className="container" >
        <h1 className="my-3" style={{color
        :props.mode ==='dark'?'white':'#042743'}}>About us</h1>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                style={myStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <strong> Analyze Your Text</strong> 
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                style={myStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <strong>Browser Compatible</strong> 
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                TextUtils is a free character counter & word count staticstics for a given text. TextUtils reports the number of words and character. Thus it is suitable for writing text with/ charccter limit.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                style={myStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
               <strong>Browser Compatible</strong> 
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                This word counter software in any web browsers such as chrome, Firfox, Internet Explorer, Safari, Opera. It suits to count character in facebook, blog, books, excel document, pdf document, eassays, etc. 
              </div>
            </div>
          </div>
        </div>
        {/* <div className="container my-3">
          <button
            type="button"
            onClick={toggleStyel}
            className="btn btn-primary"
          >
            {btnText}{" "}
          </button>
        </div> */}
      </div>
    </>
  );
}
