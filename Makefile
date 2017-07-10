install: install-deps

# run:
# 	npm run babel-node -- 'src/bin/page-loader.js' 10

install-deps:
	yarn

build:
	rm -rf dist
	npm run build

test:
	npm test

testwatch:
	npm testwatch

lint:
	npm run eslint -- src __tests__

publish:
	npm publish

.PHONY: test