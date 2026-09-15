<script lang="ts">
  import Terminal from '$lib/components/Terminal.svelte';
  import LanyardCard from '$lib/components/LanyardCard.svelte';
</script>

<section class="relative min-h-[85vh] flex items-center overflow-hidden">
  <div class="absolute inset-0 z-0">
    <img
      src="https://w.wallhaven.cc/full/yq/wallhaven-yqgg6k.jpg"
      alt="Hero background"
      class="w-full h-full object-cover opacity-80"
      style="mask-image: linear-gradient(to bottom, black 30%, transparent 100%); -webkit-mask-image: linear-gradient(to bottom, black 30%, transparent 100%);"
    />
    <div class="absolute inset-0 bg-gradient-to-r from-bg via-bg/60 to-transparent"></div>
  </div>

  <div class="relative z-10 mx-auto max-w-7xl px-6 pt-24 pb-16 w-full">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
        <h1 class="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-purple-400 leading-[1.1]">
          Robin.
        </h1>
        <p class="mt-6 text-lg text-gray-300 max-w-md leading-relaxed">
          A Dev building her way through one container at a time — Podman &gt; Docker, sane design and ofc something that just works.
        </p>
        <div class="mt-8 flex gap-4">
          <a
            href="#"
            class="px-6 py-3 bg-white text-black rounded font-medium text-sm hover:bg-gray-200 transition-colors"
          >
            View Projects
          </a>
          <a
            href="#"
            class="px-6 py-3 border border-white/20 text-white rounded font-medium text-sm hover:bg-white/5 transition-colors"
          >
            Get In Touch
          </a>
        </div>
        <div class="mt-4">
          <LanyardCard />
        </div>
      </div>
      <div class="hidden lg:block">
        <Terminal />
      </div>
    </div>
  </div>
</section>
