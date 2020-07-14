import React, { Component } from 'react'
import axios from 'axios';

export default class CreateNote extends Component {

    state={
        users:[],
        userSelected:''
    }

    async componentDidMount(){
       const res = await axios.get('http://localhost:4000/api/users');
       this.setState({users: res.data.map(user => user.username)})
    }

    onSubmit = (e) => {
       e.preventDefault();
    }

    onInputChange= e =>{
        console.log(e.target.value)
        this.setState({
            userSelected: e.target.value
        })
    }

    render() {
        return (
           <div className="colmd-6 offset-md-3">
            <div className="card card-body">
                <h3>Crea una nota</h3>

                {/** Select User */}

                <div className="form-group">
                    <select 
                        className="form-control" 
                        name="userSelected"
                        onChange={this.onInputChange}>
                        {
                            this.state.users.map(user => <option key={user} value={user}>
                                {user}
                                </option>
                            )
                        }
                    </select>
                </div>

                <div className="form-group">
                    <input 
                        type="text"
                        className="form-control"
                        placeholder="Tittle"
                        name="tittle"
                        required/>
                </div>

                <div className="form-group">
                    <textarea name="content" className="form-control" placeholder="Content" required></textarea>
                </div>

                <form onSubmit={this.onSubmit}> 
                    <button type="submit" className="btn btn-primary">
                        Save
                    </button>
                </form>      
            </div> 
           </div>
        )
    }
}
