Step 1: npm install
Step 2: npm install react-bootstrap bootstrap
Step 3: npm i react-router-dom
Step 4: import 'bootstrap/dist/css/bootstrap.min.css'; - index.js

Add icons:
npm install react-icons --save

Publish file:
- npm run build
- netlify: go to sites - copy or drag build file

Install sass: (compilar, you write it like css and it will convert it)
- npm install sass
- npm i compass-mixins
import in style scss: @import "compass-mixins/lib/compass/css3";

How to run concurrently (package name) (use it when npm run dev is not running) (package.json)
Debug - "scripts": 
- "start": "json-server data.json -p 3001 & react-scripts start",
- "backend": "json-server data.json -p 3001",
- "frontend": "react-scripts start",
- "dev": "concurrently --kill-others \"npm run backend\" \"npm run frontend\"",

In de terminal:
- npm run build:
	- copy the build file in netlify, sites and drag and drop