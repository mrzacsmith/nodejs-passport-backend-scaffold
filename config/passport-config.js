const passport = require('passport')
const GitHubStrategy = require('passport-github2').Strategy

passport.serializeUser((user, none) => {
  done(null, user)
})

passport.deserializeUser((user, none) => {
  done(null, user)
})


passport.use(new GitHubStrategy (
  {
    clientID: process.env.GITHUB_ID,
    clientSecret: process.env.GITHUB_SECRET,
    callbackURL: process.env.GITHUB_CALLBACK_URL
  }, (accessToken, refreshToken, profile, done) => {
    // console to see the return form the callback
    console.log(profile)
    done(null, profile)
  }
))
