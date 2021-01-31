import * as action from "../actions";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

const Logout= props=>{

    props.dispatch(action.logout())


    return(
       <Redirect to="login"/>
    )
}


export default connect(store=>store)(Logout);