import { Container, Row, Col, Button, Card } from 'react-bootstrap'
import AllBooks from "../assets/horror.json"


const AllTheBooks = () => {
    return (
        <Container >
            <Row className="d-flex justify-content-center">
                {
                    AllBooks.map((book) => {
                        return (
                            <Col key={book.asin} sm={12} md={6} lg={3} xl={3} className="d-flex justify-content-evenly">
                                <Card style={{ width: '18rem' }} className="mb-4">
                                    <Card.Img variant="top" src={book.img} className="h-75" />
                                    <Card.Body className="d-flex flex-column justify-content-end">
                                        <Card.Title>{book.title}</Card.Title>
                                        <Card.Text>
                                            Category: {book.category} | Price: {book.price} €
                                        </Card.Text>
                                        <Button variant="warning">Add to cart</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })
                }
            </Row>
        </Container>
    )
}

export default AllTheBooks;