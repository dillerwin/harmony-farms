import React, { useState } from "react";

function RaffleWinner(props) {
  // variable declarations
  let answerInput = document.getElementById("name-input");
  let nameInput = document.getElementById("number-input");

  // let [winnerName, setWinnerName] = useState("");
  let winnerName;
  let donor;
  let chosenWinner;
  let contributors = [];
  let donorName = "";
  let donorAmount = "";
  let [winner, setWinner] = useState("");

  function pushWinner(name) {
    return fetch("/storeRaffleWinner", {
      method: "post",
      body: JSON.stringify(name),
      headers: {
        "Content-type": "application/json",
      },
    });
  }

  // loops through names array for each donor

  function winnerPicker(evt) {
    evt.preventDefault();

    let number;
    let entries;

    let winnerPool = [];
    let i = 0;

    // let contributors = [allContributors];
    console.log(contributors.length);

    while (i < contributors.length - 1) {
      number = contributors[i].amount;
      entries = Math.floor(number / 5);
      let entryPush = 0;

      // adds multiple entries for each $5 donated
      if (entries > 1) {
        while (entryPush < entries) {
          winnerPool.push(contributors[i].name);
          entryPush++;
        }

        //   adds one entry if donation did not exceed $5
      } else {
        winnerPool.push(contributors[i].name);
        i++;
      }
      i++;
    }

    //   generates random number between one and num
    const randomNumber = (num) => {
      return Math.round(Math.random() * num - 1);
    };

    console.log(winnerPool.length);

    //   generates random number for use in picking winner
    let winnerIndex = randomNumber(winnerPool.length);

    //   picks winner based on random number generated used as index
    chosenWinner = winnerPool[winnerIndex];
    // setWinnerName(winner);
    setWinner(chosenWinner);
    pushWinner(winner);
    console.log(`${winner} is this weeks $5 raffle winner!`);
    console.log(winnerPool);
  }

  const submit = (evt) => {
    evt.preventDefault();

    logIt();
  };

  function logIt() {
    console.log(donorName);

    donor = { name: donorName, amount: donorAmount };
    contributors.push(donor);
    console.log(contributors);
    console.log(contributors.length);
  }

  // <form action="/storeRaffleWinner" method="post">
  //   <input name="name" style={{ display: "none" }} />
  // </form>;

  return (
    <>
      <div className="userGuessField">
        <form
          onSubmit={winnerPicker}
          action="/storeRaffleWinner"
          method="post"
          name="name"
          // value={winner}
        >
          <input
            id="name-input"
            className="donor-name-input"
            type="text"
            onChange={(evt) => {
              donorName = evt.target.value;
            }}
          />

          <input
            id="number-input"
            className="donor-amount-input"
            type="text"
            onChange={(evt) => {
              donorAmount = evt.target.value;
              donorAmount = +donorAmount;
            }}
          />
          <button onClick={submit}>Add Name</button>
          <input id="submit-donor" type="submit" />
        </form>
      </div>
      <h1>{winnerName} is this weeks $5 raffle winner!</h1>
    </>
  );
}

export default RaffleWinner;
