var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
var HtmlReporter = require('protractor-beautiful-reporter');
var index = new Date(new Date().toString().split('GMT')[0]+' UTC').toISOString().split('.')[0].replace('T',' ');

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
    //specs:['./tests/testCalculator.js'],
    specs:['./tests/AngularPracticeTest.js'],
    //specs:['javascriptpractice.js'],
    suites:{
      smoke:['./tests/form_submission_test.js'],
      regression:['./tests/form_submission_test.js','spec.js'],
    },
    
    onPrepare:function(){
      browser.manage().window().maximize();
      //beautiful report
      jasmine.getEnv().addReporter(
        new HtmlReporter({
        baseDirectory: 'tmp/screenshots',
        //name of the html report
        //docName: 'Report.html',
        // if below is true takes screensghots for only failed cases
        takeScreenShotsOnlyForFailedSpecs: true,
        //clears the old reports and genetare new
        preserveDirectory: false,
        
      }).getJasmine2Reporter());
      //html2 report
      jasmine.getEnv().addReporter(
        new Jasmine2HtmlReporter({
          savePath: 'target/screenshots'
        })
      ); 
    }
      
}