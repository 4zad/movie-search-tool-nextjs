import Link from 'next/link';

import { Card } from 'react-bootstrap';
import MovieDetails from '../components/MovieDetails';
import PageHeader from '../components/PageHeader';

// getStaticProps function gets called at build time
// Promise-Based Syntax
export function getStaticProps() {
  const api = `https://movie-api.cyclic.app`;
  const id = `573a139af29313caabcf075d`;
  const urlRequest = `${api}/api/movies/${id}`;

  return new Promise((resolve, reject) => {
    fetch(`${urlRequest}`)
      .then((res) => res.json())
      .then((data) => {
        resolve({ props: { staticMovie: data } });
      });
  });
}
/*
// Async/Await Syntax
export async function getStaticProps() {
  const api = `https://movie-api.cyclic.app`;
  const id = `573a139ef29313caabcfe4f1`;
  const urlRequest = `${api}/api/movies/${id}`;

  const res = await fetch(urlRequest);
  const data = await res.json();

  return { props: { staticMovie: data } };
}
*/

export default function About(props) {
  return (
    <>
      <PageHeader text={'About the Developer : Muhammad Ahmed'} />
      <Card>
        <Card.Body>
          <p>
            Hi I am Muhammad. This is a short into to me and this project. I like ice cream. This site is supposed to be
            a moview database that fetches data from a REST API and renders it in a GUI. I am still in progress of
            making this. Here is just the JSON data of one movie, so you can see what I am working with:{' '}
            <Link href='https://movie-api.cyclic.app/api/movies/573a139af29313caabcf075d'>The Avengers</Link>
          </p>
        </Card.Body>
        <MovieDetails movie={props.staticMovie} />
      </Card>
    </>
  );
}
