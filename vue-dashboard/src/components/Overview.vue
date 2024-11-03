<template>
    <div>
      <h2>Dashboard Overzicht</h2>
      <p>Totaal Studenten: {{ students.length }}</p>
      <p>Totaal Docenten: {{ teachers.length }}</p>
      <p>Totaal Vakken: {{ subjects.length }}</p>
    </div>
  </template>
  
  <script>
  import api from '../services/api';
  
  export default {
    data() {
      return {
        students: [],
        teachers: [],
        subjects: []
      };
    },
    created() {
      api.getStudents().then(response => (this.students = response.data));
      api.getTeachers().then(response => (this.teachers = response.data));
      api.getSubjects().then(response => (this.subjects = response.data));
    }
  };
  </script>
  