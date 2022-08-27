type SongSheet = {
  name: string
  metadata?: Record<string, string> | null
  key: Note
  sections: SongSection[]
}

type SongSection = {
  label?: string | null
  content: SongChunk[]
}

type SongChunk = {
  chords?: SongChord[] | null
  lyrics: string
}

type SongChord = {
  base: Semitones
  scale: 'major' | 'minor'

  /* e.g. 'dim7' or 'add9' or 'aug#7b9' */
  extra?: string | null
}

type Note =
  | 'C'
  | 'C#'
  | 'D'
  | 'D#'
  | 'E'
  | 'F'
  | 'F#'
  | 'G'
  | 'G#'
  | 'A'
  | 'A#'
  | 'B'

// Number of semitones from root
type Semitones =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
