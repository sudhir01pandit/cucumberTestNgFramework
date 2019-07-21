Feature: Start Ordering

Scenario Outline: Navigate to start ordering screen

Given User is on application landing page
Then  Click on Sign In link in landing page
When  User enters <username> and <password> and logs in
Then  User should be succesfully logged in  
When  User clicks on Start ordering button
Then  User should be navigated to Start ordering screen 

Examples:
|username			        |password  |
|sudhir01pandit@gmail.com	|burger01  |