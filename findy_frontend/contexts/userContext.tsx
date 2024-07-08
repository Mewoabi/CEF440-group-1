import { defaultUser, user } from "@/types/user";
import React from "react"; 

import { createContext, useReducer } from "react"; 



type State = { user: user }

const initialState: State = { user: {...defaultUser}} 

export const UserContext = createContext<{
	state: State;
	dispatch: React.Dispatch<Action>;
  }>({
	state: initialState,
	dispatch: () => null
  });


type Action = {type: "LOGIN_USER" | "LOGOUT_USER", payload?: user}

const userReducer = (state: State, action:Action): State => {
    const {type, payload } = action; 
	switch (type) {
		case "LOGIN_USER": 
			 return {user: {...action.payload!}}
        case "LOGOUT_USER": 
            return {user: {...defaultUser}}
		default:
			return state;
	}
};

const UserContextProvider = ({ children }: {children: any}) => {
	const [state, dispatch] = useReducer(userReducer, initialState);

	return <UserContext.Provider value={{state, dispatch}}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
