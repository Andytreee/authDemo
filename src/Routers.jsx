import { hot } from 'react-hot-loader';
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { BrowserRouter } from 'react-router-dom'; // 路由
import renderRoutes from './renderRoutes';
import routes from './route';


@inject('user')
@observer
class Routers extends Component {
    render() {
        const isLogin = this.props.user.isLogin;
        return (
            <BrowserRouter>
                {renderRoutes(routes, isLogin, '/login')}
            </BrowserRouter>
        );
    }
}

export default hot(module)(Routers);
