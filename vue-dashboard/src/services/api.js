// api.js
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:5000/api',
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
  getStudent(studentId) {
    return apiClient.get(`/students/${studentId}`);
  },
  getTeacher(teacherId) {
    return apiClient.get(`/teachers/${teacherId}`);
  },
  getSubject(subjectId) {
    return apiClient.get(`/subjects/${subjectId}`);
  }
};
