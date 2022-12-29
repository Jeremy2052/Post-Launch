import mysql2 from "mysql2"

export const db = mysql2.createConnection({
  host:"localhost",
  user:"root",
  password: "password",
  database:"blog"
})

//if there is ana auth problem
//ALTER USER 'root'@'locahost' IDENTIFIED WITH mysql_native_password BY 'password'