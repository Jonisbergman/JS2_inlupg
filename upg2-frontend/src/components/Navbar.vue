<template lang="">
  <!-- Navbar -->
<nav class="navbar navbar-expand-lg navbar-light bg-light bg-gradient">
  <!-- Container wrapper -->
  <div class="container">
   
    <div class="" id="navbarSupportedContent">
      <!-- Navbar brand -->
      <router-link class="navbar-brand mt-2 mt-lg-0" to="/">
        <i class="fa-solid fa-shoe-prints">Jonesy Sneaks</i>
      </router-link>
     
    </div>   

    <!-- Right elements -->
    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>       
        <li class="nav-item">
          <router-link class="nav-link" to="/products">Products</router-link>
        </li>       
        <li class="nav-item">
          <router-link class="nav-link" to="/about">About</router-link>
        </li>       
      </ul>
    <!-- Right elements -->
  </div>
  <!-- Container wrapper -->
</nav>
<!-- Navbar -->
</template>
<script>
export default {
  name: 'PrimaryNavigation'
}
</script>
<style lang="">
  
</style>