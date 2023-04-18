YouTube Clone

This is a YouTube clone project built with React and Redux. It allows users to search and view YouTube videos, add comments, and chat in real-time.

Features

- Live Chat that works just like YouTube's (using API polling).
- N-Level nested comments 
- Debouncing in searching for improved performance.
- Caching the result to reduce the number of API calls
- View video details, including title, description .
- Early return
- Toggling sidebar 

Technologies Used

- React: A popular JavaScript library for building user interfaces.
- Redux: A predictable state container for managing application state.
- YouTube API: YouTube Data API v3 for fetching video data.
- Axios: A promise-based HTTP client for making API requests.
- Tailwind: A popular CSS framework for styling user interfaces.


Setup and Installation

To set up the project locally, follow these steps:

- Clone the repository to your local machine using git clone.
- Navigate to the project directory and install dependencies using npm install.
- Create a .env file in the root of the project and add your YOUTUBE_API_URL configuration. - Start the development server using npm start.
- Open your web browser and go to http://localhost:3000 to see the app running locally.
