# `angular-seed` — the seed for AngularJS apps

This project is an [AngularJS][angularjs] web app for Jeopardy.
URL:  <h ref= "https://jeopardyesong.herokuapp.com/">https://jeopardyesong.herokuapp.com/</h>
Instructions:
1. Type in URL above. 
2. First box: type in a category ID value (integer)
3. Second box: type in a difficulty level: 100,200,300,400,500
4. Third box: type in a minimum date in date format YYYY-MM-DD **PLEASE NOTE: the Jeopardy API call only works when both a minimum and maximum date is inputted
5. Fourth box: type in maximum date in date format YYYY-MM-DD
6. Optional: open up Inspector (F12) for the web page and go to Console to see the Ajax call each time something is typed in
EXAMPLE call: Category ID 7, Difficulty Level 500, DATES 1985-02-08, 1991-10-30

This was my first time using APIs and learning AngularJS! I had only taken an Intro CS class prior to this but I really enjoyed learning something outside of class and actually doing a real project that people can access online!

Things I learned/features I implemented:
- Searching for category ID, difficulty level, dates (calls to API every time a search is typed in). Initially, I only made one call and filtered by these categories
- How to use APIs/Angular (thanks to many online tutorials and Stack Overflow)
- Multiple searches so that you can search for category ID AND difficulty level
 
What I would implement if I had more time:
- UI/UX Design, specifically
- Button to make API call to random 