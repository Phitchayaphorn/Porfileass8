<template>
  <div>
    <div class="container">
         <div class="card">
            <div class="img">
               <img src="https://i.pinimg.com/736x/50/87/e9/5087e9b0cdffa4dd00eef7e0a9ee2996.jpg">
            </div>
            <div class="top-text">
               <div class="name">
                  Stray Kids
               </div>
               <p>
                  Fandom : stay
               </p>
            </div>
            <div class="bottom-text">
               <div class="text">
                  The band name Stray Kids or 스트레이 키즈 means a child who has left home or a lost child. Their music concept is therefore independent. There are no rules or regulations.
               </div>
               <div class="btn">
                  <a href="https://fandomkpop.com/stray-kids-members-profile/#gsc.tab=0">Read more</a>
               </div>
            </div>
         </div>
         <div class="card">
            <div class="img">
               <img src="https://i.pinimg.com/564x/de/59/44/de5944b01cf14198902a4e6e8cba01af.jpg">
            </div>
            <div class="top-text">
               <div class="name">
                   Treasure
               </div>
               <p>
                  Fandom : Treasure Makers
               </p>
            </div>
            <div class="bottom-text">
               <div class="text">
                  TREASURE, meaning treasure, comes from the name of the show before the debut, YG Treasure Box.
               </div>
               <div class="btn">
                  <a href="https://fandomkpop.com/treasure-members-profile/#gsc.tab=0">Read more</a>
               </div>
            </div>
         </div>
         <div class="card">
            <div class="img">
               <img src="https://i.pinimg.com/564x/66/8b/64/668b64111415d03da58ef2a6ef9c7d94.jpg">
            </div>
            <div class="top-text">
               <div class="name">
                  Seventeen
               </div>
               <p>
                  Fandom : Carat
               </p>
            </div>
            <div class="bottom-text">
               <div class="text">
                  The name SEVENTEEN comes from 13 members + 3 subgroups (Hip-Hop, Performance, Vocal) + 1 band = 17 (SEVENTEEN).
               </div>
               <div class="btn">
                  <a href="https://fandomkpop.com/seventeen-members-profile/#gsc.tab=0">Read more</a>
               </div>
            </div>
         </div>
      </div>
      <body>
      <center><a href="/home" target="HomePage">
          <button class="btn-1">Back to HomePage</button>
        </a></center>
    </body>
  </div>
</template>

<script>
export default {

}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap');
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}
html,body{
  height: 100%;
  display: grid;
  place-items: center;
  background: #f2f2f2;
  text-align: center;
}
.container{
  padding: 0 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
   background-color: #FCEEE2;
}
.card{
  height: 280px;
  max-width: 350px;
  margin: 0 20px;
  background: white;
  transition: 0.4s;
  box-shadow: 2px 2px 5px rgba(0,0,0,0.2);
}
.card:hover{
  height: 470px;
  box-shadow: 5px 5px 10px rgba(0,0,0,0.2);
}
.card .img{
  height: 200px;
  width: 100%;
}
.card .img img{
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.card .top-text{
  padding: 5px;
}
.card .top-text .name{
  font-size: 25px;
  font-weight: 600;
  color: #202020;
}
.card .top-text p{
  font-size: 20px;
  font-weight: 600;
  color: #e74c3c;
  line-height: 20px;
}
.card .bottom-text{
  padding: 0 20px 10px 20px;
  margin-top: 5px;
  background: white;
  opacity: 0;
  visibility: hidden;
  transition: 0.1s;
}
.card:hover .bottom-text{
  opacity: 1;
  visibility: visible;
}
.card .bottom-text .text{
  text-align: justify;
}
.card .bottom-text .btn{
  margin: 10px 0;
  text-align: left;
}
.card .bottom-text .btn a{
  text-decoration: none;
  background: #e74c3c;
  color: #f2f2f2;
  padding: 5px 8px;
  border-radius: 3px;
  display: inline-flex;
  transition: 0.2s;
}
.card .bottom-text .btn a:hover{
  transform: scale(0.9);
}
@media screen and (max-width: 978px) {
  .container{
    flex-wrap: wrap;
    flex-direction: column;
  }
  .card{
    max-width: 700px;
    margin: 20px 0;
  }
}
</style>
<style scoped>
button {
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  border: 0px;
  background: transparent;
  position: relative;
  margin: 20px;
  transition: all 0.25s ease;
}

.btn-1 {
  color: #000;
  overflow: hidden;
  border-radius: 30px;
  box-shadow: 0px -0px 0px 0px rgba(143, 64, 248, 0.5),
    0px -0px 0px 0px rgba(39, 200, 255, 0.5);
}

.btn-1:hover {
  transform: translate(0, -6px);
  box-shadow: 10px -10px 25px 0px rgba(143, 64, 248, 0.5),
    -10px 10px 25px 0px rgba(39, 200, 255, 0.5);

}

.btn-1:hover::after {
  transform: rotate(150deg);
}

.btn-1::after {
  content: "";
  width: 400px;
  height: 400px;
  position: absolute;
  top: -50px;
  left: -100px;
  background-color: #ff3cac;
  background-image: linear-gradient(225deg, #27d85c 0%, #26caf8 50%, #c625d0 100%);
  z-index: -1;
  transition: all 0.25s ease;
}
</style>

