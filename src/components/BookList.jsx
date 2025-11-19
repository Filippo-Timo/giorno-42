import { Container, Row, Col, Button, Card } from 'react-bootstrap'
// import AllBooks from "../assets/horror.json"
import SingleBook from './SingleBook'

const BookList = ({ AllBooks }) => {
    return (
        <Container >
            <Row className="d-flex justify-content-center">
                {
                    AllBooks.map((n) => {
                        return (
                            <SingleBook n={n} key={n.asin} />
                        )
                    })
                }
            </Row>
        </Container>
    )
}

export default BookList;