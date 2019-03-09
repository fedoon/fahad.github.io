
   var chartColors = {
	red: 'rgb(255, 99, 132)',
	orange: 'rgb(255, 159, 64)',
	yellow: 'rgb(255, 205, 86)',
	green: 'rgb(75, 192, 192)',
	blue: 'rgb(54, 162, 235)',
	purple: 'rgb(153, 102, 255)',
	grey: 'rgb(201, 203, 207)'
};

var phase = 1;
let selectedID = 0;



        var questionGroup1 = []
        questionGroup1[5] = {answerID:0, question: "CSS is used in?", selectedAns:null, answers:['front-end','server',"unix","windows"]}
        questionGroup1[4] = {answerID:2, question: "c# is _", selectedAns:null, answers:['created by Google','Unix only',"object-oriented","NOT object-oriented"]}
        questionGroup1[3] = {answerID:1, question: "Chrome use _ ram ?",selectedAns:null, answers:['no','a lot of',"none","0"]}
        questionGroup1[2] = {answerID:3, question: "Firefox is created by ", selectedAns:null, answers:['Microsoft','Google',"Apple","Mozilla"]}
        questionGroup1[1] = {answerID:1, question: "Safari is created by ", selectedAns:null, answers:['google','apple',"opera","Brave"]}
        questionGroup1[0] = {answerID:2, question: "SWE363 is",selectedAns:null, answers:['java course','database course',"web development course","Testing Course"]}
        var questionGroup2 = []
        questionGroup2[2] ={question: "you can manipulate dom in the front-end using? ", answerID:[1,3], selectedAns:[], answers:['PHP','JS','Asp','Jquery','Java','C++']}
        questionGroup2[1] ={question: "Which of the following are programming language", answerID:[0,2], selectedAns:[], answers:['Javascript','HTML','PHP','CSS']}
        questionGroup2[0] ={question: "PHP is used in the _ ?", answerID:[0,1], selectedAns:[], answers:['server side','back-end','browser','desktop']}
        questionGroup2[3] ={question: "Which of the following are object-oriented language", answerID:[2,3], selectedAns:[], answers:['C','COBOL','C#', 'JAVA']}

        _phase1()
        showGroup1(selectedID)


    function _phase1(){
            var timeleft = 60;
            var downloadTimer = setInterval(function(){
            document.getElementById("countdown").innerHTML = timeleft + " seconds remaining until second group of qoustions";
            timeleft -= 1;
             if(timeleft <= 0){
                clearInterval(downloadTimer);
                phase = 2;
                select(6)
                $("#navq0").addClass("disabled");
                $("#navq1").addClass("disabled");
                $("#navq2").addClass("disabled");
                $("#navq3").addClass("disabled");
                $("#navq4").addClass("disabled");
                $("#navq5").addClass("disabled");

                _phase2()
            }  
            }, 1000);
        }


        function _phase2(){

                $("#navq6").removeClass("disabled");
                $("#navq7").removeClass("disabled");
                $("#navq8").removeClass("disabled");
                $("#navq9").removeClass("disabled");

            var timeleft = 60;
            var downloadTimer = setInterval(function(){
            document.getElementById("countdown").innerHTML = timeleft + " seconds remaining until second group of qoustions";
            timeleft -= 1;
             if(timeleft <= 0){
                clearInterval(downloadTimer);
               result()
            }  

            }, 1000);
        }
  
    function select(id) {
        console.log("#navq"+selectedID)
        $("#navq"+selectedID).removeClass("active");

        if(phase == 2) {
            switch (selectedID) {
                case 0:
                $("#navq6").removeClass("active");
                break;
                case 1:
                $("#navq7").removeClass("active");
                break;
                case 2:
                $("#navq8").removeClass("active");
                break;
                case 3:
                $("#navq9").removeClass("active");
                break;
                default:      
                break;
            }
        }
 

            switch (id) {
                case 6:
                selectedID = 0;
                $("#navq6").addClass("active");
                break;
                case 7:
                selectedID = 1;
                $("#navq7").addClass("active");
                break;
                case 8:
                selectedID = 2;
                $("#navq8").addClass("active");
                break;
                case 9:
                selectedID = 3;
                $("#navq9").addClass("active");
                break;
                default:      
                selectedID = id;          
                $("#navq"+selectedID).addClass("active");
                break;
            }


        if (phase == 1) {
            showGroup1(selectedID)

        }else {   
          showGroup2(selectedID)

        }

        
    }
    function selectAnswer(ansid) {
        if (phase == 1) {
            questionGroup1[selectedID].selectedAns = ansid;
        }else {
        if (!questionList[selectedID].selectedAns.includes(ansid)) {
            questionList[selectedID].selectedAns.push(ansid)
        }else {
            let index = questionList[selectedID].selectedAns.indexOf(ansid);
            if (index > -1) {
                questionList[selectedID].selectedAns.splice(index, 1);
             }
            }

        }
    }
    function showGroup1(id) {
    $("#questionAnswers").empty()
    selectedID = id;
    $("#questionTitle").text( questionGroup1[id].question)
        for (var i=0; i < questionGroup1[id].answers.length; i++) {
            if ( questionGroup1[id].selectedAns ==i) {
                $("#questionAnswers").append(`<label class="btn btn-secondary mr-1">
                              <input type="radio" onclick="selectAnswer(`+i+`)" autocomplete="off" checked> `+ questionGroup1[id].answers[i]+`
                            </label>`)
            }else {
                $("#questionAnswers").append(`<label class="btn btn-secondary mr-1">
                              <input type="radio"  onclick="selectAnswer(`+i+`)" autocomplete="off"> `+ questionGroup1[id].answers[i]+`
                            </label>`)
            }
 
        }
    }

    function showGroup2(id) {
    $("#questionAnswers").empty()
    selectedID = id;

    $("#questionTitle").text(questionGroup2[id].question)
    for (var i=0; i < questionGroup2[id].answers.length; i++) {
            if ( questionGroup2[id].selectedAns.includes(i)) {
                $("#questionAnswers").append(`<label class="btn btn-secondary mr-1">
                              <input type="checkbox" onclick="solve(`+i+`)" checked autocomplete="off"> `+ questionGroup2[id].answers[i]+`
                            </label>`)
            }else {
                $("#questionAnswers").append(`<label class="btn btn-secondary mr-1">
                              <input type="checkbox" onclick="solve(`+i+`)" autocomplete="off"> `+ questionGroup2[id].answers[i]+`
                            </label>`)
            }
        }
    }


    function result() {
                 $("#navq6").addClass("disabled");
                $("#navq7").addClass("disabled");
                $("#navq8").addClass("disabled");
                $("#navq9").addClass("disabled");

        $("#questionDiv").remove()
        $("#result1").append(`     <div class="alert alert-info" role="alert">
                        Number of Question: <span id="noq"></span>
                                            <br>
                                            Grade:  <span id="grade"></span>&percnt;
                </div>
                `)
        $("#result").append(`  
           
                                        <div class="col-sm-5">
                                                <div class="card mr-8">
                                                  <div class="card-body">
                                                    <h5 class="card-title d-flex justify-content-center"><small>Group 1</small></h5>
                                                    <p class="card-text">
                                                            <canvas id="myChart" class="w-240"></canvas>
                                                    </p>
                           
                                                  </div>
                                                  <div class="card-footer">
                                                        <small class="text-muted">
                                                                 <span id="g1n"></span> point out of 6 point (<span id="g1prec"></span>&percnt;)
                                                         </small>
                                                 </div> 
                                                </div>
                                            </div>
                                            
                                            <div class="col-sm-5">
                                                <div class="card">
                                                  <div class="card-body">
                                                    <h5 class="card-title d-flex justify-content-center"><small>Group 2</small></h5>
                                                    <p class="card-text">
                                                            <canvas id="myChart2"></canvas>
                                                    </p>
                                             
                                                  </div>
                                                  <div class="card-footer">
                                                        <small class="text-muted">
                                                         <span id="g2n"></span> point out of 8 point (<span id="g2prec"></span>&percnt;)
                                                    </small>
                                                </div>
                                                </div>
                                              </div> `)
                                        
            const noQ = 10;
            let grade = 0;
            let group1Ans=0;
            let group2Ans=0;

              questionGroup1.forEach(element => {
                    if (element.answerID == element.selectedAns) {
                        group1Ans++;
                    }
                });
                questionGroup2.forEach(element => {
                    for (var i=0; i <element.selectedAns.length; i++) {
                     if (element.answerID.includes(element.selectedAns[i])) {
                        group2Ans++;
                     }else {
                        group2Ans--;
                     }
                    }
                });
            

                grade = (group1Ans + (group2Ans)/2 )/noQ;


                let g1p = group1Ans/6 * 100;
                let g2p = group2Ans/8 * 100;

                $("#noq").text(noQ)

                $("#grade").text(grade)


        var color = Chart.helpers.color;
        let nG1w = 6 - group1Ans;
		var data1 = {
            type: 'pie',
			data: {
				datasets: [{
					data: [
                    group1Ans,
					nG1w,
					],
					backgroundColor: [
                        window.chartColors.blue,
                        window.chartColors.red
					],
					label: 'Group 1'
				}],
				labels: [
					'Correct',
					'Wrong'
				]
			},
			options: {
				responsive: true
			}
        }
        let s = (group2Ans <0)? 0 : group2Ans;
        let nG2w = 8 - s;
        var data2 = {
            type: 'pie',
			data: {
				datasets: [{
					data: [
                    s,
					nG2w,
					],
					backgroundColor: [
                        window.chartColors.blue,
                        window.chartColors.red
					],
					label: 'Group 2'
				}],
				labels: [
					'Correct',
					'Wrong'
				]
			},
			options: {
				responsive: true
			}
        }

        $("#g1n").text(group1Ans)

        $("#g1prec").text(g1p.toFixed(2))

        $("#g2n").text(group2Ans)

        $("#g2prec").text(g2p.toFixed(2))

                let ctx = $("#myChart");
                var pi1 = new Chart(ctx, data1);
                let ctx2 = $("#myChart2");

                var pi2 = new Chart(ctx2, data2);

                $('#score').modal({
                show: true
            })
            $("#questionTitle").text("")
            $("#countdown").text("")
            $("#countdown").append(`<a class="btn btn-secondary mr-3" href="index.html">
                              Go back to home page
                            </a>`)


        }