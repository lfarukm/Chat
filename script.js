const body = document.querySelector('body'),
    sidebar = body.querySelector('nav'),
    toggle = body.querySelector(".toggle"),
    searchBtn = body.querySelector(".search-box"),
    modeSwitch = body.querySelector(".toggle-switch"),
    modeText = body.querySelector(".mode-text");
        sidebar = body.querySelector('nav'),
        toggle = body.querySelector(".toggle"),
        searchBtn = body.querySelector(".search-box"),
        modeSwitch = body.querySelector(".toggle-switch"),
        modeText = body.querySelector(".mode-text");


toggle.addEventListener("click" , () =>{
    sidebar.classList.toggle("close");
})

searchBtn.addEventListener("click" , () =>{
    sidebar.classList.remove("close");
})

modeSwitch.addEventListener("click" , () =>{
    body.classList.toggle("dark");
    
    if(body.classList.contains("dark")){
        modeText.innerText = "Light mode";
    }else{
        modeText.innerText = "Dark mode";
        
    }
});

function togglePassword() {
    var element = document.getElementById('password');
    element.type = (element.type == 'password' ? 'text' : 'password');
}

// bildirim sayfası :
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }


// mesaj silme :

// Tüm çarpı ikonlarını seç
var closeIcons = document.getElementsByClassName("sil");

// Her bir çarpı ikonu için bir event listener ekle
for (var i = 0; i < closeIcons.length; i++) {
    closeIcons[i].addEventListener("click", function() {
    this.parentElement.style.display = "none";
});
}


















function mesajGonder(){
    var metin = document.getElementById("mesaj").value;
    var yeniElement = document.createElement("p");
    var icerik = document.createTextNode(metin);
    yeniElement.appendChild(icerik);
    var icerik = document.getElementById("icerik");
    icerik.appendChild(yeniElement);
    
    document.getElementById("mesaj").value = "";
    document.getElementById("icerik").scrollTop += 9999; /* yazdıkça scrollda gelsin */
    
}
    document.getElementById("mesaj").addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.keyCode == 13) {
            document.getElementById("button").click();
            document.getElementById("icerik").scrollTop += 9999; /* yazdıkça scroolda gelsin */
        }
});
