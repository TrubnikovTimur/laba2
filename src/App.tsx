import React from 'react';
import './App.css';
import MyName from "./Components/MyName/MyName";
import Counter from "./Components/Counter/Counter";
import ToDoList from "./Components/ToDoList/ToDoList";
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
function App() {
  return (
    <div className="App">
          <TextField id="standard-basic" label="Standard" variant="standard" />
          <Checkbox {...label} disabled />
    </div>
  );
}

export default App;
