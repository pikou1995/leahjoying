<template>
  <div class="down">
    <slot>
      <img src="/static/imgs/down.png" />
    </slot>
  </div>
</template>

<style scoped>
.down {
  position: absolute;
  bottom: 0;
  text-align: center;
  width: 100%;
}

.down img {
  width: 30px;
  animation: dianhuo 2s linear infinite alternate;
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
