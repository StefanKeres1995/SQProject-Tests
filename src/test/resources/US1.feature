Feature: Access to the Contacts Orchestrator Solution's (COS) Landing Page
  As a user
  I want to access to the URL address provided for the landing page
  So that I can see the list of the contacts available
  Scenario: Landing page's title and text contains "Contacts Landing Page"
    Given I access the landing page of COS
    Then the title of the page should be "Contacts Landing Page"

  Scenario: Landing page contains all contacts available in the
    Given I access the landing page of COS
    Then I should see exactly the same amount of contacts that exist in the database

  Scenario: Landing page seems to have data that is coherent with the database
    Given I access the landing page of COS
    Then I should see the same name as in the database position

  Scenario Outline: Landing page contains the table and columns are sortable
    Given I access the landing page of COS
    When I sort the column "<column>"
    Then The first column should contain the most relevant contact regarded to the sorted "<column>"

    Examples:
      | column    | column |
      | ID        | -1  |
      | GivenName | 4   |
      | Surname   | 11  |
      | Phone     | 7   |
      | Source    | 9   |
      | City      | 1   |
  #The table's header columns are sortable

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