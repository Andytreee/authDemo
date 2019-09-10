import React from 'react';
import loadable from '@loadable/component'

const Login = loadable(() => import(/* webpackPrefetch: true */  './pages/Login.jsx'));
const Home = loadable(() => import(/* webpackPrefetch: true */  './pages/Home.jsx'));
const Header = loadable(() => import(/* webpackPrefetch: true */  './component/Header.jsx'));

const routes = [
    {
        path: '/',
        exact: true,
        component:  [<Header />, <Home />],
        requiresAuth: true,
    },
    {
        path: '/login',
        exact: true,
        component:  [<Login />],
        requiresAuth: true,
    }
];

export default routes
