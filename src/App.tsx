import React from "react";
import "./App.css";
import TextInput from "./TextInput/TextInput.tsx"

function App() {
  return (
    <div className="App">
      <TextInput label="name" placeholder="enter name" backgroundColor="pink" />
      <TextInput label="address" placeholder="enter address " backgroundColor="green" />
    </div>
  );
}

export default App;
