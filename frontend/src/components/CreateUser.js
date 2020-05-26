import React, { Component } from 'react'
import axios from 'axios'

export default class CreateUser extends Component {

    state = {
        users: [],
        username:''
    }

    async componentDidMount(){
       const res = await axios.get('http://localhost:4000/api/users');
       this.setState({users: res.data})
    }

    onChangeUsername = (e) => {
        this.setState({
            username: e.target.value
        })
    }

    onSubmit = async e =>{
        e.preventDefault();
        const res = await axios.post('http://localhost:4000/api/users', {
            username: this.state.username
        })
        console.log(res)
        
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <div className="card card-body">
                        <h3>create new user</h3>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <input type="text" className="form-control" onChange={this.onChangeUsername}/>
                            </div>
                        </form>
                    </div>

                    <button type="submit" className="btn btn-primary">
                        save
                    </button>
                </div>
                <div className="col-md-8">
                    <ul className="li-group">
                        {
                            this.state.users.map(user => 
                            (<li className="list-group-item list-group-item-action" key={user._id}>
                                {user.username}
                                </li>)
                                
                            )
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
