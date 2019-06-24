Feature: Access to the Contacts Orchestrator Solution's (COS) Duplicates page
  As a user
  I want to access the duplicate page
  So that I can see the list of the possible contacts duplicate available
  So that I can delete and add those at my will

#  #Verify if is on correct site
#  Scenario: Duplicate page's title and text contains "Duplicates"
#    Given I access the landing page of COS
#    When I click on the Duplicates
#    Then the title of the page should be "Duplicates"
#
#  Scenario: Duplicate page's contain the appropriate number of identified duplicates
#    Given I access the landing page of COS and want to go to duplicates
#    Then I should be able to see the number of duplicate contacts possible
#
#  Scenario Outline: Duplicate page's is coherent in its data
#    Given I access the landing page of COS and want to go to duplicates
#    Then I should be able to see the contact as is in the database ("<position>")
#    Examples:
#      | position      |
#      | first         |
#      | half-middle1  |
#      | middle        |
#      | half-middle2  |
#      | last          |
#
#  Scenario: Duplicate page's Go back to index button
#    Given I access the landing page of COS and want to go to duplicates
#    When I click on the Back to index button
#    Then I should be on the index page
#
#  Scenario: Duplicate page's Confirm button Automatic
#    Given I access the landing page of COS and want to go to duplicates
#    When I click on the Accept Automatically button
#    And I click on the Confirm button
#    Then I should be redirected to the duplicate Free page (Auto)
#
#  Scenario: Duplicate page's Confirm button Manual -- Correct
#    Given I access the landing page of COS and want to go to duplicates
#    When I click on each position, randomly
#    And I click on the Accept Manually button
#    And I click on the Confirm button
#    Then I should be redirected to the duplicate Free page (Manual)
#
#  Scenario: Duplicate page's Confirm button Manual -- Wrong
#    Given I access the landing page of COS and want to go to duplicates
#    And I click on the Accept Manually button
#    And I click on the Confirm button
#    Then An Alarm should appear stating that I need to fill everything