const express = require('express');
const mongoose = require('mongoose');

// environment variables



// restaurant router
const restaurantRouter = require('./Routes/RestaurantRoute');

const PORT = 3000;

const app = express();
app.use(express.json());

// Connect to MongoDB
const DB_CONN = "mongodb+srv://mustafaismailmab:mumu123@cluster0.kmefq4m.mongodb.net/comp3123_assigment1?retryWrites=true&w=majority"


// Connect to MongoDB
mongoose.connect(DB_CONN, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then( (success) => {
  console.log('Success Mongodb connection')
}).catch( (error) => {
  console.log('Error Mongodb connection')
});

app.use(restaurantRouter); // Use the employee router

app.listen(PORT, () => { console.log(`Server is running on port ${PORT}`) });








