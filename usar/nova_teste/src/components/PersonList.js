import React from 'react';
import axios from 'axios';



export default class PersonList extends React.Component{
    state={
      persons:[],
    };
  
  
      componentDidMount(){
      axios.get('https://projeto-licenciatura-6e421.firebaseio.com/.json').
      then(res=> {
      console.log(res);  
      this.setState({persons:res.data});

      
      // console.log(this.state.persons.map(person=><li key={person.uid}>{person.name}</li>));

      });
    }
    render(){
        return(
            <ul>
                {/* { this.state.persons.map(person=><li key={person.uid}>{person.name}</li>)} */}
            </ul>
        )
    }
  }

