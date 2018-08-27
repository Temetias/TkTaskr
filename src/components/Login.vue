<template>
    <div id="login">
        <div class="logo-container">
            <img src="../assets/logo.png" alt="Vue.js PWA">
        </div>
        <div class="login-container">
            <h1 class="login-title">{{ getText("login") }}
                <TkLoader class="login-loading"
                    :loading="states.loading">
                </TkLoader>
            </h1>
            <input class="login-input"
                v-model="input.email"
                type="email"
                :placeholder="getText('emailExample')"
                maxlength="50">
            <input class="login-input"
                v-model="input.password"
                type="password"
                :placeholder="getText('passwordExample')"
                maxlength="30">
            <div class="login-buttons">
                <TkButton class="login-button"
                    @click="register()">
                    {{ getText("register") }}
                </TkButton>
                <TkButton class="login-button"
                    @click="tryLogin()">
                    {{ getText("login") }}
                </TkButton>
            </div>
        </div>
    </div>
</template>

<script>
import TkButton from "@/TkComponents/TkButton";
import TkLoader from "@/TkComponents/TkLoader";
import TkTextField from "@/TkComponents/TkTextField";
import firebase from "firebase";
import { textcontent } from "@/texts";

export default {
    name: "login",
    data() {
        return {
            input: {
                email: "",
                password: "",
            },
            states: {
                loading: false,
            },
        };
    },
    methods: {
        getText(text) {
            return textcontent[this.$store.getters.LANGUAGE][text];
        },
        tryLogin() {
            if (!this.input.email || !this.input.password) {
                return;
            }
            this.states.loading = true;
            firebase.auth().signInWithEmailAndPassword(this.input.email, this.input.password)
                .then((data) => {
                        this.states.loading = false;
                        this.$store.commit("SET_USER", { email: data.user });
                        this.$router.replace({ name: "main" });
                    },
                    (err) => {
                        // TODO
                        this.states.loading = false;
                        alert("Oops... " + err);
                    },
                );
        },
        register() {
            if (!this.input.email || !this.input.password) {
                return;
            }
            this.states.loading = true;
            firebase.auth().createUserWithEmailAndPassword(this.input.email, this.input.password)
                .then((data) => {
                        this.states.loading = false;
                        console.log(data);
                        alert("Successfully created user!");
                        // TODO
                    },
                    (err) => {
                        // TODO
                        this.states.loading = false;
                        alert("Oops... " + err);
                    },
                );
        },
    },
    components: {
        TkButton,
        TkLoader,
        TkTextField,
    },
};
</script>

<style scoped>
h1 {
    font-weight: normal;
}
#login {
    display: flex;
    
    width: 100vw;
    height: 100%;
    padding: 2vh 5vw;
    flex-direction: column;
}
.logo-container {
    align-self: center;
}
.login-loading {
    margin-bottom: -9%;
    margin-right: -40px;
}
.login-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.login-input {
    padding: 10px;
    border-radius: 100px;
    border: 2px solid #35495e;
    margin-top: 1vh;
}
.login-buttons {
    display: flex;
    flex-direction: column;
}
.login-button {
    margin-top: 1vh;
}
@media only screen and (min-width: 500px) {
    #login {
        flex-direction: row;
        justify-content: space-around;
    }
    .login-buttons {
        width: 100%;
        flex-direction: row;
        justify-content: space-around;
    }
}
</style>
