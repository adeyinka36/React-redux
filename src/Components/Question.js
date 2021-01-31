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

`


const Question = (props) =>{
console.log(props)
 const history=useHistory();
const slug= useParams();


let questionId,question;


 questionId=slug.question_id;
 question=props.questions[questionId]

let ans;



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
    console.log(questionId)
    return(

      <Con>
          <h2>Would You Rather:</h2>
          <p  id="optionOne"  onClick={(e)=>selection(e)}>{question.optionOne.text}</p>
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