$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("DuplicatePage.feature");
formatter.feature({
  "line": 1,
  "name": "Access to the Contacts Orchestrator Solution\u0027s (COS) Duplicates page",
  "description": "As a user\r\nI want to access the duplicate page\r\nSo that I can see the list of the possible contacts duplicate available\r\nSo that I can delete and add those at my will",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-page",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 7,
      "value": "#  #Verify if is on correct site"
    },
    {
      "line": 8,
      "value": "#  Scenario: Duplicate page\u0027s title and text contains \"Duplicates\""
    },
    {
      "line": 9,
      "value": "#    Given I access the landing page of COS"
    },
    {
      "line": 10,
      "value": "#    When I click on the Duplicates"
    },
    {
      "line": 11,
      "value": "#    Then the title of the page should be \"Duplicates\""
    },
    {
      "line": 12,
      "value": "#"
    },
    {
      "line": 13,
      "value": "#  Scenario: Duplicate page\u0027s contain the appropriate number of identified duplicates"
    },
    {
      "line": 14,
      "value": "#    Given I access the landing page of COS and want to go to duplicates"
    },
    {
      "line": 15,
      "value": "#    Then I should be able to see the number of duplicate contacts possible"
    }
  ],
  "line": 17,
  "name": "Duplicate page\u0027s is coherent in its data",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-page;duplicate-page\u0027s-is-coherent-in-its-data",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "I access the landing page of COS and want to go to duplicates",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I should be able to see the contact as is in the database (\"\u003cposition\u003e\")",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-page;duplicate-page\u0027s-is-coherent-in-its-data;",
  "rows": [
    {
      "cells": [
        "position"
      ],
      "line": 21,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-page;duplicate-page\u0027s-is-coherent-in-its-data;;1"
    },
    {
      "cells": [
        "first"
      ],
      "line": 22,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-page;duplicate-page\u0027s-is-coherent-in-its-data;;2"
    },
    {
      "cells": [
        "half-middle1"
      ],
      "line": 23,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-page;duplicate-page\u0027s-is-coherent-in-its-data;;3"
    },
    {
      "cells": [
        "middle"
      ],
      "line": 24,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-page;duplicate-page\u0027s-is-coherent-in-its-data;;4"
    },
    {
      "cells": [
        "half-middle2"
      ],
      "line": 25,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-page;duplicate-page\u0027s-is-coherent-in-its-data;;5"
    },
    {
      "cells": [
        "last"
      ],
      "line": 26,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-page;duplicate-page\u0027s-is-coherent-in-its-data;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 8726829400,
  "status": "passed"
});
formatter.before({
  "duration": 8710898000,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Duplicate page\u0027s is coherent in its data",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-page;duplicate-page\u0027s-is-coherent-in-its-data;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "I access the landing page of COS and want to go to duplicates",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I should be able to see the contact as is in the database (\"first\")",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefDuplicatePage.iAccessTheLandingPageOfCOSAndWantToGoToDuplicates()"
});
formatter.result({
  "duration": 6554350200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "first",
      "offset": 60
    }
  ],
  "location": "StepsDefDuplicatePage.iShouldBeAbleToSeeTheContactAsIsInTheDatabase(String)"
});
formatter.result({
  "duration": 1612906300,
  "status": "passed"
});
formatter.after({
  "duration": 49831800,
  "status": "passed"
});
formatter.after({
  "duration": 3631666100,
  "status": "passed"
});
formatter.before({
  "duration": 4177586100,
  "status": "passed"
});
formatter.before({
  "duration": 4264883600,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Duplicate page\u0027s is coherent in its data",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-page;duplicate-page\u0027s-is-coherent-in-its-data;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "I access the landing page of COS and want to go to duplicates",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I should be able to see the contact as is in the database (\"half-middle1\")",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefDuplicatePage.iAccessTheLandingPageOfCOSAndWantToGoToDuplicates()"
});
formatter.result({
  "duration": 2786905000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "half-middle1",
      "offset": 60
    }
  ],
  "location": "StepsDefDuplicatePage.iShouldBeAbleToSeeTheContactAsIsInTheDatabase(String)"
});
formatter.result({
  "duration": 1567353200,
  "status": "passed"
});
formatter.after({
  "duration": 50306700,
  "status": "passed"
});
formatter.after({
  "duration": 370282200,
  "status": "passed"
});
formatter.before({
  "duration": 4722878800,
  "status": "passed"
});
formatter.before({
  "duration": 4420737500,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Duplicate page\u0027s is coherent in its data",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-page;duplicate-page\u0027s-is-coherent-in-its-data;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "I access the landing page of COS and want to go to duplicates",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I should be able to see the contact as is in the database (\"middle\")",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefDuplicatePage.iAccessTheLandingPageOfCOSAndWantToGoToDuplicates()"
});
formatter.result({
  "duration": 3064019200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "middle",
      "offset": 60
    }
  ],
  "location": "StepsDefDuplicatePage.iShouldBeAbleToSeeTheContactAsIsInTheDatabase(String)"
});
formatter.result({
  "duration": 1669924500,
  "status": "passed"
});
formatter.after({
  "duration": 68198300,
  "status": "passed"
});
formatter.after({
  "duration": 2093848800,
  "status": "passed"
});
formatter.before({
  "duration": 4079299500,
  "status": "passed"
});
formatter.before({
  "duration": 4044775200,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Duplicate page\u0027s is coherent in its data",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-page;duplicate-page\u0027s-is-coherent-in-its-data;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "I access the landing page of COS and want to go to duplicates",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I should be able to see the contact as is in the database (\"half-middle2\")",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefDuplicatePage.iAccessTheLandingPageOfCOSAndWantToGoToDuplicates()"
});
formatter.result({
  "duration": 2673505300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "half-middle2",
      "offset": 60
    }
  ],
  "location": "StepsDefDuplicatePage.iShouldBeAbleToSeeTheContactAsIsInTheDatabase(String)"
});
formatter.result({
  "duration": 1716860200,
  "status": "passed"
});
formatter.after({
  "duration": 51027900,
  "status": "passed"
});
formatter.after({
  "duration": 2135643700,
  "status": "passed"
});
formatter.before({
  "duration": 3994927500,
  "status": "passed"
});
formatter.before({
  "duration": 4394617400,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Duplicate page\u0027s is coherent in its data",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-page;duplicate-page\u0027s-is-coherent-in-its-data;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "I access the landing page of COS and want to go to duplicates",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I should be able to see the contact as is in the database (\"last\")",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefDuplicatePage.iAccessTheLandingPageOfCOSAndWantToGoToDuplicates()"
});
formatter.result({
  "duration": 2849438900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "last",
      "offset": 60
    }
  ],
  "location": "StepsDefDuplicatePage.iShouldBeAbleToSeeTheContactAsIsInTheDatabase(String)"
});
formatter.result({
  "duration": 1568075900,
  "status": "passed"
});
formatter.after({
  "duration": 82097300,
  "status": "passed"
});
formatter.after({
  "duration": 335120100,
  "status": "passed"
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