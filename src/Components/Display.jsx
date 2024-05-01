import React, { useState, useEffect } from "react";
import axios from "axios";

const Display = () => {
  const [users, setUsers] = useState([]);
  const [count, setCount] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://taxman-backend.onrender.com/getUsers"
        );
        setUsers(response.data);
        setCount(count + 1);
        console.log(count);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="Add Data">
      <h1 className="recent">Recent concerns:</h1>
      {users.length > 0 ? (
        // Check if users array has data before mapping

        users.map((user) => (
          <div className="detail" key={user._id}>
            <div className="personal">
              <div className="concern-detail">
                <span className="concern">Concern: </span>
                <p className="p">{user.concern}</p>
              </div>
              <br />
            </div>
          </div>
        ))
      ) : (
        <p className="no">No students yet.</p>
      )}
    </div>
  );
};

export default Display;
