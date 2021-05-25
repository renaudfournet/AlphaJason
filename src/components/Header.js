import { useApi } from './ApiContextProvider'

function Header() {
  const { data } = useApi()
  if (!data || data.length === 0) return 'We dont get data'
  return <p>{data.username}</p>
}

export default Header
