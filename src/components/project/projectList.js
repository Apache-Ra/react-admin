import React, {Component} from 'react';


export default class ProjectList extends Component {
    state = {
        current: 'ProjectList',
        title: '项目列表'
    }

    render() {
        return (
            <div id="ProjectList">
                项目列表
            </div>
        )
    }

}