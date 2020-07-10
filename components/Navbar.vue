<template>
    <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
    <div class="container">
      <nuxt-link class="navbar-brand" to="/">Bappa</nuxt-link>
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/">Home</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/about">About</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/post">Sample Post</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/contact">Contact</nuxt-link>
          </li>
          <li class="nav-item">
          <a v-if="$auth.loggedIn" @click="$auth.logout()">Sign Off</a>
          </li>
          <li class="nav-item">
          <a v-if="!$auth.loggedIn" @click="$auth.loginWith('auth0')">Sign In</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>