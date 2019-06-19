$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("US1.feature");
formatter.feature({
  "line": 1,
  "name": "Access to the Contacts Orchestrator Solution\u0027s (COS) Landing Page",
  "description": "As a user\r\nI want to access to the URL address provided for the landing page\r\nSo that I can see the list of the contacts available",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5557325100,
  "status": "passed"
});
formatter.before({
  "duration": 6569637900,
  "status": "passed"
});
formatter.before({
  "duration": 5707225400,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 5,
      "value": "#"
    },
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
      "line": 64,
      "value": "#"
    },
    {
      "line": 65,
      "value": "#  #Verify if pagination works"
    },
    {
      "line": 66,
      "value": "#  Scenario Outline: Landing page contains the table and the pagination can be used"
    },
    {
      "line": 67,
      "value": "#    Given I access the landing page of COS"
    },
    {
      "line": 68,
      "value": "#    When I increase the pagination to \"\u003cpagination\u003e\""
    },
    {
      "line": 69,
      "value": "#    Then I should be able to see the number of contacts related to \"\u003cpagination\u003e\""
    },
    {
      "line": 70,
      "value": "#"
    },
    {
      "line": 71,
      "value": "#    Examples:"
    },
    {
      "line": 72,
      "value": "#      | pagination |"
    },
    {
      "line": 73,
      "value": "#      | 10         |"
    },
    {
      "line": 74,
      "value": "#      | 25         |"
    },
    {
      "line": 75,
      "value": "#      | 50         |"
    },
    {
      "line": 76,
      "value": "#      | 100        |"
    },
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
  "duration": 2215405600,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefUS1.iShouldBeAbleToSeeThePossibleSources()"
});
formatter.result({
  "duration": 858613400,
  "status": "passed"
});
formatter.after({
  "duration": 32598001,
  "status": "passed"
});
formatter.after({
  "duration": 107117599,
  "status": "passed"
});
formatter.after({
  "duration": 143735200,
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
  "duration": 4602011400,
  "status": "passed"
});
formatter.before({
  "duration": 4320027700,
  "status": "passed"
});
formatter.before({
  "duration": 5214490200,
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
  "duration": 3487156299,
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
  "duration": 864022500,
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
  "duration": 1123664700,
  "status": "passed"
});
formatter.after({
  "duration": 32239700,
  "status": "passed"
});
formatter.after({
  "duration": 67665600,
  "status": "passed"
});
formatter.after({
  "duration": 97700800,
  "status": "passed"
});
formatter.before({
  "duration": 4877196301,
  "status": "passed"
});
formatter.before({
  "duration": 3851761700,
  "status": "passed"
});
formatter.before({
  "duration": 4055992699,
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
  "duration": 998435000,
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
  "duration": 855465500,
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
  "duration": 1120547200,
  "status": "passed"
});
formatter.after({
  "duration": 31597199,
  "status": "passed"
});
formatter.after({
  "duration": 73155100,
  "status": "passed"
});
formatter.after({
  "duration": 91842900,
  "status": "passed"
});
formatter.before({
  "duration": 4253171301,
  "status": "passed"
});
formatter.before({
  "duration": 3992162101,
  "status": "passed"
});
formatter.before({
  "duration": 4364929199,
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
  "duration": 1452362199,
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
  "duration": 1192067101,
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
  "duration": 1790260400,
  "status": "passed"
});
formatter.after({
  "duration": 31378199,
  "status": "passed"
});
formatter.after({
  "duration": 69500801,
  "status": "passed"
});
formatter.after({
  "duration": 97466399,
  "status": "passed"
});
formatter.before({
  "duration": 4210484799,
  "status": "passed"
});
formatter.before({
  "duration": 4524288800,
  "status": "passed"
});
formatter.before({
  "duration": 4627403500,
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
  "duration": 1912023300,
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
  "duration": 11098192300,
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
  "duration": 1114163200,
  "status": "passed"
});
formatter.after({
  "duration": 31479100,
  "status": "passed"
});
formatter.after({
  "duration": 72470301,
  "status": "passed"
});
formatter.after({
  "duration": 129579200,
  "status": "passed"
});
formatter.before({
  "duration": 4338916200,
  "status": "passed"
});
formatter.before({
  "duration": 4362757200,
  "status": "passed"
});
formatter.before({
  "duration": 6279950100,
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
  "duration": 2172839999,
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
  "duration": 843130199,
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
  "duration": 1685253199,
  "status": "passed"
});
formatter.after({
  "duration": 40911499,
  "status": "passed"
});
formatter.after({
  "duration": 236716301,
  "status": "passed"
});
formatter.after({
  "duration": 149391800,
  "status": "passed"
});
formatter.before({
  "duration": 4700384700,
  "status": "passed"
});
formatter.before({
  "duration": 4674469200,
  "status": "passed"
});
formatter.before({
  "duration": 4992517000,
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
  "duration": 1903252201,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefUS1.iClickOnTheDuplicates()"
});
formatter.result({
  "duration": 838372700,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefUS1.iShouldBeRedirectedToTheDuplicatePages()"
});
formatter.result({
  "duration": 31137700,
  "status": "passed"
});
formatter.after({
  "duration": 33916299,
  "status": "passed"
});
formatter.after({
  "duration": 97175400,
  "status": "passed"
});
formatter.after({
  "duration": 94680399,
  "status": "passed"
});
});