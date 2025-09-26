import db from "../src/lib/db";


const users = db.prepare("SELECT id, email, name, created_at FROM users").all();
console.log("USERS:", users);


const cars = db.prepare("SELECT id, vin, make, model, year, price FROM cars").all();
console.log("CARS:", cars);

