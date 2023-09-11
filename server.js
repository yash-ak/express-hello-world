
/*********************************************************************************
*  BTI325 – Assignment 1
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Yash A. Akabri Student ID: 126403229 Date: 09-10-23
*
*  Online (Cyclic) URL: https://real-rose-dog-boot.cyclic.app/
*
********************************************************************************/ 

const app = require('./app')

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
