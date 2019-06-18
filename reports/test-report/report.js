$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("US1.feature");
formatter.feature({
  "line": 1,
  "name": "Access to the Contacts Orchestrator Solution\u0027s (COS) Landing Page",
  "description": "As a user\r\nI want to access to the URL address provided for the landing page\r\nSo that I can see the list of the contacts available",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4492104300,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 6,
      "value": "#Verify if is on correct site"
    }
  ],
  "line": 7,
  "name": "Landing page\u0027s title and text contains \"Contacts Landing Page\"",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page\u0027s-title-and-text-contains-\"contacts-landing-page\"",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "the title of the page should be \"Contacts Landing Page\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefUS1.iAccessTheLandingPageOfCOS()"
});
formatter.result({
  "duration": 2257687900,
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
  "duration": 11770700,
  "status": "passed"
});
formatter.after({
  "duration": 38031000,
  "status": "passed"
});
formatter.before({
  "duration": 3012228200,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 11,
      "value": "#Verify if all contacts were loaded"
    }
  ],
  "line": 12,
  "name": "Landing page contains all contacts available in the",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-all-contacts-available-in-the",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I should see exactly the same amount of contacts that exist in the database",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefUS1.iAccessTheLandingPageOfCOS()"
});
formatter.result({
  "duration": 2068012000,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefUS1.iShouldSeeExactlyTheSameAmountOfContactsThatExistInTheDatabase()"
});
formatter.result({
  "duration": 759138200,
  "status": "passed"
});
formatter.after({
  "duration": 32540600,
  "status": "passed"
});
formatter.before({
  "duration": 3037267500,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 16,
      "value": "#Verify if table data seems coherent with database"
    }
  ],
  "line": 17,
  "name": "Landing page seems to have data that is coherent with the database",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-seems-to-have-data-that-is-coherent-with-the-database",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I should see the contact as in the database position",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefUS1.iAccessTheLandingPageOfCOS()"
});
formatter.result({
  "duration": 2337585500,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefUS1.iShouldSeeTheContactAsInTheDatabasePosition()"
});
formatter.result({
  "duration": 951130100,
  "status": "passed"
});
formatter.after({
  "duration": 32015300,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 21,
      "value": "#Verify if table can be sortable"
    }
  ],
  "line": 22,
  "name": "Landing page contains the table and columns are sortable",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-columns-are-sortable",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I sort the column \"\u003ccolumn\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "The first column should contain the most relevant contact regarded to the sorted \"\u003ccolumn\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 27,
  "name": "",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-columns-are-sortable;",
  "rows": [
    {
      "cells": [
        "column"
      ],
      "line": 28,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-columns-are-sortable;;1"
    },
    {
      "cells": [
        "ID"
      ],
      "line": 29,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-columns-are-sortable;;2"
    },
    {
      "cells": [
        "GivenName"
      ],
      "line": 30,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-columns-are-sortable;;3"
    },
    {
      "cells": [
        "Surname"
      ],
      "line": 31,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-columns-are-sortable;;4"
    },
    {
      "cells": [
        "Phone"
      ],
      "line": 32,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-columns-are-sortable;;5"
    },
    {
      "cells": [
        "Source"
      ],
      "line": 33,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-columns-are-sortable;;6"
    },
    {
      "cells": [
        "City"
      ],
      "line": 34,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-columns-are-sortable;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2976307900,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Landing page contains the table and columns are sortable",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-columns-are-sortable;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I sort the column \"ID\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 25,
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
  "duration": 1946690000,
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
  "duration": 773947000,
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
  "duration": 153757300,
  "status": "passed"
});
formatter.after({
  "duration": 31168900,
  "status": "passed"
});
formatter.before({
  "duration": 2967264300,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Landing page contains the table and columns are sortable",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-columns-are-sortable;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I sort the column \"GivenName\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 25,
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
  "duration": 1938702100,
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
  "duration": 661715100,
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
  "duration": 150695600,
  "status": "passed"
});
formatter.after({
  "duration": 36641600,
  "status": "passed"
});
formatter.before({
  "duration": 2998443300,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Landing page contains the table and columns are sortable",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-columns-are-sortable;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I sort the column \"Surname\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 25,
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
  "duration": 1930230400,
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
  "duration": 892713800,
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
  "duration": 156085100,
  "status": "passed"
});
formatter.after({
  "duration": 31659700,
  "status": "passed"
});
formatter.before({
  "duration": 3110689400,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Landing page contains the table and columns are sortable",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-columns-are-sortable;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I sort the column \"Phone\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 25,
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
  "duration": 2221563100,
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
  "duration": 928445700,
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
  "duration": 151760400,
  "status": "passed"
});
formatter.after({
  "duration": 41228100,
  "status": "passed"
});
formatter.before({
  "duration": 3272475700,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Landing page contains the table and columns are sortable",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-columns-are-sortable;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I sort the column \"Source\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 25,
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
  "duration": 2146537300,
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
  "duration": 1147473800,
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
  "duration": 173901800,
  "status": "passed"
});
formatter.after({
  "duration": 37059400,
  "status": "passed"
});
formatter.before({
  "duration": 3089846500,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Landing page contains the table and columns are sortable",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-columns-are-sortable;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I sort the column \"City\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 25,
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
  "duration": 1846860900,
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
  "duration": 863329800,
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
  "duration": 153924400,
  "status": "passed"
});
formatter.after({
  "duration": 33156300,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 36,
      "value": "#Verify if search bar can be used to filter"
    }
  ],
  "line": 37,
  "name": "Landing page contains the table and the search bar is operational",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-search-bar-is-operational",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 38,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "I search for \"\u003csearch\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "I should only see columns that are related to what I\u0027ve just searched, related to \"\u003ctype\u003e\" (\"\u003csearch\u003e\")",
  "keyword": "Then "
});
formatter.examples({
  "line": 42,
  "name": "",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-search-bar-is-operational;",
  "rows": [
    {
      "cells": [
        "search",
        "type"
      ],
      "line": 43,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-search-bar-is-operational;;1"
    },
    {
      "cells": [
        "Viseu",
        "City"
      ],
      "line": 44,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-search-bar-is-operational;;2"
    },
    {
      "cells": [
        "Joao",
        "GivenName"
      ],
      "line": 45,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-search-bar-is-operational;;3"
    },
    {
      "cells": [
        "234216838",
        "Phone"
      ],
      "line": 46,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-search-bar-is-operational;;4"
    },
    {
      "cells": [
        "Almeida",
        "Surname"
      ],
      "line": 47,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-search-bar-is-operational;;5"
    },
    {
      "cells": [
        "Something",
        "GivenName"
      ],
      "line": 48,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-search-bar-is-operational;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3057688300,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "Landing page contains the table and the search bar is operational",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-search-bar-is-operational;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 38,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "I search for \"Viseu\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "I should only see columns that are related to what I\u0027ve just searched, related to \"City\" (\"Viseu\")",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefUS1.iAccessTheLandingPageOfCOS()"
});
formatter.result({
  "duration": 2057267400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Viseu",
      "offset": 14
    }
  ],
  "location": "StepsDefUS1.iSearchFor(String)"
});
formatter.result({
  "duration": 992335500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "City",
      "offset": 83
    },
    {
      "val": "Viseu",
      "offset": 91
    }
  ],
  "location": "StepsDefUS1.iShouldOnlySeeColumnsThatAreRelatedToWhatIVeJustSearchedRelatedTo(String,String)"
});
formatter.result({
  "duration": 257227800,
  "status": "passed"
});
formatter.after({
  "duration": 30833000,
  "status": "passed"
});
formatter.before({
  "duration": 3155446200,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "Landing page contains the table and the search bar is operational",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-search-bar-is-operational;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 38,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "I search for \"Joao\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "I should only see columns that are related to what I\u0027ve just searched, related to \"GivenName\" (\"Joao\")",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefUS1.iAccessTheLandingPageOfCOS()"
});
formatter.result({
  "duration": 1792859200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Joao",
      "offset": 14
    }
  ],
  "location": "StepsDefUS1.iSearchFor(String)"
});
formatter.result({
  "duration": 911260500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GivenName",
      "offset": 83
    },
    {
      "val": "Joao",
      "offset": 96
    }
  ],
  "location": "StepsDefUS1.iShouldOnlySeeColumnsThatAreRelatedToWhatIVeJustSearchedRelatedTo(String,String)"
});
formatter.result({
  "duration": 493497600,
  "status": "passed"
});
formatter.after({
  "duration": 33111900,
  "status": "passed"
});
formatter.before({
  "duration": 3072497800,
  "status": "passed"
});
formatter.scenario({
  "line": 46,
  "name": "Landing page contains the table and the search bar is operational",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-search-bar-is-operational;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 38,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "I search for \"234216838\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "I should only see columns that are related to what I\u0027ve just searched, related to \"Phone\" (\"234216838\")",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefUS1.iAccessTheLandingPageOfCOS()"
});
formatter.result({
  "duration": 2496609800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "234216838",
      "offset": 14
    }
  ],
  "location": "StepsDefUS1.iSearchFor(String)"
});
formatter.result({
  "duration": 134251300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Phone",
      "offset": 83
    },
    {
      "val": "234216838",
      "offset": 92
    }
  ],
  "location": "StepsDefUS1.iShouldOnlySeeColumnsThatAreRelatedToWhatIVeJustSearchedRelatedTo(String,String)"
});
formatter.result({
  "duration": 234835100,
  "status": "passed"
});
formatter.after({
  "duration": 35241000,
  "status": "passed"
});
formatter.before({
  "duration": 3148809900,
  "status": "passed"
});
formatter.scenario({
  "line": 47,
  "name": "Landing page contains the table and the search bar is operational",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-search-bar-is-operational;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 38,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "I search for \"Almeida\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "I should only see columns that are related to what I\u0027ve just searched, related to \"Surname\" (\"Almeida\")",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefUS1.iAccessTheLandingPageOfCOS()"
});
formatter.result({
  "duration": 2312164300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Almeida",
      "offset": 14
    }
  ],
  "location": "StepsDefUS1.iSearchFor(String)"
});
formatter.result({
  "duration": 851655500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Surname",
      "offset": 83
    },
    {
      "val": "Almeida",
      "offset": 94
    }
  ],
  "location": "StepsDefUS1.iShouldOnlySeeColumnsThatAreRelatedToWhatIVeJustSearchedRelatedTo(String,String)"
});
formatter.result({
  "duration": 378555800,
  "status": "passed"
});
formatter.after({
  "duration": 37575900,
  "status": "passed"
});
formatter.before({
  "duration": 3223022800,
  "status": "passed"
});
formatter.scenario({
  "line": 48,
  "name": "Landing page contains the table and the search bar is operational",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-search-bar-is-operational;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 38,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "I search for \"Something\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "I should only see columns that are related to what I\u0027ve just searched, related to \"GivenName\" (\"Something\")",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefUS1.iAccessTheLandingPageOfCOS()"
});
formatter.result({
  "duration": 2289875400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Something",
      "offset": 14
    }
  ],
  "location": "StepsDefUS1.iSearchFor(String)"
});
formatter.result({
  "duration": 704818200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GivenName",
      "offset": 83
    },
    {
      "val": "Something",
      "offset": 96
    }
  ],
  "location": "StepsDefUS1.iShouldOnlySeeColumnsThatAreRelatedToWhatIVeJustSearchedRelatedTo(String,String)"
});
formatter.result({
  "duration": 13927300,
  "status": "passed"
});
formatter.after({
  "duration": 30150700,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 50,
      "value": "#Verify if search bar and table can be sortable simultaneously"
    }
  ],
  "line": 51,
  "name": "Landing page contains the table and the search bar is operational, along with columns sortable",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-search-bar-is-operational,-along-with-columns-sortable",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 52,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 53,
  "name": "I search for \"\u003csearch\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "I sort the column \"\u003ccolumn\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "I should be able to see the sorted table by \"\u003ccolumn\u003e\", while only appearing what I searched for, related to \"\u003csearch\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 57,
  "name": "",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-search-bar-is-operational,-along-with-columns-sortable;",
  "rows": [
    {
      "cells": [
        "search",
        "column"
      ],
      "line": 58,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-search-bar-is-operational,-along-with-columns-sortable;;1"
    },
    {
      "cells": [
        "Joao",
        "ID"
      ],
      "line": 59,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-search-bar-is-operational,-along-with-columns-sortable;;2"
    },
    {
      "cells": [
        "Joao",
        "GivenName"
      ],
      "line": 60,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-search-bar-is-operational,-along-with-columns-sortable;;3"
    },
    {
      "cells": [
        "Joao",
        "Surname"
      ],
      "line": 61,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-search-bar-is-operational,-along-with-columns-sortable;;4"
    },
    {
      "cells": [
        "Joao",
        "Phone"
      ],
      "line": 62,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-search-bar-is-operational,-along-with-columns-sortable;;5"
    },
    {
      "cells": [
        "Joao",
        "City"
      ],
      "line": 63,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-search-bar-is-operational,-along-with-columns-sortable;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3090553400,
  "status": "passed"
});
formatter.scenario({
  "line": 59,
  "name": "Landing page contains the table and the search bar is operational, along with columns sortable",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-search-bar-is-operational,-along-with-columns-sortable;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 52,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 53,
  "name": "I search for \"Joao\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "I sort the column \"ID\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "I should be able to see the sorted table by \"ID\", while only appearing what I searched for, related to \"Joao\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefUS1.iAccessTheLandingPageOfCOS()"
});
formatter.result({
  "duration": 818348000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Joao",
      "offset": 14
    }
  ],
  "location": "StepsDefUS1.iSearchFor(String)"
});
formatter.result({
  "duration": 797260900,
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
  "duration": 107317400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ID",
      "offset": 45
    },
    {
      "val": "Joao",
      "offset": 104
    }
  ],
  "location": "StepsDefUS1.iShouldBeAbleToSeeTheSortedTableByWhileOnlyAppearingWhatISearchedForRelatedTo(String,String)"
});
formatter.result({
  "duration": 512154700,
  "status": "passed"
});
formatter.after({
  "duration": 34934200,
  "status": "passed"
});
formatter.before({
  "duration": 2691754500,
  "status": "passed"
});
formatter.scenario({
  "line": 60,
  "name": "Landing page contains the table and the search bar is operational, along with columns sortable",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-search-bar-is-operational,-along-with-columns-sortable;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 52,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 53,
  "name": "I search for \"Joao\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "I sort the column \"GivenName\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "I should be able to see the sorted table by \"GivenName\", while only appearing what I searched for, related to \"Joao\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefUS1.iAccessTheLandingPageOfCOS()"
});
formatter.result({
  "duration": 1132316500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Joao",
      "offset": 14
    }
  ],
  "location": "StepsDefUS1.iSearchFor(String)"
});
formatter.result({
  "duration": 1308108100,
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
  "duration": 116080400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GivenName",
      "offset": 45
    },
    {
      "val": "Joao",
      "offset": 111
    }
  ],
  "location": "StepsDefUS1.iShouldBeAbleToSeeTheSortedTableByWhileOnlyAppearingWhatISearchedForRelatedTo(String,String)"
});
formatter.result({
  "duration": 456322900,
  "status": "passed"
});
formatter.after({
  "duration": 31031800,
  "status": "passed"
});
formatter.before({
  "duration": 2771729600,
  "status": "passed"
});
formatter.scenario({
  "line": 61,
  "name": "Landing page contains the table and the search bar is operational, along with columns sortable",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-search-bar-is-operational,-along-with-columns-sortable;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 52,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 53,
  "name": "I search for \"Joao\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "I sort the column \"Surname\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "I should be able to see the sorted table by \"Surname\", while only appearing what I searched for, related to \"Joao\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefUS1.iAccessTheLandingPageOfCOS()"
});
formatter.result({
  "duration": 1119256900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Joao",
      "offset": 14
    }
  ],
  "location": "StepsDefUS1.iSearchFor(String)"
});
formatter.result({
  "duration": 637000100,
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
  "duration": 126214800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Surname",
      "offset": 45
    },
    {
      "val": "Joao",
      "offset": 109
    }
  ],
  "location": "StepsDefUS1.iShouldBeAbleToSeeTheSortedTableByWhileOnlyAppearingWhatISearchedForRelatedTo(String,String)"
});
formatter.result({
  "duration": 479936600,
  "status": "passed"
});
formatter.after({
  "duration": 30833000,
  "status": "passed"
});
formatter.before({
  "duration": 2929767500,
  "status": "passed"
});
formatter.scenario({
  "line": 62,
  "name": "Landing page contains the table and the search bar is operational, along with columns sortable",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-search-bar-is-operational,-along-with-columns-sortable;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 52,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 53,
  "name": "I search for \"Joao\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "I sort the column \"Phone\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "I should be able to see the sorted table by \"Phone\", while only appearing what I searched for, related to \"Joao\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefUS1.iAccessTheLandingPageOfCOS()"
});
formatter.result({
  "duration": 1094489300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Joao",
      "offset": 14
    }
  ],
  "location": "StepsDefUS1.iSearchFor(String)"
});
formatter.result({
  "duration": 809627200,
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
  "duration": 150819200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Phone",
      "offset": 45
    },
    {
      "val": "Joao",
      "offset": 107
    }
  ],
  "location": "StepsDefUS1.iShouldBeAbleToSeeTheSortedTableByWhileOnlyAppearingWhatISearchedForRelatedTo(String,String)"
});
formatter.result({
  "duration": 486524700,
  "status": "passed"
});
formatter.after({
  "duration": 30970300,
  "status": "passed"
});
formatter.before({
  "duration": 2944262600,
  "status": "passed"
});
formatter.scenario({
  "line": 63,
  "name": "Landing page contains the table and the search bar is operational, along with columns sortable",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-search-bar-is-operational,-along-with-columns-sortable;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 52,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 53,
  "name": "I search for \"Joao\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "I sort the column \"City\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "I should be able to see the sorted table by \"City\", while only appearing what I searched for, related to \"Joao\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefUS1.iAccessTheLandingPageOfCOS()"
});
formatter.result({
  "duration": 1461816400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Joao",
      "offset": 14
    }
  ],
  "location": "StepsDefUS1.iSearchFor(String)"
});
formatter.result({
  "duration": 853264300,
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
  "duration": 157473500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "City",
      "offset": 45
    },
    {
      "val": "Joao",
      "offset": 106
    }
  ],
  "location": "StepsDefUS1.iShouldBeAbleToSeeTheSortedTableByWhileOnlyAppearingWhatISearchedForRelatedTo(String,String)"
});
formatter.result({
  "duration": 460525100,
  "status": "passed"
});
formatter.after({
  "duration": 32751800,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 65,
      "value": "#Verify if pagination works"
    }
  ],
  "line": 66,
  "name": "Landing page contains the table and the pagination can be used",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-pagination-can-be-used",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 67,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 68,
  "name": "I increase the pagination to \"\u003cpagination\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 69,
  "name": "I should be able to see the number of contacts related to \"\u003cpagination\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 71,
  "name": "",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-pagination-can-be-used;",
  "rows": [
    {
      "cells": [
        "pagination"
      ],
      "line": 72,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-pagination-can-be-used;;1"
    },
    {
      "cells": [
        "10"
      ],
      "line": 73,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-pagination-can-be-used;;2"
    },
    {
      "cells": [
        "25"
      ],
      "line": 74,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-pagination-can-be-used;;3"
    },
    {
      "cells": [
        "50"
      ],
      "line": 75,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-pagination-can-be-used;;4"
    },
    {
      "cells": [
        "100"
      ],
      "line": 76,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-pagination-can-be-used;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3099983000,
  "status": "passed"
});
formatter.scenario({
  "line": 73,
  "name": "Landing page contains the table and the pagination can be used",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-pagination-can-be-used;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 67,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 68,
  "name": "I increase the pagination to \"10\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 69,
  "name": "I should be able to see the number of contacts related to \"10\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefUS1.iAccessTheLandingPageOfCOS()"
});
formatter.result({
  "duration": 2177337500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 30
    }
  ],
  "location": "StepsDefUS1.iIncreaseThePaginationTo(String)"
});
formatter.result({
  "duration": 1865477300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 59
    }
  ],
  "location": "StepsDefUS1.iShouldBeAbleToSeeTheNumberOfContactsRelatedTo(String)"
});
formatter.result({
  "duration": 92454700,
  "status": "passed"
});
formatter.after({
  "duration": 91301800,
  "status": "passed"
});
formatter.before({
  "duration": 3207574900,
  "status": "passed"
});
formatter.scenario({
  "line": 74,
  "name": "Landing page contains the table and the pagination can be used",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-pagination-can-be-used;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 67,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 68,
  "name": "I increase the pagination to \"25\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 69,
  "name": "I should be able to see the number of contacts related to \"25\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefUS1.iAccessTheLandingPageOfCOS()"
});
formatter.result({
  "duration": 1841359900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "25",
      "offset": 30
    }
  ],
  "location": "StepsDefUS1.iIncreaseThePaginationTo(String)"
});
formatter.result({
  "duration": 1049781200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "25",
      "offset": 59
    }
  ],
  "location": "StepsDefUS1.iShouldBeAbleToSeeTheNumberOfContactsRelatedTo(String)"
});
formatter.result({
  "duration": 48038800,
  "status": "passed"
});
formatter.after({
  "duration": 42096900,
  "status": "passed"
});
formatter.before({
  "duration": 3125141300,
  "status": "passed"
});
formatter.scenario({
  "line": 75,
  "name": "Landing page contains the table and the pagination can be used",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-pagination-can-be-used;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 67,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 68,
  "name": "I increase the pagination to \"50\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 69,
  "name": "I should be able to see the number of contacts related to \"50\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefUS1.iAccessTheLandingPageOfCOS()"
});
formatter.result({
  "duration": 1399047100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 30
    }
  ],
  "location": "StepsDefUS1.iIncreaseThePaginationTo(String)"
});
formatter.result({
  "duration": 1119713100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 59
    }
  ],
  "location": "StepsDefUS1.iShouldBeAbleToSeeTheNumberOfContactsRelatedTo(String)"
});
formatter.result({
  "duration": 85589600,
  "status": "passed"
});
formatter.after({
  "duration": 91613800,
  "status": "passed"
});
formatter.before({
  "duration": 3705091600,
  "status": "passed"
});
formatter.scenario({
  "line": 76,
  "name": "Landing page contains the table and the pagination can be used",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-pagination-can-be-used;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 67,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 68,
  "name": "I increase the pagination to \"100\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 69,
  "name": "I should be able to see the number of contacts related to \"100\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefUS1.iAccessTheLandingPageOfCOS()"
});
formatter.result({
  "duration": 2225405200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 30
    }
  ],
  "location": "StepsDefUS1.iIncreaseThePaginationTo(String)"
});
formatter.result({
  "duration": 1299976700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 59
    }
  ],
  "location": "StepsDefUS1.iShouldBeAbleToSeeTheNumberOfContactsRelatedTo(String)"
});
formatter.result({
  "duration": 86781600,
  "status": "passed"
});
formatter.after({
  "duration": 354593900,
  "status": "passed"
});
formatter.before({
  "duration": 3886960900,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 78,
      "value": "#Verify if sources is filled"
    }
  ],
  "line": 79,
  "name": "Landing page contains the possible sources",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-possible-sources",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 80,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 81,
  "name": "I should be able to see the possible sources",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefUS1.iAccessTheLandingPageOfCOS()"
});
formatter.result({
  "duration": 2103862500,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefUS1.iShouldBeAbleToSeeThePossibleSources()"
});
formatter.result({
  "duration": 11339677900,
  "status": "passed"
});
formatter.after({
  "duration": 32636500,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 83,
      "value": "#Verify if sources are working"
    }
  ],
  "line": 84,
  "name": "Landing page contains the selector related to the source",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-selector-related-to-the-source",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 85,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 86,
  "name": "I want to filter for a \"\u003csource\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 87,
  "name": "I should only be able to see the contacts of that specific \"\u003csource\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 89,
  "name": "",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-selector-related-to-the-source;",
  "rows": [
    {
      "cells": [
        "source"
      ],
      "line": 90,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-selector-related-to-the-source;;1"
    },
    {
      "cells": [
        "All"
      ],
      "line": 91,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-selector-related-to-the-source;;2"
    },
    {
      "cells": [
        "Twitter"
      ],
      "line": 92,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-selector-related-to-the-source;;3"
    },
    {
      "cells": [
        "Facebook"
      ],
      "line": 93,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-selector-related-to-the-source;;4"
    },
    {
      "cells": [
        "LinkedIn"
      ],
      "line": 94,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-selector-related-to-the-source;;5"
    },
    {
      "cells": [
        "Skype"
      ],
      "line": 95,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-selector-related-to-the-source;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3217304200,
  "status": "passed"
});
formatter.scenario({
  "line": 91,
  "name": "Landing page contains the selector related to the source",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-selector-related-to-the-source;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 85,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 86,
  "name": "I want to filter for a \"All\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 87,
  "name": "I should only be able to see the contacts of that specific \"All\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefUS1.iAccessTheLandingPageOfCOS()"
});
formatter.result({
  "duration": 2056175500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "All",
      "offset": 24
    }
  ],
  "location": "StepsDefUS1.iWantToFilterForA(String)"
});
formatter.result({
  "duration": 11198634300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "All",
      "offset": 60
    }
  ],
  "location": "StepsDefUS1.iShouldOnlyBeAbleToSeeTheContactsOfThatSpecific(String)"
});
formatter.result({
  "duration": 692840000,
  "status": "passed"
});
formatter.after({
  "duration": 31436300,
  "status": "passed"
});
formatter.before({
  "duration": 3220274600,
  "status": "passed"
});
formatter.scenario({
  "line": 92,
  "name": "Landing page contains the selector related to the source",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-selector-related-to-the-source;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 85,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 86,
  "name": "I want to filter for a \"Twitter\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 87,
  "name": "I should only be able to see the contacts of that specific \"Twitter\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefUS1.iAccessTheLandingPageOfCOS()"
});
formatter.result({
  "duration": 1539980600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Twitter",
      "offset": 24
    }
  ],
  "location": "StepsDefUS1.iWantToFilterForA(String)"
});
formatter.result({
  "duration": 855843100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Twitter",
      "offset": 60
    }
  ],
  "location": "StepsDefUS1.iShouldOnlyBeAbleToSeeTheContactsOfThatSpecific(String)"
});
formatter.result({
  "duration": 219906700,
  "status": "passed"
});
formatter.after({
  "duration": 32779000,
  "status": "passed"
});
formatter.before({
  "duration": 3276364100,
  "status": "passed"
});
formatter.scenario({
  "line": 93,
  "name": "Landing page contains the selector related to the source",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-selector-related-to-the-source;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 85,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 86,
  "name": "I want to filter for a \"Facebook\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 87,
  "name": "I should only be able to see the contacts of that specific \"Facebook\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefUS1.iAccessTheLandingPageOfCOS()"
});
formatter.result({
  "duration": 1735579500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Facebook",
      "offset": 24
    }
  ],
  "location": "StepsDefUS1.iWantToFilterForA(String)"
});
formatter.result({
  "duration": 1009207600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Facebook",
      "offset": 60
    }
  ],
  "location": "StepsDefUS1.iShouldOnlyBeAbleToSeeTheContactsOfThatSpecific(String)"
});
formatter.result({
  "duration": 287658300,
  "status": "passed"
});
formatter.after({
  "duration": 37870200,
  "status": "passed"
});
formatter.before({
  "duration": 3051160000,
  "status": "passed"
});
formatter.scenario({
  "line": 94,
  "name": "Landing page contains the selector related to the source",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-selector-related-to-the-source;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 85,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 86,
  "name": "I want to filter for a \"LinkedIn\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 87,
  "name": "I should only be able to see the contacts of that specific \"LinkedIn\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefUS1.iAccessTheLandingPageOfCOS()"
});
formatter.result({
  "duration": 3418471400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LinkedIn",
      "offset": 24
    }
  ],
  "location": "StepsDefUS1.iWantToFilterForA(String)"
});
formatter.result({
  "duration": 215875900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LinkedIn",
      "offset": 60
    }
  ],
  "location": "StepsDefUS1.iShouldOnlyBeAbleToSeeTheContactsOfThatSpecific(String)"
});
formatter.result({
  "duration": 527190300,
  "status": "passed"
});
formatter.after({
  "duration": 58317300,
  "status": "passed"
});
formatter.before({
  "duration": 3038631600,
  "status": "passed"
});
formatter.scenario({
  "line": 95,
  "name": "Landing page contains the selector related to the source",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-selector-related-to-the-source;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 85,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 86,
  "name": "I want to filter for a \"Skype\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 87,
  "name": "I should only be able to see the contacts of that specific \"Skype\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefUS1.iAccessTheLandingPageOfCOS()"
});
formatter.result({
  "duration": 2210598200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Skype",
      "offset": 24
    }
  ],
  "location": "StepsDefUS1.iWantToFilterForA(String)"
});
formatter.result({
  "duration": 1099958500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Skype",
      "offset": 60
    }
  ],
  "location": "StepsDefUS1.iShouldOnlyBeAbleToSeeTheContactsOfThatSpecific(String)"
});
formatter.result({
  "duration": 907563000,
  "status": "passed"
});
formatter.after({
  "duration": 32936500,
  "status": "passed"
});
formatter.before({
  "duration": 3179829300,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 97,
      "value": "#Verify if details button is working"
    },
    {
      "line": 100,
      "value": "#Verify if duplicates button is working"
    }
  ],
  "line": 101,
  "name": "Landing page contains the duplicate button and redirects to the correct page",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-duplicate-button-and-redirects-to-the-correct-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 102,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 103,
  "name": "I click on the Duplicates",
  "keyword": "When "
});
formatter.step({
  "line": 104,
  "name": "I should be redirected to the duplicate pages",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefUS1.iAccessTheLandingPageOfCOS()"
});
formatter.result({
  "duration": 1767191800,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefUS1.iClickOnTheDuplicates()"
});
formatter.result({
  "duration": 232382800,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefUS1.iShouldBeRedirectedToTheDuplicatePages()"
});
formatter.result({
  "duration": 4777400,
  "status": "passed"
});
formatter.after({
  "duration": 38707200,
  "status": "passed"
});
});