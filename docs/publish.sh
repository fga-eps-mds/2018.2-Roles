echo $GH_NAME
echo $GH_EMAIL
echo $GH_TOKEN
echo " ** ** Begining build..."
cd website
git config --global user.name "${GH_NAME}"
git config --global user.email "${GH_EMAIL}"
echo "machine github.com login ${GH_NAME} password ${GH_TOKEN}" > ~/.netrc
yarn install && GIT_USER="${GH_NAME}" yarn run publish-gh-pages
