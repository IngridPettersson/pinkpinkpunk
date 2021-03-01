import React from 'react';

export function AddComment(props) {
  return (
    <ul>
      {props.items && props.items.map(item => (
        <li key={item.id}>{item}</li>
      ))}
    </ul>
  );
}