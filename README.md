This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

React Project's Pokemon Front End
===============

Basically just building React Project delight to develop and deploy.

## Getting Started
Download the latest [Node.js](https://nodejs.org/) version

## Available Scripts
In the project directory, you can run:
```
# React Project's Front End
git clone https://github.com/anggalof/pokemon-project.git or Download ZIP
cd pokemon-project
npm install
npm start
```
Open [http://localhost:3000](http://localhost:3000) for React Base's Front End.

Open in the browser [https://pokemon-react-project.herokuapp.com/](https://pokemon-react-project.herokuapp.com/) for example

## Notice
GET API https://pokeapi.co/api/v2/

API Used :
- Get Pokemon List (https://pokeapi.co/api/v2/pokemon?offset=18&limit=18)
- Get Pokemon Detail (https://pokeapi.co/api/v2/pokemon/{pokemon_name})

## Folder Structure Explanation
```

layout/App: (index / routes)
common: (laying all restApi untuk GET using react redux)
components: (global files that can be used anywhere and repeatedly, exp: H3, Loading, EmptyPage, etc)
pages: (all pages are created based on default index such as Homepage, Movies, etc)
containers: (child of first parent for easy coding)
public: (images)
utils: (global components such as validation, determining time, setting colors, image setting)
```

In your package.json file, change the script to the following when you want to build a server:
```
start: "node server.js"
```

## By Gaga Adi Lesmana Putra - anggalof
