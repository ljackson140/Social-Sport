import { Box, Text } from '@radix-ui/themes'

export const ImageShowcaseSection = () => {
  return (
    <Box
      style={{
        height: '600px',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background Image */}
      <img
        alt="High Performance Play"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbcKPc_x1cpvZoAgepZ7gH33hEDRWoLj0soemUhEZ8kZJjSQtFRfwAXrFaEo8SW0jKUF53a6fUfpVPFLr4KdiJnh6H29aJeMj8rNJrInVM-q06daCpJe1IdCELop_MX_rkThHcdnSP_ZWafrbh2hDOuK9xcGckw4ytn9kGdHcGEH9RF9q-qrguk6j5zrNYqOyfMqtRBDrudWLKBO_Lmwl10V7DQqfLqt1IlCqJO8xR7eXyF4E7sPRhRZh1T6vRN76rhwBy8YGSnoA"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          filter: 'grayscale(100%) brightness(0.5)'
        }}
      />

      {/* Overlay Content */}
      <Box
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(27, 29, 15, 0.3)',
          backdropFilter: 'blur(4px)'
        }}
      >
        {/* Content Card */}
        <Box
          style={{
            textAlign: 'center',
            padding: '80px',
            border: '4px solid var(--primary-container)',
            maxWidth: '512px',
            backgroundColor: 'rgba(27, 29, 15, 0.8)'
          }}
        >
          {/* Heading */}
          <h2 style={{
            textTransform: 'uppercase',
            marginBottom: '32px',
            lineHeight: 1.1,
            color: 'var(--background)',
            fontSize: '48px',
            letterSpacing: '-0.02em',
            fontWeight: '900'
          }}>
            GEAR UP. <br /> STEP IN. <br />
            <span style={{ color: 'var(--primary-container)' }}>WIN.</span>
          </h2>

          {/* Subheading */}
          <Text
            size="2"
            weight="bold"
            style={{
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: 'var(--background)',
              fontSize: '14px',
              fontWeight: '700'
            }}
          >
            Join 100,000+ Athletes in the Network
          </Text>
        </Box>
      </Box>
    </Box>
  )
}
