function getServerUrl() {
    var thisurl = window.location.href.split('/');
    var suburl = '';
    var ishttps = false;
    for(var i in thisurl)
    {
        if(thisurl[i] == 'http:')continue;
        else if(thisurl[i] == 'https:'){ishttps = true;continue;}
        else if(thisurl[i] == '')continue;
        else{return(ishttps?"https://":"http://")+thisurl[i]+suburl;}
    }
}

function xml2Json (response) {
    var x2js = new X2JS();
    var jsonObj = x2js.xml_str2json(response);
    return jsonObj.Envelope.Body;
}

function getCurrentDate (systemHours) {
    var systemHoursStr = systemHours.split(':');
    var systemHoursMinutesSinceMidnight = parseInt(systemHoursStr[0]) * 60 + parseInt(systemHoursStr[1]);
    var now = new Date();
    var nowMinutesSinceMidnight = now.getHours() * 60 + now.getMinutes();
    if (nowMinutesSinceMidnight < systemHoursMinutesSinceMidnight) {
        now = new Date(now.getTime() - 24 * 60 * 60 * 1000);
    }
    return now;
}

function convertStringToTime(restaurantHour, format) {
    var now = new Date();
    if (format === "HH:mm") {
        now.setHours(restaurantHour.substr(0, restaurantHour.indexOf(':')));
        now.setMinutes(restaurantHour.substr(restaurantHour.indexOf(':') + 1));
        now.setSeconds(0);
        return now;
    } else {
        return 'Invalid Format';
    }
}

function getURLParameter(sParam){

    var sPageURL = window.location.href;


    var sURLVariables = sPageURL.split('?');
    for (var i = 0; i < sURLVariables.length; i++) 
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) 
        {
         
   return sParameterName[1];
        }
    }
}