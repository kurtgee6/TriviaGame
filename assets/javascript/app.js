$(document).ready(function () {

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////object named arr that contains the QUESTION variable, ANSWER variable,/////////////////////////
    ///////////////////////////////////CHOICES variable, and IMAGE variable///////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////

    var arr = {
        one: {
            question: "Who Created The American Flag?",
            choices: ["Betsy Cross", "Betsy Ross", "Betsy Moss", "Betsy Rose"],
            answer: "Betsy Ross",
            image: "assets/images/betsy-ross.gif"
        },
        two: {
            question: "Who Is On The One Hundred Dollar Bill?",
            choices: ["Rihanna", "Benjamin Franklin", "Franklin Benjamin", "Franklin D. Roosevelt"],
            answer: "Benjamin Franklin",
            image: "assets/images/one-hundred-dollar.gif"
        },
        three: {
            question: "Who Said: I cannot Tell A Lie ",
            choices: ["Abraham Lincoln", "Barack Obama", "Donald Trump", "George Washington"],
            answer: "Donald Trump",
            image: "assets/images/donald-trump.gif"
        },
        four: {
            question: "Who Won The Revolutionary War?",
            choices: ["Indians", "British", "Americans", "Spanish"],
            answer: "Americans",
            image: "assets/images/native-american.gif"
        },
        five: {
            question: "In What city Was The Declaration Of Independence Signed?",
            choices: ["Philadelphia", "Boston", "Los Angeles", "Charlestown"],
            answer: "Philadelphia",
            image: "assets/images/old-city.gif"
        },
        six: {
            question: "The US Constitution's First 10 laws Are Called what?",
            choices: ["The Ten Commandments", "The Bill of Rights", "The Big Ten", "The Rights of Bills"],
            answer: "Benjamin Franklin",
            image: "assets/images/us-constitution.gif"
        },
        seven: {
            question: "What Year Was The First Space Shuttle Launched",
            choices: ["1971", "1981", "1951", "1961"],
            answer: "1981",
            image: "assets/images/space-launch.gif"
        },
        eight: {
            question: "Who Was The Smallest President?",
            choices: ["Harry S. Truman", "John F. Kennedy", "Theodore Roosevelt", "James Madison"],
            answer: "James Madison",
            image: "assets/images/small.gif"
        },
        nine: {
            question: "Which Two presidents Died On The Same Day?",
            choices: ["Adams and Jefferson", "Washington and Lincoln", "Grant and Roosevelt", "Lincoln and Grant"],
            answer: "Adams and Jefferson",
            image: "assets/images/death.gif"
        },
        ten: {
            question: "In What Year Did The Civil Rights Movement Mostly Occur?",
            choices: ["1950s", "1960s", "1990s", "1940s"],
            answer: "1960s",
            image: "assets/images/movement.gif"
        },
        overall: {
            correct: "",
            incorrect: "",
            unaswered: ""
        }

    };




    //when the browser loads
    //we want the browser to display question one
    //we also want it to display image one and its choices
    //we want it to check the users onclick choice
    //If it matches with question one's answer
    //move onto question two


    function questions() {

        if (document.getElementById("ask").innerHTML = arr.one.question) {
            document.getElementById("image").src = arr.one.image;

            $(".selection1").text(arr.one.choices[0]);
            $(".selection2").text(arr.one.choices[1]);
            $(".selection3").text(arr.one.choices[2]);
            $(".selection4").text(arr.one.choices[3]);

            if ($(this).attr("value") === arr.one.answer) {

                console.log("nice");

            } else {
                console.log("wrong");

            }

        } else if (document.getElementById("ask").innerHTML = arr.two.question) {
            document.getElementById("image").src = arr.two.image;

            $(".selection1").text(arr.two.choices[0]);
            $(".selection2").text(arr.two.choices[1]);
            $(".selection3").text(arr.two.choices[2]);
            $(".selection4").text(arr.two.choices[3]);

        }


    }

    questions();

    //    function checkAnswer() {
    //
    //    }

});
