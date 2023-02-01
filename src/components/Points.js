import React, { useState, useEffect } from "react";

function Points({ points }){
  const [currentPoints, setCurrentPoints] = useState();

  useEffect(() => {
    setCurrentPoints(points);
  }, [points]);

  return (
    <>
      <div>
        <div>
          Points: {currentPoints}
        </div>
      </div>
    </>
  );
}

export default Points;
