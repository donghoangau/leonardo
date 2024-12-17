module.exports = {
    // Locators for the main Page
    mainPage: {
      proxyButton: '#onetrust-accept-btn-handler',
      startToCreate: '.primary-button'
    },
    createPage: {
      customScramblerText: 'h1.uppercase.text-black.text-2xl',
      textDescription: 'textarea[name="prompt"]',
      generateButton: '.secondary-button',
      waitingGeneratingText: '.uppercase.text-primary'
    },
    formFields: {
      firstName: 'input[name="firstName"]',
      lastName: 'input[name="lastName"]',
      email: 'input[name="email"]',
      dropDownMenu: 'button[role="combobox"][aria-label="Select Country"]',
      country: 'text=Australia',
      termCheck: '#terms-check',
      policyCheck: '#privacy-policy-check',
      submit: 'button.secondary-button:has-text("Submit")'
    },
    imagesSelect: {
      fourImages: '.col-span-2 div.relative button:has(img[alt="generated image"])',
      selectedImage: 'xpath=//div[@class="col-span-2"]/img',
      downloadButton: 'button:has-text("DOWNLOAD")',
      nextButton: 'button:has-text("Next")'
    }
  }
  