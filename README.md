

Exercise complete:

- I used yarn as a package manager instead of npm
- Used Axios for extra http requests
- Some problem on backend only with the id 61227d5453e7b5000940263e (can't delete or edit) error: "document not found"

# EM Angular Front-end Exercise


## Background


A travel agency desires to advertise fares in several markets (for this exercise we call market to the combination of country and language), but every market has different ways to display a fare format depending on the currency/market combination:

  
For example:

1.  In the United States when showing USD, fares should display the currency symbol, with cents.
    
2.  In Argentina when showing USD, fares should display only currency code and no cents.
    
3.  In Spain when showing EUR, fares should display the currency symbol after the price, no cents and the thousand delimiter should be a comma.
    
4.  In Germany when showing EUR, fares should display the currency symbol before the price, no cents and the thousand delimiter should be a dot.
    

## Exercise

Create a currency manager module in Angular 9+, where the travel agency can set up currency formats depending on the market needs. As stated in the previous paragraph, some of the customizable options are:

-   Show currency code or symbol
    
-   Currency shown after or before price
    
-   Show cents or no cents
    
-   Display format such as #,###.## or #.###,##
    
For example, a currency format such as $1,234.56 could have the format changed with the options above. Changing the currency symbol to the code, and moving the currency to after the price, and showing no cents would transform that format to: 1,234USD.

The module should allow the user to perform the following actions:

-   List all the stored currency formats, allowing the user to preview the formatting for said currency
    
-   Create a new currency format
    
-   Edit existing currency formats
    
-   Delete existing currency formats
  

 ### Instructions

-   Fork this repository and implement the module applying the theme style provided. The project contains Bootstrap, Material UI and some other assets you are free to use.

- - Some parts of the exercise have been started for you in the `src/app/modules/currency/` folder
    
-   Use REST endpoints provided to manipulate information. Find swagger **documentation** [here](https://drive.google.com/file/d/1UAXDumyujiel_Ej9tNysEpBgQpUg9WEn/view?usp=sharing).

- - API URL: `https://huentf367j.execute-api.us-east-1.amazonaws.com/test/`. Note: If you are getting CORS, remember to check your authorization!
    
-   You should be able to access each endpoint with the following API KEY: `5620Aku2K01otZ0HRlvfFaGThvpgvwcg72XsdjSd`
    
-   Use at least one custom directive. (No component directives or built-in angular directives)
    
-   Interface should take into account UX/UI best practices. Example: clear navigation, form should provide clear validation errors, etc. Make sure to show us your own CSS/SCSS styling!
    
-   When you complete the exercise, please provide a git repository of the forked project so we may view it when you are done.

  
 
# Setup

Use `npm install` to install the dependencies.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

# Contact Us
If you run into any issues, or have any questions, feel free to email me at `denis@everymundo.com`
