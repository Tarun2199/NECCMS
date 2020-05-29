package datacon;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.StringTokenizer;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class autocomp
 */
@WebServlet("/autocomp")
public class autocomp extends HttpServlet {
	private int count;
	private List<String> name;
	private String data ;
	public void init(ServletConfig config)
	{
		
		
		data="Mumbai,Delhi,Kolkata,Chennai,Bengaluru,Ahmadabad,Pune,Lucknow,Patna,Indore,Vadodara,Bhopal,Coimbatore,Ghaziabad,Jamshedpur,Madurai,Jabalpur,Amritsar,Warangal,Bhilai,Ranchi,Jodhpur,Chandigarh,Gwalior,Thiruvananthapuram,Tiruchchiruppalli,Hubli,Mysore,Mumbai,Delhi,Kolkata,Chennai,Bengaluru,Ahmadabad,Pune,Lucknow,Patna,Indore,Vadodara,Bhopal,Coimbatore,Ghaziabad,Jamshedpur,Madurai,Jabalpur,Amritsar,Warangal,Bhilai,Ranchi,Jodhpur,Chandigarh,Gwalior,Thiruvananthapuram,Tiruchchiruppalli,Hubli,Mysore,";
	
		name = new ArrayList<String>();
		StringTokenizer st = new StringTokenizer(data, ",");
	
		while(st.hasMoreTokens()) {
			name.add(st.nextToken().trim());
		}
	   count = name.size();
	}
	public void doGet(HttpServletRequest request, HttpServletResponse response)
	 throws IOException, ServletException
	 {
		
		response.setContentType("text/html");
		PrintWriter out= response.getWriter();
		String nm= request.getParameter("q");
						
		List<String> name = getData(nm);

		Iterator<String> itr = name.iterator();
		while(itr.hasNext()) {
			String country = (String)itr.next();
			out.println(country);
		}
					
	 }
	public List<String> getData(String nm) {
	String country = null;
	nm = nm.toLowerCase();
	List<String> equal = new ArrayList<String>();
	for(int i=0; i<count; i++) {
		country = name.get(i).toLowerCase();
		if(country.startsWith(nm)) {
			equal.add(name.get(i));
		}
	}
	return equal;
}
}

