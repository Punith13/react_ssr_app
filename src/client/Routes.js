import App from './App';
import HomePage from './pages/HomePage'; 
import UserListPage from './pages/UserListPage'; 
import NotFoundPage from './pages/NotFoundPage';
import AdminListPage from './pages/AdminsListPage';

export default [
    {
        ...App,
        routes:[
            {
                ...HomePage,
                path: '/',
                exact: true
            },
            {
                ...AdminListPage, 
                path: '/admins'
            },
            {
                ...UserListPage,
                path: '/users'
            },
            {
                ...NotFoundPage
            }
        ]
    }
];


