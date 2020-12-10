// //dashboard
// <link rel="stylesheet" href="style.css">
// <html>
// <h1>Dashboard</h1>
// <p> Welcome <%= name %> </p>
// <p><%= email %></p>

// <form method="post" action="/users/preferences">
//     <fieldset>

//     <legend>What is Your Favorite news?</legend>
//     <input id='sports' type="checkbox" name="favorite_sports" value="Sports" >Sports<br>
//     <input id='cars' type="checkbox" name="favorite_cars" value="Cars" >Cars<br>
//     <input id='javascript' type="checkbox" name="favorite_javascript" value="Javascript">Javascript<br>
//         <br>
//     <input id="preferencesSubmit" type="submit" value="Submit now">
//     </fieldset>
// </form>

// <script src="/preferences.js"></script>

//<a href="/users/logout">Logout</a>
// </html>

// //Welcome
// <!doctype html>
// <html>
// <head>
//     <h1>Welcome my friends from Codesmith!!!</h1>
//     <link rel="stylesheet" href="style.css">
//     <style>
//         body         { padding-top:80px; }
//     </style>
// </head>
// <body>

//   <div class="container">
//     <div class="mainLogin">

//         <h1><span class="createAcc"></span> Let's create an account!!!!</h1>

//         <!-- Register -->
//         <a href="/users/register" class="btn btn-primary btn-block mb-2">Register</a>

//         <hr>
//         <!-- Login -->
//         <p>You are so cool!!... you have an account already!!! <a href="/users/login">Signup</a></p>

//     </div>
//     </div>
//     </body>
//     </html>
// <!-- <html>
//   <div id="intro">
// <h1>Welcome!</h1>
// <div id="welcomeSite">
// <p>Let's create an account!!!! </p>
// <a href="/users/register" class="btn btn-primary btn-block mb-2">Register</a>
// </div>
// <a href="/users/login"> Login</a>
// </div>
// </html> --></head>

// // LOGIN

// <link rel="stylesheet" href="style.css">

// <h1> Login </h1>
// <%- include ('./partials/messages') %>
// <form action="/users/login" method="POST">
// <div>
// <label for="email">Email</label>
// <input
// type="email"
// name="email"
// placeholder="Enter Email"
// />
// </div>
// <div>
//     <label for="password">Password</label>
//     <input
//       type="password"
//       name="password"
//       placeholder="Enter Password"
//     />

// </div>
// <button type="submit" class="btn btn-primary btn-block">Login</button>
// <a href="/users/register" class="btn btn-primary btn-block mb-2"
//   >Register</a>
// </form>
