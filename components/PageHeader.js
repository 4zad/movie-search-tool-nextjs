import Card from 'react-bootstrap/Card';
export default function PageHeader(props) {
  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title>{props.text}</Card.Title>
        </Card.Body>
      </Card>
      <br />
    </>
  );
}

// defines default props if any properties did not recieve values when rendering component
PageHeader.defaultProps = {
  text: 'No Header',
};
