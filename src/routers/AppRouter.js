import React from 'react'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'

import Header from '../components/Header'
import UtilizationDashboardPage from '../components/UtilizationDashboardPage'
import RepositoryCreatorPage from '../components/RepositoryCreatorPage'

class AppRouter extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <Switch>
                        <Route path="/" component={UtilizationDashboardPage} exact={true} />
                        <Route path="/repository-creator" component={RepositoryCreatorPage} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default AppRouter;