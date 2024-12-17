# scramblerducati E2E Test Using Playwright

This project contains an automated end-to-end (E2E) test for the scramblerducati website using Playwright in JavaScript. 
The test simulates a complete user flow of creating 4 images by AI

---

## Prerequisites

**Node.js**: Ensure that Node.js is installed. Download it from [Node.js](https://nodejs.org/).


---

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/donghoangau/leonardo
   cd leonardo

2. **Install Dependencies:**
   Go to directory folder and run:

   ```bash
   npm install @playwright/test --save-dev

3. **Install Chromium Browser:**

   ```bash
   npx playwright install

4. **Run test:**
    To run the test

   ```bash
    npx playwright test
    npx playwright test --headed

5. **Show test report:**

   ```bash
   npx playwright show-report

