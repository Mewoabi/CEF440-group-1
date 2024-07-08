import { postInterface } from "@/components/post"; 
import { test_posts } from "@/utils/testPost";
import React from "react"; 

import { createContext, useReducer } from "react"; 



type State = { posts: postInterface[] }

const initialState: State = { posts: [...test_posts]} 

export const PostContext = createContext<{
	state: State;
	dispatch: React.Dispatch<Action>;
  }>({
	state: initialState,
	dispatch: () => null
  });


type Action = {type: "ADD_POST", payload?: postInterface}

const postReducer = (state: State, action:Action): State => {
    const {type, payload } = action; 
	switch (type) {
		case "ADD_POST": 
			 return {posts: [action.payload!, ...state.posts]} 
		default:
			return state;
	}
};

const PostContextProvider = ({ children }: {children: any}) => {
	const [state, dispatch] = useReducer(postReducer, initialState);

	return <PostContext.Provider value={{state, dispatch}}>{children}</PostContext.Provider>;
};

export default PostContextProvider;
