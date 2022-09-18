import React from 'react'
import {Card, Button} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"

const Newscard = (props) => {
  return (
    <div>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={props.src} />
    <Card.Body>
      {/* <Card.Title>Card Title</Card.Title> */}
      <Card.Text>
        {props.title}
      </Card.Text>
      <Button variant="primary">Detail</Button>
    </Card.Body>
  </Card>
  </div>
  )
}

export default Newscard