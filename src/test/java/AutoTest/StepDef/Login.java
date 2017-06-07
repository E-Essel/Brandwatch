package AutoTest.StepDef;

import org.openqa.selenium.WebDriver;

import PageObject.login_page;
import Utility.Manage_Driver;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Login extends Manage_Driver {
	WebDriver driver;
	login_page login_steps = new login_page();
	Manage_Driver selected_browser = new Manage_Driver();

	@Before
	public void start_session() {
		selected_browser.set_driver("firefox");
		selected_browser.browser_setting();
	}

	@Given("^I am on landing page of \"([^\"]*)\"$")
	public void i_am_on_landing_page_of(String arg1) throws Throwable {
		login_steps.launch_browser();
		login_steps.assert_text("Google Maps");
	}

	@When("^I enter \"([^\"]*)\" as \"([^\"]*)\"$")
	public void i_enter_as(String selector, String passed_data) throws Throwable {
		switch (selector) {
		case "Location":
         login_steps.From_textfield(passed_data);
			break;
		case "Destination":
         login_steps.To_textfield(passed_data);
			break;
		default:
			break;

		}
	}

	@And("^I click the \"([^\"]*)\" button$")
	public void i_click_the_button(String buttons) throws Throwable {
		switch(buttons){
		case"Search box directions":
			login_steps.Click_search_box_button();
			break;
		case"Search":
			login_steps.Click_go_search();
			break;
			default:
				break;
		}
	}

	@Then("^\"([^\"]*)\" is displayed$")
	public void is_displayed(String text) throws Throwable {
		switch(text){
		case"Brighton":
			login_steps.assert_text("Brighton");
			break;
		case"Wickham":
			login_steps.assert_text("Wickham");
			break;
		case"Liverpool":
			login_steps.assert_text("Liverpool");
			break;
			default:
				break;
		}
	}

	@After
	public void end_session() {
		selected_browser.close_browser();
	}
}
