import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import $ from "jquery";
import React from "react";

function TasksComponent() {
  const [tasks, setTasks] = useState([]);
  const [allT, setAll] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = () => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
    setAll(storedTasks);
  };

  const updateLocalStorage = (updatedTasks) => {
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const AddTask = (event) => {
    event.preventDefault();
    let title = document.getElementById("TaskTitle").value;
    let details = document.getElementById("TaskDetails").value;
    let newTask = {
      id: Date.now(),
      title: title,
      description: details,
      isCompleted: false,
    };
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    setAll(updatedTasks);
    updateLocalStorage(updatedTasks);
    document.getElementById("TaskTitle").value = "";
    document.getElementById("TaskDetails").value = "";
  };

  $(".statusChange").on("click", function () {
    $(this).addClass("activeStatus").siblings().removeClass("activeStatus");
  });

  const activeTasks = () => {
    setTasks(allT.filter((task) => !task.isCompleted));
  };

  const completedTasks = () => {
    setTasks(allT.filter((task) => task.isCompleted));
  };

  const All = () => {
    setTasks(allT);
  };

  const MarkAsDone = (id) => {
    const updatedTasks = allT.map((task) =>
      task.id === id ? { ...task, isCompleted: true } : task
    );
    setTasks(updatedTasks);
    setAll(updatedTasks);
    updateLocalStorage(updatedTasks);
  };

  const Delete = (id) => {
    const updatedTasks = allT.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    setAll(updatedTasks);
    updateLocalStorage(updatedTasks);
  };

  return (
    <div className="TaskContainer">
      <header>To Do List</header>
      <br></br>
      <form className="AddTask form-group" onSubmit={AddTask}>
        <div className="form-group w-25">
          <label htmlFor="TaskTitle">Title</label>
          <input
            type="text"
            className="form-control"
            id="TaskTitle"
            placeholder="Enter Task Title"
            autocomplete="one-time-code"
          ></input>
        </div>
        <br></br>
        <div className="form-group w-25">
          <label htmlFor="TaskDetails">Details</label>
          <input
            type="text"
            className="form-control"
            id="TaskDetails"
            placeholder="Enter Task Details"
            autocomplete="one-time-code"
          ></input>
        </div>
        <br></br>
        <button type="submit" className="addTaskBtn btn btn-primary">
          Add Task
        </button>
      </form>
      <br></br>
      {tasks.length > 0 && (
        <div className="Tasks">
          <ul>
            {tasks.map((task, ind) => {
              return (
                <React.Fragment key={task.id}>
                  <li
                    className="Task"
                    style={{
                      textDecoration: task.isCompleted
                        ? "line-through"
                        : "none",
                      color: task.isCompleted ? "gray" : "black",
                    }}
                  >
                    <span>{task.title}</span>
                  </li>
                  <div className="detailsContainer">
                    <div
                      className={
                        task.isCompleted ? "detailsCompleted" : "details"
                      }
                    >
                      {task.description}
                    </div>
                    {!task.isCompleted && (
                      <button
                        className="btn btn-success"
                        onClick={() => MarkAsDone(task.id)}
                      >
                        Done
                      </button>
                    )}
                    <button
                      className={
                        task.isCompleted
                          ? "btn btn-danger ms-5"
                          : "btn btn-danger ms-2"
                      }
                      onClick={() => Delete(task.id)}
                    >
                      Delete
                    </button>
                  </div>
                  <hr></hr>
                </React.Fragment>
              );
            })}
          </ul>
        </div>
      )}
      <div className="status bg-info bg-gradient">
        <div className="count">
          <b>{tasks.length} Tasks Left</b>
        </div>
        <div className="status2">
          <div className="all activeStatus statusChange" onClick={All}>
            <b>All</b>
          </div>
          <div className="active statusChange" onClick={activeTasks}>
            <b>Active</b>
          </div>
          <div className="completed statusChange" onClick={completedTasks}>
            <b> Completed</b>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TasksComponent;
