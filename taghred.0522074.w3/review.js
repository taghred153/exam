var yes=0;
var no=0;
function sub(){
    var radios=document.querySelectorAll(".radio");
    radios.forEach(function(r){
        if(r.checked&&r.value=="yes"){
            yes++
        }
        else if(r.checked&&r.value=="no"){
            no++
        }
    });
   alert(" Yes= " + yes +" "+"No= "+no);
}