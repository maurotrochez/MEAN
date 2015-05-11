var users = require('../../app/controllers/users.server.controller');
var passport = require('passport');

module.exports = function (app) {
	app.route('/signup')
		.get(users.renderSignup)
		.post(users.signup);

	app.route('/signin')
		.get(users.renderSignin)
		.post(passport.authenticate('local', {
			successRedirect: '/',
			failureRedirect: '/signin',
			failureFlash: true
		}));

	app.get('/signout', users.signout);

	app.get('/oauth/facebook', passport.authenticate('facebook', {
		failureRedirect: '/signin',
		scope: ['email']
	}), function (req, res) {

	});

	app.get('/oauth/facebook/callback', passport.authenticate('facebook',{
		failureRedirect: '/signin',
		successRedirect: '/'
	}), function (req, res) {
		res.redirect('/');
	});

	app.get('/oauth/twitter', passport.authenticate('twitter', {
		failureRedirect: '/signin'
	}));

	app.get('/oauth/twitter/callback', passport.authenticate('twitter', {
		failureRedirect: '/signin',
		successRedirect: '/'
	}));

	app.get('/oauth/google', passport.authenticate('google', {
		failureRedirect: '/signin',
		scope: [
			'https://www.googleapis.com/auth/userinfo.profile',
			'https://www.googleapis.com/auth/userinfo.email',
			'https://www.googleapis.com/auth/plus.me',
			'https://www.googleapis.com/auth/plus.login'
		]
	}));

	app.get('/oauth/google/callback', passport.authenticate('google', {
		failureRedirect: '/signin',
		successRedirect: '/'
	}));

	/*app.route('/users')
		.post(users.create)
		.get(users.list);

	app.route('/users/:userId')
		.get(users.read)
		.put(users.update)
		.delete(users.delete);*/

	/*app.param('userId', users.userById);*/
};
