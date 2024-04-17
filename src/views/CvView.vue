<script setup>
</script>

<template>
  <div class="cv">
    <div class="header">CV</div>

    <div class="download-part">
    <div class="resume ">
    <a href="/src/assets/PDF/CV.pdf" download>DOWNLOAD MY RESUME HERE</a>
    </div>
    <div class="business-card">
      <a href="/src/assets/PDF/business_card.pdf" download>DOWNLOAD MY BUSINESS CARD HERE</a>
    </div>
  </div>
  <div class="video">
      <p>VIDEO CV</p>
      <iframe
      src="https://www.youtube.com/embed/FVygyfbBc5g">
      </iframe>
  </div>
</div>
</template>

<style scoped>
.cv {
  display: flex;
  flex-direction: column;
  align-items: center;
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
.video {
  font-family: 'Tinos', serif;
  font-size: 30px;
  color: var(--secondary-grey);
  background-color: var(--primary-white);
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: auto;
  border: var(--border-width) solid var(--secondary-grey);
  
  padding: 30px;
}
.video p{
  margin-bottom: 30px;
}
iframe {
  width: 80%;
  height: 580px;
}
.download-part {
  font-family: 'Tinos', serif;
  font-size: 30px;
  color: var(--secondary-grey);
  background-color: var(--primary-white);
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  border: var(--border-width) solid var(--secondary-grey);
}
.resume {
  border-right: var(--border-width) solid var(--secondary-grey);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100px;
}
.business-card {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100px;
}

@media (max-width: 1200px) {
  iframe {
    height: 400px;
  }
  .download-part{
    flex-direction: column;
    height: 200px;
    border-bottom: 0px;
  }
  .resume {
    border-right: 0px;
    border-bottom: var(--border-width) solid var(--secondary-grey);
    width: 100%
  }
  .business-card {
    width: 100%;
  }
  
}
@media (max-width: 800px) {
  iframe {
    height: 300px;
  }
  .header {
    font-size: 60px;
    height: 100px;
  }
  .download-part {
    height: 100px;
  }
  .business-card a{
    font-size: 25px;
  }
  .resume a{
    font-size: 25px;
  }
  .video {
    font-size: 25px;
    padding: 20px;
  }
  .video p{
    margin-bottom: 20px;
  }
}
@media (max-width: 620px) {
  iframe {
    height: 200px;
  }
  .header {
    font-size: 40px;
    height: 80px;
  }
  .download-part {
    height: 80px;
  }
  .business-card a{
    font-size: 20px;
  }
  .resume a{
    font-size: 20px;
  }
  .video {
    font-size: 20px;
    padding: 10px;
  }
  .video p{
    margin-bottom: 10px;
  }
}
@media (max-width:500px) {
  iframe {
    height: 150px;
  }
  .header {
    font-size: 30px;
    height: 60px;
  }
  .download-part {
    height: 60px;
  }
  .business-card a{
    font-size: 15px;
  }
  .resume a{
    font-size: 15px;
  }
  .video {
    font-size: 15px;
    padding: 5px;
  }
  .video p{
    margin-bottom: 5px;
  }
  .video{
    border: var(--border-small) solid var(--secondary-grey);
  }
  .download-part{
    border: var(--border-small) solid var(--secondary-grey);
  }
  .resume{
    border-right: 0px;
    border-bottom: var(--border-small) solid var(--secondary-grey);
  }
  .business-card{
    border-bottom: var(--border-small) solid var(--secondary-grey);
  }
  
}
</style>
