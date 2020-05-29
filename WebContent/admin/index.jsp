<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
pageEncoding="ISO-8859-1"%>
<html class="" lang="en"><head>
	<title>Login _ GOFER</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale = 1.0, minimum-scale = 1.0, maximum-scale = 5.0, user-scalable = yes">
	<link rel="stylesheet" href="css/login_css.css" type="text/css">
	<link rel="stylesheet" href="css/bootstrapcss.css" type="text/css">
</head>

<body style= "background-image : url('login_image.jpg');">
	<div class="app app-header-fixed">
		<div id="span_js_messages" style="display:none;"> <span id="error_msg1">You must enter username</span> <span id="error_msg2">You must enter password</span> <span id="error_msg3">You must enter captcha</span> </div>
		<div class=" app-header-fixed"></div>
		<div class="container w-xxl">
			<div class="outline">
				<div class="navbar-brand_login block m-t"> <img src="logo.png"> </div>
				<div class="text-center" style='font-size:28px;margin-top:5%;color:#5b599e;font-family:inherit;text-shadow: 5px 5px 3px #d2caca;'><b>Admin Login</b></div>
				<div class="m-b-lg">
					<form action="login.jsp" class="" id="login_form_admin" name="login_form_admin" autocomplete="off" method="post" accept-charset="utf-8" novalidate="novalidate">
						<input style="display:none" type="password">
						<input style="display:none" type="text">
						<div class="text-danger wrapper text-center" ng-show="authError"> </div>
						<div class="list-group form-group">
							<div class="list-group-item">
								<input name="username" id="admin_usernme" autocomplete="Off" size="32" maxlength="128" placeholder="Username" class="form-control no-border" type="text">
							</div>
							<div class="list-group-item form-group">
								<input name="password" id="admin_password" size="32" maxlength="32" placeholder="Password" class="form-control no-border password" type="password">
							</div>
						</div>
						<div class="m-t-xxl">
							<input id="admin_login" name="submit" value="Login" class="btn btn-lg btn-primary btn-block" type="submit"><span id="loginmsg" style="display:none"></span>
						</div>
					</form>
					<div class="text-center m-t-md"><a href="https://backoffice.infinitemlmsoftware.com/login/forgot_password">Forgot Password?</a></div> 
					<div class="line line-dashed"></div>
				</div>
			</div>            
			<div class="text-center" ng-include="'tpl/blocks/page_footer.html'"></div>
		</div>
		<div class="col-sm-12 text-center"> <small class="text-muted "><!-- footer -->
			2019 © Gofer- <a href="" target="_blank" style="text-decoration: none; color: #169ac3;"></a> <!-- / footer --></small> </div>

		</div>
		</html>