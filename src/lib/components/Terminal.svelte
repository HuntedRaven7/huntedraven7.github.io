<script lang="ts">
  const lines = [
    { text: '$ whoami', delay: 0 },
    { text: 'Robin', delay: 800 },
    { text: '$ ls ~/projects', delay: 1600 },
    { text: 'Bluefin LTS maintainer', delay: 2400 },
    { text: 'Microraptor (FSDK Server Image)', delay: 3200 },
    { text: 'and more!', delay: 4000 },
    { text: '$ cat ~/status.txt', delay: 4800 },
    { text: 'OS: Bluefin (CentOS10 Stream Bootc version)', delay: 5600 },
    { text: 'Fav-langs: Elixir, Zig and Rust', delay: 6400 },
    { text: 'Misc: https://robin.tarxz.zip/blog', delay: 7200 },
  ];

  let visibleLines = $state<string[]>([]);
  let currentIndex = $state(0);
  let currentText = $state('');
  let charIndex = $state(0);
  let isDeleting = $state(false);
  let showCursor = $state(true);

  const typeSpeed = 40;
  const deleteSpeed = 20;
  const pauseAfterType = 600;
  const pauseAfterDelete = 300;

  function type() {
    if (currentIndex >= lines.length) {
      showCursor = false;
      return;
    }

    const line = lines[currentIndex];

    if (!isDeleting) {
      currentText = line.text.slice(0, charIndex + 1);
      charIndex++;

      if (charIndex >= line.text.length) {
        visibleLines = [...visibleLines, currentText];
        currentText = '';
        charIndex = 0;
        currentIndex++;
        setTimeout(type, pauseAfterType);
        return;
      }

      setTimeout(type, typeSpeed);
    }
  }

  $effect(() => {
    const timer = setTimeout(type, 500);
    return () => clearTimeout(timer);
  });
</script>

<div class="w-full max-w-[720px] mx-auto lg:mx-0">
  <div class="bg-[#1e1e1e]/90 backdrop-blur-md rounded-lg border border-white/10 shadow-2xl overflow-hidden">
    <div class="flex items-center gap-2 px-4 py-3 bg-[#303030]/80 border-b border-white/5">
      <button aria-label="Close" class="w-3 h-3 rounded-full bg-[#ff5f57] hover:brightness-110 transition"></button>
      <button aria-label="Minimize" class="w-3 h-3 rounded-full bg-[#febc2e] hover:brightness-110 transition"></button>
      <button aria-label="Maximize" class="w-3 h-3 rounded-full bg-[#28c840] hover:brightness-110 transition"></button>
      <span class="ml-4 text-xs text-gray-400 font-mono">robin@portfolio:~</span>
    </div>
    <div class="p-6 font-mono text-sm leading-relaxed min-h-[342px]">
      {#each visibleLines as line}
        <div class="text-gray-300 whitespace-pre-wrap break-words">{line}</div>
      {/each}
      {#if showCursor}
        <div class="text-green-400 whitespace-pre-wrap break-words">{currentText}<span class="animate-pulse">|</span></div>
      {/if}
    </div>
  </div>
</div>
