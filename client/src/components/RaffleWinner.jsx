import React, { useState } from "react";

function RaffleWinner(props) {
  // variable declarations

  let donor;
  let chosenWinner;
  let contributors = [];
  let donorName = "";
  let donorAmount = "";
  let [winner, setWinner] = useState("???");

  // loops through names array for each donor

  function winnerPicker(evt) {
    evt.preventDefault();

    let number;
    let entries;

    let winnerPool = [];
    let i = 0;

    // let contributors = [allContributors];
    console.log(contributors.length);

    while (i < contributors.length) {
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
      return Math.round(Math.random() * num);
    };

    console.log(winnerPool.length);

    //   generates random number for use in picking winner
    let winnerIndex = randomNumber(winnerPool.length);

    //   picks winner based on random number generated used as index
    chosenWinner = winnerPool[winnerIndex];
    // setWinnerName(winner);
    setWinner(chosenWinner);
    console.log(chosenWinner);

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
    document.name.reset();
  }

  // <form action="/storeRaffleWinner" method="post">
  //   <input name="name" style={{ display: "none" }} />
  // </form>;

  return (
    <>
      <div className="userGuessField">
        <label for="donor-name">Contributor name</label>
        <label for="number-input">Amount donated</label>
        <form
          onSubmit={winnerPicker}
          action="/storeRaffleWinner"
          method="post"
          name="name"
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
            }}
          />
          <button onClick={submit}>Add Name</button>
          <input id="submit-donor" type="submit" />
        </form>

        <form id="winner-post" action="/storeRaffleWinner" method="post">
          <input name="name" style={{ display: "none" }} value={winner} />
          <input name="date" type="date" />
          <input type="submit" />
        </form>
      </div>
      <h1> {winner} is this weeks $5 raffle winner!</h1>
    </>
  );
}

export default RaffleWinner;
