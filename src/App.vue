<template>
    <div id="app">
        <header class="nav-bar">
            <span>TkTaskr</span>
            <LanguageSelection class="language-selection-component"></LanguageSelection>
        </header>
        <router-view></router-view>
    </div>
</template>

<script>
import LanguageSelection from "@/components/LanguageSelection";

export default {
    name: "app",
    data() {
        return {
            authenticated: false,
        };
    },
    mounted() {
        this.$router.replace({ name: "main" }); // TODO: swap back to login
    },
    components: {
        LanguageSelection,
    },
};
</script>

<style>
*{
    box-sizing: border-box;
}
body {
    margin: 0;
    padding: 0;
}

#app {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    background-image: url("../static/img/bgPlaceHold.png");
}

.nav-bar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    height: 56px;
    width: 100vw;
    padding: 0 16px 0 24px;
    
    background-color: #35495e;
    color: #ffffff;
}

header span {
    position: relative;
    
    display: block;
    
    padding-top: 16px;
    
    font-size: 20px;
    line-height: 1;
    letter-spacing: 0.02em;
    font-weight: 400;
}

.language-selection-component {
    padding-top: 9px;
}
</style>
