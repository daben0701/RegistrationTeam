import React from 'react'
import ReactDom from 'react-dom'
/*import Calendar from './calendar.js'*/

/*ReactDom.render(
   <Calendar />, document.getElementById("app")
);*/
import {Router, Route, Link, hashHistory, IndexRoute, Redirect, IndexLink} from 'react-router'
import {Menu, Icon, Switch} from 'antd'
const SubMenu = Menu.SubMenu

import 'font-awesome/css/font-awesome.min.css'
import './main.css'
import myTable from './components/table.js'
import myForm from './components/form.js'
import Login from './components/login.js'

const ACTIVE = { color: 'red' }

class Sider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: '',
            username: '',
        };
    }

    handleClick = (e) => {
        this.setState({
            current: e.key,
        });
    }

    componentDidMount = () =>{
        this.getUser();
    }

    getUser = () => {
        fetch("http://101.200.130.39/api/user/current", {
            method: "GET",
            mode: "cors",
            headers: {
                'Authorization': 'bearer ' + window.localStorage.token,
            }
        })
        .then((res) => {
            res.json().then((data) => {
                this.setState({
                    username: data.name,
                });
            })
        })
        .catch((error) => {
            console.log(error);
        })
    }

    render = () => {
        return (
            <div>
                <div id="leftMenu">
                    <img src="build/logo.png" width="50" id="logo" />
                    <Menu theme="dark"
                        onClick = {this.handleClick}
                        style={{width: "150px"}}
                        defaultOpenKeys={['sub1', 'sub2']}
                        defaultSelectedKeys={[this.state.current]}
                        mode="inline">
                        <SubMenu key="sub1" title={<span><Icon type="mail"/><span>报名信息</span></span>}>
                            <Menu.Item key="1"><Link to="/index/myForm">球队信息</Link></Menu.Item>
                            <Menu.Item key="2"><Link to="/index/myTable">球员信息</Link></Menu.Item>
                        </SubMenu>
                    </Menu>
                </div>
                <div id="rightWrap">
                    <Menu mode="horizontal">
                        <SubMenu title={<span><Icon type="user" />{this.state.username}</span>}>
                            
                        </SubMenu>
                    </Menu>
                    <div className="right-box">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

ReactDom.render(
    (
        <Router history={hashHistory} >
            <Route path="/" >
                <IndexRoute component={Login}/>
                <Route path="login" component={Login} />
                <Route path="index" component={Sider}>
                    <Route path="myForm(/:id)" component={myForm} />
                    <Router path="myTable(/:id)" component={myTable} />
                </Route>
            </Route>
        </Router>
    ), document.getElementById('app')
);
