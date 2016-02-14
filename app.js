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
      searchGoogle: function(term) {
        return {
          url: 'https://www.googleapis.com/customsearch/v1?key=AIzaSyB8tdxgSbu7p1njQ8CMk1VwH6Pxa--VWUs&cx=005873667295310001012:tzli5ij2qt4&q=animated+' + (term || '') + 'cat+gif&searchType=image&safe=high&num=1&start=' + Math.floor(100*Math.random()).toString(),
          method: 'GET',
          dataType: 'json'
        }
      }
    },

    init: function() {
      this.ajax('searchGoogle');
    },

    funnySearch: function() {
      this.ajax('searchGoogle', 'funny+');
    },

    happySearch: function() {
      this.ajax('searchGoogle', 'happy+');
    },

    sadSearch: function() {
      this.ajax('searchGoogle', 'sad+');
    },

    displayImage: function(response) {
      console.log(response);
      console.log(response.items[0].link);

      this.switchTo('catz', {
        image: response.items[0].link
      })
    },

    displayError: function(response) {
      console.log(response);

      this.switchTo('error', {
        image: 'error.gif',
        errorCode: response.status,
        errorMessage: response.statusText
      })
    }
  };
}());