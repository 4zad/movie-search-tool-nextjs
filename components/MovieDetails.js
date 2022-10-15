import { Container, Row, Col } from 'react-bootstrap';

export default function MovieDetails(props) {
  return (
    <>
      <Container>
        <Row>
          {props.movie.poster ? (
            <Col md>
              <img src={props.movie.poster} alt='poster' className='img-fluid w-100' />
              <br />
              <br />
            </Col>
          ) : (
            ''
          )}
          <Col md>
            <p>
              <strong>Directed By:</strong> {props.movie.directors.join(', ')}
              <br />
              <br />
              {props.movie.fullplot}
              <br />
              <br />
              <strong>Cast:</strong> {props.movie.cast.length > 0 ? props.movie.cast.join(', ') : 'noValue'}
              <br />
              <br />
              <strong>Awards:</strong> {props.movie.awards.text}
              <br />
              <strong>IMDB Rating:</strong> {props.movie.imdb.rating} ({props.movie.imdb.votes} votes)
              <br />
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

// defines default props if any properties did not recieve values when rendering component
MovieDetails.defaultProps = {
  movie: { error: 'ERROR: There was an issue retrieving the specified movie.' },
};
