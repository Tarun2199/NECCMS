<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
pageEncoding="ISO-8859-1"%>
<%@ page import="java.sql.*" %> 
 <%@ page import="datacon.DatabaseCon" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
	<title>Login</title>
</head>
<body>
	<%! String userdbName;
	String userdbPsw;
	%>
	<%
	Connection con= null;
	PreparedStatement ps = null;
	ResultSet rs = null;
	DatabaseCon details = new DatabaseCon();
	con = details.getConn();
	String sql = "select * from user where username=? and password=? and type=?";
	String username = request.getParameter("username");
	String password = request.getParameter("password");
	System.out.println(username+password);
	if((!(username.equals(null) || username.equals("")) && !(password.equals(null) || password.equals(""))) )
		{
			try{
			ps = con.prepareStatement(sql);
			ps.setString(1, username);
			ps.setString(2, password);
			ps.setString(3,"courierboy");
			rs = ps.executeQuery();
			if(rs.next())
			{ 
				userdbName = rs.getString("username");
				userdbPsw = rs.getString("password");
				System.out.println(userdbName+userdbPsw);
				if(username.equals(userdbName) && password.equals(userdbPsw))
				{
					session.setAttribute("username",userdbName);
					response.sendRedirect("CourierBoyDashboard.jsp"); 
				} 
			}
			else{
			%>
			<center><p style="color:red">Invalid username/password</p></center>
			<% 
			getServletContext().getRequestDispatcher("/courierboy/index.jsp").include(request, response);}
			rs.close();
			ps.close(); 
		}
		catch(SQLException sqe)
		{
			out.println(sqe);
		} 
	}
	else
		{
			%>
			<center><p style="color:red">Invalid username/password</p></center>
			<% 
			getServletContext().getRequestDispatcher("/courierboy/index.jsp").include(request, response);
		}
		%>
	<%
	rs.close();
       ps.close();
       con.close();
       %>
	</body>
	</html>