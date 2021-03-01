import React from "react";
import { AddComment } from "./AddComment";
import "./App.css";
import { Box } from "./Box";
import CommentManager from "./CommentManager";
import { DogInfo } from "./DogInfo";
import dogs from "./Dogs";

export function App() {
  const greeting = "THIS IS";
  const name = 'TEAM "WEEKEND STARTS ON FRIDAY AT LUNCH"';
  const middleHeading = "PRESENTING";
  const subHeading = "a very unreliable and extraordinarily pinkish dog page";
  const today = new Date().toLocaleDateString();
  let dummyItems = [];
  return (
    <div className="App">
            
      <header className="App-header">
        <h3>
          {greeting} {name}
        </h3>
        <h2>{middleHeading}</h2>
        <h1>{subHeading}</h1>
      </header>
      <Box>
        <DogInfo dog={dogs[0]} />
        <CommentManager>
          <AddComment items={dummyItems} />
        </CommentManager>
        <DogInfo dog={dogs[1]} />
        <CommentManager>
          <AddComment items={dummyItems} />
        </CommentManager>
        <DogInfo dog={dogs[2]} />
        <CommentManager>
          <AddComment items={dummyItems} />
        </CommentManager>
        <DogInfo dog={dogs[3]} />
        <CommentManager>
          <AddComment items={dummyItems} />
        </CommentManager>
        <DogInfo dog={dogs[4]} />
        <CommentManager>
          <AddComment items={dummyItems} />
        </CommentManager>
        <DogInfo dog={dogs[5]} />
        <CommentManager>
          <AddComment items={dummyItems} />
        </CommentManager>
      </Box>
            <h2>- What's the date again?</h2>
      <p>{today}</p>
          
    </div>
  );
}

export default App;
