import React, { Component } from 'react';
import { Form, Icon, Input, Button } from 'antd';
import { inject, observer } from 'mobx-react';

@inject('user')
@observer
@Form.create()
class Login extends Component {
    constructor(props) {
        super(props);
    }
    submit = () =>{
        let { validateFields } = this.props.form;
        validateFields((err) => {
            if(!err){
                this.props.user.login()
                this.props.history.push('/');
            }
        });
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form className="login-form">
                <Form.Item>
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: 'plz input username!' }],
                    })(
                        <Input addonBefore={<Icon type="user" style={{ color: '#fff' }} />} placeholder="username" />
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'plz input password!' }],
                    })(
                        <Input addonBefore={<Icon type="lock" style={{ color: '#fff' }} />} type="password" placeholder="password" />
                    )}
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button" onClick={this.submit}>
                        Login
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

export default Login;
