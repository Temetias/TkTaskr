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
        <TaskList></TaskList>
    </div>
</template>

<script>
import TkButton from "@/TkComponents/TkButton";
import TaskList from "@/components/TaskList";
import NewTask from "@/components/NewTask";

export default {
    name: "main-view",
    data() {
        return {
            states: {
                creatingTask: false,
            },
        };
    },
    components: {
        TkButton,
        TaskList,
        NewTask,
    },
    mounted() {
        this.$store.dispatch("START_TASKLIST_SYNC");
    },
};
</script>

<style scoped>
#add-new {
    position: fixed;
    bottom: 1vh;
    right: 1vh;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    transition: background-color .3;
}
.cancel {
    background-color: red;
}
.add-new-icon {
    height: 100%;
    width: 100%;
    transition: transform .3s;
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
