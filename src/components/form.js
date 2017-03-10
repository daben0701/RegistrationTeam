import React from 'react'
import 'whatwg-fetch'
import {Form, Input, Select, Checkbox, DatePicker, Col, Radio, Button, Modal, message} from 'antd'
import { Link, hashHistory} from 'react-router';

const FormItem = Form.Item
const Option = Select.Option
const RadioGroup = Radio.Group
const CheckboxGroup = Checkbox.Group

class myForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
        };
    }

    getIdByUrl = () => {
        var pathArray = location.pathname.split("/");
        for (var i = pathArray.length - 1; i >= 0; i--) {
            if (/[0-9]+/.test(pathArray[i])) {
                return pathArray[i];
            }
        }
        return "";
    }

    setFormValue = (data) => {
        this.props.form.setFieldsValue({
            fullName: data.fullName == null ?  '' : data.fullName,
            name: data.name == null ? '' : data.name,
            leader: data.leader == null ? '' : data.leader,
            coach: data.coach == null ? '' : data.coach,
            coachAssistant: data.coachAssistant == null ? '' : data.coachAssistant,
            doctor: data.doctor == null ? '' : data.doctor,
            translater : data.translater == null ? '' : data.translater,
            homeTeamShirtColor: data.homeTeamShirtColor == null ? '' : data.homeTeamShirtColor,
            awayTeamShirtColor: data.awayTeamShirtColor == null ? '' : data.awayTeamShirtColor,
            id: data.id == null ? '' : data.id,
        });
    }

    componentWillMount = () => {
        fetch("http://123.56.253.83/api/Team/mine", {
            method: "GET",
            mode: "cors",
            headers: {
                'Authorization': 'bearer ' + window.localStorage.token,
            }
            //credentials: "include",
        })
            .then((res) => {
                if(res.status !== 200){
                    hashHistory.push('/login');
                }
                res.json().then((data) => {
                    //console.log(data);
                    this.setFormValue(data);
                    window.localStorage.teamId = data.id;
                })
            })
            .catch((error) => {alert("error")})
    }

    handleSelectChange = (value) => {
        console.log('selected ${value}');
    }

    handleSubmit = (e) => {
        e.preventDefault();
        form.validateFields((err, values) => {
            if (err) {
            return;
            }
            let content = JSON.stringify(this.props.form.getFieldsValue());
            fetch("http://123.56.253.83/api/team/mine", {
                method: "PUT",
                mode: "cors",
                //credentials: "include",
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                    'Authorization': 'bearer ' + window.localStorage.token,
                },
                body: content
            }).then((res) => {
                if(res.status >= 200 && res.status < 300){
                    message.success("球队信息更新成功！");
                }else{
                    hashHistory.push('/login');
                }
            })
            .catch((error) => {alert(error);});
        });
    }

    resetModal = () => {
        this.props.form.resetFields();
    }

    hideModal = () => {
        this.setState({visible: false});
    }

    render(){
        const {getFieldProps} = this.props.form;

        const formItemLayout = {
            labelCol: {span: 3},
            wrapperCol: {span: 10},
        };

        return (
            <Form horizontal onSubmit = {this.handleSubmit}>
                <FormItem
                    label="俱乐部球队全称"
                    {...formItemLayout}
                    required>
                    <Input placeholder = "请输入俱乐部球队全称" maxLength = "40" {...getFieldProps('fullName')}/>
                </FormItem>

                <FormItem
                    label="俱乐部球队简称"
                    {...formItemLayout}
                    required>
                    <Input placeholder = "请输入俱乐部球队简称" maxLength = "40" {...getFieldProps('name')}/>
                </FormItem>

                <FormItem
                    label="领队"
                    {...formItemLayout}
                    required>
                    <Input placeholder = "请输入领队姓名" maxLength = "40" {...getFieldProps('leader')}/>
                </FormItem>

                <FormItem
                    label="教练员"
                    {...formItemLayout}
                    required>
                    <Input placeholder = "请输入教练员姓名" maxLength = "40" {...getFieldProps('coach')}/>
                </FormItem>

                <FormItem
                    label="助理教练"
                    {...formItemLayout}>
                    <Input placeholder = "请输入助理教练姓名" maxLength = "40" {...getFieldProps('coachAssistant')}/>
                </FormItem>

                <FormItem
                    label="队医"
                    {...formItemLayout}>
                    <Input placeholder = "请输入队医姓名" maxLength = "40" {...getFieldProps('doctor')}/>
                </FormItem>

                <FormItem
                    label="翻译"
                    {...formItemLayout}>
                    <Input placeholder = "请输入助理翻译姓名" maxLength = "40" {...getFieldProps('translater')}/>
                </FormItem>

                <FormItem
                    label="主场球衣颜色"
                    {...formItemLayout}>
                    <Input placeholder = "请输入主场球衣颜色" maxLength = "10" {...getFieldProps('homeTeamShirtColor')}/>
                </FormItem>

                <FormItem
                    label="客场球衣颜色"
                    {...formItemLayout}>
                    <Input placeholder = "请输入客场球衣颜色" maxLength = "10" {...getFieldProps('awayTeamShirtColor')}/>
                </FormItem>

                <FormItem
                    {...formItemLayout}>
                    <Input style = {{display: "none"}} {...getFieldProps('id')}/>
                </FormItem>

                <FormItem wrapperCol={{span: 8, offset: 10}} style={{marginTop: 24}}>
                    <Button type="ghost" onClick={this.resetModal}>重置</Button>
                    &nbsp; &nbsp; &nbsp;
                    <Button type="primary" htmlType="submit">确定</Button>
                </FormItem>
            </Form>
        )
    }
}

myForm = Form.create()(myForm)
export default myForm
