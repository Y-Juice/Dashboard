<template>
    <div v-if="teacher">
      <h2>Docent Details: {{ teacher.name }}</h2>
      <p>Vakken: {{ teacher.subjects.join(', ') }}</p>
      <p>Jaren Ervaring: {{ teacher.yearsExperience }}</p>
      <p>Aantal Klassen: {{ teacher.numClasses }}</p>
    </div>
  </template>
  
  <script>
  import api from '../services/api';
  
  export default {
    props: ['teacherId'],
    data() {
      return {
        teacher: null
      };
    },
    created() {
      // Haal de lijst van docenten op en vind de specifieke docent met het ID dat is doorgegeven via props
      api.getTeachers().then(response => {
        this.teacher = response.data.find(teacher => teacher.id === this.teacherId);
      });
    }
  };
  </script>
  