$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("US1.feature");
formatter.feature({
  "line": 1,
  "name": "Access to the Contacts Orchestrator Solution\u0027s (COS) Landing Page",
  "description": "As a user\r\nI want to access to the URL address provided for the landing page\r\nSo that I can see the list of the contacts available",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 9344922100,
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
  "duration": 6629580600,
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
  "duration": 13079600,
  "status": "passed"
});
formatter.after({
  "duration": 115902900,
  "status": "passed"
});
formatter.before({
  "duration": 5316095100,
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
  "duration": 4132555100,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefUS1.iShouldSeeExactlyTheSameAmountOfContactsThatExistInTheDatabase()"
});
formatter.result({
  "duration": 12413075400,
  "status": "passed"
});
formatter.after({
  "duration": 128168700,
  "status": "passed"
});
formatter.before({
  "duration": 5089419200,
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
  "name": "I should see the contact as in the database position",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefUS1.iAccessTheLandingPageOfCOS()"
});
formatter.result({
  "duration": 2903005400,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefUS1.iShouldSeeTheContactAsInTheDatabasePosition()"
});
formatter.result({
  "duration": 1019574200,
  "status": "passed"
});
formatter.after({
  "duration": 40191100,
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
        "column"
      ],
      "line": 23,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-columns-are-sortable;;1"
    },
    {
      "cells": [
        "ID"
      ],
      "line": 24,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-columns-are-sortable;;2"
    },
    {
      "cells": [
        "GivenName"
      ],
      "line": 25,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-columns-are-sortable;;3"
    },
    {
      "cells": [
        "Surname"
      ],
      "line": 26,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-columns-are-sortable;;4"
    },
    {
      "cells": [
        "Phone"
      ],
      "line": 27,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-columns-are-sortable;;5"
    },
    {
      "cells": [
        "Source"
      ],
      "line": 28,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-columns-are-sortable;;6"
    },
    {
      "cells": [
        "City"
      ],
      "line": 29,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-columns-are-sortable;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4621841400,
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
  "duration": 4331091500,
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
  "duration": 916902000,
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
  "duration": 178600100,
  "status": "passed"
});
formatter.after({
  "duration": 84416600,
  "status": "passed"
});
formatter.before({
  "duration": 5909316400,
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
  "duration": 2794832900,
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
  "duration": 732545500,
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
  "duration": 151997900,
  "status": "passed"
});
formatter.after({
  "duration": 41004700,
  "status": "passed"
});
formatter.before({
  "duration": 3494345800,
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
  "duration": 2590524800,
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
  "duration": 992168500,
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
  "duration": 191487200,
  "status": "passed"
});
formatter.after({
  "duration": 32808700,
  "status": "passed"
});
formatter.before({
  "duration": 3189880600,
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
  "duration": 1089109900,
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
  "duration": 1073829600,
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
  "duration": 261554200,
  "status": "passed"
});
formatter.after({
  "duration": 136739200,
  "status": "passed"
});
formatter.before({
  "duration": 4718406500,
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
  "duration": 1959669200,
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
  "duration": 1597736600,
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
  "duration": 235679100,
  "status": "passed"
});
formatter.after({
  "duration": 90628200,
  "status": "passed"
});
formatter.before({
  "duration": 3301841700,
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
  "duration": 1781499400,
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
  "duration": 1258466900,
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
  "duration": 427100200,
  "status": "passed"
});
formatter.after({
  "duration": 115602300,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 31,
  "name": "Landing page contains the table and the search bar is operational",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-search-bar-is-operational",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 32,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "I search for \"\u003csearch\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "I should only see columns that are related to what I\u0027ve just searched, related to \"\u003ctype\u003e\" (\"\u003csearch\u003e\")",
  "keyword": "Then "
});
formatter.examples({
  "line": 36,
  "name": "",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-search-bar-is-operational;",
  "rows": [
    {
      "cells": [
        "search",
        "type"
      ],
      "line": 37,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-search-bar-is-operational;;1"
    },
    {
      "cells": [
        "Viseu",
        "City"
      ],
      "line": 38,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-search-bar-is-operational;;2"
    },
    {
      "cells": [
        "Joao",
        "GivenName"
      ],
      "line": 39,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-search-bar-is-operational;;3"
    },
    {
      "cells": [
        "234216838",
        "Phone"
      ],
      "line": 40,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-search-bar-is-operational;;4"
    },
    {
      "cells": [
        "Almeida",
        "Surname"
      ],
      "line": 41,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-search-bar-is-operational;;5"
    },
    {
      "cells": [
        "Something",
        "GivenName"
      ],
      "line": 42,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-search-bar-is-operational;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3148440700,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Landing page contains the table and the search bar is operational",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-search-bar-is-operational;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 32,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "I search for \"Viseu\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 34,
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
  "duration": 928826200,
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
  "duration": 1096043100,
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
  "duration": 365789000,
  "status": "passed"
});
formatter.after({
  "duration": 82523000,
  "status": "passed"
});
formatter.before({
  "duration": 3055517500,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Landing page contains the table and the search bar is operational",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-search-bar-is-operational;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 32,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "I search for \"Joao\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 34,
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
  "duration": 949082300,
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
  "duration": 817087500,
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
  "duration": 516901500,
  "status": "passed"
});
formatter.after({
  "duration": 35661600,
  "status": "passed"
});
formatter.before({
  "duration": 2786248800,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "Landing page contains the table and the search bar is operational",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-search-bar-is-operational;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 32,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "I search for \"234216838\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 34,
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
  "duration": 892285900,
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
  "duration": 976228400,
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
  "duration": 309820500,
  "status": "passed"
});
formatter.after({
  "duration": 53042200,
  "status": "passed"
});
formatter.before({
  "duration": 2921552400,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Landing page contains the table and the search bar is operational",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-search-bar-is-operational;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 32,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "I search for \"Almeida\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 34,
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
  "duration": 813056500,
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
  "duration": 790643000,
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
  "duration": 374192600,
  "status": "passed"
});
formatter.after({
  "duration": 31383000,
  "status": "passed"
});
formatter.before({
  "duration": 2793958400,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "Landing page contains the table and the search bar is operational",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-search-bar-is-operational;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 32,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "I search for \"Something\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 34,
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
  "duration": 775122200,
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
  "duration": 815570100,
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
  "duration": 22696100,
  "status": "passed"
});
formatter.after({
  "duration": 47678600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 44,
  "name": "Landing page contains the table and the search bar is operational, along with columns sortable",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-search-bar-is-operational,-along-with-columns-sortable",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 45,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 46,
  "name": "I search for \"\u003csearch\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "I sort the column \"\u003ccolumn\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I should be able to see the sorted table by \"\u003ccolumn\u003e\", while only appearing what I searched for, related to \"\u003csearch\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 50,
  "name": "",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-search-bar-is-operational,-along-with-columns-sortable;",
  "rows": [
    {
      "cells": [
        "search",
        "column"
      ],
      "line": 51,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-search-bar-is-operational,-along-with-columns-sortable;;1"
    },
    {
      "cells": [
        "Joao",
        "ID"
      ],
      "line": 52,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-search-bar-is-operational,-along-with-columns-sortable;;2"
    },
    {
      "cells": [
        "Joao",
        "GivenName"
      ],
      "line": 53,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-search-bar-is-operational,-along-with-columns-sortable;;3"
    },
    {
      "cells": [
        "Joao",
        "Surname"
      ],
      "line": 54,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-search-bar-is-operational,-along-with-columns-sortable;;4"
    },
    {
      "cells": [
        "Joao",
        "Phone"
      ],
      "line": 55,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-search-bar-is-operational,-along-with-columns-sortable;;5"
    },
    {
      "cells": [
        "Joao",
        "City"
      ],
      "line": 56,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-search-bar-is-operational,-along-with-columns-sortable;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2765200100,
  "status": "passed"
});
formatter.scenario({
  "line": 52,
  "name": "Landing page contains the table and the search bar is operational, along with columns sortable",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-search-bar-is-operational,-along-with-columns-sortable;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 45,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 46,
  "name": "I search for \"Joao\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "I sort the column \"ID\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 48,
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
  "duration": 923965300,
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
  "duration": 748800200,
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
  "duration": 102611100,
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
  "duration": 500722300,
  "status": "passed"
});
formatter.after({
  "duration": 50029500,
  "status": "passed"
});
formatter.before({
  "duration": 2659581300,
  "status": "passed"
});
formatter.scenario({
  "line": 53,
  "name": "Landing page contains the table and the search bar is operational, along with columns sortable",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-search-bar-is-operational,-along-with-columns-sortable;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 45,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 46,
  "name": "I search for \"Joao\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "I sort the column \"GivenName\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 48,
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
  "duration": 916765600,
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
  "duration": 750223900,
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
  "duration": 108692200,
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
  "duration": 471952900,
  "status": "passed"
});
formatter.after({
  "duration": 34004600,
  "status": "passed"
});
formatter.before({
  "duration": 2884760200,
  "status": "passed"
});
formatter.scenario({
  "line": 54,
  "name": "Landing page contains the table and the search bar is operational, along with columns sortable",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-search-bar-is-operational,-along-with-columns-sortable;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 45,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 46,
  "name": "I search for \"Joao\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "I sort the column \"Surname\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 48,
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
  "duration": 839884600,
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
  "duration": 758336500,
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
  "duration": 113174900,
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
  "duration": 478520900,
  "status": "passed"
});
formatter.after({
  "duration": 40868400,
  "status": "passed"
});
formatter.before({
  "duration": 2821980300,
  "status": "passed"
});
formatter.scenario({
  "line": 55,
  "name": "Landing page contains the table and the search bar is operational, along with columns sortable",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-search-bar-is-operational,-along-with-columns-sortable;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 45,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 46,
  "name": "I search for \"Joao\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "I sort the column \"Phone\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 48,
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
  "duration": 1015353800,
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
  "duration": 734618600,
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
  "duration": 140152800,
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
  "duration": 467108200,
  "status": "passed"
});
formatter.after({
  "duration": 32169100,
  "status": "passed"
});
formatter.before({
  "duration": 2736274200,
  "status": "passed"
});
formatter.scenario({
  "line": 56,
  "name": "Landing page contains the table and the search bar is operational, along with columns sortable",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-search-bar-is-operational,-along-with-columns-sortable;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 45,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 46,
  "name": "I search for \"Joao\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "I sort the column \"City\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 48,
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
  "duration": 799530500,
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
  "duration": 733421100,
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
  "duration": 161895800,
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
  "duration": 466667300,
  "status": "passed"
});
formatter.after({
  "duration": 32424800,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 58,
  "name": "Landing page contains the table and the pagination can be used",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-pagination-can-be-used",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 59,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 60,
  "name": "I should be able to increase the pagination to \"\u003cpagination\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 61,
  "name": "",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-pagination-can-be-used;",
  "rows": [
    {
      "cells": [
        "pagination"
      ],
      "line": 62,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-pagination-can-be-used;;1"
    },
    {
      "cells": [
        "10"
      ],
      "line": 63,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-pagination-can-be-used;;2"
    },
    {
      "cells": [
        "25"
      ],
      "line": 64,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-pagination-can-be-used;;3"
    },
    {
      "cells": [
        "50"
      ],
      "line": 65,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-pagination-can-be-used;;4"
    },
    {
      "cells": [
        "100"
      ],
      "line": 66,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-pagination-can-be-used;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2768600300,
  "status": "passed"
});
formatter.scenario({
  "line": 63,
  "name": "Landing page contains the table and the pagination can be used",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-pagination-can-be-used;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 59,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 60,
  "name": "I should be able to increase the pagination to \"10\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefUS1.iAccessTheLandingPageOfCOS()"
});
formatter.result({
  "duration": 997538000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 48
    }
  ],
  "location": "StepsDefUS1.iShouldBeAbleToIncreaseThePaginationTo(String)"
});
formatter.result({
  "duration": 748232200,
  "status": "passed"
});
formatter.after({
  "duration": 30887400,
  "status": "passed"
});
formatter.before({
  "duration": 2729216600,
  "status": "passed"
});
formatter.scenario({
  "line": 64,
  "name": "Landing page contains the table and the pagination can be used",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-pagination-can-be-used;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 59,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 60,
  "name": "I should be able to increase the pagination to \"25\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefUS1.iAccessTheLandingPageOfCOS()"
});
formatter.result({
  "duration": 687875800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "25",
      "offset": 48
    }
  ],
  "location": "StepsDefUS1.iShouldBeAbleToIncreaseThePaginationTo(String)"
});
formatter.result({
  "duration": 765294600,
  "status": "passed"
});
formatter.after({
  "duration": 34700300,
  "status": "passed"
});
formatter.before({
  "duration": 2744360300,
  "status": "passed"
});
formatter.scenario({
  "line": 65,
  "name": "Landing page contains the table and the pagination can be used",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-pagination-can-be-used;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 59,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 60,
  "name": "I should be able to increase the pagination to \"50\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefUS1.iAccessTheLandingPageOfCOS()"
});
formatter.result({
  "duration": 827994500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 48
    }
  ],
  "location": "StepsDefUS1.iShouldBeAbleToIncreaseThePaginationTo(String)"
});
formatter.result({
  "duration": 799148800,
  "status": "passed"
});
formatter.after({
  "duration": 33447100,
  "status": "passed"
});
formatter.before({
  "duration": 2906730200,
  "status": "passed"
});
formatter.scenario({
  "line": 66,
  "name": "Landing page contains the table and the pagination can be used",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-pagination-can-be-used;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 59,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 60,
  "name": "I should be able to increase the pagination to \"100\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefUS1.iAccessTheLandingPageOfCOS()"
});
formatter.result({
  "duration": 800240700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 48
    }
  ],
  "location": "StepsDefUS1.iShouldBeAbleToIncreaseThePaginationTo(String)"
});
formatter.result({
  "duration": 865831700,
  "status": "passed"
});
formatter.after({
  "duration": 42926200,
  "status": "passed"
});
});