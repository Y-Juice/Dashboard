<template>
  <div class="wrapper">
    <h2>Dashboard Overzicht</h2>
    <p>Totaal Studenten: {{ students.length }}</p>
    <p>Totaal Docenten: {{ teachers.length }}</p>
    <p>Totaal Vakken: {{ subjects.length }}</p>

    <div class="innerWrapper" style="display: flex; gap: 20px">
      <!-- Students List and Details -->
      <div>
        <h3>Studentenlijst</h3>
        <ul>
          <li v-for="student in students" :key="student._id">
            <a href="#" @click.prevent="showStudentDetails(student._id)">{{
              student.name
            }}</a>
          </li>
        </ul>
        <div v-if="selectedStudent" class="studentList">
          <h3>Details van {{ selectedStudent.name }}</h3>
          <p><strong>Leeftijd:</strong> {{ selectedStudent.age }}</p>
          <p><strong>Klas:</strong> {{ selectedStudent.class }}</p>
          <p>
            <strong>Aanwezigheid:</strong> {{ selectedStudent.attendance }}%
          </p>
          <h4>Cijfers</h4>
          <ul class="cijfers">
            <li
              v-for="(grade, subject) in selectedStudent.grades"
              :key="subject"
            >
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
            <a href="#" @click.prevent="showTeacherDetails(teacher._id)">{{
              teacher.name
            }}</a>
          </li>
        </ul>
        <div v-if="selectedTeacher" class="teacherList">
          <h3>Details van {{ selectedTeacher.name }}</h3>
          <p>
            <strong>Vakken:</strong> {{ selectedTeacher.subjects.join(', ') }}
          </p>
          <p>
            <strong>Jaren Ervaring:</strong>
            {{ selectedTeacher.yearsExperience }}
          </p>
          <p>
            <strong>Aantal Klassen:</strong> {{ selectedTeacher.numClasses }}
          </p>
        </div>
      </div>

      <!-- Subjects List and Details -->
      <div>
        <h3>Vakkenlijst</h3>
        <ul>
          <li v-for="subject in subjects" :key="subject._id">
            <a href="#" @click.prevent="showSubjectDetails(subject._id)">{{
              subject.name
            }}</a>
          </li>
        </ul>
        <div class="subjectList"
          v-if="selectedSubject"
          
        >
          <h3>Details van {{ selectedSubject.name }}</h3>
          <p>
            <strong>Beschrijving:</strong> {{ selectedSubject.description }}
          </p>
          <p><strong>Semester:</strong> {{ selectedSubject.semester }}</p>
          <p><strong>Credits:</strong> {{ selectedSubject.credits }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from '../services/api'

export default {
  data() {
    return {
      students: [],
      teachers: [],
      subjects: [],
      selectedStudent: null,
      selectedTeacher: null,
      selectedSubject: null,
    }
  },
  created() {
    api.getStudents().then(response => (this.students = response.data))
    api.getTeachers().then(response => (this.teachers = response.data))
    api.getSubjects().then(response => (this.subjects = response.data))
  },
  methods: {
    async showStudentDetails(studentId) {
      try {
        const response = await api.getStudent(studentId)
        this.selectedStudent = response.data
        this.selectedTeacher = null
        this.selectedSubject = null
      } catch (error) {
        console.error('Error fetching student details:', error)
      }
    },
    async showTeacherDetails(teacherId) {
      try {
        const response = await api.getTeacher(teacherId)
        this.selectedTeacher = response.data
        this.selectedStudent = null
        this.selectedSubject = null
      } catch (error) {
        console.error('Error fetching teacher details:', error)
      }
    },
    async showSubjectDetails(subjectId) {
      try {
        const response = await api.getSubject(subjectId)
        this.selectedSubject = response.data
        this.selectedStudent = null
        this.selectedTeacher = null
      } catch (error) {
        console.error('Error fetching subject details:', error)
      }
    },
  },
}
</script>

<style>
.wrapper {
  width: 100%;
}

.studentList {
  border: 1px solid #ddd;
  padding: 0;
  width: 100%;
  margin-top: 0;
}

ul {
  text-decoration: none;
  list-style: none;
  background-color: #264653;
  height: 250px;
  overflow-y: scroll;
}

ul li a {
  color: #2a9d8f;
  font-weight: 600;
  font-size: 16px;
  width: 100%;
  padding: 15px 25px;
  background-color: #fff;
  border-radius: 25px;
}
ul {
  display: flex;
  justify-content: space-evenly;
  width: 20vw;
  align-items: flex-start;
  flex-direction: column;
  margin: 0;
  padding: 5% 5%;
  border-radius: 25px 0 0 25px;
}

.teacherList, .studentList, .subjectList {
  border: 1px solid #2a9d8f;
  padding: 10px;
  width: 100%;
  margin-top: 10px;
  border-radius: 25px;
}

.innerWrapper {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  margin-top: 5%;
}


ul li {
  margin: 10% 0;
  width: 100%;
}

.cijfers {
  height: fit-content;
  background-color: #3cddca;
overflow-y: hidden;
border-radius: 25px;
}
h4 {
  font-size: 20px;
  font-weight: 700;
  color: #fff;
}
.cijfers li {
padding: 0;
margin: 2% 0;
color: #fff;
font-weight: 500;
font-size: 18px;
}



::-webkit-scrollbar {
  opacity: 0.5;
  background-color: #1d6b62;
  width: 10px;
  
}

::-webkit-scrollbar-track {
 background-color: #1d6b62;
}

::-webkit-scrollbar-thumb {
  background: #3cddca;
}

h2 {
  font-weight: 700;
  font-size: 35px;
  color: #fff;
}
p{
  font-size: 20px;
  color: #fff;
}

h3 {
  font-size: 25px;
  color: #fff;
  font-weight: 500;
}

</style>
