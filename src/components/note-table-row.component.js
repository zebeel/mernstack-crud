import React, { Component } from "react"
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import axios from "axios"

export default class NoteTableRow extends Component {
    deleteNote = () => {
        axios.delete('http://localhost:4000/notes/delete-note/'+this.props.note._id).then((res) => {
            console.log("Note deleted")
        }).catch((error) => {
            console.log(error)
        })
    }

    render() {
        return (
            <tr>
                <td>{this.props.note._id}</td>
                <td>{this.props.note.title}</td>
                <td>{this.props.note.content}</td>
                <td>
                    <Link className="edit-link mr-2" to={"/edit-note/" + this.props.note._id}>
                        <Button size="sm" variant="primary">Edit</Button>
                    </Link>
                    <Button size="sm" variant="danger" onClick={this.deleteNote}>Delete</Button>
                </td>
            </tr>
        )
    }
}
