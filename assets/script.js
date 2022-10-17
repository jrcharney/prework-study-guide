/* File: script.js
 * Info: add functionality to our HTML page.
 * Note: Like with my CSS file, expect some opinions.
 */

// HEY! Stop using "var" for your variables! Use "let".
//let topics = "HTML, CSS, Git, JavaScript";
// console.log(topics);

let topics = ["HTML", "CSS", "Git", "JavaScript"];  // topics is defined in the global scope

let randomTopic = topics[Math.floor(Math.random() * topics.length)];

function listTopics(){
    for(let x = 0; x < topics.length; x++) {
        console.log(topics[x]);
    }
}

// let topic = 'HTML';

/*
// I'm making a copy of this. We might use topic instead of random topic later.
function selectTopic(){
    if(topic === 'HTML'){
        console.log("Let's study HTML!");
    }else if(topic === 'CSS'){
        console.log("Let's study CSS!")
    }else if(topic === 'Git'){
        console.log("Let's study Git!")
    }else if(topic === 'JavaScript'){
        console.log("Let's study JavaScript!")
    }else{
        console.log("Please try again!");       // It shouldn't reach here.
    }
}
*/

function selectTopic(){
    if(randomTopic === 'HTML'){
        console.log("Let's study HTML!");
    }else if(randomTopic === 'CSS'){
        console.log("Let's study CSS!")
    }else if(randomTopic === 'Git'){
        console.log("Let's study Git!")
    }else if(randomTopic === 'JavaScript'){
        console.log("Let's study JavaScript!")
    }else{
        console.log("Please try again!");       // It shouldn't reach here.
    }
}

console.log("Here are the tolics we learned through Prework");
listTopics();
console.log("Which topic should we study first?");
selectTopic();
