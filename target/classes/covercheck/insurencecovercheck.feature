Feature: Insurence cover check for a valid vechile registration number

Scenario: Verify vehicle details with valid registration
 Given user is on insurence home page
 When Enter the valid Vechile registration "OV12UYY"
 Then The registration number is authenticated
 
 
 Scenario: Verify vehicle details with invalid registration
 Given user is on insurence home page
 When Enter the invalid Vechile registration "232114"
 Then The registration number is not authenticated
 