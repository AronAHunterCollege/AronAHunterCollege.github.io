// JavaScript Document
const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame() {
  state = {}
  showTextNode(1)
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}

const textNodes = [
  {
    id: 1,
    text: 'In an endless sea of stars you awake, dazed and confused. Everywhere you look, the space only seems to get dark, darker, yet darker. A darkness of endless possibilites. Your eyes immediatly wander towards four stars. To where will you drift?',
    options: [
		{
			text: 'The ice star.',
			nextText: 2
			
		},
		
		{
			text: 'The wooden star.',
			nextText: 3	  
		}
    ]
  },
  {
    id: 2,
    text: 'Your form touches the ground. In the endless beyond you see a great white ocean of ice. Off into the distance is a great mountain, with lustrous spirals of colors lining the surface.',
    options: [
      {
        text: 'Approach the Prism Mountain.',
        nextText: 21
      },
      {
        text: 'Explore the Ocean of Ice.',
        nextText: 201
      },
      {
        text: 'Return to the Great Expanse.',
        nextText: 1
      }
    ]
  },
	{
    id: 21,
    text: 'You fly up to the Prism Mountain. Beneath the layers of ice lies great glowing veins of some sort. Your form resonates with the energies within. If you wished, it could feel the air once more.',
    options: [
      {
        text: 'Amplify your resonance to learn more.',
        nextText: 22
      },
      {
        text: 'Return to the Ocean of Ice.',
        nextText: 2
      }
    ]
  },
	{
    id: 22,
    text: 'You manifest a hand and place it against the glassy surface of the mountain. The energy within tells you the story of a lost world and a lost people. In a great calamity, it was all sealed beneath the ice. The core of the mountain is the host to all of its energy. If you wished it, you could bring them all back, and bring your journey to an end with this place as your home.',
    options: [
      {
        text: 'Another life may reveal another future. Release the energy (End the story).',
        nextText: 23
      },
      {
        text: 'The past is the past, maybe we need a new future. Return to the Ocean of Ice.',
        nextText: 2
      },
      {
        text: 'This world is lost, there is nothing here for you. Return to the Great Expanse.',
        nextText: 1
      }
    ]
  },
	{
    id: 23,
    text: 'Your vision immediatly flashes white. After a few brief moments, your newly formed eyes are greated with a bustling civilization. One with glass and steel skyscrapers, expanding technology, and great possibility. One that once destroyed itself but now returned to its prime state. What happens from here on is uncertain, but you have reached an end. For the moment, you may rest. Or, you may try again (Ending #1: Another Chance).',
    options: [
      {
        text: 'Restart.',
        nextText: 1
      }
    ]
  },
	{
    id: 201,
    text: 'The great ice sheets of this star span for hundreds if not thousands of miles, unbroken. With every point of contact, you feel a great deposit beneath it, filled to bursting. At the farthest corner of your vision, you see a chasm.',
    options: [
      {
        text: 'Dive down.',
        nextText: 202
      },
      {
        text: 'Return to where you began.',
        nextText: 2
      },
    ]
  },
	{
    id: 202,
    text: 'The farthest depths of the chasm reveal the endless deposits of pure potential that lies beneath the surface. Ruins of a people once prosperous, and now no more significant than the ice that scrapes beneath you. If it cannot be undone, or if perhaps it should not be undone, there is potential for something new to be made. But something needs to make that potential real. Your form resonates with this place. This could be the end of your journey here.',
    options: [
      {
        text: 'The past must pave way for a new future. Release the potential (End the story).',
        nextText: 203
      },
      {
        text: 'Failure does not have to be the end, I must learn more. Return to the Ocean.',
        nextText: 2
      },
    ]
  },
	{
    id: 203,
    text: 'Your vision immediatly flashes white. After a few brief moments, your newly formed eyes are greated with the beginnings of civilization. Small wooden houses, people speaking languages that have never before existed. The beginning off something that could be great. The past is wiped clean and the future is entirely uncertain. For the moment, you may rest. Or, you may try again (Ending #3: Child of the World).',
    options: [
      {
        text: 'Restart.',
        nextText: 1
      }
   
    ]
  },
  {
    id: 3,
    text: 'Your form touches the ground. The world before you is one of wood and metal. Buildings made of woven threads of wood and metal alike. Mystical flames lighting the streets, and an energy that is almost infectous. Your form naturally resonates with this world. Nobody seems to notice you, except for one person, a woman draped in cloaks who hurridely runs toward you.',
    options: [
      {
        text: 'Let them come to you',
        nextText: 31
      },
      {
        text: 'Return to the expanse.',
        nextText: 1
      }
    ]
  },
	{
    id: 31,
    text: 'The woman speaks to you. "Fascinating! A purely magical being. Your body is made up entirely of mana! If you would like, you could be a great help to further magical research here!"',
    options: [
      {
        text: 'Ask what that would mean for you.',
        nextText: 32
      },
      {
        text: 'Return to the expanse.',
        nextText: 1
      }
    ]
  },
	{
    id: 32,
    text: '"Well you would live in the magical institute and we would do very simple tests like reading your energy levels or interacting with magical objects. Oh, but, do not worry! You will be free to do as you please and we wil even make you able to eat our amazing food!"',
    options: [
      {
        text: 'Settle down in this place. (End the story)',
        nextText: 33
      },
      {
        text: 'Return to the expanse.',
        nextText: 1
      }
    ]
  },
	{
    id: 33,
    text: 'You now live your life on this planet. Many of the magical researchers and their students become your friends and you are paid for your work with a wondrous treat called "ice cream". Life is good, but you are free to seek another outcome. (Ending #2: The Magical Life)',
    options: [
      {
        text: 'Restart.',
        nextText: 1
      }
    ]
  },
  
  
]

startGame()