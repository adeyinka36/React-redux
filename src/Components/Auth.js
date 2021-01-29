import {Redirect} from "react-router-dom";
import {connect} from "react-redux";



const Auth=props=>{

  if(props.current){
      return(
          <>
          {props.childen}
          </>
      )
  }
  else{
      return (
          <Redirect to={{
              path:"/Login",
              users:props.users
          }}/>
      )
  }
}


export default connect(store=>store)(Auth)