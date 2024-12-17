# Use the official Node.js image
FROM mcr.microsoft.com/playwright:v1.42.0-jammy

# Set the working directory
WORKDIR /app

# Copy package files
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm install

# Copy the entire project
COPY . .

# Install Playwright browsers
RUN npx playwright install --with-deps

# Command to run tests
CMD ["npx", "playwright", "test"]
