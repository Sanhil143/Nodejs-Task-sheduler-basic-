const express =  require('express')
const cron = require('node-cron')
const moment = require('moment');
const app = express()

//one minute by default
cron.schedule("* 3-9 15 12 feb 0", function () {
      console.log("Happy Birthday Bhai" , moment().format("DD MM YY hh:mm:ss"));
    });
cron.schedule("*/2 10 15 * * *", function () {
      console.log("Order your meal" , moment().format("DD MM YY hh:mm:ss"));
    });


app.listen(3000 , () => {
      console.log("<== Express app running ==>" );
})

// cron sheduler
// ┌────────────── second (0 - 59) (optional)
//  │ ┌──────────── minute (0 - 59) 
//  │ │ ┌────────── hour (0 - 23)
//  │ │ │ ┌──────── day of the month (1 - 31)
//  │ │ │ │ ┌────── month (1 - 12)
//  │ │ │ │ │ ┌──── day of the week (0 - 6) (0 and 7 both represent Sunday)
//  │ │ │ │ │ │
//  │ │ │ │ │ │
//  * * * * * * 


