#Feature: Access to the Contacts Orchestrator Solution's (COS) Landing Page
#  As a user
#  I want to access to the URL address provided for the details page
#  So that I can see the details of the searched user
#
#
#  #Verify if details button is working
#  Scenario Outline: : Contacts table contains the details button and redirects to the Details page
#    Given I access the landing page of COS
#    When I click on the Details button on row with id "<id>"
#    Then I should be redirected to the details page of the "<id>" user
#
#    Examples:
#      | id  |
#      | 5   |
#      | 45  |