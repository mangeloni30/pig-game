import React, { useState, useEffect } from "react";

function Points({ points }){
  const [currentPoints, setCurrentPoints] = useState();

  useEffect(() => {
    setCurrentPoints(points);
  }, [points]);

  console.log("currentPoints ", currentPoints);
  return (
    <>
      <div>
        Current
        <div>
          {currentPoints}
        </div>
      </div>
    </>
  );
}

export default Points;
