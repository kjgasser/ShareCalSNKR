$(".button-container").on("click", function () {

    var sign = $(this).attr("data-sign");

    var queryURL = "https://aztro.herokuapp.com?sign=" + sign + "&day=today";

    $.ajax({
        type: "POST",
        url: queryURL,
        success: function (data) {
            console.log(data);

            var hsDiv = $("<div class='item'>");

            var scope = data.description;
            var color = $("<color>").text("Your lucky color today is " + data.color);
            // var comp = $("<comp>").text("Today, you're compatible with a " + data.compatibility);
            var number = $("<color>").text("Your lucky number is " + data.lucky_number);
            var time = $("<color>").text("Pay attention at " + data.lucky_time + "because that's your lucky time!");
            var mood = $("<color>").text("You're probably feeling " + data.mood + "today.");
            var p = $("<p>").text("This is " + sign + "'s (" + data.date_range + ") " + "horoscope for " + data.current_date + ": " + scope);


            hsDiv.append(p, color, time, number, mood);
            // color.append(number, time);
            // time.append(mood);
            $("#reading-appear-here").prepend(hsDiv);
        }
    });
});


$("#find-current").on("click", function (event) {
    event.preventDefault();

    // var key = "5961b980628e3194ee5db887acf34602";
    var zip = $("#zipcode-input").val();
    var queryURL = "http://api.openweathermap.org/data/2.5/forecast?zip=" + zip + "&appid=4a21589577f6e6c281bf65513ad6c951";

    $.ajax({
        type: "GET",
        url: queryURL,
    }).then(function (response) {
        console.log(response);

        var wfDiv = $("<div class='item'>");
        // var weatherImage = $("<img>");
        // weatherImage.attr("src", response.DailyForecasts.Day.Icon[0]);
        var line = response.list[0].weather[0].description;
        var r = $("<p>").text("Weather Forecast: " + line);
        // wfDiv.append(weatherImage)
        wfDiv.append(r)

        $("#forecast-view").prepend(wfDiv);
    });
});




// window.weatherbitWidgetParams = {
//     key: '67478580ac8345e5afbcde0798c1b030',67478580ac8345e5afbcde0798c1b030
//     autocomplete_container: 'city-form',
//     forecast_1: 'forecast-1',
//     forecast_2: 'forecast-2',
//     forecast_3: 'forecast-3',
//     cities_file: 'cities-tropical'
// };
// (function () {
//     var script = document.createElement('script');
//     script.type = 'text/javascript';
//     script.async = true;
//     script.src = 'https://www.weatherbit.io/static/widgets/forecast-series-widget.min.js';
//     var s = document.getElementsByTagName('script')[0];
//     s.parentNode.insertBefore(script, s);
// })();