import style from "styled-components";
import {Link} from "react-router-dom";

const Con= style.div`
       transition:transform .4s;
       display:flex;
       width:50%;
       margin:.1rem auto;
       background-color:darkgrey;
       &:hover{
           cursor:pointer;
           transform:scale(1.05);
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
            color:maroon;
        }
        .poll{
            color:black;
        }
       }

`

const Preview= (props)=>{


let users=props.users;
let ques=props.ques;
let curUser=users.filter(u=>u.id===ques.author);
 curUser=curUser[0];


    return(
        
     <Link to={`/questions/${ques.id}`}> <Con >
          <div className="left">
               <span>{ques.author}</span>
               <img src={curUser.avatarURL} alt="Creators Avatar"/> 
          </div>
          <div className="right">
            <span>{ques.optionOne.text}</span>
            <span>{ques.optionTwo.text}</span>
            <span className="poll">Answered by 10 people</span>
          </div>
      </Con>
      </Link>
    
    )
}




export default Preview;