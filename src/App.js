
import React,{Component} from "react";
import './App.css';
import Header from "./Components/Header";
import Home from "./Components/Home";
import Preview from "./Components/Preview";
import Add from "./Components/Add";
import Login from "./Components/Login";
import Logout from "./Components/Logout";
import Question from "./Components/Question";
import Error from "./Components/Error";
import Leader from "./Components/Leader";
import User from "./Components/User";
import * as action from "./actions"
import {connect} from "react-redux";
import {BrowserRouter,Route,Switch} from "react-router-dom";



class App extends Component {
  state={
    view:"unanswered"
  }


   view=event=>{
     this.setState({view:event.target.innerText.toLowerCase()})
  }
  componentDidMount(){
    this.props.dispatch(action.initialData())
  }

 render(){
   let users=[];
   let questions;
   
 
   if(this.props.users){
    users=  Object.values(this.props.users);
  
   }
   
   if(this.props.questions){
    questions=  Object.values(this.props.questions);
    questions.sort((a,b)=>b.timestamp-a.timestamp);
   }
   console.log(questions)
   
    if(this.state.view==="answered" && this.props.current && this.props.questions){
      let answered=this.props.users[this.props.current.id].answers;
      let  quesId= Object.keys(answered)
      let ansQues=quesId.map(item=>this.props.questions[item])
      ansQues.sort((a,b)=>b.timestamp-a.timestamp);
     
      questions=ansQues.length?ansQues.map(item=> <Preview ques={item} key={item.id} users={users}/>):null;
     
   }
   else if(this.state.view==="unanswered" && this.props.current && this.props.questions){
    
    let allQues={...this.props.questions}
    
    let answered=this.props.users[this.props.current.id].answers;
  
  
    answered=Object.keys(answered)
    answered.forEach( ans=> {
      delete allQues[ans]
    });
  
   allQues=Object.values(allQues);
   allQues.sort((a,b)=>b.timestamp-a.timestamp);
   
   questions=allQues.length?allQues.map(item=> <Preview ques={item} key={item.id} users={users}/>):null;
  
   }
   let current= this.props.current;
if(!this.props.current){
   questions=questions?questions.map(item=> <Preview ques={item} key={item.id} users={users}/>):null;
}
   
return (
    <div className="App">
   
     <BrowserRouter>
     <Route   render={props=><Header user={users[0]}/>}/>
     <Switch>
     <Route   exact path="/"  render={(props)=><Home questions={questions} toggle={this.view} view={this.state.view} current={current}/>}/>
     <Route   exact path="/login" render={(props)=><Login users={users}/>}/>
     <Route   path="/questions/:question_id" render={(props)=>this.props.current?<Question/>:<Login users={users}/>}/>
     <Route   exact path="/add"  render={(props)=>this.props.current?<Add/>:<Login users={users}/>}/>
     <Route  exact path="/leaderboard"  render={(props)=>this.props.current?<Leader/>:<Login users={users}/>}/>
     <Route   exact path="/logout" component={Logout}/>
     <Route  exact path="/user" component={User}/>
     <Route   component={Error}/>

     </Switch>
     </BrowserRouter>
    </div>
  ); 
}

} 
const conApp=connect(store=>store)(App);
export default conApp;
