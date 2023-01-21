

/*********************************************************************************
* WEB700 – Assignment 1
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students. *
* Name: _Roqeeb Yahaya Student ID: __125312223_____ Date: ____21 jan 2023____________
* ********************************************************************************/

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

serverVerbs = ['GET','GET','GET', 'POST','GET','POST']
serverPaths = ['/', '/about', '/contact', '/login', '/panel']
serverResponses = ['Welcome to WEB700 Assignment 1','This assignment was prepared by Roqeeb Yahaya','Student Name: Roqeeb Yahaya','User Logged In','Logout Complete']

function httpRequest(httpVerb, path){
    for(i = 0; i<=serverPaths.length; i++){
      if(serverVerbs[i] == httpVerb && serverPaths[i] == path){
        return "200: " + serverResponses[i];
      }
    }
      return `400: Unable to request ${httpVerb} for ${path}`;
  }
  
    
function automateTests() {
    
     testVerbs = ["GET", "POST"];
     testPaths = ["/", "/about", "/contact", "/login", "/panel", "/logout", "/randomPath1", "/randomPath2"];
    
    function randomRequest() {
        randVerb = testVerbs[getRandomInt(testVerbs.length)];
        randPath = testPaths[getRandomInt(testPaths.length)];

        console.log(httpRequest(randVerb, randPath));
    }
    
    setInterval(randomRequest, 1000);
}
    
automateTests();



    