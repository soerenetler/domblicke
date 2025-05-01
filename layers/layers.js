var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' Map data © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_DomblickeOnline_1 = new ol.layer.Tile({
            'title': 'Domblicke',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://soerenetler.github.io/domblicke/images/Domblick_Kacheln/{z}/{x}/{y}.png'
            })
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_DomblickeOnline_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_DomblickeOnline_1];
