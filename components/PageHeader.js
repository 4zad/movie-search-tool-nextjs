import { Card } from 'react-bootstrap';
export default function PageHeader(props) {
  return (
    <>
      <Card>
        <Card.Body>
          <h5>
            <strong>{props.text}</strong>
          </h5>
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
