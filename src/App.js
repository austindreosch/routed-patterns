import React from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';


import DogDetails from './components/DogDetails';
import DogList from './components/DogList';
import Nav from './components/Nav';

import duke from './img/duke.jpg';
import perry from './img/perry.jpg';
import tubby from './img/tubby.jpg';
import whiskey from './img/whiskey.jpg';

const dogs = [
  {
    name: "Whiskey",
    age: 5,
    src: whiskey,
    facts: [
      "Whiskey loves eating popcorn.",
      "Whiskey is a terrible guard dog.",
      "Whiskey wants to cuddle with you!"
    ]
  },
  {
    name: "Duke",
    age: 3,
    src: duke,
    facts: [
      "Duke believes that ball is life.",
      "Duke likes snow.",
      "Duke enjoys pawing other dogs."
    ]
  },
  {
    name: "Perry",
    age: 4,
    src: perry,
    facts: [
      "Perry loves all humans.",
      "Perry demolishes all snacks.",
      "Perry hates the rain."
    ]
  },
  {
    name: "Tubby",
    age: 4,
    src: tubby,
    facts: [
      "Tubby is really stupid.",
      "Tubby does not like walks.",
      "Angelina used to hate Tubby, but claims not to anymore."
    ]
  }
];


function App() {
  return (
    <Router>
        <Nav dogs={dogs}/>
        
        <Routes>
          <Route path="/dogs" element={<DogList dogs={dogs}/>} />
          <Route path="/dogs/:name" element={<DogDetails dogs={dogs}/>} />
          <Route path="*" element={<Navigate replace to="/dogs" />} />
        </Routes>
    </Router>
  );
}

export default App;
