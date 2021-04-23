import Profile from 'lichess/dist/endpoints/profile'
import React from 'react'

import token from '../credentials'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
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
            isLoaded: true,
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
    const { account, error, isLoaded } = this.state
    if (error) {
      return <div>Error !</div>
    } else if (!isLoaded) {
      return <div>Loading</div>
    } else {
      return (
        <>
          <h1>{account.username}</h1>
          <p>{account.profile.bio}</p>
        </>
      )
    }
  }
}

export default Home
