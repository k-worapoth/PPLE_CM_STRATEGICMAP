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
var format_tambon_CMMC_1 = new ol.format.GeoJSON();
var features_tambon_CMMC_1 = format_tambon_CMMC_1.readFeatures(json_tambon_CMMC_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tambon_CMMC_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tambon_CMMC_1.addFeatures(features_tambon_CMMC_1);
var lyr_tambon_CMMC_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tambon_CMMC_1, 
                style: style_tambon_CMMC_1,
                popuplayertitle: 'tambon_CMMC',
                interactive: true,
                title: '<img src="styles/legend/tambon_CMMC_1.png" /> tambon_CMMC'
            });
var format_moo_faham_2 = new ol.format.GeoJSON();
var features_moo_faham_2 = format_moo_faham_2.readFeatures(json_moo_faham_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_moo_faham_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_moo_faham_2.addFeatures(features_moo_faham_2);
var lyr_moo_faham_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_moo_faham_2, 
                style: style_moo_faham_2,
                popuplayertitle: 'moo_faham',
                interactive: true,
                title: '<img src="styles/legend/moo_faham_2.png" /> moo_faham'
            });
var format_moo_tambon_changpueak_3 = new ol.format.GeoJSON();
var features_moo_tambon_changpueak_3 = format_moo_tambon_changpueak_3.readFeatures(json_moo_tambon_changpueak_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_moo_tambon_changpueak_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_moo_tambon_changpueak_3.addFeatures(features_moo_tambon_changpueak_3);
var lyr_moo_tambon_changpueak_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_moo_tambon_changpueak_3, 
                style: style_moo_tambon_changpueak_3,
                popuplayertitle: 'moo_tambon_changpueak',
                interactive: true,
                title: '<img src="styles/legend/moo_tambon_changpueak_3.png" /> moo_tambon_changpueak'
            });
var format_moo_suthep_4 = new ol.format.GeoJSON();
var features_moo_suthep_4 = format_moo_suthep_4.readFeatures(json_moo_suthep_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_moo_suthep_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_moo_suthep_4.addFeatures(features_moo_suthep_4);
var lyr_moo_suthep_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_moo_suthep_4, 
                style: style_moo_suthep_4,
                popuplayertitle: 'moo_suthep',
                interactive: true,
                title: '<img src="styles/legend/moo_suthep_4.png" /> moo_suthep'
            });
var format_moo_sanpheseau_5 = new ol.format.GeoJSON();
var features_moo_sanpheseau_5 = format_moo_sanpheseau_5.readFeatures(json_moo_sanpheseau_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_moo_sanpheseau_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_moo_sanpheseau_5.addFeatures(features_moo_sanpheseau_5);
var lyr_moo_sanpheseau_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_moo_sanpheseau_5, 
                style: style_moo_sanpheseau_5,
                popuplayertitle: 'moo_sanpheseau',
                interactive: true,
                title: '<img src="styles/legend/moo_sanpheseau_5.png" /> moo_sanpheseau'
            });
var format_moo_padet_6 = new ol.format.GeoJSON();
var features_moo_padet_6 = format_moo_padet_6.readFeatures(json_moo_padet_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_moo_padet_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_moo_padet_6.addFeatures(features_moo_padet_6);
var lyr_moo_padet_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_moo_padet_6, 
                style: style_moo_padet_6,
                popuplayertitle: 'moo_padet',
                interactive: true,
                title: '<img src="styles/legend/moo_padet_6.png" /> moo_padet'
            });
var format_moo_maehia_7 = new ol.format.GeoJSON();
var features_moo_maehia_7 = format_moo_maehia_7.readFeatures(json_moo_maehia_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_moo_maehia_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_moo_maehia_7.addFeatures(features_moo_maehia_7);
var lyr_moo_maehia_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_moo_maehia_7, 
                style: style_moo_maehia_7,
                popuplayertitle: 'moo_maehia',
                interactive: true,
                title: '<img src="styles/legend/moo_maehia_7.png" /> moo_maehia'
            });
var format_electionmap_templateV1_8 = new ol.format.GeoJSON();
var features_electionmap_templateV1_8 = format_electionmap_templateV1_8.readFeatures(json_electionmap_templateV1_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_electionmap_templateV1_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_electionmap_templateV1_8.addFeatures(features_electionmap_templateV1_8);
var lyr_electionmap_templateV1_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_electionmap_templateV1_8, 
                style: style_electionmap_templateV1_8,
                popuplayertitle: 'electionmap_templateV1',
                interactive: false,
    title: 'electionmap_templateV1<br />\
    <img src="styles/legend/electionmap_templateV1_8_0.png" /> 1<br />\
    <img src="styles/legend/electionmap_templateV1_8_1.png" /> 2<br />\
    <img src="styles/legend/electionmap_templateV1_8_2.png" /> 3<br />\
    <img src="styles/legend/electionmap_templateV1_8_3.png" /> 4<br />' });
var format_1_9 = new ol.format.GeoJSON();
var features_1_9 = format_1_9.readFeatures(json_1_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1_9.addFeatures(features_1_9);
var lyr_1_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1_9, 
                style: style_1_9,
                popuplayertitle: 'จุดปักป้ายหาเสียง - ติดจริงแล้ว (1) — จุดปักป้ายหาเสียง - ติดจริงแล้ว',
                interactive: true,
                title: '<img src="styles/legend/1_9.png" /> จุดปักป้ายหาเสียง - ติดจริงแล้ว (1) — จุดปักป้ายหาเสียง - ติดจริงแล้ว'
            });
var format_postalfinal_10 = new ol.format.GeoJSON();
var features_postalfinal_10 = format_postalfinal_10.readFeatures(json_postalfinal_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_postalfinal_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_postalfinal_10.addFeatures(features_postalfinal_10);
var lyr_postalfinal_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_postalfinal_10, 
                style: style_postalfinal_10,
                popuplayertitle: 'postalfinal',
                interactive: true,
    title: 'postalfinal<br />\
    <img src="styles/legend/postalfinal_10_0.png" /> 10 - 35<br />\
    <img src="styles/legend/postalfinal_10_1.png" /> 35 - 70<br />\
    <img src="styles/legend/postalfinal_10_2.png" /> 70 - 98<br />\
    <img src="styles/legend/postalfinal_10_3.png" /> 98 - 132<br />\
    <img src="styles/legend/postalfinal_10_4.png" /> 132 - 156<br />\
    <img src="styles/legend/postalfinal_10_5.png" /> 156 - 190<br />\
    <img src="styles/legend/postalfinal_10_6.png" /> 190 - 251<br />\
    <img src="styles/legend/postalfinal_10_7.png" /> 251 - 300<br />\
    <img src="styles/legend/postalfinal_10_8.png" /> 300 - 1,100<br />\
    <img src="styles/legend/postalfinal_10_9.png" /> 1,100 - 1,631<br />' });
var group_EVENT = new ol.layer.Group({
                                layers: [lyr_1_9,lyr_postalfinal_10,],
                                fold: 'open',
                                title: 'EVENT'});
var group_ELECTIONRESULT = new ol.layer.Group({
                                layers: [lyr_electionmap_templateV1_8,],
                                fold: 'open',
                                title: 'ELECTIONRESULT'});
var group_POLITICALMAP = new ol.layer.Group({
                                layers: [lyr_tambon_CMMC_1,lyr_moo_faham_2,lyr_moo_tambon_changpueak_3,lyr_moo_suthep_4,lyr_moo_sanpheseau_5,lyr_moo_padet_6,lyr_moo_maehia_7,],
                                fold: 'open',
                                title: 'POLITICALMAP'});

lyr_EsriTopographic_0.setVisible(true);lyr_tambon_CMMC_1.setVisible(true);lyr_moo_faham_2.setVisible(true);lyr_moo_tambon_changpueak_3.setVisible(true);lyr_moo_suthep_4.setVisible(true);lyr_moo_sanpheseau_5.setVisible(true);lyr_moo_padet_6.setVisible(true);lyr_moo_maehia_7.setVisible(true);lyr_electionmap_templateV1_8.setVisible(true);lyr_1_9.setVisible(true);lyr_postalfinal_10.setVisible(true);
var layersList = [lyr_EsriTopographic_0,group_POLITICALMAP,group_ELECTIONRESULT,group_EVENT];
lyr_tambon_CMMC_1.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'population': 'population', 'tambon': 'tambon', 'area': 'area', });
lyr_moo_faham_2.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'moo': 'moo', 'population': 'population', 'tambon': 'tambon', 'area': 'area', });
lyr_moo_tambon_changpueak_3.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'moo': 'moo', 'population': 'population', 'tambon': 'tambon', 'area': 'area', });
lyr_moo_suthep_4.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'moo': 'moo', 'population': 'population', 'tambon': 'tambon', 'area': 'area', });
lyr_moo_sanpheseau_5.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'moo': 'moo', 'population': 'population', 'tambon': 'tambon', 'area': 'area', });
lyr_moo_padet_6.set('fieldAliases', {'id': 'id', 'name': 'name', 'moo': 'moo', 'population': 'population', 'tambon': 'tambon', 'area': 'area', });
lyr_moo_maehia_7.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'moo': 'moo', 'population': 'population', 'tambon': 'tambon', 'area': 'area', });
lyr_electionmap_templateV1_8.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'moo': 'moo', 'population': 'population', 'tambon': 'tambon', 'area': 'area', 'layer': 'layer', 'path': 'path', 'tier': 'tier', });
lyr_1_9.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_postalfinal_10.set('fieldAliases', {'name': 'name', 'tambon': 'tambon', 'house': 'house', });
lyr_tambon_CMMC_1.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'population': 'TextEdit', 'tambon': 'TextEdit', 'area': 'TextEdit', });
lyr_moo_faham_2.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'moo': 'TextEdit', 'population': 'TextEdit', 'tambon': 'TextEdit', 'area': 'TextEdit', });
lyr_moo_tambon_changpueak_3.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'moo': 'TextEdit', 'population': 'TextEdit', 'tambon': 'TextEdit', 'area': 'TextEdit', });
lyr_moo_suthep_4.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'moo': 'TextEdit', 'population': 'TextEdit', 'tambon': 'TextEdit', 'area': 'TextEdit', });
lyr_moo_sanpheseau_5.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'moo': 'TextEdit', 'population': 'TextEdit', 'tambon': 'TextEdit', 'area': 'TextEdit', });
lyr_moo_padet_6.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'moo': 'TextEdit', 'population': 'TextEdit', 'tambon': 'TextEdit', 'area': 'TextEdit', });
lyr_moo_maehia_7.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'moo': 'TextEdit', 'population': 'TextEdit', 'tambon': 'TextEdit', 'area': 'TextEdit', });
lyr_electionmap_templateV1_8.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'moo': 'TextEdit', 'population': 'TextEdit', 'tambon': 'TextEdit', 'area': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'tier': 'Range', });
lyr_1_9.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_postalfinal_10.set('fieldImages', {'name': 'TextEdit', 'tambon': 'TextEdit', 'house': 'TextEdit', });
lyr_tambon_CMMC_1.set('fieldLabels', {'id': 'hidden field', 'Name': 'inline label - always visible', 'population': 'hidden field', 'tambon': 'hidden field', 'area': 'hidden field', });
lyr_moo_faham_2.set('fieldLabels', {'id': 'hidden field', 'Name': 'inline label - always visible', 'moo': 'inline label - always visible', 'population': 'hidden field', 'tambon': 'hidden field', 'area': 'hidden field', });
lyr_moo_tambon_changpueak_3.set('fieldLabels', {'id': 'hidden field', 'Name': 'inline label - always visible', 'moo': 'inline label - always visible', 'population': 'hidden field', 'tambon': 'hidden field', 'area': 'hidden field', });
lyr_moo_suthep_4.set('fieldLabels', {'id': 'hidden field', 'Name': 'inline label - always visible', 'moo': 'inline label - always visible', 'population': 'hidden field', 'tambon': 'hidden field', 'area': 'hidden field', });
lyr_moo_sanpheseau_5.set('fieldLabels', {'id': 'hidden field', 'Name': 'inline label - always visible', 'moo': 'inline label - always visible', 'population': 'hidden field', 'tambon': 'hidden field', 'area': 'hidden field', });
lyr_moo_padet_6.set('fieldLabels', {'id': 'hidden field', 'name': 'no label', 'moo': 'inline label - always visible', 'population': 'hidden field', 'tambon': 'hidden field', 'area': 'hidden field', });
lyr_moo_maehia_7.set('fieldLabels', {'id': 'hidden field', 'Name': 'inline label - always visible', 'moo': 'inline label - always visible', 'population': 'hidden field', 'tambon': 'hidden field', 'area': 'hidden field', });
lyr_electionmap_templateV1_8.set('fieldLabels', {'id': 'no label', 'Name': 'inline label - always visible', 'moo': 'inline label - always visible', 'population': 'no label', 'tambon': 'no label', 'area': 'no label', 'layer': 'no label', 'path': 'no label', 'tier': 'no label', });
lyr_1_9.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_postalfinal_10.set('fieldLabels', {'name': 'no label', 'tambon': 'no label', 'house': 'no label', });
lyr_postalfinal_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});