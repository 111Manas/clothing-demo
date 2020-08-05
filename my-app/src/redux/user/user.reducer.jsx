const iState={
  name:'manas',
  currentUser:null
}

const userReducer=(state=iState, action)=>{
  switch(action.type){
    case 'SET_CURRENT_USER':
      return{ 
        ...state,
        currentUser:action.payload
      };
        default:
         return state;
  }}


export default userReducer;