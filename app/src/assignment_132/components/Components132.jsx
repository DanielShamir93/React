import React from 'react';
import axios from 'axios';
import '../styles.css'

const api = 'https://randomuser.me/api/';

export default class Components132 extends React.Component {

    state ={
        avatars: [],
        filteredName: ''
    }

    componentDidMount = () => {
        this.getAvatars(100);
    }

    getAvatars = async (avatarAmount) => {
        try {
            const response = await axios.get(api, {
                params: { results: avatarAmount }
            });

            this.setState({
                avatars: response.data.results.map((avatar) => {
                    return {
                        names: avatar.name,
                        picture: avatar.picture.large
                    }
                })
            })
        } catch(err) {
            console.log(err);
        }
    }

    renderAvatars = () => {
        // Filter avatars
        const avatarsArray = this.state.avatars.filter((avatar) => {
            const firstName = avatar.names.first.toLowerCase();
            const lastName = avatar.names.last.toLowerCase();
            const fullName = firstName + lastName;

            return fullName.startsWith(this.state.filteredName.replaceAll(' ', ''));
        })
        // Render avatars
        return avatarsArray.map((avatar, index) => {
            return (
                <div key={index} className="avatar">
                    <img className="avatar-picture" src={avatar.picture} alt="avatar-picture"/>
                    <div className="avatar-name">
                        <span className="avatar-title">{avatar.names.title}</span>
                        <span className="avatar-first-name">{avatar.names.first}</span>
                        <span className="avatar-last-name">{avatar.names.last}</span>
                    </div>
                </div>
            )
        });
    }

    render = () => {
        return (
            <div className="profiles">
                
                <div className="filter">
                    <h1>Random Avatars</h1>
                    <input onChange={(e) => {this.setState({filteredName: e.target.value})}} 
                        type="text" 
                        placeholder="Filter By Name"
                    />
                </div>
                <div className="avatars">
                    {this.renderAvatars()}
                </div>
            </div>
        )
    }
}
