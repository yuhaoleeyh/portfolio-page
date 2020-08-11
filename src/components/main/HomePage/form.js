import React, { useState } from 'react';
import { Form, Button, Col, Jumbotron, Image } from 'react-bootstrap';
import './css/form.scss';
import axios from 'axios';

const Forms = () => {
    const [state, setState] = useState({
        name: '',
        email: '',
        title: '',
        content: ''
      });
    
      const [result, setResult] = useState(null);
    
      const sendEmail = event => {
        event.preventDefault();
        axios
          .post('/send', { ...state })
          .then(response => {
            setResult(response.data);
            setState({
              name: '',
              email: '',
              title: '',
              content: ''
            });
          })
          .catch(() => {
            setResult({
              success: false,
              message: 'Something went wrong. Try again later1'
            });
          });
      };
    
      const onInputChange = event => {
        const { name, value } = event.target;
    
        setState({
          ...state,
          [name]: value
        });
      };
    
    return (
        <div id = "form-pic">
        <div id = "form-overall">
        <div className = "form-fill">
        {result && (
            <p className={`${result.success ? 'success' : 'error'}`}>
            {result.message}
            </p>
            )}
            <h2>
                Reach me via email below!
            </h2>
            <Form onSubmit={sendEmail}>
                <Form.Row>
                    <Form.Group as={Col} controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name = "name" value = {state.name} placeholder="Name" onChange = {onInputChange}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" name = "email" value = {state.email} placeholder="Email" onChange = {onInputChange} />
                    </Form.Group>
                </Form.Row>

                <Form.Group controlId="title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type = "text" name = "title" value = {state.title} placeholder="Title" onChange = {onInputChange}/>
                </Form.Group>

                <Form.Group controlId="content">
                    <Form.Label>Content</Form.Label>
                    <Form.Control as="textarea" rows="5" type = "text" name = "content" value = {state.content} placeholder="Type your message here.." onChange = {onInputChange}/>
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