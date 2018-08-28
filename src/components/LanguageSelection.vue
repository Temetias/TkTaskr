<template>
    <div class="language-selection-container">
        <div class="language-selection">
            <div class="language-selection-item"
                v-for="(lang, index) in languages"
                :key="index"
                :class="[lang, getIfCurrent(lang)]"
                @click="setLanguage(lang)">
            </div>
        </div>    
    </div>
</template>

<script>
export default {
    name: "language-selection",
    methods: {
        setLanguage(language) {
            this.$store.commit("SET_LANGUAGE", language);
            this.$forceUpdate();
        },
        getIfCurrent(lang) {
            if (this.selectedLanguage === lang) {
                return "current";
            }
        },
    },
    computed: {
        selectedLanguage() {
            return this.$store.getters.LANGUAGE;
        },
        languages() {
            return this.$store.getters.LANGUAGES;
        },
    },
};
</script>

<style scoped>
.language-selection {
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    width: 100vw;
    height: 50px;
    padding: 5px;
    overflow: hidden;
}
.language-selection-item {
    height: 40px;
    width: 40px;
    border-radius: 50%;

    background-size: contain;
    
    transition: all .3s;
}
.current {
    height: 46px;
    width: 46px;
    margin-top: -2px;
    
    border: 3px solid whitesmoke;
}
.en {
    background-image: url("../assets/gb.svg");
}
.fi {
    background-image: url("../assets/fi.svg");
}
.swe {
    background-image: url("../assets/se.svg");
}
</style>
