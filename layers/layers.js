var wms_layers = [];

var format_IND_adm1_0 = new ol.format.GeoJSON();
var features_IND_adm1_0 = format_IND_adm1_0.readFeatures(json_IND_adm1_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IND_adm1_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IND_adm1_0.addFeatures(features_IND_adm1_0);
var lyr_IND_adm1_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IND_adm1_0, 
                style: style_IND_adm1_0,
                popuplayertitle: 'IND_adm1',
                interactive: true,
    title: 'IND_adm1<br />\
    <img src="styles/legend/IND_adm1_0_0.png" /> 29 - 45<br />\
    <img src="styles/legend/IND_adm1_0_1.png" /> 45 - 52<br />\
    <img src="styles/legend/IND_adm1_0_2.png" /> 52 - 60<br />\
    <img src="styles/legend/IND_adm1_0_3.png" /> 60 - 64<br />\
    <img src="styles/legend/IND_adm1_0_4.png" /> 64 - 80<br />' });

lyr_IND_adm1_0.setVisible(true);
var layersList = [lyr_IND_adm1_0];
lyr_IND_adm1_0.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', 'NL_NAME_1': 'NL_NAME_1', 'VARNAME_1': 'VARNAME_1', 'India_SDG_Index_State_Rank_Data_2023-24_field_2': 'India_SDG_Index_State_Rank_Data_2023-24_field_2', 'India_SDG_Index_State_Rank_Data_2023-24_field_3': 'India_SDG_Index_State_Rank_Data_2023-24_field_3', });
lyr_IND_adm1_0.set('fieldImages', {'ID_0': 'TextEdit', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'ID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'TYPE_1': 'TextEdit', 'ENGTYPE_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'VARNAME_1': 'TextEdit', 'India_SDG_Index_State_Rank_Data_2023-24_field_2': 'TextEdit', 'India_SDG_Index_State_Rank_Data_2023-24_field_3': 'Range', });
lyr_IND_adm1_0.set('fieldLabels', {'ID_0': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', 'ID_1': 'no label', 'NAME_1': 'no label', 'TYPE_1': 'no label', 'ENGTYPE_1': 'no label', 'NL_NAME_1': 'no label', 'VARNAME_1': 'no label', 'India_SDG_Index_State_Rank_Data_2023-24_field_2': 'no label', 'India_SDG_Index_State_Rank_Data_2023-24_field_3': 'no label', });
lyr_IND_adm1_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});