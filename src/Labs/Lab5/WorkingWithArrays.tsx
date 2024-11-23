import React, { useState } from "react";
import * as client from "./client";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const API = `${REMOTE_SERVER}/lab5/todos`;

export default function WorkingWithArrays() {
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [todo, setTodo] = useState({
        id: "1",
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-09-09",
        completed: false,
    });

    const updateTodo = async (todo: any) => {
        try {
            await client.updateTodo(todo);
            setErrorMessage(null);
        } catch (error: any) {
            setErrorMessage(error.response.data.message);
        }
    };

    const deleteTodo = async (todo: any) => {
        try {
            await client.deleteTodo(todo);
            setErrorMessage(null);
        } catch (error: any) {
            console.log(error);
            setErrorMessage(error.response.data.message);
        }
    };

    return (
        <div id="wd-working-with-arrays">
            <h3>Working with Arrays</h3>
            {errorMessage && (
                <div id="wd-todo-error-message" className="alert alert-danger mb-2 mt-2">
                    {errorMessage}
                </div>
            )}
            
            <h4>Retrieving Arrays</h4>
            <a id="wd-retrieve-todos" className="btn btn-primary" href={API}>
                Get Todos
            </a>
            <hr/>

            <h4>Retrieving an Item from an Array by ID</h4>
            <input
                id="wd-todo-id"
                defaultValue={todo.id}
                className="form-control w-50"
                onChange={(e) => setTodo({ ...todo, id: e.target.value })}
            />
            <a
                id="wd-retrieve-todo-by-id"
                className="btn btn-primary float-end"
                href={`${API}/${todo.id}`}
            >
                Get Todo by ID
            </a>
            <hr/>

            <h4>Filtering Array Items</h4>
            <a
                id="wd-retrieve-completed-todos"
                className="btn btn-primary"
                href={`${API}?completed=true`}
            >
                Get Completed Todos
            </a>
            <hr/>

            <h4>Creating New Items in an Array</h4>
            <a
                id="wd-create-todo"
                className="btn btn-primary"
                href={`${API}/create`}
            >
                Create Todo
            </a>
            <hr/>

            <h3>Deleting from an Array</h3>
            <button
                className="btn btn-primary float-end"
                onClick={() => deleteTodo(todo)}
            >
                Delete Todo with ID = {todo.id}
            </button>
            <input
                defaultValue={todo.id}
                className="form-control w-50"
                onChange={(e) => setTodo({ ...todo, id: e.target.value })}
            />
            <hr/>

            <h3>Updating an Item in an Array</h3>
            <button
                className="btn btn-primary float-end"
                onClick={() => updateTodo(todo)}
            >
                Update Todo
            </button>
            <input
                defaultValue={todo.id}
                className="form-control w-25 float-start me-2"
                onChange={(e) => setTodo({ ...todo, id: e.target.value })}
            />
            <input
                defaultValue={todo.title}
                className="form-control w-50 float-start"
                onChange={(e) => setTodo({ ...todo, title: e.target.value })}
            />
            <br/><br/><hr/>

            <h3>Update Todo Status</h3>
            <a
                href={`${API}/${todo.id}/completed/${!todo.completed}`}
                className="btn btn-primary float-end"
            >
                Mark Todo {todo.completed ? "Incomplete" : "Complete"}
            </a>
            <input
                defaultValue={todo.id}
                className="form-control w-25 float-start me-2"
                onChange={(e) => setTodo({ ...todo, id: e.target.value })}
            />
            <div className="float-start mt-2">
                <label>
                    <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={(e) => setTodo({
                            ...todo,
                            completed: e.target.checked
                        })}
                    /> Completed
                </label>
            </div>
            <br/><br/><hr/>

            <h3>Update Todo Description</h3>
            <a
                href={`${API}/${todo.id}/description/${todo.description}`}
                className="btn btn-primary float-end"
            >
                Update Description
            </a>
            <input
                defaultValue={todo.id}
                className="form-control w-25 float-start me-2"
                onChange={(e) => setTodo({ ...todo, id: e.target.value })}
            />
            <input
                defaultValue={todo.description}
                className="form-control w-50 float-start"
                onChange={(e) => setTodo({
                    ...todo,
                    description: e.target.value
                })}
            />
            <br/><br/><hr/>
        </div>
    );
}