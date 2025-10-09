import { defineNuxtModule, createResolver, addPlugin, addComponent } from '@nuxt/kit';
import defu from 'defu';

const module = defineNuxtModule({
  meta: {
    name: "nuxt-particles",
    configKey: "particles",
    compatibility: {
      nuxt: "^4.1.3"
    }
  },
  // Default configuration options of the Nuxt module
  defaults: {
    mode: "full",
    lazy: true
  },
  setup(options, nuxt) {
    const resolver = createResolver(import.meta.url);
    if (!options.lazy && options.mode !== "custom") {
      addPlugin(resolver.resolve("./runtime/plugins/particle-loader.client"));
    }
    nuxt.options.runtimeConfig.public = defu(nuxt.options.runtimeConfig.public || {}, {
      particles: {
        mode: options.mode,
        lazy: options.lazy
      }
    });
    addComponent({
      name: "NuxtParticles",
      filePath: resolver.resolve("./runtime/components/NuxtParticles.vue")
    });
  }
});

export { module as default };
