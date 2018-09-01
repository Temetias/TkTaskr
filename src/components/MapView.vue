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
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";

export default {
    name: "map-view",
    mounted() {
        new Map({
            target: 'map',
            layers: [
                new TileLayer({
                    source: new OSM(),
                }),
            ],
            view: new View({
                center: [0, 0],
                zoom: 3,
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
}
.map-view-container {
    width: 100%;
    height: calc(100vh - 56px);
}
</style>
