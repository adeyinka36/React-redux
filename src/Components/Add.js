import style from "styled-components";
import * as action from "../actions";
import {connect} from "react-redux";
import {useHistory} from "react-router-dom";
const Con = style.div`
    color:black;
    display:flex;
    width:80%;
    margin:0 auto;
    margin-top: 2rem;
    flex-direction:column;
    h1{
        fonr-size:2.5rem;
        color:black;
        margin-bottom:2.5rem;
    }
    #opt1{
        margin-bottom:1rem;
    }
    label{
        font-size:2rem;
        color:black;
    }
    input{
        color:black;
        width:100%;
        height:3.5rem;
        font-size:1.5rem;
    }
    button{
        margin-top:1rem;
        width:8rem;
        height:2.5rem;
        color:black;
    }
`


const Add = props=>{
     const history=useHistory()
    const addQuestions=(event)=>{
        
         let obj={
             "author":props.current.id,
             "optionOneText":document.getElementById("opt1").value,
             "optionTwoText":document.getElementById("opt2").value,

         }

        props.dispatch(action.saveQuestion(obj));


        setTimeout(()=>{
          history.push("/")
        },250)
    
    }

    return(
        <Con>
            <h1>Woul You Rather?</h1>
        
            <label >Option One</label>
            <input type="text" id="opt1"></input>

            <label >Option Two</label>
            <input type="text" id="opt2"></input>

            <button onClick={addQuestions}>Submit</button>

        </Con>
    )
}

export default connect(store=>store)(Add);