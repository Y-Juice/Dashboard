<template>
  <div>
    <h2>Dashboard Overzicht</h2>
    <p>Totaal Studenten: {{ students.length }}</p>
    <p>Totaal Docenten: {{ teachers.length }}</p>
    <p>Totaal Vakken: {{ subjects.length }}</p>

    <div style="display: flex; gap: 20px;">
      <!-- Students List and Details -->
      <div>
        <h3>Studentenlijst</h3>
        <ul>
          <li v-for="student in students" :key="student._id">
            <a href="#" @click.prevent="showStudentDetails(student._id)">{{ student.name }}</a>
          </li>
        </ul>
        <div v-if="selectedStudent" style="border: 1px solid #ddd; padding: 10px; width: 100%; margin-top: 10px;">
          <h3>Details van {{ selectedStudent.name }}</h3>
          <p><strong>Leeftijd:</strong> {{ selectedStudent.age }}</p>
          <p><strong>Klas:</strong> {{ selectedStudent.class }}</p>
          <p><strong>Aanwezigheid:</strong> {{ selectedStudent.attendance }}%</p>
          <h4>Cijfers</h4>
          <ul>
            <li v-for="(grade, subject) in selectedStudent.grades" :key="subject">
              {{ subject }}: {{ grade }}
            </li>
          </ul>
        </div>
      </div>

      <!-- Teachers List and Details -->
      <div>
        <h3>Docentenlijst</h3>
        <ul>
          <li v-for="teacher in teachers" :key="teacher._id">
            <a href="#" @click.prevent="showTeacherDetails(teacher._id)">{{ teacher.name }}</a>
          </li>
        </ul>
        <div v-if="selectedTeacher" style="border: 1px solid #ddd; padding: 10px; width: 100%; margin-top: 10px;">
          <h3>Details van {{ selectedTeacher.name }}</h3>
          <p><strong>Vakken:</strong> {{ selectedTeacher.subjects.join(', ') }}</p>
          <p><strong>Jaren Ervaring:</strong> {{ selectedTeacher.yearsExperience }}</p>
          <p><strong>Aantal Klassen:</strong> {{ selectedTeacher.numClasses }}</p>
        </div>
      </div>

      <!-- Subjects List and Details -->
      <div>
        <h3>Vakkenlijst</h3>
        <ul>
          <li v-for="subject in subjects" :key="subject._id">
            <a href="#" @click.prevent="showSubjectDetails(subject._id)">{{ subject.name }}</a>
          </li>
        </ul>
        <div v-if="selectedSubject" style="border: 1px solid #ddd; padding: 10px; width: 100%; margin-top: 10px;">
          <h3>Details van {{ selectedSubject.name }}</h3>
          <p><strong>Beschrijving:</strong> {{ selectedSubject.description }}</p>
          <p><strong>Semester:</strong> {{ selectedSubject.semester }}</p>
          <p><strong>Credits:</strong> {{ selectedSubject.credits }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from '../services/api';

export default {
  data() {
    return {
      students: [],
      teachers: [],
      subjects: [],
      selectedStudent: null,
      selectedTeacher: null,
      selectedSubject: null
    };
  },
  created() {
    api.getStudents().then(response => (this.students = response.data));
    api.getTeachers().then(response => (this.teachers = response.data));
    api.getSubjects().then(response => (this.subjects = response.data));
  },
  methods: {
    async showStudentDetails(studentId) {
      try {
        const response = await api.getStudent(studentId);
        this.selectedStudent = response.data;
        this.selectedTeacher = null;
        this.selectedSubject = null;
      } catch (error) {
        console.error("Error fetching student details:", error);
      }
    },
    async showTeacherDetails(teacherId) {
      try {
        const response = await api.getTeacher(teacherId);
        this.selectedTeacher = response.data;
        this.selectedStudent = null;
        this.selectedSubject = null;
      } catch (error) {
        console.error("Error fetching teacher details:", error);
      }
    },
    async showSubjectDetails(subjectId) {
      try {
        const response = await api.getSubject(subjectId);
        this.selectedSubject = response.data;
        this.selectedStudent = null;
        this.selectedTeacher = null;
      } catch (error) {
        console.error("Error fetching subject details:", error);
      }
    }
  }
};
</script>

<style>
/* Add any relevant styling here */
</style>
