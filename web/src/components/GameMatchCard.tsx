import { Box, Button, Flex, Text } from '@radix-ui/themes'

export interface GameMatch {
  id: string
  sport: string
  type: string
  title: string
  time: string
  location: string
  address: string
  participants: number
  maxParticipants: number
  badge?: 'competitive' | 'pickup' | 'tournament'
  action: 'join' | 'register'
}

interface GameMatchCardProps {
  game: GameMatch
  onAction?: (gameId: string) => void
}

export const GameMatchCard = ({ game, onAction }: GameMatchCardProps) => {
  const getBadgeColor = () => {
    switch (game.badge) {
      case 'competitive':
        return 'var(--on-surface)'
      case 'pickup':
        return 'var(--on-surface)'
      case 'tournament':
        return 'var(--outline)'
      default:
        return 'var(--on-surface)'
    }
  }

  const getBadgeTextColor = () => {
    switch (game.badge) {
      case 'competitive':
        return 'var(--primary-container)'
      case 'pickup':
        return 'var(--on-background)'
      case 'tournament':
        return 'var(--background)'
      default:
        return 'var(--primary-container)'
    }
  }

  return (
    <Box
      style={{
        backgroundColor: 'var(--surface-container-lowest)',
        border: '2px solid var(--on-surface)',
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0px 0px 0px 0px var(--on-surface)',
        transition: 'all 0.3s ease',
        cursor: 'pointer'
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = '6px 6px 0px 0px var(--on-surface)'
        ;(e.currentTarget as HTMLElement).style.transform = 'translate(-2px, -2px)'
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = '0px 0px 0px 0px var(--on-surface)'
        ;(e.currentTarget as HTMLElement).style.transform = 'translate(0px, 0px)'
      }}
    >
      {/* Header */}
      <Flex justify="between" align="start" style={{ marginBottom: '24px' }}>
        <Box
          style={{
            backgroundColor: getBadgeColor(),
            color: getBadgeTextColor(),
            fontSize: '10px',
            fontWeight: '900',
            textTransform: 'uppercase',
            padding: '4px 8px',
            letterSpacing: '-0.02em',
            border: game.badge === 'pickup' ? '1px solid var(--on-surface)' : 'none'
          }}
        >
          {game.sport.toUpperCase()} • {game.type.toUpperCase()}
        </Box>
        <Text size="1" style={{ color: 'var(--secondary)', fontWeight: '700', fontSize: '12px' }}>
          {game.time}
        </Text>
      </Flex>

      {/* Title */}
      <h3 style={{
        textTransform: 'uppercase',
        marginBottom: '8px',
        color: 'var(--on-surface)',
        fontSize: '24px',
        fontWeight: 700
      }}>
        {game.title}
      </h3>

      {/* Location */}
      <Flex
        style={{
          color: 'var(--secondary)',
          fontSize: '12px',
          fontWeight: '700',
          marginBottom: '24px',
          gap: '8px'
        }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
        <Text>{game.address}</Text>
      </Flex>

      {/* Footer */}
      <Box style={{ marginTop: 'auto', paddingTop: '24px', borderTop: '1px solid var(--outline-variant)' }}>
        <Flex justify="between" align="center">
          {/* Participants */}
          <Flex gap="1" align="center">
            <Box
              style={{
                width: '32px',
                height: '32px',
                border: '2px solid var(--on-surface)',
                borderRadius: '50%',
                backgroundColor: 'var(--surface-dim)',
                backgroundImage: 'url(https://lh3.googleusercontent.com/aida-public/AB6AXuDGPoYWTSlnFhvCjJOOU13CtgfIlc7LNyPmxQZFUNyVULa4ySZw6ihFpMTTIPsc3DguFcdWGg-Jx2CJ97XS6KGMryABWMtZWdsjF9FFxaI2KIx8a8N5741-qwexg9Runu7heZ85fRWTWyumFZt3pa8Jopf63tWObcTA6m8Na6LQW57FMvGKRxzovhLMust5N1MSRWA8YHUcbnMpX5JsdKCs7brlyFWH9aGWMzcBpVCFr4pkVu-Fec0Y1XOr5nco78Na5Lpka4QmuNI)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
            <Box
              style={{
                width: '32px',
                height: '32px',
                border: '2px solid var(--on-surface)',
                borderRadius: '50%',
                backgroundColor: 'var(--primary-container)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '10px',
                fontWeight: '900',
                marginLeft: '-16px'
              }}
            >
              {game.participants}/{game.maxParticipants}
            </Box>
          </Flex>

          {/* Action Button */}
          <Button
            onClick={() => onAction?.(game.id)}
            style={{
              backgroundColor: 'var(--on-surface)',
              color: 'var(--background)',
              fontSize: '14px',
              fontWeight: '900',
              textTransform: 'uppercase',
              padding: '8px 24px',
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'Montserrat'
            }}
            className="button-action"
          >
            {game.action === 'join' ? 'JOIN MATCH' : 'REGISTER'}
          </Button>
        </Flex>
      </Box>
    </Box>
  )
}
