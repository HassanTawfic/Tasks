<template>
  <div class="container mt-5">
    <div class="d-flex align-items-center justify-content-center">
      <button type="button" class="btn btn-primary mx-2" @click="activateFrom">Form</button>
      <button type="button" class="btn btn-success mx-2" @click="activateStudent">Student</button>
      <button type="button" class="btn btn-warning mx-2" @click="activateAdmin">Admin</button>
    </div>
    <div v-if="showAdmin === true">
      <admin-app :listOfAdmins="Admins" @deleteAdmin="deleteAdmin"/>
    </div>
    <div v-if="showForm === true">
      <form-app @send="addToArray"/>
    </div>
    <div v-if="showStudent === true">
      <student-app :listOfStudents="Students" @deleteStudent="deleteStudent"/>
    </div>
  </div>
</template>

<script>
import FormApp from "@/components/Form";
import AdminApp from "@/components/Admin";
import StudentApp from "@/components/Student";
export default {
  name: 'App',
  components: {StudentApp, FormApp, AdminApp},

  data(){
    return{
      Students:[],
      Admins:[],
      showStudent: false,
      showAdmin: false,
      showForm: true,
      student_id:0,
      admin_id:0,
    }
  },
  methods:{
    activateAdmin(){
      this.showAdmin = true;
      this.showForm = false;
      this.showStudent = false;
    },
    activateFrom(){
      this.showAdmin = false;
      this.showForm = true;
      this.showStudent = false;
    },
    activateStudent(){
      this.showAdmin = false;
      this.showForm = false;
      this.showStudent = true;
    },
    addToArray(formValues){
      if(formValues.type === 'Admin'){
        formValues.id = this.admin_id
        this.Admins.push(formValues)
        this.admin_id++
      }
      else{
        formValues.id=this.student_id
        this.Students.push(formValues)
        this.student_id++
      }
    },
    deleteStudent(index){
      this.Students = this.Students.filter((student)=> student.id !== index)
    },
    deleteAdmin(index){
      this.Admins = this.Admins.filter((admin)=> admin.id !== index)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
#red {
  background-color: aquamarine;
  padding: 20px;
  color: black;
}

.green{
  background-color: green;
  padding: 20px;
  color: black;
}

</style>
