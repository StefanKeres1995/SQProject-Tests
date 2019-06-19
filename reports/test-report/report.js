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
      "value": "#    When I click on the Details button on row with id \"\u003cid\u003e\""
    },
    {
      "line": 11,
      "value": "#    Then I should be redirected to the details page of the \"\u003cid\u003e\" user"
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
      "value": "#      | id  |"
    },
    {
      "line": 15,
      "value": "#      | 1   |"
    },
    {
      "line": 16,
      "value": "#      | 5   |"
    },
    {
      "line": 17,
      "value": "#      | 45  |"
    },
    {
      "line": 18,
      "value": "#      | 219 |"
    },
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
  "duration": 5761892200,
  "status": "passed"
});
formatter.before({
  "duration": 3127341200,
  "status": "passed"
});
formatter.before({
  "duration": 2986410300,
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
  "duration": 107511800,
  "status": "passed"
});
formatter.match({
  "location": "DetailsPageTests.iShouldBePresentedWithAnAlarmBox()"
});
formatter.result({
  "duration": 11637454100,
  "status": "passed"
});
formatter.match({
  "location": "DetailsPageTests.clickingTheAlarmBoxShouldRedirectMeToHomePage()"
});
formatter.result({
  "duration": 10646532100,
  "status": "passed"
});
formatter.after({
  "duration": 21502200,
  "status": "passed"
});
formatter.after({
  "duration": 36811200,
  "status": "passed"
});
formatter.after({
  "duration": 47951700,
  "status": "passed"
});
formatter.before({
  "duration": 2868620600,
  "status": "passed"
});
formatter.before({
  "duration": 2971272600,
  "status": "passed"
});
formatter.before({
  "duration": 2933717100,
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
  "duration": 152100,
  "status": "passed"
});
formatter.match({
  "location": "DetailsPageTests.iShouldBePresentedWithAnAlarmBox()"
});
formatter.result({
  "duration": 11080923200,
  "status": "passed"
});
formatter.match({
  "location": "DetailsPageTests.clickingTheAlarmBoxShouldRedirectMeToHomePage()"
});
formatter.result({
  "duration": 10560710900,
  "status": "passed"
});
formatter.after({
  "duration": 21284200,
  "status": "passed"
});
formatter.after({
  "duration": 45968100,
  "status": "passed"
});
formatter.after({
  "duration": 535704000,
  "status": "passed"
});
formatter.before({
  "duration": 2896929700,
  "status": "passed"
});
formatter.before({
  "duration": 2819627800,
  "status": "passed"
});
formatter.before({
  "duration": 2886244600,
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
  "duration": 91100,
  "status": "passed"
});
formatter.match({
  "location": "DetailsPageTests.iShouldBePresentedWithAnAlarmBox()"
});
formatter.result({
  "duration": 11399243400,
  "status": "passed"
});
formatter.match({
  "location": "DetailsPageTests.clickingTheAlarmBoxShouldRedirectMeToHomePage()"
});
formatter.result({
  "duration": 10873980000,
  "status": "passed"
});
formatter.after({
  "duration": 27443800,
  "status": "passed"
});
formatter.after({
  "duration": 46552700,
  "status": "passed"
});
formatter.after({
  "duration": 477937300,
  "status": "passed"
});
formatter.before({
  "duration": 3015285400,
  "status": "passed"
});
formatter.before({
  "duration": 3014671000,
  "status": "passed"
});
formatter.before({
  "duration": 2919528400,
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
  "duration": 132200,
  "status": "passed"
});
formatter.match({
  "location": "DetailsPageTests.iShouldBePresentedWithAnAlarmBox()"
});
formatter.result({
  "duration": 11002329800,
  "status": "passed"
});
formatter.match({
  "location": "DetailsPageTests.clickingTheAlarmBoxShouldRedirectMeToHomePage()"
});
formatter.result({
  "duration": 10564658200,
  "status": "passed"
});
formatter.after({
  "duration": 17569100,
  "status": "passed"
});
formatter.after({
  "duration": 30354500,
  "status": "passed"
});
formatter.after({
  "duration": 56103900,
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
  "duration": 2990803600,
  "status": "passed"
});
formatter.before({
  "duration": 3113540000,
  "status": "passed"
});
formatter.before({
  "duration": 2987390700,
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
  "duration": 11680416700,
  "status": "passed"
});
formatter.match({
  "location": "DetailsPageTests.iPressTheBackButton()"
});
formatter.result({
  "duration": 154520100,
  "status": "passed"
});
formatter.match({
  "location": "DetailsPageTests.iReturnToTheLandingPage()"
});
formatter.result({
  "duration": 2696400,
  "error_message": "org.openqa.selenium.UnhandledAlertException: unexpected alert open: {Alert text : Some error occurred. Going back}\n  (Session info: headless chrome\u003d74.0.3729.169)\n  (Driver info: chromedriver\u003d2.46.628402 (536cd7adbad73a3783fdc2cab92ab2ba7ec361e1),platform\u003dWindows NT 10.0.17763 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds: null\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027DESKTOP-P41PC6K\u0027, ip: \u0027172.17.118.17\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.46.628402 (536cd7adbad73a..., userDataDir: C:\\Users\\Stefan\\AppData\\Loc...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:63682}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 74.0.3729.169, webStorageEnabled: true}\nSession ID: 2c5be3031776a5c38e9cbed630cc72d7\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:172)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:602)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getTitle(RemoteWebDriver.java:277)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$2.apply(ExpectedConditions.java:87)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$2.apply(ExpectedConditions.java:82)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:248)\r\n\tat Helper.Helper.waitForSomething(Helper.java:259)\r\n\tat DetailsPageTests.iReturnToTheLandingPage(DetailsPageTests.java:244)\r\n\tat ✽.Then I return to the Landing Page(DetailsPage.feature:36)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 19147200,
  "status": "passed"
});
formatter.after({
  "duration": 48699500,
  "status": "passed"
});
formatter.after({
  "duration": 11609500,
  "error_message": "org.openqa.selenium.UnhandledAlertException: unexpected alert open: {Alert text : Some error occurred. Going back}\n  (Session info: headless chrome\u003d74.0.3729.169)\n  (Driver info: chromedriver\u003d2.46.628402 (536cd7adbad73a3783fdc2cab92ab2ba7ec361e1),platform\u003dWindows NT 10.0.17763 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds: null\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027DESKTOP-P41PC6K\u0027, ip: \u0027172.17.118.17\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.46.628402 (536cd7adbad73a..., userDataDir: C:\\Users\\Stefan\\AppData\\Loc...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:63682}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 74.0.3729.169, webStorageEnabled: true}\nSession ID: 2c5be3031776a5c38e9cbed630cc72d7\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:172)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:602)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.close(RemoteWebDriver.java:435)\r\n\tat DetailsPageTests.tearDown(DetailsPageTests.java:82)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\r\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\r\n",
  "status": "failed"
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