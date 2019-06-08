$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("US1.feature");
formatter.feature({
  "name": "Access to the Contacts Orchestrator Solution\u0027s (COS) Landing Page",
  "description": "  As a user\n  I want to access to the URL address provided for the landing page\n  So that I can see the list of the contacts available",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Landing page\u0027s title and text contains \"Contacts Landing Page\"",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.match({
  "location": "StepsDefUS1.iAccessTheLandingPageOfCOS()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the title of the page should be \"Contacts Landing Page\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefUS1.theTitleOfThePageShouldBe(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the same name as in the database position",
  "keyword": "And "
});
formatter.match({
  "location": "StepsDefUS1.iShouldSeeTheSameNameAsInTheDatabasePosition()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});