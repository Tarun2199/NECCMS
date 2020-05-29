<%@ page language = "java" contentType = 
  "text/html; charset = ISO-8859-1"
  import = "java.io.*"
  import = "java.sql.*"
  import = "java.util.*"
  import = "javax.sql.*"
  import = "java.sql.ResultSet"
  import = "java.sql.Statement"
  import = "java.sql.Connection"
  import = "java.sql.DriverManager"
  import = "java.sql.SQLException"
%>
<%@page import="datacon.DatabaseCon"%>
<html>
<body>
<%
String idd = request.getParameter("TID");
String s="Track ID: "+idd+"<br><table  class='table table-bordered table-striped'><thead><tr><th>Date: </th><th>Status: </th></tr></thead><tbody>";
  if(idd.length()==10){
	
	  String query="select detail from booking where booking_id="+idd;
	  DatabaseCon details = new DatabaseCon();
	  Connection con = details.getConn();
	  Statement stmt=con.createStatement();
	  ResultSet rs=stmt.executeQuery(query);
		 
	while(rs.next()){
		 String s1=rs.getString("detail");
	 if(s1.length()>0){
		 String lines[] = s1.split("\\r?\\n");
		 for(int i=0;i<lines.length;i++){
			 
String h=lines[i];
String y[]=h.split(":");
System.out.print(y.length);
if(y.length>=2){
s+="<tr><td>"+y[0]+"</td>"+"<td>"+y[1]+"</td></tr>";}
		 }}
		 
  }
	 

   
  }
  else{
	 
	  s="<h3 style='color:red;' class='text-left'>Please Enter a valid 10-digit tracking ID</h3>";
	
  }
  s+="</tr></tbody></table>";
  request.setAttribute("trackDet", s);
  request.getRequestDispatcher("tracker.jsp").forward(request, response); 
%>
</body>
</html>