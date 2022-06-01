function projects(){
    renderProjects()
}


function renderProjects(){
    
    let navigation = document.getElementById("main");
    
   let appDiv = document.createElement("div");
   appDiv.classList.add("appDiv")
   
     
    let appTitle = document.createElement("div");
    appTitle.classList.add("title")
    appTitle.innerHTML = 'myHipRehab: A Mobile Health App';
    appDiv.appendChild(appTitle);

    let appCourse = document.createElement("div");
    appCourse.classList.add("appCourse")
    appCourse.innerHTML = 'Digital Health with Dr. Sumi Helal (Spring 2022)<br> In collaboration with Dr. Benjamin Gordon from the College of Human and Health Performance';
    appDiv.appendChild(appCourse);

   
    let appPics = document.createElement("div");
    appPics.classList.add("appPics")
    

    let loginScreen = document.createElement("img");  
    loginScreen.classList.add("screen")
    loginScreen.src = "images/login.png";
    appPics.appendChild(loginScreen);

    let exerciseOne = document.createElement("img");  
    exerciseOne.classList.add("screen")
    exerciseOne.src = "images/ex1.png";
    appPics.appendChild(exerciseOne);

    let painFeed = document.createElement("img");  
    painFeed.classList.add("screen")
    painFeed.src = "images/painfeedback.png";
    appPics.appendChild(painFeed);

    let reward = document.createElement("img");  
    reward.classList.add("screen")
    reward.src = "images/reward.png";
    appPics.appendChild(reward);

    let appDescription = document.createElement("div");
    appDescription.classList.add("description")
    appDescription.innerHTML = 'myHipRehab is a mobile health application for patients that require rehabilitation post-hip surgery. The program is comprised of seven exercises that feature a demonstration by means of a GIF, number of sets, reps, resistance, and tempo. After clicking "Next Exercise", the user is brought to the "Pain Feedback" dialog in which the user is to select if any pain was encountered during the exercise. Upon finishing the program, the user is brought to a congratulatory page where the user is rewarded with a virtual trophy to add to their collection. <br><br>☆ Developed using Flutter SDK, Dart, and Android Studio ☆';
    appDiv.appendChild(appDescription);    
    
    appDiv.appendChild(appPics);


    let buttons = document.createElement("div");
    buttons.classList.add("buttonAlign")
    

    let paperButton = document.createElement("button");
    paperButton.classList.add("appButtons")    
    paperButton.innerHTML='myHipRehab Report ';  
    paperButton.innerHTML+= '<img src="images/pdf-download-2617.png" style="vertical-align:middle"/>';

    let demoButton = document.createElement("button"); 
    demoButton.classList.add("appButtons")     
    demoButton.innerHTML='myHipRehab Demo ';  
    demoButton.innerHTML+= '<img src="images/YouTubeIcon.png" style="height:40px; vertical-align:middle" />';
   
    buttons.appendChild(paperButton);
    buttons.appendChild(demoButton);

      

    paperButton.addEventListener("click", function(){
        window.open('myHipRehabReport.pdf','_blank')
    });

    demoButton.addEventListener("click", function(){
        window.open('https://www.youtube.com/watch?v=LymFschR8lo&feature=youtu.be','_blank')
    });
    

    appDiv.appendChild(buttons);

    navigation.appendChild(appDiv);
  
    let JMWDiv = document.createElement("div");
    JMWDiv.classList.add("JMWDiv")


    let JMWTitle = document.createElement("div");
    JMWTitle.classList.add("title")
    JMWTitle.innerHTML = 'JMW Services Website Design';
    JMWDiv.appendChild(JMWTitle);

    let JMWCourse = document.createElement("div");
    JMWCourse.classList.add("appCourse")
    JMWCourse.innerHTML = 'User Experience Design with Dr. Sanethia Thomas (Spring 2022)';
    JMWDiv.appendChild(JMWCourse);

    
    let JMWDescription = document.createElement("div");
    JMWDescription.classList.add("description")
    JMWDescription.innerHTML='JMW Services is a local, family-owned construction company that was seeking a design for their website. My group and I conducted focus groups to formulate user needs for both the employee and customer side. We also created paper prototypes, wireframes, storyboards, task flows, and personas that all contributed to the final interactive prototype.<br><br> ☆ Created with Figma ☆';
    JMWDiv.appendChild(JMWDescription);
   
    let JMWHome = document.createElement("img");  
    JMWHome.classList.add("homePage")
    JMWHome.src = "images/JMWHome.jpg";
    JMWDiv.appendChild(JMWHome);   

    let JMWButtons = document.createElement("div");
    JMWButtons.classList.add("buttonAlign")
    

    let docButton = document.createElement("button");
    docButton.classList.add("appButtons")    
    docButton.innerHTML='Design Document ';  
    docButton.innerHTML+= '<img src="images/pdf-download-2617.png" style="vertical-align:middle"/>';

    let JMWDemo = document.createElement("button"); 
    JMWDemo.classList.add("appButtons")     
    JMWDemo.innerHTML='Interactive Prototype ';  
    JMWDemo.innerHTML+= '<img src="images/figmaicon.png" style="height:40px; vertical-align:middle" />';
   
    JMWButtons.appendChild(docButton);
    JMWButtons.appendChild(JMWDemo);

      

    docButton.addEventListener("click", function(){
        window.open('JMW Design Document.pdf','_blank')
    });

    JMWDemo.addEventListener("click", function(){
        window.open('https://www.figma.com/proto/PKxtEIsDzXFAAAPRf4B2rA/JMW-Services-Wireframe?node-id=4%3A42&scaling=scale-down&page-id=0%3A1&starting-point-node-id=4%3A42&show-proto-sidebar=1','_blank')
    });
    

    JMWDiv.appendChild(JMWButtons);
    navigation.appendChild(JMWDiv);
    

}

renderProjects()