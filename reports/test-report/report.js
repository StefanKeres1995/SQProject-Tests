$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("US1.feature");
formatter.feature({
  "line": 1,
  "name": "Access to the Contacts Orchestrator Solution\u0027s (COS) Landing Page",
  "description": "As a user\r\nI want to access to the URL address provided for the landing page\r\nSo that I can see the list of the contacts available",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4063333600,
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
  "duration": 1203838600,
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
  "duration": 9671600,
  "status": "passed"
});
formatter.after({
  "duration": 53738300,
  "status": "passed"
});
formatter.before({
  "duration": 2668918200,
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
  "duration": 820660200,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefUS1.iShouldSeeExactlyTheSameAmountOfContactsThatExistInTheDatabase()"
});
formatter.result({
  "duration": 693196900,
  "status": "passed"
});
formatter.after({
  "duration": 40340100,
  "status": "passed"
});
formatter.before({
  "duration": 2641623700,
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
  "duration": 707234100,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefUS1.iShouldSeeTheSameNameAsInTheDatabasePosition()"
});
formatter.result({
  "duration": 846726900,
  "status": "passed"
});
formatter.after({
  "duration": 37667800,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "Landing page contains the table and columns are sortable",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-columns-are-sortable",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I sort the column \"\u003ccolumn\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "The first column should contain the most relevant contact regarded to the sorted \"\u003ccolumn\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-columns-are-sortable;",
  "rows": [
    {
      "cells": [
        "column",
        "column"
      ],
      "line": 23,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-columns-are-sortable;;1"
    },
    {
      "cells": [
        "ID",
        "-1"
      ],
      "line": 24,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-columns-are-sortable;;2"
    },
    {
      "cells": [
        "GivenName",
        "4"
      ],
      "line": 25,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-columns-are-sortable;;3"
    },
    {
      "cells": [
        "Surname",
        "11"
      ],
      "line": 26,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-columns-are-sortable;;4"
    },
    {
      "cells": [
        "Phone",
        "7"
      ],
      "line": 27,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-columns-are-sortable;;5"
    },
    {
      "cells": [
        "Source",
        "9"
      ],
      "line": 28,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-columns-are-sortable;;6"
    },
    {
      "cells": [
        "City",
        "1"
      ],
      "line": 29,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-columns-are-sortable;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2637658200,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Landing page contains the table and columns are sortable",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-columns-are-sortable;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I sort the column \"ID\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "The first column should contain the most relevant contact regarded to the sorted \"ID\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefUS1.iAccessTheLandingPageOfCOS()"
});
formatter.result({
  "duration": 850262700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ID",
      "offset": 19
    }
  ],
  "location": "StepsDefUS1.iSortTheColumn(String)"
});
formatter.result({
  "duration": 767229300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ID",
      "offset": 82
    }
  ],
  "location": "StepsDefUS1.theFirstColumnShouldContainTheMostRelevantContactRegardedToTheSorted(String)"
});
formatter.result({
  "duration": 131365200,
  "status": "passed"
});
formatter.after({
  "duration": 35297000,
  "status": "passed"
});
formatter.before({
  "duration": 2918732600,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Landing page contains the table and columns are sortable",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-columns-are-sortable;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I sort the column \"GivenName\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "The first column should contain the most relevant contact regarded to the sorted \"GivenName\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefUS1.iAccessTheLandingPageOfCOS()"
});
formatter.result({
  "duration": 1149365100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GivenName",
      "offset": 19
    }
  ],
  "location": "StepsDefUS1.iSortTheColumn(String)"
});
formatter.result({
  "duration": 645057800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GivenName",
      "offset": 82
    }
  ],
  "location": "StepsDefUS1.theFirstColumnShouldContainTheMostRelevantContactRegardedToTheSorted(String)"
});
formatter.result({
  "duration": 140101200,
  "status": "passed"
});
formatter.after({
  "duration": 34984300,
  "status": "passed"
});
formatter.before({
  "duration": 2817732900,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Landing page contains the table and columns are sortable",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-columns-are-sortable;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I sort the column \"Surname\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "The first column should contain the most relevant contact regarded to the sorted \"Surname\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefUS1.iAccessTheLandingPageOfCOS()"
});
formatter.result({
  "duration": 891279300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Surname",
      "offset": 19
    }
  ],
  "location": "StepsDefUS1.iSortTheColumn(String)"
});
formatter.result({
  "duration": 777923700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Surname",
      "offset": 82
    }
  ],
  "location": "StepsDefUS1.theFirstColumnShouldContainTheMostRelevantContactRegardedToTheSorted(String)"
});
formatter.result({
  "duration": 131932800,
  "status": "passed"
});
formatter.after({
  "duration": 31580500,
  "status": "passed"
});
formatter.before({
  "duration": 2989844000,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Landing page contains the table and columns are sortable",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-columns-are-sortable;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I sort the column \"Phone\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "The first column should contain the most relevant contact regarded to the sorted \"Phone\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefUS1.iAccessTheLandingPageOfCOS()"
});
formatter.result({
  "duration": 873229200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Phone",
      "offset": 19
    }
  ],
  "location": "StepsDefUS1.iSortTheColumn(String)"
});
formatter.result({
  "duration": 828407000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Phone",
      "offset": 82
    }
  ],
  "location": "StepsDefUS1.theFirstColumnShouldContainTheMostRelevantContactRegardedToTheSorted(String)"
});
formatter.result({
  "duration": 139038800,
  "status": "passed"
});
formatter.after({
  "duration": 32833100,
  "status": "passed"
});
formatter.before({
  "duration": 2984852500,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Landing page contains the table and columns are sortable",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-columns-are-sortable;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I sort the column \"Source\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "The first column should contain the most relevant contact regarded to the sorted \"Source\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefUS1.iAccessTheLandingPageOfCOS()"
});
formatter.result({
  "duration": 999293000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Source",
      "offset": 19
    }
  ],
  "location": "StepsDefUS1.iSortTheColumn(String)"
});
formatter.result({
  "duration": 787544300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Source",
      "offset": 82
    }
  ],
  "location": "StepsDefUS1.theFirstColumnShouldContainTheMostRelevantContactRegardedToTheSorted(String)"
});
formatter.result({
  "duration": 127990500,
  "status": "passed"
});
formatter.after({
  "duration": 34399000,
  "status": "passed"
});
formatter.before({
  "duration": 3141883000,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Landing page contains the table and columns are sortable",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-columns-are-sortable;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I sort the column \"City\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "The first column should contain the most relevant contact regarded to the sorted \"City\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefUS1.iAccessTheLandingPageOfCOS()"
});
formatter.result({
  "duration": 1116933700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "City",
      "offset": 19
    }
  ],
  "location": "StepsDefUS1.iSortTheColumn(String)"
});
formatter.result({
  "duration": 856841700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "City",
      "offset": 82
    }
  ],
  "location": "StepsDefUS1.theFirstColumnShouldContainTheMostRelevantContactRegardedToTheSorted(String)"
});
formatter.result({
  "duration": 136345200,
  "status": "passed"
});
formatter.after({
  "duration": 49932600,
  "status": "passed"
});
});