import React, { Component } from 'react';
import NavbarFeature from './NavbarFeature';
import SideNavbar from './SideNavbar';
import Dashboard from './Dashboard'
import './App.css';
class App extends Component {
  state = {
    todos: []
  };

  async componentDidMount() {
    try {
      const res = await fetch('http://127.0.0.1:8000/api/');
      const todos = await res.json();
      // this.setState({
      //   todos
      // });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div style={{backgroundColor:' #3d4a56'}}>
       <NavbarFeature  />
       <SideNavbar />
       <Dashboard style={{backgroundColor:' #3d4a56'}} />
        {this.state.todos.map(item => (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <span>{item.description}</span>
          </div>

        ))}

      </div>
    );
  }
}

export default App;
