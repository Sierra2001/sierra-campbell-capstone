# sierra-campbell-capstone

-implementing crud operations, comment section, pixabay?
Fitness Finder (working title)

## Overview

Fitness Finder is a tool for fitness enthusiasts to find different workouts and discover nearby gyms.

### Problem

Imagine this: You're away from your local gym and want an easy way to find a place nearby. Once you get there, you’re wondering what workouts you want to do. Instead of searching multiple websites, Fitness Finder helps you quickly locate a gym and find workouts based on your fitness goals.

### User Profile

- People in the fitness community:

1. It helps you find a gym nearby using Google Places APIs
2. It provides workouts by type (strength, cardio, flexibility) so you can jump right into a routine.
3. It eliminates the need for multiple searches and saves time.

### Features

Find a Workout

- Search by type: strength, cardio, flexibility
  Storing the workout data in a JSON file (or a database?) this will allow users to filter workouts by type.
  The three types focused on are: (Strength, Cardio, Flexibility).
  ex.
  (muscle group filtering, json set)

Find a Gym

- Uses the Google Places API (Nearby Search) to find gyms. This will show gyms near a user’s location

## Implementation

### Tech Stack

Front-End:

- React – for building the user interface.
- Axios - for handeling the api request to get the nearby gym and workout data

Back-End:

- Node.js - this will be used to create the backend server
- Express.js - To handle the routing requests

Databases:

- for now i dont think ill be using this since my workout data will be in a json file & im using the google api to get the gyms

### APIs

Google Places API - Nearby Search
https://maps.googleapis.com/maps/api/place/nearbysearch/json
?keyword=cruise
&location=-33.8670522%2C151.1957362
&radius=1500
&type=restaurant
&key=YOUR_API_KEY
List any external sources of data that will be used in your app.

### Sitemap

Home Page

- NavBar
- Buttons to find a gym (using API) and find a workout.

Find Workout Page
Strength → (links to another page) Workout Section → (links to another page) Workout Detail Page
Cardio _Same as above_
Flexibility _Same as Above_

### Mockups

Please see the zip file. Created on Canva, a rough mockup on the pages of my website.

### Data

Workouts
Each workout will be stored in a database with the following fields:

id (Unique identifier for each workout)
name (Workout name, e.g., "Push-Up Routine")
type (Category: Strength, Cardio, Flexibility)
description (Short explanation of the workout)
muscleGroups (Optional: Specifies targeted muscle groups, e.g., "Chest, Triceps")
imageUrl (Links to an image, possibly from Pixabay or Unsplash)

Workout (One)
-- id: 1
-- name: "HIIT Sprint Workout"
-- type: "Cardio"
-- description: "A quick high-intensity sprint routine."
-- duration: "15 minutes"
├── comments:
-- id: 101
-- workoutId: 1
-- text: "This was a killer workout!"
-- timestamp: "2025-03-10 14:30:00"

Comments
Users can leave comments on workouts. Comments will have the following fields:

id (Unique identifier for each comment)
workoutId (Foreign key linking to a specific workout)
text (The comment itself, e.g., "Great workout!")
timestamp (Time when the comment was posted)

### Endpoints

Workouts
GET /workouts – Retrieve all workouts
GET /workouts/:id – Retrieve a specific workout by ID

Comments
POST /workouts/:id/comments – Add a comment to a workout
DELETE /comments/:id – Delete a comment

## Roadmap

March 10th, 2025: set up READ.ME and mockups
March 11, 2025: set up React frontend
March 12, 2025: set up backend (Node.js, Express)
March 14, 2025: create database for workouts
March 18, 2025: implement Google Places API
March 21, 2025: implement workout filtering
March 24, 2025: implement comment section
March 27, 2025: testing

---

## Future Implementations

User Authentication: Allow users to create accounts and save favorite workouts.
Workout Logging: Track completed workouts.
Gym Reviews: Users can leave reviews for gyms.
