Feature: Access to the Contacts Orchestrator Solution's (COS) Duplicates Free page
  As a user
  I want to access the duplicate free page
  So that I can see the list of the contacts that aren't duplicate

  Scenario: Duplicate Free Page title should contains "Duplicate Free"
    Given I access that landing page of COS and want to go to the list of possible duplicates
    When I select random values
    And I click on the Accept Manually
    And I click on the Confirm
    Then the title of the duplicate page should be "Duplicate Free"

  Scenario: Duplicate Free Page contains all the duplicated that are marked as non-duplicate
    Given I access that landing page of COS and want to go to the list of possible duplicates
    And I select random values
    And I click on the Accept Manually
    And I click on the Confirm
    Then I should see the same number of contacts related to the non-duplicate component

  Scenario Outline: Duplicate Free Page seems to have data that is coherent with the duplicate free
    Given I access that landing page of COS and want to go to the list of possible duplicates
    When I select random values
    And I click on the Accept Manually
    And I click on the Confirm
    Then I should see the contact as in the duplicateFree database position, "<position>"

    Examples:
      | position      |
      | first         |
      | half-middle1  |
      | middle        |
      | half-middle2  |
      | last          |

  Scenario Outline: Duplicate Free Page contains the table and columns are sortable
    Given I access that landing page of COS and want to go to the list of possible duplicates
    When I select random values
    And I click on the Accept Manually
    And I click on the Confirm
    And I sort column "<column>"
    Then The first column should contain the most relevant contact regarded the sorted "<column>"

    Examples:
      | column    |
      | ID        |
      | GivenName |
      | Surname   |
      | Phone     |
      | Source    |
      | City      |

  Scenario Outline: Duplicate Free Page contains the table and the search bar is operational
    Given I access that landing page of COS and want to go to the list of possible duplicates
    When I select random values
    And I click on the Accept Manually
    And I click on the Confirm
    And I search in the search bar for "<search>"
    Then I should only see columns that are related to what I searched for ("<search>")

    Examples:
      | search    |
      | Viseu     |
      | Joao      |
      | 234216838 |
      | Almeida   |
      | Something |

  Scenario Outline: Duplicate Free Page contains the table and the search bar is operational, along with columns sortable
    Given I access that landing page of COS and want to go to the list of possible duplicates
    When I select random values
    And I click on the Accept Manually
    And I click on the Confirm
    And I search in the search bar for "<search>"
    And I sort column "<column>"
    Then I should be able to see the sorted table by "<column>", while only appearing what I have searched for, related to "<search>"

    Examples:
      | search  | column    |
      | Joao    | ID        |
      | Joao    | GivenName |
      | Joao    | Surname   |
      | Joao    | Phone     |
      | Joao    | City      |

  Scenario Outline: Duplicate Free Page contains the table and the pagination can be used
    Given I access that landing page of COS and want to go to the list of possible duplicates
    When I select random values
    And I click on the Accept Manually
    And I click on the Confirm
    And I increase the pagination to value "<pagination>"
    Then I should be able to see the number of contacts related to the "<pagination>"

    Examples:
      | pagination |
      | 10         |
      | 25         |
      | 50         |
      | 100        |

  Scenario: Duplicate Free Page contains the possible sources
    Given I access that landing page of COS and want to go to the list of possible duplicates
    When I select random values
    And I click on the Accept Manually
    And I click on the Confirm
    Then I should be able to see the possible sources related to the existing duplicates

  Scenario Outline: Duplicate Free Page contains the selector related to the source
    Given I access that landing page of COS and want to go to the list of possible duplicates
    When I select random values
    And I click on the Accept Manually
    And I click on the Confirm
    And I want to filter for one "<source>"
    Then I should only be able to see the contacts in that specific "<source>"

    Examples:
      | source   |
      | All      |
      | Twitter  |
      | Facebook |
      | LinkedIn |
      | Skype    |

  Scenario Outline: Duplicate Free Page contains the selector related to the source
    Given I access that landing page of COS and want to go to the list of possible duplicates
    When I select random values
    And I click on the Accept Manually
    And I click on the Confirm
    And I click on the "<position>" of a contact, related to details
    Then I should be in the details of the specific contact, related to "<position>"

    Examples:
      | position      |
      | first         |
      | half-middle1  |
      | middle        |
      | half-middle2  |
      | last          |

  Scenario: Duplicate Free page does in fact hide those contacts that were ommited
    Given I access that landing page of COS and want to go to the list of possible duplicates
    When I see the first table remember the name of the first position
    And I go back to the Index
    And I search for the remembered name
    And I annotate how many values were gotten
    And I access the Duplicate page again
    And I select random values except the first table
    And I click on the Confirm
    And I search for the name regarding the remembered name
    Then I should have less results than the value gotten before