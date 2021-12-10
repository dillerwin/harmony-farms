import React from "react";
import JotformEmbed from 'react-jotform-embed';
import "../VolunteerWaiver.css";

function ContactEmbed() {
  return (
  <div id="embed">
       <JotformEmbed src="https://form.jotform.com/213435178958063" />
  </div>
  );
}

// Exports ContactEmbed function to be used by other components
export default ContactEmbed;