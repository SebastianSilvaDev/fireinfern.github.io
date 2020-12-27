
var Home = document.getElementById("Home");
var File = document.getElementById("File");
var Links = document.getElementById("Links");

var HomeButton = document.getElementById("HomeButton");
var FileButton = document.getElementById("FileButton");
var LinksButton = document.getElementById("LinksButton");
HomeButton.addEventListener("click", () => {
    if (!Home.classList.contains("show")){
        Home.classList.add("show");
    }
    if (!File.classList.contains("hidden"))
        File.classList.add("hide");
    if (!Links.classList.contains("hidden"))
        Links.classList.add("hide");
});
FileButton.addEventListener("click", () => {
    if (!File.classList.contains("show")){
        File.classList.add("show");
    }
    if (!Home.classList.contains("hidden"))
        Home.classList.add("hide");
    if (!Links.classList.contains("hidden"))
        Links.classList.add("hide");
});
LinksButton.addEventListener("click", () => {
    if (!Links.classList.contains("show")){
        Links.classList.add("show");
    }
    if (!Home.classList.contains("hidden"))
        Home.classList.add("hide");
    if (!File.classList.contains("hidden"))
        File.classList.add("hide");
});
Home.addEventListener("animationend", () => {
    if(Home.classList.contains("show")){
        Home.classList.remove("show");
        Home.classList.remove("hidden");
        document.getElementById("Career").classList.remove("hidden");
        document.getElementById("Career").classList.add("writingeffect");
    }
    if(Home.classList.contains("hide")){
        Home.classList.remove("hide");
        Home.classList.add("hidden");
        document.getElementById("Career").classList.add("hidden");
        document.getElementById("Career").classList.remove("writingeffect");
    }
});
File.addEventListener("animationend", () => {
    if(File.classList.contains("show")){
        File.classList.remove("show");
        File.classList.remove("hidden");
    }
    if(File.classList.contains("hide")){
        File.classList.remove("hide");
        File.classList.add("hidden");
    }
});
Links.addEventListener("animationend", () => {
    if(Links.classList.contains("show")){
        Links.classList.remove("show");
        Links.classList.remove("hidden");
    }
    if(Links.classList.contains("hide")){
        Links.classList.remove("hide");
        Links.classList.add("hidden");
    }
    
});