<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
 <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" 
"http://www.w3.org/TR/html4/loose.dtd">
<%@ page session="true"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Price Calculator</title>
<script src="https://code.jquery.com/jquery-1.10.2.js"></script>
<link rel="stylesheet" type="text/css" href="css/jquery.autocomplete.css" />
<script src="js/jquery.autocomplete.js"></script>
<link href="css/main.css" rel="stylesheet">

<script>

	$(document).ready(function() {
		$("#source").autocomplete("AutoCompleteServlet");
	});
	</script>  
	<script>
	$(document).ready(function() {
		$("#destination").autocomplete("AutoCompleteServlet");
	});
	</script>
	<script>
        function enableButton2() {
            document.getElementById("book").disabled = false;
        }
    </script>
<style>

	h1{
font-family: "Comic Sans MS", cursive, sans-serif;
	}
	h4{
		font-family: "Comic Sans MS", cursive, sans-serif;
	}
 input[type=submit], input[type=reset] {
  background-color: #555555;
  border: none;
  color: white;
  padding: 6px 2px;
  text-decoration: none;
  margin: 4px 2px;
  width: 50%;
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
  cursor: pointer;
  border-radius: 12px;
}
input[type=text] {
  width: 80%;
  padding: 1px 0px;
  margin: 0px 0;
  box-sizing: border-box;
}
 
</style>
</head>
<body>

 <%@ include file="header.jsp" %>
  
       
        <br>
        <br>
        <br>
        <br>
      
      <h1 class="text-center" >Price Calculator</h1>
      
<div class="container" style="width:800px;  border-radius: 5px;
  padding: 20px;">
<div style="width:300px; float:left;">
<form method="post" action="FetchPriceDetails" name="PriceCal" id="PriceCal">
        
         <h4>Source</h4>
         <div class="autocomplete">
                      <input name="source" id="myInput" class="form-control" placeholder="Source City" type="text" />
                      </div>
            <h4>Destination</h4>
            <div class="autocomplete">
            <input name="destination" id="myInput1" class="form-control" placeholder="Destination City" type="text"/>
        </div>
            <h4>Weight(Kgs)</h4>
            <input name="weight" id="weight" class="form-control" placeholder="Weight" type="text"/>
          
            <h4>Height(cms)</h4>
            <input name="height" id="height" class="form-control" placeholder="Height" type="text" />
            
       
            <h4>Width(cms)</h4>
            <input name="width" id="width" class="form-control" placeholder="Weight" type="text" />
        
          
            <h4>Length(cms)</h4>
            <input name="length" id="length" class="form-control" placeholder="Weight" type="text" />
           <br>
            <div class="row">
           <div>
            <input type="submit" value="Calculate" id="submit" onclick="enableButton2()">
            
            <input type="reset" value="Reset">
           </div>
        
           </div>
        
</form>	

<script type="text/javascript">
	 var form = $('#PriceCal'); // id of form tag
	 form.submit(function () {

	 $.ajax({
	 type: form.attr('method'),  //post method
	 url: form.attr('action'), //ajaxformexample url
	 data: form.serialize(), // serialize input data values
	 success: function (data) {
	 var result=data;
	 $('#content').html(result); //showing result

	 }
	 });

	 return false; // not refreshing page

	 });
	</script>
</div>

<div style="width:300px; float:right;">
<br>
<br>
<br>
<br>
      <h3>Estimated Cost: </h3><div id="content" style=" text-align: center;"></div>
      <br>
      <br>
      <form action="/NEC_CMS/user/index.jsp">
        <input type="submit" id="book" value="Book" class="btn btn-primary "  disabled></form>
</div>
</div>
<script>
function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
          b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
}
/*An array containing all the country names in the world:*/
var cities = ['Bhilai', 'Tiruchchiruppalli', 'Mysore', 'Delhi', 'Ghaziabad', 'Chandigarh', 'Vadodara', 'Chennai', 'Jodhpur', 'Lucknow', 'Warangal', 'Pune', 'Madurai', 'Ranchi', 'Patna', 'Indore', 'Thiruvananthapuram', 'Amritsar', 'Jabalpur', 'Bhopal', 'Ahmadabad', 'Mumbai', 'Gwalior', 'Coimbatore', 'Jamshedpur', 'Kolkata', 'Hubli', 'Bengaluru']

/*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/
autocomplete(document.getElementById("myInput"), cities);
autocomplete(document.getElementById("myInput1"), cities);
</script>

<style>
 h1{
font-family: "Comic Sans MS", cursive, sans-serif;
 }
 h4{
  font-family: "Comic Sans MS", cursive, sans-serif;
 }
 .autocomplete{
  position: relative;
 }
 .autocomplete-items {
  position: absolute;
  border: 1px solid #d4d4d4;
  border-bottom: none;
  border-top: none;
  z-index: 99;
  /*position the autocomplete items to be the same width as the container:*/
  top: 100%;
  left: 0;
  right: 0;
}
.autocomplete-items div {
  padding: 10px;
  cursor: pointer;
  background-color: #fff; 
  border-bottom: 1px solid #d4d4d4; 
}
/*when hovering an item:*/
.autocomplete-items div:hover {
  background-color: #e9e9e9; 
}
</style>
 <%@ include file="footer.jsp" %>
</body>

</html>
