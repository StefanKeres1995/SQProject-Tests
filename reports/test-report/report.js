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
  "name": "Load contact image on Details page",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;load-contact-image-on-details-page",
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
  "name": "I can see the contact image",
  "keyword": "Then "
});
formatter.examples({
  "line": 47,
  "name": "",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;load-contact-image-on-details-page;",
  "rows": [
    {
      "cells": [
        "id"
      ],
      "line": 48,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;load-contact-image-on-details-page;;1"
    },
    {
      "cells": [
        "5"
      ],
      "line": 49,
      "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;load-contact-image-on-details-page;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4092817000,
  "status": "passed"
});
formatter.before({
  "duration": 3397010800,
  "status": "passed"
});
formatter.before({
  "duration": 6876051801,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
  "name": "Load contact image on Details page",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;load-contact-image-on-details-page;;2",
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
  "duration": 17520508000,
  "status": "passed"
});
formatter.match({
  "location": "DetailsPageTests.iCanSeeTheContactImage()"
});
formatter.result({
  "duration": 1022991300,
  "status": "passed"
});
formatter.after({
  "duration": 17491701,
  "status": "passed"
});
formatter.after({
  "duration": 24359700,
  "status": "passed"
});
formatter.after({
  "duration": 57401200,
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
formatter.uri("IndexPage.feature");
formatter.feature({
  "line": 1,
  "name": "Access to the Contacts Orchestrator Solution\u0027s (COS) Landing Page",
  "description": "As a user\r\nI want to access to the URL address provided for the landing page\r\nSo that I can see the list of the contacts available",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page",
  "keyword": "Feature"
});
});