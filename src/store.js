import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        user: {
            email: "",
        },
        tasklist: {},
        language: "en",
        languages: ["en", "fi", "swe"],
    },
    getters: {
        USER: (state) => {
            return state.user;
        },
        TASKLIST: (state) => {
            return state.tasklist;
        },
        LANGUAGE: (state) => {
            return state.language;
        },
        LANGUAGES: (state) => {
            return state.languages;
        },
    },
    mutations: {
        SET_USER: (state, payload) => {
            state.user = payload;
        },
        SET_TASKLIST: (state, payload) => {
            state.tasklist = payload;
        },
        SET_LANGUAGE: (state, payload) => {
            state.language = payload;
        },
    },
    actions: {
        START_TASKLIST_SYNC: async (context) => {
            console.log("Started syncing with firebase...");
            firebase.database().ref("tasklist").on("value", (snapshot) => {
                console.log("Firebase returned a value!");
                console.log(snapshot.val());
                context.commit("SET_TASKLIST", snapshot.val());
                // TODO: Error handling
            });
        },
        PUSH_TO_TASKLIST: async (context, payload) => {
            console.log("Pushing to firebase...");
            firebase.database().ref("tasklist").push().set(payload);
            // TODO: Error handling
        }
    },
});