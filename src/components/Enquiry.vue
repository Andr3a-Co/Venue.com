<template>
    <div>      
      <div class="form-bg">
        <div class="container-fluid px-1 py-5 mx-auto">
    <div class="row d-flex justify-content-center">
        <div class="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
            <h3>Request a Quote</h3>

            <!-- Form to enquiry venue quote-->
            <div class="card">                
                <form class="form-card" @submit="checkForm" method="post" action="http://mercury.swin.edu.au/it000000/formtest.php" novalidate>
                  <fieldset>
                    <div class="row justify-content-between text-left">
                        <div class="form-group col-sm-6 flex-column d-flex"> 
                          <label class="form-control-label px-3">First name<span class="text-danger"> *</span></label> 
                          <input type="text" id="fName" name="fName"  v-model="fName"  >                           
                        </div>
                        <div class="form-group col-sm-6 flex-column d-flex"> 
                          <label class="form-control-label px-3">Last name<span class="text-danger"> *</span></label> 
                          <input type="text" id="lName" name="lName"  v-model="lName" > 
                        </div>
                    </div>
                    <div class="row justify-content-between text-left">
                        <div class="form-group col-sm-6 flex-column d-flex"> 
                          <label class="form-control-label px-3">Email<span class="text-danger"> *</span></label> 
                          <input type="text" id="email" name="email"  v-model="email" placeholder="" > 
                        </div>
                        <div class="form-group col-sm-6 flex-column d-flex"> 
                          <label class="form-control-label px-3">Phone number<span class="text-danger"> *</span></label> 
                          <input type="text" id="phoneNum" name="phoneNum"  v-model="phoneNum" placeholder="" > 
                        </div>
                    </div>
                    <div class="row justify-content-between text-left">
                        <div class="form-group col-sm-6 flex-column d-flex"> 
                          <label class="form-control-label px-3">Event Date<span class="text-danger"> *</span></label> 
                          <input type="date" id="date" name="date" v-model="eventDate" placeholder="dd/mm/yyyy" > 
                        </div>
                        <div class="form-group col-sm-6 flex-column d-flex"> 
                          <label for="type" class="form-control-label px-3">Event Type<span class="text-danger"> *</span></label>
                          <select class="form-control search-slt" name="type" id="type" v-model="eventType" >                            
                            <option value="conference">Conference</option>
                            <option value="birthday" >Birthday Party</option>
                            <option value="corporate">Corporate Function</option>
                            <option value="wedding">Wedding</option>
                            <option value="networking">Networking event</option>
                          </select>
                        </div>
                    </div>
                    <div class="row justify-content-between text-left">
                        <div class="form-group col-12 flex-column d-flex"> 
                          <label class="form-control-label px-3">Special Requirements<span class="text-danger"> *</span></label> 
                          <input type="textarea" id="ans" name="ans" placeholder="Tell us about the number of guest, required catering or other special requirements" v-model="requirements"> 
                        </div>
                    </div> 
                  </fieldset>                   
                    <div class="row justify-content-center">
                        <div class="form-group col-sm-6"> <button type="submit" class="btn-block btn-primary">Request a quote</button> </div>
                    </div>
                    <div class="errors" v-if="errors.length" >
                      <p>Please check the following error(s):</p>
                      <ul>
                        <li v-for="error in errors" v-bind:key="error" v-bind:error="error">{{ error }}</li>
                      </ul>
                    </div>
                </form>
            </div>
        </div>
    </div>
  </div>
</div>    
</div>


</template>

<script>
//export current component
export default {
  name: 'EnquiryView', 

  data() {
    return {

        fName: null,
        lName: null,        
        email: null,
        phoneNum: null,
        eventDate: null,
        eventType: null,
        requirements: null,
        show: false,        

errors: []

    }

},

methods: {
  //Check if there is errors in errors list - flag = true
  checkForm: function (e) {
  this.errors = [];
  var result = true;

  //Check name input, no empty only letters
  if (!this.fName) {
    this.errors.push("First name is required");
    result = false;
  } else if(!this.fName.match("^[A-Za-z]+$")) {
    this.errors.push("Name contains invalid characters (letters and spaces only)");
    result = false;
  }

  //Check last name input, no empty only letters
  if (!this.lName) {
    this.errors.push("Last name is required");
    result = false;
  } else if(!this.lName.match("^[A-Za-z]+$")) {
    this.errors.push("Last name contains invalid characters (letters and spaces only)");
    result = false;
  }

  //Check email input, no empty match regex format
  if (!this.email) {
    this.errors.push("Email is required");
    result = false;
  } else if(!this.email.match('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$')) {
    this.errors.push("Invalid email format");
    result = false;
  }

   //Check phone input, no empty match regex format
  if (!this.phoneNum) {
    this.errors.push("Phone Number is required");
    result = false;
  } else if(!this.phoneNum.match('^[04][0-9]{9}$')) {
    this.errors.push("Invalid phone number format (must start with 04)");
    result = false;
  }

   //Check event date input, no empty match regex format
  if (!this.eventDate) {
    this.errors.push("Event date is required");
    result = false;
  } 

   //Check event type select element input, no empty 
  if (!this.eventType) {
    this.errors.push("Event type is required");
    result = false;
  }
  
   //Check requirements input, no empty match regex format
  if (!this.requirements) {
    this.errors.push("Special requirements is required");
    result = false;
  } else if(!this.requirements.match('^[a-zA-Z0-9 ]*$')) {
    this.errors.push("Invalid format");
    result = false;
  }

  //If there're errors prevent the form from submit
  if (!result)
      e.preventDefault();
  return result;
}

},


}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h3{
  font-family: 'Dela Gothic One', cursive;  
  font-size: 40px;
  color: white;
  text-align: center;
  padding-top: 0;
  margin-top: -25px;
}
ul {
  
  list-style-type: none;
  margin: 0;
  padding: 0;
}

li {
  display: inline-block;
  text-align: center;
  padding-left: 20px;
  color: #d4000b;
}
.form-bg{
  background-image: url(../assets/melbourne.jpg) ;
  background-size: cover;
  background-repeat: no-repeat;  

}

body{
  color: #000;
  overflow-x: hidden;
  height: 100%;  
}
.card{
  padding: 30px 40px;
  margin-top: 20px;
  margin-bottom: 20px;
  border: none !important;
  box-shadow: 0 6px 12px 0 rgba(0,0,0,0.2)}

.errors{
  margin-top: 20px;
}
  
.blue-text{color: #f7f7f7}
.form-control-label{margin-bottom: 0}

p {
  font-size: 18px !important;
}

input, textarea, button{
  padding: 8px 15px;
  border-radius: 5px !important;
  margin: 5px 0px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  font-size: 18px !important;
  font-weight: 300}
  
input:focus, textarea:focus{
  -moz-box-shadow: none !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
  border: 1px solid #00BCD4;
  outline-width: 0;
  font-weight: 400}
      
.btn-block{
  text-transform: uppercase;
  font-size: 15px !important;
  background-color: rgb(47, 147, 241);
  font-weight: 400;
  margin-top: 20px;
  height: 43px;
  cursor: pointer}
  
.btn-block:hover{color: #0f22cf !important}

button:focus{
  -moz-box-shadow: none !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;outline-width: 0}

</style>