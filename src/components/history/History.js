import './History.css'
import {Table} from 'react-bootstrap'

function History(props) {
  if (props.showing){    
    return (
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Order</th>
              <th >IP</th>
              <th>Pais</th>
            </tr>
          </thead>
          <tbody>
            {props.data.map((item, index)=>(
              <tr>
                <td key={index}>{item.id}</td>
                <td>{item.ip}</td>
                <td>{item.country}</td>
              </tr>
            ))}
          </tbody>
        </Table>    
    )
  } else {
    return ""
  }
}

export default History
