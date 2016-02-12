(function() {

  return {
    events: {
      'app.activated':'init'
    },

    init: function() {
    	this.switchTo('catz', {
    		image: 'cg/1.gif'
    	})
    }
  };

}());
