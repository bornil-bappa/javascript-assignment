// Problem:1
function kilometerToMeter(kilometer){
	var meter = kilometer * 1000;

	return meter;
}

var output = kilometerToMeter(5);
console.log(output);




// Problem:2
function budgetCalculator(watch, phone, laptop){
	var watchPrice = watch * 50; //50 * 10 = 500
	var phonePrice = phone * 100; // 100 * 5 = 500
	var laptopPrice = laptop * 500; //500 * 2 = 1000
	total = watchPrice + phonePrice + laptopPrice; //500 + 500 + 1000 = 2000


	return total;
}
var result = budgetCalculator(10, 5, 2);
console.log(result);

// Problem:3
function hotelCost(days){
    var cost = 0;
    if(days <= 10){
        cost = days * 100;
    }
    else if(days <= 20){
        var firstTenDays = 10 * 100;
        var nextTenDays = days - 10;
        var secondTenDays = nextTenDays * 80;
        cost = firstTenDays + secondTenDays;
    }
    else{
        var firstTenDays = 10 * 100;
        var secondTenDays = 10 * 80;
        var moreTwentyDays = days - 20;
        var otherDays = moreTwentyDays * 50;
        cost = firstTenDays + secondTenDays + otherDays;
    }

    return cost;
}
var result = hotelCost(30);
console.log(result);


// Problem:4

var countryList = ['Bangladesh', 'India', 'Indonesia', 'Australia', 'Zimbabo', 'West Indis', 'Filand', 'America'];

var country = 0;
var longest;

for (var i = 0; i < countryList.length; i++){
    if(countryList[i].length > country){
        var country = countryList[i].length;
        longest = countryList[i]
    }
}
console.log(longest);

