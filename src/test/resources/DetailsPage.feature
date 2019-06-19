Feature: Access to the Contacts Orchestrator Solution's (COS) Landing Page
  As a user
  I want to access to the URL address provided for the details page
  So that I can see the details of the searched user


#  #Verify if details button is working
#  Scenario Outline: Contacts table contains the details button and redirects to the Details page
#    Given I access the landing page of COS
#    When I click on the Details button on row with id "<id>"
#    Then I should be redirected to the details page of the "<id>" user
#
#    Examples:
#      | id  |
#      | 1   |
#      | 5   |
#      | 45  |
#      | 219 |

  #Verify wrong link on details page
  Scenario Outline: Badly formatted contact link on Details page
    Given I enter the details page with the following case "<case>"
    Then I should be presented with an alarm box
    And Clicking the alarm box should redirect me to home page

    Examples:
      | case         |
      | justDetails  |
      | emptyId      |
      | unfilteredId |
      | incorrectId  |

  Scenario Outline: Get back to Landing page from the Details page
    Given I navigate on Details page of contact "<id>"
    When I press the back button
#    Then I return to the Landing Page

    Examples:
    | id |
    | 5  |