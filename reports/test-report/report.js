$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("US1.feature");
formatter.feature({
  "line": 1,
  "name": "Access to the Contacts Orchestrator Solution\u0027s (COS) Landing Page",
  "description": "As a user\r\nI want to access to the URL address provided for the landing page\r\nSo that I can see the list of the contacts available",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "Landing page\u0027s title and text contains \"Contacts Landing Page\"",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page\u0027s-title-and-text-contains-\"contacts-landing-page\"",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "the title of the page should be \"Contacts Landing Page\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I should see the same name as in the database position",
  "keyword": "And "
});
formatter.match({
  "location": "StepsDefUS1.iAccessTheLandingPageOfCOS()"
});
formatter.result({
  "duration": 14709434900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Contacts Landing Page",
      "offset": 33
    }
  ],
  "location": "StepsDefUS1.theTitleOfThePageShouldBe(String)"
});
formatter.result({
  "duration": 17663200,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefUS1.iShouldSeeTheSameNameAsInTheDatabasePosition()"
});
formatter.result({
  "duration": 1231694900,
  "status": "passed"
});
formatter.after({
  "duration": 379187200,
  "status": "passed"
});
});