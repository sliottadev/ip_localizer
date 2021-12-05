import './History.css'
import {Table} from 'react-bootstrap'

function History(props) {
  if (props.showing){    
    return (
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th >IP</th>
              <th>Pais</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>103.4.99.16</td>
              <td>Argentina</td>
            </tr>
            <tr>
              <td>131.0.212.0</td>
              <td>Uruguay</td>
            </tr>
            <tr>
              <td>1.33.213.199</td>
              <td>Brasil</td>
            </tr>
          </tbody>
        </Table>    
    )
  } else {
    return ""
  }
}

export default History
