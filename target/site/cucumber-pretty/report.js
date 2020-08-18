$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 2,
  "name": "Messenger page feature",
  "description": "",
  "id": "messenger-page-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@web"
    }
  ]
});
formatter.before({
  "duration": 4368319772,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I am on hubspot login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageSD.verifyLoginPageTitle()"
});
formatter.result({
  "duration": 714474518,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Verify invalid login from messenger page",
  "description": "",
  "id": "messenger-page-feature;verify-invalid-login-from-messenger-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I enter tugba@sample.com into username field on the hubspot page",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter test345 into password field on the hubspot page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on login button on hubspot page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I verify invalid login message on login page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "tugba@sample.com",
      "offset": 8
    },
    {
      "val": "username",
      "offset": 30
    }
  ],
  "location": "LoginPageSD.invalidLogin(String,String)"
});
formatter.result({
  "duration": 4681609260,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test345",
      "offset": 8
    },
    {
      "val": "password",
      "offset": 21
    }
  ],
  "location": "LoginPageSD.invalidLogin(String,String)"
});
formatter.result({
  "duration": 184402658,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSD.verifyInvalidLogin()"
});
formatter.result({
  "duration": 297351772,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSD.verifyErrorMessage()"
});
formatter.result({
  "duration": 1149560016,
  "status": "passed"
});
formatter.after({
  "duration": 169553779,
  "status": "passed"
});
});