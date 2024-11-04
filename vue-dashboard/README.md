# Dashboard Application for Managing Students, Teachers, and Subjects

This project is a full-stack dashboard application for managing students, teachers, and subjects in a school or academic institution. The frontend is built with Vue.js, while the backend uses Node.js with Express, MongoDB and mongoose. The application provides an overview of students, teachers, and subjects, allowing users to view detailed information for each.


## Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Y-Juice/Dashboard.git
   cd Dashboard
   ```

2. **Install Backend Dependencies**
   Navigate to the backend directory and install dependencies:
   ```bash
   cd backend
   npm install
   ```

3. **Install Frontend Dependencies**
   Navigate to the frontend directory and install dependencies:
   ```bash
   cd ../frontend
   npm install
   ```



4. **Start MongoDB Server**
   Make sure MongoDB is running locally or configure the `MONGODB_URI` to connect to your MongoDB instance.

5. **Run the Backend Server**
   ```bash
   cd ../backend
   node server.js
   ```

6. **Run the Frontend Development Server**
   In a new terminal, start the frontend:
   ```bash
   cd ../vue-dashboard
   npm run dev
   ```

The frontend should now be accessible at `http://localhost:5173`, and the backend API at `http://localhost:5000`.


## Features

- **Overview Dashboard**: Displays total counts of students, teachers, and subjects.
- **Dynamic List and Details Display**: Lists of students, teachers, and subjects. Clicking an item shows details next to the list.
- **API Integration**: Backend API supports fetching and displaying detailed data on the frontend.

---

## API Endpoints

| Method | Endpoint                   | Description                         |
| ------ | ---------------------------| ----------------------------------- |
| GET    | `/api/students`            | Get all students                   |
| GET    | `/api/students/:studentId` | Get details of a specific student  |
| GET    | `/api/teachers`            | Get all teachers                   |
| GET    | `/api/teachers/:teacherId` | Get details of a specific teacher  |
| GET    | `/api/subjects`            | Get all subjects                   |
| GET    | `/api/subjects/:subjectId` | Get details of a specific subject  |

---

## Usage

1. **View Dashboard**: Go to `http://localhost:5173` to access the dashboard.
2. **Select a Student, Teacher, or Subject**:
   - Under each section (students, teachers, subjects), you can click on an item to view its details next to the list.
3. **Access Detailed Information**:
   - Details include attributes such as class, grades, subjects taught, and description for each entity.