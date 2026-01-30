var wms_layers = [];


        var lyr_EsriTopographic_0 = new ol.layer.Tile({
            'title': 'Esri Topographic',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/arcgis/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_postalfinal_1 = new ol.format.GeoJSON();
var features_postalfinal_1 = format_postalfinal_1.readFeatures(json_postalfinal_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_postalfinal_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_postalfinal_1.addFeatures(features_postalfinal_1);
var lyr_postalfinal_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_postalfinal_1, 
                style: style_postalfinal_1,
                popuplayertitle: 'postalfinal',
                interactive: true,
    title: 'postalfinal<br />\
    <img src="styles/legend/postalfinal_1_0.png" /> 10 - 35<br />\
    <img src="styles/legend/postalfinal_1_1.png" /> 35 - 70<br />\
    <img src="styles/legend/postalfinal_1_2.png" /> 70 - 98<br />\
    <img src="styles/legend/postalfinal_1_3.png" /> 98 - 132<br />\
    <img src="styles/legend/postalfinal_1_4.png" /> 132 - 156<br />\
    <img src="styles/legend/postalfinal_1_5.png" /> 156 - 190<br />\
    <img src="styles/legend/postalfinal_1_6.png" /> 190 - 251<br />\
    <img src="styles/legend/postalfinal_1_7.png" /> 251 - 300<br />\
    <img src="styles/legend/postalfinal_1_8.png" /> 300 - 1,100<br />\
    <img src="styles/legend/postalfinal_1_9.png" /> 1,100 - 1,631<br />' });
var format_poster__20260130T111826_2 = new ol.format.GeoJSON();
var features_poster__20260130T111826_2 = format_poster__20260130T111826_2.readFeatures(json_poster__20260130T111826_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_poster__20260130T111826_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_poster__20260130T111826_2.addFeatures(features_poster__20260130T111826_2);
var lyr_poster__20260130T111826_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_poster__20260130T111826_2, 
                style: style_poster__20260130T111826_2,
                popuplayertitle: 'poster_ติดจริงแล้ว_2026-01-30T11-18-26 — จุดปักป้ายหาเสียง - ติดจริงแล้ว',
                interactive: true,
                title: 'poster_ติดจริงแล้ว_2026-01-30T11-18-26 — จุดปักป้ายหาเสียง - ติดจริงแล้ว'
            });
var format_30dec2026_3 = new ol.format.GeoJSON();
var features_30dec2026_3 = format_30dec2026_3.readFeatures(json_30dec2026_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_30dec2026_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_30dec2026_3.addFeatures(features_30dec2026_3);
var lyr_30dec2026_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_30dec2026_3, 
                style: style_30dec2026_3,
                popuplayertitle: 'ติดแล้ว30dec2026',
                interactive: true,
                title: '<img src="styles/legend/30dec2026_3.png" /> ติดแล้ว30dec2026'
            });
var group_mao = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'mao'});
var group_electionresultMP2026 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'electionresultMP2026'});
var group_EVENT = new ol.layer.Group({
                                layers: [lyr_postalfinal_1,lyr_poster__20260130T111826_2,lyr_30dec2026_3,],
                                fold: 'open',
                                title: 'EVENT'});
var group_ELECTIONRESULT = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'ELECTIONRESULT'});
var group_CMMC2025 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'CMMC2025'});
var group_banner2025 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'banner2025'});
var group_banner2026 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'banner2026'});
var group_POLITICALMAP = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'POLITICALMAP'});
var group_MP_CM1_2023 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'MP_CM1_2023'});

lyr_EsriTopographic_0.setVisible(true);lyr_postalfinal_1.setVisible(true);lyr_poster__20260130T111826_2.setVisible(true);lyr_30dec2026_3.setVisible(true);
var layersList = [lyr_EsriTopographic_0,group_EVENT];
lyr_postalfinal_1.set('fieldAliases', {'name': 'name', 'tambon': 'tambon', 'house': 'house', });
lyr_poster__20260130T111826_2.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_30dec2026_3.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_postalfinal_1.set('fieldImages', {'name': 'TextEdit', 'tambon': 'TextEdit', 'house': 'TextEdit', });
lyr_poster__20260130T111826_2.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_30dec2026_3.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_postalfinal_1.set('fieldLabels', {'name': 'no label', 'tambon': 'no label', 'house': 'no label', });
lyr_poster__20260130T111826_2.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_30dec2026_3.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_30dec2026_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});