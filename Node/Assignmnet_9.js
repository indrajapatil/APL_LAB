// Assignment_9.js
function greetUser(name, callback) {
  console.log("Hello, " + name + "!");
  setTimeout(() => {
    console.log("Preparing your message...");
    callback(); 
  }, 1000);
}
function showMessage() {
  console.log("Welcome to the Node.js Callback Function Example!");
}
greetUser("Indraja", showMessage);
