import { Box, Link } from '@radix-ui/themes'
import { GameMatchCard, GameMatch } from './GameMatchCard'

const SAMPLE_GAMES: GameMatch[] = [
  {
    id: '1',
    sport: 'Soccer',
    type: 'Competitive',
    title: '5v5 Turf Battle',
    time: '19:00 • TODAY',
    location: 'map',
    address: 'NORTH PARK ARENA',
    participants: 8,
    maxParticipants: 10,
    badge: 'competitive',
    action: 'join'
  },
  {
    id: '2',
    sport: 'Basketball',
    type: 'Pickup',
    title: 'Downtown Hoops',
    time: '18:30 • TODAY',
    location: 'map',
    address: 'METRO COURT 4',
    participants: 4,
    maxParticipants: 10,
    badge: 'pickup',
    action: 'join'
  },
  {
    id: '3',
    sport: 'Tennis',
    type: 'Tournament',
    title: 'Spring Open Singles',
    time: '09:00 • SAT',
    location: 'map',
    address: 'VALLEY TENNIS CLUB',
    participants: 12,
    maxParticipants: 16,
    badge: 'tournament',
    action: 'register'
  }
]

interface LiveGamesSectionProps {
  onGameAction?: (gameId: string) => void
}

export const LiveGamesSection = ({ onGameAction }: LiveGamesSectionProps) => {
  return (
    <Box
      style={{
        padding: '80px 32px',
        backgroundColor: 'var(--background)'
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '80px' }}>
        <Box>
          <h2 style={{
            textTransform: 'uppercase',
            fontStyle: 'italic',
            color: 'var(--on-surface)',
            fontSize: '32px',
            fontWeight: 800,
            lineHeight: 1.2
          }}>
            Live Games Near You
          </h2>
          <Box
            style={{
              height: '6px',
              width: '128px',
              backgroundColor: 'var(--primary-container)',
              marginTop: '4px'
            }}
          />
        </Box>
        <Link
          href="#"
          style={{
            fontSize: '14px',
            fontWeight: '700',
            textTransform: 'uppercase',
            color: 'var(--on-surface)',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            textDecoration: 'none'
          }}
        >
          View All Schedule
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </Link>
      </div>

      {/* Games Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px'
        }}
      >
        {SAMPLE_GAMES.map(game => (
          <GameMatchCard
            key={game.id}
            game={game}
            onAction={onGameAction}
          />
        ))}
      </div>
    </Box>
  )
}
