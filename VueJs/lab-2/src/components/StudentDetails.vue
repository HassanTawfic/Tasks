<template>
<div class="container d-flex justify-content-center my-5 ">
  <div class="card text-bg-dark mb-5">
    <div class="card-header">
      Quote
    </div>
    <div class="card-body">
     <p>First Name : {{this.first_name}}</p>
     <p>Last Name : {{this.last_name}}</p>
     <p>Email : {{this.email}}</p>
     <p>Gender : {{this.gender}}</p>
    </div>
  </div>
</div>
</template>

<script>
import axios from "axios";

export default {
  name: "StudentDetails",
  props:[],
  data(){
    return{
      id:'',
      first_name:'',
      last_name:'',
      email:'',
      gender:''
    }
  },
  created(){
    this.getStudentDetails()
  },
  methods:{
    async getStudentDetails(){
      this.id = this.$route.params.id;
      console.log(this.id)
      await axios.get(`http://localhost:3030/students?id=${this.id}`)
            .then((res)=>{
              console.log(res.data);
              res.data.map((student)=>{
                this.first_name = student.first_name
                this.last_name = student.last_name
                this.email = student.email
                this.gender = student.gender
              })
            })
          .catch((err)=>{console.log(err)})
    }
  }
}
</script>

<style scoped>

</style>