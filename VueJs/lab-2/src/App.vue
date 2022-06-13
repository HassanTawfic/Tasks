<template>
  <div>
    <navbar></navbar>
    <router-view/>
  </div>
</template>

<script>

// import allStudents from "@/components/allStudents";
import navbar from "@/components/navbar";
export default {
  name: 'App',
  components: {
    // allStudents
    navbar
  }
}
</script>

<style>
#app {
  /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
  background-color: #d9d9d9;
}
</style>
