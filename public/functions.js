import puppeteer from 'puppeteer';

(async () =>{
    const browser = await puppeteer.launch({
        "headless": false,
        "slowMo": 80, 
    });
    const page = await browser.newPage();
    page.goto('http://localhost:3000/')
//add
    await page.waitForSelector('#oneButton.shortButton.blue.numberKeys');
    await page.focus('#oneButton.shortButton.blue.numberKeys');
    await page.click('#oneButton.shortButton.blue.numberKeys');

    await page.waitForSelector('#addButton.shortButton.white.operatorKeys');
    await page.focus('#addButton.shortButton.white.operatorKeys');
    await page.click('#addButton.shortButton.white.operatorKeys');

    await page.waitForSelector('#twoButton.shortButton.blue.numberKeys');
    await page.focus('#twoButton.shortButton.blue.numberKeys');
    await page.click('#twoButton.shortButton.blue.numberKeys');

    await page.waitForSelector('#equalButton.shortButton.white.executorKey');
    await page.focus('#equalButton.shortButton.white.executorKey');
    await page.click('#equalButton.shortButton.white.executorKey');

//multi
    await page.waitForSelector('#sevenButton.shortButton.blue.numberKeys');
    await page.focus('#sevenButton.shortButton.blue.numberKeys');
    await page.click('#sevenButton.shortButton.blue.numberKeys');


    await page.waitForSelector('#decimalButton.shortButton.blue.numberKeys');
    await page.focus('#decimalButton.shortButton.blue.numberKeys');
    await page.click('#decimalButton.shortButton.blue.numberKeys');

    await page.waitForSelector('#sevenButton.shortButton.blue.numberKeys');
    await page.focus('#sevenButton.shortButton.blue.numberKeys');
    await page.click('#sevenButton.shortButton.blue.numberKeys');

    await page.waitForSelector('#multiplyButton.shortButton.white.operatorKeys');
    await page.focus('#multiplyButton.shortButton.white.operatorKeys');
    await page.click('#multiplyButton.shortButton.white.operatorKeys');

    await page.waitForSelector('#threeButton.shortButton.blue.numberKeys');
    await page.focus('#threeButton.shortButton.blue.numberKeys');
    await page.click('#threeButton.shortButton.blue.numberKeys');

    await page.waitForSelector('#equalButton.shortButton.white.executorKey');
    await page.focus('#equalButton.shortButton.white.executorKey');
    await page.click('#equalButton.shortButton.white.executorKey');
//subtract
    await page.waitForSelector('#sixButton.shortButton.blue.numberKeys');
    await page.focus('#sixButton.shortButton.blue.numberKeys');
    await page.click('#sixButton.shortButton.blue.numberKeys');

    await page.waitForSelector('#minusButton.shortButton.white.operatorKeys');
    await page.focus('#minusButton.shortButton.white.operatorKeys');
    await page.click('#minusButton.shortButton.white.operatorKeys');

    await page.waitForSelector('#fiveButton.shortButton.blue.numberKeys');
    await page.focus('#fiveButton.shortButton.blue.numberKeys');
    await page.click('#fiveButton.shortButton.blue.numberKeys');

    await page.waitForSelector('#equalButton.shortButton.white.executorKey');
    await page.focus('#equalButton.shortButton.white.executorKey');
    await page.click('#equalButton.shortButton.white.executorKey');
    //divide
    await page.waitForSelector('#eightButton.shortButton.blue.numberKeys');
    await page.focus('#eightButton.shortButton.blue.numberKeys');
    await page.click('#eightButton.shortButton.blue.numberKeys');

    await page.waitForSelector('#divideButton.shortButton.white.operatorKeys');
    await page.focus('#divideButton.shortButton.white.operatorKeys');
    await page.click('#divideButton.shortButton.white.operatorKeys');

    await page.waitForSelector('#fourButton.shortButton.blue.numberKeys');
    await page.focus('#fourButton.shortButton.blue.numberKeys');
    await page.click('#fourButton.shortButton.blue.numberKeys');

    await page.waitForSelector('#equalButton.shortButton.white.executorKey');
    await page.focus('#equalButton.shortButton.white.executorKey');
    await page.click('#equalButton.shortButton.white.executorKey');

    //negativeButton shortButton blue
    //wild card
    
    await page.waitForSelector('#nineButton.shortButton.blue.numberKeys');
    await page.focus('#nineButton.shortButton.blue.numberKeys');
    await page.click('#nineButton.shortButton.blue.numberKeys');

    await page.waitForSelector('#zeroButton.shortButton.blue.numberKeys');
    await page.focus('#zeroButton.shortButton.blue.numberKeys');
    await page.click('#zeroButton.shortButton.blue.numberKeys');

    await page.waitForSelector('#zeroButton.shortButton.blue.numberKeys');
    await page.focus('#zeroButton.shortButton.blue.numberKeys');
    await page.click('#zeroButton.shortButton.blue.numberKeys');

    //clearButton shortButton blue
    await page.waitForSelector('#clearButton.shortButton.blue');
    await page.focus('#clearButton.shortButton.blue');
    await page.click('#clearButton.shortButton.blue');

    await page.waitForSelector('#negativeButton.shortButton.blue');
    await page.focus('#negativeButton.shortButton.blue');
    await page.click('#negativeButton.shortButton.blue');

    await page.waitForSelector('#multiplyButton.shortButton.white.operatorKeys');
    await page.focus('#multiplyButton.shortButton.white.operatorKeys');
    await page.click('#multiplyButton.shortButton.white.operatorKeys');

    await page.waitForSelector('#threeButton.shortButton.blue.numberKeys');
    await page.focus('#threeButton.shortButton.blue.numberKeys');
    await page.click('#threeButton.shortButton.blue.numberKeys');

    await page.waitForSelector('#equalButton.shortButton.white.executorKey');
    await page.focus('#equalButton.shortButton.white.executorKey');
    await page.click('#equalButton.shortButton.white.executorKey');

    await page.waitForSelector('#allClearButton.longButton.white');
    await page.focus('#allClearButton.longButton.white');
    await page.click('#allClearButton.longButton.white');

    await this.page.waitFor(2000);
    await browser.close();
})();
// test('Add Calculation', async() => {
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
//     const app = 'C:\Users\Baby\Documents\School-Senior\Full Stack II\calculator\public\index.html';
//     await page.goto(app);

//     await page.click('div#oneButton');
// })

// describe('ok', () =>{
//     it('ok', async function(){
//         const browser = await puppeteer.launch({headless: false})
//         const page = await browser.newPage();
//         await page.goto('https://www.youtube.com/watch?v=OTEJCSul4H0&list=PL-hNDoK1-od_-4jX3ZL8LMpvlxmZ4cp10&index=4')
//     })
// })