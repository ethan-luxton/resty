import Card from 'react-bootstrap/Card';
import './History.scss';

function History({ history}) {
  return (
    <div className="history-container">
      {history.map(({ method, url, responseJson}, index) => (
        <Card className="history-card" key={index}>
          <Card.Body>
            <Card.Title>{method} {url}</Card.Title>
            <pre>{JSON.stringify(responseJson, undefined, 2)}</pre>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default History