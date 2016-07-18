// Middleware sits between actions and reducers. Middleware has opportunity to log, stop, modify or not touch an action.
// When we create an action, it's going to get piped through all of the middlewares.
// In some form or another, the middleware uses the word next to send it to the next middleware in the chain.

export default function({ dispatch }) {
    return next => action => { //From this file we're returning a function, when ran it's going to return another function. When that has run it's going to call another action.
        //Just the way the signature is.
        console.log(action);

        next(action);//Send to the next middleware in the stack, if there are none, send it to reducers.
    };
}