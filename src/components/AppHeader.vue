<template>
  <header>
    <img
      src="../assets/logo.png"
      alt="logo"
      height="40"
    >
    <p>Kamẽ</p>
    <nav id="nav">
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/about">About</router-link>
        </li>
        <li>
          <router-link to="/game">Game</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "app-header",
};
</script>

<style lang="scss" scoped>
p {
  color: #444;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}

header {
  display: flex;
  border-bottom: 1px solid #ccc;
  padding: 0.1rem 1rem;

  p {
    margin-left: 1rem;
  }
  nav {
    margin-left: auto;

    ul {
      list-style: none;
    }

    ul li {
      display: inline-flex;
      margin-left: 0.5rem;
    }

    ul li a {
      text-decoration: none;
      color: #2c3e50;
    }

    a.router-link-exact-active {
      font-weight: bold;
      color: #2c3e40;
    }
  }
}
</style>