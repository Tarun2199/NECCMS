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
<%! String dotp;

%>
<%
Connection con= null;
PreparedStatement ps = null;
ResultSet rs = null;
DatabaseCon details = new DatabaseCon();
con = details.getConn();
String sql = "select otp from booking where booking_id=?";
String sql1 = "Update booking set status =? where otp=?";
String otp = request.getParameter("otp");
System.out.println(otp);
if((!(otp.equals(null) || otp.equals("")) ))
{
ps = con.prepareStatement(sql);
String booking_id = request.getParameter("id");
System.out.println(booking_id);
ps.setString(1,booking_id);

rs = ps.executeQuery();
if(rs.next())
{ 
dotp = rs.getString("otp");
System.out.println(dotp);
if(otp.equals(dotp))
{
ps  =con.prepareStatement(sql1);
ps.setString(1,"delivered");
ps.setString(2,dotp);
int i = ps.executeUpdate();
response.sendRedirect("pick_up_requests.jsp"); 
}
else
{
	response.sendRedirect("pick_up_requests.jsp");
}
}
 
}
%>
</body>
</html>