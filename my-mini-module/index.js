function hello() {
  return "Hey! This is my mini module. Cheers!";
}

module.exports = hello;

// Steps to follow to publish a module in npm.

// Step-1 :- Make an account in npm and log in.
// Step-2 :- Go to the command line in your project or module directory.
// Ex: C:\Users\admin\Desktop\Node Mini Projects\my-mini-module>
// Step-3 :- Run the command npm login.
// It will redirect you to npm website where you have to enter the OTP from the Authenticator app.
// Step-4 :- Check whether you are successfully logged in to the webiste by running the command npm whoami.
// Step-5 :- Now run the command npm publish and it will again redirect you to the npm website for authentication.
// Step-6 :- Once the authentication is done, you can go to the npm website under the profile section to see your uploaded module.

// To verify whether the module is working successfully or not install the module you published.
// After installing, run the module by creating a js file.
