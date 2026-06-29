# Use the official Playwright Docker image.
# This image already includes:
# - Node.js
# - Playwright
# - Chromium, Firefox, and WebKit
# - All required browser dependencies
FROM mcr.microsoft.com/playwright:v1.60.0-noble

# Set the working directory inside the container.
WORKDIR /app

# Copy package files first.
# This allows Docker to cache npm install if dependencies
# have not changed between builds.
COPY package*.json ./

# Install project dependencies.
RUN npm install

# Copy the remainder of the project into the container.
COPY . .

# Run the Playwright test suite when the container starts.
CMD ["npm", "test"]