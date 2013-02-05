$("#btnGetLocation").live("click", function () {

    if ($('#txtIP').val() != "") {
        $('#divIP').empty().append('<div style="padding:5px;"><img src="loader.gif" /></div>');

        $.jqIpLocation({
            ip: $('#txtIP').val(),
            locationType: 'city',
            success: function (location) {
                $('#divIP').empty();
                $('#divIP').append('<table class="table table-bordered table-striped">'
                + '<tr><td class="title">IP</td><td class="result">' + location.ipAddress + '</td></tr>'
                + '<tr><td class="title">Country</td><td class="result">' + location.countryName + '</td></tr>'
                + '<tr><td class="title">Country Code</td><td class="result">' + location.countryCode + '</td></tr>'
                + '<tr><td class="title">City</td><td class="result">' + location.cityName + '</td></tr>'
                + '<tr><td class="title">Region</td><td class="result">' + location.cityName + '</td></tr>'
                + '<tr><td class="title">Latitude</td><td class="result">' + location.latitude + '</td></tr>'
                + '<tr><td class="title">Longitude</td><td class="result">' + location.longitude + '</td></tr>'
                + '</table>');
            }
        });
    }

 });