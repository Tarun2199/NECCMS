<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>AJAX calls using Jquery in Servlet</title>
        <script src="http://code.jquery.com/jquery-latest.js">   
        </script>
        <script>
            $(document).ready(function() {                        
                $('#submit').click(function(event) {  
                    var username=$('#user').val();
 var username2=$('#user2').val();
                 $.get('ActionServlet',{user:username,user2:username2},function(responseText) { 
                        $('#welcometext').text(responseText);         
                    });
                });
            });
        </script>
</head>
<body>
<h1><%=request.getParameter("passed") %></h1>
</body>
</html>