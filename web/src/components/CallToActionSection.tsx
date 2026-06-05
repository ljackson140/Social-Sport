import { Box, Button, Flex, Text } from '@radix-ui/themes'

interface CTAProps {
  onGetStarted?: () => void
  onExploreSports?: () => void
}

export const CallToActionSection = ({ onGetStarted, onExploreSports }: CTAProps) => {
  return (
    <Box
      style={{
        padding: '80px 32px',
        backgroundColor: 'var(--surface-container-high)',
        borderTop: '4px solid var(--on-surface)',
        borderBottom: '4px solid var(--on-surface)'
      }}
    >
      {/* Content */}
      <Box style={{ maxWidth: '64rem', margin: '0 auto', textAlign: 'center' }}>
        {/* Heading */}
        <h2 style={{
          textTransform: 'uppercase',
          marginBottom: '32px',
          color: 'var(--on-surface)',
          fontSize: '48px',
          letterSpacing: '-0.02em',
          fontWeight: '900'
        }}>
          Ready to Compete?
        </h2>

        {/* Description */}
        <Text
          size="5"
          style={{
            color: 'var(--secondary)',
            marginBottom: '80px',
            fontSize: '18px',
            fontWeight: 500,
            lineHeight: 1.6
          }}
        >
          Your next victory across any sport is just a tap away. Build your multi-sport profile and claim the court.
        </Text>

        {/* Buttons */}
        <Flex
          gap="6"
          justify="center"
          style={{
            flexWrap: 'wrap'
          }}
        >
          {/* Primary Button */}
          <Button
            onClick={onGetStarted}
            size="4"
            style={{
              backgroundColor: 'var(--primary-container)',
              color: 'var(--on-surface)',
              fontSize: '24px',
              fontWeight: '900',
              textTransform: 'uppercase',
              padding: '16px 80px',
              border: '2px solid var(--on-surface)',
              cursor: 'pointer',
              fontFamily: 'Montserrat',
              boxShadow: '4px 4px 0px 0px var(--on-surface)',
              transition: 'all 0.3s ease'
            }}
            className="hard-shadow-hover btn-active-state"
          >
            Get Started Now
          </Button>

          {/* Secondary Button */}
          <Button
            onClick={onExploreSports}
            size="4"
            style={{
              backgroundColor: 'transparent',
              color: 'var(--on-surface)',
              fontSize: '24px',
              fontWeight: '900',
              textTransform: 'uppercase',
              padding: '16px 80px',
              border: '2px solid var(--on-surface)',
              cursor: 'pointer',
              fontFamily: 'Montserrat',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              const target = e.currentTarget as HTMLElement
              target.style.backgroundColor = 'var(--on-surface)'
              target.style.color = 'var(--background)'
            }}
            onMouseLeave={(e) => {
              const target = e.currentTarget as HTMLElement
              target.style.backgroundColor = 'transparent'
              target.style.color = 'var(--on-surface)'
            }}
          >
            Explore Sports
          </Button>
        </Flex>
      </Box>
    </Box>
  )
}
