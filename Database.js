//import sqlite library
const sqlite3 = require('sqlite3').verbose();

//connect to db or create if not exist
const db = new sqlite3.Database('mydatabase.db');

//create table if not exist
db.serialize(()=> {
    db.run('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, name TEXT, phone_number TEXT, email TEXT, address TEXT)');

})





///////////////////CRUD

//insert user into db //ok
const createUser = (name,phone_number,email,address) =>{
                           //row name to create    (?) is the actual name placeholder ("john doe" for example)
    db.run('INSERT INTO users (name, phone_number, email, address) VALUES (?,?,?,?)', [name,phone_number,email,address], (err) =>{
        
        if(err)
        {
            console.error('Could not insert user : ', err.message);
            return;
        }

        console.log('User inserted successfully');
    })
}


// get all users from the database //ok
const getAllUsers = () => {
    db.all('SELECT * FROM users', (err, rows) => {
      if (err) {
        console.error('Error retrieving users:', err.message);
        return;
      }
      console.log('All users:', rows);
    });
  };
  
  // Function to update user by id //ok
  const updateUserById = (id, newName,newPhoneNumber,newEmail,newAddress) => {
    db.run('UPDATE users SET name = (?), phone_number = (?), email = (?),address = (?) WHERE id = (?)', [newName,newPhoneNumber,newEmail,newAddress, id], (err) => {
      if (err) {
        console.error('Error updating user:', err.message);
        return;
      }
      console.log('User updated successfully');
    });
  };
  
  // Function to delete user by id
  const deleteUserById = (id) => {
    db.run('DELETE FROM users WHERE id = (?)', [id], (err) => {
      if (err) {
        console.error('Error deleting user:', err.message);
        return;
      }
      console.log('User deleted successfully');
    });
  };
  
  // Usage examples
  createUser('John Doe','645','johndoe@gmail.com','home1'); // Inserting a new user

  getAllUsers(); // Retrieving all users
  updateUserById(1, 'Jane Smith','645','johndoe@gmail.com','home1'); // Updating a user

  //deleteUserById(1); // Deleting a user

  //  for (let i = 6; i <= 10; i++) {
  //    deleteUserById(i)
  //  }

  
  
  // close the database
  db.close();

