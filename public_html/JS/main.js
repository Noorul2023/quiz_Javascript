/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function submitAnswers() {
    var total = 5;
    var score = 0;
    /* get user input and it is better to get the value through the name attribut instead of using 
     *the id of each radio button to get the value picked up var q1=document.getElementById("q1a").value;*/
    var q1 = document.forms[name = "quizForm"]["q1"].value;
    var q2 = document.forms[name = "quizForm"]["q2"].value;
    var q3 = document.forms[name = "quizForm"]["q3"].value;
    var q4 = document.forms[name = "quizForm"]["q4"].value;
    var q5 = document.forms[name = "quizForm"]["q5"].value;
    /*below are validation to make sure all questions have been selected before the submission  */

    for (i = 1; i <= total; i++) {
        if (eval('q' + i) == null || eval('q' + i) == '') {
            alert('you missed question ' + i);
            return false;//since we dont submit the form to any server side we return false
        }
    }
    /*Set Correct answers*/
    var answers = ["b", "a", "d", "b", "d"];
    /*Check answers*/
    for (j = 1; j <= total; j++) {
        if (eval('q' + j) == answers[j - 1]) {
            score++;
        }

    }
    var results=document.getElementById('results');
    results.innerHTML='<h3>You scored <span>'+score+'</span> out of <span>'+total+'</span></h3>';
    alert("You scored " + score + " out of " + total);
    return false;
}
