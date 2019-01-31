covercheck.vwfsinsuranceportal.co.uk
Automate the below test cases

Test cases
Testcase_001: 
Feature: Insurence cover check for a valid vechile registration number

Scenario: Verify vehicle details with valid registration
 Given user is on insurence home page
 When Enter the valid Vechile registration "OV12UYY"
 Then The registration number is authenticated

Test cases
Testcase_002:
 Scenario: Verify vehicle details with invalid registration
 Given user is on insurence home page
 When Enter the invalid Vechile registration "232114"
 Then The registration number is not authenticated
 
Instructions
Clone the repo:

Git:

$ git clone https://github.com/bhaskermamidisetti/covercheck.vwfsinsuranceportal
Or download a ZIP of master branch manually and expand the contents on your system

Prerequisites
Tools: JAVA, cucumber,TestNG, mvn, Eclipse (optional unless you want to use an editor)
Test execution (three methods)
Method 1: Using Command prompt
Open command prompt and navigate to the expanded project folder

Run the command mvn clean install or mvn test (This step installs required dependencies, generates jar file and runs the test suite)

Method 2: Using Eclipse and TestNG
Open Eclipse and navigate to the expanded project folder

Right click on project root folder and Run as "Maven clean" (This step installs required dependencies and builds the project)

navigate to the folder insurencecivercheck.feature"/insurence/src/main/java/covercheck/insurencecovercheck.feature file and Run as "Cucmebr.feature" (This step runs the test suite and generates report under test-output folder\index.html)
Method 3: navigate to runnerfile.java /insurence/src/test/java/insurence/covercheck/Runnerfile.java" and runn as Junit test
 
Open index.html file to analyze the test report

