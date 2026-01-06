import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidV4 } from "uuid";

const App = () => {
  const [text, setText] = useState("");

  const data = useSelector((store) => {
    return store;
  });
  const dispatch = useDispatch();

  // add new item to the store
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "add",
      payload: {
        id: uuidV4(),
        text,
        isCompleted: false,
      },
    });
    setText("");
  };
  // update item in the store
  const handleUpdate = (id) => {
    dispatch({ type: "update", payload: { id } });
  };
  // delete item in the store
  const handleDelete = (id) => {
    dispatch({ type: "delete", payload: { id } });
  };

  return (
    <div className="todos-bg-container">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="todos-heading">Todos </h1>
            <h1 className="create-task-heading">
              Create<span className="create-task-heading-subpart">Task</span>
            </h1>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                className="todo-user-input"
                placeholder="What needs to be done?"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <button type="submit" className="button">
                Add
              </button>
            </form>
            <h1 className="todo-items-heading">
              My <span className="todo-items-heading-subpart">Tasks</span>
            </h1>
            <ul className="todo-items-container">
              {data &&
                data.map((eachTodo) => {
                  return (
                    <li
                      id={eachTodo.id}
                      className="todo-item-container d-flex flex-row"
                      key={eachTodo.id}
                    >
                      <input
                        readOnly
                        checked={eachTodo.isCompleted}
                        onClick={() => {
                          handleUpdate(eachTodo.id);
                        }}
                        type="checkbox"
                        className="checkbox-input"
                      />
                      <div className="label-container d-flex flex-row">
                        <label
                          onClick={() => {
                            handleUpdate(eachTodo.id);
                          }}
                          // htmlFor=""

                          className={`checkbox-label ${
                            eachTodo.isCompleted && "checked"
                          }`}
                        >
                          {eachTodo.text}
                        </label>
                        <div
                          className="delete-icon-container"
                          onClick={() => handleDelete(eachTodo.id)}
                        >
                          <i className="far fa-trash-alt delete-icon"></i>
                        </div>
                      </div>
                    </li>
                  );
                })}
            </ul>
            <button
              className="button"
              onClick={() => {
                console.log("save btn clicked");
              }}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
