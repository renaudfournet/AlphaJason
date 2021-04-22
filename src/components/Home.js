import React from 'react'

import token from '../credentials'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      account: []
    }
  }

  componentDidMount() {
    fetch('https://lichess.org/api/account', {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
      .then((res) => res.json())
      .then(
        (result) => {
          console.log('This is data', result)

          this.setState({
            account: result
          })
        },
        (error) => {
          this.setState({
            error
          })
        }
      )
  }

  render() {
    const { account, error } = this.state

    if (error) {
      return <div>Erreur : Il y a une erreur</div>
    } else {
      return <h1>{account.id}</h1>
    }
  }
}

export default Home
