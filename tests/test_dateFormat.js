test( "test date prototype should have format method", function() {
	ok( Date.prototype.format );
});

test( "test call method should display YYYY-MM-DD HH-MM-SS by default", function() {
	var date = new Date("2012-06-02 13:10:00");
	ok( date.format() === "2012-06-02 13:10:00" );
});