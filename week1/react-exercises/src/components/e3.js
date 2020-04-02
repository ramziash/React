import React from 'react';


// got the below from this website. https://reactjs.org/docs/hooks-state.html 
const Counter = () => {

    // Declare a new state variable, which we'll call "count".
    //useState is a Hook that lets you add React state to function components.
    //The only argument to the useState() Hook is the initial state. 
    //Unlike with classes, the state doesn’t have to be an object. 
    //We can keep a number or a string if that’s all we need. 
    //In our example, we just want a number for how many times the user clicked, so pass 0 as initial state for our variable. 
    //(If we wanted to store two different values in state, we would call useState() twice.)
    const [count, setCount] = React.useState(0); 
    //Normally, variables “disappear” when the function exits but state variables are preserved by React.

    const feedback = 
        count > 10 ? 'its higher than 10' : 'keep counting...'

    return (
        <div>
            <p>{feedback}</p>
            <count>{count}</count>
             <button onClick= {() => setCount(count + 1)}>Add 1</button>
        </div>
    )
}

export default Counter