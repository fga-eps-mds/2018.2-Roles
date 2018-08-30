FROM node:10

RUN npm i yarn
WORKDIR app
ADD . /app
RUN yarn global add docusaurus-init && npm install --global docusaurus-init
RUN yarn install
