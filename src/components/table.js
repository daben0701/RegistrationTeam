import React, {Component} from 'react'
import moment from 'moment'
import {Table, Icon, Button, Popconfirm, Form, Input, InputNumber, Select, Checkbox, DatePicker, Col, Radio, Modal, message} from 'antd'
import myForm from './form.js'

const FormItem = Form.Item;
const Option = Select.Option;
const CheckboxGroup = Checkbox.Group;

const CollectionCreateForm = Form.create()(
  (props) => {
    const { visible, onCancel, onCreate, form } = props;
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
        visible={visible}
        title="新建球员信息"
        okText="确定"
        cancelText="取消"
        onCancel={onCancel}
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

const CollectionsPage = React.createClass({
  getInitialState() {
    return { visible: false };
  },
  showModal() {
    this.setState({ visible: true });
  },
  handleCancel() {
    this.setState({ visible: false });
  },
  handleCreate() {
    const form = this.form;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }
      
      values.birthDate = values.birthDate.format();
      values.roleNames = values.roleNames.join(",");
      console.log('Received values of form: ', values);
      fetch("http://123.56.253.83");
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

      form.resetFields();
      this.setState({ visible: false });
    });
  },
  saveFormRef(form) {
    this.form = form;
  },
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
  },
});

export default class myTable extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            tData: [],
            selectedRowKeys: [],
        };
    }

    componentDidMount = () => {
        const data = [];

        for(let i = 0; i < 30; i++){
            data.push({
                key: i,
                name: "daben0701",
                number: 20,
                birthDate: '2015-06-01',
                height: "196",
                weight: "68",
                roleNames: "得分后卫,大前锋,小前锋,组织后卫,中锋",
                nation: "中国",
                birthPlace: "北京",
                idNumber: "1234567890",
                id: i*2
            });
        }
        this.setState({
            tData: data,
            visible: false,
            editFormVisible: false,
            index: 0,
        });
    }

    onSelectChange = (selectedRowKeys) => {
        console.log('selectedRowKeys changed:', selectedRowKeys);
        this.setState({selectedRowKeys});
    }

    showModal() {
        this.setState({
            visible: true
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
      fetch("http://123.56.253.83");
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
                value: this.state.tData[index].name
            },
            number: {
                value: this.state.tData[index].number
            },
            birthDate: {
                value: moment(this.state.tData[index].birthDate, 'YYYY-MM-DD')
            },
            height: {
                value: this.state.tData[index].height
            },
            weight: {
                value: this.state.tData[index].weight
            },
            roleNames: {
                value: this.state.tData[index].roleNames.split(",")
            },
            nation: {
                value: this.state.tData[index].nation
            },
            birthPlace: {
                value: this.state.tData[index].birthPlace
            },
            idNumber: {
                value: this.state.tData[index].idNumber
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

    closeForm = () => {
        this.setState({
            editFormVisible: false
        });
    }

    onDelete = (index) => {
        const dataSource = [...this.state.tData];
        //fetch("http")
        dataSource.splice(index, 1);
        this.setState({dataSource});
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
                <CollectionsPage />
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
