$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("DetailsPage.feature");
formatter.feature({
  "line": 1,
  "name": "Access to the Contacts Orchestrator Solution\u0027s (COS) Landing Page",
  "description": "As a user\r\nI want to access to the URL address provided for the details page\r\nSo that I can see the details of the searched user",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Contacts table contains the details button and redirects to the Details page",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;contacts-table-contains-the-details-button-and-redirects-to-the-details-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on the Details button on row with id \"\u003cposition\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I should be redirected to the details page of the user",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;contacts-table-contains-the-details-button-and-redirects-to-the-details-page;",
  "rows": [
    {
      "cells": [
        "position"
      ],
      "line": 12,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;contacts-table-contains-the-details-button-and-redirects-to-the-details-page;;1"
    },
    {
      "cells": [
        "first"
      ],
      "line": 13,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;contacts-table-contains-the-details-button-and-redirects-to-the-details-page;;2"
    },
    {
      "cells": [
        "half-middle1"
      ],
      "line": 14,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;contacts-table-contains-the-details-button-and-redirects-to-the-details-page;;3"
    },
    {
      "cells": [
        "middle"
      ],
      "line": 15,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;contacts-table-contains-the-details-button-and-redirects-to-the-details-page;;4"
    },
    {
      "cells": [
        "half-middle2"
      ],
      "line": 16,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;contacts-table-contains-the-details-button-and-redirects-to-the-details-page;;5"
    },
    {
      "cells": [
        "last"
      ],
      "line": 17,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;contacts-table-contains-the-details-button-and-redirects-to-the-details-page;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3967187400,
  "status": "passed"
});
formatter.before({
  "duration": 2961192700,
  "status": "passed"
});
formatter.before({
  "duration": 3045650600,
  "status": "passed"
});
formatter.before({
  "duration": 3124077000,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Contacts table contains the details button and redirects to the Details page",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;contacts-table-contains-the-details-button-and-redirects-to-the-details-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on the Details button on row with id \"first\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I should be redirected to the details page of the user",
  "keyword": "Then "
});
formatter.match({
  "location": "IndexPageTests.iAccessTheLandingPageOfCOS()"
});
formatter.result({
  "duration": 978061700,
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
  "duration": 12689530200,
  "status": "passed"
});
formatter.match({
  "location": "DetailsPageTests.iShouldBeRedirectedToTheDetailsPageOfTheUser()"
});
formatter.result({
  "duration": 975062200,
  "status": "passed"
});
formatter.after({
  "duration": 34792600,
  "status": "passed"
});
formatter.after({
  "duration": 54348900,
  "status": "passed"
});
formatter.after({
  "duration": 180156800,
  "status": "passed"
});
formatter.after({
  "duration": 73015900,
  "status": "passed"
});
formatter.before({
  "duration": 2761375100,
  "status": "passed"
});
formatter.before({
  "duration": 2723589200,
  "status": "passed"
});
formatter.before({
  "duration": 3038828300,
  "status": "passed"
});
formatter.before({
  "duration": 2920252100,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Contacts table contains the details button and redirects to the Details page",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;contacts-table-contains-the-details-button-and-redirects-to-the-details-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on the Details button on row with id \"half-middle1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I should be redirected to the details page of the user",
  "keyword": "Then "
});
formatter.match({
  "location": "IndexPageTests.iAccessTheLandingPageOfCOS()"
});
formatter.result({
  "duration": 874805700,
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
formatter.result({
  "duration": 12667802600,
  "status": "passed"
});
formatter.match({
  "location": "DetailsPageTests.iShouldBeRedirectedToTheDetailsPageOfTheUser()"
});
formatter.result({
  "duration": 987481000,
  "status": "passed"
});
formatter.after({
  "duration": 31311100,
  "status": "passed"
});
formatter.after({
  "duration": 78063700,
  "status": "passed"
});
formatter.after({
  "duration": 186426600,
  "status": "passed"
});
formatter.after({
  "duration": 75905900,
  "status": "passed"
});
formatter.before({
  "duration": 2859032000,
  "status": "passed"
});
formatter.before({
  "duration": 11030680800,
  "status": "passed"
});
formatter.before({
  "duration": 2921494600,
  "status": "passed"
});
formatter.before({
  "duration": 2886326900,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Contacts table contains the details button and redirects to the Details page",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;contacts-table-contains-the-details-button-and-redirects-to-the-details-page;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on the Details button on row with id \"middle\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I should be redirected to the details page of the user",
  "keyword": "Then "
});
formatter.match({
  "location": "IndexPageTests.iAccessTheLandingPageOfCOS()"
});
formatter.result({
  "duration": 1023950900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "middle",
      "offset": 46
    }
  ],
  "location": "DetailsPageTests.iClickOnTheDetailsButtonOnRowWithId(String)"
});
