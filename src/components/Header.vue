<script setup>
import { storeToRefs } from "pinia"
import { authMediumStore } from "@/stores/authsStore"
const { isLoggedIn, getUserStore } = storeToRefs(authMediumStore())
</script>
<template>
    <header>
        <nav class="navbar navbar-light">
            <div class="container">
                <router-link class="navbar-brand" :to="{name: 'globalFeed'}">
                    MediumVue
                </router-link>
                <ul class="nav navbar-nav pull-xs-right">
                    <li link class="nav-item">
                        <router-link class="nav-link" :to="{name: 'globalFeed'}">Home</router-link>
                    </li>
                    <template v-if="!isLoggedIn">
                        <li link class="nav-item">
                            <router-link class="nav-link" :to="{name: 'login'}">Login</router-link>
                        </li>
                        <li link class="nav-item">
                            <router-link class="nav-link" :to="{name: 'register'}">Register</router-link>
                        </li>
                    </template>
                    <template v-if="isLoggedIn">
                        <li link class="nav-item">
                            <span class="nav-link">
                                <i class="ion-compose" />
                                &nbsp; New Article
                            </span>
                        </li>
                        <li link class="nav-item">
                            <span class="nav-link">
                                <i class="ion-gear-a" />
                                &nbsp; Settings
                            </span>
                        </li>
                        <li link class="nav-item">
                            <span class="nav-link d-flex">
                                <figure>
                                    <img class="user-pic" :src="getUserStore.image" />
                                </figure>
                                &nbsp;{{ getUserStore.username }}
                            </span>
                        </li>
                    </template>
                </ul>
            </div>
        </nav>
    </header>
</template>

<style scoped>
    .nav .nav-item .router-link-active .router-link-exact-active .nav-link {
        color: red;
    }
</style>