import React from 'react'; 

const Home = () => {
    return (
        <div>
            <div>I am best the Home component!</div>
            <button onClick={ () => console.log("button pressed")} >Press me!</button>
        </div>
        
    )
}

export default {
    component: Home
}