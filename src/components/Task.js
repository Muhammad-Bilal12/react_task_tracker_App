import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete ,onToggle}) => {
  return (
    <div className={`task ${task.reminder?'reminder': ""}`} onDoubleClick={()=>onToggle(task.id, task.reminder)}>
      <h3>
        {task.text}{" "}
        <FaTimes
          style={{ color: "red", cursor: "pointer", fontSize: 12 }}
          onClick={() => onDelete(task.id)}
          
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
