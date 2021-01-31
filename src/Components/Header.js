import style from "styled-components";
import {connect} from "react-redux";
import {Link} from "react-router-dom";



const Div=style.div`
  background-color:darkgrey;
  position:relative;
  &:hover{
   
    cursor:pointer;
   }
   &:hover .menu-items{
   transform:translateY(0px);
}
  ul{

      position: absolute;
      transform:translateY(-500px);
      transition:transform .5s;
      li{
          background-color:#2f4f4f;
          width:100vw;
          text-align:center;
          height:3rem;
          display:flex;
          justify-content:center;
          align-items:center;
          &:hover{
              background-color:grey;
          }
      }

  }
  .menu-con{
     display:flex;
     justify-content:space-between;
     align-items:center;
     padding:.5rem;
     padding-top:0;
     img{
         width:2rem;
         height:2rem;
         border-radius:50%;
     }
     .prof{
        align-items:center;
        display:flex;
        padding:.5rem;
        img{
            padding-left:.25rem
        }
     }
  }
  



`
const Header = (props)=>{


let users=props.current;
let image=users?users.avatarURL:null;
let name= users?users.name:"no-name";

    return(
        <Div>
          <ul className="menu-items">
              <Link to="/"><li>Home</li></Link>
              <Link to="/add"><li>Add Question</li></Link>
              <Link to="/board"><li>Board</li></Link>
              <Link to="/login"><li>Login</li></Link>
              <Link to="/logout"><li>Logout</li></Link>
          </ul>
             <div className="menu-con">
              <span>Menu</span>
              <div className="prof" >
               {users?<span>{name}</span>:<span>Please sign in</span>}
                {users?<img src={image} alt="Profile"/>:<span></span>}
              </div>
              </div>
         
        </Div>
    )
}


export default connect(store=>store)(Header)