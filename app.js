(function() {

  return {
    events: {
      'app.activated':'init',
      'searchGoogle.done':'displayImage',
      'click .another':'init'
    },

    requests: {
      searchGoogle: function() {
        return {
          url: 'https://www.googleapis.com/customsearch/v1?key=AIzaSyB8tdxgSbu7p1njQ8CMk1VwH6Pxa--VWUs&cx=005873667295310001012:tzli5ij2qt4&q=animated+cat+gif&searchType=image&safe=high&num=1&start=' + Math.floor(100*Math.random()).toString(),
          method: 'GET',
          dataType: 'json'
        }
      }
    },

    init: function() {
      this.ajax('searchGoogle');
    },

    displayImage: function(response) {
      console.log(response);
      console.log(response.items[0].link);

      this.switchTo('catz', {
        image: response.items[0].link
      })

    }
  };

}());