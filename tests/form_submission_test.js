//var util = require('util');

var using = require('jasmine-data-provider');
var form_page = require('../pages/form_page.js');
var d = require('../Resources/data.js')

describe('validate form submission', function(){


    beforeEach(function(){
        browser.get('https://qaclickacademy.github.io/protocommerce/');
        browser.manage().window().maximize();
    });

    it('validate ', function(){
        form_page.name.sendKeys('gowtham');
        form_page.email.sendKeys('abc');
        form_page.password.sendKeys('password');
        form_page.iceCreamCheckbox.click();
        form_page.selectGender('Female').click();
        form_page.bDay.sendKeys('05061993');

    });

    using(d.formData, function(data, desription){
        it('validate : '+desription, function(){
            form_page.name.sendKeys(data.name);
            form_page.email.sendKeys(data.email);
            form_page.password.sendKeys(data.password);
            form_page.iceCreamCheckbox.click();
            form_page.selectGender(data.gender).click();
            form_page.bDay.sendKeys(data.dob);
            form_page.getNameText().then(function(text){
                console.log(text);
            });
            expect(form_page.getNameText()).toEqual(data.result);
    
        });

    });


    afterEach(function(){
        browser.driver.sleep(100);
    });
});