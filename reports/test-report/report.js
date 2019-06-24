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
      "line": 6,
      "value": "#  #Verify if details button is working"
    },
    {
      "line": 7,
      "value": "#  Scenario Outline: Contacts table contains the details button and redirects to the Details page"
    },
    {
      "line": 8,
      "value": "#    Given I access the landing page of COS"
    },
    {
      "line": 9,
      "value": "#    When I click on the Details button on row with id \"\u003cposition\u003e\""
    },
    {
      "line": 10,
      "value": "#    Then I should be redirected to the details page of the user"
    },
    {
      "line": 11,
      "value": "#"
    },
    {
      "line": 12,
      "value": "#    Examples:"
    },
    {
      "line": 13,
      "value": "#      | position      |"
    },
    {
      "line": 14,
      "value": "#      | first         |"
    },
    {
      "line": 15,
      "value": "#      | half-middle1  |"
    },
    {
      "line": 16,
      "value": "#      | middle        |"
    },
    {
      "line": 17,
      "value": "#      | half-middle2  |"
    },
    {
      "line": 18,
      "value": "#      | last          |"
    },
    {
      "line": 19,
      "value": "#"
    },
    {
      "line": 20,
      "value": "#  Scenario Outline: Badly formatted contact link on Details page"
    },
    {
      "line": 21,
      "value": "#    Given I enter the details page with the following case \"\u003ccase\u003e\""
    },
    {
      "line": 22,
      "value": "#    Then I should be presented with an alarm box"
    },
    {
      "line": 23,
      "value": "#    And Clicking the alarm box should redirect me to home page"
    },
    {
      "line": 24,
      "value": "#"
    },
    {
      "line": 25,
      "value": "#    Examples:"
    },
    {
      "line": 26,
      "value": "#      | case         |"
    },
    {
      "line": 27,
      "value": "#      | justDetails  |"
    },
    {
      "line": 28,
      "value": "#      | emptyId      |"
    },
    {
      "line": 29,
      "value": "#      | unfilteredId |"
    },
    {
      "line": 30,
      "value": "#      | incorrectId  |"
    },
    {
      "line": 31,
      "value": "#"
    },
    {
      "line": 32,
      "value": "#  Scenario Outline: Get back to Landing page from the Details page"
    },
    {
      "line": 33,
      "value": "#    Given I access the landing page of COS and want to see the details of contact \"\u003cid\u003e\""
    },
    {
      "line": 34,
      "value": "#    When I press the back button"
    },
    {
      "line": 35,
      "value": "#    Then I return to the Landing Page"
    },
    {
      "line": 36,
      "value": "#"
    },
    {
      "line": 37,
      "value": "#    Examples:"
    },
    {
      "line": 38,
      "value": "#    | id |"
    },
    {
      "line": 39,
      "value": "#    | 5  |"
    }
  ],
  "line": 41,
  "name": "Image being correctly loaded from K8",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;image-being-correctly-loaded-from-k8",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 42,
  "name": "I access the landing page of COS and want to see the details of contact \"\u003cid\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 43,
  "name": "I should see the image with the specific size \"\u003cheight\u003e\", \"\u003cwidth\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 45,
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
      "line": 46,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;image-being-correctly-loaded-from-k8;;1"
    },
    {
      "cells": [
        "1",
        "180",
        "180"
      ],
      "line": 47,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;image-being-correctly-loaded-from-k8;;2"
    },
    {
      "cells": [
        "5",
        "180",
        "180"
      ],
      "line": 48,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;image-being-correctly-loaded-from-k8;;3"
    },
    {
      "cells": [
        "9",
        "180",
        "180"
      ],
      "line": 49,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;image-being-correctly-loaded-from-k8;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4200230200,
  "status": "passed"
});
formatter.before({
  "duration": 3038677500,
  "status": "passed"
});
formatter.before({
  "duration": 3696221100,
  "status": "passed"
});
formatter.before({
  "duration": 3576766100,
  "status": "passed"
});
formatter.scenario({
  "line": 47,
  "name": "Image being correctly loaded from K8",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;image-being-correctly-loaded-from-k8;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 42,
  "name": "I access the landing page of COS and want to see the details of contact \"1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 43,
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
  "duration": 1931901800,
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
  "duration": 580045900,
  "status": "passed"
});
formatter.after({
  "duration": 31865300,
  "status": "passed"
});
formatter.after({
  "duration": 83674400,
  "status": "passed"
});
formatter.after({
  "duration": 231365100,
  "status": "passed"
});
formatter.after({
  "duration": 76897800,
  "status": "passed"
});
formatter.before({
  "duration": 2993671400,
  "status": "passed"
});
formatter.before({
  "duration": 2814257800,
  "status": "passed"
});
formatter.before({
  "duration": 2996081000,
  "status": "passed"
});
formatter.before({
  "duration": 3340183500,
  "status": "passed"
});
formatter.scenario({
  "line": 48,
  "name": "Image being correctly loaded from K8",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;image-being-correctly-loaded-from-k8;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 42,
  "name": "I access the landing page of COS and want to see the details of contact \"5\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 43,
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
  "duration": 2297576200,
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
  "duration": 579053400,
  "status": "passed"
});
formatter.after({
  "duration": 41540100,
  "status": "passed"
});
formatter.after({
  "duration": 53504000,
  "status": "passed"
});
formatter.after({
  "duration": 247888300,
  "status": "passed"
});
formatter.after({
  "duration": 79002800,
  "status": "passed"
});
formatter.before({
  "duration": 3464773600,
  "status": "passed"
});
formatter.before({
  "duration": 2837184100,
  "status": "passed"
});
formatter.before({
  "duration": 2946490400,
  "status": "passed"
});
formatter.before({
  "duration": 3531978500,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
  "name": "Image being correctly loaded from K8",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;image-being-correctly-loaded-from-k8;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 42,
  "name": "I access the landing page of COS and want to see the details of contact \"9\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 43,
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
  "duration": 13838225500,
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
  "duration": 572138600,
  "status": "passed"
});
formatter.after({
  "duration": 35067200,
  "status": "passed"
});
formatter.after({
  "duration": 54359900,
  "status": "passed"
});
formatter.after({
  "duration": 293563600,
  "status": "passed"
});
formatter.after({
  "duration": 133951800,
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
});