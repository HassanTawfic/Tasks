<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Lab-2</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link to="/" class="nav-link active">All Students</router-link>
<!--          <a class="nav-link active" aria-current="page" href="#">All Students</a>-->
<!--          <a class="nav-link" href="#">Add Student</a>-->
          <router-link to="/addStudent" class="nav-link">Add Student</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "navbarComp"
}
</script>

<style scoped>

</style>