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

<style>
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
  border: 3px solid var(--secondary-grey);
  
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
  border: 3px solid var(--secondary-grey);
}
.resume {
  border-right: 3px solid var(--secondary-grey);
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
</style>
