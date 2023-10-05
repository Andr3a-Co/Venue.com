<template>
  <div class="home">    
    <div id="unit" class="container-fluid">
      
        <div class="row" id="initial_body">
          <div class="container">
            <div class="col-lg-12">
                <div class="row">
                  <!-- Venue Name -->
                    <div class="col-lg-4 col-md-4 col-sm-12 p-0">    
                      <label for="vName" class="input"></label>                  
                      <input class="form-control search-slt" placeholder="Venue Name" type="text" id="vName" v-model="venueObj.name" /> 
                    </div>
                    <!-- Venue Type -->
                      <div class="col-lg-4 col-md-4 col-sm-12 p-0">                      
                      <label for="type" class="input"></label>
                      <select class="form-control search-slt" name="type" id="type"  v-model="venueObj.type" >
                        <option value="" disabled hidden>Venue Type</option>
                        <option value="all">All</option>
                        <option value="restaurant" >Restaurant</option>
                        <option value="hotel">Hotel</option>
                        <option value="bar">Bar</option>
                        <option value="coworking">Coworking space</option>
                      </select>
                    </div>
                      <div class="col-lg-4 col-md-4 col-sm-12 p-0"> 
                                              
                        <a href="#event_section"><button type="button" class="btn btn-primary wrn-btn" v-on:click="show = !show">Check Availability</button></a>
                        
                        
                    </div>
                    
                </div>
            </div>
          </div>
        </div>
        
    
      <section id="event_section">
      <div class="row"> 
        <!-- Location input -->
        <div class="col-sm-3">
          <div class="card" style="width: 22rem;">
            <img class="card-img-top" src="../assets/melbourne.jpg" alt="Card image cap">
            <div class="card-body">
            <h5 class="card-title" >Melbourne</h5>
            <p class="card-text">Find the top event spaces in Melbourne to make your event unforgettable</p>
            <ul class="list-group list-group-flush" v-for="v in filterVenues" v-bind:key="v" v-bind:v="v" >
              <router-link :to="{path: '/venues/' + v.name}"><li class="list-group-item" v-if="v.location == 'Melbourne'">{{ v.name }}</li></router-link>  
              <p class="status" v-if="show && v.location == 'Melbourne'" >{{ v.status }}</p>        
            </ul>         
          </div>
        </div>
        </div>

        <div class="col-sm-3">
            <div class="card" style="width: 22rem;">
            <img class="card-img-top" src="../assets/sydney.jpg" alt="Card image cap" >
            <div class="card-body">
            <h5 class="card-title" >Sydney</h5>
            <p class="card-text">Exclusive event venues of the harbour witing for you!</p>
            <ul class="list-group list-group-flush" v-for="v in filterVenues" v-bind:key="v" v-bind:v="v">
              <router-link :to="{path: '/venues/' + v.name}"><li class="list-group-item" v-if="v.location == 'Sydney'">{{ v.name }}</li></router-link>  
              <p class="status" v-if="show && v.location == 'Sydney'" >{{ v.status }}</p>            
            </ul>          
          </div>
        </div>
        </div>

        <div class="col-sm-3">
            <div class="card" style="width: 22rem;">
            <img class="card-img-top" src="../assets/brisbane.jpg" alt="Card image cap">
            <div class="card-body">
            <h5 class="card-title" >Brisbane</h5>
            <p class="card-text">The hottest event spaces on The Queensland Coast</p>
            <ul class="list-group list-group-flush" v-for="v in filterVenues" v-bind:key="v" v-bind:v="v">
              <router-link :to="{path: '/venues/' + v.name}"><li class="list-group-item" v-if="v.location == 'Brisbane'">{{ v.name }}</li></router-link> 
              <p class="status" v-if="show && v.location == 'Brisbane'">{{ v.status }}</p>              
            </ul>          
          </div>
        </div>
        </div>

        <div class="col-sm-3">
            <div class="card" style="width: 22rem;">
            <img class="card-img-top" src="../assets/perth.jpg" alt="Card image cap">
            <div class="card-body">
            <h5 class="card-title" >Perth</h5>
            <p class="card-text">The best event venues offered in Western Australia</p>
            <ul class="list-group list-group-flush" v-for="v in filterVenues" v-bind:key="v" v-bind:v="v">
              <router-link :to="{path: '/venues/' + v.name}"><li class="list-group-item" v-if="v.location == 'Perth'">{{ v.name }}</li></router-link> 
              <p class="status" v-if="show && v.location == 'Perth'">{{ v.status }}</p>              
            </ul>          
          </div>
        </div>
        </div>
      </div>
    </section>

    <div>
      <VenueDetails/>
    </div>

            
  </div>
    
  </div>
</template>

<script> 
//import external component
import VenueDetails from '@/components/VenueDetails.vue'

//Export component
export default {
  name: 'VenueView',
  components: {
    VenueDetails //Add external component 
  },

  data() {
    return {
    
    show: false,
    eventType: "",
    venueObj: { name: "", location: "", price: 0, type: "", status: "" },

    //Model with venue data
   venueList: [
      
      {name:'Niche Restaurant Bar', location:'Perth', price:352, type:'Restaurant', status: "Available from 02 October"},
      {name:'Wall Street', location:'Melbourne', price:125, type:'Hotel', status: "Available from 01 Pctober"},     
      {name:'Heritage Hotel', location:'Melbourne', price:90, type:'Hotel', status: "Unavailable"},
      {name:'Mt Lofty Summit Restaurant And Cafe', location:'Melbourne', price:75, type:'Restaurant', status: "Available now!"},
      {name:'QT Sydney', location:'Sydney', price:150, type:'Coworking space', status: "Unavailable"},  
      {name:'The Parlour', location:'Melbourne', price:80, type:'Restaurant', status: "Available now!"},
      {name:'Deer Duck Bistro', location:'Sydney', price:295, type:'Restaurant', status: "Available now!"},  
      {name:'Brix Distillery Hotel', location:'Perth', price:99, type:'Hotel', status: "Available from 05 October"},    
      {name:'The Krystal Function Centre', location:'Brisbane', price:120, type:'Coworking space', status: "Available now!"},
      {name:'Laneway Bar', location:'Melbourne', price:50, type:'Bar', status: "Available now!"},
      {name:'The Stirling Arms Restaurant', location:'Brisbane', price:65, type:'Restaurant', status: "Available now!"},
      {name:'The Mix Bar', location:'Sydney', price:55, type:'Bar', status: "Unavailable"},
      {name:'Kent St. Bar', location:'Brisbane', price:145, type:'Bar', status: "Available from 01 October"},
      {name:'Helm Bar', location:'Sydney', price:56, type:'Restaurant', status: "Available now!"},
      {name:'Ivy Blu Rooftop', location:'Brisbane', price:175, type:'Restaurant', status: "Unavailable"},
      {name:'Voco Hotel Brisbane City Centre', location:'Brisbane', price:185, type:'Hotel', status: "Unavailable"},
      {name:'Planet Royale', location:'Perth', price:285, type:'Coworking space', status: "Available now!"},
      {name:'The Terrace', location:'Perth', price:220, type:'Restaurant', status: "Available from 20 October"},
      {name:'Craft Bar', location:'Sydney', price:75, type:'Bar', status: "Available now!"},
      {name:'Cabana Bar', location:'Perth', price:185, type:'Bar', status: "Available from 15 October"},
      {name:'The ArtHouse Hotel', location:'Perth', price:550, type:'Hotel', status: "Available now!"},
      {name:'The Oak Hotel', location:'Sydney', price:56, type:'Hotel', status: "Available now!"},
      {name:'Sofitel Hotel', location:'Melbourne', price:90, type:'Hotel', status: "Unavailable"},
      {name:'Fox & Wildling Studios', location:'Brisbane', price:300, type:'Coworking space', status: "Available from 02 October"},
      {name:'The Harem', location:'Melbourne', price:60, type:'Coworking space', status: "Available now!"},
      {name:'Radisson Hotel', location:'Perth', price:150, type:'Hotel', status: "Available now!"},
      {name:'Greenwood Hotel', location:'Sydney', price:430, type:'Hotel', status: "Available from 13 October"},
      ]
    }
  },

  computed: {
    //filter function
    filterVenues() {   
      //Display all venues if type is equal all     
      if(this.venueObj.type.toLowerCase() == 'all') {
          return this.venueList;
      } else {
      return this.venueList.filter(
        (u) =>
          //Display venue by name, location or type
          u.name.toLowerCase().match(this.venueObj.name.toLowerCase()) &&
          u.location.match(this.venueObj.location) &&
          u.type.toLowerCase().match(this.venueObj.type.toLowerCase())
        );
      }
    },
    
  },
  
  
}  

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.search-slt{
    display: block;
    width: 100%;
    font-size: 0.875rem;
    line-height: 1.5;
    color: #55595c;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    height: calc(3rem + 2px) !important;
    border-radius:0;
}
.wrn-btn{
    width: 100%;
    font-size: 16px;
    font-weight: 400;
    text-transform: capitalize;
     height: calc(3rem + 2px) !important;
     border-radius:0;
     margin-top: 25px;
}

#initial_body{
  background-image: url(../assets/body.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  height: 200px;
  padding-top: 10px;
  margin-top: 10px;
  margin-bottom: 30px;
  
}

.container{
  padding-top: 30px;
  width: 80%;
}

.fade1-enter-active, .fade1-leave-active {
  transition: opacity 3s;
}
.fade1-enter, .fade1-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.status{
  color: blue;
  font-weight: bold;
  font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif
}




</style>

