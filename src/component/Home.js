import React, { Component } from 'react';
import { Form, Button } from "react-bootstrap";
import axios from 'axios';

const instance =  axios.create({
    baseURL: 'http://3.12.85.112/api'
});

class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            todolists: [],
            name: null,
            description: null
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleButtonSubmit = this.handleButtonSubmit.bind(this)
        this.fetchdata = this.fetchdata.bind(this)
        this.deletetodo = this.deletetodo.bind(this)
    }
    handleChange=(event)=>{
        let name = event.target.name;
        let value = event.currentTarget.value;
        this.setState({
            [name]: value
        })
       
    }

    handleButtonSubmit=(e)=>{
        instance.post('/todo/add', {
            name: this.state.name,
            description: this.state.description
        })
        .then(data => this.fetchdata())
        .catch(err => {
            console.log(err);
            return null;
        });
        document.getElementById("todo-form").reset();
    }

    componentDidMount() {
        this.fetchdata();
    }
    fetchdata = () => {
        instance.get("/todo")
        .then(data => this.setState({ todolists: data.data.results }))
        .catch(err => {
            console.log(err);
            return null;
        });
    };

    deletetodo = (id) => {
        instance.delete("/todo/"+id+"")
        .then(data => this.fetchdata())
        .catch(err => {
            console.log(err);
            return null;
        });
    };

    render() {   
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 padding-zero">
                            <Form id="todo-form">
                            <div className="input-group">
                                <input type="text" onChange={this.handleChange} className="form-control" id="name" name="name" placeholder="Enter Todo Name"></input>
                                <input type="text" onChange={this.handleChange} className="form-control" id="description" name="description" placeholder="Enter Todo Description"></input>
                                <Button type="button" onClick={this.handleButtonSubmit} className="btn-addtod bg-base" data-toggle="modal" data-target="#todo_form_modal">
                                    ADD TO-DO
                                </Button>
                            </div>
                            </Form>
                        </div>
                        <table className="table">
                            <thead className="bg-base">
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                                {this.state.todolists.length === 0 ? (
                                    <tr><td colSpan="3">No Todo Found</td></tr>
                                ) : (
                                    this.state.todolists.map((data) => {
                                        return (
                                            <tr key={data.id}><td>{data.id}</td><td>{data.name}</td><td>{data.description}</td><td><Button className="fa fa-trash" onClick={() => this.deletetodo(data.id)} aria-hidden="true"></Button></td></tr>
                                        )
                                    }))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Home

