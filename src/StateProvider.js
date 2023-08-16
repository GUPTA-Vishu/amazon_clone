//set up layer 
// we need to this to track the basket
import React , {createContext,useContext,useReducer} from "react";
//prepares our data layer
export const StateContext=createContext();
//wrap our app and provide the data layer
export const StateProvider=({reducer,initialState,children})=>(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
);


//pull out the information 
export const useStateValue=()=>useContext(StateContext);




