

// Message data
const places = [
    'london',
    'paris',
    'berlin',
    'nairobi',
    'delaware',
    'hong kong',
    'nianjing',
    'beijing',
    'austin',
    'rome'
] ;

const weathers = [
    'sunny',
    'rainy',
    'snowing',
    'blizzardy',
    'hailing',
    'turbulent',
    'breezy',
    'humid',
    'glorious'
] ;

const days = [
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
    'sunday'
] ;


// function that takes an array and returns a random item from that array
const randomItem = (arr) => {
let index = (Math.floor(Math.random()*(arr.length)))
return arr[index]
}

const messageCreator = () => {
    let place = randomItem(places)
    let weather = randomItem(weathers)
    let day = randomItem(days)

    let message = `🔮 The weather in ${place} will be ${weather} on ${day} `
    console.log(message)
}

// console.log(randomItem(places))
// console.log(randomItem(weathers))
// console.log(randomItem(days))


messageCreator()
