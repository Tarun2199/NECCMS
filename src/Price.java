import java.sql.*;  
class Price{  
String cities(){
    String data="";
try{  
	DatabaseCon details = new DatabaseCon();
	Connection con = details.getConn();
Statement stmt=con.createStatement();  
ResultSet rs=stmt.executeQuery("select * from Locations");  
 
while(rs.next())  {
data+=rs.getString(1)+",";}
con.close();  
System.out.print(data);
}catch(Exception e){ System.out.println(e);}  
return data;
}
int[] price(int w,int h,int l,int wid, String s, String d) {
	int p=0;
	int[] ret= {0,0};
	double dist=0.0;
	try{  
		DatabaseCon details = new DatabaseCon();
		Connection con = details.getConn();
		Statement stmt=con.createStatement();  
		ResultSet rs=stmt.executeQuery("select latitude,longitude from Locations where city='"+s+"' or city='"+d+"'" );  
	 
	    double[] lat_long=new double[4];
	    int i=0;
		while(rs.next())  {
		
			lat_long[i]=rs.getDouble(1);
			i+=1;
	
			lat_long[i]=rs.getDouble(2);
			i+=1;
			
	    }
		
		
		dist = getDistance(lat_long);
		if(s.equalsIgnoreCase(d))
			dist=0;
		ret [0] =(int) dist;
		con.close();  
		
		}catch(Exception e){ System.out.println(e);}  
	p= (int) (0.4*(dist) + w*2 + 0.0033*(h*l*wid));
	ret[1] = p;
	return ret;
}
double getDistance(double lat[]) {
	double dist=0,l1,l2,l3,l4;
	final int R = 6371; // Radious of the earth
    double lat1 = lat[0];
    double lon1 = lat[1];
    double lat2 = lat[2];
    double lon2 = lat[3];
    double latDistance = toRad(lat2-lat1);
    double lonDistance = toRad(lon2-lon1);
    double a = Math.sin(latDistance / 2) * Math.sin(latDistance / 2) + 
               Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * 
               Math.sin(lonDistance / 2) * Math.sin(lonDistance / 2);
    double c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    double distance = R * c;
	
	return distance;
}
private static Double toRad(Double value) {
    return value * Math.PI / 180;
}
}