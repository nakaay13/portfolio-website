<template>
    <main>
      <div class="portfolio-part">
            <div class="header">
                PROJECTS
            </div>
            <div class="wrapper">
                <ul>
                <li class="col-3" @click="selectedCategory = 'web' ">WEB</li>
                <li class="col-3" @click="selectedCategory = 'photo' ">GRAPHICS</li>
                <li class="col-3" @click="selectedCategory = 'photo' ">OTHER</li>
                <li class="col-3" @click="selectedCategory = '' ">ALL</li>
            </ul>
            </div>
            
      
            <div class="portfolio-list">
                <div v-for="portfolioItem in filteredPortfolioItems" :key="portfolioItem" class="card">
                    <router-link :to="`/portfoliodetail/${portfolioItem.id}`">
                        
                    </router-link>
                        <div class="photo-wrapper">
                            <img class="project-photo" :src="portfolioItem.image" alt="">
                        </div>
                        <div class="text-wrapper">
                            <p class="project-title">{{ portfolioItem.title }}</p>
                            <p class="poject-description">{{ portfolioItem.description }}</p>
            
                        
                        <div v-if="portfolioItem.link">
                        <a :href="portfolioItem.link">See more</a>
                        </div>
                        <div v-else></div>
                        </div>
                        
                    
            </div>
            </div>
      
        </div>  
    </main>
  </template>
  
  <style scoped>
    .portfolio-part {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        
    }
    .wrapper{
        width: 80%;
        height: 100px;
        border: 3px solid var(--secondary-grey);
        display: flex;
        justify-content: center;
        }
    .header {
        font-size: 80px;
        font-family: 'Abril Fatface';
        background-color: var(--secondary-grey);
        color: var(--primary-white);
        width: 80%;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 150px;
    }
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
        font-family: 'Tinos', serif;
        font-size: 30px;
        color: var(--secondary-grey);
        cursor: pointer;
    }
    
    li:last-child{
    border-right: 0px;
    }
    .portfolio-list {
        width: 80%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        border: 3px solid var(--secondary-grey);
        border-top: 0px;
        color: var(--secondary-grey);
        padding: 20px;
        padding-bottom: 0px;
    }
    .card {
        height: 300px;
        border: 3px solid var(--secondary-grey);
        display: flex;
        flex-direction: row;
        margin-bottom: 20px;
    }
    
    .text-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 20px;
        color: var(--secondary-grey);
    }
    .project-title {
        font-size: 50px;
        font-family: 'Abril Fatface';
        margin-bottom: 10px;
        margin-top: 30px;
    }
    .poject-description {
        font-size: 20px;
        font-family: 'Tinos', serif;
        margin-bottom: 10px;
    }
    .photo-wrapper {
        border-right: 3px solid var(--secondary-grey);
        width: 100%;
    }
    .project-photo {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center top;
    }
    a {
        font-size: 20px;
        font-family: 'Tinos', serif;
        color: var(--secondary-grey);
    }
  </style>

  <script setup>
  import { ref, computed } from 'vue' 
  import getPortfolio from '@/modules/getPortfolio'
  const { portfolioItems } = getPortfolio()
  
  const selectedCategory = ref('')
  
  const filteredPortfolioItems = computed(() => {
    if (selectedCategory.value == '') {
      return portfolioItems.value
    }
    else {
      return portfolioItems.value.filter(item => item.category == selectedCategory.value)
    }
  })
  
  </script>
  
  