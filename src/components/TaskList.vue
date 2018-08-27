<template>
    <div id="task-list">
        <span class="task-list-title">{{ getText("tasks") }}</span>
        <TaskListItem v-for="(task, key, index) in tasklist"
            :key="key"
            :task="task"
            @focused="onItemFocus(index)">
        </TaskListItem>
    </div>
</template>

<script>
import TaskListItem from "@/components/TaskListItem";
import { textcontent } from "@/texts";

export default {
    name: "task-list",
    methods: {
        getText(text) {
            return textcontent[this.$store.getters.LANGUAGE][text];
        },
        onItemFocus(index) {
            // TODO
            console.log(index);
        },
    },
    computed: {
        tasklist() {
            return this.$store.getters.TASKLIST;
        },
    },
    components: {
        TaskListItem,
    },
};
</script>

<style scoped>
#task-list {
    width: 100vw;
    height: calc(100vh - 56px);
    padding: 2vh 5vw;
    overflow-y: scroll;
}
</style>
