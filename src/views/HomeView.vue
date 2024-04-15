<template>
  <div class="about-me">
  
    <div class="welcome">
      <div class="text">
        <p class="hi">Hi, I'm Karolina</p>
        <p class="description">
          Welcome to my portfolio website! I'm thrilled to have you here. Let me introduce myself: I've been captivated by the world of art from a young age. As I grew older, my passion for coding and crafting digital content blossomed, leading me to where I am today.
          <br>
         Currently, I'm immersed in my studies at EASV in Esbjerg, Denmark, where I'm pursuing a degree in Multimedia Design. It's here that I've discovered my knack for designing websites and exploring the realm of graphics, all while nurturing my creativity.
          <br>
          As you navigate through my portfolio, you'll get a glimpse into my journey and the projects that showcase my skills and passion. I'm excited for you to join me as I bring ideas to life through design and coding. Welcome aboard!</p>
      </div>
      <div class="hero-image">
        <img class="image" src="/src/assets/img/me.png" alt="">
      </div>
    </div>
    <div class="ticker-container">
      <div class="ticker">
        <p class="ticker-text">Explore my portfolio and dive into my projects! ┃ Contact me for your next design project! ┃ Read more about me below! ┃ Contact me if you have any questions! </p>
      </div>
    </div>
  </div>
</template>

<style>
.about-me { 
  display: flex;
  justify-content: center;
  flex-direction: column;
  
  align-items: center;
}
.welcome{
  border: 3px solid var(--secondary-grey);
  border-top: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 80%;
  height: auto;
  
}
.image{
  max-height: 500px;
  width: auto;
}
.text{
  padding: 200px 40px 40px 40px;
  
  border-right: 3px solid var(--secondary-grey);
}
.hi{
  font-size: 80px;
  font-family: 'Abril Fatface';
  color: var(--secondary-grey);
}
.description{
  font-size: 20px;
  font-family: 'Hind';
  color: var(--secondary-grey);
}
.ticker-container{
  border: 3px solid var(--secondary-grey);
  border-top: 0px;
  width: 80%;
  height: 50px;
  overflow: hidden;
}

.ticker {
  white-space: nowrap;
  animation: ticker-scroll 20s linear infinite; 
}

.ticker-text {
  display: inline-block;
  color: var(--secondary-grey);
  padding: 10px;
  font-family: 'Tinos', serif;
  font-size: 30px;
}


@keyframes ticker-scroll {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>
