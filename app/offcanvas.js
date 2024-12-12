'use client'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="dark" onClick={handleShow} className="me-2">
        About Me
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>About Me</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className='text'> I was born and raised in the Philippines, My main interest is understanding the mind, 
        which branches into honing my creativity and design to express, tell stories, and convey ideas effectively. 
        I am also interested in the ability to read and analyze data to find patterns in certain behaviors, 
        as well as understanding the limits and ways to maintain stability in nutrition and individual well-being.</div>
        
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default function Example() {
  return (
    <>
      {['bottom'].map((placement, idx) => (
        <OffCanvasExample key={idx} placement={placement} name={placement} />
      ))}
    </>
  );
}

