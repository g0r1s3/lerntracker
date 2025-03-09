import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get("http://127.0.0.1:5000/api/test")
      .then(response => setMessage(response.data.message))
      .catch(error => console.error("API Fehler:", error));
  }, []);

  return <h1>{message}</h1>;
}

export default App;

// Servus