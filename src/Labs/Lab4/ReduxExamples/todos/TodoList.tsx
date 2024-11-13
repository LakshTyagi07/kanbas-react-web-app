import { useSelector } from "react-redux";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todos } = useSelector((state: any) => state.todosReducer);
  
  return (
    <div id='wd-todo'>
      <h2>Todo List</h2>
      <ul className="list-group w-25">
        <TodoForm />

        {todos.map((todo: any) => (
          <TodoItem todo={todo} />
        ))}
      </ul>
      <hr/>
    </div>
  );
};

export default TodoList;