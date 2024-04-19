<template>
    <main>
      <div class="portfolio-part">
            <div class="header">
                PROJECTS
            </div>
            <div class="wrapper">
                <ul>
                    <li class="col-3" @click="selectedCategory = 'web' ">WEB</li>
                    <li class="col-3" @click="selectedCategory = 'graphic' ">GRAPHICS</li>
                    <li class="col-3" @click="selectedCategory = 'other' ">OTHER</li>
                    <li class="col-3" @click="selectedCategory = '' ">ALL</li>
                </ul>
            </div>
            
      
            <div class="portfolio-list">
                <div v-for="portfolioItem in filteredPortfolioItems" :key="portfolioItem" class="card">
                    <router-link :to="`/portfoliodetail/${portfolioItem.id}`"></router-link>
                    <div class="photo-wrapper">
                        <img class="project-photo" :src="portfolioItem.image" alt="" >
                    </div>
                    <div class="text-wrapper">
                        <p class="project-title">{{ portfolioItem.title }}</p>
                        <p class="poject-description">{{ portfolioItem.description }}</p>
        
                    
                        <div v-if="portfolioItem.link">
                            <a :href="portfolioItem.link" target="_blank">See more</a>
                        </div>
                        <div v-if="portfolioItem.link_download">
                            <a :href="portfolioItem.link_download" download>Download here</a>
                        </div>
                        <div v-else></div>
                    </div>
                </div>
            </div>
            <div class="portfolio-list-media">
                <div v-for="portfolioItem in filteredPortfolioItems" :key="portfolioItem" class="card-media">
                    <router-link :to="`/portfoliodetail/${portfolioItem.id}`"></router-link>
                    <div class="text-wrapper-media">
                        <div class="photo-wrapper-media">
                            <img class="project-photo-media" :src="portfolioItem.image" alt="" >
                        </div>
                        <p class="project-title-media">{{ portfolioItem.title }}</p>
                        
                    </div>
                    
                    
                        <div class="bottom-part">
                            <p class="project-title-media2">{{ portfolioItem.title }}</p>
                            <p class="poject-description-media">{{ portfolioItem.description }}</p>
        
                    
                        <div v-if="portfolioItem.link">
                            <a class="more" :href="portfolioItem.link" target="_blank">See more</a>
                        </div>
                        <div v-if="portfolioItem.link_download">
                            <a class="more" :href="portfolioItem.link_download" download>Download here</a>
                        </div>
                        <div v-else></div>
                        </div>

                        
                    
                </div>
            </div>
      
        </div>  
    </main>
  </template>
  
  <style scoped>
    .project-title-media2 {
        display: none;
    }
    .portfolio-list-media {
        display: none;
        
    }
    .portfolio-part {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        
    }
    .wrapper{
        width: 80%;
        height: 100px;
        border: var(--border-width) solid var(--secondary-grey);
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
        border-right: var(--border-width) solid var(--secondary-grey);
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
        border: var(--border-width) solid var(--secondary-grey);
        border-top: 0px;
        color: var(--secondary-grey);
        padding: 20px;
        padding-bottom: 0px;
    }
    .card {
        height: 400px;
        border: var(--border-width) solid var(--secondary-grey);
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
        
        max-width: 400px;
    }
    .project-photo {
        border-right: var(--border-width) solid var(--secondary-grey);
        width: auto;
        height: 100%;
        object-fit: cover;
        object-position: center top;
    }
    a {
        font-size: 20px;
        font-family: 'Tinos', serif;
        color: var(--secondary-grey);
    }
    @media (max-width:1200px){
        .card {
            height: 500px;
        }
    }
    @media (max-width:1000px){
        .header {
            font-size: 70px;
            height: 120px;

        }
        .wrapper{
            height: 70px;
        }
        li{
            font-size: 25px;
        }       
        .portfolio-list{
            display: none;
        }
        .portfolio-list-media {
            width: 80%;
            display: flex;
            justify-content: center;
            flex-direction: column;
            border: var(--border-width) solid var(--secondary-grey);
            border-top: 0px;
            color: var(--secondary-grey);
            padding: 20px;
            padding-bottom: 0px;
        }
        .card-media {
            height: auto;
            border: var(--border-width) solid var(--secondary-grey);
            display: flex;
            flex-direction: column;
            margin-bottom: 20px;
        }
    
        .text-wrapper-media {
            display: flex;
            flex-direction: row;
            padding: 20px;
            color: var(--secondary-grey);
            height: 300px;
            padding-bottom: 0px;
        }
        .project-title-media {
            font-size: 50px;
            font-family: 'Abril Fatface';
            margin-top: 150px;
        }
        .poject-description-media {
            font-size: 20px;
            font-family: 'Tinos', serif;
            margin: 20px;
            margin-bottom: 10px;
            margin-top: 10px;
        }
        .photo-wrapper-media {
            width: auto;
            border: 3px solid var(--secondary-grey);
            
        }
        .project-photo-media {
            
            width: auto;
            height: 100%;
            object-fit: cover;
            object-position: center top;
        }
        .more {
            font-size: 20px;
            font-family: 'Tinos', serif;
            color: var(--secondary-grey);
            margin: 20px;
        }
    }
    @media (max-width: 800px){
        .header {
            font-size: 60px;
            height: 100px;
        }
        .wrapper{
            height: 50px;
        }
        li{
            font-size: 20px;
        }
        .project-title-media{
            font-size: 40px;
            margin-top: 180px;
        }
        .poject-description-media {
            font-size: 15px;
        }
        .more {
            font-size: 15px;
        }

    }
    @media (max-width: 620px){
        .project-title-media{
            display: none;
        }
        .project-title-media2 {
            display: flex;
            font-size: 40px;
            font-family: 'Abril Fatface';
            margin: 10px 20px 10px 20px;
        }
        .header {
            font-size: 40px;
            height: 80px;
        }
        .wrapper{
            height: 40px;
            border: var(--border-small) solid var(--secondary-grey);
        }
        li{
            font-size: 15px;
            border-right: var(--border-small) solid var(--secondary-grey);
        }
        .photo-wrapper-media {
            width: 100%;
            border: var(--border-small) solid var(--secondary-grey); 
            height: auto; 
            max-height: 1000px;
            overflow: hidden; 
        }
        .project-photo-media {
            width: 100%;
            height: 100%; 
            object-fit: cover; 
        }
        .portfolio-list-media {
            border: var(--border-small) solid var(--secondary-grey);
            border-top: 0px;
            border-bottom: 0px;
        }
        .card-media {
            border: var(--border-small) solid var(--secondary-grey);
        }

    }
    @media(max-width:500px){
        .header {
             font-size: 30px;
             height: 60px;
        }
        .wrapper{
            height: 30px;
        }
        li{
            font-size: 10px;
        }
        .project-title-media2 {
            font-size: 25px;
        }
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
  
  