import React, { useState } from "react";
import data from "./DummyData/data";

function Accordian() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [multiSelection, setMultiSelection] = useState(false);
  const [mulitpleId, setMulitpleId] = useState([]);
  const [buttonState, setButtonState] = useState(false);
  const buttonText = 'On';

  const handleSingleSelection = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleMultiSelection = (index) => {
    let copyMultiple = [...mulitpleId];
    const findIndexOfCurrentId = copyMultiple.indexOf(index);
    console.log(findIndexOfCurrentId);
    if (findIndexOfCurrentId === -1) {
      copyMultiple.push(index);
    } else {
      copyMultiple.splice(findIndexOfCurrentId, 1);
    }
    setMulitpleId(copyMultiple);
    console.log(copyMultiple);
  };

  return (
    <div className="accordian">
      <button
        style={
          buttonState
            ? { backgroundColor: "orange" }
            : { backgroundColor: "black", color: 'white' }
        }
        className="btn"
        onClick={() => {
          setMultiSelection(!multiSelection);
          setButtonState(!buttonState);
        }}
      >
        Multi Selection {buttonState && buttonText}
      </button>
      {data.map((item, index) => (
        <div key={index} className="qna">
          <p
            className="question"
            onClick={() =>
              multiSelection
                ? handleMultiSelection(index)
                : handleSingleSelection(index)
            }
          >
            {item.question}
          </p>
          {multiSelection
            ? mulitpleId.indexOf(index) !== -1 && (
                <p className="answer">{item.answer}</p>
              )
            : activeIndex === index && <p className="answer">{item.answer}</p>}
        </div>
      ))}
    </div>
  );
}

export default Accordian;
