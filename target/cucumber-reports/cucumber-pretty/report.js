$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Login into Application",
  "description": "",
  "id": "login-into-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Positive test validating login screen",
  "description": "",
  "id": "login-into-application;positive-test-validating-login-screen",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is on application landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Click on Sign In link in landing page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "User enters \u003cusername\u003e and \u003cpassword\u003e and logs in",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User should be succesfully logged in",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "login-into-application;positive-test-validating-login-screen;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 11,
      "id": "login-into-application;positive-test-validating-login-screen;;1"
    },
    {
      "cells": [
        "sudhir01pandit@gmail.com",
        "burger01"
      ],
      "line": 12,
      "id": "login-into-application;positive-test-validating-login-screen;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 13149015519,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Positive test validating login screen",
  "description": "",
  "id": "login-into-application;positive-test-validating-login-screen;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is on application landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Click on Sign In link in landing page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "User enters sudhir01pandit@gmail.com and burger01 and logs in",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User should be succesfully logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_is_on_application_landing_page()"
});
formatter.result({
  "duration": 173519610,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.Click_on_Sign_In_link_in_landing_page()"
});
formatter.result({
  "duration": 97565178,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sudhir01pandit@gmail.com",
      "offset": 12
    },
    {
      "val": "burger01",
      "offset": 41
    }
  ],
  "location": "LoginSteps.user_enters_and_and_logs_in(String,String)"
});
formatter.result({
  "duration": 4640530583,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.User_should_be_succesfully_logged_in()"
});
formatter.result({
  "duration": 8009797563,
  "status": "passed"
});
formatter.after({
  "duration": 142593735,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 16,
  "name": "Positive test validating login screen",
  "description": "",
  "id": "login-into-application;positive-test-validating-login-screen",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "User is on application landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "Click on Sign In link in landing page",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "User enters \u003cusername\u003e and \u003cpassword\u003e and logs in",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "User should be shown with proper error message",
  "keyword": "Then "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "login-into-application;positive-test-validating-login-screen;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 24,
      "id": "login-into-application;positive-test-validating-login-screen;;1"
    },
    {
      "cells": [
        "sudhir01pandit@gmail.com",
        "burger02"
      ],
      "line": 25,
      "id": "login-into-application;positive-test-validating-login-screen;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 61654635763,
  "error_message": "org.openqa.selenium.TimeoutException: timeout\n  (Session info: chrome\u003d75.0.3770.142)\n  (Driver info: chromedriver\u003d74.0.3729.6 (255758eccf3d244491b8a1317aa76e1ce10d57e9-refs/branch-heads/3729@{#29}),platform\u003dMac OS X 10.12.6 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027EMACBOOK-52.Dlink\u0027, ip: \u0027fd01:0:0:0:705d:346e:b7d3:86d7\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.12.6\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 74.0.3729.6 (255758eccf3d24..., userDataDir: /var/folders/7f/v689h8s50lz...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:52795}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 75.0.3770.142, webStorageEnabled: true}\nSession ID: a962b3dc715ebd123c62f112836f541e\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:273)\n\tat com.qa.util.Testbase.initializeDriver(Testbase.java:53)\n\tat stepDefinations.Hooks.setup(Hooks.java:13)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\n\tat cucumberOptions.TestRunner.feature(TestRunner.java:39)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:580)\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:716)\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:988)\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\n\tat org.testng.TestRunner.run(TestRunner.java:505)\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\n\tat org.testng.SuiteRunner.access$000(SuiteRunner.java:40)\n\tat org.testng.SuiteRunner$SuiteWorker.run(SuiteRunner.java:489)\n\tat org.testng.internal.thread.ThreadUtil$1.call(ThreadUtil.java:52)\n\tat java.util.concurrent.FutureTask.run(FutureTask.java:266)\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1142)\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:617)\n\tat java.lang.Thread.run(Thread.java:748)\n",
  "status": "failed"
});
formatter.scenario({
  "line": 25,
  "name": "Positive test validating login screen",
  "description": "",
  "id": "login-into-application;positive-test-validating-login-screen;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "User is on application landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "Click on Sign In link in landing page",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "User enters sudhir01pandit@gmail.com and burger02 and logs in",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "User should be shown with proper error message",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_is_on_application_landing_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.Click_on_Sign_In_link_in_landing_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "sudhir01pandit@gmail.com",
      "offset": 12
    },
    {
      "val": "burger02",
      "offset": 41
    }
  ],
  "location": "LoginSteps.user_enters_and_and_logs_in(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.user_should_be_shown_with_proper_error_message()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 78560557,
  "status": "passed"
});
formatter.uri("startOrdering.feature");
formatter.feature({
  "line": 1,
  "name": "Start Ordering",
  "description": "",
  "id": "start-ordering",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Navigate to start ordering screen",
  "description": "",
  "id": "start-ordering;navigate-to-start-ordering-screen",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is on application landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Click on Sign In link in landing page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "User enters \u003cusername\u003e and \u003cpassword\u003e and logs in",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User should be succesfully logged in",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User clicks on Start ordering button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User should be navigated to Start ordering screen",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "start-ordering;navigate-to-start-ordering-screen;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 13,
      "id": "start-ordering;navigate-to-start-ordering-screen;;1"
    },
    {
      "cells": [
        "sudhir01pandit@gmail.com",
        "burger01"
      ],
      "line": 14,
      "id": "start-ordering;navigate-to-start-ordering-screen;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 11588262660,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Navigate to start ordering screen",
  "description": "",
  "id": "start-ordering;navigate-to-start-ordering-screen;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is on application landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Click on Sign In link in landing page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "User enters sudhir01pandit@gmail.com and burger01 and logs in",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User should be succesfully logged in",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User clicks on Start ordering button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User should be navigated to Start ordering screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_is_on_application_landing_page()"
});
formatter.result({
  "duration": 378959,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.Click_on_Sign_In_link_in_landing_page()"
});
formatter.result({
  "duration": 88981542,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sudhir01pandit@gmail.com",
      "offset": 12
    },
    {
      "val": "burger01",
      "offset": 41
    }
  ],
  "location": "LoginSteps.user_enters_and_and_logs_in(String,String)"
});
formatter.result({
  "duration": 4647324639,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.User_should_be_succesfully_logged_in()"
});
formatter.result({
  "duration": 8011802931,
  "status": "passed"
});
formatter.match({
  "location": "StartOrderingSteps.user_clicks_on_Start_ordering_button()"
});
formatter.result({
  "duration": 16819844,
  "error_message": "org.openqa.selenium.InvalidSelectorException: invalid selector: Unable to locate an element with the xpath expression ///a[contains(@class,\u0027btn btn-default\u0027)] because of the following error:\nSyntaxError: Failed to execute \u0027evaluate\u0027 on \u0027Document\u0027: The string \u0027///a[contains(@class,\u0027btn btn-default\u0027)]\u0027 is not a valid XPath expression.\n  (Session info: chrome\u003d75.0.3770.142)\n  (Driver info: chromedriver\u003d74.0.3729.6 (255758eccf3d244491b8a1317aa76e1ce10d57e9-refs/branch-heads/3729@{#29}),platform\u003dMac OS X 10.12.6 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/invalid_selector_exception.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027EMACBOOK-52.Dlink\u0027, ip: \u0027fd01:0:0:0:705d:346e:b7d3:86d7\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.12.6\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 74.0.3729.6 (255758eccf3d24..., userDataDir: /var/folders/7f/v689h8s50lz...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:52993}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 75.0.3770.142, webStorageEnabled: true}\nSession ID: 4ce764cbdae7574a946dd4bf261bc1f9\n*** Element info: {Using\u003dxpath, value\u003d///a[contains(@class,\u0027btn btn-default\u0027)]}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:421)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy20.click(Unknown Source)\n\tat com.qa.pages.StartOrderingPage.TapOnStartOrderingButton(StartOrderingPage.java:27)\n\tat stepDefinations.StartOrderingSteps.user_clicks_on_Start_ordering_button(StartOrderingSteps.java:20)\n\tat ✽.When User clicks on Start ordering button(startOrdering.feature:9)\n",
  "status": "failed"
});
formatter.match({
  "location": "StartOrderingSteps.user_should_be_navigated_to_Start_ordering_screen()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 140097101,
  "status": "passed"
});
});