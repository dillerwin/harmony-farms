import React, { useState, useEffect } from "react";

function Winner(props) {
  const [newWinner, setNewWinner] = useState("");
  const [winnerDate, setWinnerDate] = useState("");

  useEffect(() => {
    fetch("/getRaffleWinner")
      .then((res) => res.json())
      .then((winner) => {
        let winnerData = winner;
        let position = winnerData.length - 1;
        setNewWinner(winnerData[position].name);
        setWinnerDate(winnerData[position].date);
      });
  }, []);

  return (
    <>
      <div className="winner-display">
        <h5 className="winner-header">This Week's Winner:</h5>
        <p className="winner-date-text">{winnerDate}</p>
        <h4 className="winner-name"> {newWinner}</h4>

        <div>
          <div id="intro-image-container">
            <img
              className="intro-image"
              src={require("../img/harmony-farms-llama.jpg").default}
            />
            <img
              className="intro-image"
              src={require("../img/harmony-farms-pig.jpg").default}
            />
            <img
              className="intro-image"
              src={require("../img/harmony-farms-sheep.jpg").default}
            />
          </div>
        </div>
      </div>
      <p className="thank-you-text">
        We Thank you for your continued support of the Sanctuary
      </p>
    </>
  );
}

export default Winner;
