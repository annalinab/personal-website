function contact(){
    renderContact()
}

function renderContact(){

let navigation = document.getElementById("main");

let email = document.createElement("div");
    email.classList.add("email")
    email.innerHTML = 'Email: ahbecker0@gmail.com';
    navigation.appendChild(email);

let linkedinIcon = document.createElement("button");  
linkedinIcon.classList.add("icons")
linkedinIcon.innerHTML = '<img src="images/linkedin-icon.png" style="vertical-align:middle; height:60px"/>';

let githubIcon = document.createElement("button");  
githubIcon.classList.add("icons")
githubIcon.innerHTML = '<img src="images/github-icon.png" style="vertical-align:middle; height:60px"/>';

let iconGroup = document.createElement("div");
iconGroup.classList.add("buttonAlign")

githubIcon.addEventListener("click", function(){
    window.open('https://github.com/annalinab','_blank')
});

linkedinIcon.addEventListener("click", function(){
    window.open('https://https://www.linkedin.com/in/annalina-becker','_blank')
});


iconGroup.appendChild(githubIcon);
iconGroup.appendChild(linkedinIcon);

navigation.appendChild(iconGroup);

}

renderContact()