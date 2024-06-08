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
