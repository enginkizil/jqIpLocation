jqIpLocation  jQuery IP Location Plugin
============

**jqIpLocation** is a jQuery Plugin that returns the location of an IP address in JSON format. You can get country, country code, city name, region name, latitude and longitude information about IP address location.

[Plugin Homepage](http://jquery-plugins.net/jqIpLocation/jqIpLocation.html)

[Demo](http://jquery-plugins.net/jqIpLocation/jqIpLocation_demo.html)


## Usage
1- Include the Javascript resources into you pages <head>

     <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
     <script type="text/javascript" src="jqIpLocation.js"></script>

2- Add the Javascript that will returns you IP Location information in JSON format

      $.jqIpLocation({
         ip : '213.243.4.20',
         success: function(location) {	          
            // location.countryName;
            // location.countryCode;
            ...
         }
       });
    

## Options

- **Name**
  IP Address that you want to get location info. It's required

## JSON Result

- **Name**
  IP Address that you want to get location info. It's required
- **location.countryName**
  Country Name
- **location.countryCode**
  Country Code
- **location.cityName**
  City Name
- **location.regionName**
  Region Name
- **location.latitude**
  Latitude
- **location.longitude**
  Longitude


## Demo

[Plugin Homepage](http://jquery-plugins.net/jqIpLocation/jqIpLocation.html)

[Demo](http://jquery-plugins.net/jqIpLocation/jqIpLocation_demo.html)
