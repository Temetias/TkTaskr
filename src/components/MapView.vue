<template>
    <div id="map-view">
        <v-touch @swiperight="$emit('rightSwipe')">
            <div class="map-view-container">
                <div id="map" class="map"></div>      
            </div>
        </v-touch>    
    </div>
</template>

<script>
import "ol/ol.css";
import OSM from "ol/source/OSM";
import Point from "ol/geom/Point";
import Feature from 'ol/Feature.js';
import Map from 'ol/Map.js';
import Overlay from 'ol/Overlay.js';
import View from 'ol/View.js';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer.js';
import TileJSON from 'ol/source/TileJSON.js';
import VectorSource from 'ol/source/Vector.js';
import {Icon, Style} from 'ol/style.js';


export default {
    name: "map-view",
    data() {
        return {
            map: null,
            pointLayer: null,
        };
    },
    mounted() {
        var iconFeature = new Feature({
            geometry: new Point([0, 0]),
            name: 'Null Island',
            population: 4000,
            rainfall: 500
        });

        var iconStyle = new Style({
            image: new Icon(/** @type {module:ol/style/Icon~Options} */ ({
                anchor: [0.5, 46],
                anchorXUnits: 'fraction',
                anchorYUnits: 'pixels',
                src: 'https://openlayers.org/en/v3.20.1/examples/data/icon.png'
            }))
        });
        iconFeature.setStyle(iconStyle);
        var vectorSource = new VectorSource({
            features: [iconFeature]
        });

        var vectorLayer = new VectorLayer({
            source: vectorSource
        });

        iconFeature.setStyle(iconStyle);
        this.map = new Map({
            target: 'map',
            layers: [
                new TileLayer({
                    source: new OSM(),
                }),
                vectorLayer,
            ],
            view: new View({
                center: [3312400, 9003400],
                zoom: 14,
                minZoom: 3,
            }),
        });
    },
}
</script>

<style scoped>
#map-view {
    position: absolute;
    top: 0;
    left: 100vw;

    height: calc(100vh - 56px);
    width: 100vw;
}
#map {
    width: 100%;
    height: 100%;

    background-color: rgb(155, 155, 155);
}
.map-view-container {
    width: 100%;
    height: calc(100vh - 56px);
}
</style>
