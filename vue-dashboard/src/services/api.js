import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:5000/api', // Zorg ervoor dat de backend op deze poort draait
  headers: {
    'Content-Type': 'application/json',
  },
});

export default {
  getStudents() {
    return apiClient.get('/students');
  },
  getTeachers() {
    return apiClient.get('/teachers');
  },
  getSubjects() {
    return apiClient.get('/subjects');
  },
};
