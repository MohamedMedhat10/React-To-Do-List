// import { useEffect, useState } from "react";
// import Axios from "axios";
// import "bootstrap/dist/css/bootstrap.css";
// import $ from "jquery";

// function Tasks() {
//   const [tasks, setTasks] = useState([]);
//   const [completedT, setCompleted] = useState([]);
//   const [activeT, setActive] = useState([]);
//   const [allT, setAll] = useState([]);
//   useEffect(() => {
//     fetch();
//   }, []);

//   const AddTask = () => {
//     let title = document.getElementById("TaskTitle").value;
//     let details = document.getElementById("TaskDetails").value;
//     let obj = {
//       title: title,
//       description: details,
//     };
//     Axios.post("http://localhost:8080/users/1/tasks", obj).then(() => {});
//   };

//   $(".statusChange").on("click", function () {
//     $(this).addClass("activeStatus").siblings().removeClass("activeStatus");
//   });

//   const activeTasks = () => {
//     setTasks(tasks.filter((task) => !task.isCompleted));
//   };
//   const completedTasks = () => {
//     setTasks(allT.filter((task) => task.isCompleted));
//   };
//   const All = () => {
//     fetch();
//   };

//   const fetch = () => {
//     Axios.get("http://localhost:8080/users/1").then((res) => {
//       setTasks([...res.data.taskList]);
//       setAll([...res.data.taskList]);
//     });
//   };

//   const MarkAsDone = (id) => {
//     Axios.put(`http://localhost:8080/users/tasks/${id}`).then((res) => {
//       fetch();
//     });
//   };

//   const Delete = (id) => {
//     Axios.delete(`http://localhost:8080/users/1/tasks/${id}`).then((res) => {
//       fetch();
//     });
//   };

//   return (
//     <div className="TaskContainer">
//       <header>To Do List</header>
//       <br></br>
//       <form className="AddTask form-group">
//         <div className="form-group">
//           <label htmlFor="TaskTitle">Title</label>
//           <input
//             type="text"
//             className="form-control"
//             id="TaskTitle"
//             placeholder="Enter Task Title"
//             required
//           ></input>
//         </div>
//         <br></br>
//         <div className="form-group">
//           <label htmlFor="TaskDetails">Details</label>
//           <input
//             type="text"
//             className="form-control"
//             id="TaskDetails"
//             placeholder="Enter Task Details"
//             required
//           ></input>
//         </div>
//         <br></br>
//         <button
//           type="submit"
//           onClick={AddTask}
//           className="addTaskBtn btn btn-primary"
//         >
//           Add Task
//         </button>
//       </form>
//       <br></br>
//       <div className="Tasks">
//         <ul>
//           {tasks.map((tasks, ind) => {
//             return (
//               <>
//                 <li
//                   className="Task"
//                   style={{
//                     textDecoration: tasks.isCompleted ? "line-through" : "none",
//                     color: tasks.isCompleted ? "gray" : "black",
//                   }}
//                 >
//                   <span>{tasks.title}</span>
//                 </li>
//                 <div className="detailsContainer">
//                   <div
//                     className={
//                       tasks.isCompleted ? "detailsCompleted" : "details"
//                     }
//                   >
//                     {tasks.description}
//                   </div>
//                   <button
//                     className="btn btn-success"
//                     onClick={() => MarkAsDone(tasks.id)}
//                   >
//                     Done
//                   </button>
//                   <button
//                     className="btn btn-danger"
//                     onClick={() => Delete(tasks.id)}
//                   >
//                     Delete
//                   </button>
//                 </div>
//                 <hr></hr>
//               </>
//             );
//           })}
//         </ul>
//         <div className="status">
//           <div className="count">{tasks.length} Tasks Left</div>
//           <div className="status2">
//             <div className="all activeStatus statusChange" onClick={All}>
//               All
//             </div>
//             <div className="active statusChange" onClick={activeTasks}>
//               Active
//             </div>
//             <div className="completed statusChange" onClick={completedTasks}>
//               Completed
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Tasks;
