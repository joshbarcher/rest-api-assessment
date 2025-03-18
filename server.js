// Import required modules
import express from 'express';

const app = express();
const PORT = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Sample exercise routines
let routines = [
    { id: 1, name: "Full Body Workout", exercises: ["Squats", "Push-ups", "Burpees"] },
    { id: 2, name: "Leg Day", exercises: ["Lunges", "Deadlifts", "Calf Raises"] },
    { id: 3, name: "Upper Body Strength", exercises: ["Bench Press", "Pull-ups", "Bicep Curls"] },
    { id: 4, name: "Cardio Blast", exercises: ["Jump Rope", "Running", "High Knees"] },
    { id: 5, name: "Core Crusher", exercises: ["Planks", "Russian Twists", "Sit-ups"] },
    { id: 6, name: "Endurance Training", exercises: ["Rowing", "Cycling", "Swimming"] },
    { id: 7, name: "Athletic Performance", exercises: ["Sprints", "Box Jumps", "Agility Drills"] },
    { id: 8, name: "Flexibility & Mobility", exercises: ["Yoga", "Stretching", "Foam Rolling"] },
    { id: 9, name: "Strength & Power", exercises: ["Power Cleans", "Deadlifts", "Overhead Press"] },
    { id: 10, name: "Functional Fitness", exercises: ["Kettlebell Swings", "Battle Ropes", "Medicine Ball Slams"] }
];

// GET endpoint to retrieve all routines
app.get('/routines', (req, res) => {
    res.json(routines);
});

// POST endpoint to add a new routine
app.post('/routines', (req, res) => {
    const { name, exercises } = req.body;

    if (!name || !exercises || !Array.isArray(exercises)) {
        return res.status(400).json({ error: "Invalid input. Name and exercises array are required." });
    }

    const newRoutine = { id: routines.length + 1, name, exercises };
    routines.push(newRoutine);
    res.status(201).json(newRoutine);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
