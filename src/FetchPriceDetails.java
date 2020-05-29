import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 * Servlet implementation class FetchPriceDetails
 */
@WebServlet("/FetchPriceDetails")
public class FetchPriceDetails extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public FetchPriceDetails() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/html");
		PrintWriter out=response.getWriter();
		
		Price ob=new Price();
		String s=request.getParameter("source");
		String d=request.getParameter("destination");
		int w=Integer.parseInt(request.getParameter("weight"));
		int h=Integer.parseInt(request.getParameter("height"));
		int l=Integer.parseInt(request.getParameter("length"));
		int wid=Integer.parseInt(request.getParameter("width"));
		int[] x=ob.price(w,h,l,wid,s,d);
		out.println(String.valueOf(x[1]));
	
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
