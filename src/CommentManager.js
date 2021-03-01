import React from "react";
import "./App.css";
import { AddComment } from "./AddComment";
import { useState } from "react";

function CommentManager() {
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");
  // const [text2, setText2] = React.useState('')

  function handleChange(e) {
    setText(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (text.length === 0) {
      return;
    }
    const newItem = {
      text: text,
      id: Date.now(),
    };
    setItems(items.concat(newItem));
    setText("");
  }

  return (
    <div>
      <h3>COMMENTS</h3>
      <AddComment items={items} />
      <form onSubmit={handleSubmit}>
        <label htmlFor="new-todo">Write a comment about this dog</label>
        <input id="new-todo" onChange={handleChange} value={text} />
        <button className="btnImage">Add #{items.length + 1}</button>
      </form>
      <Example />
    </div>
  );
}

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button className="btnImage" onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default CommentManager;