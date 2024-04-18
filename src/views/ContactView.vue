<template>
    <div class="contact">
        <div class="header">
            CONTACT
        </div>
        <div class="info">
            
                
               
            <div class="contact_text">
                <img class="phone" src="/src/assets/img/old-phone(2).png" alt="">
                <p>
                    
                E-mail adress: karolinabrzek01@gmail.com
                <br><br>
                Phone number:  +45 50 22 48 95
                <br><br>
                Another phone number:  +48 660 320 676
                <br><br>
                <a href="https://www.linkedin.com/in/karolina-brzek-067b952b5/" target="_blank">My LinkedIn profile </a>
                <br><br>
                 <a href="https://github.com/nakaay13" target="_blank">My GitHub profile</a>
                </p>
                

            </div>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
.contact {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.contact_text {
    font-family: 'Tinos', serif;
    font-size: 30px;
    color: var(--secondary-grey);
    background-color: var(--primary-white);
    display: flex;
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
.info {
    color: var(--secondary-grey);
    background-color: var(--primary-white);
    width: 80%;
    display: flex;
    flex-direction: row;
    height: auto;
    border: 3px solid var(--secondary-grey);
    padding: 30px;
}



.phone {
    width: 50%; /* Set the width of the image to 100% */
    height: auto;
    float: left;
    margin-right: 30px ;
}
a{
    text-decoration: underline;
    color: var(--secondary-grey);
    font-family: 'Tinos', serif;
    font-size: 30px;

}

@media screen and (max-width: 1200px) {
    .header{
    font-size: 70px;
    height: 120px;
    }
    .info{
        font-size: 25px;
    }
    .contact_text{
        font-size: 25px;
    }
    a{
        font-size: 25px;
    }
}
@media (max-width: 1000px){
  .header {
    font-size: 70px;
    height: 120px;
  }
}
@media (max-width: 800px){
    .contact_text{
        flex-direction: column;
    }
    .image{
        float: none;
        margin-bottom: 20px;
    }
    p{
        margin-top: 20px;
    }
    .header {
    font-size: 60px;
    height: 100px;
  }
}
@media (max-width: 620px) {
    .header {
    font-size: 40px;
    height: 80px;
  }
  .info{
    border: var(--border-small) solid var(--secondary-grey);
    border-bottom: 0px;
  }
  .info{
        font-size: 20px;
    }
    .contact_text{
        font-size: 20px;
    }
    a{
        font-size: 20px;
    }
}
@media (max-width: 500px){
    .header {
    font-size: 30px;
    height: 60px;
  }
  .info{
        font-size: 15px;
    }
    .contact_text{
        font-size: 15px;
    }
    a{
        font-size: 15px;
    }
}
</style>