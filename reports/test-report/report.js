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
  "duration": 8474194600,
  "status": "passed"
});
formatter.before({
  "duration": 3437390300,
  "status": "passed"
});
formatter.before({
  "duration": 4270134600,
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
  "duration": 2911326400,
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
  "duration": 13056718400,
  "status": "passed"
});
formatter.match({
  "location": "DetailsPageTests.iShouldBeRedirectedToTheDetailsPageOfTheUser()"
});
formatter.result({
  "duration": 962583600,
  "status": "passed"
});
formatter.after({
  "duration": 83256400,
  "status": "passed"
});
formatter.after({
  "duration": 39631200,
  "status": "passed"
});
formatter.after({
  "duration": 79123700,
  "status": "passed"
});
formatter.before({
  "duration": 2971116400,
  "status": "passed"
});
formatter.before({
  "duration": 2979118800,
  "status": "passed"
});
formatter.before({
  "duration": 2973947100,
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
  "duration": 4175232900,
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
  "duration": 13143553500,
  "status": "passed"
});
formatter.match({
  "location": "DetailsPageTests.iShouldBeRedirectedToTheDetailsPageOfTheUser()"
});
formatter.result({
  "duration": 1038873200,
  "status": "passed"
});
formatter.after({
  "duration": 31009000,
  "status": "passed"
});
formatter.after({
  "duration": 60634000,
  "status": "passed"
});
formatter.after({
  "duration": 74432400,
  "status": "passed"
});
formatter.before({
  "duration": 2971156400,
  "status": "passed"
});
formatter.before({
  "duration": 2961950600,
  "status": "passed"
});
formatter.before({
  "duration": 2978077800,
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
  "duration": 1549496400,
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
  "duration": 13322063100,
  "status": "passed"
});
formatter.match({
  "location": "DetailsPageTests.iShouldBeRedirectedToTheDetailsPageOfTheUser()"
});
formatter.result({
  "duration": 979057600,
  "status": "passed"
});
formatter.after({
  "duration": 26394100,
  "status": "passed"
});
formatter.after({
  "duration": 62362300,
  "status": "passed"
});
formatter.after({
  "duration": 63062500,
  "status": "passed"
});
formatter.before({
  "duration": 3113086600,
  "status": "passed"
});
formatter.before({
  "duration": 2803291900,
  "status": "passed"
});
formatter.before({
  "duration": 2973448900,
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
  "duration": 1703771200,
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
  "duration": 15634711700,
  "status": "passed"
});
formatter.match({
  "location": "DetailsPageTests.iShouldBeRedirectedToTheDetailsPageOfTheUser()"
});
formatter.result({
  "duration": 973046100,
  "status": "passed"
});
formatter.after({
  "duration": 80300400,
  "status": "passed"
});
formatter.after({
  "duration": 67029300,
  "status": "passed"
});
formatter.after({
  "duration": 78418900,
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
  "duration": 3068324400,
  "status": "passed"
});
formatter.before({
  "duration": 2807680800,
  "status": "passed"
});
formatter.before({
  "duration": 2867619300,
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
  "duration": 1232680500,
  "status": "passed"
});
formatter.match({
  "location": "DetailsPageTests.iShouldBePresentedWithAnAlarmBox()"
});
formatter.result({
  "duration": 10401436000,
  "status": "passed"
});
formatter.match({
  "location": "DetailsPageTests.clickingTheAlarmBoxShouldRedirectMeToHomePage()"
});
formatter.result({
  "duration": 718510000,
  "status": "passed"
});
formatter.after({
  "duration": 35059400,
  "status": "passed"
});
formatter.after({
  "duration": 39442900,
  "status": "passed"
});
formatter.after({
  "duration": 85665600,
  "status": "passed"
});
formatter.before({
  "duration": 3077797000,
  "status": "passed"
});
formatter.before({
  "duration": 3052967300,
  "status": "passed"
});
formatter.before({
  "duration": 3107173200,
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
  "duration": 1737850200,
  "status": "passed"
});
formatter.match({
  "location": "DetailsPageTests.iShouldBePresentedWithAnAlarmBox()"
});
formatter.result({
  "duration": 10271097700,
  "status": "passed"
});
formatter.match({
  "location": "DetailsPageTests.clickingTheAlarmBoxShouldRedirectMeToHomePage()"
});
formatter.result({
  "duration": 547745300,
  "status": "passed"
});
formatter.after({
  "duration": 34857400,
  "status": "passed"
});
formatter.after({
  "duration": 42665600,
  "status": "passed"
});
formatter.after({
  "duration": 78550700,
  "status": "passed"
});
formatter.before({
  "duration": 3245713700,
  "status": "passed"
});
formatter.before({
  "duration": 3116603400,
  "status": "passed"
});
formatter.before({
  "duration": 3590122400,
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
  "duration": 2938404700,
  "status": "passed"
});
formatter.match({
  "location": "DetailsPageTests.iShouldBePresentedWithAnAlarmBox()"
});
formatter.result({
  "duration": 10303178700,
  "status": "passed"
});
formatter.match({
  "location": "DetailsPageTests.clickingTheAlarmBoxShouldRedirectMeToHomePage()"
});
formatter.result({
  "duration": 698297300,
  "status": "passed"
});
formatter.after({
  "duration": 41981600,
  "status": "passed"
});
formatter.after({
  "duration": 44288600,
  "status": "passed"
});
formatter.after({
  "duration": 78794700,
  "status": "passed"
});
formatter.before({
  "duration": 3879962700,
  "status": "passed"
});
formatter.before({
  "duration": 4047332300,
  "status": "passed"
});
formatter.before({
  "duration": 8155434000,
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
  "duration": 9553590500,
  "status": "passed"
});
formatter.match({
  "location": "DetailsPageTests.iShouldBePresentedWithAnAlarmBox()"
});
formatter.result({
  "duration": 11188534500,
  "status": "passed"
});
formatter.match({
  "location": "DetailsPageTests.clickingTheAlarmBoxShouldRedirectMeToHomePage()"
});
formatter.result({
  "duration": 579969900,
  "status": "passed"
});
formatter.after({
  "duration": 28632600,
  "status": "passed"
});
formatter.after({
  "duration": 43496600,
  "status": "passed"
});
formatter.after({
  "duration": 78163000,
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
  "name": "I navigate on Details page of contact \"\u003cid\u003e\"",
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
  "duration": 3638201500,
  "status": "passed"
});
formatter.before({
  "duration": 3709377300,
  "status": "passed"
});
formatter.before({
  "duration": 3691574900,
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
  "name": "I navigate on Details page of contact \"5\"",
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
      "offset": 39
    }
  ],
  "location": "DetailsPageTests.iNavigateOnDetailsPageOfContact(String)"
});
formatter.result({
  "duration": 15000421300,
  "status": "passed"
});
formatter.match({
  "location": "DetailsPageTests.iPressTheBackButton()"
});
formatter.result({
  "duration": 272709400,
  "status": "passed"
});
formatter.match({
  "location": "DetailsPageTests.iReturnToTheLandingPage()"
});
formatter.result({
  "duration": 3750200,
  "status": "passed"
});
formatter.after({
  "duration": 42034200,
  "status": "passed"
});
formatter.after({
  "duration": 118364500,
  "status": "passed"
});
formatter.after({
  "duration": 558182800,
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