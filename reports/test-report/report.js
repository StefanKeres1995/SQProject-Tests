$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("US1.feature");
formatter.feature({
  "line": 1,
  "name": "Access to the Contacts Orchestrator Solution\u0027s (COS) Landing Page",
  "description": "As a user\r\nI want to access to the URL address provided for the landing page\r\nSo that I can see the list of the contacts available",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 9749874500,
  "status": "passed"
});
formatter.before({
  "duration": 13442737401,
  "status": "passed"
});
formatter.before({
  "duration": 11393313100,
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
  "duration": 5013972799,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefUS1.iShouldBeAbleToSeeThePossibleSources()"
});
formatter.result({
  "duration": 11356697000,
  "status": "passed"
});
formatter.after({
  "duration": 33964899,
  "status": "passed"
});
formatter.after({
  "duration": 47101700,
  "status": "passed"
});
formatter.after({
  "duration": 46777799,
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
  "duration": 4053273400,
  "status": "passed"
});
formatter.before({
  "duration": 4153756300,
  "status": "passed"
});
formatter.before({
  "duration": 4478463000,
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
  "duration": 4893510101,
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
  "duration": 11280692799,
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
  "duration": 1364531700,
  "status": "passed"
});
formatter.after({
  "duration": 65300500,
  "status": "passed"
});
formatter.after({
  "duration": 109630700,
  "status": "passed"
});
formatter.after({
  "duration": 260051900,
  "status": "passed"
});
formatter.before({
  "duration": 5344513301,
  "status": "passed"
});
formatter.before({
  "duration": 6019615500,
  "status": "passed"
});
formatter.before({
  "duration": 5747735601,
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
  "duration": 3284240400,
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
  "duration": 1226951000,
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
  "duration": 224774301,
  "status": "passed"
});
formatter.after({
  "duration": 33883400,
  "status": "passed"
});
formatter.after({
  "duration": 96396501,
  "status": "passed"
});
formatter.after({
  "duration": 103380401,
  "status": "passed"
});
formatter.before({
  "duration": 4801299401,
  "status": "passed"
});
formatter.before({
  "duration": 5129301101,
  "status": "passed"
});
formatter.before({
  "duration": 5026449600,
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
  "duration": 4666423399,
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
  "duration": 1126480200,
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
  "duration": 299901301,
  "status": "passed"
});
formatter.after({
  "duration": 30304501,
  "status": "passed"
});
formatter.after({
  "duration": 74467800,
  "status": "passed"
});
formatter.after({
  "duration": 90680500,
  "status": "passed"
});
formatter.before({
  "duration": 6383492900,
  "status": "passed"
});
formatter.before({
  "duration": 6171326900,
  "status": "passed"
});
formatter.before({
  "duration": 6337021600,
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
  "duration": 4546569899,
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
  "duration": 1515374699,
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
  "duration": 525183101,
  "error_message": "org.openqa.selenium.StaleElementReferenceException: stale element reference: element is not attached to the page document\n  (Session info: headless chrome\u003d72.0.3626.121)\n  (Driver info: chromedriver\u003d2.46.628402 (536cd7adbad73a3783fdc2cab92ab2ba7ec361e1),platform\u003dWindows NT 10.0.17763 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027LNACE\u0027, ip: \u002710.200.3.158\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.46.628402 (536cd7adbad73a..., userDataDir: C:\\Users\\lnace\\AppData\\Loca...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:61887}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 72.0.3626.121, webStorageEnabled: true}\nSession ID: 2033ca4026059c2f926f7728d155d8ef\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:279)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.getText(RemoteWebElement.java:160)\r\n\tat StepsDefUS1.iShouldOnlyBeAbleToSeeTheContactsOfThatSpecific(StepsDefUS1.java:454)\r\n\tat ✽.Then I should only be able to see the contacts of that specific \"LinkedIn\"(US1.feature:87)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 42506400,
  "status": "passed"
});
formatter.after({
  "duration": 607382400,
  "status": "passed"
});
formatter.after({
  "duration": 614303301,
  "status": "passed"
});
formatter.before({
  "duration": 5694709599,
  "status": "passed"
});
formatter.before({
  "duration": 4954641000,
  "status": "passed"
});
formatter.before({
  "duration": 5724151701,
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
