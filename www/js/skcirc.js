   function outputUpdate(vol) {
                                                document.getElementById('cyclTime').innerHTML=vol;
                                    //          document.querySelector('#cyclTime').value = vol;
                        }
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');
      var centerX = canvas.width / 2;
      var centerY = canvas.height / 2;
      var radius = 70;
      var sRadian = 3 *Math.PI/2 ;
              var eRadian = 3 *Math.PI/2 ;
              var runinhaleTimer = 0;
              var runexhaleTimer = 0;
              var i = 0;
              function startTimer()
              {
             
             
             var totalSecs = document.getElementById("fader").value;
            console.log(totalSecs);
            // var totalSecs = 15;
              var incr = 2* Math.PI/totalSecs;
      inHaleTimer(totalSecs,incr);
                       
                       
              }
             
              function inHaleTimer(totalSecs,incr)
              {
                    inERadian = eRadian;
                                    window.clearInterval(runinhaleTimer);
                                    context.clearRect(0, 0, canvas.width, canvas.height);
                                    i = 0;
                                    runinhaleTimer = setInterval( function() {
                    i++;
                                   
                                   
            inERadian  = inERadian  + incr;
                                   
            drawCirc(i,sRadian, inERadian ,"Inhale","red",false);
                                    if (i==totalSecs) {
                                      window.clearInterval(runinhaleTimer);
                                                exHaleTimer(totalSecs,incr);
                                                }
                                    }, 1000);
             
              }
              function exHaleTimer(totalSecs,incr)
              {
                                    exERadian = eRadian;
                                    window.clearInterval(runexhaleTimer);
                                    context.clearRect(0, 0, canvas.width, canvas.height);
                                    i = 0;
                                   
                        runexhaleTimer = setInterval( function() {
                    i++;
                                   
            exERadian = exERadian + incr;
                                   
            drawCirc(i,sRadian, exERadian,"Exhale","green",false);
                                    if (i==totalSecs) {
                                     clearInterval(runexhaleTimer);
                                               
                                                }
                                    }, 1000);
             
              }
              function drawCirc(i,sRadian, eRadian,lblText,strkCol,aclck){
                
      context.beginPath();
      context.arc(centerX, centerY, radius, sRadian, eRadian, false);
             
      
              context.lineWidth = 15;
      context.strokeStyle = "red";
      context.stroke();
              context.closePath();
              context.beginPath();
              context.arc(centerX, centerY, radius -10, 0, 2 * Math.PI, false);
              context.fillStyle = 'yellow';
              addShadow();
              context.fill();
             
              ctx = canvas.getContext("2d");
            ctx.font = '20pt Calibri';
            ctx.fillStyle = '#000';
            ctx.textAlign = 'center';
            ctx.fillText(lblText, centerX, centerY);
                                    ctx.fillText(i, centerX, centerY+25);
             
            }
            function addShadow(){
                context.shadowColor = "#333";
                context.shadowBlur = 5;
                context.shadowOffsetX = 0;
                context.shadowOffsetY = 0;
            }
      
