package PageObject;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import Utility.Manage_Driver;

public class login_page extends Manage_Driver {
	
	By Search_Box_Direction = By.id("searchbox-directions");
	By From_textfield_locator = By.id("gs_htif50");
	By To_textfield_locator = By.id("sb_ifc52");
	By Search_button_locator = By.cssSelector(".searchbox-searchbutton");
	
	
	public void launch_browser() throws InterruptedException{
		driver.get("https://www.google.co.uk/maps/");
}
	public void From_textfield(String text) throws InterruptedException{
		driver.findElement(From_textfield_locator).sendKeys(text);
	}
	public void To_textfield(String text){
		driver.findElement(To_textfield_locator).sendKeys(text);
	}
	public void Click_go_search(){
		driver.findElement(Search_button_locator).click();
	}
	public void Click_search_box_button(){
		driver.findElement(Search_Box_Direction).click();
	}
	public void assert_text(String text){
		String Main_title = driver.getTitle();
		String Expected_Title = text;
		Assert.assertEquals(Main_title, Expected_Title);
	}
}
