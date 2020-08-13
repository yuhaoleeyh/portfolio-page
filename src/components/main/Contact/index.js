import React, { useState } from 'react';
import { Form, Button, Col, Jumbotron, Image } from 'react-bootstrap';
import './css/form.scss';
import axios from 'axios';

const Contact = () => {
    const [state, setState] = useState({
        name: '',
        email: '',
        title: '',
        content: ''
      });
    
      const [result, setResult] = useState(null);

      const handleSubmit = (event) => {
        event.preventDefault();
    
        const {
          REACT_APP_EMAILJS_RECEIVER: receiverEmail,
          REACT_APP_EMAILJS_TEMPLATEID: template,
          REACT_APP_EMAILJS_USERID: user,
        } = process.env;
    
        sendFeedback(
          template,
          this.sender,
          receiverEmail,
          this.state.feedback,
          user
        );
    
        this.setState({
          formSubmitted: true
        });
      }
    
     // Note: this is using default_service, which will map to whatever
     // default email provider you've set in your EmailJS account.
      const sendFeedback = (templateId, senderEmail, receiverEmail, feedback, user) => {
        window.emailjs
          .send('default_service', templateId, {
              senderEmail,
              receiverEmail,
              feedback
            },
            user
          )
          .then(res => {
            this.setState({
              formEmailSent: true
            });
          })
          // Handle errors here however you like
          .catch(err => console.error('Failed to send feedback. Error: ', err));
      }
    
      // const sendEmail = event => {
      //   event.preventDefault();
      //   axios
      //     .post('/send', { ...state })
      //     .then(response => {
      //       setResult(response.data);
      //       setState({
      //         name: '',
      //         email: '',
      //         title: '',
      //         content: ''
      //       });
      //       console.log(response);
      //     })
      //     .catch(() => {
      //       setResult({
      //         success: false,
      //         message: 'Something went wrong. Try again later1'
      //       });
      //     });
      //     console.log(result);
      //     console.log(state.name);
      //     console.log(state.email);
      //     console.log(state.title);
      //     console.log(state.content);
      // };
    
      const onInputChange = event => {
        const { name, value } = event.target;
    
        setState({
          ...state,
          [name]: value
        });
      };
    
    return (
        <div className = "blue-class">
        <div className = "form-fill">
        {result && (
            <p className={`${result.success ? 'success' : 'error'}`}>
            {result.message}
            </p>
            )}
            <h2>
                Reach me via email below!
            </h2>
            <Form onSubmit={handleSubmit}>
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
    )
}

export default Contact;