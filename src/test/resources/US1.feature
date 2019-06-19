Feature: Access to the Contacts Orchestrator Solution's (COS) Landing Page
  As a user
  I want to access to the URL address provided for the landing page
  So that I can see the list of the contacts available
#
#  #Verify if is on correct site
#  Scenario: Landing page's title and text contains "Contacts Landing Page"
#    Given I access the landing page of COS
#    Then the title of the page should be "Contacts Landing Page"
#
#  #Verify if all contacts were loaded
#  Scenario: Landing page contains all contacts available in the
#    Given I access the landing page of COS
#    Then I should see exactly the same amount of contacts that exist in the database
#
#  #Verify if table data seems coherent with database
#  Scenario: Landing page seems to have data that is coherent with the database
#    Given I access the landing page of COS
#    Then I should see the contact as in the database position
#
#  #Verify if table can be sortable
#  Scenario Outline: Landing page contains the table and columns are sortable
#    Given I access the landing page of COS
#    When I sort the column "<column>"
#    Then The first column should contain the most relevant contact regarded to the sorted "<column>"
#
#    Examples:
#      | column    |
#      | ID        |
#      | GivenName |
#      | Surname   |
#      | Phone     |
#      | Source    |
#      | City      |
#
#  #Verify if search bar can be used to filter
#  Scenario Outline: Landing page contains the table and the search bar is operational
#    Given I access the landing page of COS
#    When I search for "<search>"
#    Then I should only see columns that are related to what I've just searched, related to "<type>" ("<search>")
#
#    Examples:
#      | search    | type       |
#      | Viseu     | City       |
#      | Joao      | GivenName  |
#      | 234216838 | Phone      |
#      | Almeida   | Surname    |
#      | Something | GivenName  |
#
#  #Verify if search bar and table can be sortable simultaneously
#  Scenario Outline: Landing page contains the table and the search bar is operational, along with columns sortable
#    Given I access the landing page of COS
#    When I search for "<search>"
#    And I sort the column "<column>"
#    Then I should be able to see the sorted table by "<column>", while only appearing what I searched for, related to "<search>"
#
#    Examples:
#      | search  | column    |
#      | Joao    | ID        |
#      | Joao    | GivenName |
#      | Joao    | Surname   |
#      | Joao    | Phone     |
#      | Joao    | City      |
#
#  #Verify if pagination works
#  Scenario Outline: Landing page contains the table and the pagination can be used
#    Given I access the landing page of COS
#    When I increase the pagination to "<pagination>"
#    Then I should be able to see the number of contacts related to "<pagination>"
#
#    Examples:
#      | pagination |
#      | 10         |
#      | 25         |
#      | 50         |
#      | 100        |

#  #Verify if sources is filled
#  Scenario: Landing page contains the possible sources
#    Given I access the landing page of COS
#    Then I should be able to see the possible sources
#
#  #Verify if sources are working
#  Scenario Outline: Landing page contains the selector related to the source
#    Given I access the landing page of COS
#    When I want to filter for a "<source>"
#    Then I should only be able to see the contacts of that specific "<source>"
#
#    Examples:
#      | source   |
#      | All      |
#      | Twitter  |
#      | Facebook |
#      | LinkedIn |
#      | Skype    |
#
#  #Verify if details button is working
#
#
#  #Verify if duplicates button is working
#  Scenario: Landing page contains the duplicate button and redirects to the correct page
#    Given I access the landing page of COS
#    When I click on the Duplicates
#    Then I should be redirected to the duplicate pages


  #SELECTOR FOR SOURCES
  #Text label exists
  #Text label says "Select your contacts source"
  #Selector exists
  #Selector exists on'right next' to the text label
  #Selector has default value 'ALL'
  #Selector exists when there is no contact sources, and displays only 'ALL' option
  #Selector lists all contacts sources (sources.count)
  #Button exits
  #Button exists next to selector
  #Button text says 'Get contacts'
  #Button is always enabled
  #When selector has 'ALL' as selected option, the button get data from this link /contacts
  #When selector has a specific selected option, the button get data from this link /contacts/bysource/{selectedsource}

  #CONTACTS IN TABLE
  #All contacts need to be loaded in the table
  #All contact parameters are inside a column
  #Empty contact parameter means the correct contact column is empty (or 'NULL'?)
  #Each contact parameter is in the correct column

  #PAGINATION
  #Pagination Selector exists
  #Pagination has as default value
  #There are x,y,z values in the selector
  #Table presents at most as much contacts as the selector's value
  #Button next to paginator selector exists
  #Button is next to paginator
  #Button text is 'Paginate'
  #When clicked, table presents at most the number of contacts as the selector's value

  #CHECK DUPLICATES LINK
  #Chack duplicates link exists
  #Check duplicates link is above table
  #Check duplicates link redirects to this link (make it)