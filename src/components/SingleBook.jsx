import { Col, Card } from 'react-bootstrap'
import { Component } from 'react';


class SingleBook extends Component {
    state = "selected"
    render() {
        const { n } = this.props;
        return (
            <Col sm={12} md={6} lg={3} className="d-flex justify-content-center" key={n.asin} >
                <Card style={{ width: '18rem' }} className={this.state.selected ? 'border border-5 border-danger mb-3' : 'mb-3'} onClick={() => this.setState({ selected: !this.state.selected })} >
                    <Card.Img variant="top" src={n.img} className="h-75" />
                    <Card.Body className="align-content-center text-center" >
                        <Card.Title>{n.title}</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
        );
    }
}


export default SingleBook;