<template>
  <div v-if="student">
    <h1>Student Details for {{ student.name }}</h1>
    <p><strong>Age:</strong> {{ student.age }}</p>
    <p><strong>Class:</strong> {{ student.class }}</p>
    <p><strong>Attendance:</strong> {{ student.attendance }}%</p>
    
    <h2>Grades</h2>
    <ul>
      <li v-for="(grade, subject) in student.grades" :key="subject">
        {{ subject }}: {{ grade }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      student: null
    };
  },
  async created() {
    const studentId = this.$route.params.studentId;
    try {
      const response = await axios.get(`http://localhost:5000/api/students/${studentId}`);
      this.student = response.data;
    } catch (error) {
      console.error("Error fetching student details:", error);
    }
  }
};
</script>

<style>
</style>
