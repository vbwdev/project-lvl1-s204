install:
	npm install

start:
	npm run babel-node -- src/bin/brain-games.js

publish:
	@read -p "Enter type of version (major | minor | patch): " type; \
	npm version $$type
	npm publish
	git push