import React, { Component } from 'react';
import Todo from './todo.component';
import TodoForm from './TodoForm.components';
import "./TodoList.css";




class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        };
        this.create = this.create.bind(this);
        this.remove = this.remove.bind(this);
        this.update = this.update.bind(this);
        this.toggleComplete = this.toggleComplete.bind(this);
        
    }
    create(newTodo) {
        this.setState({
            todos: [...this.state.todos, newTodo]
        })
    }

    remove(id) {
        this.setState({
            todos: this.state.todos.filter(t => t.id !== id )
        })
    }

    update(id, updatedTask) {
        const updatedTodos = this.state.todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, task: updatedTask }
            } else {
                return todo;
            }
         
        });
        this.setState({todos: updatedTodos})
    }

    toggleComplete(id) {
        const updatedTodos = this.state.todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed }
            } else {
                return todo;
            }
         
        });
        this.setState({todos: updatedTodos})
    }
    render() {
        const todo = this.state.todos.map(todo => {
            return <Todo
                key={todo.id}
                id={todo.id}
                task={todo.task}
                completed={todo.completed}
                removeTodo={this.remove}
                updateTodo={this.update}
                toggleTodo={this.toggleComplete}
            />
        })
        return (
            <div className="TodoList">
                <h1>React Todo <span>simple react todo-list</span></h1>
                <ul>{todo}</ul>
                <TodoForm createTodo={this.create} />
            </div>
        )
    }
}

export default TodoList;