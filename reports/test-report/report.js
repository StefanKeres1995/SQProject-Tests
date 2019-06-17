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
      "line": 6,
      "value": "#  #Verify if is on correct site"
    },
    {
      "line": 7,
      "value": "#  Scenario: Landing page\u0027s title and text contains \"Contacts Landing Page\""
    },
    {
      "line": 8,
      "value": "#    Given I access the landing page of COS"
    },
    {
      "line": 9,
      "value": "#    Then the title of the page should be \"Contacts Landing Page\""
    },
    {
      "line": 10,
      "value": "#"
    },
    {
      "line": 11,
      "value": "#  #Verify if all contacts were loaded"
    },
    {
      "line": 12,
      "value": "#  Scenario: Landing page contains all contacts available in the"
    },
    {
      "line": 13,
      "value": "#    Given I access the landing page of COS"
    },
    {
      "line": 14,
      "value": "#    Then I should see exactly the same amount of contacts that exist in the database"
    },
    {
      "line": 15,
      "value": "#"
    },
    {
      "line": 16,
      "value": "#  #Verify if table data seems coherent with database"
    },
    {
      "line": 17,
      "value": "#  Scenario: Landing page seems to have data that is coherent with the database"
    },
    {
      "line": 18,
      "value": "#    Given I access the landing page of COS"
    },
    {
      "line": 19,
      "value": "#    Then I should see the contact as in the database position"
    },
    {
      "line": 20,
      "value": "#"
    },
    {
      "line": 21,
      "value": "#  #Verify if table can be sortable"
    },
    {
      "line": 22,
      "value": "#  Scenario Outline: Landing page contains the table and columns are sortable"
    },
    {
      "line": 23,
      "value": "#    Given I access the landing page of COS"
    },
    {
      "line": 24,
      "value": "#    When I sort the column \"\u003ccolumn\u003e\""
    },
    {
      "line": 25,
      "value": "#    Then The first column should contain the most relevant contact regarded to the sorted \"\u003ccolumn\u003e\""
    },
    {
      "line": 26,
      "value": "#"
    },
    {
      "line": 27,
      "value": "#    Examples:"
    },
    {
      "line": 28,
      "value": "#      | column    |"
    },
    {
      "line": 29,
      "value": "#      | ID        |"
    },
    {
      "line": 30,
      "value": "#      | GivenName |"
    },
    {
      "line": 31,
      "value": "#      | Surname   |"
    },
    {
      "line": 32,
      "value": "#      | Phone     |"
    },
    {
      "line": 33,
      "value": "#      | Source    |"
    },
    {
      "line": 34,
      "value": "#      | City      |"
    },
    {
      "line": 35,
      "value": "#"
    },
    {
      "line": 36,
      "value": "#  #Verify if search bar can be used to filter"
    },
    {
      "line": 37,
      "value": "#  Scenario Outline: Landing page contains the table and the search bar is operational"
    },
    {
      "line": 38,
      "value": "#    Given I access the landing page of COS"
    },
    {
      "line": 39,
      "value": "#    When I search for \"\u003csearch\u003e\""
    },
    {
      "line": 40,
      "value": "#    Then I should only see columns that are related to what I\u0027ve just searched, related to \"\u003ctype\u003e\" (\"\u003csearch\u003e\")"
    },
    {
      "line": 41,
      "value": "#"
    },
    {
      "line": 42,
      "value": "#    Examples:"
    },
    {
      "line": 43,
      "value": "#      | search    | type       |"
    },
    {
      "line": 44,
      "value": "#      | Viseu     | City       |"
    },
    {
      "line": 45,
      "value": "#      | Joao      | GivenName  |"
    },
    {
      "line": 46,
      "value": "#      | 234216838 | Phone      |"
    },
    {
      "line": 47,
      "value": "#      | Almeida   | Surname    |"
    },
    {
      "line": 48,
      "value": "#      | Something | GivenName  |"
    },
    {
      "line": 49,
      "value": "#"
    },
    {
      "line": 50,
      "value": "#  #Verify if search bar and table can be sortable simultaneously"
    },
    {
      "line": 51,
      "value": "#  Scenario Outline: Landing page contains the table and the search bar is operational, along with columns sortable"
    },
    {
      "line": 52,
      "value": "#    Given I access the landing page of COS"
    },
    {
      "line": 53,
      "value": "#    When I search for \"\u003csearch\u003e\""
    },
    {
      "line": 54,
      "value": "#    And I sort the column \"\u003ccolumn\u003e\""
    },
    {
      "line": 55,
      "value": "#    Then I should be able to see the sorted table by \"\u003ccolumn\u003e\", while only appearing what I searched for, related to \"\u003csearch\u003e\""
    },
    {
      "line": 56,
      "value": "#"
    },
    {
      "line": 57,
      "value": "#    Examples:"
    },
    {
      "line": 58,
      "value": "#      | search  | column    |"
    },
    {
      "line": 59,
      "value": "#      | Joao    | ID        |"
    },
    {
      "line": 60,
      "value": "#      | Joao    | GivenName |"
    },
    {
      "line": 61,
      "value": "#      | Joao    | Surname   |"
    },
    {
      "line": 62,
      "value": "#      | Joao    | Phone     |"
    },
    {
      "line": 63,
      "value": "#      | Joao    | City      |"
    },
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
  "duration": 4036043200,
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
  "duration": 1002123700,
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
  "duration": 893489200,
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
  "duration": 39714600,
  "status": "passed"
});
formatter.after({
  "duration": 77245300,
  "status": "passed"
});
formatter.before({
  "duration": 2646974600,
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
  "duration": 853256600,
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
  "duration": 1662090900,
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
  "duration": 39639400,
  "status": "passed"
});
formatter.after({
  "duration": 71581200,
  "status": "passed"
});
formatter.before({
  "duration": 2730222900,
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
  "duration": 1009774000,
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
  "duration": 776055900,
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
  "duration": 42774000,
  "status": "passed"
});
formatter.after({
  "duration": 130547900,
  "status": "passed"
});
formatter.before({
  "duration": 3688450100,
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
  "duration": 792169300,
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
  "duration": 814351300,
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
  "duration": 48535700,
  "status": "passed"
});
formatter.after({
  "duration": 108746700,
  "status": "passed"
});
formatter.before({
  "duration": 2672317000,
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
  "duration": 649548000,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefUS1.iShouldBeAbleToSeeThePossibleSources()"
});
formatter.result({
  "duration": 1045843600,
  "status": "passed"
});
formatter.after({
  "duration": 87742500,
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
  "duration": 2644562800,
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
  "duration": 865065800,
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
  "duration": 819613000,
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
  "duration": 93579900,
  "status": "passed"
});
formatter.after({
  "duration": 179663300,
  "status": "passed"
});
formatter.before({
  "duration": 2892810800,
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
  "duration": 1025167700,
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
  "duration": 927289300,
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
  "duration": 111712800,
  "error_message": "junit.framework.AssertionFailedError: expected:\u003c1\u003e but was:\u003c219\u003e\r\n\tat junit.framework.Assert.fail(Assert.java:57)\r\n\tat junit.framework.Assert.failNotEquals(Assert.java:329)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:78)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:234)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:241)\r\n\tat junit.framework.TestCase.assertEquals(TestCase.java:409)\r\n\tat StepsDefUS1.iShouldOnlyBeAbleToSeeTheContactsOfThatSpecific(StepsDefUS1.java:459)\r\n\tat ✽.Then I should only be able to see the contacts of that specific \"Twitter\"(US1.feature:87)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 75371700,
  "status": "passed"
});
formatter.before({
  "duration": 2783798300,
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
  "duration": 894718400,
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
  "duration": 856905200,
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
  "duration": 245975800,
  "error_message": "junit.framework.AssertionFailedError: expected:\u003c72\u003e but was:\u003c219\u003e\r\n\tat junit.framework.Assert.fail(Assert.java:57)\r\n\tat junit.framework.Assert.failNotEquals(Assert.java:329)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:78)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:234)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:241)\r\n\tat junit.framework.TestCase.assertEquals(TestCase.java:409)\r\n\tat StepsDefUS1.iShouldOnlyBeAbleToSeeTheContactsOfThatSpecific(StepsDefUS1.java:459)\r\n\tat ✽.Then I should only be able to see the contacts of that specific \"Facebook\"(US1.feature:87)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 130060300,
  "status": "passed"
});
formatter.before({
  "duration": 2569211900,
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
  "duration": 892532800,
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
  "duration": 875726900,
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
  "duration": 79548400,
  "error_message": "junit.framework.AssertionFailedError: expected:\u003c145\u003e but was:\u003c219\u003e\r\n\tat junit.framework.Assert.fail(Assert.java:57)\r\n\tat junit.framework.Assert.failNotEquals(Assert.java:329)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:78)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:234)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:241)\r\n\tat junit.framework.TestCase.assertEquals(TestCase.java:409)\r\n\tat StepsDefUS1.iShouldOnlyBeAbleToSeeTheContactsOfThatSpecific(StepsDefUS1.java:459)\r\n\tat ✽.Then I should only be able to see the contacts of that specific \"LinkedIn\"(US1.feature:87)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 74341000,
  "status": "passed"
});
formatter.before({
  "duration": 2716015600,
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
  "duration": 797360800,
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
  "duration": 894131100,
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
  "duration": 77270000,
  "error_message": "junit.framework.AssertionFailedError: expected:\u003c1\u003e but was:\u003c219\u003e\r\n\tat junit.framework.Assert.fail(Assert.java:57)\r\n\tat junit.framework.Assert.failNotEquals(Assert.java:329)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:78)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:234)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:241)\r\n\tat junit.framework.TestCase.assertEquals(TestCase.java:409)\r\n\tat StepsDefUS1.iShouldOnlyBeAbleToSeeTheContactsOfThatSpecific(StepsDefUS1.java:459)\r\n\tat ✽.Then I should only be able to see the contacts of that specific \"Skype\"(US1.feature:87)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 97695600,
  "status": "passed"
});
formatter.before({
  "duration": 2710505300,
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
  "duration": 876277200,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefUS1.iClickOnTheDuplicates()"
});
formatter.result({
  "duration": 41550313000,
  "error_message": "junit.framework.AssertionFailedError: Timeout on waiting. - Element to be Clicked4\r\n\tat junit.framework.Assert.fail(Assert.java:57)\r\n\tat junit.framework.TestCase.fail(TestCase.java:227)\r\n\tat Helper.Helper.waitForSomething(Helper.java:251)\r\n\tat StepsDefUS1.iClickOnTheDuplicates(StepsDefUS1.java:475)\r\n\tat ✽.When I click on the Duplicates(US1.feature:103)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepsDefUS1.iShouldBeRedirectedToTheDuplicatePages()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 171205300,
  "status": "passed"
});
});