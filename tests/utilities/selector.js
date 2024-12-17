// utilities/selector.js

module.exports = {
    mainPage: {
        proxyButton: '#onetrust-accept-btn-handler', // Add exact selector
        startToCreate: 'button:has-text("Start to Create")',
    },
    createPage: {
        customScramblerText: 'h1.font-extrabold',
        textDescription: 'textarea[name="description"]',
        generateButton: 'button:has-text("Generate")',
        waitingGeneratingText: 'div:has-text("Your Generation is in progress. It may take up to a minute.")',
    },
    formFields: {
        firstName: 'input[name="firstName"]',
        lastName: 'input[name="lastName"]',
        email: 'input[name="email"]',
        countryDropdown: 'button[role="combobox"][aria-label="Select Country"]',
        countryOption: 'text=Australia',
        termsCheckbox: '#terms-check',
        privacyPolicyCheckbox: '#privacy-policy-check',
    },
    imageSelectors: {
        generatedImage: '.col-span-2 div.relative button:has(img[alt="generated image"])',
        nextButton: 'button:has-text("Next")',
        finalImage: 'xpath=//div[@class="col-span-2"]/img',
        downloadButton: 'button:has-text("DOWNLOAD")',
    }
}
