function internship(){
    renderInternship()
}

function renderInternship(){

let navigation = document.getElementById("main");

let harris = document.createElement("div");
harris.classList.add("title")
harris.innerHTML = 'L3Harris Technologies';
navigation.appendChild(harris);

let harrisTerm = document.createElement("div");
harrisTerm.classList.add("appCourse")
harrisTerm.innerHTML = 'Software Engineer Intern<br>May 2021 - July 2021';
navigation.appendChild(harrisTerm);

let harrisDescription = document.createElement("div");
harrisDescription.classList.add("description")
harrisDescription.innerHTML='During this internship, I performed a trade study for graphing packages for an interface by creating various prototypes to test load handling. Also, I created a preliminary design with UML diagrams that was followed by a detailed design, and I presented all material to the development team. My team utilized sprints and peer reviews to assess code status.<br><br>☆ Developed using Java ☆<br><br>';
navigation.appendChild(harrisDescription);

let comments = document.createElement("div");
comments.classList.add("comment")
comments.innerHTML="\"She demonstrated motivation to effectively complete her tasks, some of which were more challenging than typically given to interns. She also did this with a higher degree of independence than expected for her level.\"";


let eval = document.createElement("div");
eval.classList.add("eval")
eval.innerHTML="- Intern Evaluation";




let commentBox = document.createElement("div");
commentBox.classList.add("box");
commentBox.appendChild(comments);
commentBox.appendChild(eval);


navigation.appendChild(commentBox);


}

renderInternship()