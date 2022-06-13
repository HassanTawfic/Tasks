<template>
<div class="container">
  <p class="display-5 my-5 text-center"> Add Student</p>
  <form action="" @submit.prevent="addStudent">
    <div class="mb-3">
      <label for="FirstName" class="form-label">First Name</label>
      <input type="text" class="form-control" id="FirstName" v-model="first_name">
    </div>
    <div class="mb-3">
      <label for="LastName" class="form-label">Last Name</label>
      <input type="text" class="form-control" id="LastName" v-model="last_name">
    </div>
    <div class="mb-3">
      <label for="email" class="form-label">Email</label>
      <input type="email" class="form-control" id="email" v-model="email">
    </div>
    <div class="mb-3">
      <label for="gender" class="form-label">Gender</label>
      <input type="text" class="form-control" id="gender" v-model="gender">
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</div>
</template>

<script>
import axios from "axios";

export default {
  name: "addStudent",
  data(){
    return{
      first_name:'',
      last_name:'',
      email:"",
      gender:''
      }
    },
  methods:{
    addStudent(){
      axios.
          post('http://localhost:3030/students',{
        first_name:this.first_name,
        last_name:this.last_name,
        email:this.email,
        gender:this.gender
      }).then((res)=>{console.log(res.data)})
          .catch((err)=>{console.log(err)});
      this.returnToMain()
    },
    returnToMain(){
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>

</style>