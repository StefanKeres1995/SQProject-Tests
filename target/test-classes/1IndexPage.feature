Feature: 1 - Access to the Contacts Orchestrator Solution's (COS) Landing Page
  As a user
  I want to access to the URL address provided for the landing page
  So that I can see the list of the contacts available

  Scenario: Landing page's title and text contains "Contacts Landing Page"
    Given I access the landing page of COS
    Then the title of the page should be "Contacts Landing Page"

  Scenario: Landing page contains all contacts available in the
    Given I access the landing page of COS
    Then I should see exactly the same amount of contacts that exist in the database

  Scenario Outline: Landing page seems to have data that is coherent with the database
    Given I access the landing page of COS
    Then I should see the contact as in the database position, "<position>"

    Examples:
      | position      |
      | first         |
      | half-middle1  |
      | middle        |
      | half-middle2  |
      | last          |

  Scenario Outline: Landing page contains the table and columns are sortable
    Given I access the landing page of COS
    When I sort the column "<column>"
    Then The first column should contain the most relevant contact regarded to the sorted "<column>"

    Examples:
      | column    |
      | ID        |
      | GivenName |
      | Surname   |
      | Phone     |
      | Source    |
      | City      |

  Scenario Outline: Landing page contains the table and the search bar is operational
    Given I access the landing page of COS
    When I search for "<search>"
    Then I should only see columns that are related to what I've just searched ("<search>")

    Examples:
      | search    |
      | Viseu     |
      | Joao      |
      | 234216838 |
      | Almeida   |
      | Something |

  Scenario Outline: Landing page contains the table and the search bar is operational, along with columns sortable
    Given I access the landing page of COS
    When I search for "<search>"
    And I sort the column "<column>"
    Then I should be able to see the sorted table by "<column>", while only appearing what I searched for, related to "<search>"

    Examples:
      | search  | column    |
      | Joao    | ID        |
      | Joao    | GivenName |
      | Joao    | Surname   |
      | Joao    | Phone     |
      | Joao    | City      |

  Scenario Outline: Landing page contains the table and the pagination can be used
    Given I access the landing page of COS
    When I increase the pagination to "<pagination>"
    Then I should be able to see the number of contacts related to "<pagination>"

    Examples:
      | pagination |
      | 10         |
      | 25         |
      | 50         |
      | 100        |

  Scenario: Landing page contains the possible sources
    Given I access the landing page of COS
    Then I should be able to see the possible sources

  Scenario Outline: Landing page contains the selector related to the source
    Given I access the landing page of COS
    When I want to filter for a "<source>"
    Then I should only be able to see the contacts of that specific "<source>"

    Examples:
      | source   |
      | All      |
      | Twitter  |
      | Facebook |
      | LinkedIn |
      | Skype    |

  Scenario: Landing page contains the duplicate button and redirects to the correct page
    Given I access the landing page of COS
    When I click on the Duplicates
    Then I should be redirected to the duplicate pages