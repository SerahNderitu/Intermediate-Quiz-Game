<script type="text/javascript">

const button = document.querySelector(".event-button");
button.addEventListener("click", function () {
    alert("Hi there, welcome to JS Quiz game. Click ok to continue.");
});


    //Declaring a variable called facts
    // Its value = an object with a statement, true/false answer, and explanation 
    const facts = [
        {
            "statement": "JavaScript is programming language",
            "answer": "true",
            "explanation": "JavaScript is a programming language that help to modify and add functionality to a web page."
        },
        {
            "statement": "3 + 3 === 6",
            "answer": "true",
            "explanation": "The plus operator gives the sum of two numbers."
        },
        {
            "statement": "Events in Javascript are how we can make web page interactive",
            "answer": "true",
            "explanation": "The web browser fires events when certain things happens on the page, for instance when a user click somewhere on the                 page, a click event is fired."
        },
        {
            "statement": "Keypress, mouseover, click, dblclick, and focus are some of event listeners",
            "answer": "true",
            "explanation": "They are event listeners that are fired when certain things happens on the web page, thus making a web page                             interactive."
        },
        {
            "statement": "'4' + '4' === '8'",
            "answer": "false",
            "explanation": "The plus operator concatenates (joins together) strings, so '4' + '4' === '44'."
        }
    ];
      
      
    function hide(element) {
        element.classList.add("hidden");
    }

    function show(element) {
        element.classList.remove("hidden");
    }

    function disable(button) {
        button.setAttribute("disabled", "");
    } 

    function enable(button) {
        button.removeAttribute("disabled");
    }
      
      
    let correct = 0;
    let completed = 0;
    
    let fact;

    
    const optionButtons = document.getElementById("options").children;
    const explanation =  document.getElementById("explanation");
    const nextButton = document.getElementById("next-question");

    function getNextFact() {
        fact = facts.shift(); // get the first fact in our array (shortening the array)

        // set the question text to the current fact's statement
        document.getElementById("statement").textContent = fact.statement;

        // hide any previous explanation
        hide(explanation);

        for (let option of optionButtons) {
            // clear any previous classes
            option.classList.remove("correct");
            option.classList.remove("incorrect");
            // make sure buttons are enabled
            enable(option);
        }

        // disable next-question button
        disable(nextButton);
        
    }

    nextButton.addEventListener("click", getNextFact);

    for (let option of optionButtons) {
        option.addEventListener("click", e => {
            // When this option is clicked...

            // disable all the option buttons
            for (let button of optionButtons) {
                disable(button); 
            }

            // enable the 'next question' button, if we still have facts left
            if (facts.length > 0) {
                enable(nextButton);
            } else {
                nextButton.textContent = "No more questions!"
            }

            const guess = e.target.value;
            if (guess === fact.answer) {
                // correct answer!
                e.target.classList.add("correct");
                correct += 1;
            } else {
                // wrong answer!
                e.target.classList.add("incorrect");
            }

            // display the explanation
            explanation.textContent = fact.explanation;
            show(explanation);
            
            // update the score
            completed += 1;
            document.getElementById("correct").textContent = correct;
            document.getElementById("completed").textContent = completed;

        })
    }

    getNextFact();

    
</script>
