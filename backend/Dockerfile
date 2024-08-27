# Use the official Node.js image as a base
FROM node:latest

# Set the working directory in the container
WORKDIR /app/backend

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port the app runs on
EXPOSE 5000

# Define environment variable for MongoDB connection
ENV MONGO_URI=mongodb://mongo:27017/recipe-recommender

# Run the seed script to populate the database
CMD ["bash", "-c", "node seed.js && node index.js"]
