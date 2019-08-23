This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

React Project's Toko Flix Front End
===============

Basically just building React Project delight to develop and deploy.

## Getting Started
Download the latest [Node.js](https://nodejs.org/) version

## Available Scripts
In the project directory, you can run:
```
# React Project's Front End
git clone https://github.com/anggalof/tokoflix.git or Download ZIP
cd tokoflix
npm install
npm start
```
Open [http://localhost:3000](http://localhost:3000) for React Base's Front End.

Open in the browser [https://tokoflix-react-project.herokuapp.com/](https://tokoflix-react-project.herokuapp.com/) for example

## Notice
GET API https://developers.themoviedb.org/3

Need API Key - Api Key: af2063829763f377ee050b667f4d0894

API Used :
- Get Now Playing (https://api.themoviedb.org/3/movie/now_playing?api_key=<<api_key>>&language=en-US&page=1)
- Get Detail (https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US)
- Get Similiar Movie (https://api.themoviedb.org/3/movie/{movie_id}/similar?api_key=<<api_key>>&language=en-US&page=1)
- Get Popular (https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1)

## Folder Structure Explanation
```
common: (laying all restApi untuk GET, POST, UPDATE, DELETE using react redux)
components: (global files that can be used anywhere and repeatedly, exp: H3, Loading, EmptyPage, etc)
containers: (all pages are created based on default index such as Homepage, Movies, etc)
public: (images)
utils: (global components such as validation, determining time, setting colors, image setting)
```

In your package.json file, change the script to the following when you want to build a server:
```
start: "node server.js"
```

## By Gaga Adi Lesmana Putra - anggalof
