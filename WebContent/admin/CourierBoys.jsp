<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
pageEncoding="ISO-8859-1"%>
<%@ page import="java.sql.*" %> 
<%@page import="datacon.DatabaseCon"%>
<!DOCTYPE html>
<html lang="en" class="">
<head>
  <title>Admin</title>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale = 1.0, minimum-scale = 1.0, maximum-scale = 5.0, user-scalable = yes">
  <link rel="stylesheet" href="css/animate1.css" type="text/css" />
  <link rel="stylesheet" href="css/font-awesome.min.css" type="text/css" />
  <link rel="stylesheet" href="css/simple-line-icons.css" type="text/css" />
  <link rel="stylesheet" href="css/bootstrap.css" type="text/css" />
  <link rel="stylesheet" href="css/font.css" type="text/css" />
  <link rel="stylesheet" href="css/zebra_datepicker.css" type="text/css" />
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
  <link rel="stylesheet" href="css/autocomplete.css" type="text/css" />
  <link rel="stylesheet" href="css/app.css" type="text/css" />
  <link rel="stylesheet" href="css/custom.css" type="text/css" />
  <link rel="stylesheet" href="css/tooltipster.css" type="text/css" />
  <link rel="stylesheet" href="css/tooltipster_sidetip.css" type="text/css" />
</head>
<body>
 
   <%
   response.setHeader("Cache-Control","no-cache, no-store, must-revalidate");
   if(session.getAttribute("name")==null)
      {
        response.sendRedirect("index.jsp");
     }
     
     
     %>
  <input type = "hidden" name = "base_url" id = "base_url" value = "https://backoffice.infinitemlmsoftware.com/" />
  <input type = "hidden" name = "img_src_path" id="img_src_path" value="https://backoffice.infinitemlmsoftware.com/public_html/"/>
  <input type = "hidden" name = "current_url" id = "current_url" value = "home/index" />
  <input type = "hidden" name = "current_url_full" id = "current_url_full" value = "admin/home" />
  <input type = "hidden" name = "DEFAULT_CURRENCY_VALUE" id="DEFAULT_CURRENCY_VALUE" value="1"/>
  <input type = "hidden" name = "DEFAULT_CURRENCY_CODE" id="DEFAULT_CURRENCY_CODE" value=""/>
  <input type = "hidden" name = "DEFAULT_SYMBOL_LEFT" id="DEFAULT_SYMBOL_LEFT" value=""/>
  <input type = "hidden" name = "DEFAULT_SYMBOL_RIGHT" id="DEFAULT_SYMBOL_RIGHT" value=""/>
  <input type = "hidden" name = "logout_time" id="logout_time" value="1800"/>
  <input type="hidden" name="input_group_hide" id="input_group_hide" value="input-group-hide">
  <div class="app app-header-fixed ">
    <!-- header -->
    <header id="header" class="app-header navbar" role="menu">
     <!-- navbar header -->
     <div class="navbar-header bg-dark">
      <button class="pull-right visible-xs dk" ui-toggle-class="show" target=".navbar-collapse">
        <i class="fas fa fa-cog"></i>
      </button>
      <button class="pull-right visible-xs" ui-toggle-class="off-screen" target=".app-aside" ui-scroll="app">
        <i class="fas fa-bars"></i>
      </button>
      <!-- brand -->
      <a href="AdminDashboard.jsp" class="navbar-brand" >
        <span>Admin</span>
      </a>
      <!-- / brand -->
    </div>
    <!-- / navbar header -->
    <!-- navbar collapse -->
    <div class="collapse pos-rlt navbar-collapse box-shadow bg-white-only">
      <!-- buttons -->
      <div class="nav navbar-nav hidden-xs">
       <a href="#" class="btn no-shadow navbar-btn" ui-toggle-class="app-aside-folded" target=".app">
         <i class="fa fa-dedent fa-fw text"></i>
         <i class="fa fa-indent fa-fw text-active"></i>
       </a>
     </div>
     <!-- / buttons -->
     <ul class="nav navbar-nav">
     </ul>
     <!-- navbar right -->
     <ul class="nav navbar-nav navbar-right">
       <li class="dropdown">
        <a href="#" data-toggle="dropdown" class="dropdown-toggle">
          <i class="far fa-envelope"></i>
          <span class="visible-xs-inline">Mail Notification</span>
        </a>
        <!-- dropdown -->
        <div class="dropdown-menu w-xl animated fadeInUp">
         <div class="panel bg-white">
          <div class="panel-heading b-light bg-light">
           <strong>
             You have no new mail
           </strong>
         </div>
         <div class="list-group">
         </div>
         <div class="panel-footer text-sm">
           <a href="https://backoffice.infinitemlmsoftware.com/admin/mail/mail_management" class="pull-right"><i class="fa fa-cog"></i></a>
           <a href="https://backoffice.infinitemlmsoftware.com/admin/mail/mail_management" data-toggle="class:show animated fadeInRight">See all messages</a>
         </div>
       </div>
     </div>
     <!-- / dropdown -->
   </li>
   <li class="dropdown">
    <a href="#" data-toggle="dropdown" class="dropdown-toggle">
      <i class="far fa-bell"></i>
      <span class="visible-xs-inline">Notification</span>
    </a>
    <!-- dropdown -->
    <div class="dropdown-menu w-xl animated fadeInUp">
     <div class="panel bg-white">
      <div class="panel-heading b-light bg-light">
       <strong>You have no new notification</strong>
     </div>
     <div class="list-group"></div>
   </div>
 </div>
 <!-- / dropdown -->
</li>
<li class="dropdown">
  <a href="#" data-toggle="dropdown" class="dropdown-toggle clear" data-toggle="dropdown">
    <span class="thumb-sm avatar pull-right m-t-n-sm m-b-n-sm m-l-sm">
      <img src="https://backoffice.infinitemlmsoftware.com/uploads/images/profile_picture/nophoto.jpg" alt="...">
      <i class="on md b-white bottom"></i>
    </span>
    <span class="hidden-sm hidden-md"></span>
    <b class="caret"></b>
  </a>
  <!-- dropdown -->
  <ul class="dropdown-menu animated fadeInRight w">
   <li>
    <a href="../index.jsp">
      <span>Logout</span>
    </a>
  </li>
</ul>
<!-- / dropdown -->
</li>
</ul>
<!-- / navbar right -->
</div>
<!-- / navbar collapse -->
</header>
<!-- / header -->
<!-- aside -->
<aside id="aside" class="app-aside hidden-xs bg-dark">
 <div class="aside-wrap">
  <div class="navi-wrap">
   <!-- nav -->
   <nav ui-nav class="navi clearfix">
    <ul class="nav">
     <li   >
      <a href="AdminDashboard.jsp" class="auto" >
        <i class="fas fa-flag"></i>
        <span>Sub-admins</span>
      </a>
    </li>
    <li >
      <a href="Bookings.jsp" class="auto" >

        <i class="fa fa-briefcase"></i>
        <span>Bookings</span>
      </a>
    </li>
    <li class="active" >
      <a href="CourierBoys.jsp" class="auto" >

        <i class="far fa-user-circle"></i>
        <span>Courier Boys</span>
      </a>
    </li>
    
    
    <li >
      <a href="Clients.jsp" class="auto" >

        <i class="far fa-user-circle"></i>
        <span>Clients</span>
      </a>
    </li>
    <li >
      <a href="logout.jsp" class="auto" >
        <i class="fa fa-sign-out-alt"></i>
        <span>Logout</span>
      </a>
    </li>
  </ul>
</nav>
<!-- nav -->
</div>
</div>
</aside>
<!-- / aside -->
<!-- content -->












<div id="content" class="app-content" role="main">
  <div class="app-content-body ">
    <div class="hbox hbox-auto-xs hbox-auto-sm">
     <!-- main header -->
     <div class="bg-light lter b-b wrapper-md">
      <h1 class="m-n font-thin h3">Courier Boys</h1>
    </div>
    <!-- / main header -->
    <div class="wrapper-md">
      <div class="col">
       <div class="row">

        <div class="ex1">


          <div class="panel-body">
            <div class="col-md-12">
              <input class="form-control" id="myInput" type="text" placeholder="Filter...">
            </div>

            <br>
            <br>
            <table class="table table-striped table-hover" width=400>
             <thead> 
               <th class="text-center">Id</th>
               <th class="text-center">Name</th>
               <th class="text-center">Area</th>
               <th class="text-center">Status</th>
               
             </thead>
             <tbody id="myTable">
              <%
             
              DatabaseCon details = new DatabaseCon();
          	  Connection conn = details.getConn();
                String query="select * from booking";
           
                Statement stmt=conn.createStatement();
                ResultSet rs=stmt.executeQuery(query);
                int f=0;
                while(rs.next())
                {
                  %>
                  <tr>
                    <td><%=rs.getInt("booking_id") %></td>
                    <td><%=rs.getString("sender_agent") %></td>
                    <td><%=rs.getString("sender_city") %></td>
                    <td><%=rs.getString("status") %></td>
                  </tr>
                  <%} %>
                  
                </tbody>
              </table>
              <%
              rs.close();
              stmt.close();
              conn.close();
            %>                   
            <script>
              $(document).ready(function(){
                $("#myInput").on("keyup", function() {
                  var value = $(this).val().toLowerCase();
                  $("#myTable tr").filter(function() {
                    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
                  });
                });
              });
            </script>
          </div>
        </div>
        
      </div>
      <div class="panel hbox hbox-auto-xs no-border">
        <div class="col wrapper">
         <div class="dropdown pull-right">
         </div>
       </div>
     </div>
     
     
     
     
   </div>
 </div>
 <br>
 <br>
 <br>
 <!----demo-->
 <div class="panel-body setting_margin  demo_margin_top" id="demo_footer">
  <div class="m-b-xxl">
   <div class="panel no-border">
    <div class="wrapper-md">
     <div class="row">

     </div>
     <hr>
     <div class="row">
      <div class="col-md-3">
       <ul class="social">
        <li><a href="#">  <i class="fa fa-newspaper-o"></i> </a> </li>
        <span class="m-t-sm"> <a class="font-bold " href="https://blog.infinitemlmsoftware.com" target="_blank">Gofer</a>
        </span>
      </ul>
    </div>
    <div class="col-md-3">
     <ul class="social">
      <li><a href="#">  <i class="fab fa-skype"></i> </a> </li>
      <span class="m-t-sm">
       <div class="font-bold " href="" target="_blank">Gofer</div>
     </span>
   </ul>
 </div>
 <div class="col-md-3">
   <ul class="social">
    <li><a href="#">  <i class="fab fa-whatsapp"></i> </a> </li>
    <span class="m-t-sm">
     <div class="font-bold " href="" target="_blank">+91 9562-941-055</div>
   </span>
 </ul>
</div>
<div class="col-md-3">
 <ul class="social">
  <li><a href="#">  <i class="fa fa-envelope"></i> </a> </li>
  <span class="m-t-sm">
   <div class="font-bold " href="" target="_blank">support@gofer.in</div>
 </span>
</ul>
</div>
</div>
</div>
</div>
</div>
</div>
<!--end demo--> 
<!-- footer -->
<footer id="footer" class="app-footer" role="footer">
  <div class="wrapper b-t bg-light">
   <span class="pull-right"><a href="javascript:scrollTop();" ui-scroll="app" class="m-l-sm text-muted"><i class="fa fa-long-arrow-up"></i></a></span>
   2019 &copy; Gofer
   
 </div>
</footer>
<!-- / footer -->
</div>
</div>
</div>
<script src="https://backoffice.infinitemlmsoftware.com/public_html/theme/libs/jquery/jquery/dist/jquery.js"></script>
<script src="https://backoffice.infinitemlmsoftware.com/public_html/theme/js/jquery.min.js"></script>
<script>
 $(function() {
   $.ajaxSetup({
     data: {
       inf_token: "0506cbb939052e58b174cd7b9e07b05c"
     }
   });
   themeSettingData = {"theme_id":"1","navbar_header_color":"bg-black","navbar_collapse_color":"bg-white-only","aside_color":"bg-black","header_fixed":"1","aside_fixed":"0","aside_folded":"0","aside_dock":"0","container":"0"};
 });
</script>
<script src="js/bootstrap.js"></script>
<script src="js/load.js"></script>
<script src="js/config.js"></script>
<script src="js/ui_jp.js"></script>
<script src="js/ui_nav.js"></script>
<script src="https://backoffice.infinitemlmsoftware.com/public_html/theme/js/ui-toggle.js"></script>
<script src="https://backoffice.infinitemlmsoftware.com/public_html/theme/js/ui-client.js"></script>
<script src="https://backoffice.infinitemlmsoftware.com/public_html/theme/js/wizard.js"></script>
<script src="https://backoffice.infinitemlmsoftware.com/public_html/theme/js/theme-setting.js" type="text/javascript"></script>
<script src="https://backoffice.infinitemlmsoftware.com/public_html/theme/libs/jquery/zebra-datepicker/zebra_datepicker.min.js" type="text/javascript"></script>
<script src="https://backoffice.infinitemlmsoftware.com/public_html/theme/libs/jquery/autocomplete/jquery.autocomplete.js" type="text/javascript"></script>
<script src="https://backoffice.infinitemlmsoftware.com/public_html/theme/libs/jquery/ckeditor/ckeditor.js"></script>
<script src="https://backoffice.infinitemlmsoftware.com/public_html/theme/js/custom.js" type="text/javascript"></script>
<script src="https://backoffice.infinitemlmsoftware.com/public_html/theme/libs/jquery/tooltipster/js/tooltipster.bundle.min.js" type="text/javascript"></script>
<script src="https://backoffice.infinitemlmsoftware.com/public_html/plugins/jquery-validation/dist/jquery.validate.min.js"></script>
<script src="https://backoffice.infinitemlmsoftware.com/public_html/javascript/main.js"></script>
<script src="https://backoffice.infinitemlmsoftware.com/public_html/javascript/copy_to_clip_board.js" type="text/javascript" ></script>
<script src="js/dynamic_dashboard.js" type="text/javascript" ></script>
<script src="https://backoffice.infinitemlmsoftware.com/public_html/javascript/date_time_picker.js" type="text/javascript" ></script>
<script src="https://kit.fontawesome.com/d3aef6447d.js"></script>
<script src="https://backoffice.infinitemlmsoftware.com/public_html/javascript/timer.js" type="text/javascript"></script>
<script src="https://backoffice.infinitemlmsoftware.com/public_html/javascript/auto_timeout.js" type="text/javascript"></script>
<script src="https://backoffice.infinitemlmsoftware.com/public_html/javascript/currency.js" type="text/javascript" ></script>
<script src="https://backoffice.infinitemlmsoftware.com/public_html/plugins/clipboard.min.js" type="text/javascript"></script>
<script src="https://backoffice.infinitemlmsoftware.com/public_html/javascript/todo_config.js" type="text/javascript"></script>
<script>
 country_map_data = {"AF":"0","AL":"0","DZ":"0","AS":"0","AD":"0","AO":"0","AI":"0","AQ":"0","AG":"0","AR":"0","AM":"0","AW":"0","AU":"0","AT":"0","AZ":"0","BS":"0","BH":"0","BD":"0","BB":"0","BY":"0","BE":"0","BZ":"0","BJ":"0","BM":"0","BT":"0","BO":"0","BA":"0","BW":"0","BV":"0","BR":"0","IO":"0","BN":"0","BG":"0","BF":"0","BI":"0","KH":"0","CM":"0","CA":"0","CV":"0","KY":"0","CF":"0","TD":"0","CL":"0","CN":"0","CX":"0","CC":"0","CO":"0","KM":"0","CG":"0","CK":"0","CR":"0","CI":"0","HR":"0","CU":"0","CY":"0","CZ":"0","DK":"0","DJ":"0","DM":"0","DO":"0","TL":"0","EC":"0","EG":"0","SV":"0","GQ":"0","ER":"0","EE":"0","ET":"0","FK":"0","FO":"0","FJ":"0","FI":"0","FR":"0","GF":"0","PF":"0","TF":"0","GA":"0","GM":"0","GE":"0","DE":"0","GH":"0","GI":"0","GR":"0","GL":"0","GD":"0","GP":"0","GU":"0","GT":"0","GN":"0","GW":"0","GY":"0","HT":"0","HM":"0","HN":"0","HK":"0","HU":"0","IS":"0","IN":"1","ID":"0","IR":"0","IQ":"0","IE":"0","IL":"0","IT":"0","JM":"0","JP":"0","JO":"0","KZ":"0","KE":"0","KI":"0","KP":"0","KR":"0","KW":"0","KG":"0","LA":"0","LV":"0","LB":"0","LS":"0","LR":"0","LY":"0","LI":"0","LT":"0","LU":"0","MO":"0","MK":"0","MG":"0","MW":"0","MY":"0","MV":"0","ML":"0","MT":"0","MH":"0","MQ":"0","MR":"0","MU":"0","YT":"0","MX":"0","FM":"0","MD":"0","MC":"0","MN":"0","MS":"0","MA":"0","MZ":"0","MM":"0","NA":"0","NR":"0","NP":"0","NL":"0","AN":"0","NC":"0","NZ":"0","NI":"0","NE":"0","NG":"0","NU":"0","NF":"0","MP":"0","NO":"0","OM":"0","PK":"0","PW":"0","PA":"0","PG":"0","PY":"0","PE":"0","PH":"0","PN":"0","PL":"0","PT":"0","PR":"0","QA":"0","RE":"0","RO":"0","RU":"0","RW":"0","KN":"0","LC":"0","VC":"0","WS":"0","SM":"0","ST":"0","SA":"0","SN":"0","SC":"0","SL":"0","SG":"0","SK":"0","SI":"0","SB":"0","SO":"0","ZA":"0","GS":"0","ES":"0","LK":"0","SH":"0","PM":"0","SD":"0","SR":"0","SJ":"0","SZ":"0","SE":"0","CH":"0","SY":"0","TW":"0","TJ":"0","TZ":"0","TH":"0","TG":"0","TK":"0","TO":"0","TT":"0","TN":"0","TR":"0","TM":"0","TC":"0","TV":"0","UG":"0","UA":"0","AE":"0","GB":"0","US":"0","UM":"0","UY":"0","UZ":"0","VU":"0","VA":"0","VE":"0","VN":"0","VG":"0","VI":"0","WF":"0","EH":"0","YE":"0","CD":"0","ZM":"0","ZW":"0","JE":"0","GG":"0","ME":"0","RS":"0","AX":"0","BQ":"0","CW":"0","PS":"0","SS":"0","BL":"0","MF":"0","IC":"0"};
</script>
</body>
</html>