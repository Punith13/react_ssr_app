import React from 'react'; 
import { renderToString } from 'react-dom/server'; 
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import serialize from 'serialize-javascript';// to prevent xss attacks
import { Helmet } from 'react-helmet';
import Routes from '../client/Routes';


const renderer = (req , store , context) => {

    const content = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.path} context={context}>
                <div>{ renderRoutes(Routes)} </div>
            </StaticRouter>
        </Provider>
    ); 

    const helmet = Helmet.renderStatic(); 

    return (`
    <html>
        <head>
            <meta charset='utf-8'>
            ${helmet.title.toString()}
            ${helmet.meta.toString()}
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css">            
        </head>
        <body>
            <div id='root'>
                ${content}
            </div>
            <script>
                window.INITIAL_STATE = ${serialize(store.getState())}
            </script>
            <script src='bundle.js'></script>
        </body>
    </html>
    `); 

}

export default renderer; 