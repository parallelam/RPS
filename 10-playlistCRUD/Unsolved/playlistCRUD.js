var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "playlistDB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  createSong();
});

function createSong() {
  console.log("Inserting a new song...\n");
  // Your code here
  // Call updateSong when done
}

function updateSong() {
  console.log("Updating a song...\n");
  // Your code here
  // Call deleteSong when done
}

function deleteSong() {
  console.log("Deleting from songs...\n");
  // Your code here
  // Call readSongs when done
}

function readSongs() {
  console.log("Selecting all songs...\n");
  // Your code here
  // End the connection when done
}
