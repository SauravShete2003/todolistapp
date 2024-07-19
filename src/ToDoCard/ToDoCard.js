import deleteIcon from "./trash.png"
import "./ToDoCard.css";
function ToDoCard({index , task , category , deleteItem}) {

  const CATEGORY_EMOGI_MAP = {
    health: "🏥",
    study: "📚",
    work: "💼",
    personal: "🏠",
    others : "🗃️"
  }
 
   
  const CATEGORY_COLOURS ={
    health: "#70db70",
    study: "#4d94ff",
    work: " #ffb366",
    personal: "#df80ff",
    others : "#9494b8"

  }
    return (
      <div className="todo-card">
        {task}
        <span className="category" style={
          {backgroundColor :CATEGORY_COLOURS[category] }
        }>
          {CATEGORY_EMOGI_MAP[category]}
          ({category})
          </span>
          <img src={deleteIcon} alt="delete" className="delete-icon" onClick={()=>{
            deleteItem(index)
          }}/>
      </div>
    );
  };
  
  export default ToDoCard;
