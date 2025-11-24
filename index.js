import axios from "axios"; // Pulling in axios

let backup_array = ['Meaning is about making a difference, not having an audience.', 'You don’t have to become something you’re not to be better than you were.', 'I didn’t get there by wishing for it or hoping for it, but by working for it.'] // Prebuilt array incase soemthing goes wrong
let names = ['Adam Grant', 'Sidney Poitier', 'Estée Lauder']

axios.get('https://zenquotes.io/api/random') // Making the api call
    .then(function(response) {
        console.log('Here is a motivational qoute for you: ')
        console.log()//spacing
        let quote = response.data[0].q // Isolates down to just the quote
        let author = response.data[0].a // isolates author
        console.log(`"${quote}" - ${author}`)
        console.log()// Spacing
    })
    .catch(function(error) {
        console.log(`could not fetch a quote. Try again later.`)
        console.log(" ") // Spacing between the error message and the pre generated qoute
        let motArrayIndex = Math.floor(Math.random() * 3) // Generates a random number to pull from my pre bult array
        console.log(`" ${backup_array[motArrayIndex]}"`) // Prints out the qoute using the array index generated before
        console.log(`~ ${names[motArrayIndex]}`)
    })