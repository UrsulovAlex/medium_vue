<script setup>
import { storeToRefs } from "pinia";
import { authMediumStore } from "@/stores/authsStore"
import ErrorValidation from "@/components/ErrorValidation.vue"
const { loading, validationErrors } = storeToRefs(authMediumStore())
const { login } = authMediumStore();
let email = null;
let password = null;

function onSubmit() {
  const paylood = {
    email,
    password,
  };
  login(paylood);
}
</script>
<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Sign in</h1>
          <p class="text-xs-center">
            <router-link :to="{ name: 'register' }">
              Need an account?
            </router-link >
          </p>
          <form @submit.prevent="onSubmit">
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="email"
                placeholder="Email"
                v-model="email"
              />
            </fieldset>
            <ErrorValidation
              v-if="validationErrors?.email"
              :errorMessages="validationErrors.email"
            />
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="password"
                placeholder="Password"
                v-model="password"
              />
            </fieldset>
            <ErrorValidation
              v-if="validationErrors?.password"
              :errorMessages="validationErrors.password"
            />
            <button
              :disabled="loading"
              class="btn btn-lg btn-primary pull-xs-right"
              type="submit"
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
