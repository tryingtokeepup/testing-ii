import React from 'react';

const Display = props => {
  const { balls, strikes } = props;
  return (
    <>
      <h3>Count</h3>
      <div>
        {balls} balls {strikes} strikes
      </div>
      <div>Make some buttons on the dashboard!</div>
    </>
  );
};

export default Display;
