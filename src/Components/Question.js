import style from "styled-components";
import {connect} from "react-redux";
import * as actions from "../actions"
import {useParams,useHistory,Redirect} from "react-router-dom";

const Con= style.div`   
    
     text-align:center;
     width:70%;
     margin: .1rem auto;
     h2{
         font-size:3rem
         margin-top:1.5rem;
         margin-botom:1rem
     }
     p{
         height:2.5rem;
         background-color:lightgrey;
         color:black;
         font-size:1.75rem;
         text-transform:capitalize;
         margin-bottom:.5rem;
         &:hover{
             cursor:pointer;
             background-color:green;
         }
     }
     button{
         width:10rem;
         height:4rem;
         margin-top:1rem;
         color:black;
     }
     .green{
         background-color:green;
     }
     .tally{
         font-size:1.2rem;
         color:black;
     }
     #optionOne{
         margin-bottom:2rem
     }
`


const Question = (props) =>{
console.log(props)
 const history=useHistory();
const slug= useParams();


let questionId,question;


 questionId=slug.question_id;
 question=props.questions[questionId]

let ans;
setTimeout(()=>{
if( document.getElementById("optionOne")){
if(question.optionOne.votes.includes(props.current.id)){
    document.getElementById("optionOne").className="green";
}
else if(question.optionTwo.votes.includes(props.current.id)){
    document.getElementById("optionTwo").className="green";
}
}
},250
)
    const selection = (e)=>{
         ans=e.target.id
        document.getElementById("optionOne").className="";
        document.getElementById("optionTwo").className="";
        e.target.className="green";
         
    }

const submit= async ()=>{
  
    let obj={
        authedUser:props.current.id,
        qid:questionId,
        answer:ans
    }
    
    
    await props.dispatch(actions.saveAnswer(obj));
    
   setTimeout(() => {
    history.push("/")
   }, 250); 

   

}
if(question){
    let total= [...question.optionOne.votes,...question.optionTwo.votes].length;
    let opt1Total=question.optionOne.votes.length;
    let opt2Total=question.optionTwo.votes.length;
    let onepercent=(opt1Total*100)/total;
    let twopercent=100-onepercent
    
    return(

      <Con>
          <h2>Would You Rather:</h2>
          <div className="tally">
              Voted for by {opt2Total} peope which is {onepercent}%
          </div>
          <p  id="optionOne"  onClick={(e)=>selection(e)}>{question.optionOne.text}</p>

          <div className="tally">
              Voted for by {opt2Total} peope which is {twopercent}%
          </div>
          <p  id="optionTwo"  onClick={(e)=>selection(e)}>{question.optionTwo.text}</p>
          <button onClick={submit} >Submit</button>
      </Con>
    )
}
else{
    
    return(
    
        <Redirect to="/error"/>
    )
}
}


export default connect(store=>store)(Question)