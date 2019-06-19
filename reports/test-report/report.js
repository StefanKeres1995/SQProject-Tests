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
  "name": "Contacts table contains the details button and redirects to the Details page",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;contacts-table-contains-the-details-button-and-redirects-to-the-details-page",
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
  "name": "I click on the Details button on row with id \"\u003cposition\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should be redirected to the details page of the user",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;contacts-table-contains-the-details-button-and-redirects-to-the-details-page;",
  "rows": [
    {
      "cells": [
        "position"
      ],
      "line": 14,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;contacts-table-contains-the-details-button-and-redirects-to-the-details-page;;1"
    },
    {
      "cells": [
        "first"
      ],
      "line": 15,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;contacts-table-contains-the-details-button-and-redirects-to-the-details-page;;2"
    },
    {
      "cells": [
        "half-middle1"
      ],
      "line": 16,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;contacts-table-contains-the-details-button-and-redirects-to-the-details-page;;3"
    },
    {
      "cells": [
        "middle"
      ],
      "line": 17,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;contacts-table-contains-the-details-button-and-redirects-to-the-details-page;;4"
    },
    {
      "cells": [
        "half-middle2"
      ],
      "line": 18,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;contacts-table-contains-the-details-button-and-redirects-to-the-details-page;;5"
    },
    {
      "cells": [
        "last"
      ],
      "line": 19,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;contacts-table-contains-the-details-button-and-redirects-to-the-details-page;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5295987000,
  "status": "passed"
});
formatter.before({
  "duration": 3659670300,
  "status": "passed"
});
formatter.before({
  "duration": 3627845900,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Contacts table contains the details button and redirects to the Details page",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;contacts-table-contains-the-details-button-and-redirects-to-the-details-page;;2",
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
  "name": "I click on the Details button on row with id \"first\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should be redirected to the details page of the user",
  "keyword": "Then "
});
formatter.match({
  "location": "IndexPageTests.iAccessTheLandingPageOfCOS()"
});
formatter.result({
  "duration": 823057300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "first",
      "offset": 46
    }
  ],
  "location": "DetailsPageTests.iClickOnTheDetailsButtonOnRowWithId(String)"
});
formatter.result({
  "duration": 11340896600,
  "error_message": "junit.framework.AssertionFailedError: XPath came empty. Verify if the XPath is correct\r\n\tat junit.framework.Assert.fail(Assert.java:57)\r\n\tat junit.framework.TestCase.fail(TestCase.java:227)\r\n\tat DetailsPageTests.iClickOnTheDetailsButtonOnRowWithId(DetailsPageTests.java:182)\r\n\tat ✽.When I click on the Details button on row with id \"first\"(DetailsPage.feature:10)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "DetailsPageTests.iShouldBeRedirectedToTheDetailsPageOfTheUser()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 30426500,
  "status": "passed"
});
formatter.after({
  "duration": 73708600,
  "status": "passed"
});
formatter.after({
  "duration": 137356800,
  "status": "passed"
});
formatter.before({
  "duration": 3427482400,
  "status": "passed"
});
formatter.before({
  "duration": 3416202600,
  "status": "passed"
});
formatter.before({
  "duration": 3475640500,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Contacts table contains the details button and redirects to the Details page",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;contacts-table-contains-the-details-button-and-redirects-to-the-details-page;;3",
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
  "name": "I click on the Details button on row with id \"half-middle1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should be redirected to the details page of the user",
  "keyword": "Then "
});
formatter.match({
  "location": "IndexPageTests.iAccessTheLandingPageOfCOS()"
});
formatter.result({
  "duration": 694581800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "half-middle1",
      "offset": 46
    }
  ],
  "location": "DetailsPageTests.iClickOnTheDetailsButtonOnRowWithId(String)"
});
