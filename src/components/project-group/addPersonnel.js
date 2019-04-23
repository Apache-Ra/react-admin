import React, {Component} from 'react';

export default class AddPersonnel extends Component {
    state = {
        current: 'AddPersonnel',
        title: '新增人员'
    }

    render() {
        return (
            <div id="AddPersonnel">
                新增人员
            </div>
        )
    }

}