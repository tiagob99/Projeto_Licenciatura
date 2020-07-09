import React from 'react';
import axios from 'axios';


export default class PersonList extends React.component{
    state={
      persons:[],
    };
  
  
      componentDidMount(){
      axios.get('https://projeto-licenciatura-6e421.firebaseio.com/.json').
      then(res=> {
      console.log(res);  
      this.setState({persons:res.data});
      });
    }
    render(){
        return(
            <ul>
                {this.state.persons.map(person=><li key={person.id}>{person.name}</li>)}
                </ul>
        )
    }
  }

