package com.qa.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.qa.util.Testbase;

public class StartOrderingPage extends Testbase {
	
	
	@FindBy(xpath = "///a[contains(@class,'btn btn-default')]")
	public WebElement startOrdering;
	
	@FindBy(xpath = "//span[text()='MY FAVORITES']")
	public WebElement myFavorites;

	

	public StartOrderingPage() {
		PageFactory.initElements(driver, this);
	}
	
	public void TapOnStartOrderingButton() 
	{
		startOrdering.click();
	}
	
	public static String VerifyStartOrderingScreen() throws InterruptedException 
	{
		Thread.sleep(4000);
		String text = driver.findElement(By.xpath("myFavorites")).getText();
		return text;
	}
	
	

}
