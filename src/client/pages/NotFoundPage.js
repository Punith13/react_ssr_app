import React from 'react'; 

// context is renamed by staticRouter to staticContext 

const NotFoundPage = ({ staticContext = {} }) => {
    staticContext.notFound = true;
    return <h1>Ooops, route not found</h1>; 
}

export default {
    component: NotFoundPage
}