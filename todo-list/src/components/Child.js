import React from 'react';

const Child = ({ user }) => {
  return (
    <div>
      <h3>Child Component</h3>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
    </div>
  );
};

export default Child;
