var run=setInterval(carRun,20);
margin=0;


function carRun(){
    if (margin==1150) {
        clearInterval(run)
        run=setInterval(carRun,20);
        margin=0;        
    } else {
        margin+=5;
        var carObj=document.getElementById('car');
        carObj.style.marginLeft=margin+"px";
         var sirenObj=document.getElementById('siren');
        sirenObj.play();
        console.log(sirenObj);

        
    }
}   
