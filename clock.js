function clock(){
    var hours = document.getElementById("h");
    var minutes = document.getElementById("m");
    var seconds = document.getElementById("s");
    var ab = document.getElementById("am");

    var time = new Date();
    var a = time.getHours() > 12 ? time.getHours() - 12 : time.getHours() ;
    a = a < 10 ? "0" + a : a;
    var b = time.getMinutes()  < 10 ? "0" + time.getMinutes() : time.getMinutes();
    var c = time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds();;
    var am_pm = time.getHours() >= 12 ? 'PM' : 'AM';
    

   h.innerHTML = a;
   m.innerHTML = b;
   s.innerHTML = c;
   am.innerHTML = am_pm
  


}
setInterval(clock, 1000);

function settime(){
    var i = document.getElementById('selectwakeup').value;
    var hour = new Date().getHours();

    if(i == hour){
        document.getElementById('image').style.backgroundImage = "url(./wakeup_image.png)";
        document.getElementById('show-text').innerHTML = "Lets have some breakfast";
    }
   
    var r = document.getElementById('selectlunch').value;
    var hour1 = new Date().getHours();

    if(r == hour1 ){
        document.getElementById('image').style.backgroundImage = "url(./lunch_image.png)";
        document.getElementById('show-text').innerHTML = "Lets have Lunch";
    }
    
    var n = document.getElementById('selectnap').value;
    var hour2 = new Date().getHours();

    if(n == hour2){
        document.getElementById('image').style.backgroundImage = "url(./goodnight_image.png)";
        document.getElementById('show-text').innerHTML = "Lets have dinner and go to bed";
    }

       
}

function makediv() {
    var continer = document.createElement("div");
    continer.id = "dynamic-block";
    document.getElementById("first-conatiner").appendChild(continer);

    var invalue = document.getElementById("selectwakeup").selectedIndex;
    var value = document.getElementsByTagName("option"[invalue].text)
    document.getElementById("dynamic-block").innerHTML = "wake up time " + value;
}


makediv();         



