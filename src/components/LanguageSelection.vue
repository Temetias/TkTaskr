<template>
    <div class="language-selection-container">
        <div class="language-selection"
            @click="states.expanded = !states.expanded"
            :class="{ 'expanded': states.expanded }">
            <div class="language-selection-item current"
                :class="selectedLanguage">
            </div>
            <div class="language-selection-item"
                v-for="(lang, index) in languages"
                :key="index"
                :class="lang"
                v-if="lang !== selectedLanguage"
                @click="setLanguage(lang)">
            </div>
        </div>    
    </div>
</template>

<script>
export default {
    name: "language-selection",
    data() {
        return {
            states: {
                expanded: false,
            },
        };
    },
    methods: {
        setLanguage(language) {
            this.$store.commit("SET_LANGUAGE", language);
            this.$forceUpdate();
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
    width: 40px;
    height: 40px;
    overflow: hidden;

    transition: width .3s;
}
.expanded {
    width: 140px;
}
.language-selection-item {
    display: inline-block;
    white-space: nowrap;

    height: 40px;
    width: 40px;
    border-radius: 50%;

    background-size: contain;
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
/*Vue trasnitions*/
.flag-fade-enter, .flag-fade-leave-to {
    opacity: 0;
}
.flag-fade-enter-active {
    transition: opacity .5s ease 2s;
}
.flag-fade-leave-active {
    transition: opacity .5s ease;
}
</style>
