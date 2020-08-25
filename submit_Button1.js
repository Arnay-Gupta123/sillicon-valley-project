function submitButtonFor1(){
    tennis_image = null;
    tabletennis_image = null;
    submitButton1.hide();
    greeting1.hide();
    greeting2.hide();
    greeting3.hide();
    greeting4.hide();
    greeting5.hide();
    input_name.hide();
    input_email.hide();
    input_phone.hide();

    //second page starts
    greeting6 = createElement('h2');
    greeting6.html("CHOOSE YOUR SPORT");
    greeting6.position(displayWidth/2.5, 130);
    greeting6.style('color:white');

    option1 = createButton("TENNIS");
    option1.position(650,200);
    option1.style('color:green');
    option1.style('font-size:30px');
    option1.style('background-color: white');
   // option1.mouseClicked(levelsOfTheGame);

    option2 = createButton("TABLE TENNIS");
    option2.position(600,260);
    option2.style('color:red');
    option2.style('font-size:30px');
    option2.style('background-color: (255)');
  // option2.mouseClicked(submitButtonFor1);

    option3 = createButton("BASKETBALL");
    option3.position(610,320);
    option3.style('color: #b5651d');
    option3.style('font-size:30px');
    option3.style('background-color: (255)');
  // option3.mouseClicked(submitButtonFor1);

  option4 = createButton("CRICKET");
  option4.position(645,380);
  option4.style('color:green');
  option4.style('font-size:30px');
  option4.style('background-color: white');
 // option4.mouseClicked(levelsOfTheGame);

  option5 = createButton("VOLLEY BALL");
  option5.position(600,440);
  option5.style('color:red');
  option5.style('font-size:30px');
  option5.style('background-color: (255)');
// option5.mouseClicked(submitButtonFor1);

  option6 = createButton("SQUASH");
  option6.position(650,500);
  option6.style('color: #b5651d');
  option6.style('font-size:30px');
  option6.style('background-color: (255)');
// option6.mouseClicked(submitButtonFor1);

image(tennis_image,100,100);


  
}

function backButtonFor2(){

}