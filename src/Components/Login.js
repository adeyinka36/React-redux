import style from "styled-components";
import {connect} from "react-redux";
import {useHistory,useParams} from "react-router-dom";
import  * as API from "../actions";

const Con= style.div`
 margin-top:10rem;
    h2{
      font-size:3rem;
      color:black;
      margin-bottom:.5rem;
    }
    li{
     height:4rem;
     background-color:lightslategrey;
      display:flex;
      justify-content:center;
      align-items:center;
       font-size:2.5rem;
     &:hover{
         cursor:pointer;
         background-color:darkslategrey;
     }
    }
`
const Login = props=>{
  let slug=useParams();
  let questionId=slug.question_id;
  let history= useHistory()
  console.log(history)
  let  users=Object.values(props.users);
  let i=[...users]
    const changePlayer=event=>{

        let name=event.target.innerText.toLowerCase();
         let newUser=i.filter(i=>i.id===name.split(" ").join(""));
         props.dispatch(API.changeUser(newUser[0]));
         setTimeout(()=>{
        
    if(questionId){
     
    history.push(`/questions/${questionId}`)
    }
    else{
    
      history.push("/error")
    }
          
          },0);
    }
   

 
 users=users.map(u=><li onClick={(event)=>{changePlayer(event)}} key={u.id}>{u.name}</li>)
    return(
      <Con>
         <h2>Please Login</h2>
          <ul>
              {users}
          </ul>
      </Con>
    )
}


export default connect(store=>store)(Login);