import React, { Component } from 'react';
//IMPORTING OUR TOPICS FROM OUR TOPICS FOLDER!!!
import EvenAndOdd from '../Topics/EvenAndOdd'
import FilterObject from '../Topics/FilterObject'
import FilterString from '../Topics/FilterString'
import Palindrome from '../Topics/Palindrome'
import Sum from '../Topics/Sum'

export default class TopicBrowser extends Component {  //ONE LINE EXPORT
  render() { 
    return (
        <div>
        <EvenAndOdd />          
        <FilterObject />
        <FilterString />
        <Palindrome />
        <Sum />
      </div>
    )
  }
}

//If we take a look into the src folder we'll see that we have a components folder with a TopicBrowser and a Topics folder. Our TopicBrowser component will display a list of topics from the Topics folder. Each topic will be its own component.