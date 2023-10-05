<template>
  
  <div id="app">
  <head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" >
  <link href="https://fonts.googleapis.com/css2?family=Dela+Gothic+One&family=Martian+Mono:wght@400;600;800&display=swap" rel="stylesheet">  
  
  </head>
  <div class="row">
    <div class="col-6 mainproduct">
      <router-link to="/"><img alt="Venue logo" src="./assets/venue.png"></router-link>
    </div>
    <div class="col-6">
    <nav>      
      <router-link to="/venues">Venues</router-link> |
      <router-link to="/pricing">Discover</router-link> |
      <router-link to="/FAQs">FAQs</router-link>
      <router-link to="/enquiry"><button type="button" class="btn btn-primary">Enquiry</button></router-link>
    </nav>       
    </div>    
  </div>
  <div id="main-view">
     <router-view/>
  </div>
  <div class="row">
      <div class="col-12" id="footerbar">
          <footer>              
              <p>&#169; Venue Pty Ltd. ABN: 42 897 900 675. &nbsp;</p>
          </footer>
      </div>
  </div>
  </div>
</template>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 10px 20px;
  color: #2c3e50;
  
  
}

#main-view{
  text-align: center;
}

img {
  width: 30%;
  padding: 10px 20px;
}

nav {
  padding: 20px;
  float: right;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 40px;
  font-size: 18px;
}

nav a.router-link-exact-active {
  color: #1a87f5;
}

#footerbar {
  clear: both;
  height: 50px;
  
}

#footerbar p {
  font-family: Helvetica, arial;
  color: black;
  font-weight: bold;
  text-align: center;
  padding-top: 15px;
}


</style>
