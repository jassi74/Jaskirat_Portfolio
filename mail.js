function sendMail(){
    let parms ={
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value,
    }

     try {
            if(!parms.message||!parms.email||!parms.name||!parms.subject){
                throw new Error("Email not sent")
            }
            else{
                emailjs.send("service_yxeafzl","template_41ei59t",parms).then(alert("Email Sent!!"));
                document.getElementById("contactform").reset();
            }

            
        
     } catch (err) {
         alert(err.message);
     }
   
}