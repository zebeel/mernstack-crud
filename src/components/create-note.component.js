import React, { Component } from "react"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import axios from "axios"

export default class CreateNote extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      content: '',
    }
  }

  onTitleChange = (e) => {
    this.setState({title: e.target.value})
  }

  onContentChange = (e) => {
    this.setState({content: e.target.value})
  }

  onSubmit = (e) => {
    e.preventDefault()
    let newNote = {title: this.state.title, content: this.state.content}
    axios.post('http://localhost:4000/notes/create-note', newNote).then(res => {
      console.log(res.data)
      alert('Insert successfully')
    })
    this.setState({title: '', content: ''})
  }

  render() {
    return (
      <div className="form-wrapper mt-4">
        <Form onSubmit={this.onSubmit}>
          <Form.Group controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" value={this.state.title} onChange={this.onTitleChange}/>
          </Form.Group>
          <Form.Group controlId="content">
            <Form.Label>Content</Form.Label>
            <Form.Control as="textarea" rows="3" value={this.state.content} onChange={this.onContentChange}/>
          </Form.Group>
          <Button variant="danger" size="lg" block="block" type="submit">Create Note</Button>
        </Form>
      </div>
    );
  }
}
