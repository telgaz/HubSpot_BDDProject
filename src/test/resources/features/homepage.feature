
  Feature: HubSpot Home Page Feature

    Background:
      Given I am on hubspot home page

      @homePage
      Scenario: Verify account name
        When I get home page header
        And I get logged in user account name
        Then I click on contacts button



