import * as API from '../_DATA';

export const GET_QUESTIONS="GET_QUESTIONS";
export const GET_USERS="GET_USERS";
export const SAVE_QUESTION="SAVE_QUESTION";
export const SAVE_ANSWER="SAVE_ANSWER";
export const INITIAL="INITIAL";
export const LOGIN="LOGIN";
export const VIEW="VIEW";

// change logged in user
export function changeUser(object){
    return {
        type:LOGIN,
        payload:object
    }
}


export function view(){
    return {
        type:VIEW
       
    }
}





export function saveQuestion(object){
    return (dispatch)=>{Promise.all([API._saveQuestion(object),API._getUsers(),API._getQuestions()])
        .then(([nothing,users,questions])=>{
            dispatch(loadState([users,questions]))
        })
    }
}


// export function saveAnswer(object){
//     return (dispatch)=>{Promise.all(
//     [API._saveQuestionAnswer(object),API._getUsers(),API._getQuestions()])
//         .then(([n,users,questions])=>{
//             console.log(users,questions)
//             dispatch(loadState([users,questions]))
//         })
//     }
// }
export function saveAnswer(object){
    let ques=object.answer==="optionOne"?"optionTwo":"optionOne";
    return (dispatch)=>{API._saveQuestionAnswer(object)
        .then(list=>{
            list[0][object.authedUser].answers[object.qid]=object.answer;
            list[1][object.qid][ques].votes=list[1][object.qid][ques].votes.filter(item=>item!==object.authedUser);
            
            dispatch(loadState(list))
        })
    }
}






// LOADING DATA
export function loadState(list){
    
    return{
        type:INITIAL,
        payload:list
    }

}

export function initialData(){
    return (dispatch)=>{ Promise.all(
        [API._getUsers(),API._getQuestions()])
        .then(([users,questions])=>dispatch(loadState([users,questions])))
    }
}


