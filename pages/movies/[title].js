import useSWR from 'swr';

import { useRouter } from 'next/router';
import Error from 'next/error';
import MovieDetails from '../../components/MovieDetails';
import PageHeader from '../../components/PageHeader';

export default function Movie(props) {
  const router = useRouter();

  const api = `https://movie-api.cyclic.app`;
  const { title } = router.query;
  const urlRequest = `${api}/api/movies?page=1&perPage=10&title=${title}`;
  const { data, error } = useSWR(urlRequest);

  return (
    <>
      {data ? (
        data.length > 0 ? (
          data.map((movie) => (
            <div key={movie._id}>
              <PageHeader text={movie.title} />
              <MovieDetails movie={movie} />
            </div>
          ))
        ) : (
          <p>hello</p>
        )
      ) : null}
    </>
  );
}

// defines default props if any properties did not recieve values when rendering component
Movie.defaultProps = {};
