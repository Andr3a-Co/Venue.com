<template>
  <div class="home">
    
    <div class="row">
      <div class="col-12" id="initial_body">        
      </div>
      
      <div class="row">
        <div class="col-12">
          <h1>Frequently Asked Questions</h1>
        </div>
      </div>

      <section class="faqs">
					<div class="container">
						<div class="row">
							<div class="col-12">

                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text p-3" id="basic-addon1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-funnel-fill" viewBox="0 0 16 16">
                      <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2z"/>
                    </svg></span>
                  </div>
                  
                  <input type="text" class="form-control mb-4 p-3" name="filter" v-model="filterWord" placeholder="Search a question">
                </div>			
					<div class="toggle" v-for="topic in filteredTopics" v-bind:key="topic" v-bind:topic="topic" v-on:click="accordion">
						<div class="toggle-title">
							<h3>
								<span class="title-name">{{ topic.title }}</span>
								<i class="bi bi-plus-lg"></i>
							</h3>
						</div>
						<div class="toggle-inner">
							<p>
								{{ topic.description }}
							</p>
						</div>
					</div>
							
				</div>
			</div>
		</div>
        </section>

    </div>  
  </div>
</template>

<script>
export default {
  name: 'VenueDetails', 

  data() {
    return {

      filterWord: "",

      topics: [
			{ title: 'How much does it cost to hire a venue?', description: 'Once you let us know about your event and any associated equipment or services required, we can provide you with a customised quote. Get in touch through our online enquiry form' },
			{ title: 'Can I inspect my venue beforehand?', description: 'You need to first enquiry a quote and then  arrange a walk-through site inspection with the selected venue' },
			{ title: 'How I secure the venue after receiving a quote?', description: 'All bookings are secured with an initial $500 booking fee and a completed booking form, or you can book this via the online booking system. We do not hold dates without these details. The booking fee is non-refundable and covers the initial administration to process the booking' },
			{ title: 'What equipment is included at the venue?', description: 'Depending on the venue you book, your provider will inform you of the included equipment' },
			{ title: 'What is the cancellation policy?', description: 'If you cancel due to the number of guests unable to attend your event, or for any other "change of mind" reason the booking fee is forfeited. If you book, that is the risk you take; therefore, it will be taken as a cancellation fee' }
		],



    };
		
		
	},
	computed: {
		filteredTopics() {
			var fw = this.filterWord.toLowerCase();
			
			// return topic based on a condition
			return this.topics.filter(topic => {
				// return all topics if there's no filter word
				if (fw == "") {
					return topic;
				} else {
					// return topic if filter word is found in title or description
					if(topic.title.toLowerCase().indexOf(fw) != -1 || topic.description.toLowerCase().indexOf(fw) != -1 ) {
						return topic;
					}
				}
			});
		}
	},
	methods: {
		// Handle css toggle style
		accordion: function(event) {
			var _self = event.target,
					parentTitle = _self.parentNode.parentNode,
					parentToggle = _self.parentNode.parentNode.parentNode,
					descriptionToggle = parentToggle.querySelectorAll('.toggle-inner')[0];
			//Check status of title to display data
			if(parentTitle.classList.contains('active')) {
				parentTitle.classList.remove('active');
				descriptionToggle.style.display = 'none';
			} else {
				parentTitle.classList.add('active');
				descriptionToggle.style.display = 'block';
			}		

		}
	}
}

</script>

<style scoped>

#initial_body{
  background-image: url(../assets/background2.jpg) ;
  background-size: cover;
  background-repeat: no-repeat;
  height: 200px;
  
}

h1{
  margin-top: 30px;
  margin-bottom: 20px;
}

.toggle {
	background-color: #cfd7fc;
	border-radius: 5px;
	line-height: 1.8em;
	overflow: hidden;
	margin: 15px 0;
	border: 1px solid #e9eaed;
}
.toggle:hover {
	-webkit-box-shadow: 0px 5px 30px rgba(0,0,0,0.15);
	-moz-box-shadow: 0px 5px 30px rgba(0,0,0,0.15);
	box-shadow: 0px 5px 30px rgba(0,0,0,0.15);
}
.toggle .toggle-title {
	display: block;
	position: relative;
	opacity: .75;
}
.toggle .toggle-title.active {
	opacity: 1;
}
.toggle .toggle-title h3 {
	font-size: 20px;
  font-weight: bold;
	margin: 0px;
	line-height: 1.4em;
	cursor: pointer;
	
}
.toggle .toggle-inner {
  background-color: #ffffff;
	display: none;
	padding: 7px 25px 10px 25px;
	margin: 10px 0 6px;
}
.toggle .toggle-inner div {
	max-width: 100%;
}
.toggle .toggle-title .title-name {
	display: block;
	padding: 25px 65px 25px 25px;
}
.toggle .toggle-title.active .title-name {
	border-bottom: 1px solid #e9eaed;
}
.toggle .toggle-title a i {
	font-size: 22px;
	margin-right: 5px;
}
.toggle .toggle-title i {
	font-size: .9em;
	position: absolute;
	width: 24px;
	height: 24px;
	transition: all 0.3s ease;
	right: 25px;
	top: 30px;
}
.toggle .toggle-title i:before {
	content:"\f078";
	display: block;
}
.toggle .toggle-title.active i:before {
	content:"\f077";
}


</style>
