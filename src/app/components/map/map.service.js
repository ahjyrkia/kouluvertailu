MyApp.service("MapService", function($http) {

    this.highSchoolMarkers = function(schools) {
        var markers = [];
        for (var i = 0; i < schools.length; i++) {
            var coords = schools[i].coords.split(",");
            var lat = parseFloat(coords[0]);
            var lng = parseFloat(coords[1]);
            // console.log(lng, lat)

            options = {
                isAlphaNumericIcon: true,
                text: schools[i].ranking,
                borderColor: '#3C3C91',
                textColor: '#3C3C91',
                backgroundColor: '#B7A7A7',
                spin: 'false',
                innerIconStyle: 'margin-top:0.2px'
            };
            var marker = L.BeautifyMarker.marker([lng, lat], {
                icon: L.BeautifyIcon.icon(options),
            });
            marker.schoolId = schools[i].id;
            marker.ranking = schools[i].ranking;
            marker.mean = schools[i].mean;
            markers.push(marker);
        }
        return markers;
    }

})
