const redux = require('redux');
const createStore = redux.createStore;
/////////////////// ACTION START ////////////////////
const BUY_CAKE = 'BUY_CAKE';
//left is constant and right is action name
/*
    {
        type: BUY_CAKE
        info: 'first redux action' //we can add other things inside action like this
    }
//this is action i.e action is object with type and constant
*/

function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'first redux action'
    }
}
//buyCake() function is action creator that returns action
/////////////////// ACTION END ////////////////////


/////////////////// REDUCER START ////////////////////
//(previousState,action)=>newState

const initialState = {
    numberOfCakes: 10,
};
//state should be written inside single object

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state, //state ko copy banako so that if state vitra aru property haru xa vane it doesnot get affected
            numberOfCakes: state.numberOfCakes - 1
        }
        default: return state;
    }
}

/////////////////// REDUCER END ////////////////////


const store = createStore(reducer);
console.log('initial state', store.getState());

store.subscribe(() => {
    console.log('updated state', store.getState());
})

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());

// const unsubscribe = store.subscribe(() => {
//     console.log('updated store', store.getState());
// })
// unsubscribe();
