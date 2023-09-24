const xlsx = require('xlsx')
const mysql=require('mysql2')

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'93MySQL17@',
    database:'mydb',
  });

// making connection to mysql server
connection.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL:', err);
      return;
    }
  
    console.log('Connected to MySQL');
});

const workbook = xlsx.readFile('data.xlsx');
const sheetName = workbook.SheetNames[0];
const sheet = workbook.Sheets[sheetName];
const excelData = xlsx.utils.sheet_to_json(sheet);
// console.log(excelData)

// Inserting data into the MySQL database
excelData.forEach((row) => {
    const sql = "INSERT INTO `data` (`name`, `email`,`address`,`phone`) VALUES (?, ?, ?, ?)";
    const values=[row.Name,row.Email,row.Address,row.Phone]
    connection.query(sql, values, (err) => {
      if (err) {
        console.error('Error inserting data:', err);
      } else {
        console.log('Data inserted successfully:', values);
      }
    });
});

//end connection
connection.end();
