import axios from "axios"; // Pulling in axios

let backup_array = ['Meaning is about making a difference, not having an audience.', 'You don’t have to become something you’re not to be better than you were.', 'I didn’t get there by wishing for it or hoping for it, but by working for it.'] // Prebuilt array incase soemthing goes wrong
let names = ['Adam Grant', 'Sidney Poitier', 'Estée Lauder']

axios.get('https://zenquotes.io/api/random') // Making the api call
    .then(function(response) {
        let quote = response.data[0].q // Isolates down to just the quote
        let author = response.data[0].a // isolates author
        
        let borderLines = '='.repeat(quote.length + author.length) // We havent't learned the repeat property, but it does exactly what it sounds like. It repeats whatever its attached to for the numebr of times specified. -continued
        // What I did was take the length of the quote and author and had the '=' repeat for as many characters as was in the quote + authors name. I'm not sure why it cuts off at the begining of the last name though. 
        // I aslo threw in some empty console.logs to make some spacing.

        console.log('Here is a motivational qoute for you: ')
        console.log()
        console.log(borderLines)
        console.log()
        console.log(`"${quote}" - ${author}`)
        console.log()
        console.log(borderLines)

    })
    .catch(function(error) {
        console.log(`could not fetch a quote. Try again later.`)
        console.log() // Spacing between the error message and the pre generated qoute
        let motArrayIndex = Math.floor(Math.random() * 3) // Generates a random number to pull from my pre bult array

        let quote = backup_array[motArrayIndex]
        let author = names[motArrayIndex]

        let borderLines = '='.repeat(quote.length + author.length)

        console.log('Here is a motivational qoute for you: ')
        console.log()
        console.log(borderLines)
        console.log()
        console.log(`"${quote}" - ${author}`)
        console.log()
        console.log(borderLines)

    })