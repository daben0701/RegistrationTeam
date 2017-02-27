import React, { Component } from 'react';

import { Form, Icon, Input, Button, Checkbox, message} from 'antd';
const FormItem = Form.Item;

import { Link, hashHistory} from 'react-router';

import styles from './login.css';

 class Login extends Component {
    constructor(props) {
        super(props);
    }

    submitLogin = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if(!err){
                console.log('Received values of form: ', values);
                if(values.userName != 'admin' || values.password != "123456"){
                    message.error('登录账号错误,请重新登录!');
                    this.props.form.resetFields();
                }else{
                    hashHistory.push('/index/mytable');
                }
            }
        });
    }

    render() {
        const { getFieldDecorator  } = this.props.form;

        return(
            <div style={{width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center"}}>
                <Form onSubmit={this.submitLogin} className="login-form" style={{maxWidth: 400}}>
                    <FormItem>
                        {getFieldDecorator('userName', {
                            rules:[{required: true, message: "请输入用户名！"}],
                        })(
                            <Input addonBefore={<Icon type="user" />} placeholder="用户名" />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('password', {
                            rules:[{required: true, message: "请输入密码！"}]
                        })(
                            <Input addonBefore={<Icon type="lock" />} placeholder="密码" />
                        )}
                    </FormItem>
                    <FormItem style={{width: 400}}>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(
                            <Checkbox>记住我</Checkbox>
                        )}
                        <a className="login-form-forget" style={{float: "right"}}>忘记密码</a>
                        <Button type="primary" htmlType="submit" className="login-form-button" style={{width: "100%"}}>登录</Button>
                    </FormItem>
                </Form>
            </div>
        );
    }
}

Login = Form.create()(Login);

export default Login;