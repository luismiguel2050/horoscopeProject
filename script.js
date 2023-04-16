//horoscopeProject

//signs array
const signs = ['Capricorn', 'Aquarius', 'Pisces', 'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius'];

//today options array 16
const today = ['a great day!', 'an hard day.', 'what it is','one day after yesterday', 'one day before tomorrow', 'the first day of the rest of your life', 'better', 'tiresome', 'an uncommon day','filled with regret', 'the usual','different in many ways','rejuvenating','unlucky', 'a day to remember', 'a lucky day!']

//advices array
const advices = ['take time to know yourself', 'a narrow focus brings big results', 'show up fully', 'don\'t make assumptions', 'be patient and persistent', 'in order to get, you have to give', 'luck comes from hard work', 'be your best at all times', 'stay true to yourself', 'do what you love, not what you\'re told to love', 'don\'t look back'];

//function that randomly picks an element inside each array and returns a composed message
const randMessage = () => {
    let randSign = signs[Math.floor(Math.random()*12)];
    let randToday = today[Math.floor(Math.random()*16)];
    let randAdvice = advices[Math.floor(Math.random()*11)];

    return `For the sign: ${randSign}\nToday will be ${randToday}\nMy advice is ${randAdvice}`
}

console.log(randMessage());