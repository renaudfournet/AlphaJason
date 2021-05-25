import React, { Component } from 'react'
import { Icon, Menu } from 'semantic-ui-react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

class Nav extends Component {
  render() {
    return (
      <>
        <Router>
          <Menu icon="labeled">
            <Menu.Item as={Link} name="AlphaJason" to="/">
              <Icon name="chess" />
              AlphaJason
            </Menu.Item>
            <Menu.Item as={Link} name="ranking" to="ranking">
              <Icon name="ordered list" />
              Ranking
            </Menu.Item>
            <Menu.Item name="other">
              <Icon name="plus" />
              Other
            </Menu.Item>
          </Menu>
        </Router>
      </>
    )
  }
}

export default Nav
