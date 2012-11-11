
$(document).ready(function(){
    
$("#bottomright").click(function(e){
   hidekids();   
   $("#colorblock").growshrink(); 
});
$("#shrinktopleft").click(function(e){ 
   $("#colorblock").growshrink({type:"shrink",direction:"topleft"}); 
});

$("#bottomleft").click(function(e){
   hidekids();
   $("#colorblock2").growshrink({
    direction:"bottomleft"                           
   }); 
});
$("#shrinktopright").click(function(e){ 
   $("#colorblock2").growshrink({type:"shrink",direction:"topright"}); 
});

$("#topright").click(function(e){
   hidekids();
   $("#colorblock3").growshrink({
    direction:"topright"                           
   }); 
});
$("#shrinkbottomleft").click(function(e){ 
   $("#colorblock3").growshrink({type:"shrink",direction:"bottomleft"}); 
});

$("#topleft").click(function(e){
   hidekids();
   $("#colorblock4").growshrink({
    direction:"topleft"                           
   }); 
});
$("#shrinkbottomright").click(function(e){ 
   $("#colorblock4").growshrink({type:"shrink",direction:"bottomright"}); 
});

$("#middle").click(function(e){
   hidekids();
   $("#colorblock5").growshrink({
    direction:"middle"                           
   }); 
});
$("#shrinkmiddle").click(function(e){ 
   $("#colorblock5").growshrink({type:"shrink",direction:"middle"}); 
});

function hidekids(){
   $("#wrapperblock").children().width(0);
   $("#wrapperblock").children().height(0);
   $("#wrapperblock").children().css('margin-top',0);
   $("#wrapperblock").children().css('margin-bottom',0);
   $("#wrapperblock").children().css('margin-left',0);
   $("#wrapperblock").children().css('margin-right',0);   
}
    
});
