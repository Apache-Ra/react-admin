import React, {Component} from 'react';

export default class PersonnelManagement extends Component {
    state = {
        current: 'PersonnelManagement',
        title: '人员管理'
    }

    render() {
        return (
            <div id="PersonnelManagement">
                人员管理
            </div>
        )
    }

}