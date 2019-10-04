import React from 'react';

export default function Action({ action }) {
  return (
    <div>
      <h3>{action.description}</h3>
      <p>Notes: {action.notes}</p>
    </div>
  );
}
