import React,{Component} from "react";
import {connect} from "react-redux";



class Test extends Component{
     

render(){
         console.log(this.props.questions)
         return (
             <p>Classs</p>
         )
    }
}




const conTest = connect(store=>store)(Test)
export default conTest;