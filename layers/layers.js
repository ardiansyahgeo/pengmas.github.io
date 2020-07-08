var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_TematikKalibaru_1 = new ol.format.GeoJSON();
var features_TematikKalibaru_1 = format_TematikKalibaru_1.readFeatures(json_TematikKalibaru_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TematikKalibaru_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TematikKalibaru_1.addFeatures(features_TematikKalibaru_1);
var lyr_TematikKalibaru_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TematikKalibaru_1, 
                style: style_TematikKalibaru_1,
                interactive: true,
                title: '<img src="styles/legend/TematikKalibaru_1.png" /> TematikKalibaru'
            });
var format_Batas_RT_2 = new ol.format.GeoJSON();
var features_Batas_RT_2 = format_Batas_RT_2.readFeatures(json_Batas_RT_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Batas_RT_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Batas_RT_2.addFeatures(features_Batas_RT_2);
var lyr_Batas_RT_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Batas_RT_2, 
                style: style_Batas_RT_2,
                interactive: true,
                title: '<img src="styles/legend/Batas_RT_2.png" /> Batas_RT'
            });

lyr_OSMStandard_0.setVisible(true);lyr_TematikKalibaru_1.setVisible(true);lyr_Batas_RT_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_TematikKalibaru_1,lyr_Batas_RT_2];
lyr_TematikKalibaru_1.set('fieldAliases', {'is_in_muni': 'is_in_muni', 'is_in_prov': 'is_in_prov', 'is_in_town': 'is_in_town', 'is_in_vill': 'is_in_vill', 'name': 'name', 'note': 'note', 'J_Hunian': 'J_Hunian', 'J_balita': 'J_balita', 'J_lansia': 'J_lansia', 'J_IbuHamil': 'J_IbuHamil', 'J_IbuSusui': 'J_IbuSusui', 'Air_PDAM': 'Air_PDAM', 'Air_Sumur': 'Air_Sumur', 'J_KK': 'J_KK', 'POPULASI': 'POPULASI', });
lyr_Batas_RT_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'fid_1': 'fid_1', 'id': 'id', 'F_id': 'F_id', 'admin_leve': 'admin_leve', 'boundary': 'boundary', 'flood_pron': 'flood_pron', 'is_in_muni': 'is_in_muni', 'is_in_prov': 'is_in_prov', 'is_in_town': 'is_in_town', 'is_in_vill': 'is_in_vill', 'name': 'name', 'type': 'type', 'note': 'note', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_TematikKalibaru_1.set('fieldImages', {'is_in_muni': 'TextEdit', 'is_in_prov': 'TextEdit', 'is_in_town': 'TextEdit', 'is_in_vill': 'TextEdit', 'name': 'TextEdit', 'note': 'TextEdit', 'J_Hunian': 'Range', 'J_balita': 'Range', 'J_lansia': 'Range', 'J_IbuHamil': 'Range', 'J_IbuSusui': 'Range', 'Air_PDAM': 'Range', 'Air_Sumur': 'Range', 'J_KK': 'Range', 'POPULASI': 'Range', });
lyr_Batas_RT_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'fid_1': 'TextEdit', 'id': 'TextEdit', 'F_id': 'TextEdit', 'admin_leve': 'TextEdit', 'boundary': 'TextEdit', 'flood_pron': 'TextEdit', 'is_in_muni': 'TextEdit', 'is_in_prov': 'TextEdit', 'is_in_town': 'TextEdit', 'is_in_vill': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', 'note': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_TematikKalibaru_1.set('fieldLabels', {'is_in_muni': 'no label', 'is_in_prov': 'no label', 'is_in_town': 'no label', 'is_in_vill': 'inline label', 'name': 'no label', 'note': 'no label', 'J_Hunian': 'no label', 'J_balita': 'no label', 'J_lansia': 'no label', 'J_IbuHamil': 'no label', 'J_IbuSusui': 'no label', 'Air_PDAM': 'no label', 'Air_Sumur': 'no label', 'J_KK': 'no label', 'POPULASI': 'no label', });
lyr_Batas_RT_2.set('fieldLabels', {'OBJECTID': 'no label', 'fid_1': 'no label', 'id': 'no label', 'F_id': 'no label', 'admin_leve': 'no label', 'boundary': 'no label', 'flood_pron': 'no label', 'is_in_muni': 'no label', 'is_in_prov': 'no label', 'is_in_town': 'no label', 'is_in_vill': 'no label', 'name': 'no label', 'type': 'no label', 'note': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Batas_RT_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});