import { Box, Text } from '@radix-ui/themes'

interface ValueProp {
  icon: string
  title: string
  description: string
}

const VALUE_PROPS: ValueProp[] = [
  {
    icon: 'bolt',
    title: 'Instant Matchmaking',
    description: 'Our algorithms connect you with players of your skill level across all sports. High-performance matching for every athlete.'
  },
  {
    icon: 'groups',
    title: 'Diverse Communities',
    description: 'Join vibrant sub-communities for Soccer, Basketball, and more. Meet your next teammates or rivals in a professional environment.'
  },
  {
    icon: 'stadium',
    title: 'Premium Venues',
    description: 'Exclusive access to top-tier turf, hardwood, and hard courts. We partner with elite facilities for a pro-level experience.'
  }
]

export const ValuePropsSection = () => {
  return (
    <Box
      style={{
        padding: '80px 32px',
        backgroundColor: 'var(--on-surface)',
        color: 'var(--background)'
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '80px'
        }}
      >
        {VALUE_PROPS.map((prop, index) => (
          <Box key={index} className="value-prop-item">
            {/* Icon Box */}
            <Box
              style={{
                width: '64px',
                height: '64px',
                backgroundColor: 'var(--primary-container)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '24px',
                boxShadow: '4px 4px 0px 0px var(--on-background)',
                transition: 'all 0.3s ease'
              }}
              className="icon-box"
            >
              <IconComponent icon={prop.icon} />
            </Box>

            {/* Title */}
            <h4 style={{
              textTransform: 'uppercase',
              marginBottom: '12px',
              fontSize: '24px',
              fontWeight: 700,
              color: 'var(--background)'
            }}>
              {prop.title}
            </h4>

            {/* Description */}
            <Text
              size="4"
              style={{
                color: 'var(--surface-variant)',
                fontSize: '16px',
                fontWeight: '400',
                lineHeight: 1.5
              }}
            >
              {prop.description}
            </Text>
          </Box>
        ))}
      </div>
    </Box>
  )
}

// Icon Component
const IconComponent = ({ icon }: { icon: string }) => {
  const icons: { [key: string]: string } = {
    bolt: 'M13 2L3 14h9l-1 8 10-12h-9l1-8Z',
    groups: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75M1 9a4 4 0 1 0 8 0 4 4 0 0 0-8 0Z',
    stadium: 'M6 10h12M6 14h12M3 6h18M3 18h18M4 3h16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z'
  }

  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="var(--on-surface)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={icons[icon] || icons.bolt} />
    </svg>
  )
}
