import "./App.css";
import ToDoCard from "./ToDoCard/ToDoCard";
import { useState , useEffect } from "react";
import toast, { Toaster } from 'react-hot-toast';
import Swal from "sweetalert2";
function App() {
  const [todolist, setTodolist] = useState([]);

  const [newTask, setNewTask] = useState("");
  const [category , setCategory] = useState("")
  
  useEffect(() => {
    if (todolist.length === 0) return;
    localStorage.setItem("todolist", JSON.stringify(todolist));
  }, [todolist]);

  function deleteItem (index){
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
}).then((result)=>{
  if(!result.isConfirmed){
   return
  }
  setTodolist(todolist.filter((item, i) => i !== index))
  })
  }

  return (
    <div className="todolist-container">
      <h1 className="app-title">ToDoList📃</h1>
      <div className="todolist-box">
        {todolist.map((todoItem, i) => {
          const {task, category} = todoItem 
          return (
          <ToDoCard key={i} task={task} category={category} deleteItem={deleteItem} index={i} />
          )})}

        {
          todolist.length === 0 ?

            <p style={{ textAlign: "center", fontSize: "20px" }}>
              No tasks to show , please add new tasks
            </p>
            : null
        }

      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Add new task"
          className="input-box"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />

<select className="category-select" 
    value={category}
    onChange={(e) =>{setCategory(e.target.value)}}>

  <option value="">Select Category</option>
  <option value="personal">Personal</option>
  <option value="work">Work</option>
  <option value="study">Study</option>
  <option value="health">Health</option>
  <option value="other">Other</option>
</select>

        <button
          className="todolist-btn"
          onClick={() => {
            if (newTask === "") {
              toast.error("Please enter a task")
              return
            }

              if (category === ""){
                toast.error("Please select a category")
                return
              }

            setTodolist([...todolist, {task : newTask , category : category}])
            setNewTask("");
            setCategory("");
            toast.success('Task added successfully')
          }}> Add
        </button>
      </div>
      <Toaster />
    </div>
  );
}

export default App;


