import './Statistics.css'
import {Table} from 'react-bootstrap'

function Statistics(props) {
  if (props.showing){
      return (
        <div  className="Statistics">
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th >Pais</th>
                <th>Distancia</th>
                <th className="stt__colInvoc">Invocaciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Argentina</td>
                <td>0 Km</td>
                <td className="stt__colInvoc">3</td>
              </tr>
              <tr>
                <td>Uruguay</td>
                <td>800 Km</td>
                <td className="stt__colInvoc">5</td>
              </tr>
              <tr>
                <td>Brasil</td>
                <td>1800 Km</td>
                <td className="stt__colInvoc">2</td>
              </tr>
            </tbody>
          </Table>
          <p>Greater distance traveled: {"1800 Km"} </p>
          <p>Shortest distance traveled: {"1800 Km"} </p>
          <p>Average distance traveled: {"1800 Km"} </p>
        </div>
      )
  } else {
    return ""
  }
}

export default Statistics
