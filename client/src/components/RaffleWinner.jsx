import React, { useState } from "react";

function RaffleWinner(props) {
  // variable declarations

  let donor;
  let chosenWinner;
  let contributors = [];
  let donorName = "";
  let donorAmount = "";
  let [winner, setWinner] = useState("???");

  // loops through contributors array for each donor

  // Picks a random donor out of the array as a winner
  function winnerPicker(evt) {
    evt.preventDefault();

    // variable declarations
    let number;
    let entries;
    let winnerPool = [];
    let i = 0;

    // adds donor's name to contributors array one time for each $5 they donated
    while (i < contributors.length) {
      number = contributors[i].amount;
      entries = Math.floor(number / 5);
      let entryPush = 0;

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

    //   generates random number for use in picking winner
    let winnerIndex = randomNumber(winnerPool.length);

    //   picks winner based on random number generated used as index
    chosenWinner = winnerPool[winnerIndex];

    // setWinnerName(winner);
    setWinner(chosenWinner);

    console.log(winnerPool);
  }

  // Prevents defalt action of for submit and calls logIt function
  const submit = (evt) => {
    evt.preventDefault();
    logIt();
  };

  // Pushes donor object to the contributors array and resets the input field
  function logIt() {
    donor = { name: donorName, amount: donorAmount };
    contributors.push(donor);
    document.name.reset();
  }

  return (
    <>
      <div id="raffle-container">
        <h1 className="raffle-header-admin">Raffle Winner Picker</h1>
        <form
          onSubmit={winnerPicker}
          action="/storeRaffleWinner"
          method="post"
          name="name"
          id="raffle-form"
        >
          <div id="donor-name-container">
            <label className="raffle-label" for="donor-name">
              Contributor name:
            </label>
            <input
              id="name-input"
              className="donor-name-input"
              type="text"
              placeholder="Donor Name"
              onChange={(evt) => {
                donorName = evt.target.value;
              }}
            />
          </div>
          <div id="donor-amount-container">
            <label className="raffle-label" for="number-input">
              Amount donated:
            </label>
            <input
              id="number-input"
              className="donor-amount-input"
              type="number"
              placeholder="Donation Amount"
              onChange={(evt) => {
                donorAmount = evt.target.value;
              }}
            />
            <button id="donor-submit-button" onClick={submit}>
              Add Donor Info
            </button>
          </div>
          <input
            id="winner-pick-button"
            type="submit"
            value="Pick Raffle Winner"
          />
        </form>

        <form id="winner-post" action="/storeRaffleWinner" method="post">
          <input name="name" style={{ display: "none" }} value={winner} />
          <input className="winner-date" name="date" type="date" />
          <input
            id="winner-submit-button"
            type="submit"
            value="Post Winner to Site"
          />
        </form>
        <h1 className="current-winner-admin">
          {winner} is this weeks $5 raffle winner!
        </h1>
      </div>
    </>
  );
}

export default RaffleWinner;
