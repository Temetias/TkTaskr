<template>
    <div id="app">
        <header class="nav-bar">
            <span>TkTaskr</span>
            <OptionsMenu class="options-menu-component"></OptionsMenu>
        </header>
        <router-view></router-view>
    </div>
</template>

<script>
import OptionsMenu from "@/components/OptionsMenu";

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
        OptionsMenu,
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
    background-image: url("assets/bgPlaceHold.png");
}

.nav-bar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    z-index: 2;

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

.options-menu-component {
    padding-top: 9px;
}
</style>
