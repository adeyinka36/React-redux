import style from "styled-components";

const Con = style.div`
height:90vh;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

h1{
    color:black;
    font-size:4rem;
}
h2{
    color:black;s
    font-size:2.5rem;
}

`;
const  Error = props=>{


    return (
        <Con>
            <h1>404</h1>
           <h2>Page Not Found</h2>
        </Con>
    )
}


export default Error;