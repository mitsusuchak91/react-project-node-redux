const redux = require('redux');  //import redux library

const counterReducer = (state = { counter: 0 }, action) => {   //Reducer function takes 2 parameters (state & action)
    if (action.type === 'increment') { //if we have action, we get counter + 1, else for intialization we get counter 1
        return {
            counter: state.counter + 1,
        };
    }
    if (action.type === 'decrement') { 
        return {
            counter: state.counter - 1,
        };
    }

    return state;    
}; 

const store = redux.createStore(counterReducer); //Store (centreData) here we pointer the counterReducer function & not execute

const counterSubscriber = () => {
    const latestState= store.getState()  //getState is a method which is available on store created with create store, it will give us the latest state snapshot after it was updated
    console.log(latestState); //so this subscription function will soon be triggerd once the state changes
};      //once it triggerd we can get the latest state after it was change with the getState() method
        
//now we need to make redux aware of this subscriber function & tell it that this function should be executed whenever our state changes
//we do that by reaching out to the store & calling the subscriber method on the store - another method which exists there

store.subscribe(counterSubscriber); //subscriber method wants the subscriber function which redux then excute for us whenever the data in the store changes
//here we just pointer the counterSubscriber function & not excuted
//bcz both the counterReducer & counterSubscriber function will executed by redux 

store.dispatch({ type: 'increment' });  //dispatch is a method which dipatchs an action, action is a javascript object
store.dispatch({ type: 'decrement' });