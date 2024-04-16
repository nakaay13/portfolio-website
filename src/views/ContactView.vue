<template>
    <div class="contact">
        <div class="header">
            CONTACT
        </div>
        <div class="info">
            <div class="phone-part">
                <img class="phone" src="/src/assets/img/old-phone.png" alt="">
            </div>
                
               
            <div class="cv_text">
                
                Email adress: karolinabrzek01@gmail.com
                <br><br>
                Phone number: +45 50 22 48 95
                <br><br>
                Another phone number: +48 660 320 676
                <br><br>
                Link to my LinkedIn profile: <a href="www.linkedin.com/in/karolina-brzek-067b952b5">click here</a>
                <br><br>
                Link to my GitHub profile: <a href="https://github.com/nakaay13">click here</a>

            </div>
            
        </div>
    </div>
</template>

<script>

</script>

<style>
.contact {
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
.info {
    font-family: 'Tinos', serif;
    font-size: 30px;
    color: var(--secondary-grey);
    background-color: var(--primary-white);
    width: 80%;
    display: flex;
    flex-direction: row;
    height: auto;
    border: 3px solid var(--secondary-grey);
    padding: 30px;
}
.phone{
    max-width: 25%;
    height: auto;
}
.phone-part{
    height: auto;
}

</style>