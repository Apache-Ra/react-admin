import React from 'react'
import {HashRouter, Route, Switch} from 'react-router-dom';
import ProjectAnalysis from '../components/project/projectAnalysis'
import ProjectList from '../components/project/projectList'
import PermissionSettings from '../components/setting/permissionSettings'
import ProjectSetting from '../components/setting/projectSetting'
import PersonnelManagement from '../components/project-group/personnelManagement'
import AddPersonnel from '../components/project-group/addPersonnel'
import AddProject from '../components/project-group/addProject'
import DocumentManagement from '../components/documentManagement'

const RouterIndex = () => (
    <HashRouter>
        <Switch>
            <Route path="/ProjectAnalysis" component={ProjectAnalysis}/>
            <Route path="/ProjectList" component={ProjectList}/>
            <Route path="/PermissionSettings" component={PermissionSettings}/>
            <Route path="/ProjectSetting" component={ProjectSetting}/>
            <Route path="/PersonnelManagement" component={PersonnelManagement}/>
            <Route path="/AddPersonnel" component={AddPersonnel}/>
            <Route path="/AddProject" component={AddProject}/>
            <Route path="/DocumentManagement" component={DocumentManagement}/>
        </Switch>
    </HashRouter>
)


export default RouterIndex
