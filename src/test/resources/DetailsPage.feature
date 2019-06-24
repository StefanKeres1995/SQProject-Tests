Feature: Access to the Contacts Orchestrator Solution's (COS) Landing Page
  As a user
  I want to access to the URL address provided for the details page
  So that I can see the details of the searched user


#  #Verify if details button is working
#  Scenario Outline: Contacts table contains the details button and redirects to the Details page
#    Given I access the landing page of COS
#    When I click on the Details button on row with id "<position>"
#    Then I should be redirected to the details page of the user
#
#    Examples:
#      | position      |
#      | first         |
#      | half-middle1  |
#      | middle        |
#      | half-middle2  |
#      | last          |
#
#  #Verify wrong link on details page
#  Scenario Outline: Badly formatted contact link on Details page
#    Given I enter the details page with the following case "<case>"
#    Then I should be presented with an alarm box
#    And Clicking the alarm box should redirect me to home page
#
#    Examples:
#      | case         |
#      | justDetails  |
#      | emptyId      |
#      | unfilteredId |
#      | incorrectId  |
#
#  Scenario Outline: Get back to Landing page from the Details page
#    Given I access the landing page of COS and want to see the details of contact "<id>"
#    When I press the back button
#    Then I return to the Landing Page
#
#    Examples:
#    | id |
#    | 5  |

  Scenario Outline: Load contact image on Details page
    Given I access the landing page of COS and want to see the details of contact "<id>"
    Then I can see the contact image

    Examples:
    | id |
    | 5  |