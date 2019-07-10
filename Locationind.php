<?php include("header.php");?>
 <head>
 
<link href="css/main.css" rel="stylesheet">
<link href="css/font-awesome.css" rel="stylesheet">
<link rel="stylesheet" href="css/owl.carousel.min.css">
<link rel="stylesheet" type="text/css" href="css/master.css">

<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800" rel="stylesheet"> 
<link href="https://fonts.googleapis.com/css?family=Montserrat:200,300,400,500,600,700,800,900" rel="stylesheet">
<style>
	h1{
font-family: "Comic Sans MS", cursive, sans-serif;
	}
	h4{
		font-family: "Comic Sans MS", cursive, sans-serif;
	}

</style>
</head>
 <section class="student-dashboard">
<div class="container">
<div class="row">
<div class="col-md-12">
</div>
<div class="col-md-12">
<div class="request-info">
<BR>
<br>
<br>
<br>
<form method="post" name="formcont" action="add_ad.php">
<div class="request-form clearfix">
<h1 class="text-center" >Track your shipment</h1>




<h4>Enter 10 digit Tracking ID</h4>
<input style="width:200px;" name="num" id="num" class="form-control" placeholder="Tracking ID" type="text" required/>
<div style="margin-top: 3%;">
<input class="btn btn-default col-sm-6 col-sm-offset-4" style="margin-bottom: 3%; width:120px;color:#fff;background-color: #555555;border-radius: 8px;box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);" type="submit" value="Track">

</div>







<br class="clearfix">
                        
</form>	

   </section>
 <?php include("footer.php");?>