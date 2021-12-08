import React from "react";
import "../App.css";
import SendMail from "./SendMail";

function DonatePrize() {
  return (
    <>
      <div className="donate-request-container">
        <h2 className="donate-prize-header">
          Want to donate a raffle prize? Send us an email!
        </h2>
        <div>
          <SendMail
            className="button money-button"
            label="Email Us!"
            mailto="mailto:harmonyfarmsanctuaryvt@gmail.com"
          />
        </div>
      </div>
    </>
  );
}

export default DonatePrize;
