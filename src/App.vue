<script>
import { RouterView } from "vue-router";
import { useSettingsStore } from "@/stores/settingsStore";
import Overlay from "@/components/Overlay.vue";

export default {
  components: {
    RouterView,
    Overlay,
  },

  setup() {
    const store = useSettingsStore();
    return { store };
  },

  beforeMount() {
    // const screenWidth = document.documentElement.clientWidth;
    // if (screenWidth <= 800) {
    //   this.$router.push("/portfolio");
    // }
  },

  mounted() {
    const cursor = document.getElementById("cursor");
    const blob = document.getElementById("blob");

    const body = document.body;
    if (cursor && this.store.screenWidth < 768) {
      body.style.cursor = "none";
    }

    document.body.onpointermove = (event) => {
      const { clientX, clientY } = event;

      cursor.style.transform = `translate(${clientX}px, ${clientY}px)`;

      blob.animate(
        {
          left: `${clientX}px`,
          top: `${clientY}px`,
        },
        { duration: 3000, fill: "forwards" }
      );
    };

    this.store.readLocalStorage();
  },
};
</script>

<template>
  <div>
    <div id="blob"></div>
    <div id="blur"></div>

    <div id="cursor">
      <div id="cursor-shadow"></div>
    </div>

    <Transition name="fade">
      <Overlay v-show="store.overlayActive" />
    </Transition>

    <RouterView v-slot="{ Component, route }">
      <Transition :name="route.meta.transition" mode="out-in">
        <Component :is="Component" />
      </Transition>
    </RouterView>
  </div>
</template>

<style lang="scss" scoped>
#cursor {
  position: fixed;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  translate: -50% -50%;
  background: rgba(0, 0, 0, 0);
  border: 2px solid var(--color-secondary);
  z-index: 1000;
  pointer-events: none;
  transition: width 0.3s ease, height 0.3s ease;

  #cursor-shadow {
    display: none;
    position: fixed;
    top: 50%;
    left: 50%;
    width: 0px;
    height: 0px;
    border-radius: 50%;
    z-index: 999;
    box-shadow: 0 0 5px 5px var(--color-accent);
  }
}

.cursor-shadow--active {
  display: block !important;
}

.cursor {
  &--active {
    width: 26px !important;
    height: 26px !important;
  }

  &--click {
    width: 16px !important;
    height: 16px !important;
  }
}

#blur {
  height: 100vh;
  width: 100vw;
  position: fixed;
  left: 0;
  top: 0;
  z-index: -1;
  backdrop-filter: blur(200px);
}

#blob {
  background: linear-gradient(
    to right,
    var(--color-blob-1),
    var(--color-blob-2)
  );
  height: 500px;
  width: 500px;
  position: fixed;
  left: 50%;
  top: 50%;
  translate: -50% -50%;
  border-radius: 50%;
  animation: rotate 20s infinite;
  z-index: -2;
}

@keyframes rotate {
  from {
    rotate: 0deg;
  }

  50% {
    scale: 1 1.5;
  }

  to {
    rotate: 360deg;
  }
}

//screen width < 768px
@media screen and (max-width: 768px), screen and (max-height: 600px) {
  #blob {
    display: none;
  }

  #cursor {
    display: none;
  }
}

.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 1s ease-in-out;
}

.slide-left-enter-from {
  transform: translateX(100%);
}

.slide-left-enter-to {
  transform: translateX(0);
}

.slide-left-leave-from {
  transform: translateX(0);
}

.slide-left-leave-to {
  transform: translateX(-100%);
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.6s ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
  background: var(--color-primary);
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  background: var(--color-primary);
  opacity: 1;
}
</style>
