import React from 'react'

const Contact = () => {

    // (function() {
    //     emailjs.init('jt2lifTm3oZK1KIH3');
    // })();

    // const sendMail = () => {
    //     var params = {
    //       from_name : document.getElementById("fromname").value,
    //       email_id : document.getElementById("email_id").value,
    //       phone : document.getElementById("phone").value,
    //       message : document.getElementById("message").value
      
    //     }
    //     emailjs.send("service_tl4yihs", "template_14tanrg", params).then(function(res){
    //       alert("success"+ res.status)
    //     })
    //   }

  return (
    <div class="contact section" id="contact">
    <h1>Contact Me</h1>
    <div class="whole">
    <div class="for">
      <h3>Send me a message</h3>
      <form action="#" class="contact_form">
        <div class="tags">
          <label for="">Name*</label>
          <input id="fromname" type="text" required />
       </div>
       <div class="tags">
        <label for="">Email*</label>
        <input id="email_id" type="email" required />
     </div>
     <div class="tags">
      <label for="">Phone*</label>
      <input id="phone" type="number" required />
     </div>
     <div class="tags">
     <label for="">Message*</label>
     <textarea name="" id="message" columns="35" rows="1"></textarea>
     </div> 
     <button type="submit" onClick="sendMail()">Submit</button>
      </form>

     
    </div>

    <div class="info">
      <h3>General information</h3>
      <div class="in">
        <iconify-icon icon="entypo:location-pin"></iconify-icon>
        <p>9/136-3, Thathanur, Udayarpalaym, Ariyalur, Tamil Nadu, 621 804</p>
      </div>
      <div class="in">
        <iconify-icon icon="carbon:phone-filled"></iconify-icon>
        <p>+91 9384956592</p>
      </div>
      <div class="in">
        <iconify-icon icon="dashicons:email-alt"></iconify-icon>
        <p>ezhil2744@gmail.com</p>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Contact