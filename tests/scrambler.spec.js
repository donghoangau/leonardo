//onetrust-accept-btn-handler

const { test, expect } = require('@playwright/test');
const selector = require('./utilities/scramblersSelectors');

test.describe('Create Your Custom Scrambler Ducati”', () => {

    // Given I am on the Ducati Scrambler website
    test.beforeEach(async ({ page }) => {
        await page.goto('https://hacktheicon.scramblerducati.com/');
        const mainPageTitle = await page.title()
        expect(mainPageTitle).toContain('Scrambler Ducati meets Artificial Intelligence')
        await page.click(selector.mainPage.proxyButton)
        const customScramblerText = await page.textContent('h1.font-extrabold')
        expect(customScramblerText).toBe('Scrambler Ducati meets Artificial Intelligence')
    })

    // Test Case 1: Open main page and click on Start to Create
    test.only('Start to create on Ducati Scrambler website', async ({ page }) => {
        // test.setTimeout(60000)

        // When I click “Start to Create”
        await page.click(selector.mainPage.startToCreate)
        // Then I should see the “Create Your Custom Scrambler Ducati” page
        await expect(page).toHaveURL('https://hacktheicon.scramblerducati.com/create')
        const createPageTitle = await page.title()
        expect(createPageTitle).toContain('Create your custom Scrambler Ducati with AI')

        // Given I am on the image creation page
        const customScramblerText = await page.textContent(selector.createPage.customScramblerText)
        expect(customScramblerText).toBe('CREATE YOUR CUSTOM SCRAMBLER DUCATI')

        // When I fill in the prompt and click “Generate”   
        await page.fill(selector.createPage.textDescription, 'Bicycle')
        await page.click(selector.createPage.generateButton)

        // When I fill in my details and accept the terms
        await page.fill(selector.formFields.firstName, 'My Firstname')
        await page.fill(selector.formFields.lastName, 'My LastName')
        await page.fill(selector.formFields.email, 'test@gmail.com')
        const dropdown = page.locator(selector.formFields.dropDownMenu).nth(0);

        // Click to open the dropdown
        await dropdown.click();
        await page.click(selector.formFields.country)
        await page.click(selector.formFields.termCheck)
        await page.click(selector.formFields.policyCheck)

        // And I click “Submit”
        const submitButton = await page.locator(selector.formFields.submit).first();
        await submitButton.waitFor({ state: 'visible', timeout: 10000 });
        await submitButton.click()

        // And I wait for the generation process to complete
        // Then I should be able to choose one of the 4 images
        const imag = await page.locator(selector.imagesSelect.fourImages).nth(0)
        await imag.waitFor({ state: 'visible', timeout: 60000 })
        await imag.click()

        // Then I should see the 4 generated images
        const images = await page.locator(selector.imagesSelect.fourImages)
        const imageCount = await images.count()
        console.log(`Number of generated images: ${imageCount}`)
        expect(imageCount).toBe(4)

        await page.click(selector.imagesSelect.nextButton)

        // Wait for the final image to load
        const finalImage = await page.locator(selector.imagesSelect.selectedImage)

        await finalImage.waitFor({ state: 'visible', timeout: 5000 })


        // Evaluate the natural dimensions of the image
        const { naturalWidth, naturalHeight } = await finalImage.evaluate((img) => {
            return {
                naturalWidth: img.naturalWidth,
                naturalHeight: img.naturalHeight,
            }
        })

        // Output image resolution
        console.log(`Image Resolution: ${naturalWidth}x${naturalHeight}`)

        // Assert resolution of the image should be 2056 x 1368
        expect(naturalWidth).toBe(2056)
        expect(naturalHeight).toBe(1368)
        await page.click(selector.imagesSelect.selectedImage)
    })

})