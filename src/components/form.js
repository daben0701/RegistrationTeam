import React from 'react'
import 'whatwg-fetch'
import {Form, Input, Select, Checkbox, DatePicker, Col, Radio, Button, Modal, message} from 'antd'

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
            translater : data.transfer == null ? '' : data.translater,
            homeTeamShirtColor: data.homeTeamShirtColor == null ? '' : data.homeTeamShirtColor,
            awayTeamShirtColor: data.awayTeamShirtColor == null ? '' : data.awayTeamShirtColor,
        });
    }

    componentWillMount = () => {
        fetch("http://123.56.253.83/api/Team/mine", {
            method: "GET",
            mode: "cors",
            credentials: "include",
        })
            .then((res) => {
                if(res.status !== 200){
                    hashHistory.push('/login');
                }
                res.json().then((data) => {
                    //console.log(data);
                    this.setFormValue(data);
                })
            })
            .catch((error) => {alert("error")})
    }

    handleSelectChange = (value) => {
        console.log('selected ${value}');
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("收到表单值： ", JSON.stringify(this.props.form.getFieldsValue()));
        let content = JSON.stringify(this.props.form.getFieldsValue());
        fetch("http://123.56.253.83/api/team", {
            method: "PUT",
            mode: "cors",
            credentials: "include",
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: content
        }).then((res) => {alert(res)})
        .then((json) => {alert(json)})
        .catch((error) => {alert(error);});
        
        this.props.form.resetFields();
    }

    showModal = () => {
        this.setState({visible: true});
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

        const success = function(){
            message.success('操作成功！');
        };

        return (
            <Form horizontal onSubmit = {this.handleSubmit}>
                <FormItem
                    id='control-input'
                    label="俱乐部球队全称"
                    {...formItemLayout}
                    required>
                    <Input id="control-input" placeholder = "请输入俱乐部球队全称" {...getFieldProps('fullName')}/>
                </FormItem>

                <FormItem
                    id='control-input'
                    label="俱乐部球队简称"
                    {...formItemLayout}
                    required>
                    <Input id="control-input" placeholder = "请输入俱乐部球队简称" {...getFieldProps('name')}/>
                </FormItem>

                <FormItem
                    id='control-input'
                    label="领队"
                    {...formItemLayout}
                    required>
                    <Input id="control-input" placeholder = "请输入领队姓名" {...getFieldProps('leader')}/>
                </FormItem>

                <FormItem
                    id='control-input'
                    label="教练员"
                    {...formItemLayout}
                    required>
                    <Input id="control-input" placeholder = "请输入教练员姓名" {...getFieldProps('coach')}/>
                </FormItem>

                <FormItem
                    id='control-input'
                    label="助理教练"
                    {...formItemLayout}>
                    <Input id="control-input" placeholder = "请输入助理教练姓名" {...getFieldProps('coachAssistant')}/>
                </FormItem>

                <FormItem
                    id='control-input'
                    label="队医"
                    {...formItemLayout}>
                    <Input id="control-input" placeholder = "请输入队医姓名" {...getFieldProps('doctor')}/>
                </FormItem>

                <FormItem
                    id='control-input'
                    label="翻译"
                    {...formItemLayout}>
                    <Input id="control-input" placeholder = "请输入助理翻译姓名" {...getFieldProps('translater')}/>
                </FormItem>

                <FormItem
                    id='control-input'
                    label="主场球衣颜色"
                    {...formItemLayout}>
                    <Input id="control-input" placeholder = "请输入主场球衣颜色" {...getFieldProps('homeTeamShirtColor')}/>
                </FormItem>

                <FormItem
                    id='control-input'
                    label="客场球衣颜色"
                    {...formItemLayout}>
                    <Input id="control-input" placeholder = "请输入客场球衣颜色" {...getFieldProps('awayTeamShirtColor')}/>
                </FormItem>

                <FormItem wrapperCol={{span: 8, offset: 10}} style={{marginTop: 24}}>
                    <Button type="ghost" onClick={this.showModal}>取消</Button>
                    &nbsp; &nbsp; &nbsp;
                    <Button type="primary" htmlType="submit">确定</Button>
                </FormItem>
            </Form>
        )
    }
}

myForm = Form.create()(myForm)
export default myForm
