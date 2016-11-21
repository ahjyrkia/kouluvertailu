MyApp.controller("MainController", function($scope, ApiService, MapService) {
    $scope.map = L.map('mapid').setView([60.172, 24.946], 13);
    L.tileLayer('http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
        subdomains: 'abcd',
        maxZoom: 19
    }).addTo($scope.map);

    $scope.highSchools = ApiService.getSchools();
    $scope.highSchoolMarkers = MapService.highSchoolMarkers($scope.highSchools);
    $scope.school = "";
    $scope.loading = false;
    for (var i = 0; i < $scope.highSchoolMarkers.length; i++) {
        $scope.highSchoolMarkers[i].on('click', function(e) {
            $scope.loading = false;
            var thisMarker = this;
            // $scope.toggle(); not working. temporary fix below
            document.getElementById("button").click();
            ApiService.getSchool(thisMarker.schoolId).then(function(data) {
              $scope.school = data.name_fi.split(" - kampus")[0];
              $scope.loading = true;
              $scope.rank = "PK-seudun vertailussa: "+thisMarker.ranking+".";
              $scope.averagepts = "2016K ylioppilaskokeiden keskiarvopisteet: "+Math.round(thisMarker.mean*10)/10;
              $scope.address = data.street_address_fi
            })
            ApiService.getSchoolFromDB(thisMarker.schoolId).then(function(data) {
              console.log(data);
            })
        });
        $scope.highSchoolMarkers[i].addTo($scope.map);
    }
    $scope.checked = false;
    $scope.openPanel = function() {
        $scope.checked = true;
    }
    $scope.closePanel = function() {
        $scope.checked = false;
    }
})
