$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 2,
  "name": "As a user",
  "description": "I want to be able to \r\nSearch for different location",
  "id": "as-a-user",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Reg2"
    }
  ]
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Search Multiple Locations",
  "description": "",
  "id": "as-a-user;search-multiple-locations",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I am on landing page of \"google maps\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click the \"Search box directions\" button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter \"From\" as \"\u003cLocation\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I enter \"To\" as \"\u003cDestination\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click the \"Search\" button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "\"\u003cSelected locality\u003e\" is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "as-a-user;search-multiple-locations;",
  "rows": [
    {
      "cells": [
        "Location"
      ],
      "line": 15,
      "id": "as-a-user;search-multiple-locations;;1"
    },
    {
      "cells": [
        "Brighton"
      ],
      "line": 16,
      "id": "as-a-user;search-multiple-locations;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7439015116,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Search Multiple Locations",
  "description": "",
  "id": "as-a-user;search-multiple-locations;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Reg2"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on landing page of \"google maps\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click the \"Search box directions\" button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter \"From\" as \"Brighton\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I enter \"To\" as \"\u003cDestination\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click the \"Search\" button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "\"\u003cSelected locality\u003e\" is displayed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "google maps",
      "offset": 25
    }
  ],
  "location": "Login.i_am_on_landing_page_of(String)"
});
formatter.result({
  "duration": 6776546904,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Search box directions",
      "offset": 13
    }
  ],
  "location": "Login.i_click_the_button(String)"
});
formatter.result({
  "duration": 259577071,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "From",
      "offset": 9
    },
    {
      "val": "Brighton",
      "offset": 19
    }
  ],
  "location": "Login.i_enter_as(String,String)"
});
formatter.result({
  "duration": 777818,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "To",
      "offset": 9
    },
    {
      "val": "\u003cDestination\u003e",
      "offset": 17
    }
  ],
  "location": "Login.i_enter_as(String,String)"
});
formatter.result({
  "duration": 66076,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Search",
      "offset": 13
    }
  ],
  "location": "Login.i_click_the_button(String)"
});
formatter.result({
  "duration": 30273132246,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of element located by By.cssSelector: .searchbox-searchbutton (tried for 30 second(s) with 500 MILLISECONDS interval)\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027LAPTOP-VA4L60Q5\u0027, ip: \u0027192.168.1.4\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{moz:profile\u003dC:\\Users\\user\\AppData\\Local\\Temp\\rust_mozprofile.oATvqP4c0KXZ, rotatable\u003dfalse, timeouts\u003d{implicit\u003d0.0, pageLoad\u003d300000.0, script\u003d30000.0}, pageLoadStrategy\u003dnormal, platform\u003dANY, specificationLevel\u003d0.0, moz:accessibilityChecks\u003dfalse, acceptInsecureCerts\u003dfalse, browserVersion\u003d53.0.3, platformVersion\u003d10.0, moz:processID\u003d20228.0, browserName\u003dfirefox, javascriptEnabled\u003dtrue, platformName\u003dwindows_nt}]\nSession ID: e6fdfb0b-070b-44b4-bbce-b1fcd351ceb8\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:80)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:232)\r\n\tat PageObject.login_page.Click_go_search(login_page.java:37)\r\n\tat AutoTest.StepDef.Login.i_click_the_button(Login.java:54)\r\n\tat ✽.And I click the \"Search\" button(Login.feature:11)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cSelected locality\u003e",
      "offset": 1
    }
  ],
  "location": "Login.is_displayed(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1060567468,
  "status": "passed"
});
});