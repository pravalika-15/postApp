const passport = require("passport");
const googleStrategy = require("passport-google-oauth20").Strategy;

passport.use(
  new googleStrategy(
    {
      clientID:
        "1076428964078-f36rp3c81jkh3lq0nv9itonkuhl6r87p.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: "/auth/google/callback",
    },
    (accessToken, refrehToken, profile, done) => {
      console.log(accessToken);
      console.log(refrehToken);
      console.log(profile);
    }
  )
);

// console.cloud.google
// create a new project
// go to apis and services
// OAuth consent screen
// external application
// app logo is not recommended, verification takes time
// one consent screen for one project
// we have to create credentials
// OAuth client ID
// copy, these details visible only once
// client id : 1076428964078-f36rp3c81jkh3lq0nv9itonkuhl6r87p.apps.googleusercontent.com
// client secret : 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

// http://localhost:3000/auth/google/callback?code=4%2F0AbUR2VMLDtWPX6C54v6HAEV-3BBheELXbgxWEufrB1k9ngLvRZqfySzN4r6UML0lCoMttg&scope=email+profile+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email+openid&authuser=1&prompt=consent#
