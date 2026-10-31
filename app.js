const USER_ID = '523906270801952789';

const statusEl = document.getElementById('discordStatus');
const avatarEl = document.getElementById('discordAvatar');
const customStatusEl = document.getElementById('discordCustomStatus');
const activityEl = document.getElementById('discordActivity');
const detailsEl = document.getElementById('discordDetails');
const spotifyEl = document.getElementById('discordSpotify');

const ACTIVITY_LABELS = {
  0: 'Playing',
  1: 'Streaming',
  2: 'Listening',
  3: 'Watching',
  4: ''
};

async function fetchPresence() {
  try {
    const res = await fetch(`https://api.lanyard.rest/v1/users/${USER_ID}`);
    const json = await res.json();
    const d = json.data;

    // Avatar
    avatarEl.src = `https://api.lanyard.rest/${USER_ID}.png`;
    avatarEl.alt = d.discord_user.username;

    // Status with colored dot
    const statusColors = {
      online: '#57F287',
      dnd: '#F04747',
      idle: '#FAA81A',
      offline: '#8b949e'
    };
    const statusColor = statusColors[d.discord_status] || '#8b949e';
    statusEl.innerHTML = `<span style="display:inline-block;width:6px;height:6px;border-radius:50%;background:${statusColor};margin-right:6px;"></span>${d.discord_user.username} — ${d.discord_status}`;

    // Hide everything by default
    customStatusEl.style.display = 'none';
    activityEl.style.display = 'none';
    detailsEl.style.display = 'none';
    spotifyEl.style.display = 'none';

    if (d.listening_to_spotify && d.spotify) {
      spotifyEl.innerHTML = `🎵 <strong>${d.spotify.song}</strong> by <em>${d.spotify.artist}</em> (${d.spotify.album})`;
      spotifyEl.style.display = 'block';
      return;
    }

    const activities = d.activities || [];

    // Custom status (type 4)
    const customStatus = activities.find(a => a.type === 4);
    if (customStatus) {
      const emoji = customStatus.emoji ? `${customStatus.emoji.name} ` : '';
      customStatusEl.innerHTML = `${emoji}${customStatus.name}`;
      customStatusEl.style.display = 'block';
    }

    // Non-custom activities (Playing, Streaming, Listening, Watching)
    const activity = activities.find(a => a.type !== 4);
    if (activity) {
      const label = ACTIVITY_LABELS[activity.type] || 'Activity';
      activityEl.innerHTML = `${label} ${activity.name}`;
      activityEl.style.display = 'block';

      // RPC details / state
      const parts = [];
      if (activity.details) parts.push(activity.details);
      if (activity.state) parts.push(activity.state);
      if (parts.length) {
        detailsEl.textContent = parts.join(' — ');
        detailsEl.style.display = 'block';
      }

      // Rich presence asset image removed

    }

    if (!customStatus && !activity) {
      activityEl.textContent = 'No activity';
      activityEl.style.display = 'block';
    }
  } catch (err) {
    console.error('Failed to fetch Discord presence:', err);
  }
}

fetchPresence();
setInterval(fetchPresence, 30000);
