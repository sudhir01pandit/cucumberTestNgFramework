package stepDefinations;



import org.testng.Assert;


import com.qa.pages.LoginPage;
import com.qa.util.Testbase;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;



public class LoginSteps extends Testbase {
	
	LoginPage loginpage = new LoginPage();
	
	
	@Given("^User is on application landing page$")
	public void user_is_on_application_landing_page() throws Throwable {
		
		System.out.println("User is in homepage");
	}
	

	@Then("^Click on Sign In link in landing page$")
	public void Click_on_Sign_In_link_in_landing_page() throws Throwable {
		
		loginpage.TapOnSignInLink();	
		
	}

	@Then("^User should be succesfully logged in$")
	public void User_should_be_succesfully_logged_in() throws Throwable {
	    
		String homepage = LoginPage.VerifyhomeScreentitle();
        Assert.assertEquals("Whataburger | Home", homepage);
	}

	
	 @When("^User enters (.+) and (.+) and logs in$")
	 public void user_enters_and_and_logs_in(String username, String password) throws Throwable {
		 
		 loginpage.EnterUserNamePassword( username,  password);
	 }	 
	 
	 @Then("^User should be shown with proper error message$")
	 public void user_should_be_shown_with_proper_error_message() throws Throwable {
	     
		 String error = LoginPage.VerifyErrorMessage();
		 Assert.assertEquals("Uh-oh, your login didn't work that time. Please check the email and password you entered.", error);
		 
	 }
}
