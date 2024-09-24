import deleteIcon from "./trash.png";
import "./ToDoCard.css";

function ToDoCard({ index, task, category, deleteItem }) {
  const CATEGORY_EMOGI_MAP = {
    health: "🏥",
    study: "📚",
    work: "💼",
    personal: "🏠",
    others: "🗃️",
  };

  const CATEGORY_COLOURS = {
    health: "#6FCF97",
    study: "#56CCF2",  
    work: "#F2994A",   
    personal: "#BB6BD9", 
    others: "#828282",   
  };
  
  return (
    <div className="todo-card">
      {task}
      <span
        className="category"
        style={{ backgroundColor: CATEGORY_COLOURS[category] }}
      >
        {CATEGORY_EMOGI_MAP[category]} 
        {category}
      </span>
      <img
        src={deleteIcon}
        alt="delete"
        className="delete-icon"
        onClick={() => {
          deleteItem(index);
        }}
      />
    </div>
  );
}

export default ToDoCard;
