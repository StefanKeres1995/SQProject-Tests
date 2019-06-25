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
      "value": "#  #Verify if details button is working"
    },
    {
      "line": 8,
      "value": "#  Scenario Outline: Contacts table contains the details button and redirects to the Details page"
    },
    {
      "line": 9,
      "value": "#    Given I access the landing page of COS"
    },
    {
      "line": 10,
      "value": "#    When I click on the Details button on row with id \"\u003cposition\u003e\""
    },
    {
      "line": 11,
      "value": "#    Then I should be redirected to the details page of the user"
    },
    {
      "line": 12,
      "value": "#"
    },
    {
      "line": 13,
      "value": "#    Examples:"
    },
    {
      "line": 14,
      "value": "#      | position      |"
    },
    {
      "line": 15,
      "value": "#      | first         |"
    },
    {
      "line": 16,
      "value": "#      | half-middle1  |"
    },
    {
      "line": 17,
      "value": "#      | middle        |"
    },
    {
      "line": 18,
      "value": "#      | half-middle2  |"
    },
    {
      "line": 19,
      "value": "#      | last          |"
    },
    {
      "line": 20,
      "value": "#"
    },
    {
      "line": 21,
      "value": "#  #Verify wrong link on details page"
    },
    {
      "line": 22,
      "value": "#  Scenario Outline: Badly formatted contact link on Details page"
    },
    {
      "line": 23,
      "value": "#    Given I enter the details page with the following case \"\u003ccase\u003e\""
    },
    {
      "line": 24,
      "value": "#    Then I should be presented with an alarm box"
    },
    {
      "line": 25,
      "value": "#    And Clicking the alarm box should redirect me to home page"
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
      "value": "#      | case         |"
    },
    {
      "line": 29,
      "value": "#      | justDetails  |"
    },
    {
      "line": 30,
      "value": "#      | emptyId      |"
    },
    {
      "line": 31,
      "value": "#      | unfilteredId |"
    },
    {
      "line": 32,
      "value": "#      | incorrectId  |"
    },
    {
      "line": 33,
      "value": "#"
    },
    {
      "line": 34,
      "value": "#  Scenario Outline: Get back to Landing page from the Details page"
    },
    {
      "line": 35,
      "value": "#    Given I access the landing page of COS and want to see the details of contact \"\u003cid\u003e\""
    },
    {
      "line": 36,
      "value": "#    When I press the back button"
    },
    {
      "line": 37,
      "value": "#    Then I return to the Landing Page"
    },
    {
      "line": 38,
      "value": "#"
    },
    {
      "line": 39,
      "value": "#    Examples:"
    },
    {
      "line": 40,
      "value": "#    | id |"
    },
    {
      "line": 41,
      "value": "#    | 5  |"
    }
  ],
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
  "duration": 7559566400,
  "status": "passed"
});
formatter.before({
  "duration": 4922550400,
  "status": "passed"
});
formatter.before({
  "duration": 5270818101,
  "status": "passed"
});
formatter.before({
  "duration": 5044537500,
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
  "duration": 10342280600,
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
  "duration": 577334500,
  "status": "passed"
});
formatter.after({
  "duration": 21703600,
  "status": "passed"
});
formatter.after({
  "duration": 38039400,
  "status": "passed"
});
formatter.after({
  "duration": 52531200,
  "status": "passed"
});
formatter.after({
  "duration": 146449500,
  "status": "passed"
});
formatter.before({
  "duration": 4306470800,
  "status": "passed"
});
formatter.before({
  "duration": 3248253400,
  "status": "passed"
});
formatter.before({
  "duration": 3328653800,
  "status": "passed"
});
formatter.before({
  "duration": 3312687400,
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
  "duration": 9425922300,
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
  "duration": 572472400,
  "status": "passed"
});
formatter.after({
  "duration": 22311500,
  "status": "passed"
});
formatter.after({
  "duration": 37302800,
  "status": "passed"
});
formatter.after({
  "duration": 53019800,
  "status": "passed"
});
formatter.after({
  "duration": 116350100,
  "status": "passed"
});
formatter.before({
  "duration": 4121689800,
  "status": "passed"
});
formatter.before({
  "duration": 3347831100,
  "status": "passed"
});
formatter.before({
  "duration": 3874240001,
  "status": "passed"
});
formatter.before({
  "duration": 3875365400,
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
  "duration": 5893040699,
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
  "duration": 570279100,
  "status": "passed"
});
formatter.after({
  "duration": 22481900,
  "status": "passed"
});
formatter.after({
  "duration": 56285000,
  "status": "passed"
});
formatter.after({
  "duration": 152790401,
  "status": "passed"
});
formatter.after({
  "duration": 70178400,
  "status": "passed"
});
formatter.before({
  "duration": 3231676700,
  "status": "passed"
});
formatter.before({
  "duration": 3172991600,
  "status": "passed"
});
formatter.before({
  "duration": 3116638900,
  "status": "passed"
});
formatter.before({
  "duration": 3373871000,
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
  "duration": 5932645899,
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
  "duration": 1085714900,
  "status": "passed"
});
formatter.after({
  "duration": 20791701,
  "status": "passed"
});
formatter.after({
  "duration": 36673700,
  "status": "passed"
});
formatter.after({
  "duration": 53709400,
  "status": "passed"
});
formatter.after({
  "duration": 83298101,
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
  "duration": 3513445900,
  "status": "passed"
});
formatter.before({
  "duration": 3167312700,
  "status": "passed"
});
formatter.before({
  "duration": 3109402401,
  "status": "passed"
});
formatter.before({
  "duration": 3291699201,
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
  "duration": 7962761000,
  "status": "passed"
});
formatter.match({
  "location": "DetailsPageTests.iCanSeeTheContactImage()"
});
formatter.result({
  "duration": 556918200,
  "status": "passed"
});
formatter.after({
  "duration": 22688800,
  "status": "passed"
});
formatter.after({
  "duration": 42112799,
  "status": "passed"
});
formatter.after({
  "duration": 51783700,
  "status": "passed"
});
formatter.after({
  "duration": 141835400,
  "status": "passed"
});
formatter.before({
  "duration": 4587324800,
  "status": "passed"
});
formatter.before({
  "duration": 3146891600,
  "status": "passed"
});
formatter.before({
  "duration": 3177509599,
  "status": "passed"
});
formatter.before({
  "duration": 3233420600,
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
  "duration": 5881886600,
  "status": "passed"
});
formatter.match({
  "location": "DetailsPageTests.iCanSeeTheContactImage()"
});
formatter.result({
  "duration": 549841699,
  "status": "passed"
});
formatter.after({
  "duration": 24818000,
  "status": "passed"
});
formatter.after({
  "duration": 37285500,
  "status": "passed"
});
formatter.after({
  "duration": 151666000,
  "status": "passed"
});
formatter.after({
  "duration": 95328800,
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
formatter.uri("DuplicatePage.feature");
formatter.feature({
  "line": 1,
  "name": "Access to the Contacts Orchestrator Solution\u0027s (COS) Duplicates page",
  "description": "As a user\r\nI want to access the duplicate page\r\nSo that I can see the list of the possible contacts duplicate available\r\nSo that I can delete and add those at my will",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-duplicates-page",
  "keyword": "Feature"
});
formatter.uri("IndexPage.feature");
formatter.feature({
  "line": 1,
  "name": "Access to the Contacts Orchestrator Solution\u0027s (COS) Landing Page",
  "description": "As a user\r\nI want to access to the URL address provided for the landing page\r\nSo that I can see the list of the contacts available",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page",
  "keyword": "Feature"
});
});