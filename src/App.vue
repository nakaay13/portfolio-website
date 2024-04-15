<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>


<template>
  <body>
    <header>
    <div class="top-part">
      <div class="logo col-2"></div>
      <div class="title col-8"></div>
      <div class="name col-2"></div>
    </div>
    <div class="wrapper">
      <nav>

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

<style >
body {
  width: auto;
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: #EBE9E6;
  
}
header{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
}
.top-part {
  width: 80%;
  height: 150px;
  border: 3px solid #707070;
  border-bottom: 0px;
  display: flex;
  justify-content: center;
}
.wrapper{
  width: 80%;
  height: 100px;
  border: 3px solid #707070;
  display: flex;
  justify-content: center;
}
.logo{
  border-right: 3px solid #707070;
}
.title{
  border-right: 3px solid #707070;
}
</style>
