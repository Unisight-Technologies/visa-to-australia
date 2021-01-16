var ctx = document.getElementById("nom_chart").getContext('2d');
var nom_chart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["Age", "English language skills", "Skilled employment experience", "Educational qualifications", "Specialist education qualification",
    "Australian study requirement", "Professional Year in Australia","Credentialled community language","Study in regional Australia","Partner skills","Nomination"],
    datasets: [{
      backgroundColor: [
        "#2ecc71",
        "#3498db",
        "#95a5a6",
        "#9b59b6",
        "#f1c40f",
        "#e74c3c",
        "#ff99ff",
        "#339933",
        "#660066",
        "#ff9966",
        "#ff4d4d"
      ],
      data: [25, 20, 15, 20, 10, 5, 5, 5, 5, 10,5]
    }]
  },
  weight: 125
});
//
var canvas = document.getElementById("nom_chart");


canvas.onclick = function(evt){
    var activePoints = nom_chart.getElementsAtEvent(evt);
    if (activePoints[0]) {
        var chartData = activePoints[0]['_chart'].config.data;
        var idx = activePoints[0]['_index'];

        var label = chartData.labels[idx];
        if(label == "Age"){

          $('#English2').css('display', 'none');
          $('#Skilled2').css('display', 'none');
          $('#Educational2').css('display', 'none');
          $('#Specialist2').css('display', 'none');
          $('#Australian2').css('display', 'none');
          $('#Professional2').css('display', 'none');
          $('#Credentialled2').css('display', 'none');
          $('#Study2').css('display', 'none');
          $('#Partner2').css('display', 'none');
          $('#Nomination2').css('display', 'none');
          $('#Age2').slideToggle();

        }

        if(label == "English language skills"){

          $('#Age2').css('display', 'none');
          $('#Skilled2').css('display', 'none');
          $('#Educational2').css('display', 'none');
          $('#Specialist2').css('display', 'none');
          $('#Australian2').css('display', 'none');
          $('#Professional2').css('display', 'none');
          $('#Credentialled2').css('display', 'none');
          $('#Study2').css('display', 'none');
          $('#Partner2').css('display', 'none');
          $('#Nomination2').css('display', 'none');
          $('#English2').slideToggle();

        }

        if(label == "Skilled employment experience"){

          $('#Age2').css('display', 'none');
          $('#English2').css('display', 'none');
          $('#Educational2').css('display', 'none');
          $('#Specialist2').css('display', 'none');
          $('#Australian2').css('display', 'none');
          $('#Professional2').css('display', 'none');
          $('#Credentialled2').css('display', 'none');
          $('#Study2').css('display', 'none');
          $('#Partner2').css('display', 'none');
          $('#Nomination2').css('display', 'none');
          $('#Skilled2').slideToggle();
        }

        if(label == "Educational qualifications"){

          $('#Age2').css('display', 'none');
          $('#English2').css('display', 'none');
          $('#Skilled2').css('display', 'none');
          $('#Specialist2').css('display', 'none');
          $('#Australian2').css('display', 'none');
          $('#Professional2').css('display', 'none');
          $('#Credentialled2').css('display', 'none');
          $('#Study2').css('display', 'none');
          $('#Partner2').css('display', 'none');
          $('#Nomination2').css('display', 'none');
          $('#Educational2').slideToggle();

        }

        if(label == "Specialist education qualification"){
          $('#Age2').css('display', 'none');
          $('#English2').css('display', 'none');
          $('#Skilled2').css('display', 'none');
          $('#Educational2').css('display', 'none');
          $('#Australian2').css('display', 'none');
          $('#Professional2').css('display', 'none');
          $('#Credentialled2').css('display', 'none');
          $('#Study2').css('display', 'none');
          $('#Partner2').css('display', 'none');
          $('#Nomination2').css('display', 'none');
          $('#Specialist2').slideToggle();

        }

        if(label == "Australian study requirement"){

          $('#Age2').css('display', 'none');
          $('#English2').css('display', 'none');
          $('#Skilled2').css('display', 'none');
          $('#Educational2').css('display', 'none');
          $('#Specialist2').css('display', 'none');
          $('#Professional2').css('display', 'none');
          $('#Credentialled2').css('display', 'none');
          $('#Study2').css('display', 'none');
          $('#Partner2').css('display', 'none');
          $('#Nomination2').css('display', 'none');
          $('#Australian2').slideToggle();

        }
        if(label == "Professional Year in Australia"){

          $('#Age2').css('display', 'none');
          $('#English2').css('display', 'none');
          $('#Skilled2').css('display', 'none');
          $('#Educational2').css('display', 'none');
          $('#Specialist2').css('display', 'none');
          $('#Australian2').css('display', 'none');
          $('#Credentialled2').css('display', 'none');
          $('#Study2').css('display', 'none');
          $('#Partner2').css('display', 'none');
          $('#Nomination2').css('display', 'none');
          $('#Professional2').slideToggle();

        }
        if(label == "Credentialled community language"){
          $('#Age2').css('display', 'none');
          $('#English2').css('display', 'none');
          $('#Skilled2').css('display', 'none');
          $('#Educational2').css('display', 'none');
          $('#Specialist2').css('display', 'none');
          $('#Australian2').css('display', 'none');
          $('#Professional2').css('display', 'none');
          $('#Study2').css('display', 'none');
          $('#Partner2').css('display', 'none');
          $('#Nomination2').css('display', 'none');
          $('#Credentialled2').slideToggle();

        }
        if(label == "Study in regional Australia"){

          $('#Age2').css('display', 'none');
          $('#English2').css('display', 'none');
          $('#Skilled2').css('display', 'none');
          $('#Educational2').css('display', 'none');
          $('#Specialist2').css('display', 'none');
          $('#Australian2').css('display', 'none');
          $('#Professional2').css('display', 'none');
          $('#Credentialled2').css('display', 'none');
          $('#Partner2').css('display', 'none');
          $('#Nomination2').css('display', 'none');
          $('#Study2').slideToggle();

        }
        if(label == "Partner skills"){

          $('#Age2').css('display', 'none');
          $('#English2').css('display', 'none');
          $('#Skilled2').css('display', 'none');
          $('#Educational2').css('display', 'none');
          $('#Specialist2').css('display', 'none');
          $('#Australian2').css('display', 'none');
          $('#Professional2').css('display', 'none');
          $('#Credentialled2').css('display', 'none');
          $('#Study2').css('display', 'none');
          $('#Nomination2').css('display', 'none');
          $('#Partner2').slideToggle();

        }
        if(label == "Nomination"){

          $('#Age2').css('display', 'none');
          $('#English2').css('display', 'none');
          $('#Skilled2').css('display', 'none');
          $('#Educational2').css('display', 'none');
          $('#Specialist2').css('display', 'none');
          $('#Australian2').css('display', 'none');
          $('#Professional2').css('display', 'none');
          $('#Credentialled2').css('display', 'none');
          $('#Study2').css('display', 'none');
          $('#Partner2').css('display', 'none');
          $('#Nomination2').slideToggle();

        }
      }

    // => activePoints is an array of points on the canvas that are at the same position as the click event.
};



var scored = 0;


var ctx = document.getElementById("scoreChart2").getContext('2d');
var scoreChart2 = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: [],
    datasets: [{
      backgroundColor: [
        "#06DB5E",
        "#E74C3C"
      ],
      data: []
    }]
  }
});

function calculateScore_2(){

  var age2 = document.forms["score-form2"]["age2"].value;
  var english2 = document.forms["score-form2"]["english2"].value;
  var skilled2 = document.forms["score-form2"]["skilled2"].value;
  var educational2 = document.forms["score-form2"]["educational2"].value;
  var specialist2 = document.forms["score-form2"]["specialist2"].value;
  var australian2 = document.forms["score-form2"]["australian2"].value;
  var professional2 = document.forms["score-form2"]["professional2"].value;
  var credentialled2 = document.forms["score-form2"]["credentialled2"].value;
  var study2 = document.forms["score-form2"]["study2"].value;
  var partner2 = document.forms["score-form2"]["partner2"].value;
  var nomination2 = document.forms["score-form2"]["nomination2"].value;


  var score = (Number(age2)+Number(english2)+Number(skilled2)+Number(educational2)+Number(specialist2)+Number(australian2)+Number(professional2)+Number(credentialled2)+Number(study2)+Number(partner2)+Number(nomination2))
  scored = score;


  scoreChart2.data.labels.push("Your Marks ");
  scoreChart2.data.datasets[0].data.push(scored);
  scoreChart2.data.labels.push(" ");
  scoreChart2.data.datasets[0].data.push(100-scored);
  scoreChart2.update()

if(score>=67){
  $('#result_modal2').modal('hide');
  $('.insert-here1-1').text("YOUR SCORE: "+score+" pts");
  $('.insert-here1-2').text("CONGRATULATIONS, YOU HAVE PASSED THE TEST!");
  $('.insert-here1-1').css('background', '#06DB5E');
}




else{
    $('#result_modal2').modal('hide');
    $('.insert-here1-1').text("YOUR SCORE: "+score+" pts");
    $('.insert-here1-2').text("SORRY, YOU DID NOT PASS THE TEST.");
    $('.insert-here1-1').css('background', '#E74C3C');
    $('.insert-here1-1').css('color', 'white');
  }
  //
  //
  //
  //
  // }
  $('.express-btn1').css('display', 'none');
  $('.performance1').css('display', 'inherit');

}
