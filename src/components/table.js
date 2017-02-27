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
            {getFieldDecorator('Name', {
              rules: [{ required: true, message: '请输入球员姓名!' }],
            })(
              <Input placeholder="球员姓名"/>
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="号码">
            {getFieldDecorator('Number', {
              rules: [{ required: true, message: '请输入球员号码!' }],
            })(
              <InputNumber placeholder="球员号码" style={{width: "100%"}}/>
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="出生日期">
            {getFieldDecorator('Birthday', {
              rules: [{ required: true, message: '请输入球员出生日期!' }],
            })(
              <DatePicker placeholder="球员出生日期" style={{width: "100%"}}/>
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="身高(m)">
            {getFieldDecorator('Height', {
              rules: [{ required: true, message: '请输入球员身高!' }],
            })(
              <InputNumber placeholder="球员身高" style={{width: "100%"}}/>
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="体重(kg)">
            {getFieldDecorator('Weight', {
              rules: [{ required: true, message: '请输入球员体重!' }],
            })(
              <InputNumber placeholder="球员体重" style={{width: "100%"}}/>
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="民族/国籍">
            {getFieldDecorator('Nation', {
              rules: [{ required: true, message: '请输入球员民族/国籍!' }],
            })(
              <Input placeholder="球员民族/国籍"/>
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="出生地">
            {getFieldDecorator('BirthPlace', {
              rules: [{ required: true, message: '请输入球员出生地!' }],
            })(
              <Input placeholder="球员出生地"/>
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="身份证/其它证件号码">
            {getFieldDecorator('IDCard', {
              rules: [{ required: true, message: '请输入球员身份证/其它证件号码!' }],
            })(
              <InputNumber placeholder="球员身份证/其它证件号码" style={{width: "100%"}}/>
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="位置">
            {getFieldDecorator('Position', {
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
    const { visible, onCancel, onCreate, data, form } = props;
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
        onOk={onCreate}
      >
        <Form>
          <FormItem {...formItemLayout} label="姓名">
            {getFieldDecorator('Name', {
              rules: [{ required: true, message: '请输入球员姓名!' }],
            })(
              <Input placeholder="球员姓名"/>
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="号码">
            {getFieldDecorator('Number', {
              rules: [{ required: true, message: '请输入球员号码!' }],
            })(
              <InputNumber placeholder="球员号码" style={{width: "100%"}}/>
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="出生日期">
            {getFieldDecorator('Birthday', {
              rules: [{ required: true, message: '请输入球员出生日期!' }],
            })(
              <DatePicker placeholder="球员出生日期" style={{width: "100%"}}/>
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="身高(m)">
            {getFieldDecorator('Height', {
              rules: [{ required: true, message: '请输入球员身高!' }],
            })(
              <InputNumber placeholder="球员身高" style={{width: "100%"}}/>
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="体重(kg)">
            {getFieldDecorator('Weight', {
              rules: [{ required: true, message: '请输入球员体重!' }],
            })(
              <InputNumber placeholder="球员体重" style={{width: "100%"}}/>
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="民族/国籍">
            {getFieldDecorator('Nation', {
              rules: [{ required: true, message: '请输入球员民族/国籍!' }],
            })(
              <Input placeholder="球员民族/国籍"/>
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="出生地">
            {getFieldDecorator('BirthPlace', {
              rules: [{ required: true, message: '请输入球员出生地!' }],
            })(
              <Input placeholder="球员出生地"/>
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="身份证/其它证件号码">
            {getFieldDecorator('IDCard', {
              rules: [{ required: true, message: '请输入球员身份证/其它证件号码!' }],
            })(
              <InputNumber placeholder="球员身份证/其它证件号码" style={{width: "100%"}}/>
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="位置">
            {getFieldDecorator('Position', {
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

      console.log('Received values of form: ', values);
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

class EditPage extends Component{
  constructor(props){
      super(props);
      this.state = {
          visible: false,
          data: this.props.data,
      }
  }
  showModal = () => {
    this.setState({ visible: true });
    this.props.onClick(this.props.index);
  }
  handleCancel = () => {
    this.setState({ visible: false });
  }
  handleCreate = () => {
    const form = this.form;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      console.log('Received values of form: ', values);
      form.resetFields();
      this.setState({ visible: false });
    });
  }
  saveFormRef = (form) => {
    this.form = form;
  }
  render() {
    return (
        <div style={{ marginBottom: 16, display: "inline"}} className="btn-group">
            <a onClick={() => this.showModal()}>编缉   </a>
            <EditInfoForm
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
        };
    }

    componentDidMount = () => {
        const data = [];

        for(let i = 0; i < 30; i++){
            data.push({
                key: i,
                name: "daben0701",
                number: 20,
                birthday: '2015-06-01',
                height: "196",
                weight: "68",
                position: "得分后卫,大前锋,小前锋,组织后卫,中锋",
                nation: "中国",
                birthPlace: "北京",
                idNo: "1234567890",
                openration: "nothing"
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

    confirm() {
        message.success('点击了确定');
    }

    cancel() {
        message.error('点击了取消');
    }

    saveFormRef = (form) => {
        this.form = form;
    }

    showEditForm = (index) => {
        this.form.setFields({
            Name: {
                value: this.state.tData[index].name
            },
            Number: {
                value: this.state.tData[index].number
            },
            Birthday: {
                value: moment(this.state.tData[index].birthday, 'YYYY-MM-DD')
            },
            Height: {
                value: this.state.tData[index].height
            },
            Weight: {
                value: this.state.tData[index].weight
            },
            Position: {
                value: this.state.tData[index].position
            },
            Nation: {
                value: this.state.tData[index].nation
            },
            BirthPlace: {
                value: this.state.tData[index].birthPlace
            },
            IDCard: {
                value: this.state.tData[index].idNo
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
                width: '7%',
                dataIndex: 'birthday',
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
                width: '15%',
                dataIndex: 'idNo',
            },
            {
                title: '位置',
                width: '22%',
                dataIndex: 'position',
            },
            {
                title: '操作',
                dataIndex: 'operation',
                render:(text, record, index) => {
                    return (
                        <span>
                            <a onClick={() => this.showEditForm(index)}>编缉  </a>
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
                   // onCreate={this.handleCreate}
                />
                <Table columns = {columns} dataSource = {this.state.tData} bordered pagination={pagination} />
            </div>
        );
    }
}
