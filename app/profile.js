
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Example from './offcanvas';



function Profile() {
  return (
    <Container>
      <div className='aboutmecard'>
        <div className='aboutme'>
          <h1>Hello, I am Alvin Loria</h1>
          <h2>A Full-Stack Developer</h2>
          <p>Currently, Taking BS in Sports Science</p>
          <Example />
        </div>
        <div className='picContainer'>
        <Image src="static/test3.png" rounded />
        </div>
      </div>

          
    </Container>
  );
}

export default Profile;