import React from 'react'
let initialstate={count:0}
function Reducer(state=initialstate, action) {
    if(action.type==="INCREAMENT"){
        return{
            count:state.count+1
        }
    }
    if(action.type==="DECREAMENT"){
        return{
            count:state.count-1
        }
    }
    return state;
    
}

export default Reducer
