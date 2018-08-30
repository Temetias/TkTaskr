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
        <TaskList class="view-item" 
            @leftSwipe="swipe('left')"
            :class="{ 'view-item-translate-right': states.viewPositionOperator === 1 }">
        </TaskList>
    </div>
</template>

<script>
import TkButton from "@/TkComponents/TkButton";
import TaskList from "@/components/TaskList";
import NewTask from "@/components/NewTask";
import OptionsMenu from "@/components/OptionsMenu";

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
        TaskList,
        NewTask,
        OptionsMenu,
    },
    mounted() {
        this.$store.dispatch("START_TASKLIST_SYNC");
    },
    methods: {
        swipe(swipe) {
            switch (swipe) {
                case "left": 
                    this.states.viewPositionOperator = 1;
                    console.log("left");
                    return;
                case "right":
                    console.log("right");
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
    border-radius: 50%;
    width: 50px;
    height: 50px;
    transition: background-color .3;
}
.view-item {
    transition: transform .5s;
}
.view-item-translate-right {
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
