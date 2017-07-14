install: install-deps

install-deps:
	yarn

build:
	rm -rf dist
	npm run build

test:
	npm test

testwatch:
	npm run testwatch

lint:
	npm run eslint -- src __tests__

publish:
	npm publish

.PHONY: test