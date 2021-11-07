const passport = require('passport');

const passportService = require('./services/passport');
const Authentication = require('./controllers/authentication');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

module.exports = function (app) {
    app.get('/', requireAuth, function (request, response) {
        response.send({ hi: 'there' });
    });

    app.post('/signup', Authentication.signup);

    app.post('/signin', requireSignin, Authentication.signin);
};
