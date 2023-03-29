// installing from an existing package.json
npm install

// creating package.json and library (note that the -s adds it to package.json)
npm init --yes  
npm install -s express  
npm install -s express axios
npm install -s winston

// running a program
node ./program.js




// Invoke-RestMethod -Uri http://localhost:3000/ -Method Get -Headers @{"Content-Type"="application/json"}
// Invoke-RestMethod -Uri http://localhost:3000/users -Method Get -Headers @{"Content-Type"="application/json"}
// Invoke-RestMethod -Uri http://localhost:3000/users/1 -Method Get -Headers @{"Content-Type"="application/json"}       
// Invoke-RestMethod -Uri http://localhost:3000/users -Method Post -Headers @{"Content-Type"="application/json"} -Body '{"id": 4, "name": "Jane"}'
// Invoke-RestMethod -Uri http://localhost:3000/users/1 -Method Put -Headers @{"Content-Type"="application/json"} -Body '{"id":1,"name":"doona"}'
// Invoke-RestMethod -Uri http://localhost:3000/users/1 -Method Delete
