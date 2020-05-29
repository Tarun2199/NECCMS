import java.sql.*; 
public class DatabaseCon {		

	public Connection getConn() throws Exception
	{
		try
		{
		  Connection con = null;
		  Class.forName("com.mysql.jdbc.Driver").newInstance();
	          con =DriverManager.getConnection("jdbc:mysql://localhost:3306/sys","root","1234");
	          return con;
		}
		catch (SQLException e)
		{
				throw e;
		}

	}

}