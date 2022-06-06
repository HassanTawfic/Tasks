<template>
  <form @submit.prevent="$emit('send',formValues)">
    <div class="mb-3">
      <label for="email" class="form-label">Email address</label>
      <input type="email" class="form-control" name="email" id="email" v-model="formValues.email">
      </div>
    <div class="mb-3">
      <label for="age" class="form-label">Age</label>
      <input type="number" class="form-control" name="age" id="age" v-model="formValues.age">
    </div>
    <div class="mb-3">
      <label for="address" class="form-label">City</label>
      <input type="text" class="form-control" name="address" id="address" v-model="formValues.city">
    </div>
    <div class="form-check">
      <input class="form-check-input" value="Admin" type="radio" name="flexRadioDefault" id="Admin" v-model="formValues.type">
      <label class="form-check-label" for="Admin">
        Admin
      </label>
    </div>
    <div class="form-check">
      <input class="form-check-input" value="Student " type="radio" name="flexRadioDefault" id="Student" v-model="formValues.type">
      <label class="form-check-label" for="Student">
        Student
      </label>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>

<script>
export default {
  name: "formApp",
  emits:['send'],
  data(){
    return{
      formValues:{
        id:0,
        email:'',
        age:'',
        city:'',
        type:''
      },
    }
  },
  methods:{
    // handleForm(){
    //   console.log(this.formValues)
    // }
  }
}
</script>

<style scoped>

</style>