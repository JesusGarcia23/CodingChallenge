import React from 'react'

const Form = (props) => {
    const {fullName, email, projectRepo, projectUrl} = props.allInfo
    return(
        <div> 
        <form>
        <input type='text' name='fullName' value={fullName} onChange={e => props.updateInput(e)} placeholder='FULL NAME'></input>
        <input type='email' name='email' value={email} onChange={e => props.updateInput(e)} placeholder='EMAIL'></input>
        <input type='text' name='projectRepo' value={projectRepo} onChange={e => props.updateInput(e)} placeholder='PROJECT REPO'></input>
        <input type='text' name='projectUrl' value={projectUrl} onChange={e => props.updateInput(e)} placeholder='PROJECT URL'></input>
        <div>
        <label>USING BEST PRACTICES FOR OOP:</label><input type='number' name='bestpracticeOOP' onChange={e => props.updateInput(e)}></input>
        <label>MODULAR DEVELOPMENT:</label><input type='number' name='modularDevelopment' onChange={e => props.updateInput(e)}></input>
        <label>FULL STACK WORKFLOW UNDERSTANDING:</label><input type='number' name='fulWorkUnderstanding' onChange={e => props.updateInput(e)}></input>
        <label>TESTING:</label><input type='number' name='testing' onChange={e => props.updateInput(e)}></input>
        <label>DATABASE KNOWLEDGE:</label><input type='number' name='databaseKnowledge' onChange={e => props.updateInput(e)}></input>
        <label>DEBUGGING:</label><input type='number' name='debugging' onChange={e => props.updateInput(e)}></input>
        <label>PROBLEM SOLVING SKILLS:</label><input type='number' name='probSolvingSkills' onChange={e => props.updateInput(e)}></input>
        <label>JAVASCRIPT:</label><input type='number' name='javascript' onChange={e => props.updateInput(e)}></input>
        <label>HTML:</label><input type='number' name='html' onChange={e => props.updateInput(e)}></input>
        <label>CSS:</label><input type='number' name='css' onChange={e => props.updateInput(e)}></input>
        <label>WORKING ON A TEAM:</label><input type='number' name='workingTeam' onChange={e => props.updateInput(e)}></input>
        <label>SELF MOTIVATION:</label><input type='number' name='selfMotivation' onChange={e => props.updateInput(e)}></input>
        <label>COMMUNICATIONS SKILLS:</label><input type='number' name='communicationSkills' onChange={e => props.updateInput(e)}></input>
        <label>YOUR OWN ENERGY LEVEL:</label><input type='number' name='ownEnergyLvl' onChange={e => props.updateInput(e)}></input>
        <label>INTELLIGENCE / APTITUDE:</label><input type='number' name='intAptitude' onChange={e => props.updateInput(e)}></input>
        </div>
        <button>SUBMIT</button>
        </form>
        </div>
    )
}

export default Form