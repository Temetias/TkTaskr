<template>
    <div class="options-menu">
        <div class="options-menu-cog"
            @click="states.open = !states.open">
            <font-awesome-icon class="options-menu-cog-icon"
                icon="cog">
            </font-awesome-icon>
        </div>
        <transition name="slide-down">
            <div class="options-menu-container"
                v-if="states.open">
                <span class="options-menu-container-span">{{ getText("language") }}</span>
                <LanguageSelection class="language-selection-component"></LanguageSelection>
                <div class="options-menu-container-line"></div>
                <div class="options-menu-container-close"
                    @click="states.open = false">
                    <font-awesome-icon class="options-menu-container-close-icon"
                        icon="caret-up">
                    </font-awesome-icon>
                </div>
            </div>
        </transition>
    </div>    
</template>

<script>
import LanguageSelection from "@/components/LanguageSelection";
import { textcontent } from "@/texts";

export default {
    name: "options-menu",
    data() {
        return {
            states: {
                open: false,
            },
        };
    },
    methods: {
        getText(text) {
            return textcontent[this.$store.getters.LANGUAGE][text];
        },
    },
    components: {
        LanguageSelection,
    },
};
</script>

<style scoped>
.options-menu-cog {
    height: 35px;
    width: 35px;

    font-size: 35px;
}
.options-menu-container {
    position: fixed;
    top: 56px;
    left: 0px;
    z-index: 20;

    width: 100vw;
    height: calc(100vh - 56px);

    background-color: rgba(88, 88, 88, .95);

    transform-origin: top;
}
.options-menu-container-line {
    height: 1px;
    width: 90vw;
    margin: 10px 5vw;

    background-color: whitesmoke;
}
.options-menu-container-span {
    text-align: center;
}
.options-menu-container-close {
    position: absolute;
    bottom: 0px;
    
    width: 90vw;
    margin: 0 5vw;
    padding-bottom: 30px;
    height: 20px;

    text-align: center;
    font-size: 20px;
    border-top: 1px solid whitesmoke;
}
.language-selection-component {
    margin: 15px 0;
}
/*Vue transitions*/
.slide-down-enter-active, .slide-down-leave-active {
    transition: transform .3s;
}
.slide-down-enter, .slide-down-leave-to {
    transform: translateY(-100%);
}
</style>
