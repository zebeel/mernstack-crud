import React, { Component } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default class EditNote extends Component {
  constructor(props) {
    super(props)

    this.state = {
      _id: '',
      title: '',
      content: '',
    }
  }

  componentDidMount() {
    axios.get('http://localhost:4000/notes/edit-note/' + this.props.match.params.id).then(res => {
      this.setState(res.data)
    }).catch((error) => {
      console.log(error)
    })
  }

  onTitleChange = (e) => {
    this.setState({title: e.target.value})
  }

  onContentChange = (e) => {
    this.setState({content: e.target.value})
  }

  onSubmit = (e) => {
    e.preventDefault()
    let note = {_id: this.state._id, title: this.state.title, content: this.state.content}
    axios.put('http://localhost:4000/notes/update-note/' + note._id, note).then(res => {
      console.log(res.data)
      this.props.history.push('/note-list')
    }).catch((error) => {
      console.log(error)
    })
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
            <Button variant="danger" size="lg" block="block" type="submit">Update Note</Button>
          </Form>
        </div>
    );
  }
}
