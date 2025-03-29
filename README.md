# solarsystem
Small Solar System Visualization using a personal api

<br>

#### Home Page
![Home Page](/src/images/readme-images/homepage.png)
![Home Page](/src/images/readme-images/homepage-bottom.png)

#### Fun Facts Page
![Fun Facts Page Part I](/src/images/readme-images/funFacts.png)
![Fun Facts Page Part II](/src/images/readme-images/FunFactsMiddle.png)
![Fun Facts Page Part II](/src/images/readme-images/FunFactsBottom.png)

## Description
A responsive web application that displays information about the solar system. Users can view planet facts and details, and interact with visually appealing UI elements using elements from the Solar System API.

### Features

- Displays cards for each planet + the Sun
- Clicking on cards triggers a popup containing additional information
- Button designated to close each popup modal

## Tech Stack
- Javascript/React
- HTML
- CSS

## Installation
### Clone this repository:
`git clone https://github.com/ifeomare/solarsystem`

### Navigate to the project directory
`cd solarsystem`

### Install dependencies
`npm install`

<br>

**Note:** The corresponding API needs to be already running before this application starts.

### Start the application
`npm start`

### Open the application in your browser
http://localhost:3000

## API Integration
**API repository link:** [Solar System API](https://github.com/ifeomare/SolarSystemAPI)

Make sure the API server is running on http://localhost:8080

If it is not running on this server, configure the following files with your API server:
1. UseEffectSec.js
2. Sun.js
3. FastFacts.js
4. FunFacts.js

## Usage
- View the planet and sun cards on the main screen
- Click a card to view additional facts in a popup modal
- Use the designated "X" button to close the popup modal
- View fun facts about each planet on the "Fun Facts" page

## Additional Visuals
![Mercury Popup Modal](/src/images/readme-images/mercury-popup.png)

![Neptune Popup Modal](/src/images/readme-images/neptune-popup.png)

## Possible Future Enhancements
- Trivia
- Animation in popup modals
- Incorporating more galaxies and their objects