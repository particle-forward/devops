FROM node:alpine

# Create app directory
WORKDIR ./

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY . ./

# If you are building your code for production
RUN npm install --silent --no-audit

# build files
RUN npm run build

# Bundle app source
COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]
