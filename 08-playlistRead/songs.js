const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  // Your port; if not 3306
  port: 3306,
  // Your username
  user: "root",
  // Your password
  password: "Dopamine1",
  database: "playlist_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected with thread ID: " + connection.threadId);
  readData();
});

function readData() {
  connection.query('select * from songs', function(err, data){
    if(err) throw err;
    console.log(data);
    for (var i = 0; i < data.length; i++){
          if(data[i].genre === 'Synthwave') {
               console.log(data[i].artist)
         }
    } 
    connection.end();
    console.log("Connection closed.");
  });
}