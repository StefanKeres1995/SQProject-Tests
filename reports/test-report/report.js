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
  "duration": 6099172600,
  "status": "passed"
});
formatter.before({
  "duration": 3761362400,
  "status": "passed"
});
formatter.before({
  "duration": 4229252700,
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
  "duration": 2757950300,
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
  "duration": 13013774000,
  "status": "passed"
});
formatter.match({
  "location": "DetailsPageTests.iShouldBeRedirectedToTheDetailsPageOfTheUser()"
});
formatter.result({
  "duration": 951746600,
  "status": "passed"
});
formatter.after({
  "duration": 27202600,
  "status": "passed"
});
formatter.after({
  "duration": 67125300,
  "status": "passed"
});
formatter.after({
  "duration": 123049000,
  "status": "passed"
});
formatter.before({
  "duration": 3532168900,
  "status": "passed"
});
formatter.before({
  "duration": 3566630300,
  "status": "passed"
});
formatter.before({
  "duration": 3504632000,
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
  "duration": 1740074700,
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
  "duration": 13345778700,
  "status": "passed"
});
formatter.match({
  "location": "DetailsPageTests.iShouldBeRedirectedToTheDetailsPageOfTheUser()"
});
formatter.result({
  "duration": 983512400,
  "status": "passed"
});
formatter.after({
  "duration": 33850000,
  "status": "passed"
});
formatter.after({
  "duration": 58791100,
  "status": "passed"
});
formatter.after({
  "duration": 132816100,
  "status": "passed"
});
formatter.before({
  "duration": 3500073500,
  "status": "passed"
});
formatter.before({
  "duration": 3084804000,
  "status": "passed"
});
formatter.before({
  "duration": 3958540100,
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
  "duration": 1976905500,
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
  "duration": 13631277500,
  "status": "passed"
});
formatter.match({
  "location": "DetailsPageTests.iShouldBeRedirectedToTheDetailsPageOfTheUser()"
});
formatter.result({
  "duration": 983323200,
  "status": "passed"
});
formatter.after({
  "duration": 26933000,
  "status": "passed"
});
formatter.after({
  "duration": 60769900,
  "status": "passed"
});
formatter.after({
  "duration": 132301300,
  "status": "passed"
});
formatter.before({
  "duration": 3652838800,
  "status": "passed"
});
formatter.before({
  "duration": 3254380900,
  "status": "passed"
});
formatter.before({
  "duration": 3555622500,
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
  "duration": 2247810700,
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
  "duration": 14493909000,
  "status": "passed"
});
formatter.match({
  "location": "DetailsPageTests.iShouldBeRedirectedToTheDetailsPageOfTheUser()"
});
formatter.result({
  "duration": 979532400,
  "status": "passed"
});
formatter.after({
  "duration": 27489300,
  "status": "passed"
});
formatter.after({
  "duration": 57981900,
  "status": "passed"
});
formatter.after({
  "duration": 115521200,
  "status": "passed"
});
formatter.before({
  "duration": 4228628100,
  "status": "passed"
});
formatter.before({
  "duration": 4907660500,
  "status": "passed"
});
formatter.before({
  "duration": 4314379900,
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
  "duration": 2326774200,
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
  "duration": 14079245000,
  "status": "passed"
});
formatter.match({
  "location": "DetailsPageTests.iShouldBeRedirectedToTheDetailsPageOfTheUser()"
});
formatter.result({
  "duration": 975459800,
  "status": "passed"
});
formatter.after({
  "duration": 33363900,
  "status": "passed"
});
formatter.after({
  "duration": 67363900,
  "status": "passed"
});
formatter.after({
  "duration": 95454300,
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
  "duration": 3516493300,
  "status": "passed"
});
formatter.before({
  "duration": 3367290200,
  "status": "passed"
});
formatter.before({
  "duration": 3557940100,
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
  "duration": 3547300300,
  "status": "passed"
});
formatter.match({
  "location": "DetailsPageTests.iShouldBePresentedWithAnAlarmBox()"
});
formatter.result({
  "duration": 10806866700,
  "status": "passed"
});
formatter.match({
  "location": "DetailsPageTests.clickingTheAlarmBoxShouldRedirectMeToHomePage()"
});
formatter.result({
  "duration": 644450200,
  "status": "passed"
});
formatter.after({
  "duration": 30211600,
  "status": "passed"
});
formatter.after({
  "duration": 47198600,
  "status": "passed"
});
formatter.after({
  "duration": 124386400,
  "status": "passed"
});
formatter.before({
  "duration": 3896111900,
  "status": "passed"
});
formatter.before({
  "duration": 3155722900,
  "status": "passed"
});
formatter.before({
  "duration": 3608480500,
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
  "duration": 1598648700,
  "status": "passed"
});
formatter.match({
  "location": "DetailsPageTests.iShouldBePresentedWithAnAlarmBox()"
});
formatter.result({
  "duration": 11054216900,
  "status": "passed"
});
formatter.match({
  "location": "DetailsPageTests.clickingTheAlarmBoxShouldRedirectMeToHomePage()"
});
formatter.result({
  "duration": 511622400,
  "status": "passed"
});
formatter.after({
  "duration": 32520600,
  "status": "passed"
});
formatter.after({
  "duration": 54474500,
  "status": "passed"
});
formatter.after({
  "duration": 92373800,
  "status": "passed"
});
formatter.before({
  "duration": 3543898900,
  "status": "passed"
});
formatter.before({
  "duration": 3243107300,
  "status": "passed"
});
formatter.before({
  "duration": 3583167100,
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
  "duration": 1490859700,
  "status": "passed"
});
formatter.match({
  "location": "DetailsPageTests.iShouldBePresentedWithAnAlarmBox()"
});
formatter.result({
  "duration": 10833737300,
  "status": "passed"
});
formatter.match({
  "location": "DetailsPageTests.clickingTheAlarmBoxShouldRedirectMeToHomePage()"
});
formatter.result({
  "duration": 546713200,
  "status": "passed"
});
formatter.after({
  "duration": 38650600,
  "status": "passed"
});
formatter.after({
  "duration": 57437700,
  "status": "passed"
});
formatter.after({
  "duration": 110724800,
  "status": "passed"
});
formatter.before({
  "duration": 3581448400,
  "status": "passed"
});
formatter.before({
  "duration": 3512008600,
  "status": "passed"
});
formatter.before({
  "duration": 3993815500,
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
  "duration": 2446369100,
  "status": "passed"
});
formatter.match({
  "location": "DetailsPageTests.iShouldBePresentedWithAnAlarmBox()"
});
formatter.result({
  "duration": 11003572200,
  "status": "passed"
});
formatter.match({
  "location": "DetailsPageTests.clickingTheAlarmBoxShouldRedirectMeToHomePage()"
});
formatter.result({
  "duration": 507307900,
  "status": "passed"
});
formatter.after({
  "duration": 33524100,
  "status": "passed"
});
formatter.after({
  "duration": 56282400,
  "status": "passed"
});
formatter.after({
  "duration": 118659400,
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
  "duration": 3734572900,
  "status": "passed"
});
formatter.before({
  "duration": 4741944900,
  "status": "passed"
});
formatter.before({
  "duration": 3494723800,
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
  "duration": 1954241700,
  "status": "passed"
});
formatter.match({
  "location": "DetailsPageTests.iPressTheBackButton()"
});
formatter.result({
  "duration": 164734800,
  "status": "passed"
});
formatter.match({
  "location": "DetailsPageTests.iReturnToTheLandingPage()"
});
formatter.result({
  "duration": 9426000,
  "status": "passed"
});
formatter.after({
  "duration": 30470500,
  "status": "passed"
});
formatter.after({
  "duration": 48426200,
  "status": "passed"
});
formatter.after({
  "duration": 127713600,
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
  "duration": 3151598900,
  "status": "passed"
});
formatter.before({
  "duration": 3173766100,
  "status": "passed"
});
formatter.before({
  "duration": 3219580800,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 7,
      "value": "#Verify if is on correct site"
    }
  ],
  "line": 8,
  "name": "Duplicate page\u0027s title and text contains \"Duplicates\"",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-page;duplicate-page\u0027s-title-and-text-contains-\"duplicates\"",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I click on the Duplicates",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "the title of the page should be \"Duplicates\"",
  "keyword": "Then "
});
formatter.match({
  "location": "IndexPageTests.iAccessTheLandingPageOfCOS()"
});
formatter.result({
  "duration": 896752500,
  "status": "passed"
});
formatter.match({
  "location": "IndexPageTests.iClickOnTheDuplicates()"
});
formatter.result({
  "duration": 900016200,
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
  "duration": 6216500,
  "status": "passed"
});
formatter.after({
  "duration": 31152000,
  "status": "passed"
});
formatter.after({
  "duration": 60722300,
  "status": "passed"
});
formatter.after({
  "duration": 72800000,
  "status": "passed"
});
formatter.before({
  "duration": 3212790200,
  "status": "passed"
});
formatter.before({
  "duration": 3192469500,
  "status": "passed"
});
formatter.before({
  "duration": 3211792000,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Duplicate page\u0027s contain the appropriate number of identified duplicates",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-page;duplicate-page\u0027s-contain-the-appropriate-number-of-identified-duplicates",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "I access the landing page of COS and want to go to duplicates",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I should be able to see the number of duplicate contacts possible",
  "keyword": "Then "
});
formatter.match({
  "location": "DuplicatePageTests.iAccessTheLandingPageOfCOSAndWantToGoToDuplicates()"
});
formatter.result({
  "duration": 1920635800,
  "status": "passed"
});
formatter.match({
  "location": "DuplicatePageTests.iShouldBeAbleToSeeTheNumberOfDuplicateContactsPossible()"
});
formatter.result({
  "duration": 1039954900,
  "status": "passed"
});
formatter.after({
  "duration": 33390400,
  "status": "passed"
});
formatter.after({
  "duration": 61154800,
  "status": "passed"
});
formatter.after({
  "duration": 86136300,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "Duplicate page\u0027s is coherent in its data",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-page;duplicate-page\u0027s-is-coherent-in-its-data",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "I access the landing page of COS and want to go to duplicates",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I should be able to see the contact as is in the database (\"\u003cposition\u003e\")",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-page;duplicate-page\u0027s-is-coherent-in-its-data;",
  "rows": [
    {
      "cells": [
        "position"
      ],
      "line": 21,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-page;duplicate-page\u0027s-is-coherent-in-its-data;;1"
    },
    {
      "cells": [
        "first"
      ],
      "line": 22,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-page;duplicate-page\u0027s-is-coherent-in-its-data;;2"
    },
    {
      "cells": [
        "half-middle1"
      ],
      "line": 23,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-page;duplicate-page\u0027s-is-coherent-in-its-data;;3"
    },
    {
      "cells": [
        "middle"
      ],
      "line": 24,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-page;duplicate-page\u0027s-is-coherent-in-its-data;;4"
    },
    {
      "cells": [
        "half-middle2"
      ],
      "line": 25,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-page;duplicate-page\u0027s-is-coherent-in-its-data;;5"
    },
    {
      "cells": [
        "last"
      ],
      "line": 26,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-page;duplicate-page\u0027s-is-coherent-in-its-data;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3369440000,
  "status": "passed"
});
formatter.before({
  "duration": 3174696700,
  "status": "passed"
});
formatter.before({
  "duration": 3255308500,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Duplicate page\u0027s is coherent in its data",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-page;duplicate-page\u0027s-is-coherent-in-its-data;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "I access the landing page of COS and want to go to duplicates",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
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
  "duration": 2239859400,
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
  "duration": 1429007700,
  "status": "passed"
});
formatter.after({
  "duration": 34310800,
  "status": "passed"
});
formatter.after({
  "duration": 54054900,
  "status": "passed"
});
formatter.after({
  "duration": 136911400,
  "status": "passed"
});
formatter.before({
  "duration": 3611857600,
  "status": "passed"
});
formatter.before({
  "duration": 3242392700,
  "status": "passed"
});
formatter.before({
  "duration": 3623225600,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Duplicate page\u0027s is coherent in its data",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-page;duplicate-page\u0027s-is-coherent-in-its-data;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "I access the landing page of COS and want to go to duplicates",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
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
  "duration": 2689062100,
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
  "duration": 1413325600,
  "status": "passed"
});
formatter.after({
  "duration": 32128600,
  "status": "passed"
});
formatter.after({
  "duration": 55135600,
  "status": "passed"
});
formatter.after({
  "duration": 89767900,
  "status": "passed"
});
formatter.before({
  "duration": 3667522000,
  "status": "passed"
});
formatter.before({
  "duration": 3678875300,
  "status": "passed"
});
formatter.before({
  "duration": 3609886400,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Duplicate page\u0027s is coherent in its data",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-page;duplicate-page\u0027s-is-coherent-in-its-data;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "I access the landing page of COS and want to go to duplicates",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
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
  "duration": 3177187600,
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
  "duration": 1437804100,
  "status": "passed"
});
formatter.after({
  "duration": 34819100,
  "status": "passed"
});
formatter.after({
  "duration": 60201100,
  "status": "passed"
});
formatter.after({
  "duration": 75204800,
  "status": "passed"
});
formatter.before({
  "duration": 3628358400,
  "status": "passed"
});
formatter.before({
  "duration": 3877905600,
  "status": "passed"
});
formatter.before({
  "duration": 3664302400,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Duplicate page\u0027s is coherent in its data",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-page;duplicate-page\u0027s-is-coherent-in-its-data;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "I access the landing page of COS and want to go to duplicates",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
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
  "duration": 2744489100,
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
  "duration": 1566898200,
  "status": "passed"
});
formatter.after({
  "duration": 45892200,
  "status": "passed"
});
formatter.after({
  "duration": 58079700,
  "status": "passed"
});
formatter.after({
  "duration": 125891900,
  "status": "passed"
});
formatter.before({
  "duration": 3776517700,
  "status": "passed"
});
formatter.before({
  "duration": 3691711900,
  "status": "passed"
});
formatter.before({
  "duration": 3600577600,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Duplicate page\u0027s is coherent in its data",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-page;duplicate-page\u0027s-is-coherent-in-its-data;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "I access the landing page of COS and want to go to duplicates",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
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
  "duration": 3117108900,
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
  "duration": 1431165100,
  "status": "passed"
});
formatter.after({
  "duration": 33292100,
  "status": "passed"
});
formatter.after({
  "duration": 61259700,
  "status": "passed"
});
formatter.after({
  "duration": 135910700,
  "status": "passed"
});
formatter.before({
  "duration": 4492849500,
  "status": "passed"
});
formatter.before({
  "duration": 3394211400,
  "status": "passed"
});
formatter.before({
  "duration": 3732143100,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Duplicate page\u0027s Go back to index button",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-page;duplicate-page\u0027s-go-back-to-index-button",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 29,
  "name": "I access the landing page of COS and want to go to duplicates",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "I click on the Back to index button",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "I should be on the index page",
  "keyword": "Then "
});
formatter.match({
  "location": "DuplicatePageTests.iAccessTheLandingPageOfCOSAndWantToGoToDuplicates()"
});
formatter.result({
  "duration": 2886906000,
  "status": "passed"
});
formatter.match({
  "location": "DuplicatePageTests.iClickOnTheBackToIndexButton()"
});
formatter.result({
  "duration": 135566600,
  "status": "passed"
});
formatter.match({
  "location": "DuplicatePageTests.iShouldBeOnTheIndexPage()"
});
formatter.result({
  "duration": 5450000,
  "status": "passed"
});
formatter.after({
  "duration": 32069900,
  "status": "passed"
});
formatter.after({
  "duration": 59058800,
  "status": "passed"
});
formatter.after({
  "duration": 98931700,
  "status": "passed"
});
formatter.before({
  "duration": 3668612800,
  "status": "passed"
});
formatter.before({
  "duration": 3700616200,
  "status": "passed"
});
formatter.before({
  "duration": 4032932200,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Duplicate page\u0027s Confirm button Automatic",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-page;duplicate-page\u0027s-confirm-button-automatic",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 34,
  "name": "I access the landing page of COS and want to go to duplicates",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "I click on the Accept Automatically button",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "I click on the Confirm button",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I should be redirected to the duplicate Free page (Auto)",
  "keyword": "Then "
});
formatter.match({
  "location": "DuplicatePageTests.iAccessTheLandingPageOfCOSAndWantToGoToDuplicates()"
});
formatter.result({
  "duration": 2564061900,
  "status": "passed"
});
formatter.match({
  "location": "DuplicatePageTests.iClickOnTheAcceptAutomaticallyButton()"
});
formatter.result({
  "duration": 584535800,
  "status": "passed"
});
formatter.match({
  "location": "DuplicatePageTests.iClickOnTheConfirmButton()"
});
formatter.result({
  "duration": 221108900,
  "status": "passed"
});
formatter.match({
  "location": "DuplicatePageTests.iShouldBeRedirectedToTheDuplicateFreePageAuto()"
});
formatter.result({
  "duration": 7437600,
  "status": "passed"
});
formatter.after({
  "duration": 36877100,
  "status": "passed"
});
formatter.after({
  "duration": 54064600,
  "status": "passed"
});
formatter.after({
  "duration": 92173400,
  "status": "passed"
});
formatter.before({
  "duration": 3773854000,
  "status": "passed"
});
formatter.before({
  "duration": 3710673600,
  "status": "passed"
});
formatter.before({
  "duration": 3777484400,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Duplicate page\u0027s Confirm button Manual -- Correct",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-page;duplicate-page\u0027s-confirm-button-manual----correct",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 40,
  "name": "I access the landing page of COS and want to go to duplicates",
  "keyword": "Given "
});
formatter.step({
  "line": 41,
  "name": "I click on each position, randomly",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "I click on the Accept Manually button",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I click on the Confirm button",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I should be redirected to the duplicate Free page (Manual)",
  "keyword": "Then "
});
formatter.match({
  "location": "DuplicatePageTests.iAccessTheLandingPageOfCOSAndWantToGoToDuplicates()"
});
formatter.result({
  "duration": 2769478500,
  "status": "passed"
});
formatter.match({
  "location": "DuplicatePageTests.iClickOnEachPositionRandomly()"
});
formatter.result({
  "duration": 5451166300,
  "status": "passed"
});
formatter.match({
  "location": "DuplicatePageTests.iClickOnTheAcceptManuallyButton()"
});
formatter.result({
  "duration": 99792600,
  "status": "passed"
});
formatter.match({
  "location": "DuplicatePageTests.iClickOnTheConfirmButton()"
});
formatter.result({
  "duration": 239089600,
  "status": "passed"
});
formatter.match({
  "location": "DuplicatePageTests.iShouldBeRedirectedToTheDuplicateFreePageManual()"
});
formatter.result({
  "duration": 8041700,
  "status": "passed"
});
formatter.after({
  "duration": 72383300,
  "status": "passed"
});
formatter.after({
  "duration": 51571500,
  "status": "passed"
});
formatter.after({
  "duration": 81434800,
  "status": "passed"
});
formatter.before({
  "duration": 4278976200,
  "status": "passed"
});
formatter.before({
  "duration": 3290222900,
  "status": "passed"
});
formatter.before({
  "duration": 3333385500,
  "status": "passed"
});
formatter.scenario({
  "line": 46,
  "name": "Duplicate page\u0027s Confirm button Manual -- Wrong",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-page;duplicate-page\u0027s-confirm-button-manual----wrong",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 47,
  "name": "I access the landing page of COS and want to go to duplicates",
  "keyword": "Given "
});
formatter.step({
  "line": 48,
  "name": "I click on the Accept Manually button",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I click on the Confirm button",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "An Alarm should appear stating that I need to fill everything",
  "keyword": "Then "
});
formatter.match({
  "location": "DuplicatePageTests.iAccessTheLandingPageOfCOSAndWantToGoToDuplicates()"
});
formatter.result({
  "duration": 1949404200,
  "status": "passed"
});
formatter.match({
  "location": "DuplicatePageTests.iClickOnTheAcceptManuallyButton()"
});
formatter.result({
  "duration": 576900400,
  "status": "passed"
});
formatter.match({
  "location": "DuplicatePageTests.iClickOnTheConfirmButton()"
});
formatter.result({
  "duration": 92691500,
  "status": "passed"
});
formatter.match({
  "location": "DuplicatePageTests.anAlarmShouldAppearStatingThatINeedToFillEverything()"
});
formatter.result({
  "duration": 4387100,
  "status": "passed"
});
formatter.after({
  "duration": 35159800,
  "status": "passed"
});
formatter.after({
  "duration": 58055500,
  "status": "passed"
});
formatter.after({
  "duration": 88837400,
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
  "duration": 3630416000,
  "status": "passed"
});
formatter.before({
  "duration": 3252020800,
  "status": "passed"
});
formatter.before({
  "duration": 3580374600,
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
  "location": "IndexPageTests.iAccessTheLandingPageOfCOS()"
});
formatter.result({
  "duration": 1278167900,
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
  "duration": 3641100,
  "status": "passed"
});
formatter.after({
  "duration": 28640300,
  "status": "passed"
});
formatter.after({
  "duration": 70890200,
  "status": "passed"
});
formatter.after({
  "duration": 71923400,
  "status": "passed"
});
formatter.before({
  "duration": 3725996100,
  "status": "passed"
});
formatter.before({
  "duration": 3352288000,
  "status": "passed"
});
formatter.before({
  "duration": 3662086600,
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
  "location": "IndexPageTests.iAccessTheLandingPageOfCOS()"
});
formatter.result({
  "duration": 1581600100,
  "status": "passed"
});
formatter.match({
  "location": "IndexPageTests.iShouldSeeExactlyTheSameAmountOfContactsThatExistInTheDatabase()"
});
formatter.result({
  "duration": 709594100,
  "status": "passed"
});
formatter.after({
  "duration": 27656400,
  "status": "passed"
});
formatter.after({
  "duration": 64045300,
  "status": "passed"
});
formatter.after({
  "duration": 88521100,
  "status": "passed"
});
formatter.scenarioOutline({
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
  "name": "I should see the contact as in the database position, \"\u003cposition\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-seems-to-have-data-that-is-coherent-with-the-database;",
  "rows": [
    {
      "cells": [
        "position"
      ],
      "line": 22,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-seems-to-have-data-that-is-coherent-with-the-database;;1"
    },
    {
      "cells": [
        "first"
      ],
      "line": 23,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-seems-to-have-data-that-is-coherent-with-the-database;;2"
    },
    {
      "cells": [
        "half-middle1"
      ],
      "line": 24,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-seems-to-have-data-that-is-coherent-with-the-database;;3"
    },
    {
      "cells": [
        "middle"
      ],
      "line": 25,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-seems-to-have-data-that-is-coherent-with-the-database;;4"
    },
    {
      "cells": [
        "half-middle2"
      ],
      "line": 26,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-seems-to-have-data-that-is-coherent-with-the-database;;5"
    },
    {
      "cells": [
        "last"
      ],
      "line": 27,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-seems-to-have-data-that-is-coherent-with-the-database;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3630608000,
  "status": "passed"
});
formatter.before({
  "duration": 3665313500,
  "status": "passed"
});
formatter.before({
  "duration": 3725476700,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Landing page seems to have data that is coherent with the database",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-seems-to-have-data-that-is-coherent-with-the-database;;2",
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
  "duration": 1708239700,
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
  "duration": 833259400,
  "status": "passed"
});
formatter.after({
  "duration": 28916500,
  "status": "passed"
});
formatter.after({
  "duration": 66956500,
  "status": "passed"
});
formatter.after({
  "duration": 78295000,
  "status": "passed"
});
formatter.before({
  "duration": 3674841700,
  "status": "passed"
});
formatter.before({
  "duration": 3665623400,
  "status": "passed"
});
formatter.before({
  "duration": 3821596000,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Landing page seems to have data that is coherent with the database",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-seems-to-have-data-that-is-coherent-with-the-database;;3",
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
  "duration": 1968045800,
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
  "duration": 1606188600,
  "status": "passed"
});
formatter.after({
  "duration": 31319900,
  "status": "passed"
});
formatter.after({
  "duration": 63445400,
  "status": "passed"
});
formatter.after({
  "duration": 83587000,
  "status": "passed"
});
formatter.before({
  "duration": 3667104300,
  "status": "passed"
});
formatter.before({
  "duration": 3593098400,
  "status": "passed"
});
formatter.before({
  "duration": 3787538800,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Landing page seems to have data that is coherent with the database",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-seems-to-have-data-that-is-coherent-with-the-database;;4",
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
  "duration": 1906595000,
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
  "duration": 2361470400,
  "status": "passed"
});
formatter.after({
  "duration": 30596500,
  "status": "passed"
});
formatter.after({
  "duration": 68261200,
  "status": "passed"
});
formatter.after({
  "duration": 149644700,
  "status": "passed"
});
formatter.before({
  "duration": 3703830400,
  "status": "passed"
});
formatter.before({
  "duration": 3698181600,
  "status": "passed"
});
formatter.before({
  "duration": 3762632400,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Landing page seems to have data that is coherent with the database",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-seems-to-have-data-that-is-coherent-with-the-database;;5",
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
  "duration": 2539376200,
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
  "duration": 3377424500,
  "status": "passed"
});
formatter.after({
  "duration": 30760700,
  "status": "passed"
});
formatter.after({
  "duration": 74414100,
  "status": "passed"
});
formatter.after({
  "duration": 128947000,
  "status": "passed"
});
formatter.before({
  "duration": 3796415500,
  "status": "passed"
});
formatter.before({
  "duration": 3673723100,
  "status": "passed"
});
formatter.before({
  "duration": 3697156100,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Landing page seems to have data that is coherent with the database",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-seems-to-have-data-that-is-coherent-with-the-database;;6",
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
  "duration": 2060032800,
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
  "duration": 14265208300,
  "status": "passed"
});
formatter.after({
  "duration": 28204800,
  "status": "passed"
});
formatter.after({
  "duration": 66567000,
  "status": "passed"
});
formatter.after({
  "duration": 77953300,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 30,
      "value": "#Verify if table can be sortable"
    }
  ],
  "line": 31,
  "name": "Landing page contains the table and columns are sortable",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-columns-are-sortable",
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
  "name": "I sort the column \"\u003ccolumn\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "The first column should contain the most relevant contact regarded to the sorted \"\u003ccolumn\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 36,
  "name": "",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-columns-are-sortable;",
  "rows": [
    {
      "cells": [
        "column"
      ],
      "line": 37,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-columns-are-sortable;;1"
    },
    {
      "cells": [
        "ID"
      ],
      "line": 38,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-columns-are-sortable;;2"
    },
    {
      "cells": [
        "GivenName"
      ],
      "line": 39,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-columns-are-sortable;;3"
    },
    {
      "cells": [
        "Surname"
      ],
      "line": 40,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-columns-are-sortable;;4"
    },
    {
      "cells": [
        "Phone"
      ],
      "line": 41,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-columns-are-sortable;;5"
    },
    {
      "cells": [
        "Source"
      ],
      "line": 42,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-columns-are-sortable;;6"
    },
    {
      "cells": [
        "City"
      ],
      "line": 43,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-columns-are-sortable;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3860924500,
  "status": "passed"
});
formatter.before({
  "duration": 3479641800,
  "status": "passed"
});
formatter.before({
  "duration": 3636493700,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Landing page contains the table and columns are sortable",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-columns-are-sortable;;2",
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
  "name": "I sort the column \"ID\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 34,
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
  "duration": 2323248500,
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
  "duration": 813098100,
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
  "duration": 143173900,
  "status": "passed"
});
formatter.after({
  "duration": 29339700,
  "status": "passed"
});
formatter.after({
  "duration": 86208600,
  "status": "passed"
});
formatter.after({
  "duration": 88865300,
  "status": "passed"
});
formatter.before({
  "duration": 3790742600,
  "status": "passed"
});
formatter.before({
  "duration": 3772319200,
  "status": "passed"
});
formatter.before({
  "duration": 3775825800,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Landing page contains the table and columns are sortable",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-columns-are-sortable;;3",
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
  "name": "I sort the column \"GivenName\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 34,
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
  "duration": 2603954700,
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
  "duration": 687195500,
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
  "duration": 150025800,
  "status": "passed"
});
formatter.after({
  "duration": 27087400,
  "status": "passed"
});
formatter.after({
  "duration": 66293800,
  "status": "passed"
});
formatter.after({
  "duration": 175310700,
  "status": "passed"
});
formatter.before({
  "duration": 3964566900,
  "status": "passed"
});
formatter.before({
  "duration": 5347905300,
  "status": "passed"
});
formatter.before({
  "duration": 3369186300,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "Landing page contains the table and columns are sortable",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-columns-are-sortable;;4",
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
  "name": "I sort the column \"Surname\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 34,
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
  "duration": 999169100,
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
  "duration": 716440400,
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
  "duration": 151259200,
  "status": "passed"
});
formatter.after({
  "duration": 27807000,
  "status": "passed"
});
formatter.after({
  "duration": 63698700,
  "status": "passed"
});
formatter.after({
  "duration": 82009600,
  "status": "passed"
});
formatter.before({
  "duration": 3392056200,
  "status": "passed"
});
formatter.before({
  "duration": 3390308300,
  "status": "passed"
});
formatter.before({
  "duration": 3373151700,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Landing page contains the table and columns are sortable",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-columns-are-sortable;;5",
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
  "name": "I sort the column \"Phone\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 34,
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
  "duration": 926685500,
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
  "duration": 758057200,
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
  "duration": 152068100,
  "status": "passed"
});
formatter.after({
  "duration": 28113800,
  "status": "passed"
});
formatter.after({
  "duration": 71027500,
  "status": "passed"
});
formatter.after({
  "duration": 70684500,
  "status": "passed"
});
formatter.before({
  "duration": 3230540700,
  "status": "passed"
});
formatter.before({
  "duration": 3309888400,
  "status": "passed"
});
formatter.before({
  "duration": 3274178100,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "Landing page contains the table and columns are sortable",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-columns-are-sortable;;6",
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
  "name": "I sort the column \"Source\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 34,
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
  "duration": 987813600,
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
  "duration": 770341000,
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
  "duration": 152417000,
  "status": "passed"
});
formatter.after({
  "duration": 28910100,
  "status": "passed"
});
formatter.after({
  "duration": 62593200,
  "status": "passed"
});
formatter.after({
  "duration": 81140300,
  "status": "passed"
});
formatter.before({
  "duration": 3342490000,
  "status": "passed"
});
formatter.before({
  "duration": 3412547800,
  "status": "passed"
});
formatter.before({
  "duration": 3322238200,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "Landing page contains the table and columns are sortable",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-columns-are-sortable;;7",
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
  "name": "I sort the column \"City\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 34,
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
  "duration": 907024600,
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
  "duration": 831141800,
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
  "duration": 144342100,
  "status": "passed"
});
formatter.after({
  "duration": 29676800,
  "status": "passed"
});
formatter.after({
  "duration": 65594800,
  "status": "passed"
});
formatter.after({
  "duration": 89597100,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 45,
      "value": "#Verify if search bar can be used to filter"
    }
  ],
  "line": 46,
  "name": "Landing page contains the table and the search bar is operational",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-search-bar-is-operational",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 47,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 48,
  "name": "I search for \"\u003csearch\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "I should only see columns that are related to what I\u0027ve just searched (\"\u003csearch\u003e\")",
  "keyword": "Then "
});
formatter.examples({
  "line": 51,
  "name": "",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-search-bar-is-operational;",
  "rows": [
    {
      "cells": [
        "search"
      ],
      "line": 52,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-search-bar-is-operational;;1"
    },
    {
      "cells": [
        "Viseu"
      ],
      "line": 53,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-search-bar-is-operational;;2"
    },
    {
      "cells": [
        "Joao"
      ],
      "line": 54,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-search-bar-is-operational;;3"
    },
    {
      "cells": [
        "234216838"
      ],
      "line": 55,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-search-bar-is-operational;;4"
    },
    {
      "cells": [
        "Almeida"
      ],
      "line": 56,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-search-bar-is-operational;;5"
    },
    {
      "cells": [
        "Something"
      ],
      "line": 57,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-search-bar-is-operational;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3395493100,
  "status": "passed"
});
formatter.before({
  "duration": 3360867000,
  "status": "passed"
});
formatter.before({
  "duration": 3312466200,
  "status": "passed"
});
formatter.scenario({
  "line": 53,
  "name": "Landing page contains the table and the search bar is operational",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-search-bar-is-operational;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 47,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 48,
  "name": "I search for \"Viseu\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 49,
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
  "duration": 2512029100,
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
  "duration": 11987878500,
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
  "duration": 241542700,
  "status": "passed"
});
formatter.after({
  "duration": 39141800,
  "status": "passed"
});
formatter.after({
  "duration": 188869000,
  "status": "passed"
});
formatter.after({
  "duration": 79112100,
  "status": "passed"
});
formatter.before({
  "duration": 3854356300,
  "status": "passed"
});
formatter.before({
  "duration": 3630098700,
  "status": "passed"
});
formatter.before({
  "duration": 3832110300,
  "status": "passed"
});
formatter.scenario({
  "line": 54,
  "name": "Landing page contains the table and the search bar is operational",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-search-bar-is-operational;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 47,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 48,
  "name": "I search for \"Joao\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 49,
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
  "duration": 2032598900,
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
  "duration": 794207400,
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
  "duration": 463434900,
  "status": "passed"
});
formatter.after({
  "duration": 28539400,
  "status": "passed"
});
formatter.after({
  "duration": 66571600,
  "status": "passed"
});
formatter.after({
  "duration": 92791300,
  "status": "passed"
});
formatter.before({
  "duration": 3785743800,
  "status": "passed"
});
formatter.before({
  "duration": 3791844700,
  "status": "passed"
});
formatter.before({
  "duration": 4071664700,
  "status": "passed"
});
formatter.scenario({
  "line": 55,
  "name": "Landing page contains the table and the search bar is operational",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-search-bar-is-operational;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 47,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 48,
  "name": "I search for \"234216838\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 49,
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
  "duration": 3246860700,
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
  "duration": 11256711500,
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
  "duration": 231174900,
  "status": "passed"
});
formatter.after({
  "duration": 31433500,
  "status": "passed"
});
formatter.after({
  "duration": 100756700,
  "status": "passed"
});
formatter.after({
  "duration": 109033000,
  "status": "passed"
});
formatter.before({
  "duration": 3842672400,
  "status": "passed"
});
formatter.before({
  "duration": 3719558300,
  "status": "passed"
});
formatter.before({
  "duration": 3693363500,
  "status": "passed"
});
formatter.scenario({
  "line": 56,
  "name": "Landing page contains the table and the search bar is operational",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-search-bar-is-operational;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 47,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 48,
  "name": "I search for \"Almeida\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 49,
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
  "duration": 1564447900,
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
  "duration": 11060835100,
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
  "duration": 352363800,
  "status": "passed"
});
formatter.after({
  "duration": 28457600,
  "status": "passed"
});
formatter.after({
  "duration": 66587100,
  "status": "passed"
});
formatter.after({
  "duration": 281738700,
  "status": "passed"
});
formatter.before({
  "duration": 3854478600,
  "status": "passed"
});
formatter.before({
  "duration": 4290206500,
  "status": "passed"
});
formatter.before({
  "duration": 3793485200,
  "status": "passed"
});
formatter.scenario({
  "line": 57,
  "name": "Landing page contains the table and the search bar is operational",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-search-bar-is-operational;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 47,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 48,
  "name": "I search for \"Something\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 49,
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
  "duration": 1904394100,
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
  "duration": 11106152900,
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
  "duration": 12962700,
  "status": "passed"
});
formatter.after({
  "duration": 35532800,
  "status": "passed"
});
formatter.after({
  "duration": 100515000,
  "status": "passed"
});
formatter.after({
  "duration": 150928300,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 59,
      "value": "#Verify if search bar and table can be sortable simultaneously"
    }
  ],
  "line": 60,
  "name": "Landing page contains the table and the search bar is operational, along with columns sortable",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-search-bar-is-operational,-along-with-columns-sortable",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 61,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 62,
  "name": "I search for \"\u003csearch\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 63,
  "name": "I sort the column \"\u003ccolumn\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "I should be able to see the sorted table by \"\u003ccolumn\u003e\", while only appearing what I searched for, related to \"\u003csearch\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 66,
  "name": "",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-search-bar-is-operational,-along-with-columns-sortable;",
  "rows": [
    {
      "cells": [
        "search",
        "column"
      ],
      "line": 67,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-search-bar-is-operational,-along-with-columns-sortable;;1"
    },
    {
      "cells": [
        "Joao",
        "ID"
      ],
      "line": 68,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-search-bar-is-operational,-along-with-columns-sortable;;2"
    },
    {
      "cells": [
        "Joao",
        "GivenName"
      ],
      "line": 69,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-search-bar-is-operational,-along-with-columns-sortable;;3"
    },
    {
      "cells": [
        "Joao",
        "Surname"
      ],
      "line": 70,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-search-bar-is-operational,-along-with-columns-sortable;;4"
    },
    {
      "cells": [
        "Joao",
        "Phone"
      ],
      "line": 71,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-search-bar-is-operational,-along-with-columns-sortable;;5"
    },
    {
      "cells": [
        "Joao",
        "City"
      ],
      "line": 72,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-search-bar-is-operational,-along-with-columns-sortable;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3782877100,
  "status": "passed"
});
formatter.before({
  "duration": 4375720000,
  "status": "passed"
});
formatter.before({
  "duration": 6160332300,
  "status": "passed"
});
formatter.scenario({
  "line": 68,
  "name": "Landing page contains the table and the search bar is operational, along with columns sortable",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-search-bar-is-operational,-along-with-columns-sortable;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 61,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 62,
  "name": "I search for \"Joao\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 63,
  "name": "I sort the column \"ID\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 64,
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
  "duration": 4211173200,
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
  "duration": 11098547500,
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
  "duration": 160757600,
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
  "duration": 468517200,
  "status": "passed"
});
formatter.after({
  "duration": 141494000,
  "status": "passed"
});
formatter.after({
  "duration": 72790800,
  "status": "passed"
});
formatter.after({
  "duration": 155785100,
  "status": "passed"
});
formatter.before({
  "duration": 4850010000,
  "status": "passed"
});
formatter.before({
  "duration": 4136161200,
  "status": "passed"
});
formatter.before({
  "duration": 4121779300,
  "status": "passed"
});
formatter.scenario({
  "line": 69,
  "name": "Landing page contains the table and the search bar is operational, along with columns sortable",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-search-bar-is-operational,-along-with-columns-sortable;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 61,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 62,
  "name": "I search for \"Joao\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 63,
  "name": "I sort the column \"GivenName\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 64,
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
  "duration": 2592378300,
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
  "duration": 788938100,
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
  "duration": 107533300,
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
  "duration": 450662300,
  "status": "passed"
});
formatter.after({
  "duration": 27254600,
  "status": "passed"
});
formatter.after({
  "duration": 63819300,
  "status": "passed"
});
formatter.after({
  "duration": 104559800,
  "status": "passed"
});
formatter.before({
  "duration": 3845690200,
  "status": "passed"
});
formatter.before({
  "duration": 3808423900,
  "status": "passed"
});
formatter.before({
  "duration": 3900470900,
  "status": "passed"
});
formatter.scenario({
  "line": 70,
  "name": "Landing page contains the table and the search bar is operational, along with columns sortable",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-search-bar-is-operational,-along-with-columns-sortable;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 61,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 62,
  "name": "I search for \"Joao\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 63,
  "name": "I sort the column \"Surname\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 64,
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
  "duration": 2948382300,
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
  "duration": 11074127400,
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
  "duration": 128101400,
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
  "duration": 441499800,
  "status": "passed"
});
formatter.after({
  "duration": 27549400,
  "status": "passed"
});
formatter.after({
  "duration": 107452100,
  "status": "passed"
});
formatter.after({
  "duration": 88809600,
  "status": "passed"
});
formatter.before({
  "duration": 3827834300,
  "status": "passed"
});
formatter.before({
  "duration": 3632208300,
  "status": "passed"
});
formatter.before({
  "duration": 3887975800,
  "status": "passed"
});
formatter.scenario({
  "line": 71,
  "name": "Landing page contains the table and the search bar is operational, along with columns sortable",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-search-bar-is-operational,-along-with-columns-sortable;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 61,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 62,
  "name": "I search for \"Joao\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 63,
  "name": "I sort the column \"Phone\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 64,
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
  "duration": 3432343600,
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
  "duration": 861446300,
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
  "duration": 144043900,
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
  "duration": 453307200,
  "status": "passed"
});
formatter.after({
  "duration": 26729800,
  "status": "passed"
});
formatter.after({
  "duration": 92989100,
  "status": "passed"
});
formatter.after({
  "duration": 94540600,
  "status": "passed"
});
formatter.before({
  "duration": 3904488900,
  "status": "passed"
});
formatter.before({
  "duration": 3923144500,
  "status": "passed"
});
formatter.before({
  "duration": 3898547600,
  "status": "passed"
});
formatter.scenario({
  "line": 72,
  "name": "Landing page contains the table and the search bar is operational, along with columns sortable",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-search-bar-is-operational,-along-with-columns-sortable;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 61,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 62,
  "name": "I search for \"Joao\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 63,
  "name": "I sort the column \"City\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 64,
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
  "duration": 2132516000,
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
  "duration": 874822300,
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
  "duration": 166430000,
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
  "duration": 467017100,
  "status": "passed"
});
formatter.after({
  "duration": 29232000,
  "status": "passed"
});
formatter.after({
  "duration": 63139000,
  "status": "passed"
});
formatter.after({
  "duration": 125419700,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 74,
      "value": "#Verify if pagination works"
    }
  ],
  "line": 75,
  "name": "Landing page contains the table and the pagination can be used",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-pagination-can-be-used",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 76,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 77,
  "name": "I increase the pagination to \"\u003cpagination\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 78,
  "name": "I should be able to see the number of contacts related to \"\u003cpagination\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 80,
  "name": "",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-pagination-can-be-used;",
  "rows": [
    {
      "cells": [
        "pagination"
      ],
      "line": 81,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-pagination-can-be-used;;1"
    },
    {
      "cells": [
        "10"
      ],
      "line": 82,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-pagination-can-be-used;;2"
    },
    {
      "cells": [
        "25"
      ],
      "line": 83,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-pagination-can-be-used;;3"
    },
    {
      "cells": [
        "50"
      ],
      "line": 84,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-pagination-can-be-used;;4"
    },
    {
      "cells": [
        "100"
      ],
      "line": 85,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-pagination-can-be-used;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3861320900,
  "status": "passed"
});
formatter.before({
  "duration": 3942854000,
  "status": "passed"
});
formatter.before({
  "duration": 3959114100,
  "status": "passed"
});
formatter.scenario({
  "line": 82,
  "name": "Landing page contains the table and the pagination can be used",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-pagination-can-be-used;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 76,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 77,
  "name": "I increase the pagination to \"10\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 78,
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
  "duration": 2843831700,
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
  "duration": 822567900,
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
  "duration": 45074900,
  "status": "passed"
});
formatter.after({
  "duration": 27145100,
  "status": "passed"
});
formatter.after({
  "duration": 61928600,
  "status": "passed"
});
formatter.after({
  "duration": 143595400,
  "status": "passed"
});
formatter.before({
  "duration": 3851865100,
  "status": "passed"
});
formatter.before({
  "duration": 3717957400,
  "status": "passed"
});
formatter.before({
  "duration": 4149918900,
  "status": "passed"
});
formatter.scenario({
  "line": 83,
  "name": "Landing page contains the table and the pagination can be used",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-pagination-can-be-used;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 76,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 77,
  "name": "I increase the pagination to \"25\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 78,
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
  "duration": 2185423900,
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
  "duration": 924877900,
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
  "duration": 39104600,
  "status": "passed"
});
formatter.after({
  "duration": 27428700,
  "status": "passed"
});
formatter.after({
  "duration": 98934100,
  "status": "passed"
});
formatter.after({
  "duration": 98858200,
  "status": "passed"
});
formatter.before({
  "duration": 3861952700,
  "status": "passed"
});
formatter.before({
  "duration": 3775174800,
  "status": "passed"
});
formatter.before({
  "duration": 4199868900,
  "status": "passed"
});
formatter.scenario({
  "line": 84,
  "name": "Landing page contains the table and the pagination can be used",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-pagination-can-be-used;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 76,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 77,
  "name": "I increase the pagination to \"50\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 78,
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
  "duration": 1636025000,
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
  "duration": 857471400,
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
  "duration": 37259100,
  "status": "passed"
});
formatter.after({
  "duration": 28184200,
  "status": "passed"
});
formatter.after({
  "duration": 60515200,
  "status": "passed"
});
formatter.after({
  "duration": 101441400,
  "status": "passed"
});
formatter.before({
  "duration": 3860342900,
  "status": "passed"
});
formatter.before({
  "duration": 3609935700,
  "status": "passed"
});
formatter.before({
  "duration": 3957771200,
  "status": "passed"
});
formatter.scenario({
  "line": 85,
  "name": "Landing page contains the table and the pagination can be used",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-table-and-the-pagination-can-be-used;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 76,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 77,
  "name": "I increase the pagination to \"100\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 78,
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
  "duration": 2179470200,
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
  "duration": 888157000,
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
  "duration": 45285600,
  "status": "passed"
});
formatter.after({
  "duration": 30288100,
  "status": "passed"
});
formatter.after({
  "duration": 201609200,
  "status": "passed"
});
formatter.after({
  "duration": 101377300,
  "status": "passed"
});
formatter.before({
  "duration": 3812278900,
  "status": "passed"
});
formatter.before({
  "duration": 3743735000,
  "status": "passed"
});
formatter.before({
  "duration": 4240374200,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 87,
      "value": "#Verify if sources is filled"
    }
  ],
  "line": 88,
  "name": "Landing page contains the possible sources",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-possible-sources",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 89,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 90,
  "name": "I should be able to see the possible sources",
  "keyword": "Then "
});
formatter.match({
  "location": "IndexPageTests.iAccessTheLandingPageOfCOS()"
});
formatter.result({
  "duration": 3030016400,
  "status": "passed"
});
formatter.match({
  "location": "IndexPageTests.iShouldBeAbleToSeeThePossibleSources()"
});
formatter.result({
  "duration": 11326290400,
  "status": "passed"
});
formatter.after({
  "duration": 44039500,
  "status": "passed"
});
formatter.after({
  "duration": 142565000,
  "status": "passed"
});
formatter.after({
  "duration": 150260600,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 92,
      "value": "#Verify if sources are working"
    }
  ],
  "line": 93,
  "name": "Landing page contains the selector related to the source",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-selector-related-to-the-source",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 94,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 95,
  "name": "I want to filter for a \"\u003csource\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 96,
  "name": "I should only be able to see the contacts of that specific \"\u003csource\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 98,
  "name": "",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-selector-related-to-the-source;",
  "rows": [
    {
      "cells": [
        "source"
      ],
      "line": 99,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-selector-related-to-the-source;;1"
    },
    {
      "cells": [
        "All"
      ],
      "line": 100,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-selector-related-to-the-source;;2"
    },
    {
      "cells": [
        "Twitter"
      ],
      "line": 101,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-selector-related-to-the-source;;3"
    },
    {
      "cells": [
        "Facebook"
      ],
      "line": 102,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-selector-related-to-the-source;;4"
    },
    {
      "cells": [
        "LinkedIn"
      ],
      "line": 103,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-selector-related-to-the-source;;5"
    },
    {
      "cells": [
        "Skype"
      ],
      "line": 104,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-selector-related-to-the-source;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4197656000,
  "status": "passed"
});
formatter.before({
  "duration": 4561029100,
  "status": "passed"
});
formatter.before({
  "duration": 3903426000,
  "status": "passed"
});
formatter.scenario({
  "line": 100,
  "name": "Landing page contains the selector related to the source",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-selector-related-to-the-source;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 94,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 95,
  "name": "I want to filter for a \"All\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 96,
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
  "duration": 2005695300,
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
  "duration": 11094718000,
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
  "duration": 1148109300,
  "status": "passed"
});
formatter.after({
  "duration": 27775100,
  "status": "passed"
});
formatter.after({
  "duration": 63433000,
  "status": "passed"
});
formatter.after({
  "duration": 122066500,
  "status": "passed"
});
formatter.before({
  "duration": 4129962000,
  "status": "passed"
});
formatter.before({
  "duration": 3866353100,
  "status": "passed"
});
formatter.before({
  "duration": 3894681700,
  "status": "passed"
});
formatter.scenario({
  "line": 101,
  "name": "Landing page contains the selector related to the source",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-selector-related-to-the-source;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 94,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 95,
  "name": "I want to filter for a \"Twitter\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 96,
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
  "duration": 6242944500,
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
  "duration": 1117839800,
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
  "duration": 1157305600,
  "status": "passed"
});
formatter.after({
  "duration": 32465000,
  "status": "passed"
});
formatter.after({
  "duration": 112887700,
  "status": "passed"
});
formatter.after({
  "duration": 328644800,
  "status": "passed"
});
formatter.before({
  "duration": 3978295400,
  "status": "passed"
});
formatter.before({
  "duration": 3948170400,
  "status": "passed"
});
formatter.before({
  "duration": 5071228800,
  "status": "passed"
});
formatter.scenario({
  "line": 102,
  "name": "Landing page contains the selector related to the source",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-selector-related-to-the-source;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 94,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 95,
  "name": "I want to filter for a \"Facebook\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 96,
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
  "duration": 2573209500,
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
  "duration": 11158476800,
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
  "duration": 1112677100,
  "status": "passed"
});
formatter.after({
  "duration": 28166200,
  "status": "passed"
});
formatter.after({
  "duration": 65314800,
  "status": "passed"
});
formatter.after({
  "duration": 102043200,
  "status": "passed"
});
formatter.before({
  "duration": 3873080000,
  "status": "passed"
});
formatter.before({
  "duration": 3769281000,
  "status": "passed"
});
formatter.before({
  "duration": 4475385900,
  "status": "passed"
});
formatter.scenario({
  "line": 103,
  "name": "Landing page contains the selector related to the source",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-selector-related-to-the-source;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 94,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 95,
  "name": "I want to filter for a \"LinkedIn\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 96,
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
  "duration": 1932913900,
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
  "duration": 875571500,
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
  "duration": 1113631600,
  "status": "passed"
});
formatter.after({
  "duration": 26233300,
  "status": "passed"
});
formatter.after({
  "duration": 63489900,
  "status": "passed"
});
formatter.after({
  "duration": 150770400,
  "status": "passed"
});
formatter.before({
  "duration": 4135859800,
  "status": "passed"
});
formatter.before({
  "duration": 3935401800,
  "status": "passed"
});
formatter.before({
  "duration": 4331559700,
  "status": "passed"
});
formatter.scenario({
  "line": 104,
  "name": "Landing page contains the selector related to the source",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-selector-related-to-the-source;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 94,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 95,
  "name": "I want to filter for a \"Skype\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 96,
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
  "duration": 1998652100,
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
  "duration": 919746100,
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
  "duration": 1112454400,
  "status": "passed"
});
formatter.after({
  "duration": 27988100,
  "status": "passed"
});
formatter.after({
  "duration": 90666600,
  "status": "passed"
});
formatter.after({
  "duration": 210727700,
  "status": "passed"
});
formatter.before({
  "duration": 3958682000,
  "status": "passed"
});
formatter.before({
  "duration": 3920817400,
  "status": "passed"
});
formatter.before({
  "duration": 4489639200,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 106,
      "value": "#Verify if details button is working"
    },
    {
      "line": 109,
      "value": "#Verify if duplicates button is working"
    }
  ],
  "line": 110,
  "name": "Landing page contains the duplicate button and redirects to the correct page",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page-contains-the-duplicate-button-and-redirects-to-the-correct-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 111,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 112,
  "name": "I click on the Duplicates",
  "keyword": "When "
});
formatter.step({
  "line": 113,
  "name": "I should be redirected to the duplicate pages",
  "keyword": "Then "
});
formatter.match({
  "location": "IndexPageTests.iAccessTheLandingPageOfCOS()"
});
formatter.result({
  "duration": 3051885700,
  "status": "passed"
});
formatter.match({
  "location": "IndexPageTests.iClickOnTheDuplicates()"
});
formatter.result({
  "duration": 971748400,
  "status": "passed"
});
formatter.match({
  "location": "IndexPageTests.iShouldBeRedirectedToTheDuplicatePages()"
});
formatter.result({
  "duration": 4748700,
  "status": "passed"
});
formatter.after({
  "duration": 32139600,
  "status": "passed"
});
formatter.after({
  "duration": 65254100,
  "status": "passed"
});
formatter.after({
  "duration": 112099200,
  "status": "passed"
});
});