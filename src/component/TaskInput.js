import React, { useState } from "react";
import "../App.css";

const TaskInput = () => {
  const [initial, setInitial] = useState("");
  const [data, setData] = useState([]);

  const getInput = (event) => {
    setInitial(event.target.value);
  };

  const getData = () => {
    if (!initial.trim()) {
      alert("Add Your Tasks!");
      return;
    }
    let store = [...data, initial];
    setData(store);
    setInitial("");
  };

  const deleteTask = (index) => {
    const newData = data.filter((_, i) => i !== index);
    setData(newData);
  };

  return (
    <div className="container-fluid">
      <div className="col-md-4 mt-2 offset-md-4 rounded todoInput">
        <h1 className="top_text pt-sans-bold">Simple Todo</h1>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Your Task"
            value={initial}
            onChange={getInput}
          />
          <button onClick={getData} className="btn custom-button">
            Create
          </button>
        </div>
        {data.map((curVal, index) => (
          <ul className="list-group mb-2 list" key={index}>
            <li className="list-group-item text-start">
              {curVal}
              <button onClick={() => deleteTask(index)} className="btn custom-button2 btn-sm float-end">
                Delete
              </button>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default TaskInput;
