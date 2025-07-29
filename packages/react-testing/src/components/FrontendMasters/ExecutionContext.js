function resultOut(giveExam) {
    giveExam();
    console.log("Result is out");
}

function giveExam() {
    console.log("Giving the exam...");
}

resultOut(giveExam);
