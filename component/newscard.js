import React from 'react'
import {Card, Button} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"

const Newscard = ({src, title, onClick}) => {
  return (
    <div className="col pt-4">
    <Card style={{ width: '18rem' }} onClick={onClick}>
    <Card.Img variant="top" src={src} style={{ height: '15rem' }}/>
    <Card.Body>
      <Card.Text>
        {title}
      </Card.Text>
    </Card.Body>
  </Card>
  </div>
  )
}

export default Newscard