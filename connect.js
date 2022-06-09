



var playertext = document.getElementById("turn");
var winnertext = document.getElementById/("winner")
var blocks = document.querySelectorAll("#block")
var player = "Red"
var errortext = document.getElementById("errortext")
let socket = new WebSocket("wss://j4j1t5tm88.execute-api.us-east-1.amazonaws.com/production/");

var url_string = window.location.href;
var url = new URL(url_string);
url.searchParams.get("c");
console.log(url.searchParams.get("c"));
console.log("url String: " ,url_string);

socket.onopen = function(e) {
  alert("[open] Connection established");
  alert("Sending to server");
  const data = {action: "chat" , message: "sa ben htmlden"};
  socket.send(JSON.stringify(data));
};

socket.onmessage = function(event) {
  alert(`[message] Data received from server: ${event.data}`);
};

socket.onclose = function(event) {
  if (event.wasClean) {
    alert(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`);
  } else {
    // e.g. server process killed or network down
    // event.code is usually 1006 in this case
    alert('[close] Connection died');
  }
};

socket.onerror = function(error) {
  alert(`[error] ${error.message}`);
};




function startgame(){
    playertext.textContent = `${player}'s Turn !`
    blocks.forEach(block => block.addEventListener("click" , () => chooseArea(block)

    ));
   
}
    

function chooseArea(block){
  if (block.textContent === ""){
      block.textContent = "red";


  }
  else{
      errortext.textContent = "its not empty"
      block.style.border = "3px solid red"
      setTimeout(() => {
          errortext.textContent = ""
          block.style.border = " solid black"
      }, 2000);

  }
}








startgame();
