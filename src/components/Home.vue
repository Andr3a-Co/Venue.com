<template>
  <div class="hello">
  <div class="row">
      <div class="col-12 header" id="initial_body">
          <h1>Find and book your perfect</h1>
          <h1>function venue</h1>  
      </div>        
  </div>  
  <div class="row mainproduct">    
        <div class="col-5">
            <img classname='img-fluid' src="../assets/body-2.jpg" alt="Product_Photo" />
        </div>
        <div class="col-7 description">
            <h2 id="tittle2">Our mission is to create the world’s best venue discovery experience.</h2>
            <p id="paragrph1">We love seeing events come to life and are committed to make the process of finding, comparing and booking a venue effortless.</p>
            <router-link to="/venues"><button id="button1" type="button" class="btn btn-primary">Find Venue</button></router-link>
        </div>
  </div>
  </div>
  
</template>

<script>
//export current component
export default {
  name: 'HomeView',
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

#initial_body{
  background-image: url(../assets/body.jpg) ;
  background-size: cover;
  background-repeat: no-repeat;
  height: 200px;
  
}

.header{
  font-family: 'Dela Gothic One', cursive;  
  font-weight: bold;
  color: white;
  text-align: center;
  padding-top: 50px;
  
}

img {
  width: 90%;
  padding: 10px 20px;
}

.mainproduct{
  padding-top: 30px;
}

.description{
  text-align: left;
  padding-top: 30px;
}

#tittle2{
  font-weight: bold;
}

#paragrph1 {
  padding-top: 20px;
  font-size: 20px; 
  
}

#button1{
  margin-top: 20px;
}

@media only screen and (max-width: 1200px) {
.mainproduct {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
  }
}
</style>
