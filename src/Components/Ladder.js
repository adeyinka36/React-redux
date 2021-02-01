import styled from "styled-components";
import {connect} from "react-redux";


const Con = styled.div`
       padding-top:5rem;
       display:flex;
       flex-direction:column;
       width:50%;
       margin:.1rem auto;
      
       .container{
           background-color:darkgrey;
           margin-bottom:.5rem;
           display:flex;
           flex-direction:column;
           justify-content:center;
           align-items:center;
       }
       
       .left{
           display:flex;
           flex-direction:column;
           width:35%;
           justify-content:center;
           align-items:center;
           span{
               font-size:1.7rem;
               text-transform:uppercase;
           }
           img{
               width:2.5rem;
               height:2.5rem;
               border-readius:50%;
           }
       }
       .right{
        width:65%;
        display:flex;
        align-items:center;
        flex-direction:column;
        span{
            text-transform:capitalize;
            font-size:1.5rem;
            color:black;
        }
       
       }

`




const Ladder = props=>{
    const users=props.users?Object.values(props.users):[];
    if(users.length){
    users.forEach(user=>user.total=user.questions.length+Object.values(user.answers).length)
    users.sort((a,b)=>b.total-a.total)
    }
  
    let people=users?users.map(item=>< div className="container" key={item.id} ><div className="left">
                                                 <span>{item.name}</span>
                                      <img src={item.avatarURL} alt="Creators Avatar"/> 
                                    </div>
                                    <div className="right">
                                        <span>Asked:{item.questions.length}</span>
                                        <span>Answered: {Object.values(item.answers).length}</span>
                                     </div></div>):[];


    return (
        <Con>
          {people}
        </Con>
    )
}



export default connect(store=>store)(Ladder);