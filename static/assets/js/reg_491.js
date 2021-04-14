var ctx = document.getElementById("reg491_chart").getContext('2d');
var reg491_chart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["Age", "English", "Skilled", "Educational", "Specialist",
    "Australian", "Professional ","Credentialled","Study","Partner","Nomination"],
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
var canvas = document.getElementById("reg491_chart");


canvas.onclick = function(evt){
    var activePoints = reg491_chart.getElementsAtEvent(evt);
    if (activePoints[0]) {
        var chartData = activePoints[0]['_chart'].config.data;
        var idx = activePoints[0]['_index'];

        var label = chartData.labels[idx];

        if(label == "Age"){

          $('#English4').css('display', 'none');
          $('#Skilled4').css('display', 'none');
          $('#Educational4').css('display', 'none');
          $('#Specialist4').css('display', 'none');
          $('#Australian4').css('display', 'none');
          $('#Professional4').css('display', 'none');
          $('#Credentialled4').css('display', 'none');
          $('#Study4').css('display', 'none');
          $('#Partner4').css('display', 'none');
          $('#Nomination4').css('display', 'none');
          $('#Age4').slideToggle();

        }

        if(label == "English"){

          $('#Age4').css('display', 'none');
          $('#Skilled4').css('display', 'none');
          $('#Educational4').css('display', 'none');
          $('#Specialist4').css('display', 'none');
          $('#Australian4').css('display', 'none');
          $('#Professional4').css('display', 'none');
          $('#Credentialled4').css('display', 'none');
          $('#Study4').css('display', 'none');
          $('#Partner4').css('display', 'none');
          $('#Nomination4').css('display', 'none');
          $('#English4').slideToggle();

        }

        if(label == "Skilled"){

          $('#Age4').css('display', 'none');
          $('#English4').css('display', 'none');
          $('#Educational4').css('display', 'none');
          $('#Specialist4').css('display', 'none');
          $('#Australian4').css('display', 'none');
          $('#Professional4').css('display', 'none');
          $('#Credentialled4').css('display', 'none');
          $('#Study4').css('display', 'none');
          $('#Partner4').css('display', 'none');
          $('#Nomination4').css('display', 'none');
          $('#Skilled4').slideToggle();
        }

        if(label == "Educational"){

          $('#Age4').css('display', 'none');
          $('#English4').css('display', 'none');
          $('#Skilled4').css('display', 'none');
          $('#Specialist4').css('display', 'none');
          $('#Australian4').css('display', 'none');
          $('#Professional4').css('display', 'none');
          $('#Credentialled4').css('display', 'none');
          $('#Study4').css('display', 'none');
          $('#Partner4').css('display', 'none');
          $('#Nomination4').css('display', 'none');
          $('#Educational4').slideToggle();

        }

        if(label == "Specialist education qualification"){
          $('#Age4').css('display', 'none');
          $('#English4').css('display', 'none');
          $('#Skilled4').css('display', 'none');
          $('#Educational4').css('display', 'none');
          $('#Australian4').css('display', 'none');
          $('#Professional4').css('display', 'none');
          $('#Credentialled4').css('display', 'none');
          $('#Study4').css('display', 'none');
          $('#Partner4').css('display', 'none');
          $('#Nomination4').css('display', 'none');
          $('#Specialist4').slideToggle();

        }

        if(label == "Australian study requirement"){

          $('#Age4').css('display', 'none');
          $('#English4').css('display', 'none');
          $('#Skilled4').css('display', 'none');
          $('#Educational4').css('display', 'none');
          $('#Specialist4').css('display', 'none');
          $('#Professional4').css('display', 'none');
          $('#Credentialled4').css('display', 'none');
          $('#Study4').css('display', 'none');
          $('#Partner4').css('display', 'none');
          $('#Nomination4').css('display', 'none');
          $('#Australian4').slideToggle();

        }
        if(label == "Professional Year in Australia"){

          $('#Age4').css('display', 'none');
          $('#English4').css('display', 'none');
          $('#Skilled4').css('display', 'none');
          $('#Educational4').css('display', 'none');
          $('#Specialist4').css('display', 'none');
          $('#Australian4').css('display', 'none');
          $('#Credentialled4').css('display', 'none');
          $('#Study4').css('display', 'none');
          $('#Partner4').css('display', 'none');
          $('#Nomination4').css('display', 'none');
          $('#Professional4').slideToggle();

        }
        if(label == "Credentialled community language"){
          $('#Age4').css('display', 'none');
          $('#English4').css('display', 'none');
          $('#Skilled4').css('display', 'none');
          $('#Educational4').css('display', 'none');
          $('#Specialist4').css('display', 'none');
          $('#Australian4').css('display', 'none');
          $('#Professional4').css('display', 'none');
          $('#Study4').css('display', 'none');
          $('#Partner4').css('display', 'none');
          $('#Nomination4').css('display', 'none');
          $('#Credentialled4').slideToggle();

        }
        if(label == "Study in regional Australia"){

          $('#Age4').css('display', 'none');
          $('#English4').css('display', 'none');
          $('#Skilled4').css('display', 'none');
          $('#Educational4').css('display', 'none');
          $('#Specialist4').css('display', 'none');
          $('#Australian4').css('display', 'none');
          $('#Professional4').css('display', 'none');
          $('#Credentialled4').css('display', 'none');
          $('#Partner4').css('display', 'none');
          $('#Nomination4').css('display', 'none');
          $('#Study4').slideToggle();

        }
        if(label == "Partner skills"){

          $('#Age4').css('display', 'none');
          $('#English4').css('display', 'none');
          $('#Skilled4').css('display', 'none');
          $('#Educational4').css('display', 'none');
          $('#Specialist4').css('display', 'none');
          $('#Australian4').css('display', 'none');
          $('#Professional4').css('display', 'none');
          $('#Credentialled4').css('display', 'none');
          $('#Study4').css('display', 'none');
          $('#Nomination4').css('display', 'none');
          $('#Partner4').slideToggle();

        }
        if(label == "Nomination"){

          $('#Age4').css('display', 'none');
          $('#English4').css('display', 'none');
          $('#Skilled4').css('display', 'none');
          $('#Educational4').css('display', 'none');
          $('#Specialist4').css('display', 'none');
          $('#Australian4').css('display', 'none');
          $('#Professional4').css('display', 'none');
          $('#Credentialled4').css('display', 'none');
          $('#Study4').css('display', 'none');
          $('#Partner4').css('display', 'none');
          $('#Nomination4').slideToggle();

        }
      }

    // => activePoints is an array of points on the canvas that are at the same position as the click event.
};



var scored = 0;


var ctx = document.getElementById("scoreChart4").getContext('2d');
var scoreChart4 = new Chart(ctx, {
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

function calculateScore_4(){

  var age4 = document.forms["score-form4"]["age4"].value;
  var english4 = document.forms["score-form4"]["english4"].value;
  var skilled4 = document.forms["score-form4"]["skilled4"].value;
  var educational4 = document.forms["score-form4"]["educational4"].value;
  var specialist4 = document.forms["score-form4"]["specialist4"].value;
  var australian4 = document.forms["score-form4"]["australian4"].value;
  var professional4 = document.forms["score-form4"]["professional4"].value;
  var credentialled4 = document.forms["score-form4"]["credentialled4"].value;
  var study4 = document.forms["score-form4"]["study4"].value;
  var partner4 = document.forms["score-form4"]["partner4"].value;
  var nomination4 = document.forms["score-form4"]["nomination4"].value;


  var score = (Number(age4)+Number(english4)+Number(skilled4)+Number(educational4)+Number(specialist4)+Number(australian4)+Number(professional4)+Number(credentialled4)+Number(study4)+Number(partner4)+Number(nomination4))
  scored = score;


  scoreChart4.data.labels.push("Your Marks ");
  scoreChart4.data.datasets[0].data.push(scored);
  scoreChart4.data.labels.push(" ");
  scoreChart4.data.datasets[0].data.push(100-scored);
  scoreChart4.update()

// if(score>=67){
  $('#result_modal4').modal('hide');
  $('.insert-here4-1').text("YOUR SCORE: "+score+" pts");
  $('.insert-here4-2').text("CONGRATULATIONS, YOU HAVE PASSED THE TEST!");
  $('.insert-here4-1').css('background', '#06DB5E');
// }




// else{
//     $('#result_modal4').modal('hide');
//     $('.insert-here1-1').text("YOUR SCORE: "+score+" pts");
//     $('.insert-here1-2').text("SORRY, YOU DID NOT PASS THE TEST.");
//     $('.insert-here1-1').css('background', '#E74C3C');
//     $('.insert-here1-1').css('color', 'white');
//   }
  //
  //
  //
  //
  // }
  $('.express-btn4').css('display', 'none');
  $('.performance4').css('display', 'inherit');

}
