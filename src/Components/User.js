import style from "styled-components";
import {connect} from "react-redux";
import * as actions from "../actions";
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
    #name{
        margin-bottom:3rem;
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

const User = props=>{
let obj={};
const history=useHistory();
   const addUser = e =>{
      obj.id=document.getElementById("name").value.toLowerCase().split(" ").join("");
      obj.name=document.getElementById("name").value;
      obj.questions=[];
      obj.answers={};
      obj.avatarURL=document.getElementById("url").value;

     props.dispatch(actions.addUser(obj))

     setTimeout(()=>{history.push("/")},250
     )

   }



    return(
        <Con>
             <h2>Register</h2>
        
        <label >Name</label>
        <input type="text" id="name"></input>

        <label >Avatatar URL</label>
        <input type="text" id="url"></input>

        <button onClick={addUser}>Submit</button>
        </Con>
    )
}


export default connect(store=>store)(User);