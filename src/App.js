import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Components/Form';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      fullName:'',
      email:'',
      projectRepo:'',
      projectUrl: '',
      bestpracticeOOP: 0,
      modularDevelopment: 0,
      fulWorkUnderstanding: 0,
      testing: 0,
      databaseKnowledge: 0,
      debugging: 0,
      probSolvingSkills: 0,
      javascript: 0,
      html: 0,
      css: 0,
      workingTeam: 0,
      selfMotivation: 0,
      communicationSkills: 0,
      ownEnergyLvl: 0,
      intAptitude: 0
    }
  }

  handleSubmit = () => {

  }

  updateInput = (e) => {
    e.preventDefault();
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    })

  }


  render(){
  return (
    <div className="App">
    <Form allInfo={this.state} updateInput={this.updateInput} handleSubmit={this.handleSubmit}/>
    </div>
  );
  }
}

export default App;
