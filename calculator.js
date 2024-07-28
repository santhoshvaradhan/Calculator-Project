let outputScreen=document.getElementById("output-screen");
    function Display(num)
    {
        outputScreen=document.getElementById("output-screen");
        outputScreen.value += num;
    }
    function Calculate()
    {
        try
        {
            outputScreen.value=eval(outputScreen.value);
        }
        catch(error)
        {
         alert(error);
        }
       
    }
    function Clear()
    {
        outputScreen.value="";
    }
    function Del()
    {
        outputScreen.value=outputScreen.value.slice(0,-1);
    }
    // before loader those script will excute
    var myVar;
        
        function myFunction() {
          myVar = setTimeout(showPage, 1500);
        }
        
        function showPage() {
          document.getElementById("loader").style.display = "none";
          document.getElementById("myDiv").style.display = "flex";
        }