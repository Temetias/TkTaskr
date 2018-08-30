<template>
    <div id="task-list">
        <v-touch @swipeleft="$emit('leftSwipe')">
            <div class="task-list-swipe-area">
                <span class="task-list-title">{{ getText("tasks") }}</span>
                <TaskListItem v-for="(task, key, index) in tasklist"
                    :key="key"
                    :task="task"
                    :focusedItemIndex="states.focusedItemIndex"
                    :index="index"
                    @focused="onItemFocus(index)"
                    @unfocused="onItemFocus()">
                </TaskListItem>
            </div>
        </v-touch>
    </div>
</template>

<script>
import TaskListItem from "@/components/TaskListItem";
import { textcontent } from "@/texts";

export default {
    name: "task-list",
    data() {
        return {
            states: {
                focusedItemIndex: -1,
            }
        };
    },
    methods: {
        getText(text) {
            return textcontent[this.$store.getters.LANGUAGE][text];
        },
        onItemFocus(index) {
            if (index !== undefined) {
                this.states.focusedItemIndex = index;
            } else {
                this.states.focusedItemIndex = -1;
            }
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
.task-list-swipe-area {
    width: 100%;
    height: calc(96vh - 56px);
}
#task-list {
    width: 100vw;
    height: calc(100vh - 56px);
    padding: 2vh 5vw;
    overflow-y: scroll;
}
</style>
