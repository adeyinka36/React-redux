import style from "styled-components";
 const Con= style.div`
   width:80%;
   background-color:lightslategrey;
   margin:2rem auto;
   .answered,.unanswered{
       background-color:green;
   }
   ul{
       display:flex;
       justify-content:space-around;
       font-size:2rem;
       align-items:center;
       height:10vh;
       li{

           display:flex;
           align-items:center;
           justify-content:center;
           width:50%;
           height:100%;
           &:hover{
               cursor:pointer;
               background-color:green;
           }
       }
   }
 
 `

const Home= (props)=>{
    console.log(props.questions)
 let ans,unans;
  let view=props.view?props.view:null;
  if(view==="answered"){
      ans=view
  }
  else if(view==="unanswered"){
      unans=view
  }
if(props.current){
    return(
        <>
      <Con>
          <ul>
              <li className={ans} onClick={(e)=>props.toggle(e)}>Answered</li>
              <li className={unans} onClick={(e)=>props.toggle(e)}>Unanswered</li>
          </ul>

      </Con>
      {props.questions}
      </>
    )
}
else{
    return(
        <>
        <Con></Con>
      {props.questions}
      </>
    )
}
    

}


export default Home;