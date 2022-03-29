import React from 'react'
import { useState } from "react";


function Icon() {
    const [task, setTask] = useState ({
        status: false,
    });
    function changeStatus() {
        setTask((previousState) => {
            return { ...previousState, status: true};
        });
    }
  return (
    <div>
      <h3><span>{task.status? "Išmokau" : "Mokausi"}
      </span></h3>
      <button onClick={changeStatus} type="button" className="btn btn-secondary">OK</button>
    </div>
  );
}

export default Icon