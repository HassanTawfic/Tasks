<template>
<div class="">
  <div class="container mb-5">
    <div class="display-5 mt-5 mb-2 text-center">Student List</div>
    <table class="table mt-3 table-striped table-dark text-center mb-5">
      <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">First Name</th>
        <th scope="col">Last Name</th>
        <th scope="col">Email</th>
        <th scope="col" >Actions</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="student in allStudents" :key="student.id">
        <th scope="row">{{ student.id }}</th>
        <td>{{ student.first_name }}</td>
        <td>{{ student.last_name }}</td>
        <td>{{ student.email }}</td>
        <td>
          <router-link :to='`/students/${student.id}`' class="btn btn-outline-info">Show More Details</router-link>
          <button @click="deleteStudent(student.id)" class="btn btn-outline-danger ms-3">Delete</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</div>
</template>

<script>
import axios from "axios";

export default {
  name: "allStudentsApp",
  data(){
    return{
      allStudents: []
    }
  },
  created(){
    this.getAllStudents()
  },
  methods:{
    async getAllStudents(){
      console.log("Hey")
      await axios.get('http://localhost:3030/Students').
      then((res)=>{console.log(res.data)
      this.allStudents = res.data}).
      catch((err)=>{console.log(err)})
    },
    async deleteStudent(id){
      await axios.delete('http://localhost:3030/students/'+id)
          .then((res)=>console.log(res.status))
          .catch((err)=>console.log(err))
      await this.getAllStudents()
    }
  }
}

</script>

<style scoped>

</style>