<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>


<template>
  <body>
    <header>
    <div class="top-part">
      <div class="logo col-2">
        <svg class="logo-svg" id="Group_5" data-name="Group 5" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="94.238" height="107.934" viewBox="0 0 94.238 107.934">
        <defs>
          <clipPath id="clip-path">
          <rect id="Rectangle_75" data-name="Rectangle 75" width="94.238" height="107.934" fill="none"/>
          </clipPath>
        </defs>
        <path id="Path_1" data-name="Path 1" d="M66.887,105.85H59.132L23.46,51.9,7.3,66.531v39.192H1.5V2.224H7.3V59.011L61.306,2.85H69.35L27.664,47.9Z" fill="#707070"/>
          <g id="Group_2" data-name="Group 2" transform="translate(0 0)">
            <g id="Group_1" data-name="Group 1" clip-path="url(#clip-path)">
              <path id="Path_2" data-name="Path 2" d="M66.887,105.85H59.132L23.46,51.9,7.3,66.531v39.192H1.5V2.224H7.3V59.011L61.306,2.85H69.35L27.664,47.9Z" transform="translate(0 0)" fill="none" stroke="#707070" stroke-miterlimit="10" stroke-width="3"/>
            </g>
          </g>
        <path id="Path_3" data-name="Path 3" d="M16.2.5V36.954l7.812-7.429V8.313L46.7,8.239,53.886.5Z" fill="#707070"/>
          <g id="Group_4" data-name="Group 4" transform="translate(0 0)">
            <g id="Group_3" data-name="Group 3" clip-path="url(#clip-path)">
              <path id="Path_4" data-name="Path 4" d="M24.011,8.313,46.7,8.24,53.885.5H16.2V36.955l7.812-7.43Z" transform="translate(0 0)" fill="none" stroke="#707070" stroke-miterlimit="10" stroke-width="1"/>
              <path id="Path_5" data-name="Path 5" d="M92.908,68.811a21.608,21.608,0,0,0-3.32-8.154,20.443,20.443,0,0,0-7.032-6.3Q78.015,51.77,70.5,51.086a21.405,21.405,0,0,0,8.789-3.857,21.058,21.058,0,0,0,5.371-6.1,23.312,23.312,0,0,0,2.686-7.373,42.087,42.087,0,0,0,.732-7.666q0-13.379-8.545-19.482a25.283,25.283,0,0,0-2.741-1.688l-5.732,6.172a17.252,17.252,0,0,1,3.151,1.864q6.249,4.737,6.25,14.5,0,10.839-6.738,15.429t-21,4.59H39.632l-2.676,2.516,4.992,5.3H52.82A76.721,76.721,0,0,1,68.4,56.6a26.556,26.556,0,0,1,9.961,4,14.555,14.555,0,0,1,5.322,6.885,28.585,28.585,0,0,1,1.563,9.961q0,15.87-15.517,20.376l4.613,6.9a31.611,31.611,0,0,0,9.586-5.014q9.814-7.713,9.814-22.265a47.074,47.074,0,0,0-.83-8.643" transform="translate(0 0)" fill="#707070"/>
              <path id="Path_6" data-name="Path 6" d="M92.908,68.811a21.608,21.608,0,0,0-3.32-8.154,20.443,20.443,0,0,0-7.032-6.3Q78.015,51.77,70.5,51.086a21.405,21.405,0,0,0,8.789-3.857,21.058,21.058,0,0,0,5.371-6.1,23.312,23.312,0,0,0,2.686-7.373,42.087,42.087,0,0,0,.732-7.666q0-13.379-8.545-19.482a25.283,25.283,0,0,0-2.741-1.688l-5.732,6.172a17.252,17.252,0,0,1,3.151,1.864q6.249,4.737,6.25,14.5,0,10.839-6.738,15.429t-21,4.59H39.632l-2.676,2.516,4.992,5.3H52.82A76.721,76.721,0,0,1,68.4,56.6a26.556,26.556,0,0,1,9.961,4,14.555,14.555,0,0,1,5.322,6.885,28.585,28.585,0,0,1,1.563,9.961q0,15.87-15.517,20.376l4.613,6.9a31.611,31.611,0,0,0,9.586-5.014q9.814-7.713,9.814-22.265A47.074,47.074,0,0,0,92.908,68.811Z" transform="translate(0 0)" fill="none" stroke="#707070" stroke-miterlimit="10" stroke-width="1"/>
              <path id="Path_7" data-name="Path 7" d="M46.9,99.622H24.011V72.2L19.5,67.571l-3.3,3.2v36.663H52.123Z" transform="translate(0 0)" fill="#707070"/>
              <path id="Path_8" data-name="Path 8" d="M46.9,99.622H24.011V72.2L19.5,67.571l-3.3,3.2v36.663H52.123Z" transform="translate(0 0)" fill="none" stroke="#707070" stroke-miterlimit="10" stroke-width="1"/>
            </g>
          </g>
      </svg>

      </div>
      <div class="title col-8"> PORTFOLIO</div>
      <div class="name col-2">Karolina <br> Brzek</div>
    </div>
    <div class="wrapper">
      <ul>
        <li class="col-3"><router-link to="/">HOME</router-link></li>
        <li class="col-3"><RouterLink to="/projects">PROJECTS</RouterLink></li>
        <li class="col-3"><RouterLink to="/cv">CV</RouterLink></li>
        <li class="col-3"><RouterLink to="/contact">CONTACT</RouterLink></li>
      </ul>
    </div>
  </header>
  </body>
  <RouterView />

</template>

<style >

ul {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
  list-style-type: none;
}
li{
  border-right: 3px solid var(--secondary-grey);
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  
}
li:last-child{
  border-right: 0px;
}
a {
  text-decoration: none;
  color:var(--secondary-grey);
  font-family: 'Tinos', serif;
  font-size: 30px;
}
body {
  width: auto;
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: var(--secondary-white);
  
}
header{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
}
.top-part {
  width: 80%;
  height: 150px;
  border: 3px solid var(--secondary-grey);
  border-bottom: 0px;
  display: flex;
  justify-content: center;
}
.wrapper{
  width: 80%;
  height: 100px;
  border: 3px solid var(--secondary-grey);
  display: flex;
  justify-content: center;
}
.logo{
  border-right: 3px solid var(--secondary-grey);
  display: flex;
  justify-content: center;
  align-items: center;
}
.logo-svg{
  width: auto;
  height: 90px;
}
.title{
  border-right: 3px solid var(--secondary-grey);
  font-family: 'Abril Fatface';
  color: var(--secondary-grey);
  font-size: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.name{
  font-family: 'Abril Fatface';
  color: var(--secondary-grey);
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
