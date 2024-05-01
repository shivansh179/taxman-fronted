import React, { useState } from "react";
import axios from "axios";

const AddData = () => {
  const [concern, setConcern] = useState("");

  const handleSubmit = async (e) => {
    console.log(concern);
    e.preventDefault();

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
    <div>
      <h1>Add Student</h1>
      <form onSubmit={handleSubmit} className="form">
        <div className="det">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={concern}
            onChange={(e) => setConcern(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
};

export default AddData;
