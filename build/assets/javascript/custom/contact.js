function initMap(){var e={lat:39.3867945,lng:2.9422595},l={lat:39.5625241,lng:2.6637964},t={lat:39.5430402,lng:2.7320915},o=new google.maps.Map(document.getElementById("map"),{zoom:10,center:{lat:39.5261095,lng:2.9138872},styles:mapStyle}),r={url:"../assets/images/content/marker.png",size:new google.maps.Size(150,150),origin:new google.maps.Point(0,0),anchor:new google.maps.Point(37,37),scaledSize:new google.maps.Size(75,75)},a={url:"../assets/images/content/airport-marker.png",size:new google.maps.Size(29,45),origin:new google.maps.Point(0,0),anchor:new google.maps.Point(25,37),scaledSize:new google.maps.Size(29,45)};new google.maps.Marker({position:e,map:o,icon:r}),new google.maps.Marker({position:l,map:o,icon:r}),new google.maps.Marker({position:t,map:o,icon:a})}$("#map").length;var mapStyle=[{elementType:"geometry",stylers:[{color:"#f5f5f5"}]},{elementType:"labels.icon",stylers:[{visibility:"off"}]},{elementType:"labels.text.fill",stylers:[{color:"#616161"}]},{elementType:"labels.text.stroke",stylers:[{color:"#f5f5f5"}]},{featureType:"administrative.land_parcel",elementType:"labels.text.fill",stylers:[{color:"#bdbdbd"}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#eeeeee"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#e5e5e5"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#ffffff"}]},{featureType:"road.arterial",elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#dadada"}]},{featureType:"road.highway",elementType:"labels.text.fill",stylers:[{color:"#616161"}]},{featureType:"road.local",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]},{featureType:"transit.line",elementType:"geometry",stylers:[{color:"#e5e5e5"}]},{featureType:"transit.station",elementType:"geometry",stylers:[{color:"#eeeeee"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#c9c9c9"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]}];