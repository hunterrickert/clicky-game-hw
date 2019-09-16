import React, { Component } from "react";
import data from "../../data.json";
import NavBar from "../NavBar";
import ImageClick from "../ImageClick";
import "../ImageClick"


//keep track of state, 
//function to shuffle the array
//function to handle the image click
//render function to return everything you have in there
//function that reset all of the clicks back to false if the won/ lost
//

class Game extends Component {
    state = {
        data,
        score: 0,
        topScore: 0,
        result: "Click an image to begin"
    };

    //Function to shuffle data array
    shuffle = data => {
        let i = data.length - 1;
        for (i; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = data[i];
            data[i] = data[j];
            data[j] = temp;
        }
        return data;
    };
    reset = data => {
        const resetData = data.map(item => ({ ...item, clicked: false}));
        return this.shuffle(resetData)
    }

    handleGoodGuess = data => {
        const newScore = this.state.score + 1;
        const newTopScore = Math.max(this.state.topScore, newScore);

        this.setState({
            data: this.shuffle(data),
            score:newScore,
            result: "you guessed correctly",
            topScore: Math.max(this.state.topScore, newTopScore)


        })
    }
    handleBadGuess = data => {
        this.setState({
            data: this.reset(data),
            score:0,
            result: "bad guess"
    })
};

    handleImageClick = id => {
        let goodGuess = false;
        const newData = this.state.data.map(item => {
            const currentItem = { ...item };
            if (id === currentItem.id) {
                if (!currentItem.clicked) {
                    currentItem.clicked = true;
                    goodGuess = true;
                }
            }
            return currentItem;

        });
        if (goodGuess) {
            this.handleGoodGuess(newData);
        } else {
            this.handleBadGuess(newData);
        }
    };


    render() {
        return (
            <div>
                <NavBar
                    result={this.state.result}
                    score={this.state.score}
                    topScore={this.state.topScore}
                />;


        {this.state.data.map(item => (
                    <ImageClick
                        handleImageClick={this.handleImageClick}
                        key={item.id}
                        {...item}
                    />
                ))}



            </div>
        )
    }

};



export default Game;




