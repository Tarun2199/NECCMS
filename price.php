 <?php include("header.php");?>
 <head>
 
	<link href="css/main.css" rel="stylesheet">
	<link href="css/font-awesome.css" rel="stylesheet">
	 <link rel="stylesheet" href="css/owl.carousel.min.css">
	 <link rel="stylesheet" type="text/css" href="css/master.css">
	
	<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800" rel="stylesheet"> 
	<link href="https://fonts.googleapis.com/css?family=Montserrat:200,300,400,500,600,700,800,900" rel="stylesheet">
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
							<h2 class="text-center">Price Tracker</h2>
							<br><br>
                            <span id="msg"></span>
                    							<div calss="row">
								<div class="col-md-10 col-md-offset-1">
										<div class="row">
											<div class="form-group col-md-6">
												<h4>Source</h4>
												<input name="name" id="name" class="form-control" placeholder="Source" type="text" required />
											</div>
											<div class="form-group col-md-6">
												<h4>Destination</h4>
												<input name="city" id="fathername" class="form-control" placeholder="Destination" type="text" required/>
											</div>
											<div class="form-group col-md-6">
												<h4>Weight</h4>
												<input name="num" id="num" class="form-control" placeholder="Weight" type="text" required/>
											</div>
											
											<div style="margin-top: 25%;">
											<input class="btn btn-default col-md-6 col-md-offset-3" style="color:#fff;background-color: #000;" type="submit" value="I'm a Finished">
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