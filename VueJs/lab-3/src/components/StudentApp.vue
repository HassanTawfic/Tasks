<template>
  <div class="d-flex justify-content-center mt-5">
    <table class="table">
      <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Email</th>
        <th scope="col">Age</th>
        <th scope="col">City</th>
        <th scope="col">Action</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(student) in listOfStudents" :key="student">
        <th scope="row">{{ student.id }}</th>
        <td>{{ student.email }}</td>
        <td>{{ student.age }}</td>
        <td>{{ student.city }}</td>
        <td :key="student.id">
          <button type="button" class="btn btn-danger mx-2" @click.prevent="$emit('deleteStudent',student.id)">Delete</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "studentApp",
  emits:['deleteStudent'],
  props:['listOfStudents',],
  data(){
    return{
    }
  }
}
</script>

<style scoped>

</style>