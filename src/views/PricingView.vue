<template>
  <div class="pricing">   

    <div class="container bcontent">
        <h1>How much would cost you to rent a venue?</h1>
        <hr />        
        <div class="row">
            <div class="col-sm-6">
                <p>Across Australia, the average price for a meeting room is $84 per hour, then it's $412 if you want to book 
                out the meeting room/conference room for the whole day. These prices vary depending on location, access to amenities, and other services</p>

                <div class="container">
                    <div class="col-sm-12">
                    <div class="table-responsive pricing-options_table">
                        <!-- Pricing table -->
                        <table class="table table-bordered pricing-options-table__table">
                        <caption></caption>
                        <thead>
                            <tr>
                            <th></th>
                            <th id="melbourne" scope="col">
                                <div class="pricing-option__header">
                                <div class="h5">Melbourne</div>
                                </div>
                            </th>
                            <th id="brisbane" scope="col">
                                <div class="pricing-option__header pricing-option_popular">
                                <div class="h5">Brisbane</div>
                                </div>
                            </th>
                            <th id="sydney" scope="col">
                                <div class="pricing-option__header">
                                <div class="h5">Sydney</div>
                                </div>
                            </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th class="pricing-options-table__title" id="price" scope="col">Price (per hour)</th>
                            <td>
                                <div class="pricing-option__price">
                                <span class="pricing-option-price__currency">$</span>
                                <span class="pricing-option-price__number">95</span>
                                <span class="pricing-option-price__period">/ph</span>
                                </div>
                            </td>
                            <td>
                                <div class="pricing-option__price">
                                <span class="pricing-option-price__currency">$</span>
                                <span class="pricing-option-price__number">61</span>
                                <span class="pricing-option-price__period">/ph</span>
                                </div>
                            </td>
                            <td>
                                <div class="pricing-option__price">
                                <span class="pricing-option-price__currency">$</span>
                                <span class="pricing-option-price__number">89</span>
                                <span class="pricing-option-price__period">/ph</span>
                                </div>
                            </td>
                            </tr>
                            <tr>
                                <th class="pricing-options-table__title" id="daytime" scope="col">Day Time Flat Rate</th>
                                <td><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
                                <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                                </svg></td>
                                <td><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
                                <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                                </svg></td>
                                <td><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
                                <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                                </svg></td>
                            </tr>
                            <tr>
                                <th class="pricing-options-table__title" id="evening" scope="col">Evening extra charge</th>
                                <td><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
                                <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                                </svg></td>
                                <td><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                                </svg></td>
                                <td><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
                                <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                                </svg></td>
                            </tr>
                            <tr>
                                <th class="pricing-options-table__title" id="catering" scope="col">Catering included</th>
                                <td><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
                                <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                                </svg></td>
                                <td><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
                                <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                                </svg></td>
                                <td><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                                </svg></td>
                            </tr>
                            <tr>
                                <th class="pricing-options-table__title" id="parking" scope="col">Parking included</th>
                                <td><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                                </svg></td>
                                <td><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                                </svg></td>
                                <td><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
                                <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                                </svg></td>
                            </tr>
                            <tr>
                            <td></td>
                            <td colspan="3"><router-link to="/venues"><button type="button" class="btn btn-primary" style="width: 150px;">Search venues</button></router-link></td>
                            
                            </tr>
                        </tbody>
                        </table>
                    </div>
                </div>
            </div>

            </div>
            <div class="col-sm-6">
                <img class="info-img" src="../assets/venue-price.jpg" alt="Venue price">               
            </div>

        </div>
        
        <!-- Card information-->
        <div class="card" style="width: 100%;">
            <div class="row no-gutters">
                <div class="col-sm-5">
                    <img class="card-img" src="../assets/background.jpg" alt="Suresh Dasari Card">
                </div>
                <div class="col-sm-7">
                    <div class="card-body">
                        <h2 class="card-title">Looking for a meeting space to hire?</h2>
                        <p class="card-text">Venue has you covered with over 2,000 venues across Australia ranging from large event spaces to small meeting rooms. Find your perfect venue for hire faster than anywhere else</p>
                        <a href="#" class="btn btn-primary">Show spaces</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

        

  </div>
</template>

<script>
//Export component
export default {
  name: 'PricingView',  

}
</script>
    


<style scoped>
.info-img {

    width: 60%;

}

.card{
    margin-top: 40px;
}

.card-title{
    padding-top: 20px;
    padding-bottom: 30px;
}

.card-text{
    font-size: 18px;
    padding-bottom: 40px;
}

.pricing-option {
  margin-bottom: 20px;
  border: 15px solid rgba(0, 0, 0, 0.05);
  text-align: center;
}
.pricing-option__inner {
  background-color: white;
}
.pricing-option_popular {
  position: relative;
}
.pricing-option_popular::before {
  content: "";
  position: absolute;
  top: -15px;
  left: -15px;
  height: 0;
  width: 0;
  border-left: 60px solid #ed3e49;
  border-bottom: 60px solid transparent;
}
.pricing-option_popular::after {
  content: "\f0e7";
  font-family: "FontAwesome";
  font-size: 16px;
  position: absolute;
  display: block;
  top: -5px;
  left: 0;
  color: white;
}
.pricing-option__inner {
  border: 1px solid rgba(0, 0, 0, 0.1);
  -webkit-transition: all .1s;
       -o-transition: all .1s;
          transition: all .1s;
}
.pricing-option__inner:hover {
  border-color: rgba(0, 0, 0, 0.14);
  -webkit-box-shadow: 0 3px 15px rgba(0, 0, 0, 0.1);
          box-shadow: 0 3px 15px rgba(0, 0, 0, 0.1);
}
.pricing-option__header {
  padding: 15px 10px;
}
.pricing-option__header h5,
.pricing-option__header .h5 {
  font-weight: 600;
  font-size: 14px;
}
.pricing-option__price {
  padding: 10px;
  background: rgba(0, 0, 0, 0.03);
  color: #ed3e49;
}
.pricing-option-price__currency {
  vertical-align: 90%;
}
.pricing-option-price__number {
  font-size: 36px;
  font-weight: 300;
}
.pricing-option__body {
  padding: 10px 0 15px;
}
.pricing-option__body ul > li {
  padding: 10px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  text-transform: uppercase;
  font-size: 11px;
  font-weight: 600;
  color: #999;
}
.pricing-option__body ul > li:last-child {
  border-bottom: 0;
}
/* Pricing Options - Joint */
.pricing-options_joint {
  padding: 10px;
  margin-bottom: 40px;
  background-color: rgba(0, 0, 0, 0.05);
}
.pricing-options_joint .row {
  margin-left: 0;
  margin-right: 0;
}
.pricing-options_joint [class*="col-"] {
  padding-left: 0;
  padding-right: 0;
}
.pricing-options_joint .pricing-option {
  margin-bottom: 0;
  border: 5px solid transparent;
}
.pricing-options_joint .pricing-option_popular:before {
  top: 0;
  left: 0;
}
.pricing-options_joint .pricing-option_popular:after {
  top: 10px;
  left: 15px;
}
/* Pricing Options - Table */
.pricing-options_table {
  border: 15px solid rgba(0, 0, 0, 0.05);
}
.pricing-options-table__table {
  margin-bottom: 0;
  text-align: center;
}
.pricing-options-table__table > thead > tr > th {
  text-align: center;
  padding: 0;
}
.pricing-options-table__table .pricing-option__price {
  margin: -8px;
}
.pricing-options-table__table .pricing-option_popular:before {
  border-bottom-width: 40px;
  border-left-width: 40px;
  top: 0;
  left: 0;
}
.pricing-options-table__table .pricing-option_popular:after {
  font-size: 12px;
  top: 5px;
  left: 11px;
}

.pricing-options-table__title {
  vertical-align: middle !important;
  padding-left: 20px !important;
  text-align: left;
}
</style>
