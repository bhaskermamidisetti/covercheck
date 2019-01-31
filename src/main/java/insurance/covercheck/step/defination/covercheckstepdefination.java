package insurance.covercheck.step.defination;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class covercheckstepdefination {
	WebDriver driver;
	String result;

	@Given("^user is on insurence home page$")
	public void user_is_on_insurence_home_page() {

		System.setProperty("webdriver.chrome.driver", "D:\\softwares\\chromedriver.exe");
		driver= new ChromeDriver();
		driver.get("https://covercheck.vwfsinsuranceportal.co.uk/");
		driver.manage().window().maximize();
	}

	@When("^Enter the valid Vechile registration \"([^\"]*)\"$")
	public void enter_the_valid_Vechile_registration(String arg1)  {

		driver.findElement(By.xpath("//input[@id='vehicleReg']")).sendKeys(arg1);
		driver.findElement(By.xpath("//button[@name='btnfind']")).click();
	}

	@Then("^The registration number is authenticated$")
	public void the_registration_number_is_authenticated() {

		String result = driver.findElement(By.xpath("//div[@class='result']")).getText();

		Assert.assertEquals("Result for : OV12UYY", result);
		System.out.println("insurence cover check results is authenticated"+result);

	}

		
	@When("^Enter the invalid Vechile registration \"([^\"]*)\"$")
	public void enter_the_invalid_Vechile_registration(String arg1)  {

		driver.findElement(By.xpath("//input[@id='vehicleReg']")).sendKeys(arg1);
		driver.findElement(By.xpath("//button[@name='btnfind']")).click();
	}

	@Then("^The registration number is not authenticated$")
	public void the_registration_number_is_not_authenticated()  {

		String result = driver.findElement(By.xpath("//button[@name='btnfind']/following::div[1]")).getText();
		Assert.assertEquals("Sorry record not found", result);
	}

	
	}


