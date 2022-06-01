function home(){
    renderHomePage()
}

function renderHomePage(){

let navigation = document.getElementById("main");

let aboutMe = document.createElement("div");
aboutMe.classList.add("aboutMe");

let headshot = document.createElement("img");
headshot.classList.add("pic")
headshot.src = "images/headshot.png";
aboutMe.appendChild(headshot);

let name = document.createElement("div");
name.classList.add("introName")
name.innerHTML = 'Hi, my name is Annalina.';
aboutMe.appendChild(name);

/*let nameBig = document.createElement("img");
nameBig.classList.add("myName")
nameBig.src = "images/nameblack.png";
aboutMe.appendChild(nameBig);*/

let welcomeText = document.createElement("div");
welcomeText.classList.add("welcomeText")
welcomeText.innerHTML = 'I am currently working towards a Bachelor of Science in Computer Science at the University of Florida in Gainesville, Florida. I will be graduating in December 2022. Throughout my college education, I have completed an internship as well as several projects that highlight my skillset and knowledge gained. From these experiences, I have realized that my interests revolve around front end development and user interface design.';



aboutMe.appendChild(welcomeText);

navigation.appendChild(aboutMe);



}


renderHomePage()