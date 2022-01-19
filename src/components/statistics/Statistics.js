import './Statistics.css'
import {Table} from 'react-bootstrap'

function Statistics(props) {
  if (props.showing){
      return (
        <div  className="Statistics">
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th >Country</th>
                <th>Distance</th>
                <th className="stt__colInvoc">Invocations</th>
              </tr>
            </thead>
            <tbody>
              { 
                props.data!=null &&
                props.data.items.map((item, index)=>(
                  <tr key={index}>
                    <td>{item.country}</td>
                    <td>{item.distance.toFixed(2) + " Kms."}</td>
                    <td className="stt__colInvoc">{item.invoke}</td>
                  </tr>   
                ))
              }
            </tbody>
          </Table>
          <p><strong>Greater distance traveled:</strong> {(props.data!=null) ? props.data.GreaterDistance.toFixed(2) + ' Kms.' : '--- Kms.'} </p>
          <p><strong>Shortest distance traveled: </strong>{(props.data!=null) ? props.data.ShortestsDistance.toFixed(2) + ' Kms.' : '--- Kms.'} </p>
          <p><strong>Average distance traveled: </strong>{(props.data!=null) ? props.data.AverangeDistance.toFixed(2) + ' Kms.' : '--- Kms.'} </p>
        </div>
      )
  } else {
    return ""
  }
}

export default Statistics
