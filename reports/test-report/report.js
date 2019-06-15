$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("US1.feature");
formatter.feature({
  "line": 1,
  "name": "Access to the Contacts Orchestrator Solution\u0027s (COS) Landing Page",
  "description": "As a user\r\nI want to access to the URL address provided for the landing page\r\nSo that I can see the list of the contacts available",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 7844999700,
  "status": "passed"
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
formatter.match({
  "location": "StepsDefUS1.iAccessTheLandingPageOfCOS()"
});
formatter.result({
  "duration": 1758808900,
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
  "duration": 11620800,
  "status": "passed"
});
formatter.after({
  "duration": 72641300,
  "status": "passed"
});
formatter.before({
  "duration": 3777295000,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Landing page contains all contacts available in the",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-all-contacts-available-in-the",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I should see exactly the same amount of contacts that exist in the database",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefUS1.iAccessTheLandingPageOfCOS()"
});
formatter.result({
  "duration": 1959692600,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefUS1.iShouldSeeExactlyTheSameAmountOfContactsThatExistInTheDatabase()"
});
formatter.result({
  "duration": 3502308700,
  "status": "passed"
});
formatter.after({
  "duration": 3284149300,
  "status": "passed"
});
formatter.before({
  "duration": 7230741000,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Landing page seems to have data that is coherent with the database",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-seems-to-have-data-that-is-coherent-with-the-database",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I should see the same name as in the database position",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefUS1.iAccessTheLandingPageOfCOS()"
});
formatter.result({
  "duration": 1132998900,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefUS1.iShouldSeeTheSameNameAsInTheDatabasePosition()"
});
formatter.result({
  "duration": 2466768500,
  "status": "passed"
});
formatter.after({
  "duration": 79715300,
  "status": "passed"
});
});