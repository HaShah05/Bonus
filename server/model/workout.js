// Importing mongoose
const mongoose = require("mongoose");

// Defining the workout schema and specifying the collection name
let workoutModel = mongoose.Schema(
    {
        Calories: Number,
        Exercise: String,
        Sets: Number,
        Reps: Number
    },
    { collection: "Bio_workouts" }
);

// Exporting the workout model
module.exports = mongoose.model('Workout', workoutModel);
