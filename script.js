function handleSubmit () {
    let question1 = document.getElementById("spoondi").value;
    let question2 = document.getElementById("oldspoon").value;
    let question3 = document.getElementById("spooncoli").value;
    let question4 = document.getElementById("spoonvari").value;
    let question5 = document.getElementById("spooneat").value;

    let correctAnswers = 0;

    if (question1 === "True") {
        correctAnswers +=1;
    }

    if (question2 === "False") {
        correctAnswers +=1;
    }

    if (question3 === "False") {
        correctAnswers +=1;
    }

    if (question4 === "True") {
        correctAnswers +=1;
    }

    if (question5 === "True") {
        correctAnswers +=1;
    }

    document.getElementById("result").innerHTML = correctAnswers + " /5";

    return false;
}  
