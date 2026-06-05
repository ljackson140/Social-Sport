import { Box, Button, Flex, Text } from '@radix-ui/themes'

interface SearchBarProps {
  onSearch?: (filters: { sport: string; location: string }) => void
}

export const HeroSection = ({ onSearch }: SearchBarProps) => {
  const handleSearch = () => {
    const sportSelect = document.getElementById('sport-select') as HTMLSelectElement
    const locationInput = document.getElementById('location-input') as HTMLInputElement
    if (onSearch) {
      onSearch({
        sport: sportSelect?.value || 'all',
        location: locationInput?.value || ''
      })
    }
  }

  return (
    <Box
      style={{
        position: 'relative',
        minHeight: '819px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '0 32px',
        backgroundColor: 'var(--surface-container-low)',
        overflow: 'hidden'
      }}
    >
      {/* Grid Background Pattern */}
      <Box
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
          width: '50%',
          height: '100%',
          opacity: 0.1,
          pointerEvents: 'none',
          backgroundImage: 'radial-gradient(var(--on-surface) 2px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />

      {/* Content */}
      <Box style={{ position: 'relative', zIndex: 10, maxWidth: '64rem' }}>
        {/* Label */}
        <Box
          style={{
            display: 'inline-block',
            backgroundColor: 'var(--on-surface)',
            color: 'var(--primary-container)',
            padding: '8px 12px',
            marginBottom: '32px',
            fontSize: '14px',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }}
        >
          Multi-Sport Season 01
        </Box>

        {/* Heading */}
        <h1 style={{
          textTransform: 'uppercase',
          marginBottom: '32px',
          lineHeight: 1.1,
          color: 'var(--on-surface)',
          fontSize: '48px',
          letterSpacing: '-0.02em',
          fontWeight: '900'
        }}>
          PLAY WITHOUT <br />
          <span style={{ color: 'var(--primary)', fontStyle: 'italic' }}>LIMITS</span>
        </h1>

        {/* Description */}
        <Text
          size="5"
          style={{
            color: 'var(--secondary)',
            marginBottom: '48px',
            maxWidth: '512px',
            fontSize: '18px',
            fontWeight: 500,
            lineHeight: 1.6
          }}
        >
          Book Soccer, Tennis, Basketball, or Pickleball in seconds. Find competitive matches and high-performance communities for every athlete, on every court.
        </Text>

        {/* Search Bar */}
        <Flex
          gap="0"
          style={{
            maxWidth: '896px',
            border: '2px solid var(--on-surface)',
            backgroundColor: 'var(--surface-container-lowest)',
            boxShadow: '4px 4px 0px 0px var(--on-surface)',
            flexWrap: 'wrap'
          }}
          className="search-bar"
        >
          {/* Sport Selector */}
          <Flex
            style={{
              flex: 1,
              alignItems: 'center',
              padding: '12px 24px',
              borderRight: '2px solid var(--on-surface)',
              minWidth: '200px'
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="11" r="8"></circle>
              <path d="M21 21l-4.35-4.35"></path>
            </svg>
            <select
              id="sport-select"
              style={{
                width: '100%',
                background: 'transparent',
                border: 'none',
                fontSize: '14px',
                fontWeight: '700',
                textTransform: 'uppercase',
                color: 'var(--on-surface)',
                marginLeft: '12px',
                cursor: 'pointer',
                fontFamily: 'Montserrat'
              }}
            >
              <option>All Sports</option>
              <option>Soccer</option>
              <option>Basketball</option>
              <option>Tennis</option>
              <option>Pickleball</option>
            </select>
          </Flex>

          {/* Location Input */}
          <Flex
            style={{
              flex: 1,
              alignItems: 'center',
              padding: '12px 24px',
              borderRight: '2px solid var(--on-surface)',
              minWidth: '200px'
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <input
              id="location-input"
              type="text"
              placeholder="ENTER ZIP OR CITY"
              style={{
                width: '100%',
                background: 'transparent',
                border: 'none',
                fontSize: '14px',
                fontWeight: '700',
                textTransform: 'uppercase',
                color: 'var(--on-surface)',
                marginLeft: '12px',
                fontFamily: 'Montserrat',
              }}
            />
          </Flex>

          {/* Search Button */}
          <Button
            onClick={handleSearch}
            style={{
              backgroundColor: 'var(--primary-container)',
              color: 'var(--on-surface)',
              fontSize: '14px',
              fontWeight: '900',
              textTransform: 'uppercase',
              padding: '12px 80px',
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'Montserrat'
            }}
          >
            Search Games
          </Button>
        </Flex>
      </Box>
    </Box>
  )
}
