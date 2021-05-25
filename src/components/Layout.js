import Dev from './Dev'
import Header from './Header'
import Nav from './Nav'
import TableRanking from './TableRanking'

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <Dev />
      <Header />
      <TableRanking />
    </>
  )
}

export default Layout
