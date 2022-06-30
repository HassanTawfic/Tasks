<template>
  <div class="container">
    <div class="d-flex align-items-center justify-content-center"></div>
  <div>
    <p class="display-2">Lab-3</p>
  </div>
  <div>
    <button class="btn btn-danger mx-2" @click.prevent="AdminPanel">Show Admin</button>
    <button class="btn btn-primary mx-2" @click.prevent="FormPanel">Show Form</button>
    <button class="btn btn-success mx-2" @click.prevent="StudentPanel">Show Student</button>
  </div>
  <div class="mt-5">
    <div>
      <FormApp v-if="showForm===true" @send="receiveData"/>
    </div>

  <StudentApp v-if="showStudent===true"/>
  <AdminApp v-if="showAdmin===true"/>
  </div>
  </div>
</template>

<script>
import FormApp from './components/FormApp.vue'
import StudentApp from './components/StudentApp.vue'
import AdminApp from './components/AdminApp.vue'
import {ref} from "vue";

export default {
  name: 'App',
  components: {
    FormApp,
    AdminApp,
    StudentApp
  },
  setup() {
    const Students = ref([])
    const Admins = ref([])
    const showForm = ref(true)
    const showStudent = ref(false)
    const showAdmin = ref(false)
    const student_id = ref(0)
    const admin_id = ref(0)
    const FormPanel = () =>{
      showForm.value = true
      showStudent.value = false
      showAdmin.value = false
    }
    const AdminPanel = () =>{
      showForm.value = false
      showStudent.value = false
      showAdmin.value = true
    }
    const StudentPanel = () =>{
      showForm.value = false
      showStudent.value = true
      showAdmin.value = false
    }
    const receiveData = (data) =>{
      console.log(data)
    }
    return {
      Students,
      Admins,
      showForm,
      showStudent,
      showAdmin,
      student_id,
      admin_id,
      FormPanel,
      AdminPanel,
      StudentPanel,
      receiveData
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
