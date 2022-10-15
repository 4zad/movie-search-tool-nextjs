/*********************************************************************************************
 * WEB422 – Assignment 03
 *
 * Name: Muhammad Ahmed
 * Student ID: 146908207
 * Date: 09-15-2022
 *
 * I declare that this assignment is my own work in accordance with Seneca Academic Policy.
 * No part of this assignment has been copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *********************************************************************************************/

import { useState, useEffect } from 'react';

import useSWR from 'swr';

import { Pagination, Accordion } from 'react-bootstrap';
import MovieDetails from '../components/MovieDetails';
import PageHeader from '../components/PageHeader';

export default function Home() {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [pageData, setPageData] = useState([]);

  const api = `https://movie-api.cyclic.app`;
  const urlRequest = `${api}/api/movies?page=${page}&perPage=${perPage}`;
  const { data, error } = useSWR(urlRequest);

  useEffect(() => {
    if (data) {
      setPageData(data);
    }
  }, [data]);

  const previous = () => {
    if (page > 1) {
      setPage((currentValue) => currentValue - 1);
    }
  };

  const next = () => {
    if (data.length == perPage) {
      setPage((currentValue) => currentValue + 1);
    }
  };

  return (
    <>
      <PageHeader text={'Film Collection : Sorted by Date'} />
      <Accordion>
        {pageData.map((movie, index) => (
          <Accordion.Item eventKey={movie._id} key={movie._id}>
            <Accordion.Header>
              <strong>{movie.title}</strong> ({movie.year} : Directed By {movie.directors.join(', ')})
            </Accordion.Header>
            <Accordion.Body>
              <MovieDetails movie={movie} />
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
      <Pagination /*size='sm'*/>
        <Pagination.Prev onClick={() => previous()} />
        <Pagination.Item active>{page}</Pagination.Item>
        <Pagination.Next onClick={() => next()} />
      </Pagination>
    </>
  );
}
