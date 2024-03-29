import { createReducer,on } from "@ngrx/store";
import { initialState } from "./counter.store";
import { increment, decrement, reset } from "./counter.actions";

const _counterReducer = createReducer(initialState,
    on(increment, (state)=>{
        return {
            ...state,
            counter: state.counter + 1
        }
    }),

    on(decrement, (state)=>{
        return {
            ...state,
            counter: state.counter - 1
        }
    
    }),

    on(reset, (state)=>{
        return {
            ...state,
            counter: 0 
        }
    
    }),
    
    )

export function counterReducer( state: any, action: any) {
        return _counterReducer(state, action); 
}