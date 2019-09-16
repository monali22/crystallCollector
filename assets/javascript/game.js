$(document).ready(function(){
   $("#start").show();
   $('#instructions').hide();
   $('#game').hide();
   $('#gifImg').hide();

   $("#pButton").on("click", function() {
      $("#start").hide();
      $('#instructions').show();
      $('#game').hide();
      setTimeout(function(){
         $('#instructions').hide();
         $('#game').show();
      },3000);
    });

    $('.imgs').hover(function(){
       $(this).css('border-color','red')},
       function(){
      $(this).css('border-color','green')
       }
    );

    var game = {
       randomNum : 0,
       crysVal1: 0,
       crysVal2: 0,
       crysVal3: 0,
       crysVal4: 0,
       wins:0,
       losses:0,
       setup: function(){
         this.randomNum = Math.floor(Math.random()*100)+1,
         this.crysVal1= Math.floor(Math.random()*10)+1,
         this.crysVal2= Math.floor(Math.random()*10)+1,
         this.crysVal3= Math.floor(Math.random()*10)+1,
         this.crysVal4= Math.floor(Math.random()*10)+1,
          $('#randNum').text(this.randomNum);
          $('#score').text(0);
          $('#score').attr('val',0);
          this.crystalVals();
          $('#wins').text(this.wins);
          $('#wins').attr('val',this.wins);
          $('#loss').text(this.losses);
          $('#loss').attr('val',this.losses);

       },
       crystalVals: function() {
          if(this.crysVal1==this.crysVal2||this.crysVal1==this.crysVal3||this.crysVal1==this.crysVal4){
            crysVal1= Math.floor(Math.random()*10)+1
          }
          else if(this.crysVal2==this.crysVal3||this.crysVal2==this.crysVal4){
            crysVal2= Math.floor(Math.random()*10)+1
          }
          else if(this.crysVal3==this.crysVal4){
            crysVal3= Math.floor(Math.random()*10)+1
          }
          $('#img1').attr('val',this.crysVal1);
          $('#img2').attr('val',this.crysVal2);
          $('#img3').attr('val',this.crysVal3);
          $('#img4').attr('val',this.crysVal4);

       },
       addVal: function(crys){
          var num = parseInt($('#score').attr('val'));
         
          num = num + parseInt(crys);
          $('#score').attr('val',num);
          $('#score').text(num);
          if(parseInt($('#score').attr('val'))===this.randomNum){
             this.wins = parseInt($('#wins').attr('val')) + 1;
             $('#wins').text(this.wins);
             console.log("wins "+this.wins);
             var num2 = Math.floor(Math.random()*4)+1;
             console.log("num2 "+num2);
             $('#imgGif').attr('src','assets/images/win'+num2+'.gif');
             console.log($('#imgGif').attr('src'));
             $('#gifImg').show();
             $('#game').hide();
             setTimeout(function(){
               $('#gifImg').hide();
               $('#game').show();
            },2000);
             this.restartGame();
          }
          else if(parseInt($('#score').attr('val'))>this.randomNum){
            this.losses = parseInt($('#loss').attr('val')) + 1;
            $('#loss').text(this.losses);
            console.log("loos "+this.losses);
            var num2 = Math.floor(Math.random()*3)+1;
            console.log("num2 "+num2);
             $('#imgGif').attr('src','assets/images/loss'+num2+'.gif');
             console.log($('#imgGif').attr('src'));
            $('#gifImg').show();
            $('#game').hide();
            setTimeout(function(){
              $('#gifImg').hide();
              $('#game').show();
           },2000);
            this.restartGame();
          }
       },
       restartGame: function(){
          this.setup();
       }
    }

    game.setup();

    $('.imgs').on('click',function(){
       console.log($(this).attr('val'));
       game.addVal($(this).attr('val'));
    })
})

