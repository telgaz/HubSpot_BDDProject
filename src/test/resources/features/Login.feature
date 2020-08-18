@web
Feature: Messenger page feature

  Background:
    Given I am on hubspot login page
  @login
  Scenario: Verify invalid login from messenger page
    When I enter tugba@sample.com into username field on the hubspot page
    And I enter test345 into password field on the hubspot page
    And I click on login button on hubspot page
    Then I verify invalid login message on login page

