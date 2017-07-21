import React, { Component } from 'react';

import { Form, Icon, Input, Button, Checkbox, message} from 'antd';
const FormItem = Form.Item;

import { Link, hashHistory} from 'react-router';

import 'whatwg-fetch';

 class Login extends Component {
    constructor(props) {
        super(props);
    }

    submitLogin = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if(!err){
                //if(values.userName != 'admin' || values.password != "123456"){
                    //message.error('登录账号错误,请重新登录!');
                    //this.props.form.resetFields();
                //}else{
                   // hashHistory.push('/index/myform');
                //}
                let formData = new FormData();
                formData.append("mobile", values.userName);
                formData.append("password", values.password);

                fetch("http://101.200.130.39/api/account/login", {
                    method: "POST",
                    mode: "cors",
                    //credentials: "include",
                    headers: {
                        //'Accepts': 'application/json, text/plain, */*',
                        'Content-Type': 'application/json;charset=utf-8',
                        //'Access-Control-Allow-Credentials': 'true',
                        //'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                        //'Access-Control-Allow-Origin': 'http://101.200.130.39'
                    },
                    body: 
                    JSON.stringify({
                        mobile: values.userName,
                        password: values.password,
                    })
                })
                    .then((res) => {
                        if(res.status >= 200 && res.status < 300){
                            res.json().then((data) => {
                                fetch("http://101.200.130.39/api/Team/mine", {
                                    method: "GET",
                                    mode: "cors",
                                    headers: {
                                        'Authorization': 'bearer ' + data.result,
                                    }
                                    //credentials: "include",
                                })
                                    .then((res) => {
                                        if (res.status !== 200) {
                                            message.error('请先在篮球慧馆APP上报名!');
                                        }else{
                                            window.localStorage.token = data.result;
                                            hashHistory.push('/index/myform'); 
                                        }
                                    })
                                    .catch((error) => { alert("error") })
                                 
                            })
                        }else{
                            message.error('账号或密码错误,请重新登录!')
                        }
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            }
        });
    }

    render() {
        const { getFieldDecorator  } = this.props.form;

        return(
            <div style={{width: "100%", height: "100%", backgroundImage: "url(/src/pic/login-background.jpg)"}}>
                <div style={{position: "absolute", left: 10, top: 10}}>
                    <span style={{fontSize: 40, lineHeight: 3, marginLeft: 20, color: "#108ee9"}}>篮球联赛报名系统</span>
                </div>
                <div style={{width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center"}}>
                    
                    <div style={{border: "1px solid #cfdbe2", borderRadius: 8, padding: "40px 40px 20px 40px", background: "#fafafa", backgroundColor: "rgba(255, 255, 255, 0.5)"}}>
                        <Form onSubmit={this.submitLogin} className="login-form" style={{maxWidth: 400}}>
                            <div style={{textAlign: 'center', fontSize: 20, marginBottom: 20}}>用户登陆</div>
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
                                    <Input addonBefore={<Icon type="lock" />} type="password" placeholder="密码" />
                                )}
                            </FormItem>
                            <FormItem style={{width: 400}}>
                                <Button type="primary" htmlType="submit" className="login-form-button" style={{width: "100%"}}>登录</Button>
                            </FormItem>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

Login = Form.create()(Login);

export default Login;