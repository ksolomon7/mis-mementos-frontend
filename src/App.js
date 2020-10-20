import React from 'react';
import Map from './Map';
import MemoryForm from './MemoryForm';
import MemoryContainer from './MemoryContainer'
import './App.css';

class App extends React.Component{

  // what do we want to send out
  state={
    users: []
  }


  componentDidMount(){
    fetch("http://localhost:3000/users")
    .then(resp=>resp.json())
    .then((arrayOfUsers)=>{
      this.setState({
        users:arrayOfUsers
      })
    })
}

//add memory to state
addMemorytoState=(addedMemory)=>{
  console.log(addedMemory)
}

  render(){
    console.log(this.state.users)
    return (
      <div>
         <MemoryForm addMemorytoState={this.state.memory}/>
         <MemoryContainer state={this.state}/>
        <Map/>
      </div>
    );
  }
}

export default App;
