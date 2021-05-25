import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Dev from '../Dev'
import Header from '../Header'
import TableRanking from '../TableRanking'
import Layout from '../Layout'

function RouterMenu() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Dev} />
          <Route path="/dev" component={Header} />
          <Route path="/ranking" component={TableRanking} />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default RouterMenu
