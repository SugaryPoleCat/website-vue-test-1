<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />
</template>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  /* width: 100%; */
  margin: 0px auto;
}

#wrapper {
  width: 100%;
}

nav {
  padding: 30px;
}

a {
  text-decoration: none;
}

nav a {
  font-weight: bold;
  color: #793948;
  transition: all ease-in-out 0.25s;
}

nav a:hover {
  color: #ec4e85;
}

nav a.router-link-exact-active {
  color: #ec4e85;
}

footer {
  /* background-color: #f1f1f1; */
  padding: 20px 0;
  text-align: center;
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100%;
  font-size: 12px;
}

.container {
  max-width: 960px;
  margin: 0 auto;
}
</style>
