import { itemInterface } from "@/types/item"; 
import { defaultItem } from "@/types/item"; 
import React from "react"; 

import { createContext, useReducer } from "react"; 



type State = { item: itemInterface }

const initialState: State = { item: defaultItem} 

export const ItemContext = createContext<{
	state: State;
	dispatch: React.Dispatch<Action>;
  }>({
	state: initialState,
	dispatch: () => null
  });


type Action = {type: "ADD_ITEM", payload?: itemInterface}

const itemReducer = (state: State, action:Action): State => {
    const {type, payload } = action; 
	switch (type) {
		case "ADD_ITEM": 
			 return {item: payload!} 
		default:
			return state;
	}
};

const ItemContextProvider = ({ children }: {children: any}) => {
	const [state, dispatch] = useReducer(itemReducer, initialState);

	return <ItemContext.Provider value={{state, dispatch}}>{children}</ItemContext.Provider>;
};

export default ItemContextProvider;
