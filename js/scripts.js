$(document).ready(function(){
  $("form#translate").submit(function(event) {
    event.preventDefault();
    // business logic
    var vowels = [ 'a', 'e', 'i', 'o' ,'u' ]

    var consonants = [ 'b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z']

    var singleLetterWords = ['a', 'i']
    console.log(singleLetterWords);

    var userSentence = $("input#userInput").val();
    console.log(userSentence);

    var splitSentence = userSentence.split(" ");
    console.log(splitSentence);

    var splitWord = userSentence.split("");
    console.log(splitWord);

    var pigLatin = function(splitWord) {
      for (var index = 0; index < splitWord.length; index++) {
        console.log(index);
        if (!(vowels.includes(splitWord[index])) && !(consonants.includes(splitWord[index]))) {
          console.log(splitWord[index]);
          return splitWord;
        } else if (splitWord[index] === "i" || splitWord[index] === "a"){
          return  (splitWord[index] + "way");
        }
      }
    };

    var result = pigLatin(splitWord);
    console.log(result);

    $('#result').text(result);

    $("#result").show();
  });
});




// user interface logic
