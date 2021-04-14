var ctx = document.getElementById("reg_chart").getContext('2d');
var reg_chart = new Chart(ctx, {
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
var canvas = document.getElementById("reg_chart");


canvas.onclick = function(evt){
    var activePoints = reg_chart.getElementsAtEvent(evt);
    if (activePoints[0]) {
        var chartData = activePoints[0]['_chart'].config.data;
        var idx = activePoints[0]['_index'];

        var label = chartData.labels[idx];


                if(label == "Age"){

                  $('#English3').css('display', 'none');
                  $('#Skilled3').css('display', 'none');
                  $('#Educational3').css('display', 'none');
                  $('#Specialist3').css('display', 'none');
                  $('#Australian3').css('display', 'none');
                  $('#Professional3').css('display', 'none');
                  $('#Credentialled3').css('display', 'none');
                  $('#Study3').css('display', 'none');
                  $('#Partner3').css('display', 'none');
                  $('#Nomination3').css('display', 'none');
                  $('#Age3').slideToggle();

                }

                if(label == "English language skills"){

                  $('#Age3').css('display', 'none');
                  $('#Skilled3').css('display', 'none');
                  $('#Educational3').css('display', 'none');
                  $('#Specialist3').css('display', 'none');
                  $('#Australian3').css('display', 'none');
                  $('#Professional3').css('display', 'none');
                  $('#Credentialled3').css('display', 'none');
                  $('#Study3').css('display', 'none');
                  $('#Partner3').css('display', 'none');
                  $('#Nomination3').css('display', 'none');
                  $('#English3').slideToggle();

                }

                if(label == "Skilled employment experience"){

                  $('#Age3').css('display', 'none');
                  $('#English3').css('display', 'none');
                  $('#Educational3').css('display', 'none');
                  $('#Specialist3').css('display', 'none');
                  $('#Australian3').css('display', 'none');
                  $('#Professional3').css('display', 'none');
                  $('#Credentialled3').css('display', 'none');
                  $('#Study3').css('display', 'none');
                  $('#Partner3').css('display', 'none');
                  $('#Nomination3').css('display', 'none');
                  $('#Skilled3').slideToggle();
                }

                if(label == "Educational qualifications"){

                  $('#Age3').css('display', 'none');
                  $('#English3').css('display', 'none');
                  $('#Skilled3').css('display', 'none');
                  $('#Specialist3').css('display', 'none');
                  $('#Australian3').css('display', 'none');
                  $('#Professional3').css('display', 'none');
                  $('#Credentialled3').css('display', 'none');
                  $('#Study3').css('display', 'none');
                  $('#Partner3').css('display', 'none');
                  $('#Nomination3').css('display', 'none');
                  $('#Educational3').slideToggle();

                }

                if(label == "Specialist education qualification"){
                  $('#Age3').css('display', 'none');
                  $('#English3').css('display', 'none');
                  $('#Skilled3').css('display', 'none');
                  $('#Educational3').css('display', 'none');
                  $('#Australian3').css('display', 'none');
                  $('#Professional3').css('display', 'none');
                  $('#Credentialled3').css('display', 'none');
                  $('#Study3').css('display', 'none');
                  $('#Partner3').css('display', 'none');
                  $('#Nomination3').css('display', 'none');
                  $('#Specialist3').slideToggle();

                }

                if(label == "Australian study requirement"){

                  $('#Age3').css('display', 'none');
                  $('#English3').css('display', 'none');
                  $('#Skilled3').css('display', 'none');
                  $('#Educational3').css('display', 'none');
                  $('#Specialist3').css('display', 'none');
                  $('#Professional3').css('display', 'none');
                  $('#Credentialled3').css('display', 'none');
                  $('#Study3').css('display', 'none');
                  $('#Partner3').css('display', 'none');
                  $('#Nomination3').css('display', 'none');
                  $('#Australian3').slideToggle();

                }
                if(label == "Professional Year in Australia"){

                  $('#Age3').css('display', 'none');
                  $('#English3').css('display', 'none');
                  $('#Skilled3').css('display', 'none');
                  $('#Educational3').css('display', 'none');
                  $('#Specialist3').css('display', 'none');
                  $('#Australian3').css('display', 'none');
                  $('#Credentialled3').css('display', 'none');
                  $('#Study3').css('display', 'none');
                  $('#Partner3').css('display', 'none');
                  $('#Nomination3').css('display', 'none');
                  $('#Professional3').slideToggle();

                }
                if(label == "Credentialled community language"){
                  $('#Age3').css('display', 'none');
                  $('#English3').css('display', 'none');
                  $('#Skilled3').css('display', 'none');
                  $('#Educational3').css('display', 'none');
                  $('#Specialist3').css('display', 'none');
                  $('#Australian3').css('display', 'none');
                  $('#Professional3').css('display', 'none');
                  $('#Study3').css('display', 'none');
                  $('#Partner3').css('display', 'none');
                  $('#Nomination3').css('display', 'none');
                  $('#Credentialled3').slideToggle();

                }
                if(label == "Study in regional Australia"){

                  $('#Age3').css('display', 'none');
                  $('#English3').css('display', 'none');
                  $('#Skilled3').css('display', 'none');
                  $('#Educational3').css('display', 'none');
                  $('#Specialist3').css('display', 'none');
                  $('#Australian3').css('display', 'none');
                  $('#Professional3').css('display', 'none');
                  $('#Credentialled3').css('display', 'none');
                  $('#Partner3').css('display', 'none');
                  $('#Nomination3').css('display', 'none');
                  $('#Study3').slideToggle();

                }
                if(label == "Partner skills"){

                  $('#Age3').css('display', 'none');
                  $('#English3').css('display', 'none');
                  $('#Skilled3').css('display', 'none');
                  $('#Educational3').css('display', 'none');
                  $('#Specialist3').css('display', 'none');
                  $('#Australian3').css('display', 'none');
                  $('#Professional3').css('display', 'none');
                  $('#Credentialled3').css('display', 'none');
                  $('#Study3').css('display', 'none');
                  $('#Nomination3').css('display', 'none');
                  $('#Partner3').slideToggle();

                }
                if(label == "Nomination"){

                  $('#Age3').css('display', 'none');
                  $('#English3').css('display', 'none');
                  $('#Skilled3').css('display', 'none');
                  $('#Educational3').css('display', 'none');
                  $('#Specialist3').css('display', 'none');
                  $('#Australian3').css('display', 'none');
                  $('#Professional3').css('display', 'none');
                  $('#Credentialled3').css('display', 'none');
                  $('#Study3').css('display', 'none');
                  $('#Partner3').css('display', 'none');
                  $('#Nomination3').slideToggle();

                }
              }

    // => activePoints is an array of points on the canvas that are at the same position as the click event.
};



var scored = 0;


var ctx = document.getElementById("scoreChart3").getContext('2d');
var scoreChart3 = new Chart(ctx, {
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

function calculateScore_3(){

  var age3 = document.forms["score-form3"]["age3"].value;
  var english3 = document.forms["score-form3"]["english3"].value;
  var skilled3 = document.forms["score-form3"]["skilled3"].value;
  var educational3 = document.forms["score-form3"]["educational3"].value;
  var specialist3 = document.forms["score-form3"]["specialist3"].value;
  var australian3 = document.forms["score-form3"]["australian3"].value;
  var professional3 = document.forms["score-form3"]["professional3"].value;
  var credentialled3 = document.forms["score-form3"]["credentialled3"].value;
  var study3 = document.forms["score-form3"]["study3"].value;
  var partner3 = document.forms["score-form3"]["partner3"].value;
  var nomination3 = document.forms["score-form3"]["nomination3"].value;


  var score = (Number(age3)+Number(english3)+Number(skilled3)+Number(educational3)+Number(specialist3)+Number(australian3)+Number(professional3)+Number(credentialled3)+Number(study3)+Number(partner3)+Number(nomination3))
  scored = score;


  scoreChart3.data.labels.push("Your Marks ");
  scoreChart3.data.datasets[0].data.push(scored);
  scoreChart3.data.labels.push(" ");
  scoreChart3.data.datasets[0].data.push(100-scored);
  scoreChart3.update()

// if(score>=67){
  $('#result_modal3').modal('hide');
  $('.insert-here3-1').text("YOUR SCORE: "+score+" pts");
  $('.insert-here3-2').text("CONGRATULATIONS, YOU HAVE PASSED THE TEST!");
  $('.insert-here3-1').css('background', '#06DB5E');
// }




// else{
    // $('#result_modal3').modal('hide');
    // $('.insert-here3-1').text("YOUR SCORE: "+score+" pts");
    // $('.insert-here3-2').text("SORRY, YOU DID NOT PASS THE TEST.");
    // $('.insert-here3-1').css('background', '#E74C3C');
    // $('.insert-here3-1').css('color', 'white');
  // }
  //
  //
  //
  //
  // }
  $('.express-btn3').css('display', 'none');
  $('.performance3').css('display', 'inherit');

}
