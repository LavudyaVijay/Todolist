
function add(){    
    var userInput=document.getElementById("candidate").value.trim();
    var m =userInput.toLowerCase();
    if(!m){
     alert("please enter a task");
     return;
    }
 
    const inp="checkbox-"+m;
    if (document.getElementById(inp)) {
     alert("why are you entering again...its already exist");
     return;
   }
 
 
 
     const x=document.createElement("input");
     x.setAttribute("type","checkbox");
     x.id=inp;
 
     var z=document.createElement("label");
     z.id=inp;
    //console.log( z.appendChild(document.createTextNode(userInput)));
    z.appendChild(document.createTextNode(m));
    
 
     var m=document.createElement("hr");
      document.getElementById("dynamic-list").appendChild(x);
      document.getElementById("dynamic-list").appendChild(z);
      document.getElementById("dynamic-list").appendChild(m);
      document.getElementById("candidate").value="";
 }
 
 
 function actCmp(){
     var s2=document.querySelectorAll('input[type="checkbox"]');
     var labels2= document.querySelectorAll('label');
     var hrs2 = document.querySelectorAll('hr')
     for (var i=0;i<s2.length;i++){
         if(s2[i].checked==true ||s2[i].checked==false);
         {
             s2[i].style.display="";
             labels2[i].style.display="";
             hrs2[i].style.display="";
         }
     }
 }
 
 function completed(){
     var s1=document.querySelectorAll('input[type="checkbox"]');
     var labels1 = document.querySelectorAll('label');
     var hrs1 = document.querySelectorAll('hr')
     for (var i=0;i<s1.length;i++){
         if(s1[i].checked){
             s1[i].style.display="";
              labels1[i].style.display="";
              hrs1[i].style.display="";
         }else{
             s1[i].style.display="none";
             labels1[i].style.display="none";
              hrs1[i].style.display="none";
         }
     }
 }
 
 
 function active(){
     var s3=document.querySelectorAll('input[type="checkbox"]');
     var labels3 = document.querySelectorAll('label');
     s=document.getElementsByClassName("active");
     console.log=(s)
     var hrs2 = document.querySelectorAll('hr')
     for (var i=0;i<s3.length;i++){
         if(s3[i].checked){
             s3[i].style.display="none";
             labels3[i].style.display="none";
             hrs2[i].style.display="none";
         }else{
             s3[i].style.display="";
              labels3[i].style.display="";
              hrs2[i].style.display="";
         }
     }
    // s.style.backgroundColor="blue"
     console.log=(s)
 }
 
 
 
 function count(){
 
 var checkboxes = document.querySelectorAll('input[type="checkbox"]');
 var uncheckedCount = 0;
 
 for (var i = 0; i < checkboxes.length; i++) {
   if (!checkboxes[i].checked) {
     uncheckedCount++;
    
   }
 }
 alert(uncheckedCount+" Todos left");
 }
 
   function search() {
     var searchInput = document.getElementById("candidate").value;
     var listItems = document.querySelectorAll("label");
     var s5=document.querySelectorAll('input[type="checkbox"]');
     var hrs4= document.querySelectorAll('hr')
     
     for (var i = 0; i < listItems.length; i++) {
       var listItem = listItems[i];
       var s6=s5[i];
       var hrs6=hrs4[i];
       
       if (listItem.innerText.toLowerCase().indexOf(searchInput.toLowerCase()) > -1) {
        listItem.style.display="";
        s6.style.display="";
        hrs6.style.display="";
       } else {
         listItem.style.display = "none";
         s6.style.display="none";
         hrs6.style.display="none";
       }
     }
     document.getElementById("candidate").value="";
   }
 
 
   


   function highlight(element) {
       element.classList.toggle("highlight");
   }
