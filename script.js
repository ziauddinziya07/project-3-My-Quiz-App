var cs = false, noncs = false;
var present = 1;
var queid = "#q";
var presentQ = "";
var res = [false, false, false, false, false, false, false, false, false, false];
var check = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var count = 0;

if ( window.innerHeight > 1200 )
{
      document.body.style.overflow = "hidden";
} 

// Function for Ink Transition
function fun()
{     
      window.scrollTo(0,0);
      document.querySelector("body").style.overflow = "hidden";
      document.querySelector("#demo").style.display = "block";    
      document.querySelector("#demo").setAttribute("class", "forward");
      setTimeout(function(){document.querySelector("#demo").setAttribute("class", "reverse");}, 1600);  
      setTimeout(function(){document.querySelector("#demo").style.display = "none";document.querySelector("body").style.overflow = "auto";}, 3600);
}

// Functions for Wrappers
function fun1()
{
      document.querySelector(".cont1").style.display = "none";
      if ( window.innerHeight >= 1200 )
      {document.querySelector(".cont2").style.display = "block";}
      else{document.querySelector(".cont3").style.display = "block";}
}
function con()
{
      document.querySelector(".cont2").style.display = "none";
      document.querySelector(".cont3").style.display = "block";
}
function fun2()
{
      cs = document.querySelector("#cs").checked;
      noncs = document.querySelector("#noncs").checked;

      if ( cs || noncs )
      {
            fun();
            setTimeout(function(){document.querySelector(".wrapper").style.display = "none";}, 1000);
            document.querySelector(".main").removeAttribute("style");
            if ( cs )
            {
                  queid = "#csq";
                  document.querySelector("#csq1").setAttribute("style", "display: block");
                  document.querySelector("#btn1").setAttribute("class", "btn active");
                  presentQ = ("#csq1");
            }
            else
            {
                  document.querySelector("#q1").setAttribute("style", "display: block");
                  document.querySelector("#btn1").setAttribute("class", "btn active");                  
                  presentQ = ("#q1");    
            }
      }
      else{document.querySelector("#lab").innerHTML = "Note: Please select atleast one option...!!";}

}

// Navigating from one question to another...
function jump(no)
{
      let temp;
      var btn = "#btn" + no.toString();
      
      for ( let i = 1; i <= 4; i ++ )
      {
            if ( document.querySelector(presentQ + " .opt" + i.toString() ).checked )
            {
                  check[present - 1] = i;
                  break;
            }
      }
      switch ( present )
      {
            case 1: temp = 1; break;
            case 2: temp = 2; break;
            case 3: temp = 4; break;
            case 4: temp = 3; break;
            case 5: temp = 3; break;
            case 6: temp = 2; break;
            case 7: temp = 4; break;
            case 8: temp = 1; break;
            case 9: temp = 4; break;
            case 10: temp = 3; break;
      }
      res[present - 1] = document.querySelector(presentQ + " .opt" + temp.toString() ).checked;



      fun();
      setTimeout(function(){            
            present = no;
            document.querySelector(".active").setAttribute("class", "btn");
            document.querySelector(btn).setAttribute("class", "btn active");
            document.querySelector(presentQ).style.display = "none";
            presentQ = queid + no.toString();
            document.querySelector(presentQ).style.display = "block";            
            if ( check[present - 1] )
            {
                  document.querySelector(presentQ + " .opt" + check[present - 1].toString() ).checked = true;
            }
      }, 1000);
}

function next()
{
      if ( present < 10 )
            jump(present + 1);
      else
            jump(1);
}

// Calculating Result
function result()
{
      switch ( present )
      {
            case 1: temp = 1; break;
            case 2: temp = 2; break;
            case 3: temp = 4; break;
            case 4: temp = 3; break;
            case 5: temp = 3; break;
            case 6: temp = 2; break;
            case 7: temp = 4; break;
            case 8: temp = 1; break;
            case 9: temp = 4; break;
            case 10: temp = 3; break;
      }
      res[present - 1] = document.querySelector(presentQ + " .opt" + temp.toString() ).checked;

      for ( let i = 0; i < 10; i ++ )
      {
            if ( res[i] )
                  count ++;
      }
      fun();
      setTimeout(function(){
            document.querySelector(".main").style.display = "none"; 
            document.querySelector(".result").style.display = "block";
            document.querySelector(".decoration").style.display = "block"; 
            if ( count < 10 )
                  document.querySelector(".score").innerHTML = "0" + count + " / 10";
            else
                  document.querySelector(".score").innerHTML = count + " / 10";
            document.querySelector("body").style.overflow = "hidden"; 
      }, 1000);
}