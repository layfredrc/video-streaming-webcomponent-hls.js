module.exports = {
	src_folders: ["tests"],

	webdriver: {
		start_process: true,
		server_path: "node_modules/chromedriver/lib/chromedriver/chromedriver",
		port: 3000,
	},

	test_settings: {
		default: {
			desiredCapabilities: {
				browserName: "chrome",
			},
		},
	},
};
