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
      <tr v-for="(admin) in listOfAdmins" :key="admin">
        <th scope="row">{{ admin.id }}</th>
        <td>{{ admin.email }}</td>
        <td>{{ admin.age }}</td>
        <td>{{ admin.city }}</td>
        <td :key="admin.id">
          <button type="button" class="btn btn-danger mx-2" @click.prevent="$emit('deleteAdmin',admin.id)">Delete</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "adminApp",
  props:['listOfAdmins'],
  emits:['deleteAdmin']
}
</script>

<style scoped>

</style>