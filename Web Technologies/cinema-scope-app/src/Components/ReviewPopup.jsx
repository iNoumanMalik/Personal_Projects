import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";

export default function ReviewPopup() {
  const [showPopup, setShowPopup] = useState(false); // Manages pop-up visibility
  const [review, setReview] = useState(""); // Stores the review input

  // Function to handle review submission
  const handleReviewSubmit = () => {
    console.log("Review Submitted:", review); // Logs the review
    setShowPopup(false); // Closes the pop-up
    setReview(""); // Clears the input field
  };

  return (
    <div>

      <button className="write-review" style={{marginTop:'10px'}} onClick={() => setShowPopup(true)}>Write a Review</button>

  
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
          <h2>Write a Review</h2>
            <textarea
              value={review}
              onChange={(e) => setReview(e.target.value)}
              placeholder="Write your review here..."
              rows="5"
              cols="40"
              style={{ resize: "none" }}
            />
            <br />
            <button onClick={handleReviewSubmit}>Submit</button>
            <button onClick={() => setShowPopup(false)}>Cancel</button>
          </div>
        </div>
      )}

      </div>
  )}