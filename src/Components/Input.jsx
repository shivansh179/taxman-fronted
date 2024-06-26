import React from "react";
import { useState } from "react";
import axios from "axios";

const Input = () => {
  const [concern, setConcern] = useState("");

  const handleSubmit = async (e) => {
    console.log(concern);

    try {
      const response = await axios.post("https://taxman-backend.onrender.com", {
        concern, // Assuming this is the correct property name for your data
      });

      console.log("Data added successfully:", response.data); // Handle success

      // Optionally, clear the input field after successful submission
    } catch (error) {
      console.error("Error adding data:", error); // Handle error
    }
  };
  return (
    <div className="input">
      <h1 className="generate">Generate New Ticket</h1>
      <input
        type="text"
        className="input-box"
        placeholder="Write your concern here ..."
        value={concern}
        onChange={(e) => setConcern(e.target.value)}
      />
      <button className="submit" onClick={handleSubmit}>
        submit
      </button>
    </div>
  );
};

export default Input;
