import { Box, Button, Flex, Link, Text } from '@radix-ui/themes'
import { useNavigate } from '@tanstack/react-router'
import '../styles/components.css'

export const TopNavBar = () => {
  const navigate = useNavigate()

  return (
    <Box
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backgroundColor: 'var(--background)',
        borderBottom: '2px solid var(--on-surface)',
        padding: '8px 32px',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      {/* Logo and Brand */}
      <Flex align="center" gap="2">
        <img 
          alt="Pro Sports Connect Logo" 
          src="https://lh3.googleusercontent.com/aida/ADBb0uinmbv1F9kBGdTWmxdYwSAxarIMqhqoxN0-dT8-l8nA-bIJu8PfstwYUS5I43JUfdiD4SbCFF2tvGsg9sH2dcplvyBnUz-cqeY3gFfTqpLWpty81ZJ50XVV0kh8-hem49Z6FRuiOzqXYSZQC6_-zAIkaoXsnntJqmyVYV6UpEosUhqNtvXSQFLfMmbK_2gAOkUsyZC0FSA7pBB0NNZht8X5NKZ8mTWHBwPSLD5i6KwVvLQ23XCDeuGfNTI"
          style={{ height: '40px', width: 'auto', objectFit: 'contain' }}
        />
        <Text
          size="6"
          weight="bold"
          style={{ 
            textTransform: 'uppercase',
            letterSpacing: '-0.02em',
            color: 'var(--on-surface)'
          }}
          className="hidden-mobile"
        >
          Pro Sports <span style={{ color: 'var(--primary)' }}>Connect</span>
        </Text>
      </Flex>

      {/* Navigation Links */}
      <Flex gap="6" className="hidden-tablet" align="center">
        <Link href="#" style={{ color: 'var(--primary)', fontSize: '14px', fontWeight: '700', textTransform: 'uppercase', textDecoration: 'underline' }}>Find Games</Link>
        <Link href="#" style={{ color: 'var(--on-surface)', fontSize: '14px', fontWeight: '700', textTransform: 'uppercase' }}>Venues</Link>
        <Link href="#" style={{ color: 'var(--on-surface)', fontSize: '14px', fontWeight: '700', textTransform: 'uppercase' }}>Community</Link>
        <Link href="#" style={{ color: 'var(--on-surface)', fontSize: '14px', fontWeight: '700', textTransform: 'uppercase' }}>How it Works</Link>
      </Flex>

      {}
      <Flex gap="2">
        <Button
          variant="ghost"
          size="2"
          onClick={() => navigate({ to: '/login' })}
          style={{
            color: 'var(--on-surface)',
            fontSize: '14px',
            fontWeight: '700',
            textTransform: 'uppercase',
            padding: '12px 24px'
          }}
        >
          Log In
        </Button>
        <Button
          size="2"
          onClick={() => navigate({ to: '/signup' })}
          style={{
            backgroundColor: 'var(--on-surface)',
            color: 'var(--background)',
            fontSize: '14px',
            fontWeight: '700',
            textTransform: 'uppercase',
            padding: '12px 24px',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '4px 4px 0px 0px var(--on-surface)'
          }}
          className="hard-shadow-hover btn-active-state"
        >
          Sign Up
        </Button>
      </Flex>
    </Box>
  )
}
