const redux = require('redux');
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
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

const BUY_ICECREAM = 'BUY_ICECREAM';

function buyIcecream() {
    return {
        type: BUY_ICECREAM,
    }
}
//buyCake() function is action creator that returns action
/////////////////// ACTION END ////////////////////


/////////////////// REDUCER START ////////////////////
//(previousState,action)=>newState

/*
 const initialState = {
     numberOfCakes: 10,
     numberOfIceCreams: 20
 };
 // this is state,state should be written inside single object
    OR
 */

const initialCakeState = {
    numberOfCakes: 10,
}

const initialIceCreamState = {
    numberOfIceCreams: 20,
}


// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case BUY_CAKE: return {
//             ...state, //state ko copy banako so that if state vitra aru property haru xa vane it doesnot get affected
//             numberOfCakes: state.numberOfCakes - 1
//         }
//         case BUY_ICECREAM: return {
//             ...state,
//             numberOfIceCreams: state.numberOfIceCreams - 1

//         }
//         default: return state;
//     }
// }
//     OR

const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            numberOfCakes: state.numberOfCakes - 1
        }
        default: return state;
    }
};

const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch (action.type) {
        case BUY_ICECREAM: return {
            ...state,
            numberOfIceCreams: state.numberOfIceCreams - 5,
        }
        default: return state;
    }
};

/////////////////// REDUCER END ////////////////////

const reducer = combineReducers({
    cake: cakeReducer,
    icecream: iceCreamReducer
});
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

store.dispatch(buyIcecream());
store.dispatch(buyIcecream());
