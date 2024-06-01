# Organizer - Partner Management Dashboard

## Overview

The Organizer is a Partner Management Dashboard web application built using React and Vite for the frontend and JSON Server as backend to store partner organizations' data. The project showcases the use of Material-UI for styling and layout.

## Features

- View a list of partner organizations with their name, description, logo, and active status.
- Add a new partner organization with the specified details.
- Delete an existing partner organization.
- Responsive design to ensure usability across different devices.

## Getting Started

### Prerequisites

Make sure you have the following installed on your system:

- Node.js (https://nodejs.org/)

### Installation

1. Clone the repository to your local machine:

    ```sh
    git clone https://github.com/your-username/organizer.git
    cd organizer
    ```

2. Install the required dependencies:

    ```sh
    npm install
    ```

### Running the Application

1. Start the JSON server:

    ```sh
    npm run server
    ```

2. In a separate terminal window, start the Vite development server:

    ```sh
    npm run dev
    ```

3. Open your browser and navigate to `http://localhost:3005` to see the application in action.

## Design Decisions

- **React and Vite**: Chosen for their speed and efficiency in development, allowing for quick iteration and hot module replacement.
- **Material-UI**: Used for styling and layout to quickly build a responsive and visually appealing interface.
- **JSON Server**: Selected as a backend to simplify data storage and retrieval during development.

## Reflection

### Lessons Learned

Working on this project provided valuable experience in combining React with Vite and managing state effectively. I decided to use a JSON server as a back end instead of a full-fledged backend as I currently in the process of learning express js.

### Improvements and Future Work

If I had more time, I would:

- Implement additional features like editing existing partner details and searching/filtering the partner list.
- Add user authentication and authorization to control who can modify the partner information.
- Persist data to a more robust backend or a cloud database service for better data management.

### Challenges and Solutions

One challenge was ensuring the layout was responsive and the cards displayed horizontally instead of vertically. This was solved by using Material-UI's Grid system, which provided an easy way to organize the layout responsively.

### Bonus Features

- **Responsive Design**: Ensured the application works well on different screen sizes using Material-UI's responsive grid layout.

## Conclusion

This project was a great learning experience in building a full-stack application using modern web development tools. It reinforced the importance of planning and designing the application structure before diving into coding, and it provided hands-on experience with React, Vite, Material-UI, and JSON Server.
