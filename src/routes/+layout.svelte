<script lang="ts">
  import './layout.css';
  import favicon from '$lib/assets/favicon.svg';

  let { children } = $props();

  let activeDropdown = $state<string | null>(null);
  let mobileMenuOpen = $state(false);

  function toggleDropdown(name: string) {
    activeDropdown = activeDropdown === name ? null : name;
    commentsOpen = false;
  }

  function closeDropdowns() {
    activeDropdown = null;
    commentsOpen = false;
  }

  const dropdowns = {
    about: {
      title: 'About Me',
      content: 'Hi, I am a dev that loves helping with open source! Whether it\'s something container native or a tool that helps others I will either build it or help, I just want to see open source flourish especially cloud native tech! Whatever it may be you can count on me to build it!'
    },
    skills: {
      title: 'Skills',
      content: 'JavaScript, TypeScript, Python, Rust, Go, Docker, Linux, Git, and modern web frameworks.'
    },
    projects: {
      title: 'Projects',
      content: 'Open source contributions, personal projects, and experiments with emerging technologies.'
    },
    contact: {
      title: 'Contact',
      content: 'Reach out via GitHub, email, or find me on social media. I\'m always open to interesting conversations.'
    }
  };

  let commentsOpen = $state(false);
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  <link rel="alternate" type="application/rss+xml" title="Robin" href="https://robin.tarxz.zip/blog/rss.xml" />
  <title>Container Nerd</title>
  <meta name="description" content="A Dev building her way through one container at a time." />
  <script src="https://utteranc.es/client.js"
    repo="huntedraven7/huntedraven7.github.io"
    issue-term="pathname"
    theme="dark"
    crossorigin="anonymous"
    async>
  </script>
</svelte:head>

<div class="min-h-screen flex flex-col" onclick={closeDropdowns} onkeydown={(e) => { if (e.key === 'Escape') closeDropdowns(); }} role="presentation">
  <header class="md:hidden flex items-center justify-between px-6 py-4 border-b border-surface-border">
    <a href="/" class="flex items-center">
      <span class="text-white font-bold text-xl tracking-tight">Container Nerd</span>
    </a>
    <button onclick={() => mobileMenuOpen = !mobileMenuOpen} class="p-2 text-text-secondary hover:text-white transition-colors" aria-label="Menu">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
    </button>
  </header>

  {#if mobileMenuOpen}
    <div class="md:hidden fixed inset-0 z-40 bg-bg/95 backdrop-blur-md" onclick={() => mobileMenuOpen = false} onkeydown={(e) => { if (e.key === 'Escape') mobileMenuOpen = false; }} role="button" tabindex="0" aria-label="Close menu">
      <nav class="flex flex-col items-center justify-center h-full gap-6 text-lg text-text-secondary">
        <a href="https://robin.tarxz.zip/blog/" onclick={() => mobileMenuOpen = false} class="hover:text-white transition-colors">Blog</a>
        <button onclick={() => { toggleDropdown('projects'); mobileMenuOpen = false; }} class="hover:text-white transition-colors">Projects</button>
        <button onclick={() => { toggleDropdown('about'); mobileMenuOpen = false; }} class="hover:text-white transition-colors">About</button>
        <button onclick={() => { toggleDropdown('skills'); mobileMenuOpen = false; }} class="hover:text-white transition-colors">Skills</button>
        <button onclick={() => { toggleDropdown('contact'); mobileMenuOpen = false; }} class="hover:text-white transition-colors">Contact</button>
        <button onclick={() => { activeDropdown = null; commentsOpen = !commentsOpen; mobileMenuOpen = false; }} class="hover:text-white transition-colors">Comments</button>
      </nav>
    </div>
  {/if}

  <main class="flex-1 pb-20">
    {@render children()}
  </main>

  <nav class="fixed bottom-0 left-0 right-0 bg-transparent z-50">
    <div class="mx-auto max-w-7xl px-4">
      <div class="hidden md:flex items-center justify-between h-14">
        <div class="flex items-center gap-1">
          <a href="/" class="px-3 py-2 text-white font-bold text-sm tracking-tight hover:bg-white/5 rounded transition-colors">
            Container Nerd
          </a>
          <a href="https://robin.tarxz.zip/blog/" class="px-3 py-2 text-text-secondary hover:text-white hover:bg-white/5 rounded text-sm transition-colors">
            Blog
          </a>
          <div class="relative">
            <button onclick={(e) => { e.stopPropagation(); toggleDropdown('projects'); }} class="px-3 py-2 text-text-secondary hover:text-white hover:bg-white/5 rounded text-sm transition-colors">
              Projects
            </button>
            {#if activeDropdown === 'projects'}
              <div class="absolute bottom-full left-0 mb-2 w-72 bg-surface/95 backdrop-blur-md border border-surface-border rounded-lg shadow-2xl p-5">
                <h3 class="text-white font-medium mb-2">{dropdowns.projects.title}</h3>
                <p class="text-sm text-text-secondary leading-relaxed">{dropdowns.projects.content}</p>
              </div>
            {/if}
          </div>
          <div class="relative">
            <button onclick={(e) => { e.stopPropagation(); toggleDropdown('about'); }} class="px-3 py-2 text-text-secondary hover:text-white hover:bg-white/5 rounded text-sm transition-colors">
              About
            </button>
            {#if activeDropdown === 'about'}
              <div class="absolute bottom-full left-0 mb-2 w-72 bg-surface/95 backdrop-blur-md border border-surface-border rounded-lg shadow-2xl p-5">
                <h3 class="text-white font-medium mb-2">{dropdowns.about.title}</h3>
                <p class="text-sm text-text-secondary leading-relaxed">{dropdowns.about.content}</p>
              </div>
            {/if}
          </div>
          <div class="relative">
            <button onclick={(e) => { e.stopPropagation(); toggleDropdown('skills'); }} class="px-3 py-2 text-text-secondary hover:text-white hover:bg-white/5 rounded text-sm transition-colors">
              Skills
            </button>
            {#if activeDropdown === 'skills'}
              <div class="absolute bottom-full left-0 mb-2 w-72 bg-surface/95 backdrop-blur-md border border-surface-border rounded-lg shadow-2xl p-5">
                <h3 class="text-white font-medium mb-2">{dropdowns.skills.title}</h3>
                <p class="text-sm text-text-secondary leading-relaxed">{dropdowns.skills.content}</p>
              </div>
            {/if}
          </div>
          <div class="relative">
            <button onclick={(e) => { e.stopPropagation(); toggleDropdown('contact'); }} class="px-3 py-2 text-text-secondary hover:text-white hover:bg-white/5 rounded text-sm transition-colors">
              Contact
            </button>
            {#if activeDropdown === 'contact'}
              <div class="absolute bottom-full left-0 mb-2 w-72 bg-surface/95 backdrop-blur-md border border-surface-border rounded-lg shadow-2xl p-5">
                <h3 class="text-white font-medium mb-2">{dropdowns.contact.title}</h3>
                <p class="text-sm text-text-secondary leading-relaxed">{dropdowns.contact.content}</p>
              </div>
            {/if}
          </div>
          <div class="relative">
            <button onclick={(e) => { e.stopPropagation(); activeDropdown = null; commentsOpen = !commentsOpen; }} class="px-3 py-2 text-text-secondary hover:text-white hover:bg-white/5 rounded text-sm transition-colors">
              Comments
            </button>
            {#if commentsOpen}
              <div class="absolute bottom-full left-0 mb-2 w-[480px] bg-surface/95 backdrop-blur-md border border-surface-border rounded-lg shadow-2xl p-5">
                <h3 class="text-white font-medium mb-3">Comments</h3>
                <div class="utterances"></div>
              </div>
            {/if}
          </div>
        </div>
        <div class="flex items-center gap-2">
          <button class="p-2 text-text-secondary hover:text-white hover:bg-white/5 rounded transition-colors" aria-label="Search">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
          </button>
          <button class="px-3 py-1.5 rounded border border-surface-border text-text-secondary hover:text-white hover:border-white/20 text-sm transition-colors">
            EN
          </button>
        </div>
      </div>
    </div>
  </nav>
</div>
