alert("JavaScript is working")

var americanHistory= {
    question1:{
      question: "Which event do we celebrate for July 4th?",
      potentials: ['Crossing of Delaware River', 'Signing of Declaration of Independence','The ratification of the Constitution','The anniversary of the Battle of Gettysburg'],
      answer:"Signing of Declaration of Independence"
    }
  /*question2:{
    question: "Why did the pilgrims come to America?",
    potentials: ['To search for Religious Freedom', 'To own more property than the would in Eurpe','To learn new farming Techniques','To meet new people'],
    answer:"Signing of Declaration of Independence"

  }
  */

}



function startGame(){
  var register = document.getElementById('register').style.display = 'none';
  var page2 = document.getElementById('page2').style.display = 'block';
}

function setquestions(subject) {
  var setOne = document.querySelectorAll('.potentials1 li');
  console.log(setOne);
  for(i = 0; i< setOne.length;i++){
    setOne[i].innerHTML = this[subject].question1.potentials[i];
  }
}

function choose(){
  var subject = event.target.id;
  var choose = document.getElementById('questions').style.display = 'grid';
  var page2 = document.getElementById('page2').style.display = 'none';
  var header = document.getElementById('subject').innerHTML = event.target.innerHTML;
  setquestions(subject);

}
