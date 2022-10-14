import Link from 'next/link';

import { Container, Nav, Navbar } from 'react-bootstrap';

export default function MainNav(props) {
  return (
    <>
      {/* <Navbar className='fixed-top navbar-dark bg-dark'></Navbar> {/* same as "NavBar" component below *\/} */}
      <Navbar className='fixed-top navbar-dark bg-dark' bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand href='/'>Muhammad Ahmed</Navbar.Brand>
          <Nav className='me-auto'>
            <Link href='/' passHref>
              <Nav.Link>Movies</Nav.Link>
            </Link>
            <Link href='/about' passHref>
              <Nav.Link>About</Nav.Link>
            </Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
      <br />
    </>
  );
}

// defines default props if any properties did not recieve values when rendering component
MainNav.defaultProps = {};
