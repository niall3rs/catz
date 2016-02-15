(function() {

  return {
    events: {
      'app.activated':'init',
      'searchGoogle.done':'displayImage',
      'searchGoogle.fail':'displayError',
      'click .another':'init',
      'click .funny':'funnySearch',
      'click .happy':'happySearch',
      'click .sad':'sadSearch'
    },

    requests: {
      // API request to the Google Custom Search API
      // The custom search engine searches Imgur, and has the following paramaters:
      //    API key: AIzaSyB8tdxgSbu7p1njQ8CMk1VwH6Pxa--VWUs
      //    CSE ID: 005873667295310001012:tzli5ij2qt4
      //    Safe search: High
      //    Search type: Image
      //    Query: "animated term (if applicable) cat gif"
      //    Start index: Random integer from 0-99
      searchGoogle: function(term) {
        return {
          url: 'https://www.googleapis.com/customsearch/v1?key=AIzaSyB8tdxgSbu7p1njQ8CMk1VwH6Pxa--VWUs&cx=005873667295310001012:tzli5ij2qt4&q=animated+' + (term || '') + 'cat+gif&searchType=image&safe=high&num=1&start=' + Math.floor(100*(1-Math.random())).toString(),
          method: 'GET',
          dataType: 'json'
        };
      }
    },

    // Initialise function which makes a request with the query 'animated cat gif'
    init: function() {
    	this.switchTo('spinner');
      this.ajax('searchGoogle');
    },

    // Search request with the query 'animated funny cat gif'
    funnySearch: function() {
    	this.switchTo('spinner');
      this.ajax('searchGoogle', 'funny+');
    },

    // Search request with the query 'animated happy cat gif'
    happySearch: function() {
    	this.switchTo('spinner');
      this.ajax('searchGoogle', 'happy+');
    },

    // Search request with the query 'animated sad cat gif'
    sadSearch: function() {
    	this.switchTo('spinner');
      this.ajax('searchGoogle', 'sad+');
    },

    // Show the catz template, and pass the image link
    displayImage: function(response) {
      this.switchTo('catz', {
        image: response.items[0].link
      });
    },

    // Display the error template with a stock error gif, and some error information
    displayError: function(response) {
      this.switchTo('error', {
        image: 'error.gif',
        errorCode: response.status,
        errorMessage: response.statusText
      });
    }
  };
}());