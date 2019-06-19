Feature: Access to the Contacts Orchestrator Solution's (COS) Duplicates page
  As a user
  I want to access the duplicate page
  So that I can see the list of the possible contacts duplicate available
  So that I can delete and add those at my will

  #Verify if is on correct site
  Scenario: Duplicate page's title and text contains "Duplicates"
    Given I access the landing page of COS
    When I click on the Duplicates
    Then the title of the page should be "Duplicates"

  Scenario: Duplicate page's contain the appropriate number of identified duplicates
    Given I access the landing page of COS and want to go to duplicates
    Then I should be able to see the number of duplicate contacts possible

  Scenario Outline: Duplicate page's is coherent in its data
    Given I access the landing page of COS and want to go to duplicates
    Then I should be able to see the contact as is in the database ("<position>")
    Examples:
      | position      |
      | first         |
      | half-middle1  |
      | middle        |
      | half-middle2  |
      | last          |
