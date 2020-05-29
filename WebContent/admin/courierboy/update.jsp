<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
pageEncoding="ISO-8859-1"%>
<%@ page import="java.sql.*" %> 
<%@ page import="datacon.DatabaseCon" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Courier Boy</title>
</head>
<body>
<%! String dotp; %>
<%
try{
Connection con= null;
PreparedStatement ps = null;
ResultSet rs = null;
DatabaseCon details = new DatabaseCon();
con = details.getConn();
String sql1 = "Update booking set status =? where booking_id=?";
ps = con.prepareStatement(sql1);
String booking_id = request.getParameter("id");
System.out.println(booking_id);
ps.setString(1,"intransit");
ps.setString(2,booking_id);
int i = ps.executeUpdate();
response.sendRedirect("pick_up_requests.jsp"); 
}
catch(SQLException sqe)
{
out.println(sqe);
} 

%>
</body>
</html>