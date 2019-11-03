# `angular-seed` — the seed for AngularJS apps

This project is an [AngularJS] web app for Jeopardy.
URL:  <h ref= "https://jeopardyesong.herokuapp.com/app/index.html">https://jeopardyesong.herokuapp.com/app/index.html</h>

<b>Instructions:</b>
1. Type in URL above and wait for the page to load (Table should fill up with Jeopardy values).
2. First box: type in a category ID value (integer)
3. Second box: type in a difficulty level: 100,200,300,400,500
4. Third box: type in a minimum date in date format YYYY-MM-DD **PLEASE NOTE: the Jeopardy API call only works when both a minimum and maximum date is inputted
5. Fourth box: type in maximum date in date format YYYY-MM-DD
6. Optional: open up Inspector (F12) for the web page and go to Console to see the Ajax call each time something is typed in

<h4>EXAMPLE call: Category ID 7, Difficulty Level 500, Dates 1985-02-08, 1991-10-30</h4>

This was <b>my first time</b> using APIs and learning AngularJS! I had only taken an Intro CS class prior to this but I really enjoyed learning something outside of class and actually doing a real project that people can access online!

<b>Things I learned/features I implemented:</b>
- Searching for category ID, difficulty level, dates (calls to API every time a search is typed in). Initially, I only made one call and filtered by these categories. Then, I learned about Angular watch to detect if property changes, then trigger new Ajax call.
- How to use APIs/Angular (thanks to many online tutorials and Stack Overflow)
- Multiple searches at the same time so that you can search for category ID AND difficulty level AND dates if you wanted to
 
<b>What I would implement if I had more time:</b>
- UI/UX Design, specifically modifying background, adding visual elements to make it feel more like a Jeopardy game, etc.
- Button to make API call to random: http://jservice.io/api/random
