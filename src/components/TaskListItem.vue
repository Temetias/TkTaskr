<template>
    <div class="task-list-item"
        @click="handleFocus()">
        <div class="task-list-item-left">
            <div class="task-list-item-status-container"
                :class="getIcon(task.status)">
                <font-awesome-icon class="task-list-item-status"
                    :icon="getIcon(task.status)">
                </font-awesome-icon>
            </div>
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
                <transition name="grow-down">
                    <div class="task-list-item-description"
                        v-if="focusedItemIndex === index">
                        {{ task.description }}
                    </div>
                </transition>
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
                + " " + months[date.getMonth()]
                + " " + date.getFullYear()
                + " " + date.getHours()
                + ":" + date.getMinutes();
        },
    },
    methods: {
        getIcon(status) {
            if (status === -1) {
                return "exclamation";
            }
            if (status === 0) {
                return "walking";
            }
            if (status === 1) {
                return "check";
            }
        },
        handleFocus() {
            if (this.focusedItemIndex === this.index) {
                this.$emit("unfocused");
            } else {
                this.$emit("focused");
            }
        },
    },
    props: ["task", "focusedItemIndex", "index"],
}
</script>

<style scoped>
.task-list-item {
    display: flex;
    flex-direction: row;

    margin: 5px;
    padding: 10px;
    border-radius: 18px;

    background-color: rgb(235, 235, 235, 0.8);
    -webkit-box-shadow: 3px 3px 3px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 3px 3px 3px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 3px 3px 3px 0px rgba(0, 0, 0, 0.75);
}
.task-list-item-left {
    width: 40px;
}
.task-list-item-right {
    padding-left: 10px;
}
.task-list-item-status {
    color: whitesmoke;
}
.task-list-item-status-container {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    
    line-height: 40px;
    text-align: center;
    font-size: 25px;
}
.exclamation {
    background-color: tomato;
}
.walking {
    background-color: rgb(233, 196, 75);
}
.check {
    background-color: rgb(90, 179, 90);
}
.task-list-item-description {
    max-height: 90vh;
}
/*Vue transitions

TODO: these are just crap, make something better*/
.grow-down-enter-active {
    transition: max-height 1s linear;
}
.grow-down-leave-active {
    transition: max-height .3s linear;
}
.grow-down-enter, .grow-down-leave-to {
    max-height: 0px;
}
</style>
