<html class="" lang="en"><head>
    <title>Infinite Software 10.0 | Login</title>
    <meta charset="utf-8">
   <meta name="viewport" content="width=device-width, initial-scale = 1.0, minimum-scale = 1.0, maximum-scale = 5.0, user-scalable = yes">
    <link rel="stylesheet" href="theme/libs/assets/animate.css" type="text/css">
    <link rel="stylesheet" href="theme/libs/assets/font-awesome/css/font-awesome.min.css" type="text/css">
    <link rel="stylesheet" href="theme/libs/assets/simple-line-icons.css" type="text/css">
    <link rel="stylesheet" href="theme/libs//assets/bootstrap.css" type="text/css">
    <link rel="stylesheet" href="theme/css/font.css" type="text/css">
    <link rel="stylesheet" href="theme/libs/assets/zebra_datepicker.min.css" type="text/css">
    <link rel="stylesheet" href="theme/libs/assets/jquery.autocomplete.css" type="text/css">
    <link rel="stylesheet" href="theme/css/app.css" type="text/css">
    <link rel="stylesheet" href="theme/css/custom.css" type="text/css">
    <link rel="stylesheet" href="theme/libs/assets/tooltipster.bundle.min.css" type="text/css">
    <link rel="stylesheet" href="theme/libs/assets/tooltipster-sideTip-shadow.min.css" type="text/css">
    <link href="css/tabs.css" rel="stylesheet" type="text/css">

<style>.cke{visibility:hidden;}</style></head>

<body style= 'background-image : url("login_image.jpg")';>



    

    <div class="app app-header-fixed">
        
        
        
<div id="span_js_messages" style="display:none;"> <span id="error_msg1">You must enter username</span> <span id="error_msg2">You must enter password</span> <span id="error_msg3">You must enter captcha</span> </div>

<div class=" app-header-fixed"></div>
 
<div class="container w-xxl">
    
    <div class="navbar-brand_login block m-t"> <img src="../img/logo.png"> </div>
    
    <div class="text-center" style='font-size:28px;margin-top:5%;color:#5b599e;font-family:inherit;text-shadow: 5px 5px 3px #d2caca;'><b>Agent Login</b></div>
    
    
    <div class="m-b-lg">
        <form action="login_data.php" class="" id="login_form_admin" name="login_form_admin" autocomplete="off" method="post" accept-charset="utf-8" novalidate="novalidate">

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
            <input id="admin_login" name="submit" value="Login" class="btn btn-lg btn-default btn-block" type="submit"><span id="loginmsg" style="display:none"></span>
        </div>
        </form>
        <div class="text-center m-t-md"><a href="https://backoffice.infinitemlmsoftware.com/login/forgot_password">Forgot Password?</a></div>
        <div class="line line-dashed"></div>
                             <div class="text-center text-center m-t-sm text-info"><a href="../index.php" target="_blank">Back to Website</a></div>
                            </div>
                            
    <div class="text-center" ng-include="'tpl/blocks/page_footer.html'"></div>
</div>
<div class="col-sm-12 text-center"> <small class="text-muted "><!-- footer -->
2019 © Gofer- <a href="" target="_blank" style="text-decoration: none; color: #169ac3;"></a> <!-- / footer --></small> </div>

        
        
    </div>

    
    <script src="theme/libs/jquery/jquery/dist/jquery.js"></script>
    <script src="theme/js/jquery.min.js"></script>
    <script>
        $(function() {
            $.ajaxSetup({
                data: {
                    inf_token: "0506cbb939052e58b174cd7b9e07b05c"
                }
            });
            themeSettingData = null;
        });
    </script>
           
    <script src="theme/libs/bootstrap.js"></script>
    <script src="theme/js/ui-load.js"></script>
    <script src="theme/js/ui-jp.config.js"></script>
    <script src="theme/js/ui-jp.js"></script>
    <script src="theme/js/ui-nav.js"></script>
    <script src="theme/js/ui-toggle.js"></script>
    <script src="theme/js/ui-client.js"></script>
    <script src="theme/js/wizard.js"></script>
    <script src="theme/js/theme-setting.js" type="text/javascript"></script>
    <script src="theme/zebra_datepicker.min.js" type="text/javascript"></script>
    <script src="theme/libs/jquery.autocomplete.js" type="text/javascript"></script>
    <script src="theme/libs/ckeditor.js"></script>
    <script src="theme/js/custom.js" type="text/javascript"></script>
    <script src="theme/libs/tooltipster.bundle.min.js" type="text/javascript"></script>
    

    <script src="plugins/jquery.validate.min.js"></script>
    <script src="javascript/main.js"></script>
    <script src="javascript/cookie-based-jquery-tabs.js" type="text/javascript"></script>
    <script src="javascript/jquery.cookie.js" type="text/javascript"></script>
    <script src="javascript/validate_login.js" type="text/javascript"></script>

    

</body></html>