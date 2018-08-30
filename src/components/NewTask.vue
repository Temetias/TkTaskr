<template>
    <div id="new-task">
        <h1 class="new-task-title">{{ getText("new_task") }}</h1>
        <input class="new-task-input" 
            type="text"
            v-model="task.title"
            :placeholder="getText('title')"
            maxlength="30">
        <textarea class="new-task-textarea"
            type="text"
            v-model="task.description"
            :placeholder="getText('description')"
            maxlength="200"
            rows="5">
        </textarea>
        <div class="new-task-location">TODO: Location</div>
        <div class="new-task-priority-container">
            <TkToggleButton id="new-task-priority low"
                v-model="states.priorityLow"
                @click="priorityOperator(1)">
                {{ getText("low") }}
            </TkToggleButton>
            <TkToggleButton id="new-task-priority medium"
                v-model="states.priorityMedium"
                @click="priorityOperator(2)">
                {{ getText("medium") }}
            </TkToggleButton>
            <TkToggleButton id="new-task-priority high"
                v-model="states.priorityHigh"
                @click="priorityOperator(3)">
                {{ getText("high") }}
            </TkToggleButton>
        </div>
        <TkButton id="new-task-submit"
            @click="submitTask()">
            {{ getText("submit") }}
        </TkButton>
    </div>
</template>

<script>
import TkToggleButton from "@/TkComponents/TkToggleButton";
import TkButton from "@/TkComponents/TkButton";
import { textcontent } from "@/texts";

export default {
    name: "new-task",
    components: {
        TkToggleButton,
        TkButton,
    },
    data() {
        return {
            states: {
                priorityLow: false,
                priorityMedium: true,
                priorityHigh: false,
            },
        };
    },
    methods: {
        submitTask() {
            if (
                !this.task.title ||
                !this.task.description
                // TODO: Check more
            ) {
                // TODO: UI Feedback.
                return;
            }
            this.$store.dispatch("PUSH_TO_TASKLIST", this.task);
            this.$emit("submitted");
            // TODO: UI Feedback.
        },
        priorityOperator(prio) {
            switch (prio) {
                case 1:
                    this.states.priorityMedium = false;
                    this.states.priorityHigh = false;
                    return;
                case 2:
                    this.states.priorityLow = false;
                    this.states.priorityHigh = false;
                    return;
                case 3:
                    this.states.priorityLow = false;
                    this.states.priorityMedium = false;
                    return;
            }
        },
        getText(text) {
            return textcontent[this.$store.getters.LANGUAGE][text];
        },
    },
    computed: {
        task() {
            return {
                title: "",
                description: "",
                lon: -1,
                lat: -1,
                locationname: "",
                created: Date.now(),
                deadline: -1,
                priority: this.priority,
                status: -1,
            };
        },
        priority() {
            if (this.states.priorityHigh) {
                return 3;
            } else if (this.states.priorityMedium) {
                return 2;
            } else if (this.states.priorityLow) {
                return 1;
            } else {
                return 2;
            }
        }
    },
};
</script>

<style scoped>
#new-task {
    position: absolute;
    display: flex;
    
    width: 100vw;
    height: 100%;
    padding: 2vh 5vw;
    flex-direction: column;
    background-color: whitesmoke;
}
h1 {
    font-weight: normal;
}
.new-task-input {
    padding: 10px;
    border-radius: 100px;
    border: 2px solid #35495e;
    margin-top: 1vh;
}
.new-task-textarea {
    padding: 10px;
    border-radius: 19px;
    border: 2px solid #35495e;
    margin-top: 1vh;
}
</style>
