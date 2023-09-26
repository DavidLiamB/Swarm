const locations = [
  '🏤', '🏥', '🏭', '🏢', '🏣', '🏦', '💒', '🏟️', '🎪', '🏰', '🏬', '🏠'
]

const people = [{
  name: 'Jimbo',
  picture: '🤵',
  location: '🏤',
  hunter: false,
},
{
  name: 'Sammy',
  picture: '🙆‍♀️',
  location: '🏤',
  hunter: false
},
{
  name: 'Michael',
  picture: '👷',
  location: '🏤',
  hunter: false
},
{
  name: 'Robert',
  picture: '👷',
  location: '🏥',
  hunter: false
},
{
  name: 'Terry',
  picture: '🤴',
  location: '🏥',
  hunter: false
},
{
  name: 'Bill',
  picture: '🕵️',
  location: '🏥',
  hunter: false
},
{
  name: 'Marie',
  picture: '👩‍🍳',
  location: '🏭',
  hunter: false
},
{
  name: 'Mykeal',
  picture: '💂',
  location: '🏭',
  hunter: false
},
{
  name: 'Phil',
  picture: '🧜‍♂️',
  location: '🏭',
  hunter: false
},
{
  name: 'Wilson',
  picture: '🏐',
  location: '🏢',
  hunter: false
},
{
  name: 'Wendy',
  picture: '👩‍⚕️',
  location: '🏢',
  hunter: false
},
{
  name: 'Jeremy',
  picture: '🦹',
  location: '🏢',
  hunter: false
},
{
  name: 'Jimbo',
  picture: '🤵',
  location: '🏣',
  hunter: false
},
{
  name: 'Sammy',
  picture: '🙆‍♀️',
  location: '🏣',
  hunter: false
},
{
  name: 'Michael',
  picture: '👷',
  location: '🏣',
  hunter: false
},
{
  name: 'Robert',
  picture: '👷',
  location: '🏦',
  hunter: false
},
{
  name: 'Terry',
  picture: '🤴',
  location: '🏦',
  hunter: false
},
{
  name: 'Bill',
  picture: '🕵️',
  location: '🏦',
  hunter: false
},
{
  name: 'Marie',
  picture: '👩‍🍳',
  location: '💒',
  hunter: false
},
{
  name: 'Mykeal',
  picture: '💂',
  location: '💒',
  hunter: false
},
{
  name: 'Phil',
  picture: '🧜‍♂️',
  location: '💒',
  hunter: false
},
{
  name: 'Wilson',
  picture: '🏐',
  location: '🏟️',
  hunter: false
},
{
  name: 'Wendy',
  picture: '👩‍⚕️',
  location: '🏟️',
  hunter: false
},
{
  name: 'Jeremy',
  picture: '🦹',
  location: '🏟️',
  hunter: false
},
{
  name: 'AAAAAAAA',
  picture: '👸',
  location: '🎪',
  hunter: false
},
{
  name: 'trap',
  picture: '👮‍♀️',
  location: '🎪',
  hunter: false
},
{
  name: 'farmer',
  picture: '🧑‍🔧',
  location: '🎪',
  hunter: false
},
{
  name: 'godwin',
  picture: '👨‍🎤',
  location: '🏰',
  hunter: false
},
{
  name: 'fred',
  picture: '🧑‍🚒',
  location: '🏰',
  hunter: false
},
{
  name: 'lilly',
  picture: '👰‍♀️',
  location: '🏰',
  hunter: false
},
{
  name: 'AAAAAAAA',
  picture: '👸',
  location: '🏬',
  hunter: false
},
{
  name: 'trap',
  picture: '👮‍♀️',
  location: '🏬',
  hunter: false
},
{
  name: 'farmer',
  picture: '🧑‍🔧',
  location: '🏬',
  hunter: false
},
{
  name: 'godwin',
  picture: '👨‍🎤',
  location: '🏠',
  hunter: false
},
{
  name: 'fred',
  picture: '🧑‍🚒',
  location: '🏠',
  hunter: false
},
{
  name: 'lilly',
  picture: '👰‍♀️',
  location: '🏠',
  hunter: false
}
]

let hourBeTillDawn = 12
let hasBeenClick = false
let huntersindex = 10
let ended = false

function clicked(i) {
  if (!ended) {
    let peeps = people.filter(person => person.location == i)
    peeps.forEach(peep => peep.picture = '🦇')
    if (!hasBeenClick) {
      makeHunter()
      hasBeenClick = true
      hourBeTillDawn--
      randomPlace()
      draw()
    } else {
      endGame(i)
    }
  }
}

function endGame(i) {
  hourBeTillDawn--
  let peeps = people.filter(person => person.picture == '🦇')
  if (peeps.length == people.length - 1) {
    people[huntersindex].picture = '🦇'
    draw()
    window.alert('you win')
    ended = true
  }
  else if (hourBeTillDawn == 0) {
    window.alert('you perish')
    ended = true
  }
  else if (i == people[huntersindex].location) {
    window.alert("the hunter kills you")
    ended = true
  }
  else {
    randomPlace()
    draw()
  }
}

function makeHunter() {
  let peeps = people.filter(person => person.picture != '🦇')
  const randomIndex = Math.floor(Math.random() * peeps.length)
  peeps[randomIndex].hunter = true
  huntersindex = randomIndex
}

function randomPlace() {
  people.forEach(person => {
    const randomIndex = Math.floor(Math.random() * locations.length)
    person.location = locations[randomIndex]
  }
  )
}

function ISeeYou() {
  let batSees = people.filter(bat => bat.picture == '🦇' && bat.location == people[huntersindex].location)
  return batSees.length
}

function draw() {
  console.log('cool')
  let places = [document.getElementById('🏤'),
  document.getElementById('🏥'),
  document.getElementById('🏭'),
  document.getElementById('🏢'),
  document.getElementById('🏣'),
  document.getElementById('🏦'),
  document.getElementById('💒'),
  document.getElementById('🏟️'),
  document.getElementById('🎪'),
  document.getElementById('🏰'),
  document.getElementById('🏬'),
  document.getElementById('🏠')
  ]
  let hours = document.getElementById('hours')
  let sees = document.getElementById('see')
  // @ts-ignore
  places.forEach(place => place.innerText = '')
  people.forEach((person) => {
    for (let i = 0; i < locations.length; i++) {
      if (person.location == locations[i]) {
        // @ts-ignore
        places[i].innerText += person.picture
      }
    }
  })
  // @ts-ignore
  hours.innerText = hourBeTillDawn.toString()
  // @ts-ignore
  sees.innerText = ISeeYou().toString()
}


draw()