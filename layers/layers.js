var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_XYZLayer_1 = new ol.layer.Tile({
            'title': 'XYZ-Layer',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'file:///users/sorenetler/Documents/Daten_Projekte/Ansichten_Magdeburger_Dom/Kacheln/{z}/{x}/{y}.png'
            })
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_XYZLayer_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_XYZLayer_1];
