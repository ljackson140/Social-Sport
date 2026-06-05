import { Box, Flex, Link, Text } from '@radix-ui/themes'

export const Footer = () => {
  return (
    <Flex
      style={{
        backgroundColor: 'var(--on-surface)',
        borderTop: '2px solid var(--primary-container)',
        padding: '48px 32px',
        gap: '24px',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flexWrap: 'wrap'
      }}
    >
      {/* Left Section - Logo and Copyright */}
      <Box style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <Flex align="center" gap="1">
          <img
            alt="Pro Sports Connect Logo"
            src="https://lh3.googleusercontent.com/aida/ADBb0uinmbv1F9kBGdTWmxdYwSAxarIMqhqoxN0-dT8-l8nA-bIJu8PfstwYUS5I43JUfdiD4SbCFF2tvGsg9sH2dcplvyBnUz-cqeY3gFfTqpLWpty81ZJ50XVV0kh8-hem49Z6FRuiOzqXYSZQC6_-zAIkaoXsnntJqmyVYV6UpEosUhqNtvXSQFLfMmbK_2gAOkUsyZC0FSA7pBB0NNZht8X5NKZ8mTWHBwPSLD5i6KwVvLQ23XCDeuGfNTI"
            style={{ height: '40px', width: 'auto', objectFit: 'contain' }}
          />
          <Text
            size="4"
            weight="bold"
            style={{
              textTransform: 'uppercase',
              letterSpacing: '-0.02em',
              color: 'var(--background)',
              fontSize: '14px'
            }}
          >
            Pro Sports <span style={{ color: 'var(--primary-container)' }}>Connect</span>
          </Text>
        </Flex>
        <Text
          size="3"
          style={{
            color: 'var(--surface-variant)',
            fontSize: '16px',
            fontWeight: '400'
          }}
        >
          © 2024 Pro Sports Connect. High-Performance Multi-Sport Platform.
        </Text>
      </Box>

      {/* Middle Section - Links */}
      <Flex
        gap="6"
        style={{
          flexWrap: 'wrap',
          justifyContent: 'center',
          flex: 1
        }}
      >
        <Link
          href="#"
          style={{
            color: 'var(--surface-variant)',
            fontSize: '12px',
            fontWeight: '600',
            textTransform: 'uppercase',
            textDecoration: 'underline',
            textDecorationColor: 'rgba(223, 210, 62, 0.3)',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            const target = e.currentTarget as HTMLElement
            target.style.color = 'var(--primary-container)'
            target.style.textDecorationColor = 'var(--primary-container)'
          }}
          onMouseLeave={(e) => {
            const target = e.currentTarget as HTMLElement
            target.style.color = 'var(--surface-variant)'
            target.style.textDecorationColor = 'rgba(223, 210, 62, 0.3)'
          }}
        >
          Privacy Policy
        </Link>
        <Link
          href="#"
          style={{
            color: 'var(--surface-variant)',
            fontSize: '12px',
            fontWeight: '600',
            textTransform: 'uppercase',
            textDecoration: 'underline',
            textDecorationColor: 'rgba(223, 210, 62, 0.3)',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            const target = e.currentTarget as HTMLElement
            target.style.color = 'var(--primary-container)'
            target.style.textDecorationColor = 'var(--primary-container)'
          }}
          onMouseLeave={(e) => {
            const target = e.currentTarget as HTMLElement
            target.style.color = 'var(--surface-variant)'
            target.style.textDecorationColor = 'rgba(223, 210, 62, 0.3)'
          }}
        >
          Terms of Service
        </Link>
        <Link
          href="#"
          style={{
            color: 'var(--surface-variant)',
            fontSize: '12px',
            fontWeight: '600',
            textTransform: 'uppercase',
            textDecoration: 'underline',
            textDecorationColor: 'rgba(223, 210, 62, 0.3)',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            const target = e.currentTarget as HTMLElement
            target.style.color = 'var(--primary-container)'
            target.style.textDecorationColor = 'var(--primary-container)'
          }}
          onMouseLeave={(e) => {
            const target = e.currentTarget as HTMLElement
            target.style.color = 'var(--surface-variant)'
            target.style.textDecorationColor = 'rgba(223, 210, 62, 0.3)'
          }}
        >
          Contact Support
        </Link>
        <Link
          href="#"
          style={{
            color: 'var(--surface-variant)',
            fontSize: '12px',
            fontWeight: '600',
            textTransform: 'uppercase',
            textDecoration: 'underline',
            textDecorationColor: 'rgba(223, 210, 62, 0.3)',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            const target = e.currentTarget as HTMLElement
            target.style.color = 'var(--primary-container)'
            target.style.textDecorationColor = 'var(--primary-container)'
          }}
          onMouseLeave={(e) => {
            const target = e.currentTarget as HTMLElement
            target.style.color = 'var(--surface-variant)'
            target.style.textDecorationColor = 'rgba(223, 210, 62, 0.3)'
          }}
        >
          Partner with Us
        </Link>
      </Flex>

      {/* Right Section - Social Icons */}
      <Flex gap="6">
        <Link
          href="#"
          style={{
            width: '40px',
            height: '40px',
            border: '1px solid var(--outline-variant)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--background)',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            const target = e.currentTarget as HTMLElement
            target.style.backgroundColor = 'var(--primary-container)'
            target.style.color = 'var(--on-surface)'
          }}
          onMouseLeave={(e) => {
            const target = e.currentTarget as HTMLElement
            target.style.backgroundColor = 'transparent'
            target.style.color = 'var(--background)'
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="18" cy="5" r="3"></circle>
            <path d="M21 15a6 6 0 0 1-6 6H9a6 6 0 0 1-6-6v-2h3v2a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3M9 9h0M6 18h12"></path>
          </svg>
        </Link>
        <Link
          href="#"
          style={{
            width: '40px',
            height: '40px',
            border: '1px solid var(--outline-variant)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--background)',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            const target = e.currentTarget as HTMLElement
            target.style.backgroundColor = 'var(--primary-container)'
            target.style.color = 'var(--on-surface)'
          }}
          onMouseLeave={(e) => {
            const target = e.currentTarget as HTMLElement
            target.style.backgroundColor = 'transparent'
            target.style.color = 'var(--background)'
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 6v6l4 2"></path>
          </svg>
        </Link>
      </Flex>
    </Flex>
  )
}
