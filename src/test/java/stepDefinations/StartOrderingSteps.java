package stepDefinations;


import org.testng.Assert;

import com.qa.pages.StartOrderingPage;
import com.qa.util.Testbase;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StartOrderingSteps extends Testbase {
	
	StartOrderingPage startordering = new StartOrderingPage();
	
	
	@When("^User clicks on Start ordering button$")
	public void user_clicks_on_Start_ordering_button() throws Throwable {
		
		startordering.TapOnStartOrderingButton();
	}

	@Then("^User should be navigated to Start ordering screen$")
	public void user_should_be_navigated_to_Start_ordering_screen() throws Throwable {
		
		String text = StartOrderingPage.VerifyStartOrderingScreen();
        Assert.assertEquals("MY FAVORITES", text);		
	}
	

}
