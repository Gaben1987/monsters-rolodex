
import "./App.css";
import React, { Component } from "react";
import {CardList} from "./components/card-list/card-list.component"

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        
      ],
      searchField:"",
    };
  
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(users=>this.setState({monsters:users}))
  }

  render() {
    const {monsters,searchField}=this.state
   // const monsters=this.state.monsters
   // const searchField=this.state.searchField

   const filterMonsters= monsters.filter(monster=>monster.name.toLowerCase().includes(searchField.toLocaleLowerCase()))

    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <input type='search'  
        placeholder="search monstres"
        onChange={e=>this.setState({searchField:e.target.value},()=>{console.log(this.state)})}/>
        <CardList monsters={filterMonsters} name='Zsofi'></CardList>
        
      </div>
    );
  }
}

export default App;
