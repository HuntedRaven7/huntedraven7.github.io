<script lang="ts">
  let statusColor: Record<string, string> = {
    online: '#28c840',
    idle: '#febc2e',
    dnd: '#ff5f57',
    offline: '#9ca3af'
  };
</script>

<div class="max-w-sm">
  <div class="flex items-center gap-3 mb-3">
    <img
      src="https://cdn.discordapp.com/avatars/523906270801952789/c6cc2b9bd2e2abc60bbbae8df1eba1ed.png"
      alt="Discord avatar"
      class="w-10 h-10 rounded-full"
    />
    <div>
      <div class="text-white text-sm font-medium">huntedraven</div>
      <div class="text-text-secondary text-xs flex items-center gap-1.5">
        <span class="w-2 h-2 rounded-full bg-[#28c840]"></span>
        online
      </div>
    </div>
  </div>
  <div class="text-xs text-text-secondary space-y-1.5">
    <div class="flex items-center gap-2">
      <svg class="w-3.5 h-3.5 text-red-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
      <span>Be kind to people especially yourself!</span>
    </div>
    <div class="flex items-center gap-2">
      <svg class="w-3.5 h-3.5 text-red-500" fill="currentColor" viewBox="0 0 24 24"><path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"/></svg>
      <span>YouTube: The Long Faces - Jane!</span>
    </div>
  </div>
</div>
