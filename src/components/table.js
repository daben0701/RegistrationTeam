import React, {Component} from 'react'
import moment from 'moment'
import {Table, Icon, Button, Popconfirm, Form, Input, InputNumber, Select, Checkbox, DatePicker, Col, Radio, Modal, message} from 'antd'
import { Link, hashHistory} from 'react-router';
import myForm from './form.js'

const FormItem = Form.Item;
const Option = Select.Option;
const CheckboxGroup = Checkbox.Group;

const CreateForm = Form.create()(
  (props) => {
    const { createVisible, onCreateFormCancel, onCreate, form } = props;
    const { getFieldDecorator } = form;
    const formItemLayout = {
      labelCol: { span: 7 },
      wrapperCol: { span: 15 },
    };
    const options = [
        { label: '大前锋', value: '大前锋' },
        { label: '小前锋', value: '小前锋' },
        { label: '中锋', value: '中锋' },
        { label: '得分后卫', value: '得分后卫' },
        { label: '组织后卫', value: '组织后卫' },
    ];
    return (
      <Modal
        visible={createVisible}
        title="新建球员信息"
        okText="确定"
        cancelText="取消"
        onCancel={onCreateFormCancel}
        onOk={onCreate}
      >
        <Form>
          <FormItem {...formItemLayout} label="姓名">
            {getFieldDecorator('name', {
              rules: [{ required: true, message: '请输入球员姓名!' }],
            })(
              <Input placeholder="球员姓名"/>
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="号码">
            {getFieldDecorator('number', {
              rules: [{ required: true, message: '请输入球员号码!' }],
            })(
              <InputNumber placeholder="球员号码" style={{width: "100%"}}/>
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="出生日期">
            {getFieldDecorator('birthDate', {
              rules: [{ required: true, message: '请输入球员出生日期!' }],
            })(
              <DatePicker placeholder="球员出生日期" style={{width: "100%"}}/>
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="身高(m)">
            {getFieldDecorator('height', {
              rules: [{ required: true, message: '请输入球员身高!' }],
            })(
              <InputNumber placeholder="球员身高" style={{width: "100%"}}/>
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="体重(kg)">
            {getFieldDecorator('weight', {
              rules: [{ required: true, message: '请输入球员体重!' }],
            })(
              <InputNumber placeholder="球员体重" style={{width: "100%"}}/>
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="民族/国籍">
            {getFieldDecorator('nation', {
              rules: [{ required: true, message: '请输入球员民族/国籍!' }],
            })(
              <Input placeholder="球员民族/国籍"/>
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="出生地">
            {getFieldDecorator('birthPlace', {
              rules: [{ required: true, message: '请输入球员出生地!' }],
            })(
              <Input placeholder="球员出生地"/>
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="身份证/其它证件号码">
            {getFieldDecorator('idNumber', {
              rules: [{ required: true, message: '请输入球员身份证/其它证件号码!' }],
            })(
              <InputNumber placeholder="球员身份证/其它证件号码" style={{width: "100%"}}/>
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="位置">
            {getFieldDecorator('roleNames', {
              rules: [{ required: true, message: '请输入球员位置!' }],
            })(
              <CheckboxGroup options={options} />
            )}
          </FormItem>
        </Form>
      </Modal>
    );
  }
);

const EditInfoForm = Form.create()(
  (props) => {
    const options = [
        { label: '大前锋', value: '大前锋' },
        { label: '小前锋', value: '小前锋' },
        { label: '中锋', value: '中锋' },
        { label: '得分后卫', value: '得分后卫' },
        { label: '组织后卫', value: '组织后卫' },
    ];
    const { visible, onCancel, onEdit, data, form } = props;
    const { getFieldDecorator } = form;
    const formItemLayout = {
      labelCol: { span: 7 },
      wrapperCol: { span: 15 },
    };
    return (
      <Modal
        visible={visible}
        title="编缉球员信息"
        okText="确定"
        cancelText="取消"
        onCancel={onCancel}
        onOk={onEdit}
      >
        <Form>
          <FormItem {...formItemLayout} label="姓名">
            {getFieldDecorator('name', {
              rules: [{ required: true, message: '请输入球员姓名!' }],
            })(
              <Input placeholder="球员姓名"/>
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="号码">
            {getFieldDecorator('number', {
              rules: [{ required: true, message: '请输入球员号码!' }],
            })(
              <InputNumber placeholder="球员号码" style={{width: "100%"}}/>
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="出生日期">
            {getFieldDecorator('birthDate', {
              rules: [{ required: true, message: '请输入球员出生日期!' }],
            })(
              <DatePicker placeholder="球员出生日期" style={{width: "100%"}}/>
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="身高(m)">
            {getFieldDecorator('height', {
              rules: [{ required: true, message: '请输入球员身高!' }],
            })(
              <InputNumber placeholder="球员身高" style={{width: "100%"}}/>
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="体重(kg)">
            {getFieldDecorator('weight', {
              rules: [{ required: true, message: '请输入球员体重!' }],
            })(
              <InputNumber placeholder="球员体重" style={{width: "100%"}}/>
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="民族/国籍">
            {getFieldDecorator('nation', {
              rules: [{ required: true, message: '请输入球员民族/国籍!' }],
            })(
              <Input placeholder="球员民族/国籍"/>
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="出生地">
            {getFieldDecorator('birthPlace', {
              rules: [{ required: true, message: '请输入球员出生地!' }],
            })(
              <Input placeholder="球员出生地"/>
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="身份证/其它证件号码">
            {getFieldDecorator('idNumber', {
              rules: [{ required: true, message: '请输入球员身份证/其它证件号码!' }],
            })(
              <InputNumber placeholder="球员身份证/其它证件号码" style={{width: "100%"}}/>
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="位置">
            {getFieldDecorator('roleNames', {
              rules: [{ required: true, message: '请输入球员位置!' }],
            })(
              <CheckboxGroup options={options} />
            )}
          </FormItem>
          <FormItem {...formItemLayout}>
            {getFieldDecorator('id', {
              rules: [{ required: true }],
            })(
              <Input style={{display: "none"}}/>
            )}
          </FormItem>
        </Form>
      </Modal>
    );
  }
);

class CollectionsPage extends React.Component{
  constructor(props) {
      super(props);
      this.state = {
          visible: false,
          data: props.data,
      };
  }
  showModal() {
    this.setState({ visible: true });
  }
  handleCancel() {
    this.setState({ visible: false });
  }
  handleCreate = () => {
    const form = this.form;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }
      
      values.birthDate = values.birthDate.format();
      values.roleNames = values.roleNames.join(",");
      console.log('Received values of form: ', values);
      fetch("http://123.56.253.83/api/player", {
          method: "POST",
          mode: "cors",
          //credentials: "include",
          headers: {
              'Content-Type': 'application/json;charset=utf-8',
              'Authorization': 'bearer ' + document.cookie,
          },
          body: JSON.stringify(values)
      })
      .then((res) => {
          if(res.status != 200){
              hashHistory.push('/login');
          }
          message.success("创建球员信息成功");
      })
      .catch((error) => {
          console.log(error);
      })
      const dataSource = this.state.data;
      const newData = {
        key: this.state.data.length + 1,
        name: values.name,
        number: values.number,
        birthDate: values.birthDate,
        height: values.height,
        weight: values.weight,
        roleNames: values.roleNames,
        nation: values.nation,
        birthPlace: values.birthPlace,
        idNumber: values.idNumber
      };
      this.setState({
        data: [...dataSource, newData]
      });

      form.resetFields();
      this.setState({ visible: false });
    });
  }

  saveFormRef = (form) => {
    this.form = form;
  }

  render() {
    return (
        <div style={{ marginBottom: 16 }} className="btn-group">
            <span>
                <Button type="primary" onClick={this.showModal.bind(this)}>
                    <Icon type="plus" /> 添加球员信息
                </Button>
            </span>
            <CollectionCreateForm
                ref={this.saveFormRef}
                visible={this.state.visible}
                onCancel={this.handleCancel}
                onCreate={this.handleCreate}
                />


        </div>
    );
  }
}

export default class myTable extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            tData: [],
            selectedRowKeys: [],
            createVisible: false,
        };
    }

    componentDidMount = () => {
        const players = [];

        fetch("http://123.56.253.83/api/player", {
            method: "GET",
            mode: "cors",
            //credentials: "include",
            headers: {
                'Authorization': 'bearer ' + document.cookie,
            }
        })
        .then((res) => {
            if(res.status !== 200){
                hashHistory.push('/login');
            }
            res.json().then((data) => {
                for(let i = 0; i < data.length; i++){
                    players.push({
                        key: i,
                        name: data[i].name,
                        number: data[i].number,
                        birthDate: data[i].birthDate.split("T")[0],
                        height: data[i].height,
                        weight: data[i].weight,
                        roleNames: data[i].roleNames,
                        nation: data[i].nation,
                        birthPlace: data[i].birthPlace,
                        idNumber: data[i].idNumber,
                        id: data[i].id,
                    });
                }
                this.setState({
                    tData: players
                });
            })
        })
        this.setState({
            tData: players,
            visible: false,
            editFormVisible: false,
            createVisible: false,
            index: 0,
        });
    }

    onSelectChange = (selectedRowKeys) => {
        console.log('selectedRowKeys changed:', selectedRowKeys);
        this.setState({selectedRowKeys});
    }

    showModal = () => {
        this.setState({
            createVisible: true
        });
    }

    handleOk() {
        this.setState({ loading1: true });
        setTimeout(() => {
            this.setState({ loading1: false, visible: false });
            console.log('ok');
            openNotification();
        }, 2000);
    }

    handleCancel() {
        this.setState({ visible: false });
    }

    handleEdit= () => {
        const form = this.form, index = this.state.index;
        form.validateFields((err, values) => {
        if (err) {
            return;
        }
        
        values.birthDate = values.birthDate.format();
        values.roleNames = values.roleNames.join(",");
        console.log('Received values of form: ', values);
        fetch("http://123.56.253.83/api/player/" + values.id, {
            method: "PUT",
            mode: "cors",
            //credentials: "include",
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'Authorization': 'bearer ' + document.cookie,
            },
            body: JSON.stringify(values)
        })
        .then((res) => {
            if(res.status != 200){
                hashHistory.push('/login');
            }
            message.success("编缉球员信息成功");
        })
        .catch((error) => {
            console.log(error);
        })
        const dataSource = this.state.tData;

        let date = values.birthDate.split("T")[0];
        
        dataSource[index].name = values.name;
        dataSource[index].number = values.number;
        dataSource[index].birthDate = date;
        dataSource[index].height = values.height;
        dataSource[index].weight = values.weight;
        dataSource[index].nation = values.nation;
        dataSource[index].birthPlace = values.birthPlace;
        dataSource[index].idNumber = values.idNumber;
        dataSource[index].roleNames = values.roleNames;

        this.setState({
          tData: [...dataSource]
        });
        //form.resetFields();
        this.setState({ editFormVisible: false });
      });
  }

    confirm() {
        message.success('点击了确定');
    }

    cancel() {
        message.error('点击了取消');
    }

    saveFormRef = (form) => {
        this.form = form;
    }

    showEditForm = (index, id) => {
        this.form.setFields({
            name: {
                value: this.state.tData[index].name == null ? '' : this.state.tData[index].name
            },
            number: {
                value: this.state.tData[index].number == null ? '' : this.state.tData[index].number
            },
            birthDate: {
                value: this.state.tData[index].birthDate == null ? '' : moment(this.state.tData[index].birthDate, 'YYYY-MM-DD')
            },
            height: {
                value: this.state.tData[index].height == null ? '' : this.state.tData[index].height
            },
            weight: {
                value: this.state.tData[index].weight == null ? '' : this.state.tData[index].weight
            },
            roleNames: {
                value: this.state.tData[index].roleNames == null ? '' : this.state.tData[index].roleNames.split(",")
            },
            nation: {
                value: this.state.tData[index].nation == null ? '' : this.state.tData[index].nation
            },
            birthPlace: {
                value: this.state.tData[index].birthPlace == null ? '' : this.state.tData[index].birthPlace
            },
            idNumber: {
                value: this.state.tData[index].idNumber == null ? '' : this.state.tData[index].idNumber
            },
            id: {
                value: this.state.tData[index].id
            }
        });
        this.setState({
            editFormVisible: true,
            index: index,
        });
    }

    handleCancel() {
        this.setState({ visible: false });
    }

    handleCreate = () => {
      const form = this.createForm;
      form.validateFields((err, values) => {
        if (err) {
          return;
        }
        
        values.birthDate = values.birthDate.format();
        values.roleNames = values.roleNames.join(",");
        console.log('Received values of form: ', values);
        fetch("http://123.56.253.83/api/player", {
            method: "POST",
            mode: "cors",
            //credentials: "include",
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'Authorization': 'bearer ' + document.cookie,
            },
            body: JSON.stringify(values)
        })
        .then((res) => {
            if(res.status != 200){
                hashHistory.push('/login');
            }
            message.success("创建球员信息成功");
            const dataSource = this.state.tData;
            const newData = {
                key: this.state.tData.length + 1,
                name: values.name,
                number: values.number,
                birthDate: values.birthDate,
                height: values.height,
                weight: values.weight,
                roleNames: values.roleNames,
                nation: values.nation,
                birthPlace: values.birthPlace,
                idNumber: values.idNumber
            };
            this.setState({
              tData: [...dataSource, newData]
            });
        })
        .catch((error) => {
            console.log(error);
        })

        form.resetFields();
        this.setState({ createVisible: false });
      });
    }

    saveCreateFormRef = (form) => {
      this.createForm = form;
    }

    closeForm = () => {
        this.setState({
            editFormVisible: false
        });
    }

    closeCreateForm = () => {
        this.setState({
            createVisible: false
        })
    }

    onDelete = (index) => {
        const dataSource = [...this.state.tData];
        //fetch("http")
        dataSource.splice(index, 1);
        this.setState({tData: dataSource});
    }

    render = () => {
        const columns = [
            {
                title: '姓名',
                width: "10%",
                dataIndex: 'name',
            },
            {
                title: '号码',
                width: '5%',
                dataIndex: 'number',
            },
            {
                title: '出生日期',
                width: '8%',
                dataIndex: 'birthDate',
            },
            {
                title: '身高(m)',
                width: '6%',
                dataIndex: "height",
            },
            {
                title: '体重(kg)',
                width: '6%',
                dataIndex: 'weight',
            },
            {
                title: '民族/国籍',
                width: '10%',
                dataIndex: 'nation',
            },
            {
                title: '出生地',
                width: '10%',
                dataIndex: 'birthPlace',
            },
            {
                title: '身份证号码/其它证件',
                width: '12%',
                dataIndex: 'idNumber',
            },
            {
                title: '位置',
                width: '22%',
                dataIndex: 'roleNames',
            },
            {
                title: '操作',
                dataIndex: 'id',
                render:(text, record, index) => {
                    return (
                        <span>
                            <a onClick={() => this.showEditForm(index, text)}>编缉  </a>
                            <Popconfirm title="确定删除该球员信息?" onConfirm={() => this.onDelete(index)}>
                                <a href="#">删除</a>
                            </Popconfirm>
                        </span>
                    )
                } ,
                width: '10%'
            }
        ];

        const {selectedRowKeys} = this.state;

        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
        };

        const pagination = {
            total: this.state.tData.length,
            showSizeChanger: true,
            onShowSizeChange(current, pageSize){
                console.log('Current: ', current, '; PageSize: ', pageSize);
            },
            onChange(current) {
                console.log('Current: ', current)
            }
        };

        return (
            <div>
                <div style={{ marginBottom: 16 }} className="btn-group">
                  <span>
                      <Button type="primary" onClick={this.showModal.bind(this)}>
                          <Icon type="plus" /> 添加球员信息
                      </Button>
                  </span>
                </div>
                <CreateForm
                    ref={this.saveCreateFormRef}
                    createVisible={this.state.createVisible}
                    onCreateFormCancel={this.closeCreateForm}
                    onCreate={this.handleCreate}
                />
                <EditInfoForm
                    ref={this.saveFormRef}
                    visible={this.state.editFormVisible}
                    onCancel={this.closeForm}
                    data={this.state.tData[this.state.index]}
                    onEdit={this.handleEdit}
                />
                <Table columns = {columns} dataSource = {this.state.tData} bordered pagination={pagination} />
            </div>
        );
    }
}
