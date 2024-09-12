
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Example from './offcanvas';



function Profile() {
  return (
    <Container>
      <div className='aboutmecard'>
        <div className='aboutme'>
          <h1>Hello, I am AjLoria</h1>
          <h2>A Fullstack Developer</h2>
          <p>Holy did i just made a website?!</p>
          <Example />
        </div>
        
      </div>
          <Image src="static/picture.png" rounded />
    </Container>
  );
}

export default Profile;