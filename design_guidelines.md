# Design Guidelines: Multiplayer Chat Room Game

## Design Approach

**Hybrid Reference-Based Approach**: Drawing from Discord's community chat patterns and Slack's message clarity, while infusing game-like playfulness through color, icons, and micro-interactions.

**Key Design Principles**:
- Instant visual feedback for real-time interactions
- Clear information hierarchy for rapid scanning
- Playful aesthetics that reduce communication friction
- Game lobby atmosphere with competitive/collaborative vibes

## Core Design Elements

### A. Color Palette

**Dark Mode Primary** (default):
- Background Base: 220 20% 12%
- Surface Elevated: 220 18% 16%
- Surface Raised: 220 16% 20%
- Primary Brand: 260 80% 65% (vibrant purple, game-like)
- Success/Online: 142 70% 50% (active users)
- Warning/Capacity: 38 90% 60% (room full warnings)
- Text Primary: 220 10% 95%
- Text Secondary: 220 10% 70%

**Light Mode** (optional toggle):
- Background: 220 20% 98%
- Surface: 220 15% 100%
- Primary: 260 75% 55%
- Text: 220 20% 15%

### B. Typography

**Font System**: 
- Primary: Inter (clean, readable for chat)
- Monospace: JetBrains Mono (room codes, timestamps)
- Accent: Space Grotesk (headings, lobby names)

**Type Scale**:
- Display (lobby title): 2.5rem, bold
- Heading (section titles): 1.5rem, semibold
- Body (messages): 0.95rem, regular
- Small (timestamps, metadata): 0.8rem, medium
- Code (room codes): 1.1rem, monospace, semibold

### C. Layout System

**Spacing Units**: Tailwind 2, 3, 4, 6, 8, 12, 16, 20
- Message padding: p-3 to p-4
- Section gaps: gap-4 to gap-6
- Component margins: m-4 to m-8

**Layout Structure**:
- Three-column grid for active chat view: Sidebar (280px) | Chat (flex-1) | User List (240px)
- Lobby selection: Centered, max-w-md to max-w-2xl
- Mobile: Stack to single column with collapsible panels

### D. Component Library

**Navigation & Structure**:
- Sticky header with logo, room code display, user count badge
- Collapsible sidebar for room management
- Floating action button for creating new lobby

**Room/Lobby Cards**:
- Elevated cards with subtle border glow on hover
- Room code displayed prominently in monospace
- Participant avatars in overlapping stack (max 4 visible + count)
- Status indicators: green dot for active, yellow for nearly full (8-10 users)
- Rounded-xl borders with gradient accents

**Message Components**:
- Compact message bubbles with subtle alternating backgrounds
- User avatar (32px) with online indicator
- Username in brand color (different hue per user for distinction)
- Timestamp in muted text, right-aligned
- Image messages: Rounded-lg preview, max 400px width, click to expand
- System messages (joins/leaves): Centered, italic, muted with icon

**Input Areas**:
- Chat input: Large textarea (min-h-20) with rounded borders
- Image upload button with preview thumbnail
- Send button: Primary color, icon + text on desktop, icon-only on mobile
- Room code input: Monospace font, uppercase transform, centered characters with spacing

**User List**:
- Vertical scrollable list
- Each user: Avatar + name + online status dot
- Section header: "Online (5/10)" with capacity bar
- Host/creator marked with crown icon
- Alphabetically sorted

**Modals & Overlays**:
- Create Room: Centered modal with room name input and "Generate Code" button
- Join Room: Single input for code entry with large submit button
- Image preview: Full-screen overlay with dark backdrop (backdrop-blur-md)
- Settings: Side drawer for theme toggle and notification preferences

**Feedback Elements**:
- Toast notifications: Top-right, slide-in animation for events (user joined, image uploaded)
- Loading states: Skeleton screens for message history
- Empty states: Illustrated empty lobby with "Start chatting" prompt
- Error states: Inline validation for invalid room codes

### E. Visual Enhancements

**Icons**: Heroicons for UI controls, game-themed custom illustrations for empty states

**Animations** (minimal, purposeful):
- Message appear: Subtle fade-in + slight slide up (150ms)
- User join/leave: Quick pulse effect on user list (200ms)
- Room code copy: Checkmark feedback animation
- Image upload: Progress bar while uploading

**Visual Texture**:
- Subtle noise texture overlay on dark backgrounds (opacity 0.02)
- Gradient accents on active room cards
- Soft inner shadows on message input focus state

## Specific Sections

**1. Landing/Lobby Selection Screen**:
- Hero area: Centered title "Join the Conversation", subtitle about multiplayer chat
- Two prominent CTAs: "Create Room" (primary) and "Join Room" (outline)
- Recent rooms section below (if applicable)
- Background: Geometric pattern or subtle grid, game-inspired

**2. Room Creation Modal**:
- Clean centered form
- Room name input (optional, defaults to "Room-[code]")
- Auto-generated code displayed prominently in monospace with copy button
- "Create & Enter" button

**3. Active Chat Interface**:
- Left: Room info sidebar (collapsible on mobile)
- Center: Message feed with date separators, infinite scroll
- Right: Active users list with participant count at top
- Bottom: Fixed input bar with image upload and send controls

**4. Mobile Considerations**:
- Bottom sheet drawer for user list (swipe up to reveal)
- Simplified header with hamburger menu
- Full-width message input with floating send button
- Tap user avatar to see profile/info

## Images

No large hero images required for this utility-focused chat application. Focus on functional iconography and user-generated content (uploaded images and avatars). Use placeholder avatar system with color-coded backgrounds for users without custom avatars.