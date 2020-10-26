import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const tasks = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false,
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false,
  },
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      tasks: tasks,
    };
  }

  handleToggleItem = (taskId) => {
    this.setState({
      tasks: this.state.tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, completed: !task.completed };
        } else {
          return task;
        }
      }),
    });
  };

  handleAddItem = (task) => {
    this.setState({
      tasks: [
        ...this.state.tasks,
        {
          task: task,
          id: new Date(),
          completed: false,
        },
      ],
    });
  };

  clearTasks = () => {
    this.setState();
  };

  render() {
    return (
      <div className='App'>
        <div className='header'>
          <h2>Matty's Todo App</h2>
        </div>
        <TodoForm handleAddItem={this.handleAddItem} handleClearTasks={this.clearTasks}/>
        <TodoList tasks={this.state.tasks} handleToggleItem={this.handleToggleItem}/>
      </div>
    );
  }
}

export default App;
