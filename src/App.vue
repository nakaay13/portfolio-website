<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>


<template>
  <body>
    <header>
    <div class="wrapper">
      <nav>

        test for git
        <RouterLink to="/" exact>Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/projects">Projects</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
      </nav>
    </div>
  </header>
  </body>
  

  <RouterView />
</template>

<style scoped>
body {
  width: auto;
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: #EBE9E6;
}
</style>
