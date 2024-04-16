<template>
  <div class="about-me">
  
    <div class="welcome">
      <div class="text">
        <p class="hi" id="hi-text">Hi, I'm Karolina</p>
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
    <div class="grey-part">
      <p class="grey1">WEB DEVELOPER</p>
      <p class="grey2">AND</p>
      <p class="grey3">MULTIMEDIA DESIGNER</p>
    </div>
    <div class="last-part">
      <div class="last-one col-4"></div>
      <div class="last-two">
        <img class="image2" src="/src/assets/img/me2.png" alt="">
      </div>
      <div class="last-three col-4"></div>

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
  height: 70px;
  display: flex;
  justify-content: center;
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

.grey-part{
  background-color: var(--secondary-grey);
  color: var(--primary-white);
  font-family: 'Abril Fatface';
  font-size: 50px;
  padding: 20px;
  width: 80%;
  text-align: center;
}
.grey1{
  background-color: var(--secondary-grey);
  color: var(--primary-white);
  font-size: 80px;
}
.grey2{
  background-color: var(--secondary-grey);
  color: var(--primary-white);
}
.grey3{
  background-color: var(--secondary-grey);
  color: var(--primary-white);
  font-size: 80px;
}
.last-part{
  border: 3px solid var(--secondary-grey);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 80%;
  height: auto;
}
.last-one{
  display: flex;
  justify-content: center;
  align-items: center;
}
.last-two{
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  border-left: 3px solid var(--secondary-grey);
  border-right: 3px solid var(--secondary-grey);
}
.image2{
  max-height: 500px;
  width: auto;
  border: 3px solid var(--secondary-grey);
}

</style>

<script>
export default {
  // Called when the component is mounted to the DOM
  mounted() {
    // Calls the animateText method when the component is mounted
    this.animateText();
  },
  methods: {
    // Method to animate the text
    animateText() {
      // Text to be animated
      const text = "Hi, I'm Karolina";
      // Get the element with the id 'hi-text'
      const hiText = document.getElementById('hi-text');
      // Clear existing content before appending new content
      hiText.innerHTML = '';

      let index = 0;

      // Set interval to append each letter of the text
      const intervalId = setInterval(() => {
        // Append the next letter of the text
        hiText.innerHTML += text[index];
        // Move to the next letter
        index++;
        // Check if animation is complete
        if (index === text.length) {
          // Stop the interval when animation is complete
          clearInterval(intervalId);
        }
      }, 100); // is the speed of typing here (milliseconds)
    }
  }
}
</script>