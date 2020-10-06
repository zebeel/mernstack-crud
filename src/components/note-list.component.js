import React, { Component } from "react";
import axios from "axios"
import Table from "react-bootstrap/Table"
import NoteTableRow from "./note-table-row.component"

export default class NoteList extends Component {
  constructor(props) {
    super(props);

    this.state = {notes: [], isChanged: false}
  }

  componentDidMount() {
    axios.get('http://localhost:4000/notes/').then(res => {
      this.setState({notes: res.data})
      console.log(res.data)
    }).catch((error) => {
      console.log(error)
    })
  }

  DataTable() {
    return this.state.notes.map((note, i) => {
      return <NoteTableRow note={note} key={i} />
    })
  }

  render() {
    return (
      <div className="table-wrapper mt-4">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Content</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.DataTable()}
          </tbody>
        </Table>
      </div>
    );
  }
}
