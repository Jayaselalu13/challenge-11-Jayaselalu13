// Test file to verify parsing function
function parseTrackInfo(filename) {
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

// Test with actual filenames
const testFiles = [
  "Air Supply.mp3",
  "Geates Hits Love Song.m4a",
  "Best Duets Top 100 Romantic Duet Love Songs Of All Time.mp3",
  "Roxette Greatest Hits Full Album.mp3",
  "Stevie B Richard Marx.mp3",
  "Scorpions Greatest Hits Best Rock.mp3",
  "Phil Collins Greatest Hits.mp3",
  "Kenny G Greatest Hits Full Album.mp3",
  "Elton John Greatest Hits.mp3",
  "David Foster Greatest Hitsl.mp3",
  "Dan Hill Greatest Hits.mp3",
  "Stevie B, Richard Marx, Atlantic Star Best of Love Songs 90's.mp3",
  "Sail over Seven Seas.mp3",
  "Michael Learns to Rock Best Songs Compilation.mp3",
  "The Best Of TOTO.mp3"
]

console.log("Testing parsing function with actual filenames:\n")
testFiles.forEach(filename => {
  const result = parseTrackInfo(filename)
  console.log(`File: ${filename}`)
  console.log(`  Artist: ${result.artist}`)
  console.log(`  Title: ${result.title}`)
  console.log("")
}) 