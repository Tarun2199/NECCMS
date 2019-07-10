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
<h1 class="text-center" >Price Calculator</h1>
<br><br>
                       <span id="msg"></span>
                    <div calss="row">
<div class="col-md-10 col-md-offset-1">
<div class="row">
<div class="form-group col-md-6">
<h4>Source</h4>
<select class="form-control">
    <option>Delhi</option>
    <option>Mumbai</option>
    <option>Lucknow</option>
</select> 
</div>
<div class="form-group col-md-6">
<h4>Destination</h4>
<select class="form-control">
    <option>Delhi</option>
    <option>Mumbai</option>
    <option>Lucknow</option>
</select> 
</div>
<div class="form-group col-md-6">
<h4>Weight</h4>
<input name="num" id="num" class="form-control" placeholder="Weight" type="text" required/>
</div>
<div class="form-group col-md-6">
<h4>Height</h4>
<input name="num" id="num" class="form-control" placeholder="Weight" type="text" required/>
</div>
<div class="form-group col-md-6">
<h4>Width</h4>
<input name="num" id="num" class="form-control" placeholder="Weight" type="text" required/>
</div>
<div class="form-group col-md-6">
<h4>Length</h4>
<input name="num" id="num" class="form-control" placeholder="Weight" type="text" required/>
</div>

<div class="row">
<div style="margin-top: 30%;">
<input class="btn btn-default col-sm-6 col-sm-offset-4" style="width:120px;color:#fff;background-color: #555555;border-radius: 8px;box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);" type="submit" value="Find">
</div>
<div style="">
<input class="btn btn-default col-sm-2 col-sm-offset-1" style="width: 120px; color:#FFF;background-color: #555555; border-radius: 8px; " type="submit" value="Reset">
</div>
</div>


</div>

</div>
</div>
</div>





<br class="clearfix">
                        
</form>	

</div>
</div>
</div>
</div>
   </section>
 <?php include("footer.php");?>