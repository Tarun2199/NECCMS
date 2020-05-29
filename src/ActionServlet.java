

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
 * Servlet implementation class ActionServlet
 */
@WebServlet("/ActionServlet")
public class ActionServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ActionServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		HttpSession session = request.getSession(true); 
	      String un=request.getParameter("username");
	      String pas=request.getParameter("password");
	      
	        if (un.equalsIgnoreCase(pas)) {   // an amount is OK
	           response.sendRedirect("/NEC_CMS/CourierBoy/CourierBoyDashboard.html");
	        }/*else {
	                                   // invalid amount
	            
	                request.setAttribute("attrib", "field empty");
	           
	                response.sendRedirect(request.getHeader("Referer"));
		if (un.equalsIgnoreCase(pas))
        {
            session.setAttribute("username", request.getParameter("username"));
            response.sendRedirect("/NEC_CMS/CourierBoy/CourierBoyDashboard.html");
        }
        else{
            session.invalidate();
            request.setAttribute("errorMessage", "Invalid user or password");
         RequestDispatcher rd = request.getRequestDispatcher("index.jsp");
            rd.include(request, response);      
        }
	*/
	      else {
	    	  PrintWriter out=response.getWriter();
	          RequestDispatcher rd = request.getRequestDispatcher("index.jsp");
	          out.println("<font color=red>Either user name or password is wrong.</font>");
	          rd.include(request, response);
	       }

}}
