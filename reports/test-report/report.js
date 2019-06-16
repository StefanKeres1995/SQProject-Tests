$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("US1.feature");
formatter.feature({
  "line": 1,
  "name": "Access to the Contacts Orchestrator Solution\u0027s (COS) Landing Page",
  "description": "As a user\r\nI want to access to the URL address provided for the landing page\r\nSo that I can see the list of the contacts available",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 5,
      "value": "#  Scenario: Landing page\u0027s title and text contains \"Contacts Landing Page\""
    },
    {
      "line": 6,
      "value": "#    Given I access the landing page of COS"
    },
    {
      "line": 7,
      "value": "#    Then the title of the page should be \"Contacts Landing Page\""
    },
    {
      "line": 8,
      "value": "#"
    },
    {
      "line": 9,
      "value": "#  Scenario: Landing page contains all contacts available in the"
    },
    {
      "line": 10,
      "value": "#    Given I access the landing page of COS"
    },
    {
      "line": 11,
      "value": "#    Then I should see exactly the same amount of contacts that exist in the database"
    },
    {
      "line": 12,
      "value": "#"
    },
    {
      "line": 13,
      "value": "#  Scenario: Landing page seems to have data that is coherent with the database"
    },
    {
      "line": 14,
      "value": "#    Given I access the landing page of COS"
    },
    {
      "line": 15,
      "value": "#    Then I should see the contact as in the database position"
    },
    {
      "line": 16,
      "value": "#"
    },
    {
      "line": 17,
      "value": "#  Scenario Outline: Landing page contains the table and columns are sortable"
    },
    {
      "line": 18,
      "value": "#    Given I access the landing page of COS"
    },
    {
      "line": 19,
      "value": "#    When I sort the column \"\u003ccolumn\u003e\""
    },
    {
      "line": 20,
      "value": "#    Then The first column should contain the most relevant contact regarded to the sorted \"\u003ccolumn\u003e\""
    },
    {
      "line": 21,
      "value": "#"
    },
    {
      "line": 22,
      "value": "#    Examples:"
    },
    {
      "line": 23,
      "value": "#      | column    |"
    },
    {
      "line": 24,
      "value": "#      | ID        |"
    },
    {
      "line": 25,
      "value": "#      | GivenName |"
    },
    {
      "line": 26,
      "value": "#      | Surname   |"
    },
    {
      "line": 27,
      "value": "#      | Phone     |"
    },
    {
      "line": 28,
      "value": "#      | Source    |"
    },
    {
      "line": 29,
      "value": "#      | City      |"
    },
    {
      "line": 30,
      "value": "#"
    },
    {
      "line": 31,
      "value": "#  Scenario Outline: Landing page contains the table and the search bar is operational"
    },
    {
      "line": 32,
      "value": "#    Given I access the landing page of COS"
    },
    {
      "line": 33,
      "value": "#    When I search for \"\u003csearch\u003e\""
    },
    {
      "line": 34,
      "value": "#    Then I should only see columns that are related to what I\u0027ve just searched, related to \"\u003ctype\u003e\" (\"\u003csearch\u003e\")"
    },
    {
      "line": 35,
      "value": "#"
    },
    {
      "line": 36,
      "value": "#    Examples:"
    },
    {
      "line": 37,
      "value": "#      | search    | type       |"
    },
    {
      "line": 38,
      "value": "#      | Viseu     | City       |"
    },
    {
      "line": 39,
      "value": "#      | Joao      | GivenName  |"
    },
    {
      "line": 40,
      "value": "#      | 234216838 | Phone      |"
    },
    {
      "line": 41,
      "value": "#      | Almeida   | Surname    |"
    },
    {
      "line": 42,
      "value": "#      | Something | GivenName  |"
    },
    {
      "line": 43,
      "value": "#"
    },
    {
      "line": 44,
      "value": "#  Scenario Outline: Landing page contains the table and the search bar is operational, along with columns sortable"
    },
    {
      "line": 45,
      "value": "#    Given I access the landing page of COS"
    },
    {
      "line": 46,
      "value": "#    When I search for \"\u003csearch\u003e\""
    },
    {
      "line": 47,
      "value": "#    And I sort the column \"\u003ccolumn\u003e\""
    },
    {
      "line": 48,
      "value": "#    Then I should be able to see the sorted table by \"\u003ccolumn\u003e\", while only appearing what I searched for, related to \"\u003csearch\u003e\""
    },
    {
      "line": 49,
      "value": "#"
    },
    {
      "line": 50,
      "value": "#    Examples:"
    },
    {
      "line": 51,
      "value": "#      | search  | column    |"
    },
    {
      "line": 52,
      "value": "#      | Joao    | ID        |"
    },
    {
      "line": 53,
      "value": "#      | Joao    | GivenName |"
    },
    {
      "line": 54,
      "value": "#      | Joao    | Surname   |"
    },
    {
      "line": 55,
      "value": "#      | Joao    | Phone     |"
    },
    {
      "line": 56,
      "value": "#      | Joao    | City      |"
    }
  ],
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
  "name": "I increase the pagination to \"\u003cpagination\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 61,
  "name": "I should be able to see the number of contacts related to \"\u003cpagination\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 63,
  "name": "",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-pagination-can-be-used;",
  "rows": [
    {
      "cells": [
        "pagination"
      ],
      "line": 64,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-pagination-can-be-used;;1"
    },
    {
      "cells": [
        "10"
      ],
      "line": 65,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-pagination-can-be-used;;2"
    },
    {
      "cells": [
        "25"
      ],
      "line": 66,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-pagination-can-be-used;;3"
    },
    {
      "cells": [
        "50"
      ],
      "line": 67,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-pagination-can-be-used;;4"
    },
    {
      "cells": [
        "100"
      ],
      "line": 68,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-pagination-can-be-used;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5153324000,
  "status": "passed"
});
formatter.scenario({
  "line": 65,
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
  "name": "I increase the pagination to \"10\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 61,
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
  "duration": 1644912200,
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
  "duration": 1304538200,
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
  "duration": 49198900,
  "status": "passed"
});
formatter.after({
  "duration": 160651300,
  "status": "passed"
});
formatter.before({
  "duration": 3331848000,
  "status": "passed"
});
formatter.scenario({
  "line": 66,
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
  "name": "I increase the pagination to \"25\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 61,
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
  "duration": 2010552500,
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
  "duration": 908352200,
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
  "duration": 43029300,
  "status": "passed"
});
formatter.after({
  "duration": 49125300,
  "status": "passed"
});
formatter.before({
  "duration": 3170096000,
  "status": "passed"
});
formatter.scenario({
  "line": 67,
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
  "name": "I increase the pagination to \"50\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 61,
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
  "duration": 1633207900,
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
  "duration": 864476100,
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
  "duration": 48726400,
  "status": "passed"
});
formatter.after({
  "duration": 50383400,
  "status": "passed"
});
formatter.before({
  "duration": 3156342700,
  "status": "passed"
});
formatter.scenario({
  "line": 68,
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
  "name": "I increase the pagination to \"100\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 61,
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
  "duration": 1329407500,
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
  "duration": 867864000,
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
  "duration": 59161200,
  "status": "passed"
});
formatter.after({
  "duration": 46157000,
  "status": "passed"
});
formatter.before({
  "duration": 3118192400,
  "status": "passed"
});
formatter.scenario({
  "line": 70,
  "name": "Landing page contains the possible sources",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-possible-sources",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 71,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 72,
  "name": "I should be able to see the possible sources",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefUS1.iAccessTheLandingPageOfCOS()"
});
formatter.result({
  "duration": 1656974400,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefUS1.iShouldBeAbleToSeeThePossibleSources()"
});
formatter.result({
  "duration": 892476500,
  "status": "passed"
});
formatter.after({
  "duration": 54147200,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 74,
  "name": "Landing page contains the selector related to the source",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-selector-related-to-the-source",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 75,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 76,
  "name": "I want to filter for a \"\u003csource\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 77,
  "name": "I should only be able to see the contacts of that specific \"\u003csource\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 79,
  "name": "",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-selector-related-to-the-source;",
  "rows": [
    {
      "cells": [
        "source"
      ],
      "line": 80,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-selector-related-to-the-source;;1"
    },
    {
      "cells": [
        "All"
      ],
      "line": 81,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-selector-related-to-the-source;;2"
    },
    {
      "cells": [
        "Twitter"
      ],
      "line": 82,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-selector-related-to-the-source;;3"
    },
    {
      "cells": [
        "Facebook"
      ],
      "line": 83,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-selector-related-to-the-source;;4"
    },
    {
      "cells": [
        "LinkedIn"
      ],
      "line": 84,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-selector-related-to-the-source;;5"
    },
    {
      "cells": [
        "Skype"
      ],
      "line": 85,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-selector-related-to-the-source;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3142394100,
  "status": "passed"
});
formatter.scenario({
  "line": 81,
  "name": "Landing page contains the selector related to the source",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-selector-related-to-the-source;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 75,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 76,
  "name": "I want to filter for a \"All\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 77,
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
  "duration": 1786363400,
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
  "duration": 863699700,
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
  "duration": 732327300,
  "status": "passed"
});
formatter.after({
  "duration": 35571000,
  "status": "passed"
});
formatter.before({
  "duration": 3192585500,
  "status": "passed"
});
formatter.scenario({
  "line": 82,
  "name": "Landing page contains the selector related to the source",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-selector-related-to-the-source;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 75,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 76,
  "name": "I want to filter for a \"Twitter\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 77,
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
  "duration": 1599195800,
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
  "duration": 869887100,
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
  "duration": 594057800,
  "status": "passed"
});
formatter.after({
  "duration": 34295300,
  "status": "passed"
});
formatter.before({
  "duration": 3366623900,
  "status": "passed"
});
formatter.scenario({
  "line": 83,
  "name": "Landing page contains the selector related to the source",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-selector-related-to-the-source;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 75,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 76,
  "name": "I want to filter for a \"Facebook\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 77,
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
  "duration": 1002465500,
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
  "duration": 893195100,
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
  "duration": 579988300,
  "status": "passed"
});
formatter.after({
  "duration": 38988000,
  "status": "passed"
});
formatter.before({
  "duration": 3099191200,
  "status": "passed"
});
formatter.scenario({
  "line": 84,
  "name": "Landing page contains the selector related to the source",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-selector-related-to-the-source;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 75,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 76,
  "name": "I want to filter for a \"LinkedIn\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 77,
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
  "duration": 1116730000,
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
  "duration": 871136400,
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
  "duration": 598366600,
  "status": "passed"
});
formatter.after({
  "duration": 45912000,
  "status": "passed"
});
formatter.before({
  "duration": 3181470500,
  "status": "passed"
});
formatter.scenario({
  "line": 85,
  "name": "Landing page contains the selector related to the source",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-selector-related-to-the-source;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 75,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 76,
  "name": "I want to filter for a \"Skype\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 77,
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
  "duration": 1515286000,
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
  "duration": 1152108600,
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
  "duration": 635683100,
  "status": "passed"
});
formatter.after({
  "duration": 45635000,
  "status": "passed"
});
});