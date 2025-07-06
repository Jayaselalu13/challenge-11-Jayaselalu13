// Mock music API - replace with your actual music service
export const mockTracks = [
  {
    id: "1",
    title: "Indonesia Raya",
    artist: "W.R. Supratman",
    duration: 95, // contoh durasi
    url: "/music/Indonesia_Raya.mp3",
    albumArt: "/images/album-art.png",
  },
  {
    id: "2",
    title: "Ibu Pertiwi",
    artist: "Ismail Marzuki",
    duration: 180, // contoh durasi
    url: "/music/Ibu_Pertiwi.mp3",
    albumArt: "/images/music-icon.png",
  },
  {
    id: "3",
    title: "Garuda Pancasila",
    artist: "Sudharnoto",
    duration: 120, // contoh durasi
    url: "/music/Garuda_Pancasila.mp3",
    albumArt: "/images/album-art.png",
  },
]

// Function to parse artist and title from filename
function parseTrackInfo(filename: string): { artist: string; title: string } {
  // Remove file extension
  const nameWithoutExt = filename.replace(/\.(mp3|m4a)$/i, '')
  
  // Common patterns for artist extraction
  const patterns = [
    // Pattern: "Artist1, Artist2, Artist3 Best of Love Songs"
    /^(.+?),\s*(.+?),\s*(.+?)\s+Best of Love Songs/i,
    // Pattern: "Artist1, Artist2 Best of Love Songs"
    /^(.+?),\s*(.+?)\s+Best of Love Songs/i,
    // Pattern: "Artist Greatest Hits" or "Artist Best Songs"
    /^(.+?)\s+(Greatest Hits|Best Songs|Best of|Full Album|Top \d+)/i,
    // Pattern: "Artist Hits Love Song" (for typo cases)
    /^(.+?)\s+Hits Love Song/i,
    // Pattern: "Artist Album Title"
    /^(.+?)\s+(.+)$/,
  ]
  
  for (const pattern of patterns) {
    const match = nameWithoutExt.match(pattern)
    if (match) {
      if (pattern.source.includes('Best of Love Songs')) {
        // For "Artist1, Artist2, Artist3 Best of Love Songs" pattern
        if (match[3]) {
          // Three artists
          const artists = [match[1], match[2], match[3]].map(a => a.trim())
          return {
            artist: artists.join(', '),
            title: 'Best of Love Songs 90\'s'
          }
        } else {
          // Two artists
          const artists = [match[1], match[2]].map(a => a.trim())
          return {
            artist: artists.join(', '),
            title: 'Best of Love Songs'
          }
        }
      } else if (pattern.source.includes('Greatest Hits|Best Songs|Full Album|Top')) {
        // For "Artist Greatest Hits" pattern
        const artist = match[1].trim()
        const albumType = match[2]
        return {
          artist: artist,
          title: `${artist} ${albumType}`
        }
      } else if (pattern.source.includes('Hits Love Song')) {
        // For "Artist Hits Love Song" pattern (typo cases)
        const artist = match[1].trim()
        return {
          artist: artist,
          title: `${artist} Greatest Hits Love Songs`
        }
      } else {
        // For "Artist Album Title" pattern
        const artist = match[1].trim()
        const title = match[2].trim()
        return {
          artist: artist,
          title: title
        }
      }
    }
  }
  
  // Fallback: treat the whole name as title if no pattern matches
  return {
    artist: 'Unknown Artist',
    title: nameWithoutExt.replace(/_/g, ' ')
  }
}

// Function to fetch tracks from your music API
export async function fetchTracks() {
  // Ambil daftar file dari endpoint API custom
  const res = await fetch('/api/music-files')
  const files = await res.json() as string[]

  // Generate track list otomatis
  return files.map((filename, idx) => {
    const { artist, title } = parseTrackInfo(filename)
    return {
      id: String(idx + 1),
      title,
      artist,
      duration: 0, // Akan diisi saat audio load
      url: `/music/${filename}`,
      albumArt: '/images/album-art.png',
    }
  })
}

// Function to search tracks
export async function searchTracks(query: string) {
  // Replace with your actual search API
  return mockTracks.filter(
    (track) =>
      track.title.toLowerCase().includes(query.toLowerCase()) ||
      track.artist.toLowerCase().includes(query.toLowerCase()),
  )
}
