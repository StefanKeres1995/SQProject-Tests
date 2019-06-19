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
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;contacts-table-contains-the-details-button-and-redirects-to-the-details-page;",
  "rows": [
    {
      "cells": [
        "id"
      ],
      "line": 14,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;contacts-table-contains-the-details-button-and-redirects-to-the-details-page;;1"
    },
    {
      "cells": [
        "1"
      ],
      "line": 15,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;contacts-table-contains-the-details-button-and-redirects-to-the-details-page;;2"
    },
    {
      "cells": [
        "5"
      ],
      "line": 16,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;contacts-table-contains-the-details-button-and-redirects-to-the-details-page;;3"
    },
    {
      "cells": [
        "45"
      ],
      "line": 17,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;contacts-table-contains-the-details-button-and-redirects-to-the-details-page;;4"
    },
    {
      "cells": [
        "219"
      ],
      "line": 18,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;contacts-table-contains-the-details-button-and-redirects-to-the-details-page;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7517844900,
  "status": "passed"
});
formatter.before({
  "duration": 2781087700,
  "status": "passed"
});
formatter.before({
  "duration": 3066570100,
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
  "name": "I click on the Details button on row with id \"1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should be redirected to the details page of the \"1\" user",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefUS1.iAccessTheLandingPageOfCOS()"
});
formatter.result({
  "duration": 1982463300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 46
    }
  ],
  "location": "DetailsPageTests.iClickOnTheDetailsButtonOnRowWithId(String)"
});
formatter.result({
  "duration": 12647037300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 51
    }
  ],
  "location": "DetailsPageTests.iShouldBeRedirectedToTheDetailsPageOfTheUser(String)"
});
formatter.result({
  "duration": 1340012300,
  "status": "passed"
});
formatter.after({
  "duration": 352113100,
  "status": "passed"
});
formatter.after({
  "duration": 52986400,
  "status": "passed"
});
formatter.after({
  "duration": 89182900,
  "status": "passed"
});
formatter.before({
  "duration": 2622095400,
  "status": "passed"
});
formatter.before({
  "duration": 2706137000,
  "status": "passed"
});
formatter.before({
  "duration": 2594468600,
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
  "duration": 1678883500,
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
  "duration": 13230406000,
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
  "duration": 1207755300,
  "status": "passed"
});
formatter.after({
  "duration": 23925900,
  "status": "passed"
});
formatter.after({
  "duration": 28240300,
  "status": "passed"
});
formatter.after({
  "duration": 47994400,
  "status": "passed"
});
formatter.before({
  "duration": 2522133500,
  "status": "passed"
});
formatter.before({
  "duration": 2625415800,
  "status": "passed"
});
formatter.before({
  "duration": 2606312800,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Contacts table contains the details button and redirects to the Details page",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;contacts-table-contains-the-details-button-and-redirects-to-the-details-page;;4",
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
  "duration": 1290614300,
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
  "duration": 12937288300,
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
  "duration": 1563088400,
  "status": "passed"
});
formatter.after({
  "duration": 32517800,
  "status": "passed"
});
formatter.after({
  "duration": 33307400,
  "status": "passed"
});
formatter.after({
  "duration": 44123500,
  "status": "passed"
});
formatter.before({
  "duration": 2554760500,
  "status": "passed"
});
formatter.before({
  "duration": 2571953000,
  "status": "passed"
});
formatter.before({
  "duration": 2667989900,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Contacts table contains the details button and redirects to the Details page",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;contacts-table-contains-the-details-button-and-redirects-to-the-details-page;;5",
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
  "name": "I click on the Details button on row with id \"219\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should be redirected to the details page of the \"219\" user",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefUS1.iAccessTheLandingPageOfCOS()"
});
formatter.result({
  "duration": 968983400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "219",
      "offset": 46
    }
  ],
  "location": "DetailsPageTests.iClickOnTheDetailsButtonOnRowWithId(String)"
});
