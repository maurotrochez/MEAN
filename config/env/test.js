module.exports = {
	db: 'mongodb://localhost/mean-test',
	sessionSecret: 'testSessionSecret',
	viewEngine: 'ejs',
	facebook: {
		clientId: '1659578757606857',
		clientSecret: 'b2466ce344e22257177b114981a23cdd',
		callbackURL: 'http://localhost:3000/oauth/facebook/callback'
	},
	twitter:{
		clientId: '0ROdKM09TpC6DjUdMduJGTrXp',
		clientSecret: 'GSEKj5XBTlHn1aUHBclbGuht06NP1n3kW3ldaVsNOJmAAzitVq',
		callbackURL: 'http://localhost:3000/oauth/twitter/callback'
	},
	google:{
		clientID: '780221256928-q7f1ar6kv15m7uobodmqlj33vstmo50n.apps.googleusercontent.com',
		clientSecret: 'aWglFkDQ-nVVs5ZqxtB-sLSL',
		callbackURL: 'http://localhost:3000/oauth/google/callback'
	}
};