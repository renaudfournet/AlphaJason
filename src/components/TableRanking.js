import 'semantic-ui-css/semantic.min.css'

import { Table } from 'semantic-ui-react'
import { useApi } from './ApiContextProvider'

function TableRanking() {
  const { data } = useApi()
  if (!data || data.length === 0) return 'We dont get data'
  return (
    <>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Type of game</Table.HeaderCell>
            <Table.HeaderCell>Ranking</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Blitz</Table.Cell>
            <Table.Cell>{data.perfs.blitz.rating}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Bullet</Table.Cell>
            <Table.Cell>{data.perfs.bullet.rating}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Classical</Table.Cell>
            <Table.Cell>{data.perfs.classical.rating}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Rapid</Table.Cell>
            <Table.Cell>{data.perfs.rapid.rating}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </>
  )
}

export default TableRanking
