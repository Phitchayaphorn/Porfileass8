<template>
     <div class="Mo-bg">
         <div class="card">
            <div class="img">
               <img src="https://i.pinimg.com/originals/72/1a/05/721a05269e9f629a3de3de4d6b14804e.gif">
            </div>
            <div class="top-text">
               <div class="name">
                 Harry Potter
               </div>
               <p>
                  JK rowling
               </p>
            </div>
            <div class="bottom-text">
               <div class="text">
                  Expecto Patronum!
               </div>
               <div class="btn">
                  <a href="https://www.wizardingworld.com/">Read more</a>
               </div>
            </div>
         </div>
         <div class="card">
            <div class="img">
               <img src="https://i.pinimg.com/originals/10/d3/e3/10d3e3218c08d895746dd599e56880b8.gif">
            </div>
            <div class="top-text">
               <div class="name">
                 Beauty and the Beast
               </div>
               <p>
                   Disney
               </p>
            </div>
            <div class="bottom-text">
               <div class="text">
                  Beauty and the Beast Prince is a 2017 American romantic, fantasy, adventure musical film.
               </div>
               <div class="btn">
                  <a href="https://www.youtube.com/watch?v=e3Nl_TCQXuw">Watch</a>
               </div>
            </div>
         </div>
         <div class="card">
            <div class="img">
               <img src="https://i.pinimg.com/originals/ae/8c/41/ae8c41c17ab9db22b549cdbc4b86bfe5.gif">
            </div>
            <div class="top-text">
               <div class="name">
                 Fantastic beasts
               </div>
               <p>
                   JK rowling
               </p>
            </div>
            <div class="bottom-text">
               <div class="text">
                  Fantastic Beasts is a film series directed by David Yates, based on the eponymous book by J. K. Rowling and a spin-off prequel to the Harry Potter novel 
               </div>
               <div class="btn">
                  <a href="https://www.youtube.com/watch?v=Y9dr2zw-TXQ">Watch</a>
               </div>
            </div>
         </div>
      </div>
      <div>
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
  background: white;
  text-align: center;
}
.Mo-bg{
  padding: 0 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #FCEEE2;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  height: 100vh;
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
  color: #F898A4;
  line-height: 20px;
}
.card .bottom-text{
  padding: 0 20px 10px 20px;
  margin-top: 5px;
  background:#F3D6CE;
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
  background: #75464A;
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
button{
                padding: 10px 20px;
                font-size: 1rem;
                cursor: pointer;
                border: 0px;
                background: transparent;
                position: relative;
                margin: 20px;
                transition: all 0.25s ease;
            }
            .btn-1{
                color:#000;
                overflow: hidden;
                border-radius: 30px;
                box-shadow: 0px -0px 0px 0px rgba(143, 64, 248, 0.5),
                0px -0px 0px 0px rgba(39, 200, 255, 0.5);
                            }
                .btn-1:hover {
                    transform: translate(0,-6px);
                    box-shadow: 10px -10px 25px 0px rgba(143, 64, 248, 0.5),
                    -10px 10px 25px 0px rgba(39, 200, 255, 0.5);
    
                } 
                .btn-1:hover::after{
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
                    background-image: linear-gradient(225deg,#27d85c 0%,#26caf8 50%,#c625d0 100%);
                    z-index: -1;
                    transition: all 0.25s ease;
    
                }      
</style>