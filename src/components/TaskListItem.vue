<template>
    <div class="task-list-item"
        @click="states.focused = true, $emit('focused')">
        <div class="task-list-item-left">
                {{ task.status }}
        </div>
        <div class="task-list-item-right">
            <div class="task-list-item-header">
                <div class="task-list-item-title">
                    {{ task.title }}
                </div>
                <div class="task-list-item-created">
                    {{ date }}
                </div>
            </div>
            <div class="task-list-item-content">
                <div class="task-list-item-description"
                    v-if="states.focused">
                    {{ task.description }}
                </div>
                <div class="task-list-item-priority">
                    {{ task.priority }}
                </div>
            </div>
        </div>
    </div>  
</template>

<script>
import { textcontent } from "@/texts";

export default {
    name: "task-list-item",
    data() {
        return {
            states: {
                focused: false,
            },
        };
    },
    computed: {
        date() {
            const date = new Date(this.task.created);
            const months = textcontent[this.$store.getters.LANGUAGE]["months"];
            return date.getDate() 
                + "." + months[date.getMonth()]
                + "." + date.getFullYear()
                + " " + date.getHours()
                + "." + date.getMinutes();
        },
    },
    props: ["task"],
}
</script>

<style scoped>
.task-list-item {
    margin: 5px;
    padding: 10px;
    border-radius: 18px;

    background-color: rgb(235, 235, 235, 0.8);
    -webkit-box-shadow: 3px 3px 3px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 3px 3px 3px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 3px 3px 3px 0px rgba(0, 0, 0, 0.75);
}
</style>
