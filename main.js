$(document).ready(function () {
    const inputValue = $("#user-input");

    $(".numbers").each(function () {
        $(this).on("click", function (e) {
            if (inputValue.text() === "NaN") {
                inputValue.text("");
            }
            if (inputValue.text() === "0") {
                inputValue.text("");
            }
            inputValue.text(inputValue.text() + $(e.target).html().trim());
        });
    });

    $(".operations").each(function () {
        $(this).on("click", function (e) {
            let lastValue = $("#user-input").text().substring($("#user-input").text().length, $("#user-input").text().length - 1);

            if (!isNaN(lastValue) && e.target.innerHTML === "=") {
                $("#user-input").text(eval($("#user-input").text()));
            } else if (e.target.innerHTML === "AC") {
                $("#user-input").text(0);
            } else if (e.target.innerHTML === "DEL") {
                $("#user-input").text($("#user-input").text().substring(0, $("#user-input").text().length - 1));
                if ($("#user-input").text().length == 0) {
                    $("#user-input").text(0);
                }
            } else {
                if (!isNaN(lastValue)) {
                    $("#user-input").text($("#user-input").text() + e.target.innerHTML);
                }
            }
        });
    });
});
