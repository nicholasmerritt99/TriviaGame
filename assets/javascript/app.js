$(document).ready(function(){
  
    
    $("#remaining-time").hide();
    $("#start").on('click', trivia.startGame);
    $(document).on('click' , '.option', trivia.guessChecker);
    
  })



    var trivia = {
        correct: 0,
        incorrect: 0,
        unanswered: 0,
        currentSet: 0,
        timer: 20,
        timerOn: false,
        timerId : '',
        
        questions: {
          q1: 'What is Ironmans real name?',
          q2: 'What super hero has a brother named Loki?',
          q3: 'What or who gave The Hulk his powers?',
          q4: 'Where does Spiderman live?',
          q5: "Who uses a bow as their weapon of choice?",
          q6: 'What was Dr. Stranges job before becoming a super hero?',
          q7: "How many infinity stones are there?"
        },
        options: {
          q1: ['Nick Merritt', 'Tony Stark', 'Bruce Banner', 'Peter Parker'],
          q2: ['The Hulk', 'Blackwidow', 'Hawkeye', 'Thor'],
          q3: ['Thanos', 'Gama Rays', 'Soul Stone', 'Tony Stark'],
          q4: ['New York', 'Texas', 'London', 'Istanbul'],
          q5: ['Black Panther', 'Blackwidow', 'Hawkeye', 'Falcon'],
          q6: ['Plumber','Computer Programmer','Teacher','Doctor'],
          q7: ['10', '3', '6','2']
        },
        answers: {
          q1: 'Tony Stark',
          q2: 'Thor',
          q3: 'Gama Rays',
          q4: 'New York',
          q5: 'Hawkeye',
          q6: 'Doctor',
          q7: '6'
        },

        startGame: function(){
            trivia.currentSet = 0;
            trivia.correct = 0;
            trivia.incorrect = 0;
            trivia.unanswered = 0;
            clearInterval(trivia.timerId);

            $('#game').show();
            $('#results').html('');
            $('#timer').text(trivia.timer);
            $('#start').hide();
            $('#remaining-time').show();
            trivia.nextQuestion();
          },

        nextQuestion: function(){
            trivia.timer = 20;
            $('#timer').removeClass('last-seconds');
            $('#timer').text(trivia.timer);

            if(!trivia.timerOn){
                trivia.timerId = setInterval(trivia.timerRunning, 1000);
              }

            var questionsContent = Object.values(trivia.questions)[trivia.currentSet];
            $('#question').text(questionsContent);

            var questionOptions = Object.values(trivia.options)[trivia.currentSet];
              $.each(questionOptions, function(index, key){
                $('#options').append($('<button class="option btn btn-info btn-lg">'+key+'</button>'));
              })
        },

        },




















