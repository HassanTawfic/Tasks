<template>
    <form @click.prevent="sendFromValues">
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
      <div class="d-flex flex-column align-items-center">
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
      </div>
      <button type="submit" class="btn btn-primary mt-2">Submit</button>
    </form>
</template>

<script>
import {ref} from "vue";

export default {
  name: "FormApp",
  emits:['send'],
  setup(props,context){
    const formValues= ref({
      id:0,
      email:'',
      age:'',
      city:'',
      type:''
    })
    const sendFromValues = () =>{
      context.emit('send',formValues.value)
    }
    return{
      formValues,
      sendFromValues
    }
  }
}
</script>

<style scoped>

</style>