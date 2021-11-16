import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Revenue from '../container/Admin/pages/Revenue'
import Accounts from '../container/Admin/pages/Account'
import Categorys from '../container/Admin/pages/Category'
import Foods from '../container/Admin/pages/Food'
import Settings from '../container/Admin/pages/Setting'
import AnotherSettings from '../container/Admin/pages/AnotherSetting'

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Revenue}/>
            <Route path='/accounts' component={Accounts}/>
            <Route path='/categorys' component={Categorys}/>
            <Route path='/foods' component={Foods}/>
            <Route path='/settings' component={Settings}/>
            <Route path='/anothersettings' component={AnotherSettings}/>
            <Route path='/profile' component={Settings}/>
        </Switch>
    )
}

export default Routes
