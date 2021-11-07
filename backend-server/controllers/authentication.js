const jwt = require('jwt-simple');

const config = require('../config');
const User = require('../models/user');

function tokenForUser(user) {
    const timestamp = new Date().getTime();
    return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}

exports.signin = function (request, response, next) {
    response.send({ token: tokenForUser(request.user) });
};

exports.signup = function (request, response, next) {
    const email = request.body.email;
    const password = request.body.password;

    if (!email || !password) {
        return response
            .status(422)
            .send({ error: 'Email and Password must be provided' });
    }

    //check if user exists
    if (
        User.findOne({ email: email }, function (err, existingUser) {
            if (err) {
                return next(err);
            }

            if (existingUser) {
                return response.status(422).send({ error: 'Email in user' });
            }

            //if user does not exists, create a new user
            const user = new User({
                email: email,
                password: password,
            });

            user.save(function (err) {
                if (err) {
                    return next(err);
                }

                response.json({ token: tokenForUser(user) });
            });
        })
    );
};
