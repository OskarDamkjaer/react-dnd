module.exports = {
	rootDir: __dirname,
	setupFilesAfterEnv: ['<rootDir>/jest/setup-testing-library.js'],
	collectCoverageFrom: [
		'packages/*/src/**/*.{ts,tsx}',
		'!**/__tests__/**',
		'!packages/build/**',
		'!packages/docsite/**',
		'!packages/*test*/**',
	],
	testMatch: [
		'<rootDir>/__tests__/**/?(*.)(spec|test).ts(x|)',
		'<rootDir>/packages/*/src/**/__tests__/**/?(*.)(spec|test).ts(x|)',
	],
}
