import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from '../Header'
import TableRanking from '../TableRanking'
import Layout from '../Layout'

function Routes() {
  return (
    <Layout>
      <BrowserRouter>
        <Switch>
          <Route path="/dev" component={Header} />
          <Route path="/ranking" component={TableRanking} />
        </Switch>
      </BrowserRouter>
    </Layout>
  )
}

export default Routes
