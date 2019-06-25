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
  "name": "I click on the Details button on row with id \"\u003cposition\u003e\"",
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
        "position"
      ],
      "line": 14,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;contacts-table-contains-the-details-button-and-redirects-to-the-details-page;;1"
    },
    {
      "cells": [
        "first"
      ],
      "line": 15,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;contacts-table-contains-the-details-button-and-redirects-to-the-details-page;;2"
    },
    {
      "cells": [
        "half-middle1"
      ],
      "line": 16,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;contacts-table-contains-the-details-button-and-redirects-to-the-details-page;;3"
    },
    {
      "cells": [
        "middle"
      ],
      "line": 17,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;contacts-table-contains-the-details-button-and-redirects-to-the-details-page;;4"
    },
    {
      "cells": [
        "half-middle2"
      ],
      "line": 18,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;contacts-table-contains-the-details-button-and-redirects-to-the-details-page;;5"
    },
    {
      "cells": [
        "last"
      ],
      "line": 19,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;contacts-table-contains-the-details-button-and-redirects-to-the-details-page;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4862217900,
  "status": "passed"
});
formatter.before({
  "duration": 3201679000,
  "status": "passed"
});
formatter.before({
  "duration": 3278445200,
  "status": "passed"
});
formatter.before({
  "duration": 3270270300,
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
  "name": "I click on the Details button on row with id \"first\"",
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
  "location": "IndexPageTests.iAccessTheLandingPageOfCOS()"
});
formatter.result({
  "duration": 1045687500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "first",
      "offset": 46
    }
  ],
  "location": "DetailsPageTests.iClickOnTheDetailsButtonOnRowWithId(String)"
});
formatter.result({
  "duration": 13017547500,
  "status": "passed"
});
formatter.match({
  "location": "DetailsPageTests.iShouldBeRedirectedToTheDetailsPageOfTheUser()"
});
formatter.result({
  "duration": 984377900,
  "status": "passed"
});
formatter.after({
  "duration": 38451600,
  "status": "passed"
});
formatter.after({
  "duration": 75369300,
  "status": "passed"
});
formatter.after({
  "duration": 144624500,
  "status": "passed"
});
formatter.after({
  "duration": 100676800,
  "status": "passed"
});
formatter.before({
  "duration": 3279660400,
  "status": "passed"
});
formatter.before({
  "duration": 3068842400,
  "status": "passed"
});
formatter.before({
  "duration": 3007830100,
  "status": "passed"
});
formatter.before({
  "duration": 3132073100,
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
  "name": "I click on the Details button on row with id \"half-middle1\"",
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
  "location": "IndexPageTests.iAccessTheLandingPageOfCOS()"
});
formatter.result({
  "duration": 1138286400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "half-middle1",
      "offset": 46
    }
  ],
  "location": "DetailsPageTests.iClickOnTheDetailsButtonOnRowWithId(String)"
});
formatter.result({
  "duration": 12360058500,
  "status": "passed"
});
formatter.match({
  "location": "DetailsPageTests.iShouldBeRedirectedToTheDetailsPageOfTheUser()"
});
formatter.result({
  "duration": 1008250900,
  "status": "passed"
});
formatter.after({
  "duration": 44306700,
  "status": "passed"
});
formatter.after({
  "duration": 72631700,
  "status": "passed"
});
formatter.after({
  "duration": 78194400,
  "status": "passed"
});
formatter.after({
  "duration": 150166200,
  "status": "passed"
});
formatter.before({
  "duration": 3484663100,
  "status": "passed"
});
formatter.before({
  "duration": 3028102500,
  "status": "passed"
});
formatter.before({
  "duration": 3002727400,
  "status": "passed"
});
formatter.before({
  "duration": 3130176900,
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
  "name": "I click on the Details button on row with id \"middle\"",
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
  "location": "IndexPageTests.iAccessTheLandingPageOfCOS()"
});
formatter.result({
  "duration": 1057379900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "middle",
      "offset": 46
    }
  ],
  "location": "DetailsPageTests.iClickOnTheDetailsButtonOnRowWithId(String)"
});
formatter.result({
  "duration": 13232337400,
  "status": "passed"
});
formatter.match({
  "location": "DetailsPageTests.iShouldBeRedirectedToTheDetailsPageOfTheUser()"
});
formatter.result({
  "duration": 1027361300,
  "status": "passed"
});
formatter.after({
  "duration": 34973900,
  "status": "passed"
});
formatter.after({
  "duration": 68879600,
  "status": "passed"
});
formatter.after({
  "duration": 109209200,
  "status": "passed"
});
formatter.after({
  "duration": 101374200,
  "status": "passed"
});
formatter.before({
  "duration": 3636310900,
  "status": "passed"
});
formatter.before({
  "duration": 3102000900,
  "status": "passed"
});
formatter.before({
  "duration": 3120643000,
  "status": "passed"
});
formatter.before({
  "duration": 4942009600,
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
  "name": "I click on the Details button on row with id \"half-middle2\"",
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
  "location": "IndexPageTests.iAccessTheLandingPageOfCOS()"
});
formatter.result({
  "duration": 1702566600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "half-middle2",
      "offset": 46
    }
  ],
  "location": "DetailsPageTests.iClickOnTheDetailsButtonOnRowWithId(String)"
});
formatter.result({
  "duration": 13767548300,
  "status": "passed"
});
formatter.match({
  "location": "DetailsPageTests.iShouldBeRedirectedToTheDetailsPageOfTheUser()"
});
formatter.result({
  "duration": 1015397800,
  "status": "passed"
});
formatter.after({
  "duration": 40607800,
  "status": "passed"
});
formatter.after({
  "duration": 66243300,
  "status": "passed"
});
formatter.after({
  "duration": 119900300,
  "status": "passed"
});
formatter.after({
  "duration": 115558400,
  "status": "passed"
});
formatter.before({
  "duration": 3489070600,
  "status": "passed"
});
formatter.before({
  "duration": 3090917700,
  "status": "passed"
});
formatter.before({
  "duration": 3186422600,
  "status": "passed"
});
formatter.before({
  "duration": 3123929900,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Contacts table contains the details button and redirects to the Details page",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;contacts-table-contains-the-details-button-and-redirects-to-the-details-page;;6",
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
  "name": "I click on the Details button on row with id \"last\"",
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
  "location": "IndexPageTests.iAccessTheLandingPageOfCOS()"
});
formatter.result({
  "duration": 1156206700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "last",
      "offset": 46
    }
  ],
  "location": "DetailsPageTests.iClickOnTheDetailsButtonOnRowWithId(String)"
});
formatter.result({
  "duration": 14458953600,
  "status": "passed"
});
formatter.match({
  "location": "DetailsPageTests.iShouldBeRedirectedToTheDetailsPageOfTheUser()"
});
formatter.result({
  "duration": 1013020800,
  "status": "passed"
});
formatter.after({
  "duration": 34589300,
  "status": "passed"
});
formatter.after({
  "duration": 71796000,
  "status": "passed"
});
formatter.after({
  "duration": 97304500,
  "status": "passed"
});
formatter.after({
  "duration": 138195900,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 21,
      "value": "#Verify wrong link on details page"
    }
  ],
  "line": 22,
  "name": "Badly formatted contact link on Details page",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;badly-formatted-contact-link-on-details-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "I enter the details page with the following case \"\u003ccase\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I should be presented with an alarm box",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "Clicking the alarm box should redirect me to home page",
  "keyword": "And "
});
formatter.examples({
  "line": 27,
  "name": "",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;badly-formatted-contact-link-on-details-page;",
  "rows": [
    {
      "cells": [
        "case"
      ],
      "line": 28,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;badly-formatted-contact-link-on-details-page;;1"
    },
    {
      "cells": [
        "justDetails"
      ],
      "line": 29,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;badly-formatted-contact-link-on-details-page;;2"
    },
    {
      "cells": [
        "emptyId"
      ],
      "line": 30,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;badly-formatted-contact-link-on-details-page;;3"
    },
    {
      "cells": [
        "unfilteredId"
      ],
      "line": 31,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;badly-formatted-contact-link-on-details-page;;4"
    },
    {
      "cells": [
        "incorrectId"
      ],
      "line": 32,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;badly-formatted-contact-link-on-details-page;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3430053200,
  "status": "passed"
});
formatter.before({
  "duration": 3312395900,
  "status": "passed"
});
formatter.before({
  "duration": 3327916300,
  "status": "passed"
});
formatter.before({
  "duration": 3696372300,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Badly formatted contact link on Details page",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;badly-formatted-contact-link-on-details-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "I enter the details page with the following case \"justDetails\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I should be presented with an alarm box",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
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
  "duration": 1813106700,
  "status": "passed"
});
formatter.match({
  "location": "DetailsPageTests.iShouldBePresentedWithAnAlarmBox()"
});
formatter.result({
  "duration": 10569513200,
  "status": "passed"
});
formatter.match({
  "location": "DetailsPageTests.clickingTheAlarmBoxShouldRedirectMeToHomePage()"
});
formatter.result({
  "duration": 577059400,
  "status": "passed"
});
formatter.after({
  "duration": 34775600,
  "status": "passed"
});
formatter.after({
  "duration": 66564200,
  "status": "passed"
});
formatter.after({
  "duration": 144104400,
  "status": "passed"
});
formatter.after({
  "duration": 101494600,
  "status": "passed"
});
formatter.before({
  "duration": 3487683700,
  "status": "passed"
});
formatter.before({
  "duration": 3041971000,
  "status": "passed"
});
formatter.before({
  "duration": 3352068400,
  "status": "passed"
});
formatter.before({
  "duration": 3643609300,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Badly formatted contact link on Details page",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;badly-formatted-contact-link-on-details-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "I enter the details page with the following case \"emptyId\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I should be presented with an alarm box",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
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
  "duration": 2100764600,
  "status": "passed"
});
formatter.match({
  "location": "DetailsPageTests.iShouldBePresentedWithAnAlarmBox()"
});
formatter.result({
  "duration": 11071511500,
  "status": "passed"
});
formatter.match({
  "location": "DetailsPageTests.clickingTheAlarmBoxShouldRedirectMeToHomePage()"
});
formatter.result({
  "duration": 566504600,
  "status": "passed"
});
formatter.after({
  "duration": 35649600,
  "status": "passed"
});
formatter.after({
  "duration": 72539300,
  "status": "passed"
});
formatter.after({
  "duration": 141078900,
  "status": "passed"
});
formatter.after({
  "duration": 89749900,
  "status": "passed"
});
formatter.before({
  "duration": 3618643200,
  "status": "passed"
});
formatter.before({
  "duration": 3105936800,
  "status": "passed"
});
formatter.before({
  "duration": 3400202700,
  "status": "passed"
});
formatter.before({
  "duration": 3566588100,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Badly formatted contact link on Details page",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;badly-formatted-contact-link-on-details-page;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "I enter the details page with the following case \"unfilteredId\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I should be presented with an alarm box",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
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
  "duration": 2184495100,
  "status": "passed"
});
formatter.match({
  "location": "DetailsPageTests.iShouldBePresentedWithAnAlarmBox()"
});
formatter.result({
  "duration": 10477822100,
  "status": "passed"
});
formatter.match({
  "location": "DetailsPageTests.clickingTheAlarmBoxShouldRedirectMeToHomePage()"
});
formatter.result({
  "duration": 530958700,
  "status": "passed"
});
formatter.after({
  "duration": 38138200,
  "status": "passed"
});
formatter.after({
  "duration": 61351200,
  "status": "passed"
});
formatter.after({
  "duration": 95974300,
  "status": "passed"
});
formatter.after({
  "duration": 134165700,
  "status": "passed"
});
formatter.before({
  "duration": 3823355100,
  "status": "passed"
});
formatter.before({
  "duration": 3120304800,
  "status": "passed"
});
formatter.before({
  "duration": 3414914500,
  "status": "passed"
});
formatter.before({
  "duration": 3606749100,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Badly formatted contact link on Details page",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;badly-formatted-contact-link-on-details-page;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "I enter the details page with the following case \"incorrectId\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I should be presented with an alarm box",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
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
  "duration": 8640924900,
  "status": "passed"
});
formatter.match({
  "location": "DetailsPageTests.iShouldBePresentedWithAnAlarmBox()"
});
formatter.result({
  "duration": 10288263000,
  "status": "passed"
});
formatter.match({
  "location": "DetailsPageTests.clickingTheAlarmBoxShouldRedirectMeToHomePage()"
});
formatter.result({
  "duration": 617522100,
  "status": "passed"
});
formatter.after({
  "duration": 47246400,
  "status": "passed"
});
formatter.after({
  "duration": 123367500,
  "status": "passed"
});
formatter.after({
  "duration": 93554600,
  "status": "passed"
});
formatter.after({
  "duration": 166860100,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 34,
  "name": "Get back to Landing page from the Details page",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;get-back-to-landing-page-from-the-details-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 35,
  "name": "I access the landing page of COS and want to see the details of contact \"\u003cid\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "I press the back button",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "I return to the Landing Page",
  "keyword": "Then "
});
formatter.examples({
  "line": 39,
  "name": "",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;get-back-to-landing-page-from-the-details-page;",
  "rows": [
    {
      "cells": [
        "id"
      ],
      "line": 40,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;get-back-to-landing-page-from-the-details-page;;1"
    },
    {
      "cells": [
        "5"
      ],
      "line": 41,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;get-back-to-landing-page-from-the-details-page;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3506487600,
  "status": "passed"
});
formatter.before({
  "duration": 3265956800,
  "status": "passed"
});
formatter.before({
  "duration": 3421595300,
  "status": "passed"
});
formatter.before({
  "duration": 3546921400,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Get back to Landing page from the Details page",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;get-back-to-landing-page-from-the-details-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 35,
  "name": "I access the landing page of COS and want to see the details of contact \"5\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "I press the back button",
  "keyword": "When "
});
formatter.step({
  "line": 37,
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
  "duration": 17489256500,
  "status": "passed"
});
formatter.match({
  "location": "DetailsPageTests.iPressTheBackButton()"
});
formatter.result({
  "duration": 71121600,
  "status": "passed"
});
formatter.match({
  "location": "DetailsPageTests.iReturnToTheLandingPage()"
});
formatter.result({
  "duration": 10160477900,
  "status": "passed"
});
formatter.after({
  "duration": 30746900,
  "status": "passed"
});
formatter.after({
  "duration": 66396700,
  "status": "passed"
});
formatter.after({
  "duration": 224187700,
  "status": "passed"
});
formatter.after({
  "duration": 354491100,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 43,
  "name": "Image being correctly loaded from K8",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;image-being-correctly-loaded-from-k8",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 44,
  "name": "I access the landing page of COS and want to see the details of contact \"\u003cid\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 45,
  "name": "I should see the image with the specific size \"\u003cheight\u003e\", \"\u003cwidth\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 47,
  "name": "",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;image-being-correctly-loaded-from-k8;",
  "rows": [
    {
      "cells": [
        "id",
        "height",
        "width"
      ],
      "line": 48,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;image-being-correctly-loaded-from-k8;;1"
    },
    {
      "cells": [
        "1",
        "180",
        "180"
      ],
      "line": 49,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;image-being-correctly-loaded-from-k8;;2"
    },
    {
      "cells": [
        "5",
        "180",
        "180"
      ],
      "line": 50,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;image-being-correctly-loaded-from-k8;;3"
    },
    {
      "cells": [
        "9",
        "180",
        "180"
      ],
      "line": 51,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;image-being-correctly-loaded-from-k8;;4"
    },
    {
      "cells": [
        "15",
        "180",
        "180"
      ],
      "line": 52,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;image-being-correctly-loaded-from-k8;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3497967700,
  "status": "passed"
});
formatter.before({
  "duration": 3150223200,
  "status": "passed"
});
formatter.before({
  "duration": 3296078100,
  "status": "passed"
});
formatter.before({
  "duration": 3191269200,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
  "name": "Image being correctly loaded from K8",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;image-being-correctly-loaded-from-k8;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 44,
  "name": "I access the landing page of COS and want to see the details of contact \"1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 45,
  "name": "I should see the image with the specific size \"180\", \"180\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 73
    }
  ],
  "location": "DetailsPageTests.iAccessTheLandingPageOfCOSAndWantToSeeTheDetailsOfContact(String)"
});
formatter.result({
  "duration": 12160044400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "180",
      "offset": 47
    },
    {
      "val": "180",
      "offset": 54
    }
  ],
  "location": "DetailsPageTests.iShouldSeeTheImageWithTheSpecificSize(String,String)"
});
formatter.result({
  "duration": 574622300,
  "status": "passed"
});
formatter.after({
  "duration": 41900000,
  "status": "passed"
});
formatter.after({
  "duration": 89704700,
  "status": "passed"
});
formatter.after({
  "duration": 111395300,
  "status": "passed"
});
formatter.after({
  "duration": 100239400,
  "status": "passed"
});
formatter.before({
  "duration": 3106434300,
  "status": "passed"
});
formatter.before({
  "duration": 3291564800,
  "status": "passed"
});
formatter.before({
  "duration": 3155243700,
  "status": "passed"
});
formatter.before({
  "duration": 3397792500,
  "status": "passed"
});
formatter.scenario({
  "line": 50,
  "name": "Image being correctly loaded from K8",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;image-being-correctly-loaded-from-k8;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 44,
  "name": "I access the landing page of COS and want to see the details of contact \"5\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 45,
  "name": "I should see the image with the specific size \"180\", \"180\"",
  "matchedColumns": [
    1,
    2
  ],
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
  "duration": 12154552600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "180",
      "offset": 47
    },
    {
      "val": "180",
      "offset": 54
    }
  ],
  "location": "DetailsPageTests.iShouldSeeTheImageWithTheSpecificSize(String,String)"
});
formatter.result({
  "duration": 566239700,
  "status": "passed"
});
formatter.after({
  "duration": 28324900,
  "status": "passed"
});
formatter.after({
  "duration": 48912200,
  "status": "passed"
});
formatter.after({
  "duration": 80647600,
  "status": "passed"
});
formatter.after({
  "duration": 128213600,
  "status": "passed"
});
formatter.before({
  "duration": 2988732800,
  "status": "passed"
});
formatter.before({
  "duration": 3008891500,
  "status": "passed"
});
formatter.before({
  "duration": 3153766200,
  "status": "passed"
});
formatter.before({
  "duration": 3062262500,
  "status": "passed"
});
formatter.scenario({
  "line": 51,
  "name": "Image being correctly loaded from K8",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;image-being-correctly-loaded-from-k8;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 44,
  "name": "I access the landing page of COS and want to see the details of contact \"9\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 45,
  "name": "I should see the image with the specific size \"180\", \"180\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "9",
      "offset": 73
    }
  ],
  "location": "DetailsPageTests.iAccessTheLandingPageOfCOSAndWantToSeeTheDetailsOfContact(String)"
});
formatter.result({
  "duration": 12139096100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "180",
      "offset": 47
    },
    {
      "val": "180",
      "offset": 54
    }
  ],
  "location": "DetailsPageTests.iShouldSeeTheImageWithTheSpecificSize(String,String)"
});
formatter.result({
  "duration": 565837500,
  "status": "passed"
});
formatter.after({
  "duration": 29286600,
  "status": "passed"
});
formatter.after({
  "duration": 49813000,
  "status": "passed"
});
formatter.after({
  "duration": 97523500,
  "status": "passed"
});
formatter.after({
  "duration": 103431300,
  "status": "passed"
});
formatter.before({
  "duration": 3127339200,
  "status": "passed"
});
formatter.before({
  "duration": 3105708300,
  "status": "passed"
});
formatter.before({
  "duration": 3013140700,
  "status": "passed"
});
formatter.before({
  "duration": 3016352000,
  "status": "passed"
});
formatter.scenario({
  "line": 52,
  "name": "Image being correctly loaded from K8",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;image-being-correctly-loaded-from-k8;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 44,
  "name": "I access the landing page of COS and want to see the details of contact \"15\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 45,
  "name": "I should see the image with the specific size \"180\", \"180\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 73
    }
  ],
  "location": "DetailsPageTests.iAccessTheLandingPageOfCOSAndWantToSeeTheDetailsOfContact(String)"
});
formatter.result({
  "duration": 24334996800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "180",
      "offset": 47
    },
    {
      "val": "180",
      "offset": 54
    }
  ],
  "location": "DetailsPageTests.iShouldSeeTheImageWithTheSpecificSize(String,String)"
});
formatter.result({
  "duration": 765533600,
  "status": "passed"
});
formatter.after({
  "duration": 31270400,
  "status": "passed"
});
formatter.after({
  "duration": 117663900,
  "status": "passed"
});
formatter.after({
  "duration": 101737500,
  "status": "passed"
});
formatter.after({
  "duration": 106219900,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 54,
  "name": "Load contact image on Details page",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;load-contact-image-on-details-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 55,
  "name": "I access the landing page of COS and want to see the details of contact \"\u003cid\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 56,
  "name": "I can see the contact image",
  "keyword": "Then "
});
formatter.examples({
  "line": 58,
  "name": "",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;load-contact-image-on-details-page;",
  "rows": [
    {
      "cells": [
        "id"
      ],
      "line": 59,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;load-contact-image-on-details-page;;1"
    },
    {
      "cells": [
        "5"
      ],
      "line": 60,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;load-contact-image-on-details-page;;2"
    },
    {
      "cells": [
        "15"
      ],
      "line": 61,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;load-contact-image-on-details-page;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3299189400,
  "status": "passed"
});
formatter.before({
  "duration": 3030384300,
  "status": "passed"
});
formatter.before({
  "duration": 3111832500,
  "status": "passed"
});
formatter.before({
  "duration": 4577449300,
  "status": "passed"
});
formatter.scenario({
  "line": 60,
  "name": "Load contact image on Details page",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;load-contact-image-on-details-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 55,
  "name": "I access the landing page of COS and want to see the details of contact \"5\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 56,
  "name": "I can see the contact image",
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
  "duration": 24688841900,
  "status": "passed"
});
formatter.match({
  "location": "DetailsPageTests.iCanSeeTheContactImage()"
});
formatter.result({
  "duration": 556276600,
  "status": "passed"
});
formatter.after({
  "duration": 32418900,
  "status": "passed"
});
formatter.after({
  "duration": 61264000,
  "status": "passed"
});
formatter.after({
  "duration": 107127100,
  "status": "passed"
});
formatter.after({
  "duration": 136625900,
  "status": "passed"
});
formatter.before({
  "duration": 3557240200,
  "status": "passed"
});
formatter.before({
  "duration": 3400940500,
  "status": "passed"
});
formatter.before({
  "duration": 3606296500,
  "status": "passed"
});
formatter.before({
  "duration": 3591588100,
  "status": "passed"
});
formatter.scenario({
  "line": 61,
  "name": "Load contact image on Details page",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;load-contact-image-on-details-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 55,
  "name": "I access the landing page of COS and want to see the details of contact \"15\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 56,
  "name": "I can see the contact image",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 73
    }
  ],
  "location": "DetailsPageTests.iAccessTheLandingPageOfCOSAndWantToSeeTheDetailsOfContact(String)"
});
formatter.result({
  "duration": 23437705300,
  "status": "passed"
});
formatter.match({
  "location": "DetailsPageTests.iCanSeeTheContactImage()"
});
formatter.result({
  "duration": 552064500,
  "status": "passed"
});
formatter.after({
  "duration": 34872000,
  "status": "passed"
});
formatter.after({
  "duration": 110964600,
  "status": "passed"
});
formatter.after({
  "duration": 135879700,
  "status": "passed"
});
formatter.after({
  "duration": 94398500,
  "status": "passed"
});
formatter.uri("DuplicateFreePage.feature");
formatter.feature({
  "line": 1,
  "name": "Access to the Contacts Orchestrator Solution\u0027s (COS) Duplicates Free page",
  "description": "As a user\r\nI want to access the duplicate free page\r\nSo that I can see the list of the contacts that aren\u0027t duplicate",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-free-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3537012600,
  "status": "passed"
});
formatter.before({
  "duration": 3035504800,
  "status": "passed"
});
formatter.before({
  "duration": 5102574800,
  "status": "passed"
});
formatter.before({
  "duration": 5603698100,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Duplicate Free Page title should contains \"Duplicate Free\"",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-free-page;duplicate-free-page-title-should-contains-\"duplicate-free\"",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I access that landing page of COS and want to go to the list of possible duplicates",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I select random values",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click on the Accept Manually",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on the Confirm",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "the title of the duplicate page should be \"Duplicate Free\"",
  "keyword": "Then "
});
formatter.match({
  "location": "DuplicateFreePageTests.iAccessThatLandingPageOfCOSAndWantToGoToTheListOfPossibleDuplicates()"
});
formatter.result({
  "duration": 5295987700,
  "status": "passed"
});
formatter.match({
  "location": "DuplicateFreePageTests.iSelectRandomValues()"
});
formatter.result({
  "duration": 5400091900,
  "status": "passed"
});
formatter.match({
  "location": "DuplicateFreePageTests.iClickOnTheAcceptManually()"
});
formatter.result({
  "duration": 64363400,
  "status": "passed"
});
formatter.match({
  "location": "DuplicateFreePageTests.iClickOnTheConfirm()"
});
formatter.result({
  "duration": 761767400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Duplicate Free",
      "offset": 43
    }
  ],
  "location": "DuplicateFreePageTests.theTitleOfTheDuplicatePageShouldBe(String)"
});
formatter.result({
  "duration": 4343100,
  "status": "passed"
});
formatter.after({
  "duration": 39462200,
  "status": "passed"
});
formatter.after({
  "duration": 50764500,
  "status": "passed"
});
formatter.after({
  "duration": 106603200,
  "status": "passed"
});
formatter.after({
  "duration": 94398600,
  "status": "passed"
});
formatter.before({
  "duration": 3585549200,
  "status": "passed"
});
formatter.before({
  "duration": 3448562000,
  "status": "passed"
});
formatter.before({
  "duration": 3479235400,
  "status": "passed"
});
formatter.before({
  "duration": 4637008000,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Duplicate Free Page contains all the duplicated that are marked as non-duplicate",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-free-page;duplicate-free-page-contains-all-the-duplicated-that-are-marked-as-non-duplicate",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "I access that landing page of COS and want to go to the list of possible duplicates",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I select random values",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on the Accept Manually",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on the Confirm",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I should see the same number of contacts related to the non-duplicate component",
  "keyword": "Then "
});
formatter.match({
  "location": "DuplicateFreePageTests.iAccessThatLandingPageOfCOSAndWantToGoToTheListOfPossibleDuplicates()"
});
formatter.result({
  "duration": 3044089900,
  "status": "passed"
});
formatter.match({
  "location": "DuplicateFreePageTests.iSelectRandomValues()"
});
formatter.result({
  "duration": 5177240100,
  "status": "passed"
});
formatter.match({
  "location": "DuplicateFreePageTests.iClickOnTheAcceptManually()"
});
formatter.result({
  "duration": 65040300,
  "status": "passed"
});
formatter.match({
  "location": "DuplicateFreePageTests.iClickOnTheConfirm()"
});
formatter.result({
  "duration": 804069300,
  "status": "passed"
});
formatter.match({
  "location": "DuplicateFreePageTests.iShouldSeeTheSameNumberOfContactsRelatedToTheNonDuplicateComponent()"
});
formatter.result({
  "duration": 25178900,
  "status": "passed"
});
formatter.after({
  "duration": 40544500,
  "status": "passed"
});
formatter.after({
  "duration": 53449900,
  "status": "passed"
});
formatter.after({
  "duration": 116591200,
  "status": "passed"
});
formatter.after({
  "duration": 92281800,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 20,
  "name": "Duplicate Free Page seems to have data that is coherent with the duplicate free",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-free-page;duplicate-free-page-seems-to-have-data-that-is-coherent-with-the-duplicate-free",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 21,
  "name": "I access that landing page of COS and want to go to the list of possible duplicates",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I select random values",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I click on the Accept Manually",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click on the Confirm",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I should see the contact as in the duplicateFree database position, \"\u003cposition\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 27,
  "name": "",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-free-page;duplicate-free-page-seems-to-have-data-that-is-coherent-with-the-duplicate-free;",
  "rows": [
    {
      "cells": [
        "position"
      ],
      "line": 28,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-free-page;duplicate-free-page-seems-to-have-data-that-is-coherent-with-the-duplicate-free;;1"
    },
    {
      "cells": [
        "first"
      ],
      "line": 29,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-free-page;duplicate-free-page-seems-to-have-data-that-is-coherent-with-the-duplicate-free;;2"
    },
    {
      "cells": [
        "half-middle1"
      ],
      "line": 30,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-free-page;duplicate-free-page-seems-to-have-data-that-is-coherent-with-the-duplicate-free;;3"
    },
    {
      "cells": [
        "middle"
      ],
      "line": 31,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-free-page;duplicate-free-page-seems-to-have-data-that-is-coherent-with-the-duplicate-free;;4"
    },
    {
      "cells": [
        "half-middle2"
      ],
      "line": 32,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-free-page;duplicate-free-page-seems-to-have-data-that-is-coherent-with-the-duplicate-free;;5"
    },
    {
      "cells": [
        "last"
      ],
      "line": 33,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-free-page;duplicate-free-page-seems-to-have-data-that-is-coherent-with-the-duplicate-free;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3457995200,
  "status": "passed"
});
formatter.before({
  "duration": 3056372200,
  "status": "passed"
});
formatter.before({
  "duration": 3063164100,
  "status": "passed"
});
formatter.before({
  "duration": 3865667300,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Duplicate Free Page seems to have data that is coherent with the duplicate free",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-free-page;duplicate-free-page-seems-to-have-data-that-is-coherent-with-the-duplicate-free;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 21,
  "name": "I access that landing page of COS and want to go to the list of possible duplicates",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I select random values",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I click on the Accept Manually",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click on the Confirm",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I should see the contact as in the duplicateFree database position, \"first\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "DuplicateFreePageTests.iAccessThatLandingPageOfCOSAndWantToGoToTheListOfPossibleDuplicates()"
});
formatter.result({
  "duration": 2742016100,
  "status": "passed"
});
formatter.match({
  "location": "DuplicateFreePageTests.iSelectRandomValues()"
});
formatter.result({
  "duration": 5994058700,
  "status": "passed"
});
formatter.match({
  "location": "DuplicateFreePageTests.iClickOnTheAcceptManually()"
});
formatter.result({
  "duration": 65264900,
  "status": "passed"
});
formatter.match({
  "location": "DuplicateFreePageTests.iClickOnTheConfirm()"
});
formatter.result({
  "duration": 902042500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "first",
      "offset": 69
    }
  ],
  "location": "DuplicateFreePageTests.iShouldSeeTheContactAsInTheDuplicateFreeDatabasePosition(String)"
});
formatter.result({
  "duration": 96542300,
  "status": "passed"
});
formatter.after({
  "duration": 55050500,
  "status": "passed"
});
formatter.after({
  "duration": 74467400,
  "status": "passed"
});
formatter.after({
  "duration": 130987100,
  "status": "passed"
});
formatter.after({
  "duration": 70821300,
  "status": "passed"
});
formatter.before({
  "duration": 3996834700,
  "status": "passed"
});
formatter.before({
  "duration": 3113281500,
  "status": "passed"
});
formatter.before({
  "duration": 3437715800,
  "status": "passed"
});
formatter.before({
  "duration": 3108347700,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Duplicate Free Page seems to have data that is coherent with the duplicate free",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-free-page;duplicate-free-page-seems-to-have-data-that-is-coherent-with-the-duplicate-free;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 21,
  "name": "I access that landing page of COS and want to go to the list of possible duplicates",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I select random values",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I click on the Accept Manually",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click on the Confirm",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I should see the contact as in the duplicateFree database position, \"half-middle1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "DuplicateFreePageTests.iAccessThatLandingPageOfCOSAndWantToGoToTheListOfPossibleDuplicates()"
});
formatter.result({
  "duration": 2127288600,
  "status": "passed"
});
formatter.match({
  "location": "DuplicateFreePageTests.iSelectRandomValues()"
});
formatter.result({
  "duration": 5378077500,
  "status": "passed"
});
formatter.match({
  "location": "DuplicateFreePageTests.iClickOnTheAcceptManually()"
});
formatter.result({
  "duration": 69874300,
  "status": "passed"
});
formatter.match({
  "location": "DuplicateFreePageTests.iClickOnTheConfirm()"
});
formatter.result({
  "duration": 1011809100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "half-middle1",
      "offset": 69
    }
  ],
  "location": "DuplicateFreePageTests.iShouldSeeTheContactAsInTheDuplicateFreeDatabasePosition(String)"
});
formatter.result({
  "duration": 698289500,
  "status": "passed"
});
formatter.after({
  "duration": 38144000,
  "status": "passed"
});
formatter.after({
  "duration": 54080700,
  "status": "passed"
});
formatter.after({
  "duration": 106382200,
  "status": "passed"
});
formatter.after({
  "duration": 93846300,
  "status": "passed"
});
formatter.before({
  "duration": 3766290600,
  "status": "passed"
});
formatter.before({
  "duration": 3100424900,
  "status": "passed"
});
formatter.before({
  "duration": 3119618900,
  "status": "passed"
});
formatter.before({
  "duration": 3363936400,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Duplicate Free Page seems to have data that is coherent with the duplicate free",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-free-page;duplicate-free-page-seems-to-have-data-that-is-coherent-with-the-duplicate-free;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 21,
  "name": "I access that landing page of COS and want to go to the list of possible duplicates",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I select random values",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I click on the Accept Manually",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click on the Confirm",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I should see the contact as in the duplicateFree database position, \"middle\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "DuplicateFreePageTests.iAccessThatLandingPageOfCOSAndWantToGoToTheListOfPossibleDuplicates()"
});
formatter.result({
  "duration": 4129550200,
  "status": "passed"
});
formatter.match({
  "location": "DuplicateFreePageTests.iSelectRandomValues()"
});
formatter.result({
  "duration": 5361713600,
  "status": "passed"
});
formatter.match({
  "location": "DuplicateFreePageTests.iClickOnTheAcceptManually()"
});
formatter.result({
  "duration": 65654600,
  "status": "passed"
});
formatter.match({
  "location": "DuplicateFreePageTests.iClickOnTheConfirm()"
});
formatter.result({
  "duration": 874118700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "middle",
      "offset": 69
    }
  ],
  "location": "DuplicateFreePageTests.iShouldSeeTheContactAsInTheDuplicateFreeDatabasePosition(String)"
});
formatter.result({
  "duration": 1417361400,
  "status": "passed"
});
formatter.after({
  "duration": 38509600,
  "status": "passed"
});
formatter.after({
  "duration": 55421800,
  "status": "passed"
});
formatter.after({
  "duration": 71027300,
  "status": "passed"
});
formatter.after({
  "duration": 149672300,
  "status": "passed"
});
formatter.before({
  "duration": 3895509900,
  "status": "passed"
});
formatter.before({
  "duration": 3190689100,
  "status": "passed"
});
formatter.before({
  "duration": 3142159600,
  "status": "passed"
});
formatter.before({
  "duration": 3177374900,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Duplicate Free Page seems to have data that is coherent with the duplicate free",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-free-page;duplicate-free-page-seems-to-have-data-that-is-coherent-with-the-duplicate-free;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 21,
  "name": "I access that landing page of COS and want to go to the list of possible duplicates",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I select random values",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I click on the Accept Manually",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click on the Confirm",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I should see the contact as in the duplicateFree database position, \"half-middle2\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "DuplicateFreePageTests.iAccessThatLandingPageOfCOSAndWantToGoToTheListOfPossibleDuplicates()"
});
formatter.result({
  "duration": 2294819700,
  "status": "passed"
});
formatter.match({
  "location": "DuplicateFreePageTests.iSelectRandomValues()"
});
formatter.result({
  "duration": 5372971200,
  "status": "passed"
});
formatter.match({
  "location": "DuplicateFreePageTests.iClickOnTheAcceptManually()"
});
formatter.result({
  "duration": 64989400,
  "status": "passed"
});
formatter.match({
  "location": "DuplicateFreePageTests.iClickOnTheConfirm()"
});
formatter.result({
  "duration": 869736700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "half-middle2",
      "offset": 69
    }
  ],
  "location": "DuplicateFreePageTests.iShouldSeeTheContactAsInTheDuplicateFreeDatabasePosition(String)"
});
formatter.result({
  "duration": 2153130700,
  "status": "passed"
});
formatter.after({
  "duration": 44837300,
  "status": "passed"
});
formatter.after({
  "duration": 93791900,
  "status": "passed"
});
formatter.after({
  "duration": 117411800,
  "status": "passed"
});
formatter.after({
  "duration": 96882600,
  "status": "passed"
});
formatter.before({
  "duration": 3510580100,
  "status": "passed"
});
formatter.before({
  "duration": 3125876700,
  "status": "passed"
});
formatter.before({
  "duration": 3158768100,
  "status": "passed"
});
formatter.before({
  "duration": 3299894600,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Duplicate Free Page seems to have data that is coherent with the duplicate free",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-free-page;duplicate-free-page-seems-to-have-data-that-is-coherent-with-the-duplicate-free;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 21,
  "name": "I access that landing page of COS and want to go to the list of possible duplicates",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I select random values",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I click on the Accept Manually",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click on the Confirm",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I should see the contact as in the duplicateFree database position, \"last\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "DuplicateFreePageTests.iAccessThatLandingPageOfCOSAndWantToGoToTheListOfPossibleDuplicates()"
});
formatter.result({
  "duration": 1802259400,
  "status": "passed"
});
formatter.match({
  "location": "DuplicateFreePageTests.iSelectRandomValues()"
});
formatter.result({
  "duration": 5339664500,
  "status": "passed"
});
formatter.match({
  "location": "DuplicateFreePageTests.iClickOnTheAcceptManually()"
});
formatter.result({
  "duration": 64739500,
  "status": "passed"
});
formatter.match({
  "location": "DuplicateFreePageTests.iClickOnTheConfirm()"
});
formatter.result({
  "duration": 880267800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "last",
      "offset": 69
    }
  ],
  "location": "DuplicateFreePageTests.iShouldSeeTheContactAsInTheDuplicateFreeDatabasePosition(String)"
});
formatter.result({
  "duration": 2873574500,
  "status": "passed"
});
formatter.after({
  "duration": 41227300,
  "status": "passed"
});
formatter.after({
  "duration": 60358100,
  "status": "passed"
});
formatter.after({
  "duration": 110850600,
  "status": "passed"
});
formatter.after({
  "duration": 134052000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 35,
  "name": "Duplicate Free Page contains the table and columns are sortable",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-free-page;duplicate-free-page-contains-the-table-and-columns-are-sortable",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 36,
  "name": "I access that landing page of COS and want to go to the list of possible duplicates",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "I select random values",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "I click on the Accept Manually",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I click on the Confirm",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I sort column \"\u003ccolumn\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "The first column should contain the most relevant contact regarded the sorted \"\u003ccolumn\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 43,
  "name": "",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-free-page;duplicate-free-page-contains-the-table-and-columns-are-sortable;",
  "rows": [
    {
      "cells": [
        "column"
      ],
      "line": 44,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-free-page;duplicate-free-page-contains-the-table-and-columns-are-sortable;;1"
    },
    {
      "cells": [
        "ID"
      ],
      "line": 45,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-free-page;duplicate-free-page-contains-the-table-and-columns-are-sortable;;2"
    },
    {
      "cells": [
        "GivenName"
      ],
      "line": 46,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-free-page;duplicate-free-page-contains-the-table-and-columns-are-sortable;;3"
    },
    {
      "cells": [
        "Surname"
      ],
      "line": 47,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-free-page;duplicate-free-page-contains-the-table-and-columns-are-sortable;;4"
    },
    {
      "cells": [
        "Phone"
      ],
      "line": 48,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-free-page;duplicate-free-page-contains-the-table-and-columns-are-sortable;;5"
    },
    {
      "cells": [
        "Source"
      ],
      "line": 49,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-free-page;duplicate-free-page-contains-the-table-and-columns-are-sortable;;6"
    },
    {
      "cells": [
        "City"
      ],
      "line": 50,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-free-page;duplicate-free-page-contains-the-table-and-columns-are-sortable;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3539273600,
  "status": "passed"
});
formatter.before({
  "duration": 3212716700,
  "status": "passed"
});
formatter.before({
  "duration": 3254547900,
  "status": "passed"
});
formatter.before({
  "duration": 3175191500,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "Duplicate Free Page contains the table and columns are sortable",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-free-page;duplicate-free-page-contains-the-table-and-columns-are-sortable;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 36,
  "name": "I access that landing page of COS and want to go to the list of possible duplicates",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "I select random values",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "I click on the Accept Manually",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I click on the Confirm",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I sort column \"ID\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "The first column should contain the most relevant contact regarded the sorted \"ID\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "DuplicateFreePageTests.iAccessThatLandingPageOfCOSAndWantToGoToTheListOfPossibleDuplicates()"
});
formatter.result({
  "duration": 2269131200,
  "status": "passed"
});
formatter.match({
  "location": "DuplicateFreePageTests.iSelectRandomValues()"
});
formatter.result({
  "duration": 5410926400,
  "status": "passed"
});
formatter.match({
  "location": "DuplicateFreePageTests.iClickOnTheAcceptManually()"
});
formatter.result({
  "duration": 64534100,
  "status": "passed"
});
formatter.match({
  "location": "DuplicateFreePageTests.iClickOnTheConfirm()"
});
formatter.result({
  "duration": 764151300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ID",
      "offset": 15
    }
  ],
  "location": "DuplicateFreePageTests.iSortColumn(String)"
});
formatter.result({
  "duration": 61099600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ID",
      "offset": 79
    }
  ],
  "location": "DuplicateFreePageTests.theFirstColumnShouldContainTheMostRelevantContactRegardedTheSorted(String)"
});
formatter.result({
  "duration": 103440800,
  "status": "passed"
});
formatter.after({
  "duration": 38756100,
  "status": "passed"
});
formatter.after({
  "duration": 54726500,
  "status": "passed"
});
formatter.after({
  "duration": 119710600,
  "status": "passed"
});
formatter.after({
  "duration": 83743300,
  "status": "passed"
});
formatter.before({
  "duration": 3814642000,
  "status": "passed"
});
formatter.before({
  "duration": 3162804900,
  "status": "passed"
});
formatter.before({
  "duration": 3165310500,
  "status": "passed"
});
formatter.before({
  "duration": 3453276000,
  "status": "passed"
});
formatter.scenario({
  "line": 46,
  "name": "Duplicate Free Page contains the table and columns are sortable",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-free-page;duplicate-free-page-contains-the-table-and-columns-are-sortable;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 36,
  "name": "I access that landing page of COS and want to go to the list of possible duplicates",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "I select random values",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "I click on the Accept Manually",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I click on the Confirm",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I sort column \"GivenName\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "The first column should contain the most relevant contact regarded the sorted \"GivenName\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "DuplicateFreePageTests.iAccessThatLandingPageOfCOSAndWantToGoToTheListOfPossibleDuplicates()"
});
formatter.result({
  "duration": 2185187400,
  "status": "passed"
});
formatter.match({
  "location": "DuplicateFreePageTests.iSelectRandomValues()"
});
formatter.result({
  "duration": 5305958300,
  "status": "passed"
});
formatter.match({
  "location": "DuplicateFreePageTests.iClickOnTheAcceptManually()"
});
formatter.result({
  "duration": 62867700,
  "status": "passed"
});
formatter.match({
  "location": "DuplicateFreePageTests.iClickOnTheConfirm()"
});
formatter.result({
  "duration": 780524300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GivenName",
      "offset": 15
    }
  ],
  "location": "DuplicateFreePageTests.iSortColumn(String)"
});
formatter.result({
  "duration": 69862800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GivenName",
      "offset": 79
    }
  ],
  "location": "DuplicateFreePageTests.theFirstColumnShouldContainTheMostRelevantContactRegardedTheSorted(String)"
});
formatter.result({
  "duration": 94482700,
  "status": "passed"
});
formatter.after({
  "duration": 39643600,
  "status": "passed"
});
formatter.after({
  "duration": 52532700,
  "status": "passed"
});
formatter.after({
  "duration": 83150900,
  "status": "passed"
});
formatter.after({
  "duration": 126783300,
  "status": "passed"
});
formatter.before({
  "duration": 3648471100,
  "status": "passed"
});
formatter.before({
  "duration": 3147305500,
  "status": "passed"
});
formatter.before({
  "duration": 3215303800,
  "status": "passed"
});
formatter.before({
  "duration": 3169723600,
  "status": "passed"
});
formatter.scenario({
  "line": 47,
  "name": "Duplicate Free Page contains the table and columns are sortable",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-free-page;duplicate-free-page-contains-the-table-and-columns-are-sortable;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 36,
  "name": "I access that landing page of COS and want to go to the list of possible duplicates",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "I select random values",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "I click on the Accept Manually",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I click on the Confirm",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I sort column \"Surname\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "The first column should contain the most relevant contact regarded the sorted \"Surname\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "DuplicateFreePageTests.iAccessThatLandingPageOfCOSAndWantToGoToTheListOfPossibleDuplicates()"
});
formatter.result({
  "duration": 2084324900,
  "status": "passed"
});
formatter.match({
  "location": "DuplicateFreePageTests.iSelectRandomValues()"
});
formatter.result({
  "duration": 5584180200,
  "status": "passed"
});
formatter.match({
  "location": "DuplicateFreePageTests.iClickOnTheAcceptManually()"
});
formatter.result({
  "duration": 65202000,
  "status": "passed"
});
formatter.match({
  "location": "DuplicateFreePageTests.iClickOnTheConfirm()"
});
formatter.result({
  "duration": 808268600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Surname",
      "offset": 15
    }
  ],
  "location": "DuplicateFreePageTests.iSortColumn(String)"
});
formatter.result({
  "duration": 82605000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Surname",
      "offset": 79
    }
  ],
  "location": "DuplicateFreePageTests.theFirstColumnShouldContainTheMostRelevantContactRegardedTheSorted(String)"
});
formatter.result({
  "duration": 93232200,
  "status": "passed"
});
formatter.after({
  "duration": 38475800,
  "status": "passed"
});
formatter.after({
  "duration": 59955700,
  "status": "passed"
});
formatter.after({
  "duration": 67267800,
  "status": "passed"
});
formatter.after({
  "duration": 156516900,
  "status": "passed"
});
formatter.before({
  "duration": 3531277200,
  "status": "passed"
});
formatter.before({
  "duration": 3175380500,
  "status": "passed"
});
formatter.before({
  "duration": 3199936700,
  "status": "passed"
});
formatter.before({
  "duration": 3156158600,
  "status": "passed"
});
formatter.scenario({
  "line": 48,
  "name": "Duplicate Free Page contains the table and columns are sortable",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-free-page;duplicate-free-page-contains-the-table-and-columns-are-sortable;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 36,
  "name": "I access that landing page of COS and want to go to the list of possible duplicates",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "I select random values",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "I click on the Accept Manually",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I click on the Confirm",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I sort column \"Phone\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "The first column should contain the most relevant contact regarded the sorted \"Phone\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "DuplicateFreePageTests.iAccessThatLandingPageOfCOSAndWantToGoToTheListOfPossibleDuplicates()"
});
formatter.result({
  "duration": 1929279200,
  "status": "passed"
});
formatter.match({
  "location": "DuplicateFreePageTests.iSelectRandomValues()"
});
formatter.result({
  "duration": 5312574400,
  "status": "passed"
});
formatter.match({
  "location": "DuplicateFreePageTests.iClickOnTheAcceptManually()"
});
formatter.result({
  "duration": 85947500,
  "status": "passed"
});
formatter.match({
  "location": "DuplicateFreePageTests.iClickOnTheConfirm()"
});
formatter.result({
  "duration": 876850800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Phone",
      "offset": 15
    }
  ],
  "location": "DuplicateFreePageTests.iSortColumn(String)"
});
formatter.result({
  "duration": 104475700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Phone",
      "offset": 79
    }
  ],
  "location": "DuplicateFreePageTests.theFirstColumnShouldContainTheMostRelevantContactRegardedTheSorted(String)"
});
formatter.result({
  "duration": 86529900,
  "status": "passed"
});
formatter.after({
  "duration": 48377800,
  "status": "passed"
});
formatter.after({
  "duration": 82014600,
  "status": "passed"
});
formatter.after({
  "duration": 121564200,
  "status": "passed"
});
formatter.after({
  "duration": 106777700,
  "status": "passed"
});
formatter.before({
  "duration": 3556475200,
  "status": "passed"
});
formatter.before({
  "duration": 3203737300,
  "status": "passed"
});
formatter.before({
  "duration": 3255880800,
  "status": "passed"
});
formatter.before({
  "duration": 3132245800,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
  "name": "Duplicate Free Page contains the table and columns are sortable",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-free-page;duplicate-free-page-contains-the-table-and-columns-are-sortable;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 36,
  "name": "I access that landing page of COS and want to go to the list of possible duplicates",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "I select random values",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "I click on the Accept Manually",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I click on the Confirm",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I sort column \"Source\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "The first column should contain the most relevant contact regarded the sorted \"Source\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "DuplicateFreePageTests.iAccessThatLandingPageOfCOSAndWantToGoToTheListOfPossibleDuplicates()"
});
formatter.result({
  "duration": 1956464000,
  "status": "passed"
});
formatter.match({
  "location": "DuplicateFreePageTests.iSelectRandomValues()"
});
formatter.result({
  "duration": 5463410000,
  "status": "passed"
});
formatter.match({
  "location": "DuplicateFreePageTests.iClickOnTheAcceptManually()"
});
formatter.result({
  "duration": 63850500,
  "status": "passed"
});
formatter.match({
  "location": "DuplicateFreePageTests.iClickOnTheConfirm()"
});
formatter.result({
  "duration": 882138300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Source",
      "offset": 15
    }
  ],
  "location": "DuplicateFreePageTests.iSortColumn(String)"
});
formatter.result({
  "duration": 99108500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Source",
      "offset": 79
    }
  ],
  "location": "DuplicateFreePageTests.theFirstColumnShouldContainTheMostRelevantContactRegardedTheSorted(String)"
});
formatter.result({
  "duration": 91565400,
  "status": "passed"
});
formatter.after({
  "duration": 37137900,
  "status": "passed"
});
formatter.after({
  "duration": 55385300,
  "status": "passed"
});
formatter.after({
  "duration": 89002000,
  "status": "passed"
});
formatter.after({
  "duration": 124086700,
  "status": "passed"
});
formatter.before({
  "duration": 5243468100,
  "status": "passed"
});
formatter.before({
  "duration": 3179545600,
  "status": "passed"
});
formatter.before({
  "duration": 3175957300,
  "status": "passed"
});
formatter.before({
  "duration": 3253862200,
  "status": "passed"
});
formatter.scenario({
  "line": 50,
  "name": "Duplicate Free Page contains the table and columns are sortable",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-free-page;duplicate-free-page-contains-the-table-and-columns-are-sortable;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 36,
  "name": "I access that landing page of COS and want to go to the list of possible duplicates",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "I select random values",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "I click on the Accept Manually",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I click on the Confirm",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I sort column \"City\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "The first column should contain the most relevant contact regarded the sorted \"City\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "DuplicateFreePageTests.iAccessThatLandingPageOfCOSAndWantToGoToTheListOfPossibleDuplicates()"
});
formatter.result({
  "duration": 1777108900,
  "status": "passed"
});
formatter.match({
  "location": "DuplicateFreePageTests.iSelectRandomValues()"
});
formatter.result({
  "duration": 5512160700,
  "status": "passed"
});
formatter.match({
  "location": "DuplicateFreePageTests.iClickOnTheAcceptManually()"
});
formatter.result({
  "duration": 66669900,
  "status": "passed"
});
formatter.match({
  "location": "DuplicateFreePageTests.iClickOnTheConfirm()"
});
formatter.result({
  "duration": 879229600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "City",
      "offset": 15
    }
  ],
  "location": "DuplicateFreePageTests.iSortColumn(String)"
});
formatter.result({
  "duration": 114768400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "City",
      "offset": 79
    }
  ],
  "location": "DuplicateFreePageTests.theFirstColumnShouldContainTheMostRelevantContactRegardedTheSorted(String)"
});
formatter.result({
  "duration": 87871800,
  "status": "passed"
});
formatter.after({
  "duration": 50666700,
  "status": "passed"
});
formatter.after({
  "duration": 92697000,
  "status": "passed"
});
formatter.after({
  "duration": 190468400,
  "status": "passed"
});
formatter.after({
  "duration": 92668600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 52,
  "name": "Duplicate Free Page contains the table and the search bar is operational",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-free-page;duplicate-free-page-contains-the-table-and-the-search-bar-is-operational",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 53,
  "name": "I access that landing page of COS and want to go to the list of possible duplicates",
  "keyword": "Given "
});
formatter.step({
  "line": 54,
  "name": "I select random values",
  "keyword": "When "
});
formatter.step({
  "line": 55,
  "name": "I click on the Accept Manually",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "I click on the Confirm",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "I search in the search bar for \"\u003csearch\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "I should only see columns that are related to what I searched for (\"\u003csearch\u003e\")",
  "keyword": "Then "
});
formatter.examples({
  "line": 60,
  "name": "",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-free-page;duplicate-free-page-contains-the-table-and-the-search-bar-is-operational;",
  "rows": [
    {
      "cells": [
        "search"
      ],
      "line": 61,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-free-page;duplicate-free-page-contains-the-table-and-the-search-bar-is-operational;;1"
    },
    {
      "cells": [
        "Viseu"
      ],
      "line": 62,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-free-page;duplicate-free-page-contains-the-table-and-the-search-bar-is-operational;;2"
    },
    {
      "cells": [
        "Joao"
      ],
      "line": 63,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-free-page;duplicate-free-page-contains-the-table-and-the-search-bar-is-operational;;3"
    },
    {
      "cells": [
        "234216838"
      ],
      "line": 64,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-free-page;duplicate-free-page-contains-the-table-and-the-search-bar-is-operational;;4"
    },
    {
      "cells": [
        "Almeida"
      ],
      "line": 65,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-free-page;duplicate-free-page-contains-the-table-and-the-search-bar-is-operational;;5"
    },
    {
      "cells": [
        "Something"
      ],
      "line": 66,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-free-page;duplicate-free-page-contains-the-table-and-the-search-bar-is-operational;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3671546100,
  "status": "passed"
});
formatter.before({
  "duration": 3181699200,
  "status": "passed"
});
formatter.before({
  "duration": 3200918900,
  "status": "passed"
});
formatter.before({
  "duration": 3181942500,
  "status": "passed"
});
formatter.scenario({
  "line": 62,
  "name": "Duplicate Free Page contains the table and the search bar is operational",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-free-page;duplicate-free-page-contains-the-table-and-the-search-bar-is-operational;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 53,
  "name": "I access that landing page of COS and want to go to the list of possible duplicates",
  "keyword": "Given "
});
formatter.step({
  "line": 54,
  "name": "I select random values",
  "keyword": "When "
});
formatter.step({
  "line": 55,
  "name": "I click on the Accept Manually",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "I click on the Confirm",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "I search in the search bar for \"Viseu\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "I should only see columns that are related to what I searched for (\"Viseu\")",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "DuplicateFreePageTests.iAccessThatLandingPageOfCOSAndWantToGoToTheListOfPossibleDuplicates()"
});
formatter.result({
  "duration": 1756093800,
  "status": "passed"
});
formatter.match({
  "location": "DuplicateFreePageTests.iSelectRandomValues()"
});
formatter.result({
  "duration": 5476407600,
  "status": "passed"
});
formatter.match({
  "location": "DuplicateFreePageTests.iClickOnTheAcceptManually()"
});
formatter.result({
  "duration": 70482100,
  "status": "passed"
});
formatter.match({
  "location": "DuplicateFreePageTests.iClickOnTheConfirm()"
});
formatter.result({
  "duration": 1164617000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Viseu",
      "offset": 32
    }
  ],
  "location": "DuplicateFreePageTests.iSearchInTheSearchBarFor(String)"
});
formatter.result({
  "duration": 114356700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Viseu",
      "offset": 68
    }
  ],
  "location": "DuplicateFreePageTests.iShouldOnlySeeColumnsThatAreRelatedToWhatISearchedFor(String)"
});
formatter.result({
  "duration": 14176000,
  "status": "passed"
});
formatter.after({
  "duration": 45258400,
  "status": "passed"
});
formatter.after({
  "duration": 88989400,
  "status": "passed"
});
formatter.after({
  "duration": 82618100,
  "status": "passed"
});
formatter.after({
  "duration": 146241600,
  "status": "passed"
});
formatter.before({
  "duration": 4167656700,
  "status": "passed"
});
formatter.before({
  "duration": 3245927200,
  "status": "passed"
});
formatter.before({
  "duration": 3271346700,
  "status": "passed"
});
formatter.before({
  "duration": 3299553300,
  "status": "passed"
});
formatter.scenario({
  "line": 63,
  "name": "Duplicate Free Page contains the table and the search bar is operational",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-free-page;duplicate-free-page-contains-the-table-and-the-search-bar-is-operational;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 53,
  "name": "I access that landing page of COS and want to go to the list of possible duplicates",
  "keyword": "Given "
});
formatter.step({
  "line": 54,
  "name": "I select random values",
  "keyword": "When "
});
formatter.step({
  "line": 55,
  "name": "I click on the Accept Manually",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "I click on the Confirm",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "I search in the search bar for \"Joao\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "I should only see columns that are related to what I searched for (\"Joao\")",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "DuplicateFreePageTests.iAccessThatLandingPageOfCOSAndWantToGoToTheListOfPossibleDuplicates()"
});
formatter.result({
  "duration": 2058317900,
  "status": "passed"
});
formatter.match({
  "location": "DuplicateFreePageTests.iSelectRandomValues()"
});
formatter.result({
  "duration": 5509626500,
  "status": "passed"
});
formatter.match({
  "location": "DuplicateFreePageTests.iClickOnTheAcceptManually()"
});
formatter.result({
  "duration": 69006200,
  "status": "passed"
});
formatter.match({
  "location": "DuplicateFreePageTests.iClickOnTheConfirm()"
});
formatter.result({
  "duration": 1103843200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Joao",
      "offset": 32
    }
  ],
  "location": "DuplicateFreePageTests.iSearchInTheSearchBarFor(String)"
});
formatter.result({
  "duration": 71496800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Joao",
      "offset": 68
    }
  ],
  "location": "DuplicateFreePageTests.iShouldOnlySeeColumnsThatAreRelatedToWhatISearchedFor(String)"
});
formatter.result({
  "duration": 281956400,
  "status": "passed"
});
formatter.after({
  "duration": 169414800,
  "status": "passed"
});
formatter.after({
  "duration": 94760700,
  "status": "passed"
});
formatter.after({
  "duration": 217474900,
  "status": "passed"
});
formatter.after({
  "duration": 54157300,
  "status": "passed"
});
formatter.before({
  "duration": 4691181000,
  "status": "passed"
});
formatter.before({
  "duration": 3237332300,
  "status": "passed"
});
formatter.before({
  "duration": 3425364300,
  "status": "passed"
});
formatter.before({
  "duration": 3302017300,
  "status": "passed"
});
formatter.scenario({
  "line": 64,
  "name": "Duplicate Free Page contains the table and the search bar is operational",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-free-page;duplicate-free-page-contains-the-table-and-the-search-bar-is-operational;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 53,
  "name": "I access that landing page of COS and want to go to the list of possible duplicates",
  "keyword": "Given "
});
formatter.step({
  "line": 54,
  "name": "I select random values",
  "keyword": "When "
});
formatter.step({
  "line": 55,
  "name": "I click on the Accept Manually",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "I click on the Confirm",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "I search in the search bar for \"234216838\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "I should only see columns that are related to what I searched for (\"234216838\")",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "DuplicateFreePageTests.iAccessThatLandingPageOfCOSAndWantToGoToTheListOfPossibleDuplicates()"
});
formatter.result({
  "duration": 2542709800,
  "status": "passed"
});
formatter.match({
  "location": "DuplicateFreePageTests.iSelectRandomValues()"
});
formatter.result({
  "duration": 5432910300,
  "status": "passed"
});
formatter.match({
  "location": "DuplicateFreePageTests.iClickOnTheAcceptManually()"
});
formatter.result({
  "duration": 63626100,
  "status": "passed"
});
formatter.match({
  "location": "DuplicateFreePageTests.iClickOnTheConfirm()"
});
formatter.result({
  "duration": 836582800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "234216838",
      "offset": 32
    }
  ],
  "location": "DuplicateFreePageTests.iSearchInTheSearchBarFor(String)"
});
formatter.result({
  "duration": 84035600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "234216838",
      "offset": 68
    }
  ],
  "location": "DuplicateFreePageTests.iShouldOnlySeeColumnsThatAreRelatedToWhatISearchedFor(String)"
});
formatter.result({
  "duration": 12895400,
  "status": "passed"
});
formatter.after({
  "duration": 44152100,
  "status": "passed"
});
formatter.after({
  "duration": 51906700,
  "status": "passed"
});
formatter.after({
  "duration": 76967400,
  "status": "passed"
});
formatter.after({
  "duration": 144159100,
  "status": "passed"
});
formatter.before({
  "duration": 3456546200,
  "status": "passed"
});
formatter.before({
  "duration": 3252650400,
  "status": "passed"
});
formatter.before({
  "duration": 3252146500,
  "status": "passed"
});
formatter.before({
  "duration": 3286118200,
  "status": "passed"
});
formatter.scenario({
  "line": 65,
  "name": "Duplicate Free Page contains the table and the search bar is operational",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-free-page;duplicate-free-page-contains-the-table-and-the-search-bar-is-operational;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 53,
  "name": "I access that landing page of COS and want to go to the list of possible duplicates",
  "keyword": "Given "
});
formatter.step({
  "line": 54,
  "name": "I select random values",
  "keyword": "When "
});
formatter.step({
  "line": 55,
  "name": "I click on the Accept Manually",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "I click on the Confirm",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "I search in the search bar for \"Almeida\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "I should only see columns that are related to what I searched for (\"Almeida\")",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "DuplicateFreePageTests.iAccessThatLandingPageOfCOSAndWantToGoToTheListOfPossibleDuplicates()"
});
formatter.result({
  "duration": 1893911700,
  "status": "passed"
});
formatter.match({
  "location": "DuplicateFreePageTests.iSelectRandomValues()"
});
formatter.result({
  "duration": 5104814400,
  "status": "passed"
});
formatter.match({
  "location": "DuplicateFreePageTests.iClickOnTheAcceptManually()"
});
formatter.result({
  "duration": 82866100,
  "status": "passed"
});
formatter.match({
  "location": "DuplicateFreePageTests.iClickOnTheConfirm()"
});
formatter.result({
  "duration": 839878000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Almeida",
      "offset": 32
    }
  ],
  "location": "DuplicateFreePageTests.iSearchInTheSearchBarFor(String)"
});
formatter.result({
  "duration": 91979800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Almeida",
      "offset": 68
    }
  ],
  "location": "DuplicateFreePageTests.iShouldOnlySeeColumnsThatAreRelatedToWhatISearchedFor(String)"
});
formatter.result({
  "duration": 276449000,
  "status": "passed"
});
formatter.after({
  "duration": 39690200,
  "status": "passed"
});
formatter.after({
  "duration": 57048500,
  "status": "passed"
});
formatter.after({
  "duration": 87151900,
  "status": "passed"
});
formatter.after({
  "duration": 141745900,
  "status": "passed"
});
formatter.before({
  "duration": 3750258700,
  "status": "passed"
});
formatter.before({
  "duration": 3291828100,
  "status": "passed"
});
formatter.before({
  "duration": 3274389500,
  "status": "passed"
});
formatter.before({
  "duration": 3246282000,
  "status": "passed"
});
formatter.scenario({
  "line": 66,
  "name": "Duplicate Free Page contains the table and the search bar is operational",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-free-page;duplicate-free-page-contains-the-table-and-the-search-bar-is-operational;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 53,
  "name": "I access that landing page of COS and want to go to the list of possible duplicates",
  "keyword": "Given "
});
formatter.step({
  "line": 54,
  "name": "I select random values",
  "keyword": "When "
});
formatter.step({
  "line": 55,
  "name": "I click on the Accept Manually",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "I click on the Confirm",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "I search in the search bar for \"Something\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "I should only see columns that are related to what I searched for (\"Something\")",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "DuplicateFreePageTests.iAccessThatLandingPageOfCOSAndWantToGoToTheListOfPossibleDuplicates()"
});
formatter.result({
  "duration": 2458885400,
  "status": "passed"
});
formatter.match({
  "location": "DuplicateFreePageTests.iSelectRandomValues()"
});
formatter.result({
  "duration": 5283782500,
  "status": "passed"
});
formatter.match({
  "location": "DuplicateFreePageTests.iClickOnTheAcceptManually()"
});
formatter.result({
  "duration": 70969700,
  "status": "passed"
});
formatter.match({
  "location": "DuplicateFreePageTests.iClickOnTheConfirm()"
});
formatter.result({
  "duration": 1105108900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Something",
      "offset": 32
    }
  ],
  "location": "DuplicateFreePageTests.iSearchInTheSearchBarFor(String)"
});
formatter.result({
  "duration": 84291600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Something",
      "offset": 68
    }
  ],
  "location": "DuplicateFreePageTests.iShouldOnlySeeColumnsThatAreRelatedToWhatISearchedFor(String)"
});
formatter.result({
  "duration": 11741200,
  "status": "passed"
});
formatter.after({
  "duration": 41227000,
  "status": "passed"
});
formatter.after({
  "duration": 53465000,
  "status": "passed"
});
formatter.after({
  "duration": 86785100,
  "status": "passed"
});
formatter.after({
  "duration": 184572900,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 68,
  "name": "Duplicate Free Page contains the table and the search bar is operational, along with columns sortable",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-free-page;duplicate-free-page-contains-the-table-and-the-search-bar-is-operational,-along-with-columns-sortable",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 69,
  "name": "I access that landing page of COS and want to go to the list of possible duplicates",
  "keyword": "Given "
});
formatter.step({
  "line": 70,
  "name": "I select random values",
  "keyword": "When "
});
formatter.step({
  "line": 71,
  "name": "I click on the Accept Manually",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "I click on the Confirm",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "I search in the search bar for \"\u003csearch\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "I sort column \"\u003ccolumn\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "I should be able to see the sorted table by \"\u003ccolumn\u003e\", while only appearing what I have searched for, related to \"\u003csearch\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 77,
  "name": "",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-free-page;duplicate-free-page-contains-the-table-and-the-search-bar-is-operational,-along-with-columns-sortable;",
  "rows": [
    {
      "cells": [
        "search",
        "column"
      ],
      "line": 78,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-free-page;duplicate-free-page-contains-the-table-and-the-search-bar-is-operational,-along-with-columns-sortable;;1"
    },
    {
      "cells": [
        "Joao",
        "ID"
      ],
      "line": 79,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-free-page;duplicate-free-page-contains-the-table-and-the-search-bar-is-operational,-along-with-columns-sortable;;2"
    },
    {
      "cells": [
        "Joao",
        "GivenName"
      ],
      "line": 80,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-free-page;duplicate-free-page-contains-the-table-and-the-search-bar-is-operational,-along-with-columns-sortable;;3"
    },
    {
      "cells": [
        "Joao",
        "Surname"
      ],
      "line": 81,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-free-page;duplicate-free-page-contains-the-table-and-the-search-bar-is-operational,-along-with-columns-sortable;;4"
    },
    {
      "cells": [
        "Joao",
        "Phone"
      ],
      "line": 82,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-free-page;duplicate-free-page-contains-the-table-and-the-search-bar-is-operational,-along-with-columns-sortable;;5"
    },
    {
      "cells": [
        "Joao",
        "City"
      ],
      "line": 83,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-free-page;duplicate-free-page-contains-the-table-and-the-search-bar-is-operational,-along-with-columns-sortable;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5311908400,
  "status": "passed"
});
formatter.before({
  "duration": 3293180800,
  "status": "passed"
});
formatter.before({
  "duration": 3747417200,
  "status": "passed"
});
formatter.before({
  "duration": 5611748600,
  "status": "passed"
});
formatter.scenario({
  "line": 79,
  "name": "Duplicate Free Page contains the table and the search bar is operational, along with columns sortable",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-free-page;duplicate-free-page-contains-the-table-and-the-search-bar-is-operational,-along-with-columns-sortable;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 69,
  "name": "I access that landing page of COS and want to go to the list of possible duplicates",
  "keyword": "Given "
});
formatter.step({
  "line": 70,
  "name": "I select random values",
  "keyword": "When "
});
formatter.step({
  "line": 71,
  "name": "I click on the Accept Manually",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "I click on the Confirm",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "I search in the search bar for \"Joao\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "I sort column \"ID\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "I should be able to see the sorted table by \"ID\", while only appearing what I have searched for, related to \"Joao\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "DuplicateFreePageTests.iAccessThatLandingPageOfCOSAndWantToGoToTheListOfPossibleDuplicates()"
});
formatter.result({
  "duration": 7578416300,
  "status": "passed"
});
formatter.match({
  "location": "DuplicateFreePageTests.iSelectRandomValues()"
});
formatter.result({
  "duration": 5334683600,
  "status": "passed"
});
formatter.match({
  "location": "DuplicateFreePageTests.iClickOnTheAcceptManually()"
});
formatter.result({
  "duration": 64404900,
  "status": "passed"
});
formatter.match({
  "location": "DuplicateFreePageTests.iClickOnTheConfirm()"
});
formatter.result({
  "duration": 1118916700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Joao",
      "offset": 32
    }
  ],
  "location": "DuplicateFreePageTests.iSearchInTheSearchBarFor(String)"
});
formatter.result({
  "duration": 65046000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ID",
      "offset": 15
    }
  ],
  "location": "DuplicateFreePageTests.iSortColumn(String)"
});
formatter.result({
  "duration": 64269100,
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
      "offset": 109
    }
  ],
  "location": "DuplicateFreePageTests.iShouldBeAbleToSeeTheSortedTableByWhileOnlyAppearingWhatIHaveSearchedForRelatedTo(String,String)"
});
formatter.result({
  "duration": 197155200,
  "status": "passed"
});
formatter.after({
  "duration": 58204700,
  "status": "passed"
});
formatter.after({
  "duration": 129431600,
  "status": "passed"
});
formatter.after({
  "duration": 128703900,
  "status": "passed"
});
formatter.after({
  "duration": 130103600,
  "status": "passed"
});
formatter.before({
  "duration": 5008168100,
  "status": "passed"
});
formatter.before({
  "duration": 5063992900,
  "status": "passed"
});
formatter.before({
  "duration": 3960469900,
  "status": "passed"
});
formatter.before({
  "duration": 3604062000,
  "status": "passed"
});
formatter.scenario({
  "line": 80,
  "name": "Duplicate Free Page contains the table and the search bar is operational, along with columns sortable",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-free-page;duplicate-free-page-contains-the-table-and-the-search-bar-is-operational,-along-with-columns-sortable;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 69,
  "name": "I access that landing page of COS and want to go to the list of possible duplicates",
  "keyword": "Given "
});
formatter.step({
  "line": 70,
  "name": "I select random values",
  "keyword": "When "
});
formatter.step({
  "line": 71,
  "name": "I click on the Accept Manually",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "I click on the Confirm",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "I search in the search bar for \"Joao\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "I sort column \"GivenName\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "I should be able to see the sorted table by \"GivenName\", while only appearing what I have searched for, related to \"Joao\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "DuplicateFreePageTests.iAccessThatLandingPageOfCOSAndWantToGoToTheListOfPossibleDuplicates()"
});
formatter.result({
  "duration": 2109180300,
  "status": "passed"
});
formatter.match({
  "location": "DuplicateFreePageTests.iSelectRandomValues()"
});
formatter.result({
  "duration": 5642225800,
  "status": "passed"
});
formatter.match({
  "location": "DuplicateFreePageTests.iClickOnTheAcceptManually()"
});
formatter.result({
  "duration": 64738000,
  "status": "passed"
});
formatter.match({
  "location": "DuplicateFreePageTests.iClickOnTheConfirm()"
});
formatter.result({
  "duration": 1665804500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Joao",
      "offset": 32
    }
  ],
  "location": "DuplicateFreePageTests.iSearchInTheSearchBarFor(String)"
});
formatter.result({
  "duration": 60503000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GivenName",
      "offset": 15
    }
  ],
  "location": "DuplicateFreePageTests.iSortColumn(String)"
});
formatter.result({
  "duration": 91119900,
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
      "offset": 116
    }
  ],
  "location": "DuplicateFreePageTests.iShouldBeAbleToSeeTheSortedTableByWhileOnlyAppearingWhatIHaveSearchedForRelatedTo(String,String)"
});
formatter.result({
  "duration": 290187200,
  "status": "passed"
});
formatter.after({
  "duration": 36871300,
  "status": "passed"
});
formatter.after({
  "duration": 57349000,
  "status": "passed"
});
formatter.after({
  "duration": 159358300,
  "status": "passed"
});
formatter.after({
  "duration": 95623100,
  "status": "passed"
});
formatter.before({
  "duration": 5647334000,
  "status": "passed"
});
formatter.before({
  "duration": 3368361100,
  "status": "passed"
});
formatter.before({
  "duration": 3309494200,
  "status": "passed"
});
formatter.before({
  "duration": 3693384100,
  "status": "passed"
});
formatter.scenario({
  "line": 81,
  "name": "Duplicate Free Page contains the table and the search bar is operational, along with columns sortable",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-free-page;duplicate-free-page-contains-the-table-and-the-search-bar-is-operational,-along-with-columns-sortable;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 69,
  "name": "I access that landing page of COS and want to go to the list of possible duplicates",
  "keyword": "Given "
});
formatter.step({
  "line": 70,
  "name": "I select random values",
  "keyword": "When "
});
formatter.step({
  "line": 71,
  "name": "I click on the Accept Manually",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "I click on the Confirm",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "I search in the search bar for \"Joao\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "I sort column \"Surname\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "I should be able to see the sorted table by \"Surname\", while only appearing what I have searched for, related to \"Joao\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "DuplicateFreePageTests.iAccessThatLandingPageOfCOSAndWantToGoToTheListOfPossibleDuplicates()"
});
formatter.result({
  "duration": 2721021300,
  "status": "passed"
});
formatter.match({
  "location": "DuplicateFreePageTests.iSelectRandomValues()"
});
formatter.result({
  "duration": 5282636500,
  "status": "passed"
});
formatter.match({
  "location": "DuplicateFreePageTests.iClickOnTheAcceptManually()"
});
formatter.result({
  "duration": 64640000,
  "status": "passed"
});
formatter.match({
  "location": "DuplicateFreePageTests.iClickOnTheConfirm()"
});
formatter.result({
  "duration": 982036600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Joao",
      "offset": 32
    }
  ],
  "location": "DuplicateFreePageTests.iSearchInTheSearchBarFor(String)"
});
formatter.result({
  "duration": 68850400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Surname",
      "offset": 15
    }
  ],
  "location": "DuplicateFreePageTests.iSortColumn(String)"
});
formatter.result({
  "duration": 83114900,
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
      "offset": 114
    }
  ],
  "location": "DuplicateFreePageTests.iShouldBeAbleToSeeTheSortedTableByWhileOnlyAppearingWhatIHaveSearchedForRelatedTo(String,String)"
});
formatter.result({
  "duration": 281955100,
  "status": "passed"
});
formatter.after({
  "duration": 375059000,
  "status": "passed"
});
formatter.after({
  "duration": 165703900,
  "status": "passed"
});
formatter.after({
  "duration": 95339400,
  "status": "passed"
});
formatter.after({
  "duration": 81013800,
  "status": "passed"
});
formatter.before({
  "duration": 7043540500,
  "status": "passed"
});
formatter.before({
  "duration": 3378842600,
  "status": "passed"
});
formatter.before({
  "duration": 3609230000,
  "status": "passed"
});
formatter.before({
  "duration": 3609387100,
  "status": "passed"
});
formatter.scenario({
  "line": 82,
  "name": "Duplicate Free Page contains the table and the search bar is operational, along with columns sortable",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-free-page;duplicate-free-page-contains-the-table-and-the-search-bar-is-operational,-along-with-columns-sortable;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 69,
  "name": "I access that landing page of COS and want to go to the list of possible duplicates",
  "keyword": "Given "
});
formatter.step({
  "line": 70,
  "name": "I select random values",
  "keyword": "When "
});
formatter.step({
  "line": 71,
  "name": "I click on the Accept Manually",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "I click on the Confirm",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "I search in the search bar for \"Joao\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "I sort column \"Phone\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "I should be able to see the sorted table by \"Phone\", while only appearing what I have searched for, related to \"Joao\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "DuplicateFreePageTests.iAccessThatLandingPageOfCOSAndWantToGoToTheListOfPossibleDuplicates()"
});
formatter.result({
  "duration": 2726504000,
  "status": "passed"
});
formatter.match({
  "location": "DuplicateFreePageTests.iSelectRandomValues()"
});
formatter.result({
  "duration": 5545367400,
  "status": "passed"
});
formatter.match({
  "location": "DuplicateFreePageTests.iClickOnTheAcceptManually()"
});
formatter.result({
  "duration": 66684300,
  "status": "passed"
});
formatter.match({
  "location": "DuplicateFreePageTests.iClickOnTheConfirm()"
});
formatter.result({
  "duration": 914555500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Joao",
      "offset": 32
    }
  ],
  "location": "DuplicateFreePageTests.iSearchInTheSearchBarFor(String)"
});
formatter.result({
  "duration": 69449500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Phone",
      "offset": 15
    }
  ],
  "location": "DuplicateFreePageTests.iSortColumn(String)"
});
formatter.result({
  "duration": 104285600,
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
      "offset": 112
    }
  ],
  "location": "DuplicateFreePageTests.iShouldBeAbleToSeeTheSortedTableByWhileOnlyAppearingWhatIHaveSearchedForRelatedTo(String,String)"
});
formatter.result({
  "duration": 398558300,
  "status": "passed"
});
formatter.after({
  "duration": 53272800,
  "status": "passed"
});
formatter.after({
  "duration": 112476400,
  "status": "passed"
});
formatter.after({
  "duration": 170710300,
  "status": "passed"
});
formatter.after({
  "duration": 248979200,
  "status": "passed"
});
formatter.before({
  "duration": 4665443500,
  "status": "passed"
});
formatter.before({
  "duration": 5632358000,
  "status": "passed"
});
formatter.before({
  "duration": 4191361700,
  "status": "passed"
});
formatter.before({
  "duration": 6510578100,
  "status": "passed"
});
formatter.scenario({
  "line": 83,
  "name": "Duplicate Free Page contains the table and the search bar is operational, along with columns sortable",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-free-page;duplicate-free-page-contains-the-table-and-the-search-bar-is-operational,-along-with-columns-sortable;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 69,
  "name": "I access that landing page of COS and want to go to the list of possible duplicates",
  "keyword": "Given "
});
formatter.step({
  "line": 70,
  "name": "I select random values",
  "keyword": "When "
});
formatter.step({
  "line": 71,
  "name": "I click on the Accept Manually",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "I click on the Confirm",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "I search in the search bar for \"Joao\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "I sort column \"City\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "I should be able to see the sorted table by \"City\", while only appearing what I have searched for, related to \"Joao\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "DuplicateFreePageTests.iAccessThatLandingPageOfCOSAndWantToGoToTheListOfPossibleDuplicates()"
});
formatter.result({
  "duration": 4466929600,
  "status": "passed"
});
formatter.match({
  "location": "DuplicateFreePageTests.iSelectRandomValues()"
});
formatter.result({
  "duration": 5652126900,
  "status": "passed"
});
formatter.match({
  "location": "DuplicateFreePageTests.iClickOnTheAcceptManually()"
});
formatter.result({
  "duration": 67210300,
  "status": "passed"
});
formatter.match({
  "location": "DuplicateFreePageTests.iClickOnTheConfirm()"
});
formatter.result({
  "duration": 1059176300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Joao",
      "offset": 32
    }
  ],
  "location": "DuplicateFreePageTests.iSearchInTheSearchBarFor(String)"
});
formatter.result({
  "duration": 98709000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "City",
      "offset": 15
    }
  ],
  "location": "DuplicateFreePageTests.iSortColumn(String)"
});
formatter.result({
  "duration": 122334000,
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
      "offset": 111
    }
  ],
  "location": "DuplicateFreePageTests.iShouldBeAbleToSeeTheSortedTableByWhileOnlyAppearingWhatIHaveSearchedForRelatedTo(String,String)"
});
formatter.result({
  "duration": 193366300,
  "status": "passed"
});
formatter.after({
  "duration": 129559700,
  "status": "passed"
});
formatter.after({
  "duration": 41398600,
  "status": "passed"
});
formatter.after({
  "duration": 36459400,
  "status": "passed"
});
formatter.after({
  "duration": 35026100,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 85,
  "name": "Duplicate Free Page contains the table and the pagination can be used",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-free-page;duplicate-free-page-contains-the-table-and-the-pagination-can-be-used",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 86,
  "name": "I access that landing page of COS and want to go to the list of possible duplicates",
  "keyword": "Given "
});
formatter.step({
  "line": 87,
  "name": "I select random values",
  "keyword": "When "
});
formatter.step({
  "line": 88,
  "name": "I click on the Accept Manually",
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "I click on the Confirm",
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "I increase the pagination to value \"\u003cpagination\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 91,
  "name": "I should be able to see the number of contacts related to the \"\u003cpagination\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 93,
  "name": "",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-free-page;duplicate-free-page-contains-the-table-and-the-pagination-can-be-used;",
  "rows": [
    {
      "cells": [
        "pagination"
      ],
      "line": 94,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-free-page;duplicate-free-page-contains-the-table-and-the-pagination-can-be-used;;1"
    },
    {
      "cells": [
        "10"
      ],
      "line": 95,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-free-page;duplicate-free-page-contains-the-table-and-the-pagination-can-be-used;;2"
    },
    {
      "cells": [
        "25"
      ],
      "line": 96,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-free-page;duplicate-free-page-contains-the-table-and-the-pagination-can-be-used;;3"
    },
    {
      "cells": [
        "50"
      ],
      "line": 97,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-free-page;duplicate-free-page-contains-the-table-and-the-pagination-can-be-used;;4"
    },
    {
      "cells": [
        "100"
      ],
      "line": 98,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-free-page;duplicate-free-page-contains-the-table-and-the-pagination-can-be-used;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7975039400,
  "status": "passed"
});
formatter.before({
  "duration": 3334667100,
  "status": "passed"
});
formatter.before({
  "duration": 3527487700,
  "status": "passed"
});
formatter.before({
  "duration": 3451817700,
  "status": "passed"
});
formatter.scenario({
  "line": 95,
  "name": "Duplicate Free Page contains the table and the pagination can be used",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-free-page;duplicate-free-page-contains-the-table-and-the-pagination-can-be-used;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 86,
  "name": "I access that landing page of COS and want to go to the list of possible duplicates",
  "keyword": "Given "
});
formatter.step({
  "line": 87,
  "name": "I select random values",
  "keyword": "When "
});
formatter.step({
  "line": 88,
  "name": "I click on the Accept Manually",
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "I click on the Confirm",
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "I increase the pagination to value \"10\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 91,
  "name": "I should be able to see the number of contacts related to the \"10\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "DuplicateFreePageTests.iAccessThatLandingPageOfCOSAndWantToGoToTheListOfPossibleDuplicates()"
});
formatter.result({
  "duration": 1957707100,
  "status": "passed"
});
formatter.match({
  "location": "DuplicateFreePageTests.iSelectRandomValues()"
});
formatter.result({
  "duration": 5450943300,
  "status": "passed"
});
formatter.match({
  "location": "DuplicateFreePageTests.iClickOnTheAcceptManually()"
});
formatter.result({
  "duration": 64721100,
  "status": "passed"
});
formatter.match({
  "location": "DuplicateFreePageTests.iClickOnTheConfirm()"
});
formatter.result({
  "duration": 864274300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 36
    }
  ],
  "location": "DuplicateFreePageTests.iIncreaseThePaginationToValue(String)"
});
formatter.result({
  "duration": 70962000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 63
    }
  ],
  "location": "DuplicateFreePageTests.iShouldBeAbleToSeeTheNumberOfContactsRelatedToThe(String)"
});
formatter.result({
  "duration": 41518300,
  "status": "passed"
});
formatter.after({
  "duration": 75401500,
  "status": "passed"
});
formatter.after({
  "duration": 102556400,
  "status": "passed"
});
formatter.after({
  "duration": 199552200,
  "status": "passed"
});
formatter.after({
  "duration": 80635000,
  "status": "passed"
});
formatter.before({
  "duration": 3730218500,
  "status": "passed"
});
formatter.before({
  "duration": 3393559400,
  "status": "passed"
});
formatter.before({
  "duration": 3388782600,
  "status": "passed"
});
formatter.before({
  "duration": 3473669200,
  "status": "passed"
});
formatter.scenario({
  "line": 96,
  "name": "Duplicate Free Page contains the table and the pagination can be used",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-free-page;duplicate-free-page-contains-the-table-and-the-pagination-can-be-used;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 86,
  "name": "I access that landing page of COS and want to go to the list of possible duplicates",
  "keyword": "Given "
});
formatter.step({
  "line": 87,
  "name": "I select random values",
  "keyword": "When "
});
formatter.step({
  "line": 88,
  "name": "I click on the Accept Manually",
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "I click on the Confirm",
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "I increase the pagination to value \"25\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 91,
  "name": "I should be able to see the number of contacts related to the \"25\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "DuplicateFreePageTests.iAccessThatLandingPageOfCOSAndWantToGoToTheListOfPossibleDuplicates()"
});
formatter.result({
  "duration": 2217000700,
  "status": "passed"
});
formatter.match({
  "location": "DuplicateFreePageTests.iSelectRandomValues()"
});
formatter.result({
  "duration": 5292240100,
  "status": "passed"
});
formatter.match({
  "location": "DuplicateFreePageTests.iClickOnTheAcceptManually()"
});
formatter.result({
  "duration": 63493600,
  "status": "passed"
});
formatter.match({
  "location": "DuplicateFreePageTests.iClickOnTheConfirm()"
});
formatter.result({
  "duration": 929279900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "25",
      "offset": 36
    }
  ],
  "location": "DuplicateFreePageTests.iIncreaseThePaginationToValue(String)"
});
formatter.result({
  "duration": 124822000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "25",
      "offset": 63
    }
  ],
  "location": "DuplicateFreePageTests.iShouldBeAbleToSeeTheNumberOfContactsRelatedToThe(String)"
});
formatter.result({
  "duration": 43190500,
  "status": "passed"
});
formatter.after({
  "duration": 49474900,
  "status": "passed"
});
formatter.after({
  "duration": 78537900,
  "status": "passed"
});
formatter.after({
  "duration": 149273300,
  "status": "passed"
});
formatter.after({
  "duration": 138818100,
  "status": "passed"
});
formatter.before({
  "duration": 5005137300,
  "status": "passed"
});
formatter.before({
  "duration": 3397606000,
  "status": "passed"
});
formatter.before({
  "duration": 3343179800,
  "status": "passed"
});
formatter.before({
  "duration": 3636876100,
  "status": "passed"
});
formatter.scenario({
  "line": 97,
  "name": "Duplicate Free Page contains the table and the pagination can be used",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-free-page;duplicate-free-page-contains-the-table-and-the-pagination-can-be-used;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 86,
  "name": "I access that landing page of COS and want to go to the list of possible duplicates",
  "keyword": "Given "
});
formatter.step({
  "line": 87,
  "name": "I select random values",
  "keyword": "When "
});
formatter.step({
  "line": 88,
  "name": "I click on the Accept Manually",
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "I click on the Confirm",
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "I increase the pagination to value \"50\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 91,
  "name": "I should be able to see the number of contacts related to the \"50\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "DuplicateFreePageTests.iAccessThatLandingPageOfCOSAndWantToGoToTheListOfPossibleDuplicates()"
});
formatter.result({
  "duration": 2175457100,
  "status": "passed"
});
formatter.match({
  "location": "DuplicateFreePageTests.iSelectRandomValues()"
});
formatter.result({
  "duration": 5204597800,
  "status": "passed"
});
formatter.match({
  "location": "DuplicateFreePageTests.iClickOnTheAcceptManually()"
});
formatter.result({
  "duration": 69279800,
  "status": "passed"
});
formatter.match({
  "location": "DuplicateFreePageTests.iClickOnTheConfirm()"
});
formatter.result({
  "duration": 811501000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 36
    }
  ],
  "location": "DuplicateFreePageTests.iIncreaseThePaginationToValue(String)"
});
formatter.result({
  "duration": 123370400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 63
    }
  ],
  "location": "DuplicateFreePageTests.iShouldBeAbleToSeeTheNumberOfContactsRelatedToThe(String)"
});
formatter.result({
  "duration": 37926500,
  "status": "passed"
});
formatter.after({
  "duration": 39059400,
  "status": "passed"
});
formatter.after({
  "duration": 51696600,
  "status": "passed"
});
formatter.after({
  "duration": 86102800,
  "status": "passed"
});
formatter.after({
  "duration": 144631000,
  "status": "passed"
});
formatter.before({
  "duration": 3401667200,
  "status": "passed"
});
formatter.before({
  "duration": 4437849800,
  "status": "passed"
});
formatter.before({
  "duration": 3428830600,
  "status": "passed"
});
formatter.before({
  "duration": 3430568100,
  "status": "passed"
});
formatter.scenario({
  "line": 98,
  "name": "Duplicate Free Page contains the table and the pagination can be used",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-free-page;duplicate-free-page-contains-the-table-and-the-pagination-can-be-used;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 86,
  "name": "I access that landing page of COS and want to go to the list of possible duplicates",
  "keyword": "Given "
});
formatter.step({
  "line": 87,
  "name": "I select random values",
  "keyword": "When "
});
formatter.step({
  "line": 88,
  "name": "I click on the Accept Manually",
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "I click on the Confirm",
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "I increase the pagination to value \"100\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 91,
  "name": "I should be able to see the number of contacts related to the \"100\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "DuplicateFreePageTests.iAccessThatLandingPageOfCOSAndWantToGoToTheListOfPossibleDuplicates()"
});
formatter.result({
  "duration": 2006087400,
  "status": "passed"
});
formatter.match({
  "location": "DuplicateFreePageTests.iSelectRandomValues()"
});
formatter.result({
  "duration": 5529010500,
  "status": "passed"
});
formatter.match({
  "location": "DuplicateFreePageTests.iClickOnTheAcceptManually()"
});
formatter.result({
  "duration": 64836000,
  "status": "passed"
});
formatter.match({
  "location": "DuplicateFreePageTests.iClickOnTheConfirm()"
});
formatter.result({
  "duration": 888426100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 36
    }
  ],
  "location": "DuplicateFreePageTests.iIncreaseThePaginationToValue(String)"
});
formatter.result({
  "duration": 136421800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 63
    }
  ],
  "location": "DuplicateFreePageTests.iShouldBeAbleToSeeTheNumberOfContactsRelatedToThe(String)"
});
formatter.result({
  "duration": 37284700,
  "status": "passed"
});
formatter.after({
  "duration": 39906300,
  "status": "passed"
});
formatter.after({
  "duration": 72579100,
  "status": "passed"
});
formatter.after({
  "duration": 81583600,
  "status": "passed"
});
formatter.after({
  "duration": 175348300,
  "status": "passed"
});
formatter.before({
  "duration": 3990554500,
  "status": "passed"
});
formatter.before({
  "duration": 3323150500,
  "status": "passed"
});
formatter.before({
  "duration": 3762925200,
  "status": "passed"
});
formatter.before({
  "duration": 3624312700,
  "status": "passed"
});
formatter.scenario({
  "line": 100,
  "name": "Duplicate Free Page contains the possible sources",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-free-page;duplicate-free-page-contains-the-possible-sources",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 101,
  "name": "I access that landing page of COS and want to go to the list of possible duplicates",
  "keyword": "Given "
});
formatter.step({
  "line": 102,
  "name": "I select random values",
  "keyword": "When "
});
formatter.step({
  "line": 103,
  "name": "I click on the Accept Manually",
  "keyword": "And "
});
formatter.step({
  "line": 104,
  "name": "I click on the Confirm",
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "I should be able to see the possible sources related to the existing duplicates",
  "keyword": "Then "
});
formatter.match({
  "location": "DuplicateFreePageTests.iAccessThatLandingPageOfCOSAndWantToGoToTheListOfPossibleDuplicates()"
});
formatter.result({
  "duration": 1520258300,
  "status": "passed"
});
formatter.match({
  "location": "DuplicateFreePageTests.iSelectRandomValues()"
});
formatter.result({
  "duration": 5227732800,
  "status": "passed"
});
formatter.match({
  "location": "DuplicateFreePageTests.iClickOnTheAcceptManually()"
});
formatter.result({
  "duration": 65610500,
  "status": "passed"
});
formatter.match({
  "location": "DuplicateFreePageTests.iClickOnTheConfirm()"
});
formatter.result({
  "duration": 858415000,
  "status": "passed"
});
formatter.match({
  "location": "DuplicateFreePageTests.iShouldBeAbleToSeeThePossibleSourcesRelatedToTheExistingDuplicates()"
});
formatter.result({
  "duration": 484507100,
  "status": "passed"
});
formatter.after({
  "duration": 38258200,
  "status": "passed"
});
formatter.after({
  "duration": 58429500,
  "status": "passed"
});
formatter.after({
  "duration": 93737500,
  "status": "passed"
});
formatter.after({
  "duration": 262485100,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 107,
  "name": "Duplicate Free Page contains the selector related to the source",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-free-page;duplicate-free-page-contains-the-selector-related-to-the-source",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 108,
  "name": "I access that landing page of COS and want to go to the list of possible duplicates",
  "keyword": "Given "
});
formatter.step({
  "line": 109,
  "name": "I select random values",
  "keyword": "When "
});
formatter.step({
  "line": 110,
  "name": "I click on the Accept Manually",
  "keyword": "And "
});
formatter.step({
  "line": 111,
  "name": "I click on the Confirm",
  "keyword": "And "
});
formatter.step({
  "line": 112,
  "name": "I want to filter for one \"\u003csource\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 113,
  "name": "I should only be able to see the contacts in that specific \"\u003csource\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 115,
  "name": "",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-free-page;duplicate-free-page-contains-the-selector-related-to-the-source;",
  "rows": [
    {
      "cells": [
        "source"
      ],
      "line": 116,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-free-page;duplicate-free-page-contains-the-selector-related-to-the-source;;1"
    },
    {
      "cells": [
        "All"
      ],
      "line": 117,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-free-page;duplicate-free-page-contains-the-selector-related-to-the-source;;2"
    },
    {
      "cells": [
        "Twitter"
      ],
      "line": 118,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-free-page;duplicate-free-page-contains-the-selector-related-to-the-source;;3"
    },
    {
      "cells": [
        "Facebook"
      ],
      "line": 119,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-free-page;duplicate-free-page-contains-the-selector-related-to-the-source;;4"
    },
    {
      "cells": [
        "LinkedIn"
      ],
      "line": 120,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-free-page;duplicate-free-page-contains-the-selector-related-to-the-source;;5"
    },
    {
      "cells": [
        "Skype"
      ],
      "line": 121,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-free-page;duplicate-free-page-contains-the-selector-related-to-the-source;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3311274800,
  "status": "passed"
});
formatter.before({
  "duration": 3272354200,
  "status": "passed"
});
formatter.before({
  "duration": 3392588500,
  "status": "passed"
});
formatter.before({
  "duration": 4010709900,
  "status": "passed"
});
formatter.scenario({
  "line": 117,
  "name": "Duplicate Free Page contains the selector related to the source",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-free-page;duplicate-free-page-contains-the-selector-related-to-the-source;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 108,
  "name": "I access that landing page of COS and want to go to the list of possible duplicates",
  "keyword": "Given "
});
formatter.step({
  "line": 109,
  "name": "I select random values",
  "keyword": "When "
});
formatter.step({
  "line": 110,
  "name": "I click on the Accept Manually",
  "keyword": "And "
});
formatter.step({
  "line": 111,
  "name": "I click on the Confirm",
  "keyword": "And "
});
formatter.step({
  "line": 112,
  "name": "I want to filter for one \"All\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 113,
  "name": "I should only be able to see the contacts in that specific \"All\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "DuplicateFreePageTests.iAccessThatLandingPageOfCOSAndWantToGoToTheListOfPossibleDuplicates()"
});
formatter.result({
  "duration": 2091185600,
  "status": "passed"
});
formatter.match({
  "location": "DuplicateFreePageTests.iSelectRandomValues()"
});
formatter.result({
  "duration": 5532583100,
  "status": "passed"
});
formatter.match({
  "location": "DuplicateFreePageTests.iClickOnTheAcceptManually()"
});
formatter.result({
  "duration": 69460500,
  "status": "passed"
});
formatter.match({
  "location": "DuplicateFreePageTests.iClickOnTheConfirm()"
});
formatter.result({
  "duration": 814774300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "All",
      "offset": 26
    }
  ],
  "location": "DuplicateFreePageTests.iWantToFilterForOne(String)"
});
formatter.result({
  "duration": 458111600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "All",
      "offset": 60
    }
  ],
  "location": "DuplicateFreePageTests.iShouldOnlyBeAbleToSeeTheContactsInThatSpecific(String)"
});
formatter.result({
  "duration": 1117437500,
  "status": "passed"
});
formatter.after({
  "duration": 49701500,
  "status": "passed"
});
formatter.after({
  "duration": 86213000,
  "status": "passed"
});
formatter.after({
  "duration": 95502800,
  "status": "passed"
});
formatter.after({
  "duration": 170271700,
  "status": "passed"
});
formatter.before({
  "duration": 3790976000,
  "status": "passed"
});
formatter.before({
  "duration": 3365791800,
  "status": "passed"
});
formatter.before({
  "duration": 3701944200,
  "status": "passed"
});
formatter.before({
  "duration": 4132019600,
  "status": "passed"
});
formatter.scenario({
  "line": 118,
  "name": "Duplicate Free Page contains the selector related to the source",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-free-page;duplicate-free-page-contains-the-selector-related-to-the-source;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 108,
  "name": "I access that landing page of COS and want to go to the list of possible duplicates",
  "keyword": "Given "
});
formatter.step({
  "line": 109,
  "name": "I select random values",
  "keyword": "When "
});
formatter.step({
  "line": 110,
  "name": "I click on the Accept Manually",
  "keyword": "And "
});
formatter.step({
  "line": 111,
  "name": "I click on the Confirm",
  "keyword": "And "
});
formatter.step({
  "line": 112,
  "name": "I want to filter for one \"Twitter\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 113,
  "name": "I should only be able to see the contacts in that specific \"Twitter\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "DuplicateFreePageTests.iAccessThatLandingPageOfCOSAndWantToGoToTheListOfPossibleDuplicates()"
});
formatter.result({
  "duration": 3355948100,
  "status": "passed"
});
formatter.match({
  "location": "DuplicateFreePageTests.iSelectRandomValues()"
});
formatter.result({
  "duration": 5694271900,
  "status": "passed"
});
formatter.match({
  "location": "DuplicateFreePageTests.iClickOnTheAcceptManually()"
});
formatter.result({
  "duration": 66033600,
  "status": "passed"
});
formatter.match({
  "location": "DuplicateFreePageTests.iClickOnTheConfirm()"
});
formatter.result({
  "duration": 730597300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Twitter",
      "offset": 26
    }
  ],
  "location": "DuplicateFreePageTests.iWantToFilterForOne(String)"
});
formatter.result({
  "duration": 179047800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Twitter",
      "offset": 60
    }
  ],
  "location": "DuplicateFreePageTests.iShouldOnlyBeAbleToSeeTheContactsInThatSpecific(String)"
});
formatter.result({
  "duration": 1102698100,
  "status": "passed"
});
formatter.after({
  "duration": 43385800,
  "status": "passed"
});
formatter.after({
  "duration": 36845000,
  "status": "passed"
});
formatter.after({
  "duration": 32720500,
  "status": "passed"
});
formatter.after({
  "duration": 34165000,
  "status": "passed"
});
formatter.before({
  "duration": 4720832500,
  "status": "passed"
});
formatter.before({
  "duration": 3394908900,
  "status": "passed"
});
formatter.before({
  "duration": 3353471500,
  "status": "passed"
});
formatter.before({
  "duration": 3388959100,
  "status": "passed"
});
formatter.scenario({
  "line": 119,
  "name": "Duplicate Free Page contains the selector related to the source",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-free-page;duplicate-free-page-contains-the-selector-related-to-the-source;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 108,
  "name": "I access that landing page of COS and want to go to the list of possible duplicates",
  "keyword": "Given "
});
formatter.step({
  "line": 109,
  "name": "I select random values",
  "keyword": "When "
});
formatter.step({
  "line": 110,
  "name": "I click on the Accept Manually",
  "keyword": "And "
});
formatter.step({
  "line": 111,
  "name": "I click on the Confirm",
  "keyword": "And "
});
formatter.step({
  "line": 112,
  "name": "I want to filter for one \"Facebook\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 113,
  "name": "I should only be able to see the contacts in that specific \"Facebook\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "DuplicateFreePageTests.iAccessThatLandingPageOfCOSAndWantToGoToTheListOfPossibleDuplicates()"
});
formatter.result({
  "duration": 1792695300,
  "status": "passed"
});
formatter.match({
  "location": "DuplicateFreePageTests.iSelectRandomValues()"
});
formatter.result({
  "duration": 5463998500,
  "status": "passed"
});
formatter.match({
  "location": "DuplicateFreePageTests.iClickOnTheAcceptManually()"
});
formatter.result({
  "duration": 66362800,
  "status": "passed"
});
formatter.match({
  "location": "DuplicateFreePageTests.iClickOnTheConfirm()"
});
formatter.result({
  "duration": 866311900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Facebook",
      "offset": 26
    }
  ],
  "location": "DuplicateFreePageTests.iWantToFilterForOne(String)"
});
formatter.result({
  "duration": 264872800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Facebook",
      "offset": 60
    }
  ],
  "location": "DuplicateFreePageTests.iShouldOnlyBeAbleToSeeTheContactsInThatSpecific(String)"
});
formatter.result({
  "duration": 1105841000,
  "status": "passed"
});
formatter.after({
  "duration": 38012500,
  "status": "passed"
});
formatter.after({
  "duration": 61566400,
  "status": "passed"
});
formatter.after({
  "duration": 77482400,
  "status": "passed"
});
formatter.after({
  "duration": 157848300,
  "status": "passed"
});
formatter.before({
  "duration": 4237185500,
  "status": "passed"
});
formatter.before({
  "duration": 3414067700,
  "status": "passed"
});
formatter.before({
  "duration": 3685299300,
  "status": "passed"
});
formatter.before({
  "duration": 3464142600,
  "status": "passed"
});
formatter.scenario({
  "line": 120,
  "name": "Duplicate Free Page contains the selector related to the source",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-free-page;duplicate-free-page-contains-the-selector-related-to-the-source;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 108,
  "name": "I access that landing page of COS and want to go to the list of possible duplicates",
  "keyword": "Given "
});
formatter.step({
  "line": 109,
  "name": "I select random values",
  "keyword": "When "
});
formatter.step({
  "line": 110,
  "name": "I click on the Accept Manually",
  "keyword": "And "
});
formatter.step({
  "line": 111,
  "name": "I click on the Confirm",
  "keyword": "And "
});
formatter.step({
  "line": 112,
  "name": "I want to filter for one \"LinkedIn\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 113,
  "name": "I should only be able to see the contacts in that specific \"LinkedIn\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "DuplicateFreePageTests.iAccessThatLandingPageOfCOSAndWantToGoToTheListOfPossibleDuplicates()"
});
formatter.result({
  "duration": 1827659500,
  "status": "passed"
});
formatter.match({
  "location": "DuplicateFreePageTests.iSelectRandomValues()"
});
formatter.result({
  "duration": 5531500800,
  "status": "passed"
});
formatter.match({
  "location": "DuplicateFreePageTests.iClickOnTheAcceptManually()"
});
formatter.result({
  "duration": 78862300,
  "status": "passed"
});
formatter.match({
  "location": "DuplicateFreePageTests.iClickOnTheConfirm()"
});
formatter.result({
  "duration": 908661400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LinkedIn",
      "offset": 26
    }
  ],
  "location": "DuplicateFreePageTests.iWantToFilterForOne(String)"
});
formatter.result({
  "duration": 393135900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LinkedIn",
      "offset": 60
    }
  ],
  "location": "DuplicateFreePageTests.iShouldOnlyBeAbleToSeeTheContactsInThatSpecific(String)"
});
formatter.result({
  "duration": 1133378100,
  "status": "passed"
});
formatter.after({
  "duration": 43158300,
  "status": "passed"
});
formatter.after({
  "duration": 69335100,
  "status": "passed"
});
formatter.after({
  "duration": 107352400,
  "status": "passed"
});
formatter.after({
  "duration": 169055200,
  "status": "passed"
});
formatter.before({
  "duration": 4527873800,
  "status": "passed"
});
formatter.before({
  "duration": 3437002000,
  "status": "passed"
});
formatter.before({
  "duration": 3566558400,
  "status": "passed"
});
formatter.before({
  "duration": 3474043200,
  "status": "passed"
});
formatter.scenario({
  "line": 121,
  "name": "Duplicate Free Page contains the selector related to the source",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-free-page;duplicate-free-page-contains-the-selector-related-to-the-source;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 108,
  "name": "I access that landing page of COS and want to go to the list of possible duplicates",
  "keyword": "Given "
});
formatter.step({
  "line": 109,
  "name": "I select random values",
  "keyword": "When "
});
formatter.step({
  "line": 110,
  "name": "I click on the Accept Manually",
  "keyword": "And "
});
formatter.step({
  "line": 111,
  "name": "I click on the Confirm",
  "keyword": "And "
});
formatter.step({
  "line": 112,
  "name": "I want to filter for one \"Skype\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 113,
  "name": "I should only be able to see the contacts in that specific \"Skype\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "DuplicateFreePageTests.iAccessThatLandingPageOfCOSAndWantToGoToTheListOfPossibleDuplicates()"
});
formatter.result({
  "duration": 1956473400,
  "status": "passed"
});
formatter.match({
  "location": "DuplicateFreePageTests.iSelectRandomValues()"
});
formatter.result({
  "duration": 5356533400,
  "status": "passed"
});
formatter.match({
  "location": "DuplicateFreePageTests.iClickOnTheAcceptManually()"
});
formatter.result({
  "duration": 70056800,
  "status": "passed"
});
formatter.match({
  "location": "DuplicateFreePageTests.iClickOnTheConfirm()"
});
formatter.result({
  "duration": 828348600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Skype",
      "offset": 26
    }
  ],
  "location": "DuplicateFreePageTests.iWantToFilterForOne(String)"
});
formatter.result({
  "duration": 182941200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Skype",
      "offset": 60
    }
  ],
  "location": "DuplicateFreePageTests.iShouldOnlyBeAbleToSeeTheContactsInThatSpecific(String)"
});
formatter.result({
  "duration": 1097527600,
  "status": "passed"
});
formatter.after({
  "duration": 39062600,
  "status": "passed"
});
formatter.after({
  "duration": 56284300,
  "status": "passed"
});
formatter.after({
  "duration": 91861100,
  "status": "passed"
});
formatter.after({
  "duration": 166877200,
  "status": "passed"
});
formatter.uri("DuplicatePage.feature");
formatter.feature({
  "line": 1,
  "name": "Access to the Contacts Orchestrator Solution\u0027s (COS) Duplicates page",
  "description": "As a user\r\nI want to access the duplicate page\r\nSo that I can see the list of the possible contacts duplicate available\r\nSo that I can delete and add those at my will",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3830510000,
  "status": "passed"
});
formatter.before({
  "duration": 3396467800,
  "status": "passed"
});
formatter.before({
  "duration": 3375100400,
  "status": "passed"
});
formatter.before({
  "duration": 3473673200,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Duplicate page\u0027s title and text contains \"Duplicates\"",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-page;duplicate-page\u0027s-title-and-text-contains-\"duplicates\"",
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
  "name": "I click on the Duplicates",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "the title of the page should be \"Duplicates\"",
  "keyword": "Then "
});
formatter.match({
  "location": "IndexPageTests.iAccessTheLandingPageOfCOS()"
});
formatter.result({
  "duration": 1286623800,
  "status": "passed"
});
formatter.match({
  "location": "IndexPageTests.iClickOnTheDuplicates()"
});
formatter.result({
  "duration": 859875600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Duplicates",
      "offset": 33
    }
  ],
  "location": "IndexPageTests.theTitleOfThePageShouldBe(String)"
});
formatter.result({
  "duration": 4210500,
  "status": "passed"
});
formatter.after({
  "duration": 35723000,
  "status": "passed"
});
formatter.after({
  "duration": 66864400,
  "status": "passed"
});
formatter.after({
  "duration": 78925200,
  "status": "passed"
});
formatter.after({
  "duration": 167903200,
  "status": "passed"
});
formatter.before({
  "duration": 3760351800,
  "status": "passed"
});
formatter.before({
  "duration": 3383798900,
  "status": "passed"
});
formatter.before({
  "duration": 4206028200,
  "status": "passed"
});
formatter.before({
  "duration": 3891850400,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Duplicate page\u0027s contain the appropriate number of identified duplicates",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-page;duplicate-page\u0027s-contain-the-appropriate-number-of-identified-duplicates",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "I access the landing page of COS and want to go to duplicates",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I should be able to see the number of duplicate contacts possible",
  "keyword": "Then "
});
formatter.match({
  "location": "DuplicatePageTests.iAccessTheLandingPageOfCOSAndWantToGoToDuplicates()"
});
formatter.result({
  "duration": 13168587200,
  "status": "passed"
});
formatter.match({
  "location": "DuplicatePageTests.iShouldBeAbleToSeeTheNumberOfDuplicateContactsPossible()"
});
formatter.result({
  "duration": 1037116200,
  "status": "passed"
});
formatter.after({
  "duration": 29405900,
  "status": "passed"
});
formatter.after({
  "duration": 102872600,
  "status": "passed"
});
formatter.after({
  "duration": 170812800,
  "status": "passed"
});
formatter.after({
  "duration": 93510600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 16,
  "name": "Duplicate page\u0027s is coherent in its data",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-page;duplicate-page\u0027s-is-coherent-in-its-data",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "I access the landing page of COS and want to go to duplicates",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I should be able to see the contact as is in the database (\"\u003cposition\u003e\")",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-page;duplicate-page\u0027s-is-coherent-in-its-data;",
  "rows": [
    {
      "cells": [
        "position"
      ],
      "line": 20,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-page;duplicate-page\u0027s-is-coherent-in-its-data;;1"
    },
    {
      "cells": [
        "first"
      ],
      "line": 21,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-page;duplicate-page\u0027s-is-coherent-in-its-data;;2"
    },
    {
      "cells": [
        "half-middle1"
      ],
      "line": 22,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-page;duplicate-page\u0027s-is-coherent-in-its-data;;3"
    },
    {
      "cells": [
        "middle"
      ],
      "line": 23,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-page;duplicate-page\u0027s-is-coherent-in-its-data;;4"
    },
    {
      "cells": [
        "half-middle2"
      ],
      "line": 24,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-page;duplicate-page\u0027s-is-coherent-in-its-data;;5"
    },
    {
      "cells": [
        "last"
      ],
      "line": 25,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-page;duplicate-page\u0027s-is-coherent-in-its-data;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3890743800,
  "status": "passed"
});
formatter.before({
  "duration": 3580341800,
  "status": "passed"
});
formatter.before({
  "duration": 3726612600,
  "status": "passed"
});
formatter.before({
  "duration": 3830791000,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Duplicate page\u0027s is coherent in its data",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-page;duplicate-page\u0027s-is-coherent-in-its-data;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "I access the landing page of COS and want to go to duplicates",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I should be able to see the contact as is in the database (\"first\")",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "DuplicatePageTests.iAccessTheLandingPageOfCOSAndWantToGoToDuplicates()"
});
formatter.result({
  "duration": 3862081500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "first",
      "offset": 60
    }
  ],
  "location": "DuplicatePageTests.iShouldBeAbleToSeeTheContactAsIsInTheDatabase(String)"
});
formatter.result({
  "duration": 1407010400,
  "status": "passed"
});
formatter.after({
  "duration": 26095900,
  "status": "passed"
});
formatter.after({
  "duration": 65543300,
  "status": "passed"
});
formatter.after({
  "duration": 94388900,
  "status": "passed"
});
formatter.after({
  "duration": 146469600,
  "status": "passed"
});
formatter.before({
  "duration": 3964973500,
  "status": "passed"
});
formatter.before({
  "duration": 3551383600,
  "status": "passed"
});
formatter.before({
  "duration": 3789665200,
  "status": "passed"
});
formatter.before({
  "duration": 4041690800,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Duplicate page\u0027s is coherent in its data",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-page;duplicate-page\u0027s-is-coherent-in-its-data;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "I access the landing page of COS and want to go to duplicates",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I should be able to see the contact as is in the database (\"half-middle1\")",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "DuplicatePageTests.iAccessTheLandingPageOfCOSAndWantToGoToDuplicates()"
});
formatter.result({
  "duration": 13350413600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "half-middle1",
      "offset": 60
    }
  ],
  "location": "DuplicatePageTests.iShouldBeAbleToSeeTheContactAsIsInTheDatabase(String)"
});
formatter.result({
  "duration": 1395524300,
  "status": "passed"
});
formatter.after({
  "duration": 29462300,
  "status": "passed"
});
formatter.after({
  "duration": 56963900,
  "status": "passed"
});
formatter.after({
  "duration": 98780100,
  "status": "passed"
});
formatter.after({
  "duration": 210821000,
  "status": "passed"
});
formatter.before({
  "duration": 3876283000,
  "status": "passed"
});
formatter.before({
  "duration": 3560636500,
  "status": "passed"
});
formatter.before({
  "duration": 3761720800,
  "status": "passed"
});
formatter.before({
  "duration": 3822903700,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Duplicate page\u0027s is coherent in its data",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-page;duplicate-page\u0027s-is-coherent-in-its-data;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "I access the landing page of COS and want to go to duplicates",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I should be able to see the contact as is in the database (\"middle\")",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "DuplicatePageTests.iAccessTheLandingPageOfCOSAndWantToGoToDuplicates()"
});
formatter.result({
  "duration": 4554804500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "middle",
      "offset": 60
    }
  ],
  "location": "DuplicatePageTests.iShouldBeAbleToSeeTheContactAsIsInTheDatabase(String)"
});
formatter.result({
  "duration": 1409273200,
  "status": "passed"
});
formatter.after({
  "duration": 25963300,
  "status": "passed"
});
formatter.after({
  "duration": 50479000,
  "status": "passed"
});
formatter.after({
  "duration": 129506100,
  "status": "passed"
});
formatter.after({
  "duration": 132824100,
  "status": "passed"
});
formatter.before({
  "duration": 3902807900,
  "status": "passed"
});
formatter.before({
  "duration": 3434121600,
  "status": "passed"
});
formatter.before({
  "duration": 4015379000,
  "status": "passed"
});
formatter.before({
  "duration": 7329565400,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Duplicate page\u0027s is coherent in its data",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-page;duplicate-page\u0027s-is-coherent-in-its-data;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "I access the landing page of COS and want to go to duplicates",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I should be able to see the contact as is in the database (\"half-middle2\")",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "DuplicatePageTests.iAccessTheLandingPageOfCOSAndWantToGoToDuplicates()"
});
formatter.result({
  "duration": 47528297300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "half-middle2",
      "offset": 60
    }
  ],
  "location": "DuplicatePageTests.iShouldBeAbleToSeeTheContactAsIsInTheDatabase(String)"
});
formatter.result({
  "duration": 1708170800,
  "status": "passed"
});
formatter.after({
  "duration": 76451400,
  "status": "passed"
});
formatter.after({
  "duration": 25746500,
  "status": "passed"
});
formatter.after({
  "duration": 36737900,
  "status": "passed"
});
formatter.after({
  "duration": 31745500,
  "status": "passed"
});
formatter.before({
  "duration": 6369712500,
  "status": "passed"
});
formatter.before({
  "duration": 3908253200,
  "status": "passed"
});
formatter.before({
  "duration": 4484608800,
  "status": "passed"
});
formatter.before({
  "duration": 4228477100,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Duplicate page\u0027s is coherent in its data",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-page;duplicate-page\u0027s-is-coherent-in-its-data;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "I access the landing page of COS and want to go to duplicates",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I should be able to see the contact as is in the database (\"last\")",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "DuplicatePageTests.iAccessTheLandingPageOfCOSAndWantToGoToDuplicates()"
});
formatter.result({
  "duration": 5208961800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "last",
      "offset": 60
    }
  ],
  "location": "DuplicatePageTests.iShouldBeAbleToSeeTheContactAsIsInTheDatabase(String)"
});
formatter.result({
  "duration": 1406857900,
  "status": "passed"
});
formatter.after({
  "duration": 31410200,
  "status": "passed"
});
formatter.after({
  "duration": 52556100,
  "status": "passed"
});
formatter.after({
  "duration": 152131600,
  "status": "passed"
});
formatter.after({
  "duration": 115304800,
  "status": "passed"
});
formatter.before({
  "duration": 4022272900,
  "status": "passed"
});
formatter.before({
  "duration": 3457946800,
  "status": "passed"
});
formatter.before({
  "duration": 4003063100,
  "status": "passed"
});
formatter.before({
  "duration": 4248053900,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Duplicate page\u0027s Go back to index button",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-page;duplicate-page\u0027s-go-back-to-index-button",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 28,
  "name": "I access the landing page of COS and want to go to duplicates",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "I click on the Back to index button",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "I should be on the index page",
  "keyword": "Then "
});
formatter.match({
  "location": "DuplicatePageTests.iAccessTheLandingPageOfCOSAndWantToGoToDuplicates()"
});
formatter.result({
  "duration": 15318270600,
  "status": "passed"
});
formatter.match({
  "location": "DuplicatePageTests.iClickOnTheBackToIndexButton()"
});
formatter.result({
  "duration": 988904000,
  "status": "passed"
});
formatter.match({
  "location": "DuplicatePageTests.iShouldBeOnTheIndexPage()"
});
formatter.result({
  "duration": 5223300,
  "status": "passed"
});
formatter.after({
  "duration": 30897100,
  "status": "passed"
});
formatter.after({
  "duration": 57320900,
  "status": "passed"
});
formatter.after({
  "duration": 125089500,
  "status": "passed"
});
formatter.after({
  "duration": 198285800,
  "status": "passed"
});
formatter.before({
  "duration": 4541869100,
  "status": "passed"
});
formatter.before({
  "duration": 3533850800,
  "status": "passed"
});
formatter.before({
  "duration": 3601982500,
  "status": "passed"
});
formatter.before({
  "duration": 4024476100,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Duplicate page\u0027s Confirm button Automatic",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-page;duplicate-page\u0027s-confirm-button-automatic",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 33,
  "name": "I access the landing page of COS and want to go to duplicates",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "I click on the Accept Automatically button",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "I click on the Confirm button",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I should be redirected to the duplicate Free page (Auto)",
  "keyword": "Then "
});
formatter.match({
  "location": "DuplicatePageTests.iAccessTheLandingPageOfCOSAndWantToGoToDuplicates()"
});
formatter.result({
  "duration": 16556627700,
  "status": "passed"
});
formatter.match({
  "location": "DuplicatePageTests.iClickOnTheAcceptAutomaticallyButton()"
});
formatter.result({
  "duration": 605453500,
  "status": "passed"
});
formatter.match({
  "location": "DuplicatePageTests.iClickOnTheConfirmButton()"
});
formatter.result({
  "duration": 201496300,
  "status": "passed"
});
formatter.match({
  "location": "DuplicatePageTests.iShouldBeRedirectedToTheDuplicateFreePageAuto()"
});
formatter.result({
  "duration": 4768200,
  "status": "passed"
});
formatter.after({
  "duration": 35083900,
  "status": "passed"
});
formatter.after({
  "duration": 48226200,
  "status": "passed"
});
formatter.after({
  "duration": 180063800,
  "status": "passed"
});
formatter.after({
  "duration": 98386800,
  "status": "passed"
});
formatter.before({
  "duration": 4336714000,
  "status": "passed"
});
formatter.before({
  "duration": 3544889400,
  "status": "passed"
});
formatter.before({
  "duration": 3767218300,
  "status": "passed"
});
formatter.before({
  "duration": 3772977400,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Duplicate page\u0027s Confirm button Manual -- Correct",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-page;duplicate-page\u0027s-confirm-button-manual----correct",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 39,
  "name": "I access the landing page of COS and want to go to duplicates",
  "keyword": "Given "
});
formatter.step({
  "line": 40,
  "name": "I click on each position, randomly",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "I click on the Accept Manually button",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I click on the Confirm button",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I should be redirected to the duplicate Free page (Manual)",
  "keyword": "Then "
});
formatter.match({
  "location": "DuplicatePageTests.iAccessTheLandingPageOfCOSAndWantToGoToDuplicates()"
});
formatter.result({
  "duration": 16163030000,
  "status": "passed"
});
formatter.match({
  "location": "DuplicatePageTests.iClickOnEachPositionRandomly()"
});
formatter.result({
  "duration": 5163237700,
  "status": "passed"
});
formatter.match({
  "location": "DuplicatePageTests.iClickOnTheAcceptManuallyButton()"
});
formatter.result({
  "duration": 80581000,
  "status": "passed"
});
formatter.match({
  "location": "DuplicatePageTests.iClickOnTheConfirmButton()"
});
formatter.result({
  "duration": 189923200,
  "status": "passed"
});
formatter.match({
  "location": "DuplicatePageTests.iShouldBeRedirectedToTheDuplicateFreePageManual()"
});
formatter.result({
  "duration": 3042000,
  "status": "passed"
});
formatter.after({
  "duration": 28961100,
  "status": "passed"
});
formatter.after({
  "duration": 341286800,
  "status": "passed"
});
formatter.after({
  "duration": 257071800,
  "status": "passed"
});
formatter.after({
  "duration": 64810900,
  "status": "passed"
});
formatter.before({
  "duration": 3489595500,
  "status": "passed"
});
formatter.before({
  "duration": 3557321000,
  "status": "passed"
});
formatter.before({
  "duration": 3758291300,
  "status": "passed"
});
formatter.before({
  "duration": 3518499400,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "Duplicate page\u0027s Confirm button Manual -- Wrong",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-page;duplicate-page\u0027s-confirm-button-manual----wrong",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 46,
  "name": "I access the landing page of COS and want to go to duplicates",
  "keyword": "Given "
});
formatter.step({
  "line": 47,
  "name": "I click on the Accept Manually button",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I click on the Confirm button",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "An Alarm should appear stating that I need to fill everything",
  "keyword": "Then "
});
formatter.match({
  "location": "DuplicatePageTests.iAccessTheLandingPageOfCOSAndWantToGoToDuplicates()"
});
formatter.result({
  "duration": 1481991200,
  "status": "passed"
});
formatter.match({
  "location": "DuplicatePageTests.iClickOnTheAcceptManuallyButton()"
});
formatter.result({
  "duration": 574953900,
  "status": "passed"
});
formatter.match({
  "location": "DuplicatePageTests.iClickOnTheConfirmButton()"
});
formatter.result({
  "duration": 67187700,
  "status": "passed"
});
formatter.match({
  "location": "DuplicatePageTests.anAlarmShouldAppearStatingThatINeedToFillEverything()"
});
formatter.result({
  "duration": 3760800,
  "status": "passed"
});
formatter.after({
  "duration": 28346500,
  "status": "passed"
});
formatter.after({
  "duration": 79925100,
  "status": "passed"
});
formatter.after({
  "duration": 116532600,
  "status": "passed"
});
formatter.after({
  "duration": 148072000,
  "status": "passed"
});
formatter.before({
  "duration": 3497035600,
  "status": "passed"
});
formatter.before({
  "duration": 3575728800,
  "status": "passed"
});
formatter.before({
  "duration": 3971216200,
  "status": "passed"
});
formatter.before({
  "duration": 3623927900,
  "status": "passed"
});
formatter.scenario({
  "line": 51,
  "name": "Duplicate page\u0027s After filtering, go to DuplicateFree with all duplicatefree contacts",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-page;duplicate-page\u0027s-after-filtering,-go-to-duplicatefree-with-all-duplicatefree-contacts",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 52,
  "name": "I access the landing page of COS and want to go to duplicates",
  "keyword": "Given "
});
formatter.step({
  "line": 53,
  "name": "I click on each position, randomly while saving each Decline/Accept",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "I click on the Accept Manually button",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "I click on the Confirm button",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "I should be able to see the number of contacts related to the number that were filtered out",
  "keyword": "Then "
});
formatter.match({
  "location": "DuplicatePageTests.iAccessTheLandingPageOfCOSAndWantToGoToDuplicates()"
});
formatter.result({
  "duration": 1760201900,
  "status": "passed"
});
formatter.match({
  "location": "DuplicatePageTests.iClickOnEachPositionRandomlyWhileSavingEachDeclineAccept()"
});
formatter.result({
  "duration": 5758709500,
  "status": "passed"
});
formatter.match({
  "location": "DuplicatePageTests.iClickOnTheAcceptManuallyButton()"
});
formatter.result({
  "duration": 80565200,
  "status": "passed"
});
formatter.match({
  "location": "DuplicatePageTests.iClickOnTheConfirmButton()"
});
formatter.result({
  "duration": 198360300,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 29528400,
  "status": "passed"
});
formatter.after({
  "duration": 73897800,
  "status": "passed"
});
formatter.after({
  "duration": 534152100,
  "status": "passed"
});
formatter.after({
  "duration": 52326300,
  "status": "passed"
});
formatter.uri("IndexPage.feature");
formatter.feature({
  "line": 1,
  "name": "Access to the Contacts Orchestrator Solution\u0027s (COS) Landing Page",
  "description": "As a user\r\nI want to access to the URL address provided for the landing page\r\nSo that I can see the list of the contacts available",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 7149782700,
  "status": "passed"
});
formatter.before({
  "duration": 3585326700,
  "status": "passed"
});
formatter.before({
  "duration": 3754076200,
  "status": "passed"
});
formatter.before({
  "duration": 3739371600,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Landing page\u0027s title and text contains \"Contacts Landing Page\"",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page\u0027s-title-and-text-contains-\"contacts-landing-page\"",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the title of the page should be \"Contacts Landing Page\"",
  "keyword": "Then "
});
formatter.match({
  "location": "IndexPageTests.iAccessTheLandingPageOfCOS()"
});
formatter.result({
  "duration": 1110810900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Contacts Landing Page",
      "offset": 33
    }
  ],
  "location": "IndexPageTests.theTitleOfThePageShouldBe(String)"
});
formatter.result({
  "duration": 3510600,
  "status": "passed"
});
formatter.after({
  "duration": 42121700,
  "status": "passed"
});
formatter.after({
  "duration": 106912400,
  "status": "passed"
});
formatter.after({
  "duration": 178584700,
  "status": "passed"
});
formatter.after({
  "duration": 189349600,
  "status": "passed"
});
formatter.before({
  "duration": 3558925700,
  "status": "passed"
});
formatter.before({
  "duration": 3551165800,
  "status": "passed"
});
formatter.before({
  "duration": 3697378300,
  "status": "passed"
});
formatter.before({
  "duration": 4469215100,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Landing page contains all contacts available in the",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-all-contacts-available-in-the",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I should see exactly the same amount of contacts that exist in the database",
  "keyword": "Then "
});
formatter.match({
  "location": "IndexPageTests.iAccessTheLandingPageOfCOS()"
});
formatter.result({
  "duration": 1054534200,
  "status": "passed"
});
formatter.match({
  "location": "IndexPageTests.iShouldSeeExactlyTheSameAmountOfContactsThatExistInTheDatabase()"
});
formatter.result({
  "duration": 640216200,
  "status": "passed"
});
formatter.after({
  "duration": 30502000,
  "status": "passed"
});
formatter.after({
  "duration": 71038500,
  "status": "passed"
});
formatter.after({
  "duration": 123564400,
  "status": "passed"
});
formatter.after({
  "duration": 185870300,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 14,
  "name": "Landing page seems to have data that is coherent with the database",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-seems-to-have-data-that-is-coherent-with-the-database",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I should see the contact as in the database position, \"\u003cposition\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-seems-to-have-data-that-is-coherent-with-the-database;",
  "rows": [
    {
      "cells": [
        "position"
      ],
      "line": 19,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-seems-to-have-data-that-is-coherent-with-the-database;;1"
    },
    {
      "cells": [
        "first"
      ],
      "line": 20,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-seems-to-have-data-that-is-coherent-with-the-database;;2"
    },
    {
      "cells": [
        "half-middle1"
      ],
      "line": 21,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-seems-to-have-data-that-is-coherent-with-the-database;;3"
    },
    {
      "cells": [
        "middle"
      ],
      "line": 22,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-seems-to-have-data-that-is-coherent-with-the-database;;4"
    },
    {
      "cells": [
        "half-middle2"
      ],
      "line": 23,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-seems-to-have-data-that-is-coherent-with-the-database;;5"
    },
    {
      "cells": [
        "last"
      ],
      "line": 24,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-seems-to-have-data-that-is-coherent-with-the-database;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3691074500,
  "status": "passed"
});
formatter.before({
  "duration": 3830958300,
  "status": "passed"
});
formatter.before({
  "duration": 3592226600,
  "status": "passed"
});
formatter.before({
  "duration": 3730975100,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Landing page seems to have data that is coherent with the database",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-seems-to-have-data-that-is-coherent-with-the-database;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I should see the contact as in the database position, \"first\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "IndexPageTests.iAccessTheLandingPageOfCOS()"
});
formatter.result({
  "duration": 858575400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "first",
      "offset": 55
    }
  ],
  "location": "IndexPageTests.iShouldSeeTheContactAsInTheDatabasePosition(String)"
});
formatter.result({
  "duration": 755255500,
  "status": "passed"
});
formatter.after({
  "duration": 30388400,
  "status": "passed"
});
formatter.after({
  "duration": 63838800,
  "status": "passed"
});
formatter.after({
  "duration": 114701100,
  "status": "passed"
});
formatter.after({
  "duration": 194249100,
  "status": "passed"
});
formatter.before({
  "duration": 3994466200,
  "status": "passed"
});
formatter.before({
  "duration": 3623293900,
  "status": "passed"
});
formatter.before({
  "duration": 3631775800,
  "status": "passed"
});
formatter.before({
  "duration": 3573230300,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Landing page seems to have data that is coherent with the database",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-seems-to-have-data-that-is-coherent-with-the-database;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I should see the contact as in the database position, \"half-middle1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "IndexPageTests.iAccessTheLandingPageOfCOS()"
});
formatter.result({
  "duration": 953865300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "half-middle1",
      "offset": 55
    }
  ],
  "location": "IndexPageTests.iShouldSeeTheContactAsInTheDatabasePosition(String)"
});
formatter.result({
  "duration": 1483326000,
  "status": "passed"
});
formatter.after({
  "duration": 31578100,
  "status": "passed"
});
formatter.after({
  "duration": 65243100,
  "status": "passed"
});
formatter.after({
  "duration": 101364900,
  "status": "passed"
});
formatter.after({
  "duration": 191139100,
  "status": "passed"
});
formatter.before({
  "duration": 3544206800,
  "status": "passed"
});
formatter.before({
  "duration": 3557439100,
  "status": "passed"
});
formatter.before({
  "duration": 3600831600,
  "status": "passed"
});
formatter.before({
  "duration": 3665384600,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Landing page seems to have data that is coherent with the database",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-seems-to-have-data-that-is-coherent-with-the-database;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I should see the contact as in the database position, \"middle\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "IndexPageTests.iAccessTheLandingPageOfCOS()"
});
formatter.result({
  "duration": 1189044000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "middle",
      "offset": 55
    }
  ],
  "location": "IndexPageTests.iShouldSeeTheContactAsInTheDatabasePosition(String)"
});
formatter.result({
  "duration": 13119678100,
  "status": "passed"
});
formatter.after({
  "duration": 30968700,
  "status": "passed"
});
formatter.after({
  "duration": 63249700,
  "status": "passed"
});
formatter.after({
  "duration": 109895800,
  "status": "passed"
});
formatter.after({
  "duration": 205773700,
  "status": "passed"
});
formatter.before({
  "duration": 5130811200,
  "status": "passed"
});
formatter.before({
  "duration": 4197628400,
  "status": "passed"
});
formatter.before({
  "duration": 3884241400,
  "status": "passed"
});
formatter.before({
  "duration": 4080359000,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Landing page seems to have data that is coherent with the database",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-seems-to-have-data-that-is-coherent-with-the-database;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I should see the contact as in the database position, \"half-middle2\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "IndexPageTests.iAccessTheLandingPageOfCOS()"
});
formatter.result({
  "duration": 6675045900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "half-middle2",
      "offset": 55
    }
  ],
  "location": "IndexPageTests.iShouldSeeTheContactAsInTheDatabasePosition(String)"
});
formatter.result({
  "duration": 13728153400,
  "status": "passed"
});
formatter.after({
  "duration": 49789800,
  "status": "passed"
});
formatter.after({
  "duration": 83218100,
  "status": "passed"
});
formatter.after({
  "duration": 92873200,
  "status": "passed"
});
formatter.after({
  "duration": 187385200,
  "status": "passed"
});
formatter.before({
  "duration": 4761441500,
  "status": "passed"
});
formatter.before({
  "duration": 4412530900,
  "status": "passed"
});
formatter.before({
  "duration": 3738860400,
  "status": "passed"
});
formatter.before({
  "duration": 5996868500,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Landing page seems to have data that is coherent with the database",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-seems-to-have-data-that-is-coherent-with-the-database;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I should see the contact as in the database position, \"last\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "IndexPageTests.iAccessTheLandingPageOfCOS()"
});
formatter.result({
  "duration": 4672497200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "last",
      "offset": 55
    }
  ],
  "location": "IndexPageTests.iShouldSeeTheContactAsInTheDatabasePosition(String)"
});
formatter.result({
  "duration": 4049163300,
  "status": "passed"
});
formatter.after({
  "duration": 39152700,
  "status": "passed"
});
formatter.after({
  "duration": 186270900,
  "status": "passed"
});
formatter.after({
  "duration": 284517000,
  "status": "passed"
});
formatter.after({
  "duration": 130446900,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 26,
  "name": "Landing page contains the table and columns are sortable",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-columns-are-sortable",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 27,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "I sort the column \"\u003ccolumn\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "The first column should contain the most relevant contact regarded to the sorted \"\u003ccolumn\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 31,
  "name": "",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-columns-are-sortable;",
  "rows": [
    {
      "cells": [
        "column"
      ],
      "line": 32,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-columns-are-sortable;;1"
    },
    {
      "cells": [
        "ID"
      ],
      "line": 33,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-columns-are-sortable;;2"
    },
    {
      "cells": [
        "GivenName"
      ],
      "line": 34,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-columns-are-sortable;;3"
    },
    {
      "cells": [
        "Surname"
      ],
      "line": 35,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-columns-are-sortable;;4"
    },
    {
      "cells": [
        "Phone"
      ],
      "line": 36,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-columns-are-sortable;;5"
    },
    {
      "cells": [
        "Source"
      ],
      "line": 37,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-columns-are-sortable;;6"
    },
    {
      "cells": [
        "City"
      ],
      "line": 38,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-columns-are-sortable;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7232511700,
  "status": "passed"
});
formatter.before({
  "duration": 3889406900,
  "status": "passed"
});
formatter.before({
  "duration": 4538518300,
  "status": "passed"
});
formatter.before({
  "duration": 3814387300,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Landing page contains the table and columns are sortable",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-columns-are-sortable;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 27,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "I sort the column \"ID\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "The first column should contain the most relevant contact regarded to the sorted \"ID\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "IndexPageTests.iAccessTheLandingPageOfCOS()"
});
formatter.result({
  "duration": 1710906900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ID",
      "offset": 19
    }
  ],
  "location": "IndexPageTests.iSortTheColumn(String)"
});
formatter.result({
  "duration": 11157695300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ID",
      "offset": 82
    }
  ],
  "location": "IndexPageTests.theFirstColumnShouldContainTheMostRelevantContactRegardedToTheSorted(String)"
});
formatter.result({
  "duration": 125608800,
  "status": "passed"
});
formatter.after({
  "duration": 29921200,
  "status": "passed"
});
formatter.after({
  "duration": 64157800,
  "status": "passed"
});
formatter.after({
  "duration": 97744300,
  "status": "passed"
});
formatter.after({
  "duration": 211212700,
  "status": "passed"
});
formatter.before({
  "duration": 3938419700,
  "status": "passed"
});
formatter.before({
  "duration": 3611802200,
  "status": "passed"
});
formatter.before({
  "duration": 3587589300,
  "status": "passed"
});
formatter.before({
  "duration": 4196500200,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Landing page contains the table and columns are sortable",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-columns-are-sortable;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 27,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "I sort the column \"GivenName\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "The first column should contain the most relevant contact regarded to the sorted \"GivenName\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "IndexPageTests.iAccessTheLandingPageOfCOS()"
});
formatter.result({
  "duration": 1646207200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GivenName",
      "offset": 19
    }
  ],
  "location": "IndexPageTests.iSortTheColumn(String)"
});
formatter.result({
  "duration": 936841600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GivenName",
      "offset": 82
    }
  ],
  "location": "IndexPageTests.theFirstColumnShouldContainTheMostRelevantContactRegardedToTheSorted(String)"
});
formatter.result({
  "duration": 110042600,
  "status": "passed"
});
formatter.after({
  "duration": 28540100,
  "status": "passed"
});
formatter.after({
  "duration": 75984700,
  "status": "passed"
});
formatter.after({
  "duration": 133402300,
  "status": "passed"
});
formatter.after({
  "duration": 195465800,
  "status": "passed"
});
formatter.before({
  "duration": 4004139900,
  "status": "passed"
});
formatter.before({
  "duration": 3783994600,
  "status": "passed"
});
formatter.before({
  "duration": 3691713800,
  "status": "passed"
});
formatter.before({
  "duration": 3818180000,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Landing page contains the table and columns are sortable",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-columns-are-sortable;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 27,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "I sort the column \"Surname\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "The first column should contain the most relevant contact regarded to the sorted \"Surname\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "IndexPageTests.iAccessTheLandingPageOfCOS()"
});
formatter.result({
  "duration": 2126268300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Surname",
      "offset": 19
    }
  ],
  "location": "IndexPageTests.iSortTheColumn(String)"
});
formatter.result({
  "duration": 11005225300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Surname",
      "offset": 82
    }
  ],
  "location": "IndexPageTests.theFirstColumnShouldContainTheMostRelevantContactRegardedToTheSorted(String)"
});
formatter.result({
  "duration": 126190000,
  "status": "passed"
});
formatter.after({
  "duration": 30599000,
  "status": "passed"
});
formatter.after({
  "duration": 73854800,
  "status": "passed"
});
formatter.after({
  "duration": 93667500,
  "status": "passed"
});
formatter.after({
  "duration": 196622100,
  "status": "passed"
});
formatter.before({
  "duration": 4042253200,
  "status": "passed"
});
formatter.before({
  "duration": 3753200400,
  "status": "passed"
});
formatter.before({
  "duration": 4194469600,
  "status": "passed"
});
formatter.before({
  "duration": 3790801000,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Landing page contains the table and columns are sortable",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-columns-are-sortable;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 27,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "I sort the column \"Phone\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "The first column should contain the most relevant contact regarded to the sorted \"Phone\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "IndexPageTests.iAccessTheLandingPageOfCOS()"
});
formatter.result({
  "duration": 1016020000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Phone",
      "offset": 19
    }
  ],
  "location": "IndexPageTests.iSortTheColumn(String)"
});
formatter.result({
  "duration": 735195800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Phone",
      "offset": 82
    }
  ],
  "location": "IndexPageTests.theFirstColumnShouldContainTheMostRelevantContactRegardedToTheSorted(String)"
});
formatter.result({
  "duration": 119453100,
  "status": "passed"
});
formatter.after({
  "duration": 30817900,
  "status": "passed"
});
formatter.after({
  "duration": 63074600,
  "status": "passed"
});
formatter.after({
  "duration": 93469000,
  "status": "passed"
});
formatter.after({
  "duration": 242930200,
  "status": "passed"
});
formatter.before({
  "duration": 3626560900,
  "status": "passed"
});
formatter.before({
  "duration": 3711841600,
  "status": "passed"
});
formatter.before({
  "duration": 3645775300,
  "status": "passed"
});
formatter.before({
  "duration": 3767242700,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Landing page contains the table and columns are sortable",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-columns-are-sortable;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 27,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "I sort the column \"Source\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "The first column should contain the most relevant contact regarded to the sorted \"Source\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "IndexPageTests.iAccessTheLandingPageOfCOS()"
});
formatter.result({
  "duration": 858275500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Source",
      "offset": 19
    }
  ],
  "location": "IndexPageTests.iSortTheColumn(String)"
});
formatter.result({
  "duration": 706679600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Source",
      "offset": 82
    }
  ],
  "location": "IndexPageTests.theFirstColumnShouldContainTheMostRelevantContactRegardedToTheSorted(String)"
});
formatter.result({
  "duration": 122820700,
  "status": "passed"
});
formatter.after({
  "duration": 29377000,
  "status": "passed"
});
formatter.after({
  "duration": 62840400,
  "status": "passed"
});
formatter.after({
  "duration": 93045200,
  "status": "passed"
});
formatter.after({
  "duration": 217491100,
  "status": "passed"
});
formatter.before({
  "duration": 3663696000,
  "status": "passed"
});
formatter.before({
  "duration": 3717707100,
  "status": "passed"
});
formatter.before({
  "duration": 3649848000,
  "status": "passed"
});
formatter.before({
  "duration": 3741524200,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Landing page contains the table and columns are sortable",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-columns-are-sortable;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 27,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "I sort the column \"City\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "The first column should contain the most relevant contact regarded to the sorted \"City\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "IndexPageTests.iAccessTheLandingPageOfCOS()"
});
formatter.result({
  "duration": 813022200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "City",
      "offset": 19
    }
  ],
  "location": "IndexPageTests.iSortTheColumn(String)"
});
formatter.result({
  "duration": 706537600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "City",
      "offset": 82
    }
  ],
  "location": "IndexPageTests.theFirstColumnShouldContainTheMostRelevantContactRegardedToTheSorted(String)"
});
formatter.result({
  "duration": 129602500,
  "status": "passed"
});
formatter.after({
  "duration": 30698400,
  "status": "passed"
});
formatter.after({
  "duration": 59026600,
  "status": "passed"
});
formatter.after({
  "duration": 94062500,
  "status": "passed"
});
formatter.after({
  "duration": 220961200,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 40,
  "name": "Landing page contains the table and the search bar is operational",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-search-bar-is-operational",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 41,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 42,
  "name": "I search for \"\u003csearch\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "I should only see columns that are related to what I\u0027ve just searched (\"\u003csearch\u003e\")",
  "keyword": "Then "
});
formatter.examples({
  "line": 45,
  "name": "",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-search-bar-is-operational;",
  "rows": [
    {
      "cells": [
        "search"
      ],
      "line": 46,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-search-bar-is-operational;;1"
    },
    {
      "cells": [
        "Viseu"
      ],
      "line": 47,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-search-bar-is-operational;;2"
    },
    {
      "cells": [
        "Joao"
      ],
      "line": 48,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-search-bar-is-operational;;3"
    },
    {
      "cells": [
        "234216838"
      ],
      "line": 49,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-search-bar-is-operational;;4"
    },
    {
      "cells": [
        "Almeida"
      ],
      "line": 50,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-search-bar-is-operational;;5"
    },
    {
      "cells": [
        "Something"
      ],
      "line": 51,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-search-bar-is-operational;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3661122200,
  "status": "passed"
});
formatter.before({
  "duration": 3644964500,
  "status": "passed"
});
formatter.before({
  "duration": 3712174900,
  "status": "passed"
});
formatter.before({
  "duration": 3697338000,
  "status": "passed"
});
formatter.scenario({
  "line": 47,
  "name": "Landing page contains the table and the search bar is operational",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-search-bar-is-operational;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 41,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 42,
  "name": "I search for \"Viseu\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "I should only see columns that are related to what I\u0027ve just searched (\"Viseu\")",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "IndexPageTests.iAccessTheLandingPageOfCOS()"
});
formatter.result({
  "duration": 768839600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Viseu",
      "offset": 14
    }
  ],
  "location": "IndexPageTests.iSearchFor(String)"
});
formatter.result({
  "duration": 658522800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Viseu",
      "offset": 72
    }
  ],
  "location": "IndexPageTests.iShouldOnlySeeColumnsThatAreRelatedToWhatIVeJustSearched(String)"
});
formatter.result({
  "duration": 201776500,
  "status": "passed"
});
formatter.after({
  "duration": 32352300,
  "status": "passed"
});
formatter.after({
  "duration": 65604800,
  "status": "passed"
});
formatter.after({
  "duration": 90976800,
  "status": "passed"
});
formatter.after({
  "duration": 229616400,
  "status": "passed"
});
formatter.before({
  "duration": 3611506200,
  "status": "passed"
});
formatter.before({
  "duration": 3649952900,
  "status": "passed"
});
formatter.before({
  "duration": 3634213600,
  "status": "passed"
});
formatter.before({
  "duration": 3662581900,
  "status": "passed"
});
formatter.scenario({
  "line": 48,
  "name": "Landing page contains the table and the search bar is operational",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-search-bar-is-operational;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 41,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 42,
  "name": "I search for \"Joao\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "I should only see columns that are related to what I\u0027ve just searched (\"Joao\")",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "IndexPageTests.iAccessTheLandingPageOfCOS()"
});
formatter.result({
  "duration": 797329000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Joao",
      "offset": 14
    }
  ],
  "location": "IndexPageTests.iSearchFor(String)"
});
formatter.result({
  "duration": 718199200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Joao",
      "offset": 72
    }
  ],
  "location": "IndexPageTests.iShouldOnlySeeColumnsThatAreRelatedToWhatIVeJustSearched(String)"
});
formatter.result({
  "duration": 387984500,
  "status": "passed"
});
formatter.after({
  "duration": 30283100,
  "status": "passed"
});
formatter.after({
  "duration": 74207300,
  "status": "passed"
});
formatter.after({
  "duration": 77315300,
  "status": "passed"
});
formatter.after({
  "duration": 250229000,
  "status": "passed"
});
formatter.before({
  "duration": 3691718700,
  "status": "passed"
});
formatter.before({
  "duration": 3941021200,
  "status": "passed"
});
formatter.before({
  "duration": 3705493100,
  "status": "passed"
});
formatter.before({
  "duration": 3701781000,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
  "name": "Landing page contains the table and the search bar is operational",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-search-bar-is-operational;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 41,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 42,
  "name": "I search for \"234216838\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "I should only see columns that are related to what I\u0027ve just searched (\"234216838\")",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "IndexPageTests.iAccessTheLandingPageOfCOS()"
});
formatter.result({
  "duration": 1010764000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "234216838",
      "offset": 14
    }
  ],
  "location": "IndexPageTests.iSearchFor(String)"
});
formatter.result({
  "duration": 706095200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "234216838",
      "offset": 72
    }
  ],
  "location": "IndexPageTests.iShouldOnlySeeColumnsThatAreRelatedToWhatIVeJustSearched(String)"
});
formatter.result({
  "duration": 211243700,
  "status": "passed"
});
formatter.after({
  "duration": 39282200,
  "status": "passed"
});
formatter.after({
  "duration": 78066000,
  "status": "passed"
});
formatter.after({
  "duration": 110340200,
  "status": "passed"
});
formatter.after({
  "duration": 247992100,
  "status": "passed"
});
formatter.before({
  "duration": 3846973300,
  "status": "passed"
});
formatter.before({
  "duration": 8020721300,
  "status": "passed"
});
formatter.before({
  "duration": 8131209900,
  "status": "passed"
});
formatter.before({
  "duration": 6646300300,
  "status": "passed"
});
formatter.scenario({
  "line": 50,
  "name": "Landing page contains the table and the search bar is operational",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-search-bar-is-operational;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 41,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 42,
  "name": "I search for \"Almeida\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "I should only see columns that are related to what I\u0027ve just searched (\"Almeida\")",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "IndexPageTests.iAccessTheLandingPageOfCOS()"
});
formatter.result({
  "duration": 5205329500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Almeida",
      "offset": 14
    }
  ],
  "location": "IndexPageTests.iSearchFor(String)"
});
formatter.result({
  "duration": 1009219200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Almeida",
      "offset": 72
    }
  ],
  "location": "IndexPageTests.iShouldOnlySeeColumnsThatAreRelatedToWhatIVeJustSearched(String)"
});
formatter.result({
  "duration": 280200000,
  "status": "passed"
});
formatter.after({
  "duration": 53841700,
  "status": "passed"
});
formatter.after({
  "duration": 59453100,
  "status": "passed"
});
formatter.after({
  "duration": 69325400,
  "status": "passed"
});
formatter.after({
  "duration": 276635300,
  "status": "passed"
});
formatter.before({
  "duration": 6212370100,
  "status": "passed"
});
formatter.before({
  "duration": 5663388600,
  "status": "passed"
});
formatter.before({
  "duration": 6362496500,
  "status": "passed"
});
formatter.before({
  "duration": 13509819800,
  "status": "passed"
});
formatter.scenario({
  "line": 51,
  "name": "Landing page contains the table and the search bar is operational",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-search-bar-is-operational;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 41,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 42,
  "name": "I search for \"Something\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "I should only see columns that are related to what I\u0027ve just searched (\"Something\")",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "IndexPageTests.iAccessTheLandingPageOfCOS()"
});
formatter.result({
  "duration": 9192247100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Something",
      "offset": 14
    }
  ],
  "location": "IndexPageTests.iSearchFor(String)"
});
formatter.result({
  "duration": 1126971500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Something",
      "offset": 72
    }
  ],
  "location": "IndexPageTests.iShouldOnlySeeColumnsThatAreRelatedToWhatIVeJustSearched(String)"
});
formatter.result({
  "duration": 13575900,
  "status": "passed"
});
formatter.after({
  "duration": 31232300,
  "status": "passed"
});
formatter.after({
  "duration": 66776000,
  "status": "passed"
});
formatter.after({
  "duration": 98235800,
  "status": "passed"
});
formatter.after({
  "duration": 250119700,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 53,
  "name": "Landing page contains the table and the search bar is operational, along with columns sortable",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-search-bar-is-operational,-along-with-columns-sortable",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 54,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 55,
  "name": "I search for \"\u003csearch\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 56,
  "name": "I sort the column \"\u003ccolumn\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "I should be able to see the sorted table by \"\u003ccolumn\u003e\", while only appearing what I searched for, related to \"\u003csearch\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 59,
  "name": "",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-search-bar-is-operational,-along-with-columns-sortable;",
  "rows": [
    {
      "cells": [
        "search",
        "column"
      ],
      "line": 60,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-search-bar-is-operational,-along-with-columns-sortable;;1"
    },
    {
      "cells": [
        "Joao",
        "ID"
      ],
      "line": 61,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-search-bar-is-operational,-along-with-columns-sortable;;2"
    },
    {
      "cells": [
        "Joao",
        "GivenName"
      ],
      "line": 62,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-search-bar-is-operational,-along-with-columns-sortable;;3"
    },
    {
      "cells": [
        "Joao",
        "Surname"
      ],
      "line": 63,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-search-bar-is-operational,-along-with-columns-sortable;;4"
    },
    {
      "cells": [
        "Joao",
        "Phone"
      ],
      "line": 64,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-search-bar-is-operational,-along-with-columns-sortable;;5"
    },
    {
      "cells": [
        "Joao",
        "City"
      ],
      "line": 65,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-search-bar-is-operational,-along-with-columns-sortable;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6715373200,
  "status": "passed"
});
formatter.before({
  "duration": 6833744600,
  "status": "passed"
});
formatter.before({
  "duration": 6653760100,
  "status": "passed"
});
formatter.before({
  "duration": 6333782300,
  "status": "passed"
});
formatter.scenario({
  "line": 61,
  "name": "Landing page contains the table and the search bar is operational, along with columns sortable",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-search-bar-is-operational,-along-with-columns-sortable;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 54,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 55,
  "name": "I search for \"Joao\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 56,
  "name": "I sort the column \"ID\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "I should be able to see the sorted table by \"ID\", while only appearing what I searched for, related to \"Joao\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "IndexPageTests.iAccessTheLandingPageOfCOS()"
});
formatter.result({
  "duration": 15150452400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Joao",
      "offset": 14
    }
  ],
  "location": "IndexPageTests.iSearchFor(String)"
});
formatter.result({
  "duration": 11179583400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ID",
      "offset": 19
    }
  ],
  "location": "IndexPageTests.iSortTheColumn(String)"
});
formatter.result({
  "duration": 86522600,
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
  "location": "IndexPageTests.iShouldBeAbleToSeeTheSortedTableByWhileOnlyAppearingWhatISearchedForRelatedTo(String,String)"
});
formatter.result({
  "duration": 375763100,
  "status": "passed"
});
formatter.after({
  "duration": 30256000,
  "status": "passed"
});
formatter.after({
  "duration": 113289700,
  "status": "passed"
});
formatter.after({
  "duration": 155091000,
  "status": "passed"
});
formatter.after({
  "duration": 304958500,
  "status": "passed"
});
formatter.before({
  "duration": 6103186800,
  "status": "passed"
});
formatter.before({
  "duration": 4948832900,
  "status": "passed"
});
formatter.before({
  "duration": 5068984800,
  "status": "passed"
});
formatter.before({
  "duration": 5243709300,
  "status": "passed"
});
formatter.scenario({
  "line": 62,
  "name": "Landing page contains the table and the search bar is operational, along with columns sortable",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-search-bar-is-operational,-along-with-columns-sortable;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 54,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 55,
  "name": "I search for \"Joao\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 56,
  "name": "I sort the column \"GivenName\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "I should be able to see the sorted table by \"GivenName\", while only appearing what I searched for, related to \"Joao\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "IndexPageTests.iAccessTheLandingPageOfCOS()"
});
formatter.result({
  "duration": 6041252700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Joao",
      "offset": 14
    }
  ],
  "location": "IndexPageTests.iSearchFor(String)"
});
formatter.result({
  "duration": 1037613600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GivenName",
      "offset": 19
    }
  ],
  "location": "IndexPageTests.iSortTheColumn(String)"
});
formatter.result({
  "duration": 107634100,
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
  "location": "IndexPageTests.iShouldBeAbleToSeeTheSortedTableByWhileOnlyAppearingWhatISearchedForRelatedTo(String,String)"
});
formatter.result({
  "duration": 404487400,
  "status": "passed"
});
formatter.after({
  "duration": 38602500,
  "status": "passed"
});
formatter.after({
  "duration": 78837400,
  "status": "passed"
});
formatter.after({
  "duration": 85602200,
  "status": "passed"
});
formatter.after({
  "duration": 261875300,
  "status": "passed"
});
formatter.before({
  "duration": 4973218000,
  "status": "passed"
});
formatter.before({
  "duration": 3807640800,
  "status": "passed"
});
formatter.before({
  "duration": 4495824900,
  "status": "passed"
});
formatter.before({
  "duration": 4823437900,
  "status": "passed"
});
formatter.scenario({
  "line": 63,
  "name": "Landing page contains the table and the search bar is operational, along with columns sortable",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-search-bar-is-operational,-along-with-columns-sortable;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 54,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 55,
  "name": "I search for \"Joao\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 56,
  "name": "I sort the column \"Surname\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "I should be able to see the sorted table by \"Surname\", while only appearing what I searched for, related to \"Joao\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "IndexPageTests.iAccessTheLandingPageOfCOS()"
});
formatter.result({
  "duration": 6097878400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Joao",
      "offset": 14
    }
  ],
  "location": "IndexPageTests.iSearchFor(String)"
});
formatter.result({
  "duration": 11867119600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Surname",
      "offset": 19
    }
  ],
  "location": "IndexPageTests.iSortTheColumn(String)"
});
formatter.result({
  "duration": 123257600,
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
  "location": "IndexPageTests.iShouldBeAbleToSeeTheSortedTableByWhileOnlyAppearingWhatISearchedForRelatedTo(String,String)"
});
formatter.result({
  "duration": 389401600,
  "status": "passed"
});
formatter.after({
  "duration": 31880400,
  "status": "passed"
});
formatter.after({
  "duration": 68397400,
  "status": "passed"
});
formatter.after({
  "duration": 183579100,
  "status": "passed"
});
formatter.after({
  "duration": 155053000,
  "status": "passed"
});
formatter.before({
  "duration": 7780873000,
  "status": "passed"
});
formatter.before({
  "duration": 4715158300,
  "status": "passed"
});
formatter.before({
  "duration": 3850480100,
  "status": "passed"
});
formatter.before({
  "duration": 3906214300,
  "status": "passed"
});
formatter.scenario({
  "line": 64,
  "name": "Landing page contains the table and the search bar is operational, along with columns sortable",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-search-bar-is-operational,-along-with-columns-sortable;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 54,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 55,
  "name": "I search for \"Joao\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 56,
  "name": "I sort the column \"Phone\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "I should be able to see the sorted table by \"Phone\", while only appearing what I searched for, related to \"Joao\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "IndexPageTests.iAccessTheLandingPageOfCOS()"
});
formatter.result({
  "duration": 2760090900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Joao",
      "offset": 14
    }
  ],
  "location": "IndexPageTests.iSearchFor(String)"
});
formatter.result({
  "duration": 10988008600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Phone",
      "offset": 19
    }
  ],
  "location": "IndexPageTests.iSortTheColumn(String)"
});
formatter.result({
  "duration": 125173000,
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
  "location": "IndexPageTests.iShouldBeAbleToSeeTheSortedTableByWhileOnlyAppearingWhatISearchedForRelatedTo(String,String)"
});
formatter.result({
  "duration": 370424100,
  "status": "passed"
});
formatter.after({
  "duration": 30412700,
  "status": "passed"
});
formatter.after({
  "duration": 64030200,
  "status": "passed"
});
formatter.after({
  "duration": 107775300,
  "status": "passed"
});
formatter.after({
  "duration": 242472200,
  "status": "passed"
});
formatter.before({
  "duration": 3855504900,
  "status": "passed"
});
formatter.before({
  "duration": 3871694500,
  "status": "passed"
});
formatter.before({
  "duration": 3865220600,
  "status": "passed"
});
formatter.before({
  "duration": 3902230500,
  "status": "passed"
});
formatter.scenario({
  "line": 65,
  "name": "Landing page contains the table and the search bar is operational, along with columns sortable",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-search-bar-is-operational,-along-with-columns-sortable;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 54,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 55,
  "name": "I search for \"Joao\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 56,
  "name": "I sort the column \"City\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "I should be able to see the sorted table by \"City\", while only appearing what I searched for, related to \"Joao\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "IndexPageTests.iAccessTheLandingPageOfCOS()"
});
formatter.result({
  "duration": 1853318600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Joao",
      "offset": 14
    }
  ],
  "location": "IndexPageTests.iSearchFor(String)"
});
formatter.result({
  "duration": 11035353200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "City",
      "offset": 19
    }
  ],
  "location": "IndexPageTests.iSortTheColumn(String)"
});
formatter.result({
  "duration": 155407600,
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
  "location": "IndexPageTests.iShouldBeAbleToSeeTheSortedTableByWhileOnlyAppearingWhatISearchedForRelatedTo(String,String)"
});
formatter.result({
  "duration": 380779400,
  "status": "passed"
});
formatter.after({
  "duration": 30191100,
  "status": "passed"
});
formatter.after({
  "duration": 80525300,
  "status": "passed"
});
formatter.after({
  "duration": 211785100,
  "status": "passed"
});
formatter.after({
  "duration": 212718700,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 67,
  "name": "Landing page contains the table and the pagination can be used",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-pagination-can-be-used",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 68,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 69,
  "name": "I increase the pagination to \"\u003cpagination\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 70,
  "name": "I should be able to see the number of contacts related to \"\u003cpagination\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 72,
  "name": "",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-pagination-can-be-used;",
  "rows": [
    {
      "cells": [
        "pagination"
      ],
      "line": 73,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-pagination-can-be-used;;1"
    },
    {
      "cells": [
        "10"
      ],
      "line": 74,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-pagination-can-be-used;;2"
    },
    {
      "cells": [
        "25"
      ],
      "line": 75,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-pagination-can-be-used;;3"
    },
    {
      "cells": [
        "50"
      ],
      "line": 76,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-pagination-can-be-used;;4"
    },
    {
      "cells": [
        "100"
      ],
      "line": 77,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-pagination-can-be-used;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4141238700,
  "status": "passed"
});
formatter.before({
  "duration": 3845655400,
  "status": "passed"
});
formatter.before({
  "duration": 4800179700,
  "status": "passed"
});
formatter.before({
  "duration": 4553543300,
  "status": "passed"
});
formatter.scenario({
  "line": 74,
  "name": "Landing page contains the table and the pagination can be used",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-pagination-can-be-used;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 68,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 69,
  "name": "I increase the pagination to \"10\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 70,
  "name": "I should be able to see the number of contacts related to \"10\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "IndexPageTests.iAccessTheLandingPageOfCOS()"
});
formatter.result({
  "duration": 3905020600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 30
    }
  ],
  "location": "IndexPageTests.iIncreaseThePaginationTo(String)"
});
formatter.result({
  "duration": 835683000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 59
    }
  ],
  "location": "IndexPageTests.iShouldBeAbleToSeeTheNumberOfContactsRelatedTo(String)"
});
formatter.result({
  "duration": 40062600,
  "status": "passed"
});
formatter.after({
  "duration": 32204200,
  "status": "passed"
});
formatter.after({
  "duration": 65959500,
  "status": "passed"
});
formatter.after({
  "duration": 102428500,
  "status": "passed"
});
formatter.after({
  "duration": 286812400,
  "status": "passed"
});
formatter.before({
  "duration": 4216590500,
  "status": "passed"
});
formatter.before({
  "duration": 3935936900,
  "status": "passed"
});
formatter.before({
  "duration": 3812111700,
  "status": "passed"
});
formatter.before({
  "duration": 3933672300,
  "status": "passed"
});
formatter.scenario({
  "line": 75,
  "name": "Landing page contains the table and the pagination can be used",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-pagination-can-be-used;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 68,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 69,
  "name": "I increase the pagination to \"25\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 70,
  "name": "I should be able to see the number of contacts related to \"25\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "IndexPageTests.iAccessTheLandingPageOfCOS()"
});
formatter.result({
  "duration": 1527546800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "25",
      "offset": 30
    }
  ],
  "location": "IndexPageTests.iIncreaseThePaginationTo(String)"
});
formatter.result({
  "duration": 735574200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "25",
      "offset": 59
    }
  ],
  "location": "IndexPageTests.iShouldBeAbleToSeeTheNumberOfContactsRelatedTo(String)"
});
formatter.result({
  "duration": 35651600,
  "status": "passed"
});
formatter.after({
  "duration": 33008100,
  "status": "passed"
});
formatter.after({
  "duration": 108850200,
  "status": "passed"
});
formatter.after({
  "duration": 105803300,
  "status": "passed"
});
formatter.after({
  "duration": 203315600,
  "status": "passed"
});
formatter.before({
  "duration": 3838362100,
  "status": "passed"
});
formatter.before({
  "duration": 3867251300,
  "status": "passed"
});
formatter.before({
  "duration": 3872000100,
  "status": "passed"
});
formatter.before({
  "duration": 3854748000,
  "status": "passed"
});
formatter.scenario({
  "line": 76,
  "name": "Landing page contains the table and the pagination can be used",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-pagination-can-be-used;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 68,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 69,
  "name": "I increase the pagination to \"50\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 70,
  "name": "I should be able to see the number of contacts related to \"50\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "IndexPageTests.iAccessTheLandingPageOfCOS()"
});
formatter.result({
  "duration": 825039300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 30
    }
  ],
  "location": "IndexPageTests.iIncreaseThePaginationTo(String)"
});
formatter.result({
  "duration": 713487400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 59
    }
  ],
  "location": "IndexPageTests.iShouldBeAbleToSeeTheNumberOfContactsRelatedTo(String)"
});
formatter.result({
  "duration": 40771400,
  "status": "passed"
});
formatter.after({
  "duration": 32451700,
  "status": "passed"
});
formatter.after({
  "duration": 60432600,
  "status": "passed"
});
formatter.after({
  "duration": 79297800,
  "status": "passed"
});
formatter.after({
  "duration": 258307000,
  "status": "passed"
});
formatter.before({
  "duration": 3890380400,
  "status": "passed"
});
formatter.before({
  "duration": 3816351900,
  "status": "passed"
});
formatter.before({
  "duration": 3845223400,
  "status": "passed"
});
formatter.before({
  "duration": 4047752700,
  "status": "passed"
});
formatter.scenario({
  "line": 77,
  "name": "Landing page contains the table and the pagination can be used",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-pagination-can-be-used;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 68,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 69,
  "name": "I increase the pagination to \"100\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 70,
  "name": "I should be able to see the number of contacts related to \"100\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "IndexPageTests.iAccessTheLandingPageOfCOS()"
});
formatter.result({
  "duration": 1856952100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 30
    }
  ],
  "location": "IndexPageTests.iIncreaseThePaginationTo(String)"
});
formatter.result({
  "duration": 847258900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 59
    }
  ],
  "location": "IndexPageTests.iShouldBeAbleToSeeTheNumberOfContactsRelatedTo(String)"
});
formatter.result({
  "duration": 42393100,
  "status": "passed"
});
formatter.after({
  "duration": 47791900,
  "status": "passed"
});
formatter.after({
  "duration": 64947600,
  "status": "passed"
});
formatter.after({
  "duration": 86146800,
  "status": "passed"
});
formatter.after({
  "duration": 245785400,
  "status": "passed"
});
formatter.before({
  "duration": 4280373200,
  "status": "passed"
});
formatter.before({
  "duration": 3941077000,
  "status": "passed"
});
formatter.before({
  "duration": 3922211100,
  "status": "passed"
});
formatter.before({
  "duration": 4314782000,
  "status": "passed"
});
formatter.scenario({
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
  "location": "IndexPageTests.iAccessTheLandingPageOfCOS()"
});
formatter.result({
  "duration": 2159640700,
  "status": "passed"
});
formatter.match({
  "location": "IndexPageTests.iShouldBeAbleToSeeThePossibleSources()"
});
formatter.result({
  "duration": 11098397400,
  "status": "passed"
});
formatter.after({
  "duration": 31720800,
  "status": "passed"
});
formatter.after({
  "duration": 61999400,
  "status": "passed"
});
formatter.after({
  "duration": 100842800,
  "status": "passed"
});
formatter.after({
  "duration": 219326400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 83,
  "name": "Landing page contains the selector related to the source",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-selector-related-to-the-source",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 84,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 85,
  "name": "I want to filter for a \"\u003csource\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 86,
  "name": "I should only be able to see the contacts of that specific \"\u003csource\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 88,
  "name": "",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-selector-related-to-the-source;",
  "rows": [
    {
      "cells": [
        "source"
      ],
      "line": 89,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-selector-related-to-the-source;;1"
    },
    {
      "cells": [
        "All"
      ],
      "line": 90,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-selector-related-to-the-source;;2"
    },
    {
      "cells": [
        "Twitter"
      ],
      "line": 91,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-selector-related-to-the-source;;3"
    },
    {
      "cells": [
        "Facebook"
      ],
      "line": 92,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-selector-related-to-the-source;;4"
    },
    {
      "cells": [
        "LinkedIn"
      ],
      "line": 93,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-selector-related-to-the-source;;5"
    },
    {
      "cells": [
        "Skype"
      ],
      "line": 94,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-selector-related-to-the-source;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4428895800,
  "status": "passed"
});
formatter.before({
  "duration": 3812005800,
  "status": "passed"
});
formatter.before({
  "duration": 4283234700,
  "status": "passed"
});
formatter.before({
  "duration": 4430224800,
  "status": "passed"
});
formatter.scenario({
  "line": 90,
  "name": "Landing page contains the selector related to the source",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-selector-related-to-the-source;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 84,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 85,
  "name": "I want to filter for a \"All\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 86,
  "name": "I should only be able to see the contacts of that specific \"All\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "IndexPageTests.iAccessTheLandingPageOfCOS()"
});
formatter.result({
  "duration": 4604485800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "All",
      "offset": 24
    }
  ],
  "location": "IndexPageTests.iWantToFilterForA(String)"
});
formatter.result({
  "duration": 859837900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "All",
      "offset": 60
    }
  ],
  "location": "IndexPageTests.iShouldOnlyBeAbleToSeeTheContactsOfThatSpecific(String)"
});
formatter.result({
  "duration": 1112708200,
  "status": "passed"
});
formatter.after({
  "duration": 37870700,
  "status": "passed"
});
formatter.after({
  "duration": 63983100,
  "status": "passed"
});
formatter.after({
  "duration": 106902500,
  "status": "passed"
});
formatter.after({
  "duration": 269436600,
  "status": "passed"
});
formatter.before({
  "duration": 4229227600,
  "status": "passed"
});
formatter.before({
  "duration": 3864102900,
  "status": "passed"
});
formatter.before({
  "duration": 4053158500,
  "status": "passed"
});
formatter.before({
  "duration": 4490224600,
  "status": "passed"
});
formatter.scenario({
  "line": 91,
  "name": "Landing page contains the selector related to the source",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-selector-related-to-the-source;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 84,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 85,
  "name": "I want to filter for a \"Twitter\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 86,
  "name": "I should only be able to see the contacts of that specific \"Twitter\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "IndexPageTests.iAccessTheLandingPageOfCOS()"
});
formatter.result({
  "duration": 3104705700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Twitter",
      "offset": 24
    }
  ],
  "location": "IndexPageTests.iWantToFilterForA(String)"
});
formatter.result({
  "duration": 11131684100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Twitter",
      "offset": 60
    }
  ],
  "location": "IndexPageTests.iShouldOnlyBeAbleToSeeTheContactsOfThatSpecific(String)"
});
formatter.result({
  "duration": 1117911300,
  "status": "passed"
});
formatter.after({
  "duration": 32304700,
  "status": "passed"
});
formatter.after({
  "duration": 69281800,
  "status": "passed"
});
formatter.after({
  "duration": 85533200,
  "status": "passed"
});
formatter.after({
  "duration": 272784200,
  "status": "passed"
});
formatter.before({
  "duration": 4252381900,
  "status": "passed"
});
formatter.before({
  "duration": 3898303600,
  "status": "passed"
});
formatter.before({
  "duration": 4202520600,
  "status": "passed"
});
formatter.before({
  "duration": 4265969100,
  "status": "passed"
});
formatter.scenario({
  "line": 92,
  "name": "Landing page contains the selector related to the source",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-selector-related-to-the-source;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 84,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 85,
  "name": "I want to filter for a \"Facebook\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 86,
  "name": "I should only be able to see the contacts of that specific \"Facebook\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "IndexPageTests.iAccessTheLandingPageOfCOS()"
});
formatter.result({
  "duration": 4611010600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Facebook",
      "offset": 24
    }
  ],
  "location": "IndexPageTests.iWantToFilterForA(String)"
});
formatter.result({
  "duration": 11352374600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Facebook",
      "offset": 60
    }
  ],
  "location": "IndexPageTests.iShouldOnlyBeAbleToSeeTheContactsOfThatSpecific(String)"
});
formatter.result({
  "duration": 1106107000,
  "status": "passed"
});
formatter.after({
  "duration": 31345900,
  "status": "passed"
});
formatter.after({
  "duration": 140051400,
  "status": "passed"
});
formatter.after({
  "duration": 138493200,
  "status": "passed"
});
formatter.after({
  "duration": 203404800,
  "status": "passed"
});
formatter.before({
  "duration": 4379695200,
  "status": "passed"
});
formatter.before({
  "duration": 4096496800,
  "status": "passed"
});
formatter.before({
  "duration": 4874329400,
  "status": "passed"
});
formatter.before({
  "duration": 14750897300,
  "status": "passed"
});
formatter.scenario({
  "line": 93,
  "name": "Landing page contains the selector related to the source",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-selector-related-to-the-source;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 84,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 85,
  "name": "I want to filter for a \"LinkedIn\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 86,
  "name": "I should only be able to see the contacts of that specific \"LinkedIn\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "IndexPageTests.iAccessTheLandingPageOfCOS()"
});
formatter.result({
  "duration": 4550896200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LinkedIn",
      "offset": 24
    }
  ],
  "location": "IndexPageTests.iWantToFilterForA(String)"
});
formatter.result({
  "duration": 1191844000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LinkedIn",
      "offset": 60
    }
  ],
  "location": "IndexPageTests.iShouldOnlyBeAbleToSeeTheContactsOfThatSpecific(String)"
});
formatter.result({
  "duration": 1104258000,
  "status": "passed"
});
formatter.after({
  "duration": 81559800,
  "status": "passed"
});
formatter.after({
  "duration": 90406300,
  "status": "passed"
});
formatter.after({
  "duration": 188824500,
  "status": "passed"
});
formatter.after({
  "duration": 138544900,
  "status": "passed"
});
formatter.before({
  "duration": 8044306000,
  "status": "passed"
});
formatter.before({
  "duration": 3907157400,
  "status": "passed"
});
formatter.before({
  "duration": 3968208200,
  "status": "passed"
});
formatter.before({
  "duration": 4401068900,
  "status": "passed"
});
formatter.scenario({
  "line": 94,
  "name": "Landing page contains the selector related to the source",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-selector-related-to-the-source;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 84,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 85,
  "name": "I want to filter for a \"Skype\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 86,
  "name": "I should only be able to see the contacts of that specific \"Skype\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "IndexPageTests.iAccessTheLandingPageOfCOS()"
});
formatter.result({
  "duration": 1764790300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Skype",
      "offset": 24
    }
  ],
  "location": "IndexPageTests.iWantToFilterForA(String)"
});
formatter.result({
  "duration": 777448200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Skype",
      "offset": 60
    }
  ],
  "location": "IndexPageTests.iShouldOnlyBeAbleToSeeTheContactsOfThatSpecific(String)"
});
formatter.result({
  "duration": 1735303600,
  "status": "passed"
});
formatter.after({
  "duration": 31710600,
  "status": "passed"
});
formatter.after({
  "duration": 61304700,
  "status": "passed"
});
formatter.after({
  "duration": 80135000,
  "status": "passed"
});
formatter.after({
  "duration": 277791300,
  "status": "passed"
});
formatter.before({
  "duration": 3968254700,
  "status": "passed"
});
formatter.before({
  "duration": 4327837700,
  "status": "passed"
});
formatter.before({
  "duration": 4425687300,
  "status": "passed"
});
formatter.before({
  "duration": 3964174900,
  "status": "passed"
});
formatter.scenario({
  "line": 96,
  "name": "Landing page contains the duplicate button and redirects to the correct page",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-duplicate-button-and-redirects-to-the-correct-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 97,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 98,
  "name": "I click on the Duplicates",
  "keyword": "When "
});
formatter.step({
  "line": 99,
  "name": "I should be redirected to the duplicate pages",
  "keyword": "Then "
});
formatter.match({
  "location": "IndexPageTests.iAccessTheLandingPageOfCOS()"
});
formatter.result({
  "duration": 735510000,
  "status": "passed"
});
formatter.match({
  "location": "IndexPageTests.iClickOnTheDuplicates()"
});
formatter.result({
  "duration": 810220600,
  "status": "passed"
});
formatter.match({
  "location": "IndexPageTests.iShouldBeRedirectedToTheDuplicatePages()"
});
formatter.result({
  "duration": 5143400,
  "status": "passed"
});
formatter.after({
  "duration": 31865300,
  "status": "passed"
});
formatter.after({
  "duration": 69131300,
  "status": "passed"
});
formatter.after({
  "duration": 111864000,
  "status": "passed"
});
formatter.after({
  "duration": 212836400,
  "status": "passed"
});
});