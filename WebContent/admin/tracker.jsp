<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
 <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" 
"http://www.w3.org/TR/html4/loose.dtd">
<%@ page session="true"%>

<html>
<head>
<script src="https://code.jquery.com/jquery-1.10.2.js"></script>
<link rel="stylesheet" type="text/css" href="css/jquery.autocomplete.css" />
<script src="js/jquery.autocomplete.js"></script>
 
<style>
* {
  box-sizing: border-box;
}
p {
    margin-bottom: 10cm;
}
input[type=text], select, textarea {
  width: 25%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
}

label {
  padding: 12px 12px 12px 0;
  display: inline-block;
}

input[type=submit] {
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  float: right;
}

input[type=submit]:hover {
  background-color: #45a049;
}

h2{
font-family: "Comic Sans MS", cursive, sans-serif;
}
h4{
font-family: "Comic Sans MS", cursive, sans-serif;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}
.container {
  border-radius: 5px;
  padding: 20px;
position: relative;
}

input[type=button], input[type=submit], input[type=reset] {
  background-color: #555555;
  border: none;
  color: white;
  padding: 16px 32px;
  text-decoration: none;
 
  width: 10%;
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
  cursor: pointer;
  border-radius: 12px;
}
 input::placeholder{
color:red;
 } 
}
</style>
</head>
<body>
 <%@ include file="header.jsp" %>
<%   response.setHeader("Cache-Control","no-cache, no-store, must-revalidate"); %>
<br>
<br>
<br>
<br>
<div id="header"></div>

<div class="container" style="width:800px;  border-radius: 5px;
  padding: 20px;">
<div style="width:300px; float:left;">
<img src="img/track.png" >
  <form class="form-inline" action="getTrackingDetails.jsp" name="td" method="post">
  <div class="form-group">
    <label class="sr-only">Tracking ID:</label>
    <input type="text" class="form-control" id="TID" name="TID" placeholder="TrackingID">
  </div>
 
  <button type="submit" class="btn btn-outline-secondary">Track</button>
</form>


</div>

<div style="width:300px; float:right; ">

<h2>Your tracking Details:</h2>
<div>${trackDet}</div>

</div></div>
<br>
<br>
 <%@ include file="footer.jsp" %>
</body>
</html>
