import React from 'react';
import axios from 'axios';
import '../styles.css'

const randomJoke_url = "https://api.chucknorris.io/jokes/random";
const JokesCategories_url = 'https://api.chucknorris.io/jokes/categories';
const jokeCategory_url = 'https://api.chucknorris.io/jokes/random?category';

export default class Components121 extends React.Component {

    state = {
        randomJoke: '',
        categoryJoke: '',
        jokesCategories: []
    }

    // 1
    getRandomJoke = async () => {
        try {
            const response = await axios.get(randomJoke_url);
            this.setState({randomJoke: response.data.value})
        } catch(err) {
            console.log(err);
        }
        
    }

    //2
    componentDidMount = () => {
        this.getJokesCategories();
    }

    getJokesCategories = async () => {
        try {
            const response = await axios.get(JokesCategories_url);
            this.setState({jokesCategories: response.data});
        } catch(err) {
            console.log(err);
        }
    }

    renderJokesCategories = () => {
        return (
            this.state.jokesCategories.map((categoryName, index) => {
                return (
                    <button 
                        className={categoryName} 
                        key={index} 
                        style={{margin: "0 1vh"}}
                        onClick={() => {this.getCategoryJoke(categoryName)}}>
                    {categoryName}</button>
                )
            })
        );
    }

    getCategoryJoke = async (categoryName) => {
        try {
            const response = await axios.get(jokeCategory_url, {
                params: { query: categoryName }
            });
            this.setState({categoryJoke: response.data.value})
        } catch(err) {
            console.log(err);
        }
    }

    render = () => {

        return (
            <div>
                <div className="random-joke">
                    <button onClick={this.getRandomJoke}>Random Joke</button>
                    <p>{this.state.randomJoke}</p>
                </div>
                <div className="jokes-categories">
                    <div>
                        {this.renderJokesCategories()}
                    </div>
                    <p class>{this.state.categoryJoke}</p>
                </div>
            </div>
            
        )
    }
}
