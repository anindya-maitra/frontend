<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="#">Quiz Master</a>
      </div>
    </nav>

    <div class="container mt-4">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
/* Global Styles */
body {
  font-family: Arial, sans-serif;
  background-color: #f8f9fa;
}
</style>
