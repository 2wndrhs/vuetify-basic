module.exports = {
    publicPath: '/absproxy/8081',
    devServer: {
		public: 'http://34.64.97.184/absproxy/8081',
		sockPath: "/absproxy/8081/sockjs-node",
		port: 8081,
		disableHostCheck: true,
		overlay: false
	},
    transpileDependencies: [
      'vuetify'
    ]
}
