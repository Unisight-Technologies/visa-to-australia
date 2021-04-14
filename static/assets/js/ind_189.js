var ctx = document.getElementById("ind_chart").getContext('2d');
var ind_chart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["Age", "English language skills", "Skilled employment experience", "Educational qualifications", "Specialist education qualification",
    "Australian study requirement", "Professional Year in Australia","Credentialled community language","Study in regional Australia","Partner skills"],
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
        "#ff9966"
      ],
      data: [25, 20, 15, 20, 10, 5, 5, 5, 5, 10]
    }]
  },
  weight: 120
});
//
var canvas = document.getElementById("ind_chart");


canvas.onclick = function(evt){
    var activePoints = ind_chart.getElementsAtEvent(evt);
    if (activePoints[0]) {
        var chartData = activePoints[0]['_chart'].config.data;
        var idx = activePoints[0]['_index'];

        var label = chartData.labels[idx];
        if(label == "Age"){

          $('#English1').css('display', 'none');
          $('#Skilled1').css('display', 'none');
          $('#Educational1').css('display', 'none');
          $('#Specialist1').css('display', 'none');
          $('#Australian1').css('display', 'none');
          $('#Professional1').css('display', 'none');
          $('#Credentialled1').css('display', 'none');
          $('#Study1').css('display', 'none');
          $('#Partner1').css('display', 'none');
          $('#Age1').slideToggle();

        }

        if(label == "English language skills"){

          $('#Age1').css('display', 'none');
          $('#Skilled1').css('display', 'none');
          $('#Educational1').css('display', 'none');
          $('#Specialist1').css('display', 'none');
          $('#Australian1').css('display', 'none');
          $('#Professional1').css('display', 'none');
          $('#Credentialled1').css('display', 'none');
          $('#Study1').css('display', 'none');
          $('#Partner1').css('display', 'none');
          $('#English1').slideToggle();

        }

        if(label == "Skilled employment experience"){

          $('#Age1').css('display', 'none');
          $('#English1').css('display', 'none');
          $('#Educational1').css('display', 'none');
          $('#Specialist1').css('display', 'none');
          $('#Australian1').css('display', 'none');
          $('#Professional1').css('display', 'none');
          $('#Credentialled1').css('display', 'none');
          $('#Study1').css('display', 'none');
          $('#Partner1').css('display', 'none');
          $('#Skilled1').slideToggle();
        }

        if(label == "Educational qualifications"){

          $('#Age1').css('display', 'none');
          $('#English1').css('display', 'none');
          $('#Skilled1').css('display', 'none');
          $('#Specialist1').css('display', 'none');
          $('#Australian1').css('display', 'none');
          $('#Professional1').css('display', 'none');
          $('#Credentialled1').css('display', 'none');
          $('#Study1').css('display', 'none');
          $('#Partner1').css('display', 'none');
          $('#Educational1').slideToggle();

        }

        if(label == "Specialist education qualification"){
          $('#Age1').css('display', 'none');
          $('#English1').css('display', 'none');
          $('#Skilled1').css('display', 'none');
          $('#Educational1').css('display', 'none');
          $('#Australian1').css('display', 'none');
          $('#Professional1').css('display', 'none');
          $('#Credentialled1').css('display', 'none');
          $('#Study1').css('display', 'none');
          $('#Partner1').css('display', 'none');
          $('#Specialist1').slideToggle();

        }

        if(label == "Australian study requirement"){

          $('#Age1').css('display', 'none');
          $('#English1').css('display', 'none');
          $('#Skilled1').css('display', 'none');
          $('#Educational1').css('display', 'none');
          $('#Specialist1').css('display', 'none');
          $('#Professional1').css('display', 'none');
          $('#Credentialled1').css('display', 'none');
          $('#Study1').css('display', 'none');
          $('#Partner1').css('display', 'none');
          $('#Australian1').slideToggle();

        }
        if(label == "Professional Year in Australia"){

          $('#Age1').css('display', 'none');
          $('#English1').css('display', 'none');
          $('#Skilled1').css('display', 'none');
          $('#Educational1').css('display', 'none');
          $('#Specialist1').css('display', 'none');
          $('#Australian1').css('display', 'none');
          $('#Credentialled1').css('display', 'none');
          $('#Study1').css('display', 'none');
          $('#Partner1').css('display', 'none');
          $('#Professional1').slideToggle();

        }
        if(label == "Credentialled community language"){
          $('#Age1').css('display', 'none');
          $('#English1').css('display', 'none');
          $('#Skilled1').css('display', 'none');
          $('#Educational1').css('display', 'none');
          $('#Specialist1').css('display', 'none');
          $('#Australian1').css('display', 'none');
          $('#Professional1').css('display', 'none');
          $('#Study1').css('display', 'none');
          $('#Partner1').css('display', 'none');
          $('#Credentialled1').slideToggle();

        }
        if(label == "Study in regional Australia"){

          $('#Age1').css('display', 'none');
          $('#English1').css('display', 'none');
          $('#Skilled1').css('display', 'none');
          $('#Educational1').css('display', 'none');
          $('#Specialist1').css('display', 'none');
          $('#Australian1').css('display', 'none');
          $('#Professional1').css('display', 'none');
          $('#Credentialled1').css('display', 'none');
          $('#Partner1').css('display', 'none');
          $('#Study1').slideToggle();

        }
        if(label == "Partner skills"){

          $('#Age1').css('display', 'none');
          $('#English1').css('display', 'none');
          $('#Skilled1').css('display', 'none');
          $('#Educational1').css('display', 'none');
          $('#Specialist1').css('display', 'none');
          $('#Australian1').css('display', 'none');
          $('#Professional1').css('display', 'none');
          $('#Credentialled1').css('display', 'none');
          $('#Study1').css('display', 'none');
          $('#Partner1').slideToggle();

        }
      }

    // => activePoints is an array of points on the canvas that are at the same position as the click event.
};



var scored = 0;


var ctx = document.getElementById("scoreChart1").getContext('2d');
var scoreChart1 = new Chart(ctx, {
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

function calculateScore_1(){
  var age1 = document.forms["score-form1"]["age1"].value;
  var english1 = document.forms["score-form1"]["english1"].value;
  var skilled1 = document.forms["score-form1"]["skilled1"].value;
  var educational1 = document.forms["score-form1"]["educational1"].value;
  var specialist1 = document.forms["score-form1"]["specialist1"].value;
  var australian1 = document.forms["score-form1"]["australian1"].value;
  var professional1 = document.forms["score-form1"]["professional1"].value;
  var credentialled1 = document.forms["score-form1"]["credentialled1"].value;
  var study1 = document.forms["score-form1"]["study1"].value;
  var partner1 = document.forms["score-form1"]["partner1"].value;

  var score = (Number(age1)+Number(english1)+Number(skilled1)+Number(educational1)+Number(specialist1)+Number(australian1)+Number(professional1)+Number(credentialled1)+Number(study1)+Number(partner1))
  scored = score;


  scoreChart1.data.labels.push("Your Marks ");
  scoreChart1.data.datasets[0].data.push(scored);
  scoreChart1.data.labels.push(" ");
  scoreChart1.data.datasets[0].data.push(100-scored);
  scoreChart1.update()

// if(score>=67){
  $('#result_modal1').modal('hide');
  $('.insert-here1-1').text("YOUR SCORE: "+score+" pts");
  $('.insert-here1-2').text("CONGRATULATIONS, YOU HAVE PASSED THE TEST!");
  $('.insert-here1-1').css('background', '#06DB5E');
// }




// else{
//     $('#result_modal1').modal('hide');
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
  $('.express-btn1').css('display', 'none');
  $('.performance1').css('display', 'inherit');

}
