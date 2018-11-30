var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
    //seleniumAddress:'http://localhost:4444/wd/hub',//direct connect
    /* seleniumAddress:'http://localhost:4444/wd/hub',
    capabilities: {
      browserName: 'firefox'
    }, */
    /* multiCapabilities: [{
      browserName: 'firefox' 
    },{
      browserName: 'chrome'
    }], */
    //specs:['./tests/form_submission_test.js'],
    specs:['./tests/testCustomer.js'],
    //specs:['dummy.js'],
    suites:{
      smoke:['./tests/form_submission_test.js'],
      regression:['./tests/form_submission_test.js','spec.js'],
    },
    
    onPrepare:function(){
      browser.manage().window().maximize();
      jasmine.getEnv().addReporter(
        new Jasmine2HtmlReporter({
          savePath: 'target/screenshots'
        })
      );
    }
      
}