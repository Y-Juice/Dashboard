<template>
    <div v-if="student">
      <h2>Student Details: {{ student.name }}</h2>
      <p>Leeftijd: {{ student.age }}</p>
      <p>Klas: {{ student.class }}</p>
      <p>Aanwezigheid: {{ student.attendance }}%</p>
      <h3>Cijfers:</h3>
      <ul>
        <li v-for="(score, subject) in student.grades" :key="subject">
          {{ subject }}: {{ score }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import api from '../services/api';
  
  export default {
    props: ['studentId'],
    data() {
      return {
        student: null
      };
    },
    created() {
      api.getStudents().then(response => {
        this.student = response.data.find(student => student.id === this.studentId);
      });
    }
  };
  </script>
  