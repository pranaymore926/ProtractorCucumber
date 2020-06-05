Feature:  I am going t validate the calculator app

   Validate the calculator app and angular page 
   @calculatorTesting
   Scenario Outline: Scenario Outline name: Calculator add funtionality testing 

   Given i will navigate to "Calc" website 
   When I add two numbers "<key1>" and "<key2>"
   Then the output displayed should be "<key3>"
   Examples:
   | key1 | key2 | key3 |
   | 4  | 5  | 9  |
   | 6  | 5  | 11 |

#  Scenario: Calculator add funtionality testing 

#    Given i will navigate to "Calc" website 
#    When I add two numbers "6" and "4"
#    Then the output displayed should be "10"

 @angularTesting  
Scenario Outline: Scenario Outline name: Angular JS website functionality 

   Given i will navigate to "angularjs" website 
   When I clicked on header link.
   And you will navigate to angular webpage.
   Then enter "<key>" text in search box.
   Examples:
   | key |
   | Hell-O!|
   | Obasama |