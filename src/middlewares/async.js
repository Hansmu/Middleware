// Middleware sits between actions and reducers. Middleware has opportunity to log, stop, modify or not touch an action.
// When we create an action, it's going to get piped through all of the middlewares.
// In some form or another, the middleware uses the word next to send it to the next middleware in the chain.

export default function({ dispatch }) {
    return next => action => { //From this file we're returning a function, when ran it's going to return another function. When that has run it's going to call another action.
        //Just the way the signature is.
        //If the action does not have a payload or it doesn't have a then property, then send it on.
        if (!action.payload || !action.payload.then) { // Then check to make sure we don't pass an undefined function down below.
            return next(action); //Send to the next middleware in the stack, if there are none, send it to reducers.
            //Always call next or the action just stops.
        }

        //Make sure the action's promise resolves.
        action.payload
            .then(
                function(response) {
                    //Create a new action with the old type, but replace the payload with response.
                    const newAction = { ...action, payload: response }
                    dispatch(newAction); //Send the action through all of the middlewares again. Run the entire cycle again.
                    //Use dispatch instead of next because previous middleware has an action that must've happened previously on a resolved action.
                    //You could try to reorder, but you shouldn't. Middleware should be stand alone and should not make any assumptions about other middleware.
                }
            );

        //A random example of using middleware - getting a strange response back from a specific API and then transforming into a more processable form.
        //Catch the promise from that specific API and then process it.
    };
}