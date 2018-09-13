const request     = require("request");

module.exports = {
   showHome,
   processHome
}
//acd9ab725d2406fd680df3f5ae34511f-us18
// https://us18.api.mailchimp.com/3.0/lists/5f4b88769e/members
function showHome(req,res){
   res.render("home" , {
      success: req.flash("success")
   });
}

function processHome(req,res){
   request({
      url: "https://us18.api.mailchimp.com/3.0/lists/5f4b88769e/members",
      method: "POST",
      headers: {
         'Authorization': "randomUser acd9ab725d2406fd680df3f5ae34511f-us18",
         'Content-Type': "application/json"
      },
      json: {
         'email_address': req.body.email,
         'status': "subscribed"
      }
   }, (err) => {
      if(err){
         console.log(err)
      }else {
         req.flash("success" , "Thankyou you subscribed")
         res.redirect("/");
      }
   })
}