student = [ 'Lorem','Ipsum','Bob','Alice']

randomNumber = Math.floor(Math.random() * (student.length-1));
randomStudent = student[randomNumber]


$( "h2" ).text("Random Student");



$('button').on("click", function() {
      $( "h2" ).text(randomStudent);

      randomNumber = Math.floor(Math.random() * (student.length));
      randomStudent = student[randomNumber]


  });
