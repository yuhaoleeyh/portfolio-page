import React from 'react';
import { Form, Button, Col, Jumbotron, Image } from 'react-bootstrap';
import './css/form.scss';

const Forms = () => {

    return (
        <div id = "form-pic">
        <div id = "form-overall">
        <div className = "form-fill">
            <h2>
                Reach me via email below!
            </h2>
            <Form>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="name" placeholder="Name" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Email" />
                    </Form.Group>
                </Form.Row>

                <Form.Group controlId="formGridAddress1">
                    <Form.Label>Title</Form.Label>
                    <Form.Control placeholder="Title" />
                </Form.Group>

                <Form.Group controlId="formGridAddress2">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows="5" placeholder="Type your message here.." />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            </div>
        </div>
        </div>
    )
}

export default Forms