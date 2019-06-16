$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("US1.feature");
formatter.feature({
  "line": 1,
  "name": "Access to the Contacts Orchestrator Solution\u0027s (COS) Landing Page",
  "description": "As a user\r\nI want to access to the URL address provided for the landing page\r\nSo that I can see the list of the contacts available",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6625768000,
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
  "duration": 1728062501,
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
  "duration": 37537500,
  "status": "passed"
});
formatter.after({
  "duration": 138550200,
  "status": "passed"
});
formatter.before({
  "duration": 4180640700,
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
  "duration": 1793103300,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefUS1.iShouldSeeExactlyTheSameAmountOfContactsThatExistInTheDatabase()"
});
formatter.result({
  "duration": 998572701,
  "status": "passed"
});
formatter.after({
  "duration": 41480300,
  "status": "passed"
});
formatter.before({
  "duration": 3446747000,
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
  "duration": 1012605300,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefUS1.iShouldSeeTheContactAsInTheDatabasePosition()"
});
formatter.result({
  "duration": 1613420701,
  "status": "passed"
});
formatter.after({
  "duration": 78894399,
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
  "duration": 4807294200,
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
  "duration": 1251597000,
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
  "duration": 1005746500,
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
  "duration": 156429600,
  "status": "passed"
});
formatter.after({
  "duration": 73778000,
  "status": "passed"
});
formatter.before({
  "duration": 4274092900,
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
  "duration": 1635169699,
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
  "duration": 898643601,
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
  "duration": 173895300,
  "status": "passed"
});
formatter.after({
  "duration": 38820500,
  "status": "passed"
});
formatter.before({
  "duration": 3733371800,
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
  "duration": 1648488001,
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
  "duration": 784740401,
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
  "duration": 165067399,
  "status": "passed"
});
formatter.after({
  "duration": 45399900,
  "status": "passed"
});
formatter.before({
  "duration": 3357599499,
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
  "duration": 23466229201,
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
  "duration": 759005200,
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
  "duration": 160490000,
  "status": "passed"
});
formatter.after({
  "duration": 44414100,
  "status": "passed"
});
formatter.before({
  "duration": 3567951800,
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
  "duration": 1702962201,
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
  "duration": 869990500,
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
  "duration": 154039801,
  "status": "passed"
});
formatter.after({
  "duration": 48173300,
  "status": "passed"
});
formatter.before({
  "duration": 3589470299,
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
  "duration": 1840092901,
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
  "duration": 832769900,
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
  "duration": 149966600,
  "status": "passed"
});
formatter.after({
  "duration": 33329300,
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
  "duration": 3552496600,
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
  "duration": 1886961701,
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
  "duration": 760619000,
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
  "duration": 270162800,
  "status": "passed"
});
formatter.after({
  "duration": 61139101,
  "status": "passed"
});
formatter.before({
  "duration": 3685552101,
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
  "duration": 1758169100,
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
  "duration": 765437000,
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
  "duration": 500533800,
  "status": "passed"
});
formatter.after({
  "duration": 36002500,
  "status": "passed"
});
formatter.before({
  "duration": 3528811700,
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
  "duration": 3760047200,
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
  "duration": 914951401,
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
  "duration": 243558999,
  "status": "passed"
});
formatter.after({
  "duration": 76084300,
  "status": "passed"
});
formatter.before({
  "duration": 3392173401,
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
  "duration": 1823969300,
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
  "duration": 1045023101,
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
  "duration": 360845401,
  "status": "passed"
});
formatter.after({
  "duration": 37472900,
  "status": "passed"
});
formatter.before({
  "duration": 3508478100,
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
  "duration": 1134309400,
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
  "duration": 804323199,
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
  "duration": 13939901,
  "status": "passed"
});
formatter.after({
  "duration": 49486199,
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
  "duration": 3364651600,
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
  "duration": 1189923999,
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
  "duration": 745608300,
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
  "duration": 99555101,
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
  "duration": 486915300,
  "status": "passed"
});
formatter.after({
  "duration": 42603200,
  "status": "passed"
});
formatter.before({
  "duration": 3517817500,
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
  "duration": 1573176300,
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
  "duration": 767635200,
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
  "duration": 119202300,
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
  "duration": 499972800,
  "status": "passed"
});
formatter.after({
  "duration": 49885300,
  "status": "passed"
});
formatter.before({
  "duration": 3494231700,
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
  "duration": 1695382800,
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
  "duration": 872772001,
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
  "duration": 128440000,
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
  "duration": 497650300,
  "status": "passed"
});
formatter.after({
  "duration": 72028399,
  "status": "passed"
});
formatter.before({
  "duration": 3749699500,
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
  "duration": 1853345100,
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
  "duration": 892611100,
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
  "duration": 252206800,
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
  "duration": 550356700,
  "status": "passed"
});
formatter.after({
  "duration": 41743101,
  "status": "passed"
});
formatter.before({
  "duration": 3805795000,
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
  "duration": 2077813101,
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
  "duration": 738574499,
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
  "duration": 177741699,
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
  "duration": 511993600,
  "status": "passed"
});
formatter.after({
  "duration": 39666900,
  "status": "passed"
});
});