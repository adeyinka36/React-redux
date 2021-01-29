import style from "styled-components";
import {connect} from "react-redux";
import {useHistory} from "react-router-dom";
import  * as API from "../actions";

const Con= style.div`
 margin-top:10rem;
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
  let history= useHistory()
  let  users=Object.values(props.users);
  let i=[...users]
    const changePlayer=event=>{

        let name=event.target.innerText.toLowerCase();
         let newUser=i.filter(i=>i.id===name.split(" ").join(""));
         props.dispatch(API.changeUser(newUser[0]));
         history.push("/");
    }
   

 
 users=users.map(u=><li onClick={(event)=>{changePlayer(event)}} key={u.id}>{u.name}</li>)
    return(
      <Con>
          <ul>
              {users}
          </ul>
      </Con>
    )
}


export default connect(store=>store)(Login);