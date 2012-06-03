Date.prototype.format = function(){
	var formatMonth = function(month, numberOfDigits){
		month += 1;
		month = insertZerosLeft(month, numberOfDigits);
		return month;
	};

	var insertZerosLeft = function(data, numberOfDigits){
		data = data.toString();
		var zeros = '';
		var qtdZerosLeft = numberOfDigits - data.length;

		for(var count = 0; count < qtdZerosLeft; count++){
			zeros += '0';
		}

		data = zeros + data;
		return data;
	};

	var dateFormated = [];
	dateFormated.push( this.getFullYear() );
	dateFormated.push( formatMonth(this.getMonth(), 2) );
	dateFormated.push( insertZerosLeft(this.getDate(), 2) );

	var timeFormated = [];
	timeFormated.push( insertZerosLeft(this.getHours(), 2) );
	timeFormated.push( insertZerosLeft(this.getMinutes(), 2) );
	timeFormated.push( insertZerosLeft(this.getSeconds(), 2) );

	var datetimeFomated = dateFormated.join('-');
	datetimeFomated += ' ';
	datetimeFomated += timeFormated.join(':');

	return datetimeFomated;
};