# 1. Select the base image
FROM node

# 2. Set the working directory inside the container
WORKDIR /app

# 3. Copy package.json and package-lock.json
COPY package*.json ./

# 4. Install application dependencies
# Use --omit=dev in production to skip installing devDependencies
RUN npm install --omit=dev

# 5. Copy the rest of your application code
COPY . .

# 6. Expose the port the app runs on
EXPOSE 3000

# 7. Define the command to start the app
CMD [ "node", "Server.js" ]