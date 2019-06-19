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
  "name": "I should be redirected to the details page of the user",
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
  "duration": 4175957100,
  "status": "passed"
});
formatter.before({
  "duration": 3019094600,
  "status": "passed"
});
formatter.before({
  "duration": 3149288600,
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
  "name": "I should be redirected to the details page of the user",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefUS1.iAccessTheLandingPageOfCOS()"
});
formatter.result({
  "duration": 2992328500,
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
  "duration": 13366011100,
  "status": "passed"
});
formatter.match({
  "location": "DetailsPageTests.iShouldBeRedirectedToTheDetailsPageOfTheUser()"
});
formatter.result({
  "duration": 1071494600,
  "status": "passed"
});
formatter.after({
  "duration": 28540700,
  "status": "passed"
});
formatter.after({
  "duration": 50675200,
  "status": "passed"
});
formatter.after({
  "duration": 104942000,
  "status": "passed"
});
formatter.before({
  "duration": 3473241600,
  "status": "passed"
});
formatter.before({
  "duration": 2904046100,
  "status": "passed"
});
formatter.before({
  "duration": 3243203200,
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
  "name": "I should be redirected to the details page of the user",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefUS1.iAccessTheLandingPageOfCOS()"
});
formatter.result({
  "duration": 4103439800,
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
  "duration": 12893003500,
  "status": "passed"
});
formatter.match({
  "location": "DetailsPageTests.iShouldBeRedirectedToTheDetailsPageOfTheUser()"
});
formatter.result({
  "duration": 977198800,
  "status": "passed"
});
formatter.after({
  "duration": 29280000,
  "status": "passed"
});
formatter.after({
  "duration": 50591600,
  "status": "passed"
});
formatter.after({
  "duration": 113367200,
  "status": "passed"
});
formatter.before({
  "duration": 3299430800,
  "status": "passed"
});
formatter.before({
  "duration": 3162645400,
  "status": "passed"
});
formatter.before({
  "duration": 3532986400,
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
  "name": "I should be redirected to the details page of the user",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefUS1.iAccessTheLandingPageOfCOS()"
});
formatter.result({
  "duration": 2975992600,
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
  "duration": 12846728600,
  "status": "passed"
});
formatter.match({
  "location": "DetailsPageTests.iShouldBeRedirectedToTheDetailsPageOfTheUser()"
});
formatter.result({
  "duration": 973833500,
  "status": "passed"
});
formatter.after({
  "duration": 26145700,
  "status": "passed"
});
formatter.after({
  "duration": 49550800,
  "status": "passed"
});
formatter.after({
  "duration": 80887900,
  "status": "passed"
});
formatter.before({
  "duration": 3147225300,
  "status": "passed"
});
formatter.before({
  "duration": 2829585300,
  "status": "passed"
});
formatter.before({
  "duration": 3118902000,
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
  "name": "I should be redirected to the details page of the user",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefUS1.iAccessTheLandingPageOfCOS()"
});
formatter.result({
  "duration": 1414260100,
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
formatter.result({
  "duration": 15683903400,
  "status": "passed"
});
formatter.match({
  "location": "DetailsPageTests.iShouldBeRedirectedToTheDetailsPageOfTheUser()"
});
formatter.result({
  "duration": 957081600,
  "status": "passed"
});
formatter.after({
  "duration": 83550100,
  "status": "passed"
});
formatter.after({
  "duration": 67349100,
  "status": "passed"
});
formatter.after({
  "duration": 92392500,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 20,
      "value": "#Verify wrong link on details page"
    }
  ],
  "line": 21,
  "name": "Badly formatted contact link on Details page",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;badly-formatted-contact-link-on-details-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 22,
  "name": "I enter the details page with the following case \"\u003ccase\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I should be presented with an alarm box",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "Clicking the alarm box should redirect me to home page",
  "keyword": "And "
});
formatter.examples({
  "line": 26,
  "name": "",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;badly-formatted-contact-link-on-details-page;",
  "rows": [
    {
      "cells": [
        "case"
      ],
      "line": 27,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;badly-formatted-contact-link-on-details-page;;1"
    },
    {
      "cells": [
        "justDetails"
      ],
      "line": 28,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;badly-formatted-contact-link-on-details-page;;2"
    },
    {
      "cells": [
        "emptyId"
      ],
      "line": 29,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;badly-formatted-contact-link-on-details-page;;3"
    },
    {
      "cells": [
        "unfilteredId"
      ],
      "line": 30,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;badly-formatted-contact-link-on-details-page;;4"
    },
    {
      "cells": [
        "incorrectId"
      ],
      "line": 31,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;badly-formatted-contact-link-on-details-page;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3295195200,
  "status": "passed"
});
formatter.before({
  "duration": 2830231400,
  "status": "passed"
});
formatter.before({
  "duration": 3106544800,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Badly formatted contact link on Details page",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;badly-formatted-contact-link-on-details-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 22,
  "name": "I enter the details page with the following case \"justDetails\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I should be presented with an alarm box",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "Clicking the alarm box should redirect me to home page",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "justDetails",
      "offset": 50
    }
  ],
  "location": "DetailsPageTests.iEnterTheDetailsPageWithTheFollowingLink(String)"
});
formatter.result({
  "duration": 1564840400,
  "status": "passed"
});
formatter.match({
  "location": "DetailsPageTests.iShouldBePresentedWithAnAlarmBox()"
});
formatter.result({
  "duration": 10471366000,
  "status": "passed"
});
formatter.match({
  "location": "DetailsPageTests.clickingTheAlarmBoxShouldRedirectMeToHomePage()"
});
formatter.result({
  "duration": 523444500,
  "status": "passed"
});
formatter.after({
  "duration": 33131500,
  "status": "passed"
});
formatter.after({
  "duration": 51190600,
  "status": "passed"
});
formatter.after({
  "duration": 103371300,
  "status": "passed"
});
formatter.before({
  "duration": 3318909900,
  "status": "passed"
});
formatter.before({
  "duration": 3070574600,
  "status": "passed"
});
formatter.before({
  "duration": 3336661100,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Badly formatted contact link on Details page",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;badly-formatted-contact-link-on-details-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 22,
  "name": "I enter the details page with the following case \"emptyId\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I should be presented with an alarm box",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "Clicking the alarm box should redirect me to home page",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "emptyId",
      "offset": 50
    }
  ],
  "location": "DetailsPageTests.iEnterTheDetailsPageWithTheFollowingLink(String)"
});
formatter.result({
  "duration": 2188498300,
  "status": "passed"
});
formatter.match({
  "location": "DetailsPageTests.iShouldBePresentedWithAnAlarmBox()"
});
formatter.result({
  "duration": 10424560200,
  "status": "passed"
});
formatter.match({
  "location": "DetailsPageTests.clickingTheAlarmBoxShouldRedirectMeToHomePage()"
});
formatter.result({
  "duration": 559160900,
  "status": "passed"
});
formatter.after({
  "duration": 39521500,
  "status": "passed"
});
formatter.after({
  "duration": 46872800,
  "status": "passed"
});
formatter.after({
  "duration": 100924800,
  "status": "passed"
});
formatter.before({
  "duration": 3295964600,
  "status": "passed"
});
formatter.before({
  "duration": 3302768700,
  "status": "passed"
});
formatter.before({
  "duration": 3226669100,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Badly formatted contact link on Details page",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;badly-formatted-contact-link-on-details-page;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 22,
  "name": "I enter the details page with the following case \"unfilteredId\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I should be presented with an alarm box",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "Clicking the alarm box should redirect me to home page",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "unfilteredId",
      "offset": 50
    }
  ],
  "location": "DetailsPageTests.iEnterTheDetailsPageWithTheFollowingLink(String)"
});
formatter.result({
  "duration": 3144511500,
  "status": "passed"
});
formatter.match({
  "location": "DetailsPageTests.iShouldBePresentedWithAnAlarmBox()"
});
formatter.result({
  "duration": 10841215800,
  "status": "passed"
});
formatter.match({
  "location": "DetailsPageTests.clickingTheAlarmBoxShouldRedirectMeToHomePage()"
});
formatter.result({
  "duration": 918047600,
  "status": "passed"
});
formatter.after({
  "duration": 40760000,
  "status": "passed"
});
formatter.after({
  "duration": 108909700,
  "status": "passed"
});
formatter.after({
  "duration": 96833900,
  "status": "passed"
});
formatter.before({
  "duration": 3260758500,
  "status": "passed"
});
formatter.before({
  "duration": 2802022800,
  "status": "passed"
});
formatter.before({
  "duration": 2898406500,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Badly formatted contact link on Details page",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;badly-formatted-contact-link-on-details-page;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 22,
  "name": "I enter the details page with the following case \"incorrectId\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I should be presented with an alarm box",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "Clicking the alarm box should redirect me to home page",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "incorrectId",
      "offset": 50
    }
  ],
  "location": "DetailsPageTests.iEnterTheDetailsPageWithTheFollowingLink(String)"
});
formatter.result({
  "duration": 1208909000,
  "status": "passed"
});
formatter.match({
  "location": "DetailsPageTests.iShouldBePresentedWithAnAlarmBox()"
});
formatter.result({
  "duration": 10414907200,
  "status": "passed"
});
formatter.match({
  "location": "DetailsPageTests.clickingTheAlarmBoxShouldRedirectMeToHomePage()"
});
formatter.result({
  "duration": 738158500,
  "status": "passed"
});
formatter.after({
  "duration": 32950300,
  "status": "passed"
});
formatter.after({
  "duration": 92533400,
  "status": "passed"
});
formatter.after({
  "duration": 429341600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 33,
  "name": "Get back to Landing page from the Details page",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;get-back-to-landing-page-from-the-details-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 34,
  "name": "I access the landing page of COS and want to see the details of contact \"\u003cid\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "I press the back button",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "I return to the Landing Page",
  "keyword": "Then "
});
formatter.examples({
  "line": 38,
  "name": "",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;get-back-to-landing-page-from-the-details-page;",
  "rows": [
    {
      "cells": [
        "id"
      ],
      "line": 39,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;get-back-to-landing-page-from-the-details-page;;1"
    },
    {
      "cells": [
        "5"
      ],
      "line": 40,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;get-back-to-landing-page-from-the-details-page;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3788160000,
  "status": "passed"
});
formatter.before({
  "duration": 3197855000,
  "status": "passed"
});
formatter.before({
  "duration": 2960793500,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "Get back to Landing page from the Details page",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;get-back-to-landing-page-from-the-details-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 34,
  "name": "I access the landing page of COS and want to see the details of contact \"5\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "I press the back button",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "I return to the Landing Page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 73
    }
  ],
  "location": "DetailsPageTests.iAccessTheLandingPageOfCOSAndWantToSeeTheDetailsOfContact(String)"
});
formatter.result({
  "duration": 3358522900,
  "status": "passed"
});
formatter.match({
  "location": "DetailsPageTests.iPressTheBackButton()"
});
formatter.result({
  "duration": 144659500,
  "status": "passed"
});
formatter.match({
  "location": "DetailsPageTests.iReturnToTheLandingPage()"
});
formatter.result({
  "duration": 3431800,
  "status": "passed"
});
formatter.after({
  "duration": 37846600,
  "status": "passed"
});
formatter.after({
  "duration": 65936100,
  "status": "passed"
});
formatter.after({
  "duration": 87706000,
  "status": "passed"
});
});