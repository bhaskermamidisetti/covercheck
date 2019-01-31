$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("insurencecovercheck.feature");
formatter.feature({
  "line": 1,
  "name": "Insurence cover check for a valid vechile registration number",
  "description": "",
  "id": "insurence-cover-check-for-a-valid-vechile-registration-number",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Verify vehicle details with valid registration",
  "description": "",
  "id": "insurence-cover-check-for-a-valid-vechile-registration-number;verify-vehicle-details-with-valid-registration",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "user is on insurence home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Enter the valid Vechile registration \"OV12UYY\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "The registration number is authenticated",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 9,
  "name": "Verify vehicle details with invalid registration",
  "description": "",
  "id": "insurence-cover-check-for-a-valid-vechile-registration-number;verify-vehicle-details-with-invalid-registration",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "user is on insurence home page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "Enter the invalid Vechile registration \"232114\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "The registration number is not authenticated",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});