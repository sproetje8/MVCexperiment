function Controller(model) {
	var self = this;
	this.model = model;

	// event listener interface
	this.handleEvent = function (e) {
		e.stopPropagation();
		switch (e.type) {
			case 'click':
				self.clickHandler(e.target);
				break;
			default:
				console.log(e.target);
		}
	}

	// get Model heading
	this.getModelHeading = function () {
		return self.model.heading;
	}

	// change the model
	this.clickHandler = function (target) {
		self.model.heading = 'World';
		target.innerText = self.getModelHeading();
	}
}
