# Pokedex
Pokex App is an interactive application that allows users to explore Pokémon, select their moves, and view their stats. Users can search for Pokémon and view detailed information about each Pokémon's abilities, stats, and moves.

## Features

- **Search & Select Pokemon** - We can search for pokemons by their name or just select the one we want from the scroll menu.
- **Stats & Moves** - Each pokemon has its own unique stats and moves. We can select a move we want to see and it shows the description for that move.
- **Search by Index** - Each pokemon has unique index number, so we can find the one we are looking for by its index.

## React.js & FantaCSS
- **useState & useEffect** - I have used useState for each component for its local state and also useEffect for side rendering and displaying data from Pokedex API.
- **API Calling** - For getting the data from the API, i have used Axios with async functions to get the response and convert it into JSON objects.
- **props Drilling** - Instead of using some sort of context, i used property drilling where i passed properties from one component to another.
- **CSS Layout** - For the style and design i used a preset of FantaCSS Style.

## Installation

1. Clone the repository:
   - git clone https://https://github.com/Matt533/Pokedex
2. Go into project directory:
   - cd pokedex
3. Install dependencies and run server:
   - npm install
   - npm run dev
4. Open in browser:
   - ctrl + click -> http://localhost:3000
   
