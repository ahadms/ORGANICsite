function sendmessage(){

   var name=document.getElementById("name").value;
   var email=document.getElementById("email").value;

   if(name==""){
    nameerr.innerHtml("Enter your name");
   }
   if(name.length<4){
        nameerr.innerHtml("Minimum 4 character");
   }
   console.log(name);
}