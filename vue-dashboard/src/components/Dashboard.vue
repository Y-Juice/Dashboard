<template>
    <div>
      <h1>Student Dashboard</h1>
      <ul>
        <li v-for="student in students" :key="student._id">
          <!-- Link to the student details page for each student -->
          <router-link :to="`/student/${student._id}`">{{ student.name }}</router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        students: []
      };
    },
    async created() {
      try {
        const response = await axios.get('http://localhost:5000/api/students');
        this.students = response.data;
      } catch (error) {
        console.error("Error fetching students:", error);
      }
    }
  };
  </script>
  
  <style>


</style>
  