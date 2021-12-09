
import React from "react";
import JotformEmbed from 'react-jotform-embed';
import "../VolunteerWaiver.css";

function Embed() {
  return (
  <div id="embed">
       <JotformEmbed src="https://form.jotform.com/213396137080050" />
  </div>
  );
}

// Exports Embed function to be used by other components
export default Embed;
