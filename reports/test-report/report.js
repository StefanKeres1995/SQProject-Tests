$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("US1.feature");
formatter.feature({
  "line": 1,
  "name": "Access to the Contacts Orchestrator Solution\u0027s (COS) Landing Page",
  "description": "As a user\r\nI want to access to the URL address provided for the landing page\r\nSo that I can see the list of the contacts available",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 13960723800,
  "error_message": "java.lang.IllegalStateException: Specified firefox binary location does not exist or is not a real file: \\home\\glnaceg\\firefox\\geckodriverx\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:504)\r\n\tat org.openqa.selenium.firefox.internal.Executable.\u003cinit\u003e(Executable.java:45)\r\n\tat org.openqa.selenium.firefox.FirefoxBinary.\u003cinit\u003e(FirefoxBinary.java:139)\r\n\tat org.openqa.selenium.firefox.FirefoxOptions$Binary.asBinary(FirefoxOptions.java:422)\r\n\tat java.base/java.util.Optional.map(Optional.java:265)\r\n\tat org.openqa.selenium.firefox.FirefoxOptions.getBinaryOrNull(FirefoxOptions.java:221)\r\n\tat org.openqa.selenium.firefox.FirefoxOptions.getBinary(FirefoxOptions.java:217)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.toExecutor(FirefoxDriver.java:155)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:120)\r\n\tat StepsDefUS1.setUp(StepsDefUS1.java:105)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\r\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 5,
  "name": "Landing page\u0027s title and text contains \"Contacts Landing Page\"",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page\u0027s-title-and-text-contains-\"contacts-landing-page\"",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 7,
      "value": "#Then the title of the page should be \"Contacts Landing Page\""
    }
  ],
  "line": 8,
  "name": "I should see the same name as in the database position",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefUS1.iAccessTheLandingPageOfCOS()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepsDefUS1.iShouldSeeTheSameNameAsInTheDatabasePosition()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 23400,
  "status": "passed"
});
formatter.before({
  "duration": 270200,
  "error_message": "java.lang.IllegalStateException: Specified firefox binary location does not exist or is not a real file: \\home\\glnaceg\\firefox\\geckodriverx\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:504)\r\n\tat org.openqa.selenium.firefox.internal.Executable.\u003cinit\u003e(Executable.java:45)\r\n\tat org.openqa.selenium.firefox.FirefoxBinary.\u003cinit\u003e(FirefoxBinary.java:139)\r\n\tat org.openqa.selenium.firefox.FirefoxOptions$Binary.asBinary(FirefoxOptions.java:422)\r\n\tat java.base/java.util.Optional.map(Optional.java:265)\r\n\tat org.openqa.selenium.firefox.FirefoxOptions.getBinaryOrNull(FirefoxOptions.java:221)\r\n\tat org.openqa.selenium.firefox.FirefoxOptions.getBinary(FirefoxOptions.java:217)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.toExecutor(FirefoxDriver.java:155)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:120)\r\n\tat StepsDefUS1.setUp(StepsDefUS1.java:105)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\r\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 9,
  "name": "Landing page\u0027s title and text contains \"Contacts Landing Page\"",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page\u0027s-title-and-text-contains-\"contacts-landing-page\"",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 11,
      "value": "#Then the title of the page should be \"Contacts Landing Page\""
    }
  ],
  "line": 12,
  "name": "I should see the same name as in the database position",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefUS1.iAccessTheLandingPageOfCOS()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepsDefUS1.iShouldSeeTheSameNameAsInTheDatabasePosition()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 16800,
  "status": "passed"
});
formatter.before({
  "duration": 250700,
  "error_message": "java.lang.IllegalStateException: Specified firefox binary location does not exist or is not a real file: \\home\\glnaceg\\firefox\\geckodriverx\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:504)\r\n\tat org.openqa.selenium.firefox.internal.Executable.\u003cinit\u003e(Executable.java:45)\r\n\tat org.openqa.selenium.firefox.FirefoxBinary.\u003cinit\u003e(FirefoxBinary.java:139)\r\n\tat org.openqa.selenium.firefox.FirefoxOptions$Binary.asBinary(FirefoxOptions.java:422)\r\n\tat java.base/java.util.Optional.map(Optional.java:265)\r\n\tat org.openqa.selenium.firefox.FirefoxOptions.getBinaryOrNull(FirefoxOptions.java:221)\r\n\tat org.openqa.selenium.firefox.FirefoxOptions.getBinary(FirefoxOptions.java:217)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.toExecutor(FirefoxDriver.java:155)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:120)\r\n\tat StepsDefUS1.setUp(StepsDefUS1.java:105)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\r\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 13,
  "name": "Landing page\u0027s title and text contains \"Contacts Landing Page\"",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page\u0027s-title-and-text-contains-\"contacts-landing-page\"",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 15,
      "value": "#Then the title of the page should be \"Contacts Landing Page\""
    }
  ],
  "line": 16,
  "name": "I should see the same name as in the database position",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefUS1.iAccessTheLandingPageOfCOS()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepsDefUS1.iShouldSeeTheSameNameAsInTheDatabasePosition()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 29000,
  "status": "passed"
});
formatter.before({
  "duration": 247600,
  "error_message": "java.lang.IllegalStateException: Specified firefox binary location does not exist or is not a real file: \\home\\glnaceg\\firefox\\geckodriverx\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:504)\r\n\tat org.openqa.selenium.firefox.internal.Executable.\u003cinit\u003e(Executable.java:45)\r\n\tat org.openqa.selenium.firefox.FirefoxBinary.\u003cinit\u003e(FirefoxBinary.java:139)\r\n\tat org.openqa.selenium.firefox.FirefoxOptions$Binary.asBinary(FirefoxOptions.java:422)\r\n\tat java.base/java.util.Optional.map(Optional.java:265)\r\n\tat org.openqa.selenium.firefox.FirefoxOptions.getBinaryOrNull(FirefoxOptions.java:221)\r\n\tat org.openqa.selenium.firefox.FirefoxOptions.getBinary(FirefoxOptions.java:217)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.toExecutor(FirefoxDriver.java:155)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:120)\r\n\tat StepsDefUS1.setUp(StepsDefUS1.java:105)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\r\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 17,
  "name": "Landing page\u0027s title and text contains \"Contacts Landing Page\"",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page\u0027s-title-and-text-contains-\"contacts-landing-page\"",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 19,
      "value": "#Then the title of the page should be \"Contacts Landing Page\""
    }
  ],
  "line": 20,
  "name": "I should see the same name as in the database position",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefUS1.iAccessTheLandingPageOfCOS()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepsDefUS1.iShouldSeeTheSameNameAsInTheDatabasePosition()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 21000,
  "status": "passed"
});
formatter.before({
  "duration": 243000,
  "error_message": "java.lang.IllegalStateException: Specified firefox binary location does not exist or is not a real file: \\home\\glnaceg\\firefox\\geckodriverx\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:504)\r\n\tat org.openqa.selenium.firefox.internal.Executable.\u003cinit\u003e(Executable.java:45)\r\n\tat org.openqa.selenium.firefox.FirefoxBinary.\u003cinit\u003e(FirefoxBinary.java:139)\r\n\tat org.openqa.selenium.firefox.FirefoxOptions$Binary.asBinary(FirefoxOptions.java:422)\r\n\tat java.base/java.util.Optional.map(Optional.java:265)\r\n\tat org.openqa.selenium.firefox.FirefoxOptions.getBinaryOrNull(FirefoxOptions.java:221)\r\n\tat org.openqa.selenium.firefox.FirefoxOptions.getBinary(FirefoxOptions.java:217)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.toExecutor(FirefoxDriver.java:155)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:120)\r\n\tat StepsDefUS1.setUp(StepsDefUS1.java:105)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\r\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 21,
  "name": "Landing page\u0027s title and text contains \"Contacts Landing Page\"",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page\u0027s-title-and-text-contains-\"contacts-landing-page\"",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 22,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 23,
      "value": "#Then the title of the page should be \"Contacts Landing Page\""
    }
  ],
  "line": 24,
  "name": "I should see the same name as in the database position",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefUS1.iAccessTheLandingPageOfCOS()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepsDefUS1.iShouldSeeTheSameNameAsInTheDatabasePosition()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 25100,
  "status": "passed"
});
formatter.before({
  "duration": 218400,
  "error_message": "java.lang.IllegalStateException: Specified firefox binary location does not exist or is not a real file: \\home\\glnaceg\\firefox\\geckodriverx\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:504)\r\n\tat org.openqa.selenium.firefox.internal.Executable.\u003cinit\u003e(Executable.java:45)\r\n\tat org.openqa.selenium.firefox.FirefoxBinary.\u003cinit\u003e(FirefoxBinary.java:139)\r\n\tat org.openqa.selenium.firefox.FirefoxOptions$Binary.asBinary(FirefoxOptions.java:422)\r\n\tat java.base/java.util.Optional.map(Optional.java:265)\r\n\tat org.openqa.selenium.firefox.FirefoxOptions.getBinaryOrNull(FirefoxOptions.java:221)\r\n\tat org.openqa.selenium.firefox.FirefoxOptions.getBinary(FirefoxOptions.java:217)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.toExecutor(FirefoxDriver.java:155)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:120)\r\n\tat StepsDefUS1.setUp(StepsDefUS1.java:105)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\r\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 25,
  "name": "Landing page\u0027s title and text contains \"Contacts Landing Page\"",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page\u0027s-title-and-text-contains-\"contacts-landing-page\"",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 26,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 27,
      "value": "#Then the title of the page should be \"Contacts Landing Page\""
    }
  ],
  "line": 28,
  "name": "I should see the same name as in the database position",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefUS1.iAccessTheLandingPageOfCOS()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepsDefUS1.iShouldSeeTheSameNameAsInTheDatabasePosition()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 19900,
  "status": "passed"
});
formatter.before({
  "duration": 267000,
  "error_message": "java.lang.IllegalStateException: Specified firefox binary location does not exist or is not a real file: \\home\\glnaceg\\firefox\\geckodriverx\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:504)\r\n\tat org.openqa.selenium.firefox.internal.Executable.\u003cinit\u003e(Executable.java:45)\r\n\tat org.openqa.selenium.firefox.FirefoxBinary.\u003cinit\u003e(FirefoxBinary.java:139)\r\n\tat org.openqa.selenium.firefox.FirefoxOptions$Binary.asBinary(FirefoxOptions.java:422)\r\n\tat java.base/java.util.Optional.map(Optional.java:265)\r\n\tat org.openqa.selenium.firefox.FirefoxOptions.getBinaryOrNull(FirefoxOptions.java:221)\r\n\tat org.openqa.selenium.firefox.FirefoxOptions.getBinary(FirefoxOptions.java:217)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.toExecutor(FirefoxDriver.java:155)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:120)\r\n\tat StepsDefUS1.setUp(StepsDefUS1.java:105)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\r\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 29,
  "name": "Landing page\u0027s title and text contains \"Contacts Landing Page\"",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page\u0027s-title-and-text-contains-\"contacts-landing-page\"",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 30,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 31,
      "value": "#Then the title of the page should be \"Contacts Landing Page\""
    }
  ],
  "line": 32,
  "name": "I should see the same name as in the database position",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefUS1.iAccessTheLandingPageOfCOS()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepsDefUS1.iShouldSeeTheSameNameAsInTheDatabasePosition()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 19700,
  "status": "passed"
});
formatter.before({
  "duration": 219100,
  "error_message": "java.lang.IllegalStateException: Specified firefox binary location does not exist or is not a real file: \\home\\glnaceg\\firefox\\geckodriverx\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:504)\r\n\tat org.openqa.selenium.firefox.internal.Executable.\u003cinit\u003e(Executable.java:45)\r\n\tat org.openqa.selenium.firefox.FirefoxBinary.\u003cinit\u003e(FirefoxBinary.java:139)\r\n\tat org.openqa.selenium.firefox.FirefoxOptions$Binary.asBinary(FirefoxOptions.java:422)\r\n\tat java.base/java.util.Optional.map(Optional.java:265)\r\n\tat org.openqa.selenium.firefox.FirefoxOptions.getBinaryOrNull(FirefoxOptions.java:221)\r\n\tat org.openqa.selenium.firefox.FirefoxOptions.getBinary(FirefoxOptions.java:217)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.toExecutor(FirefoxDriver.java:155)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:120)\r\n\tat StepsDefUS1.setUp(StepsDefUS1.java:105)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\r\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 33,
  "name": "Landing page\u0027s title and text contains \"Contacts Landing Page\"",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page\u0027s-title-and-text-contains-\"contacts-landing-page\"",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 34,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 35,
      "value": "#Then the title of the page should be \"Contacts Landing Page\""
    }
  ],
  "line": 36,
  "name": "I should see the same name as in the database position",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefUS1.iAccessTheLandingPageOfCOS()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepsDefUS1.iShouldSeeTheSameNameAsInTheDatabasePosition()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 17700,
  "status": "passed"
});
formatter.before({
  "duration": 233200,
  "error_message": "java.lang.IllegalStateException: Specified firefox binary location does not exist or is not a real file: \\home\\glnaceg\\firefox\\geckodriverx\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:504)\r\n\tat org.openqa.selenium.firefox.internal.Executable.\u003cinit\u003e(Executable.java:45)\r\n\tat org.openqa.selenium.firefox.FirefoxBinary.\u003cinit\u003e(FirefoxBinary.java:139)\r\n\tat org.openqa.selenium.firefox.FirefoxOptions$Binary.asBinary(FirefoxOptions.java:422)\r\n\tat java.base/java.util.Optional.map(Optional.java:265)\r\n\tat org.openqa.selenium.firefox.FirefoxOptions.getBinaryOrNull(FirefoxOptions.java:221)\r\n\tat org.openqa.selenium.firefox.FirefoxOptions.getBinary(FirefoxOptions.java:217)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.toExecutor(FirefoxDriver.java:155)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:120)\r\n\tat StepsDefUS1.setUp(StepsDefUS1.java:105)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\r\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 37,
  "name": "Landing page\u0027s title and text contains \"Contacts Landing Page\"",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page\u0027s-title-and-text-contains-\"contacts-landing-page\"",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 38,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 39,
      "value": "#Then the title of the page should be \"Contacts Landing Page\""
    }
  ],
  "line": 40,
  "name": "I should see the same name as in the database position",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefUS1.iAccessTheLandingPageOfCOS()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepsDefUS1.iShouldSeeTheSameNameAsInTheDatabasePosition()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 20500,
  "status": "passed"
});
formatter.before({
  "duration": 245900,
  "error_message": "java.lang.IllegalStateException: Specified firefox binary location does not exist or is not a real file: \\home\\glnaceg\\firefox\\geckodriverx\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:504)\r\n\tat org.openqa.selenium.firefox.internal.Executable.\u003cinit\u003e(Executable.java:45)\r\n\tat org.openqa.selenium.firefox.FirefoxBinary.\u003cinit\u003e(FirefoxBinary.java:139)\r\n\tat org.openqa.selenium.firefox.FirefoxOptions$Binary.asBinary(FirefoxOptions.java:422)\r\n\tat java.base/java.util.Optional.map(Optional.java:265)\r\n\tat org.openqa.selenium.firefox.FirefoxOptions.getBinaryOrNull(FirefoxOptions.java:221)\r\n\tat org.openqa.selenium.firefox.FirefoxOptions.getBinary(FirefoxOptions.java:217)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.toExecutor(FirefoxDriver.java:155)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:120)\r\n\tat StepsDefUS1.setUp(StepsDefUS1.java:105)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\r\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 41,
  "name": "Landing page\u0027s title and text contains \"Contacts Landing Page\"",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page\u0027s-title-and-text-contains-\"contacts-landing-page\"",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 42,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 43,
      "value": "#Then the title of the page should be \"Contacts Landing Page\""
    }
  ],
  "line": 44,
  "name": "I should see the same name as in the database position",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefUS1.iAccessTheLandingPageOfCOS()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepsDefUS1.iShouldSeeTheSameNameAsInTheDatabasePosition()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 18400,
  "status": "passed"
});
formatter.before({
  "duration": 189900,
  "error_message": "java.lang.IllegalStateException: Specified firefox binary location does not exist or is not a real file: \\home\\glnaceg\\firefox\\geckodriverx\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:504)\r\n\tat org.openqa.selenium.firefox.internal.Executable.\u003cinit\u003e(Executable.java:45)\r\n\tat org.openqa.selenium.firefox.FirefoxBinary.\u003cinit\u003e(FirefoxBinary.java:139)\r\n\tat org.openqa.selenium.firefox.FirefoxOptions$Binary.asBinary(FirefoxOptions.java:422)\r\n\tat java.base/java.util.Optional.map(Optional.java:265)\r\n\tat org.openqa.selenium.firefox.FirefoxOptions.getBinaryOrNull(FirefoxOptions.java:221)\r\n\tat org.openqa.selenium.firefox.FirefoxOptions.getBinary(FirefoxOptions.java:217)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.toExecutor(FirefoxDriver.java:155)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:120)\r\n\tat StepsDefUS1.setUp(StepsDefUS1.java:105)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\r\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 45,
  "name": "Landing page\u0027s title and text contains \"Contacts Landing Page\"",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page\u0027s-title-and-text-contains-\"contacts-landing-page\"",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 46,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 47,
      "value": "#Then the title of the page should be \"Contacts Landing Page\""
    }
  ],
  "line": 48,
  "name": "I should see the same name as in the database position",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefUS1.iAccessTheLandingPageOfCOS()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepsDefUS1.iShouldSeeTheSameNameAsInTheDatabasePosition()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 19300,
  "status": "passed"
});
formatter.before({
  "duration": 295200,
  "error_message": "java.lang.IllegalStateException: Specified firefox binary location does not exist or is not a real file: \\home\\glnaceg\\firefox\\geckodriverx\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:504)\r\n\tat org.openqa.selenium.firefox.internal.Executable.\u003cinit\u003e(Executable.java:45)\r\n\tat org.openqa.selenium.firefox.FirefoxBinary.\u003cinit\u003e(FirefoxBinary.java:139)\r\n\tat org.openqa.selenium.firefox.FirefoxOptions$Binary.asBinary(FirefoxOptions.java:422)\r\n\tat java.base/java.util.Optional.map(Optional.java:265)\r\n\tat org.openqa.selenium.firefox.FirefoxOptions.getBinaryOrNull(FirefoxOptions.java:221)\r\n\tat org.openqa.selenium.firefox.FirefoxOptions.getBinary(FirefoxOptions.java:217)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.toExecutor(FirefoxDriver.java:155)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:120)\r\n\tat StepsDefUS1.setUp(StepsDefUS1.java:105)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\r\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 49,
  "name": "Landing page\u0027s title and text contains \"Contacts Landing Page\"",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page\u0027s-title-and-text-contains-\"contacts-landing-page\"",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 50,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 51,
      "value": "#Then the title of the page should be \"Contacts Landing Page\""
    }
  ],
  "line": 52,
  "name": "I should see the same name as in the database position",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefUS1.iAccessTheLandingPageOfCOS()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepsDefUS1.iShouldSeeTheSameNameAsInTheDatabasePosition()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 17500,
  "status": "passed"
});
formatter.before({
  "duration": 292600,
  "error_message": "java.lang.IllegalStateException: Specified firefox binary location does not exist or is not a real file: \\home\\glnaceg\\firefox\\geckodriverx\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:504)\r\n\tat org.openqa.selenium.firefox.internal.Executable.\u003cinit\u003e(Executable.java:45)\r\n\tat org.openqa.selenium.firefox.FirefoxBinary.\u003cinit\u003e(FirefoxBinary.java:139)\r\n\tat org.openqa.selenium.firefox.FirefoxOptions$Binary.asBinary(FirefoxOptions.java:422)\r\n\tat java.base/java.util.Optional.map(Optional.java:265)\r\n\tat org.openqa.selenium.firefox.FirefoxOptions.getBinaryOrNull(FirefoxOptions.java:221)\r\n\tat org.openqa.selenium.firefox.FirefoxOptions.getBinary(FirefoxOptions.java:217)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.toExecutor(FirefoxDriver.java:155)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:120)\r\n\tat StepsDefUS1.setUp(StepsDefUS1.java:105)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\r\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 53,
  "name": "Landing page\u0027s title and text contains \"Contacts Landing Page\"",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page\u0027s-title-and-text-contains-\"contacts-landing-page\"",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 54,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 55,
      "value": "#Then the title of the page should be \"Contacts Landing Page\""
    }
  ],
  "line": 56,
  "name": "I should see the same name as in the database position",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefUS1.iAccessTheLandingPageOfCOS()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepsDefUS1.iShouldSeeTheSameNameAsInTheDatabasePosition()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 16500,
  "status": "passed"
});
formatter.before({
  "duration": 315500,
  "error_message": "java.lang.IllegalStateException: Specified firefox binary location does not exist or is not a real file: \\home\\glnaceg\\firefox\\geckodriverx\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:504)\r\n\tat org.openqa.selenium.firefox.internal.Executable.\u003cinit\u003e(Executable.java:45)\r\n\tat org.openqa.selenium.firefox.FirefoxBinary.\u003cinit\u003e(FirefoxBinary.java:139)\r\n\tat org.openqa.selenium.firefox.FirefoxOptions$Binary.asBinary(FirefoxOptions.java:422)\r\n\tat java.base/java.util.Optional.map(Optional.java:265)\r\n\tat org.openqa.selenium.firefox.FirefoxOptions.getBinaryOrNull(FirefoxOptions.java:221)\r\n\tat org.openqa.selenium.firefox.FirefoxOptions.getBinary(FirefoxOptions.java:217)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.toExecutor(FirefoxDriver.java:155)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:120)\r\n\tat StepsDefUS1.setUp(StepsDefUS1.java:105)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\r\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 57,
  "name": "Landing page\u0027s title and text contains \"Contacts Landing Page\"",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page\u0027s-title-and-text-contains-\"contacts-landing-page\"",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 58,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 59,
      "value": "#Then the title of the page should be \"Contacts Landing Page\""
    }
  ],
  "line": 60,
  "name": "I should see the same name as in the database position",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefUS1.iAccessTheLandingPageOfCOS()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepsDefUS1.iShouldSeeTheSameNameAsInTheDatabasePosition()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 23600,
  "status": "passed"
});
formatter.before({
  "duration": 282800,
  "error_message": "java.lang.IllegalStateException: Specified firefox binary location does not exist or is not a real file: \\home\\glnaceg\\firefox\\geckodriverx\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:504)\r\n\tat org.openqa.selenium.firefox.internal.Executable.\u003cinit\u003e(Executable.java:45)\r\n\tat org.openqa.selenium.firefox.FirefoxBinary.\u003cinit\u003e(FirefoxBinary.java:139)\r\n\tat org.openqa.selenium.firefox.FirefoxOptions$Binary.asBinary(FirefoxOptions.java:422)\r\n\tat java.base/java.util.Optional.map(Optional.java:265)\r\n\tat org.openqa.selenium.firefox.FirefoxOptions.getBinaryOrNull(FirefoxOptions.java:221)\r\n\tat org.openqa.selenium.firefox.FirefoxOptions.getBinary(FirefoxOptions.java:217)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.toExecutor(FirefoxDriver.java:155)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:120)\r\n\tat StepsDefUS1.setUp(StepsDefUS1.java:105)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\r\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 61,
  "name": "Landing page\u0027s title and text contains \"Contacts Landing Page\"",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page\u0027s-title-and-text-contains-\"contacts-landing-page\"",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 62,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 63,
      "value": "#Then the title of the page should be \"Contacts Landing Page\""
    }
  ],
  "line": 64,
  "name": "I should see the same name as in the database position",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefUS1.iAccessTheLandingPageOfCOS()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepsDefUS1.iShouldSeeTheSameNameAsInTheDatabasePosition()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 17200,
  "status": "passed"
});
formatter.before({
  "duration": 968200,
  "error_message": "java.lang.IllegalStateException: Specified firefox binary location does not exist or is not a real file: \\home\\glnaceg\\firefox\\geckodriverx\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:504)\r\n\tat org.openqa.selenium.firefox.internal.Executable.\u003cinit\u003e(Executable.java:45)\r\n\tat org.openqa.selenium.firefox.FirefoxBinary.\u003cinit\u003e(FirefoxBinary.java:139)\r\n\tat org.openqa.selenium.firefox.FirefoxOptions$Binary.asBinary(FirefoxOptions.java:422)\r\n\tat java.base/java.util.Optional.map(Optional.java:265)\r\n\tat org.openqa.selenium.firefox.FirefoxOptions.getBinaryOrNull(FirefoxOptions.java:221)\r\n\tat org.openqa.selenium.firefox.FirefoxOptions.getBinary(FirefoxOptions.java:217)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.toExecutor(FirefoxDriver.java:155)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:120)\r\n\tat StepsDefUS1.setUp(StepsDefUS1.java:105)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\r\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 65,
  "name": "Landing page\u0027s title and text contains \"Contacts Landing Page\"",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page\u0027s-title-and-text-contains-\"contacts-landing-page\"",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 66,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 67,
      "value": "#Then the title of the page should be \"Contacts Landing Page\""
    }
  ],
  "line": 68,
  "name": "I should see the same name as in the database position",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefUS1.iAccessTheLandingPageOfCOS()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepsDefUS1.iShouldSeeTheSameNameAsInTheDatabasePosition()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 433200,
  "status": "passed"
});
});