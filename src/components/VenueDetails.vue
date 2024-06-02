<template>
    <div class="venuedetails">         

    <div class="container bcontent">
      
    <hr /><br/><br/>
    <div class="card" >
        <div class="row no-gutters">
            <div class="col-sm-5" >
              <img class='img-fluid' src="../assets/venuedetails.jpg" alt="venue photo" >
            </div>
            <div class="col-sm-7">
                <div class="card-body">
                  <h2>{{$route.params.id}}</h2>    
                                        
                  <ul v-for="v in filterVenues" v-bind:key="v" v-bind:v="v">                    
                    <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                      <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                    </svg> {{v.location}}</li>                      
                    <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-dollar" viewBox="0 0 16 16">
                      <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z"/>
                    </svg>From ${{v.price}} p/p</li>                      
                    <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-buildings-fill" viewBox="0 0 16 16">
                      <path d="M15 .5a.5.5 0 0 0-.724-.447l-8 4A.5.5 0 0 0 6 4.5v3.14L.342 9.526A.5.5 0 0 0 0 10v5.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V14h1v1.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V.5ZM2 11h1v1H2v-1Zm2 0h1v1H4v-1Zm-1 2v1H2v-1h1Zm1 0h1v1H4v-1Zm9-10v1h-1V3h1ZM8 5h1v1H8V5Zm1 2v1H8V7h1ZM8 9h1v1H8V9Zm2 0h1v1h-1V9Zm-1 2v1H8v-1h1Zm1 0h1v1h-1v-1Zm3-2v1h-1V9h1Zm-1 2h1v1h-1v-1Zm-2-4h1v1h-1V7Zm3 0v1h-1V7h1Zm-2-2v1h-1V5h1Zm1 0h1v1h-1V5Z"/>
                    </svg> {{v.type}}</li>
                  </ul>  
                  
                  <p class="description" v-for="v in filterVenues" v-bind:key="v" v-bind:v="v">{{v.description}}</p>
                  
                  <router-link to="/enquiry"><button type="button" class="btn btn-primary">Enquiry now</button></router-link>
                </div>
            </div>
          </div>
        </div>
    </div>

</div>  

</template>

<script>
export default {
  name: 'VenueDetails',  

  data() {
    return { 
    venueObj: { name: "", location: "", price: 0, type: "", description: "" },

   venueList: [
      
      {name:'Niche Restaurant Bar', location:'Perth', price:352, type:'Restaurant', description: 'This private space boasts floor-to-ceiling windows that create a bright and welcoming atmosphere. Adorned with elegant blue walls and art pieces, this is the perfect venue for any occasion. Accommodating up to 35 guests, the Blue Lady Room is one of the most sought-after private rooms in Lotus.' },
      {name:'Wall Street', location:'Melbourne', price:125, type:'Hotel', description: 'Wall street runs events super smoothly. Perfect outcomes are an assurance, because every aspect of the event has been properly considered and planned. Our aim is always to have your guests leave impressed by the service and style of a truly first-class function.'},     
      {name:'Heritage Hotel', location:'Melbourne', price:90, type:'Hotel', description: 'This flexible Melbourne conference venue with a bright north-facing aspect, the Blenheim Room can be divided in two, catering the Boardroom. With the adjacent lounge, it provides a perfect space for training sessions and small Melbourne seminars. -Melbourne CBD location'},
      {name:'Mt Lofty Summit Restaurant And Cafe', location:'Melbourne', price:75, type:'Restaurant', description: 'Our unique, private space accommodates up to 25 guests and offers a seated dining room with a balcony overlooking Glebe Point Road. Plus, we have a private bar that is ready to serve you and your guests an exclusive dining experience that will not be forgotten.  Make memories that last with Vecino Fiesta Party Room!'},
      {name:'QT Sydney', location:'Sydney', price:150, type:'Coworking space', description: 'QT Sydney meeting room has a professional yet welcoming atmosphere, ideal for client meetings and interviews. Booking includes Wi-Fi, TV, whiteboard and chic furnishings.'},  
      {name:'The Parlour', location:'Melbourne', price:80, type:'Restaurant', description: 'The Parlour Courtyard boasts a terrace-style aesthetic with terracotta orange tiles and rich wooden furnishings. This space can cater to 250 standing and 150 seated. At the back of the room, there is a gorgeous wooden bench with large wheels replacing the chair-arms'},
      {name:'Deer Duck Bistro', location:'Sydney', price:295, type:'Restaurant', description: 'Deer Duck Bistro has a selection of low and high tables in addition to intimate banquettes are scattered throughout the bar. Offering a sophisticated, Italian environment. The wine bar area can comfortably fit 40-50 people seated or 70 standing. The restaurant can comfortably seat 40-45 or 50-60 standing'},  
      {name:'Brix Distillery Hotel', location:'Perth', price:99, type:'Hotel', description: 'Brix Distillery is available in various configurations for up to 40 cocktail drinkers or 32 seated guests, she’s a flexible host, and with provocative art and eye-catching design, the room is far from short on intrigue. A large plasma screen and plenty of natural light complete a space that always succeeds in leaving a lasting impression.'},    
      {name:'The Krystal Function Centre', location:'Brisbane', price:120, type:'Coworking space', description: 'Sleek and modern podcast recording studio to seat 3 people. Comes equipped with podcast equipment, Wi-Fi and complimentary tea and coffee'},
      {name:'Laneway Bar', location:'Melbourne', price:50, type:'Bar', description: 'This is a beautiful basement space, with warm toned art-deco panelling and leather lounge chairs making this an inviting hideaway. Perfect for any events you are planning be it a birthday celebration, business lunch or a special milestone you want to celebrate in style.'},
      {name:'The Stirling Arms Restaurant', location:'Brisbane', price:65, type:'Restaurant', description: 'The Stirling is a large space perfect for any event. Whether it be a casual, cocktail-style event OR a more formal sit-down dinner, this space has you covered. What we can offer Semi-private space Air conditioned Table service available on request Food & beverage Canapes Seated dining Grazing boards Drink packages Cocktail station'},
      {name:'The Mix Bar', location:'Sydney', price:55, type:'Bar', description: 'The mix bar is a cosy and inclusive Wine Bar and restaurant, which prides itself on serving delicious food from a seasonal menu, mouth-watering cheeses from an eclectic board, matched with exceptional wine and service. This venue can cater for business lunches, after work drinks, group celebrations or intimate dinners for two'},
      {name:'Kent St. Bar', location:'Brisbane', price:145, type:'Bar', description:'Celebrate your event in elegance in the periodic art deco Kent St. Bar. This intimate lounge area with street entry and private bar also has the ability to increase in function space size with optional inclusion of adding the adjoining areas, the Terrace Enclosure has the feel of a country escape'},
      {name:'Helm Bar', location:'Sydney', price:56, type:'Restaurant', description: 'Enter helm bar. The main and largest dining room at Chophouse, the beautifully high ceilings, rib cage design and dim lighting will make you feel like you are a world away from the bustle of Sydney CBD'},
      {name:'Ivy Blu Rooftop', location:'Brisbane', price:175, type:'Restaurant', description: 'Ivy menu is designed to be shared along with our carefully curated wine list to enhance the experience. it is masterfully inspired with both fresh seasonal produce and Middle Eastern cuisines, delivered with a signature twist. Our menu is designed to be shared, for a banquet-style dining experience.'},
      {name:'Voco Hotel Brisbane City Centre', location:'Brisbane', price:185, type:'Hotel', description: 'Voco Hotel An open plan space accommodating up to 230 guests standing or 120 seated, this space has a flexible floor plan & is the perfect space for any occasion'},
      {name:'Planet Royale', location:'Perth', price:285, type:'Coworking space', description: 'Planet Royale is located in the heart of the Perth CBD on the prestigious St Georges Terrace. With best-in-class technology solutions including an Immersive Studio, Dynamic Desks, an expansive outdoor terrace with city views, 119 seat tiered theatrette and flexible room configurations for all kinds of meetings and events, the space has been designed for customers to connect, collaborate and grow.'},
      {name:'The Terrace', location:'Perth', price:220, type:'Restaurant', description: 'The terrace has enviable views of the Swan River and a sumptuous modern Australian menu. Local produce is put to work in our seasonal menus which provide a local twist to some international cuisine options to suit every palate.'},
      {name:'Craft Bar', location:'Sydney', price:75, type:'Bar', description: 'Craft Bar is ideal for hosting casual corporate functions and special events. The space is a celebration of industrial and maritime design and has a combination of covered and open areas. This intimate function space has stunning views of the river and a cityscape backdrop that sets the perfect scene for celebrations'},
      {name:'Cabana Bar', location:'Perth', price:185, type:'Bar', description: 'Our expansive and fully covered Bar Terrace allows space for events of 50 - 120 people. The riverside area has a private entrance, exclusive bar, and stunning views of the Yarra River. Discover Ludlow Bar & Dining Room, spectacularly located on Sawn River'},
      {name:'The ArtHouse Hotel', location:'Perth', price:550, type:'Hotel', description: 'The ArtHouse is perfect for conferences, training, large dinners or cocktail events. The large and versatile Waldorf Grand function space can be catered to any occasion. Perfect for conferences, training, large dinners or cocktail events. This venue features fully-fledged serviced apartments with in-built kitchens. This venue is the ideal location for corporate events ranging from conferences, to product launches and training seminars'},
      {name:'The Oak Hotel', location:'Sydney', price:56, type:'Hotel', description: 'Ideal for a major corporate event or dinner celebration, this venue offers high-speed, wireless Internet and other audiovisual support. Ask our dedicated events team to help you customize a menu for your next gathering. Beautiful floor to ceiling draping can be used if audiovisual is not in use to add to the inviting ambience of the room'},
      {name:'Sofitel Hotel', location:'Melbourne', price:90, type:'Hotel', description: 'The space size is 20 sqm can accommodate 20 people for theatre style. This venue offers catering options for food and beverage requirements and function room amenities to ensure they meet your every need for a successful outcome of your event.'},
      {name:'Fox & Wildling Studios', location:'Brisbane', price:300, type:'Coworking space', description: 'This training room is fully equipped with the latest amenities. Enjoy complimentary T2 tea and barista-made coffee for your meeting on arrival. Includes TV (HDMI)/One Click Wonder Screen, WIFI, and a Whiteboard (on request).'},
      {name:'The Harem', location:'Melbourne', price:60, type:'Coworking space', description: 'Located on Spencer Street in Melbourne CBD which is just minutes from the Cross Station and Tram stop. We have recently renovated and redecorated with new furniture. Our facilities can be configured for both computer and presentation style layouts. Whichever layout you choose, just let us know and we can accommodate for your needs.'},
      {name:'Radisson Hotel', location:'Perth', price:150, type:'Hotel', description: 'Raddisson Hotel the largest function room, is panelled in handcrafted timbers and feature full-length French doors with views of the magnificent pool & fountain. The pillar-less room can be divided into two with access ways that allow efficient and discreet service to either room.'},
      {name:'Greenwood Hotel', location:'Sydney', price:430, type:'Hotel', description: 'Greenwood Hotel is Australia’s premier ballroom. It is a spectacular venue for your events and special occasions with magnificent custom-designed carpets, seven metre ceilings, plush wall panelling and superbly appointed fittings.'},
      ]
    };
  },

  computed: {
//Filter venues to fetch data sent by parent component
filterVenues: function () {
  return this.venueList.filter((v) =>
    v.name.toLowerCase().match(this.$route.params.id.toLowerCase())
  );
}
}
}

</script>

<style scoped>

hr{

  margin-top: 50px;

}
.card {

  width: 100%;  
  margin-bottom: 100px;

}

ul {
  
  list-style-type: none;
  margin: 0;
  padding: 0;
}

li {
  display: inline-block;
  padding-left: 70px;
  padding-top: 20px;
}

button{
  margin-top: 30px;
}

.description{
  margin-top: 30px;

}

</style>