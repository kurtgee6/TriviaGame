$(document).ready(function () {

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////object named arr that contains the QUESTION variable, ANSWER variable,/////////////////////////
    ///////////////////////////////////CHOICES variable, and IMAGE variable///////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////

    var after;
    var timeFix;
    var timeCounter = 30;

    function subtractTime() {
        timeCounter = 31
        timeFix = setInterval(function () {
            (timeCounter--);
            $("#timer").text(timeCounter);
            if (timeCounter <= 0) {
                clearInterval(timeFix);
            }
        }, 1000);
    }

    function questionChange() {
        (document.getElementById("ask").innerHTML = questionArr[questionCounter].question)
        document.getElementById("image").src = questionArr[questionCounter].image;

        $(".selection1").text(questionArr[questionCounter].choices[0]);
        $(".selection2").text(questionArr[questionCounter].choices[1]);
        $(".selection3").text(questionArr[questionCounter].choices[2]);
        $(".selection4").text(questionArr[questionCounter].choices[3]);

        subtractTime();

    }


    function results() {
        after = setTimeout(questionChange, 100);
    }

    var one = {
        question: "Who Created The American Flag?",
        choices: ["Betsy Cross", "Betsy Ross", "Betsy Moss", "Betsy Rose"],
        answer: 2,
        image: "assets/images/betsy-ross.gif"
    }
    var two = {
        question: "Who Is On The One Hundred Dollar Bill?",
        choices: ["Rihanna", "Benjamin Franklin", "Franklin Benjamin", "Franklin D. Roosevelt"],
        answer: 2,
        image: "assets/images/one-hundred-dollar.gif"
    }
    var three = {
        question: "Who Said: I cannot Tell A Lie ",
        choices: ["Abraham Lincoln", "Barack Obama", "Donald Trump", "George Washington"],
        answer: 4,
        image: "assets/images/donald-trump.gif"
    }
    var four = {
        question: "Who Won The Revolutionary War?",
        choices: ["Americans", "British", "Indians", "Spanish"],
        answer: 1,
        image: "assets/images/native-american.gif"
    }
    var five = {
        question: "In What city Was The Declaration Of Independence Signed?",
        choices: ["Boston", "Philadelphia", "Los Angeles", "Charlestown"],
        answer: 2,
        image: "assets/images/old-city.gif"
    }
    var six = {
        question: "The US Constitution's First 10 laws Are Called what?",
        choices: ["The Ten Commandments", "The Big Ten", "The Bill of Rights", "The Rights of Bills"],
        answer: 3,
        image: "assets/images/us-constitution.gif"
    }
    var seven = {
        question: "What Year Was The First Space Shuttle Launched",
        choices: ["1971", "1981", "1951", "1961"],
        answer: 2,
        image: "assets/images/space-launch.gif"
    }
    var eight = {
        question: "Who Was The Smallest President?",
        choices: ["Harry S. Truman", "John F. Kennedy", "Theodore Roosevelt", "James Madison"],
        answer: 4,
        image: "assets/images/small.gif"
    }
    var nine = {
        question: "Which Two presidents Died On The Same Day?",
        choices: ["Adams and Jefferson", "Washington and Lincoln", "Grant and Roosevelt", "Lincoln and Grant"],
        answer: 1,
        image: "assets/images/death.gif"
    }
    var ten = {
        question: "In What Year Did The Civil Rights Movement Mostly Occur?",
        choices: ["1950s", "1960s", "1990s", "1940s"],
        answer: 2,
        image: "assets/images/movement.gif"
    }
    var eleven = {
        question: "How many colonies were there originally?",
        choices: ["9", "21", "11", "13"],
        answer: 4,
        image: "assets/images/numbers.gif"
    }
    var twelve = {
        question: "Who was the first president to live in the White House",
        choices: ["John Adams", "Thomas Jefferson", "George Washington", "Abraham Lincoln"],
        answer: 1,
        image: "assets/images/whiteHouse.gif"
    }
    var thirteen = {
        question: "Which State is the Capitol building located in?",
        choices: ["Washington", "Pennsylvania", "Maryland", "Massachussetts"],
        answer: 3,
        image: "assets/images/capitol.gif"
    }
    var fourteen = {
        question: "who was the first black president?",
        choices: ["Barack Obama", "Brick Orama", "Uncle Sam", "Barricade Bobama"],
        answer: 1,
        image: "assets/images/obama.gif"
    }
    var fifteen = {
        question: "Who was the oldest elected president?",
        choices: ["Hilary Clinton", "Ronald Reagan", "Theodore Roosevelt", "Donald Trump"],
        answer: 4,
        image: "assets/images/old.gif"
    }
    var sixteen = {
        question: "Was Martin Luther King Jr. ever a president?",
        choices: ["I think so?", "Yes! he was the 31st", "Never!", "Can there be a maybe?"],
        answer: 3,
        image: "assets/images/king.gif"
    }
    var seventeen = {
        question: "which president started the secret service?",
        choices: ["Abraham Lincoln", "John F. Kennedy", "Ronald Reagan", "George W. Bush"],
        answer: 1,
        image: "assets/images/secret.gif"
    }
    var overall = {
        correct: "",
        incorrect: "",
        unaswered: ""
    }


    var questionCounter = 0;
    var questionArr = [one, two, three, four, five,
                       six, seven, eight, nine, ten,
                       eleven, twelve, thirteen, fourteen,
                       fifteen, sixteen, seventeen];

    subtractTime();
    if (document.getElementById("ask").innerHTML = one.question) {
        document.getElementById("image").src = one.image;

        $(".selection1").text(one.choices[0]);
        $(".selection2").text(one.choices[1]);
        $(".selection3").text(one.choices[2]);
        $(".selection4").text(one.choices[3]);

        $(".option").click(function () {

            if (this.value == questionArr[questionCounter].answer) {
                clearInterval(timeFix);
                questionCounter++;
                results();
            } else {
                console.log("wrong");

            }
        })

    } else if (document.getElementById("ask").innerHTML = arr.questionArr[questionCounter].question) {
        document.getElementById("image").src = arr.questionArr[questionCounter].image;

        $(".selection1").text(arr.questionArr[questionCounter].choices[0]);
        $(".selection2").text(arr.questionArr[questionCounter].choices[1]);
        $(".selection3").text(arr.questionArr[questionCounter].choices[2]);
        $(".selection4").text(arr.questionArr[questionCounter].choices[3]);

    }


});
