# Todo Express Server

A simple Express.js REST API for managing todo tasks with MongoDB Atlas storage.

## Features

- Add new todo tasks
- Retrieve all todo tasks
- MongoDB Atlas integration
- RESTful API design

## Prerequisites

- Node.js (v14 or higher)
- MongoDB Atlas account and cluster

## Installation

1. Install dependencies:
```bash
npm install
```

2. Configure environment variables:
   - Open the `.env` file
   - Replace `your_mongodb_atlas_connection_string_here` with your actual MongoDB Atlas connection string
   - Example: `mongodb+srv://username:password@cluster.mongodb.net/todoapp?retryWrites=true&w=majority`

## Usage

Start the server:
```bash
npm start
```

For development with auto-restart:
```bash
npm run dev
```

The server will start on port 3000 (or the PORT specified in your .env file).

## API Endpoints

### Get All Tasks
```
GET /api/todos
```

Response:
```json
{
  "success": true,
  "count": 2,
  "data": [
    {
      "_id": "...",
      "title": "Task title",
      "description": "Task description",
      "completed": false,
      "createdAt": "2026-02-12T..."
    }
  ]
}
```

### Add a New Task
```
POST /api/todos
Content-Type: application/json

{
  "title": "Buy groceries",
  "description": "Milk, eggs, bread",
  "completed": false
}
```

Response:
```json
{
  "success": true,
  "data": {
    "_id": "...",
    "title": "Buy groceries",
    "description": "Milk, eggs, bread",
    "completed": false,
    "createdAt": "2026-02-12T..."
  }
}
```

## Project Structure

```
todo_express_server/
├── models/
│   └── Todo.js         # Mongoose schema for Todo
├── routes/
│   └── todos.js        # API routes for todos
├── server.js           # Main application file
├── package.json
├── .env                # Environment variables (not in git)
└── .gitignore
```

## Environment Variables

- `MONGO_URI` - MongoDB Atlas connection string (required)
- `PORT` - Server port (default: 3000)
