$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("DetailsPage.feature");
formatter.feature({
  "line": 1,
  "name": "Access to the Contacts Orchestrator Solution\u0027s (COS) Landing Page",
  "description": "As a user\r\nI want to access to the URL address provided for the details page\r\nSo that I can see the details of the searched user",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 7,
      "value": "#Verify if details button is working"
    }
  ],
  "line": 8,
  "name": ": Contacts table contains the details button and redirects to the Details page",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;:-contacts-table-contains-the-details-button-and-redirects-to-the-details-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I click on the Details button on row with id \"\u003cid\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should be redirected to the details page of the \"\u003cid\u003e\" user",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;:-contacts-table-contains-the-details-button-and-redirects-to-the-details-page;",
  "rows": [
    {
      "cells": [
        "id"
      ],
      "line": 14,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;:-contacts-table-contains-the-details-button-and-redirects-to-the-details-page;;1"
    },
    {
      "cells": [
        "5"
      ],
      "line": 15,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;:-contacts-table-contains-the-details-button-and-redirects-to-the-details-page;;2"
    },
    {
      "cells": [
        "45"
      ],
      "line": 16,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;:-contacts-table-contains-the-details-button-and-redirects-to-the-details-page;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5504408100,
  "status": "passed"
});
formatter.before({
  "duration": 3139387800,
  "status": "passed"
});
formatter.before({
  "duration": 3759035700,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": ": Contacts table contains the details button and redirects to the Details page",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;:-contacts-table-contains-the-details-button-and-redirects-to-the-details-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I click on the Details button on row with id \"5\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should be redirected to the details page of the \"5\" user",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefUS1.iAccessTheLandingPageOfCOS()"
});
formatter.result({
  "duration": 1630949700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 46
    }
  ],
  "location": "DetailsPageTests.iClickOnTheDetailsButtonOnRowWithId(String)"
});
formatter.result({
  "duration": 13713084000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 51
    }
  ],
  "location": "DetailsPageTests.iShouldBeRedirectedToTheDetailsPageOfTheUser(String)"
});
formatter.result({
  "duration": 18471602800,
  "status": "passed"
});
formatter.after({
  "duration": 24592400,
  "status": "passed"
});
formatter.after({
  "duration": 33354300,
  "status": "passed"
});
formatter.after({
  "duration": 32057800,
  "status": "passed"
});
formatter.before({
  "duration": 3730272000,
  "status": "passed"
});
formatter.before({
  "duration": 3286598000,
  "status": "passed"
});
formatter.before({
  "duration": 4108955000,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": ": Contacts table contains the details button and redirects to the Details page",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;:-contacts-table-contains-the-details-button-and-redirects-to-the-details-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I click on the Details button on row with id \"45\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should be redirected to the details page of the \"45\" user",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefUS1.iAccessTheLandingPageOfCOS()"
});
formatter.result({
  "duration": 2145504500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "45",
      "offset": 46
    }
  ],
  "location": "DetailsPageTests.iClickOnTheDetailsButtonOnRowWithId(String)"
});
formatter.result({
  "duration": 25181007900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "45",
      "offset": 51
    }
  ],
  "location": "DetailsPageTests.iShouldBeRedirectedToTheDetailsPageOfTheUser(String)"
});
formatter.result({
  "duration": 982162200,
  "status": "passed"
});
formatter.after({
  "duration": 20463300,
  "status": "passed"
});
formatter.after({
  "duration": 37865000,
  "status": "passed"
});
formatter.after({
  "duration": 41245200,
  "status": "passed"
});
formatter.uri("DuplicatePage.feature");
formatter.feature({
  "line": 1,
  "name": "Access to the Contacts Orchestrator Solution\u0027s (COS) Duplicates page",
  "description": "As a user\r\nI want to access the duplicate page\r\nSo that I can see the list of the possible contacts duplicate available\r\nSo that I can delete and add those at my will",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-page",
  "keyword": "Feature"
});
formatter.uri("US1.feature");
formatter.feature({
  "line": 1,
  "name": "Access to the Contacts Orchestrator Solution\u0027s (COS) Landing Page",
  "description": "As a user\r\nI want to access to the URL address provided for the landing page\r\nSo that I can see the list of the contacts available",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page",
  "keyword": "Feature"
});
});