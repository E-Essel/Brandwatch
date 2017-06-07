@Reg2
Feature: As a user 
I want to be able to 
Search for different location

Scenario Outline: Search Multiple Locations
Given I am on landing page of "google maps"
And I click the "Search box directions" button
When I enter "From" as "<Location>"
And I enter "To" as "<Destination>"
And I click the "Search" button
Then "<Selected locality>" is displayed

Examples:
| Location |
| Brighton  |
| Wickham   |
| Liverpool |