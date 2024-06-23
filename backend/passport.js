const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require("passport");
const User = require('./models/User');
const jwt = require('jsonwebtoken');
const cors = require('cors');

require('dotenv').config();

passport.use(User.createStrategy());

passport.use(new GoogleStrategy({
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  callbackURL: "http://localhost:5000/auth/google/callback",
  userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo",
  scope: ['email ', 'profile', ] 
}, function(accessToken, refreshToken, profile, cb) {
  console.log("Google OAuth Profile:", profile); 
  const { id, displayName, photos, emails } = profile;
  const profilePicture = photos && photos.length > 0 ? photos[0].value : null;
  const email = emails && emails.length > 0 ? emails[0].value : null;

  User.findOrCreate({ 
    userId: id, 
    username: displayName,
    profilePicture,
    email :"sew01831@gmail.com"
  }, function (err, user) {
    if (err) { return cb(err); }
    
    const token = jwt.sign({ _id: user._id }, process.env.accessToken_secret, { expiresIn: "1h" });
    return cb(null, user, token);
  });
}));


passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(async function(id, done) {
  try {
    const user = await User.findById(id);
    console.log("deserializeUser: ", user);
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});

module.exports = passport;
