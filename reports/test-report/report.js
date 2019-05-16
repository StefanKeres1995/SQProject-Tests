$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ListContactsPage.feature");
formatter.feature({
  "name": "Access to the Contacts Orchestrator Solution\u0027s (COS) Landing Page",
  "description": "  As a user\n  I want to access to the URL address provided for the landing page\n  So that I can see the list of the contacts available",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Landing page\u0027s title and text contains \"Contacts\"",
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
  "location": "ListContactsPageDef.iAccessTheLandingPageOfCOS()"
});
formatter.result({
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c[Contacts]\u003e but was:\u003c[]\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat junit.framework.TestCase.assertEquals(TestCase.java:269)\r\n\tat Cucumber.ListContactsPageDef.iAccessTheLandingPageOfCOS(ListContactsPageDef.java:43)\r\n\tat ✽.I access the landing page of COS(ListContactsPage.feature:7)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "the title of the page should be \"Contacts\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ListContactsPageDef.theTitleOfThePageShouldBe(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I can see the text \"Contacts\"",
  "keyword": "And "
});
formatter.match({
  "location": "ListContactsPageDef.iCanSeeTheText(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});