<template>
  <div class="down">
    <img src="/static/imgs/down.png" />
  </div>
</template>

<style scoped>
.down {
  position: absolute;
  bottom: 0;
  text-align: center;
  width: 100%;
  animation: dianhuo 2s linear infinite alternate;
}

.down img {
  width: 30px;
}

@keyframes dianhuo {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
