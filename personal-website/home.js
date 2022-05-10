function home(){
    renderHomePage()
}

function renderHomePage(){

let navigation = document.getElementById("main");

let aboutMe = document.createElement("div");
aboutMe.classList.add("aboutMe");

let headshot = document.createElement("img");
headshot.classList.add("pic")
headshot.src = "headshot.png";
aboutMe.appendChild(headshot);

let nameBig = document.createElement("img");
nameBig.classList.add("myName")
nameBig.src = "nameblack.png";
aboutMe.appendChild(nameBig);

let welcomeText = document.createElement("div");
welcomeText.classList.add("welcomeText")
welcomeText.innerHTML = 'Hi! I am currently working towards a Bachelor of Science in Computer Science at the University of Florida in Gainesville, Florida. I will be graduating in December 2022. Throughout my college education, I have completed an internship as well as several projects that highlight my skillset and knowledge gained. From these experiences, I have realized that my interests revolve about front end development and include web development and user interface design.';



aboutMe.appendChild(welcomeText);

navigation.appendChild(aboutMe);



}


renderHomePage()