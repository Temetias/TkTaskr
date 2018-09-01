<template>
    <div id="main-view">
        <NewTask v-if="states.creatingTask"
            @submitted="states.creatingTask = false"></NewTask>
        <TkButton id="add-new"
            @click="states.creatingTask = !states.creatingTask"
            :class="{ 'cancel': states.creatingTask }">
            <font-awesome-icon class="add-new-icon"
                icon="plus"
                :class="{ 'rotate': states.creatingTask }"/>
        </TkButton>
        <TaskListView class="view-item" 
            @leftSwipe="swipe('left')"
            @rightSwipe="swipe('right')"
            :class="{ 'view-item-translate-right': states.viewPositionOperator === -1,
                'view-item-translate-left': states.viewPositionOperator === 1 }">
        </TaskListView>
        <MapView class="view-item"
            @rightSwipe="swipe('right')"
            :class="{ 'view-item-translate-right': states.viewPositionOperator === -1,
                'view-item-translate-left': states.viewPositionOperator === 1 }">
        </MapView>
    </div>
</template>

<script>
import TkButton from "@/TkComponents/TkButton";
import TaskListView from "@/components/TaskListView";
import NewTask from "@/components/NewTask";
import OptionsMenu from "@/components/OptionsMenu";
import MapView from "@/components/MapView";

export default {
    name: "main-view",
    data() {
        return {
            states: {
                creatingTask: false,
                viewPositionOperator: 0,
            },
        };
    },
    components: {
        TkButton,
        TaskListView,
        NewTask,
        OptionsMenu,
        MapView,
    },
    mounted() {
        this.$store.dispatch("START_TASKLIST_SYNC");
    },
    methods: {
        swipe(swipe) {
            switch (swipe) {
                case "left": 
                    this.states.viewPositionOperator++;
                    console.log("left " + this.states.viewPositionOperator);
                    return;
                case "right":
                    this.states.viewPositionOperator--;
                    console.log("right " + this.states.viewPositionOperator);
                    return;
            };
        },
    }
};
</script>

<style scoped>
#main-view {
    position: fixed;
    top: 56px;
    left: 0;

    height: calc(100vh - 56px);
    width: 100vw;
    overflow: hidden;
}
#add-new {
    position: fixed;
    bottom: 1vh;
    right: 1vh;
    z-index: 10;

    border-radius: 50%;
    width: 50px;
    height: 50px;
    
    transition: background-color .3;
}
.view-item {
    transition: transform .5s;
}
.view-item-translate-right {
    transform: translateX(100%);
}
.view-item-translate-left {
    transform: translateX(-100%);
}
.cancel {
    background-color: red;
}
.add-new-icon {
    height: 100%;
    width: 100%;
    transition: transform .1s;
}
.rotate {
    transform: rotate(45deg);
}
h1, h2 {
    font-weight: normal;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #35495E;
}

</style>
