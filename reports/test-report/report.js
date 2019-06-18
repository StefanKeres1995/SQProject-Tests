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
  "duration": 4835396500,
  "status": "passed"
});
formatter.before({
  "duration": 3615632400,
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
  "duration": 6061597400,
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
  "duration": 12039081900,
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
  "duration": 289003917600,
  "status": "passed"
});
formatter.after({
  "duration": 371049500,
  "status": "passed"
});
formatter.after({
  "duration": 2374455600,
  "status": "passed"
});
formatter.before({
  "duration": 2678476500,
  "status": "passed"
});
