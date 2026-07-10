# MockTestZone Design System
Version: 3.0
Theme: Modern SaaS, AI-powered, premium, student-first

## 1) Product Feel
MockTestZone ko coaching website jaisa nahi, ek focused productivity platform jaisa feel hona chahiye.

Core vibe:
- Trustworthy
- Fast
- Calm
- Smart
- Outcome-driven

UI principles:
- Visual noise kam rakho
- Whitespace generous rakho
- Important actions obvious rakho
- Reading + answering flow frictionless rakho

Reference quality benchmark:
- Stripe
- Linear
- Notion
- Vercel
- Raycast

## 2) Design Direction (North Star)
- Bright layout, soft surfaces, strong information hierarchy
- Rounded but premium edges (no sharp corners)
- Micro motion purposeful ho, flashy nahi
- AI sections alag accent se highlight ho, but overuse mat karo
- Student ko long session me fatigue na ho

## 3) Color Tokens
Use these as global design tokens.

```yaml
color:
  primary: "#2563EB"
  primary-hover: "#1D4ED8"
  primary-light: "#DBEAFE"

  secondary: "#0F172A"
  secondary-soft: "#334155"

  accent-success: "#22C55E"
  accent-success-light: "#DCFCE7"

  accent-ai: "#7C3AED"
  accent-ai-light: "#F3E8FF"

  warning: "#F59E0B"
  warning-light: "#FEF3C7"

  error: "#DC2626"
  error-light: "#FEE2E2"

  bg: "#F8FAFC"
  surface: "#FFFFFF"
  surface-hover: "#F1F5F9"

  text-heading: "#0F172A"
  text-body: "#475569"
  text-muted: "#94A3B8"

  border: "#E2E8F0"
```

Status color meaning (test pages):
- Answered: primary
- Marked for review: warning
- Skipped: muted
- Correct: accent-success
- Wrong: error

## 4) Typography
Font stack:
- Headings: Plus Jakarta Sans
- Body/UI: DM Sans

Scale:
- Display: 56px / 1.1 / 800
- Hero heading: 48px / 1.15 / 700
- Section heading: 36px / 1.2 / 700
- Card title: 24px / 1.3 / 600
- Subheading: 18px / 1.4 / 600
- Body: 16px / 1.6 / 400-500
- Small: 14px / 1.5 / 500
- Caption: 12px / 1.4 / 500

Rules:
- Body text mostly 16px
- Long paragraphs max 70ch
- Avoid all-caps in body copy

## 5) Spacing, Radius, Shadow
Spacing scale (px):
- 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96

Border radius:
- xs: 6
- sm: 10
- md: 14
- lg: 20
- xl: 28
- pill: 999

Shadow:
- sm: 0 1px 2px rgba(15, 23, 42, 0.05)
- md: 0 8px 20px rgba(15, 23, 42, 0.08)
- lg: 0 18px 40px rgba(15, 23, 42, 0.10)

Rules:
- Heavy shadows avoid karo
- Cards mostly md shadow use karein
- Hover pe subtle lift + shadow increase

## 6) Layout System
Container:
- Max width: 1280px
- Content width: 1180px
- Horizontal padding: 24px

Section rhythm:
- Desktop section padding: 80px top/bottom
- Tablet: 64px
- Mobile: 48px

Grid:
- 12-column desktop
- 8-column tablet
- 4-column mobile
- Gutter: 24px desktop, 16px tablet/mobile

Breakpoints:
- sm: 640
- md: 768
- lg: 1024
- xl: 1280
- 2xl: 1440

## 7) Core Components Spec
### 7.1 Buttons
Heights:
- Default: 48px
- Compact: 40px
- Touch minimum: 44px

Variants:
- Primary: blue bg, white text, md shadow
- Secondary: white bg, primary border/text
- Ghost: transparent bg, text-heading
- Danger: white bg, error border/text

Interaction:
- Hover: translateY(-2px)
- Active: translateY(0)
- Focus: 2px ring primary-light + 1px primary border
- Disabled: 40% opacity, no lift

### 7.2 Inputs
- Height: 48px
- Radius: 14px
- Border: 1px border token
- Focus: primary border + subtle shadow
- Placeholder: text-muted
- Error state: error border + helper text

### 7.3 Cards
- Surface bg
- Radius 20px
- Padding 24px
- Border 1px
- Shadow sm/md
- Hover: translateY(-4px)

### 7.4 Navigation
Top nav:
- Sticky
- White + backdrop blur
- Left: logo
- Center: nav items
- Right: Login + Get Started

Dashboard nav:
- Sidebar collapsible
- Rounded inner panel
- Collapsed mode icons only
- Smooth width transition

## 8) Landing Page Blueprint
Order and intent:

1. Hero
- Left: headline + supporting copy + 2 CTA
- Right: dashboard style mock preview
- Add trust badges below CTA

2. Social Proof
- Universities
- Students count
- Teachers
- Company logos if available

3. Feature Grid (6 cards)
- Adaptive tests
- AI analysis
- Performance tracking
- Timed practice
- Rank prediction
- Study planner

4. AI Block (signature section)
- Soft purple gradient background
- Glass cards for AI outputs
- Include one before/after insight example

5. Marketplace Preview
- Creator cards
- Trending tests
- Category chips

6. Testimonials
- Real student outcomes
- Profile, score jump, time period

7. Pricing
- Free, Pro, Creator, Enterprise
- Highlight Pro as recommended

8. Footer
- 5-column clean layout
- Product, Resources, Creators, Legal, Contact

## 9) Dashboard UX
Layout:
- Left sidebar
- Top bar (search, notifications, profile)
- Main scroll area

Priority blocks:
- Welcome + streak card
- Quick stats row (tests done, avg score, rank trend, weak subjects)
- Continue last test CTA
- Recommended tests
- Recent activity timeline
- AI suggestions panel
- Leaderboard snippet

Rules:
- Critical cards top-left
- One primary CTA per fold
- Use progressive disclosure for advanced data

## 10) Test Interface (Most Critical)
Page goal: zero distraction, max focus, fast answering.

Canvas:
- Very light neutral background
- Question card centered
- Max width: 900px

Question card content order:
1. Question number + section
2. Timer + progress
3. Question stem
4. Options list
5. Action row

Option item:
- Height min 56px
- Radius 14px
- Hover: primary border
- Selected: primary-light bg + primary border
- Correct: success-light bg + success border
- Wrong: error-light bg + error border
- Marked review: warning-light bg + warning border

Action bar:
- Previous
- Mark for review
- Next (primary)

Question navigator:
- Sticky side panel on desktop
- Grid 5 columns
- Tile 40x40
- Distinct shape + icon for accessibility (not color only)

Shortcuts:
- 1-4 option select
- N next
- P previous
- R mark review

End test flow:
- Confirm modal with unanswered count
- Submit CTA clear and high-contrast

## 11) Analytics Page UX
Top summary cards:
- Accuracy
- Avg time/question
- Correct
- Wrong
- Skipped

Charts

Line Chart

Bar Chart

Pie Chart

Heatmap

Weak Chapters

Strong Chapters

Suggestions

AI Prediction

Purple Card

Creator Dashboard

Revenue

Subscribers

Total Tests

Students

Question Bank

Draft Tests

Published Tests

Reviews

Payouts

Analytics

Marketplace

Search

Filters

Categories

Ratings

Creator Cards

Subscriptions

Reviews

Preview

Buy Button

Motion

Animations should feel premium.

Use Framer Motion.

Duration

200–300ms

Cards

Scale

1.02

Buttons

Lift

2px

Sidebar

Smooth Width

Charts

Fade In

Numbers

Count Up

Avoid flashy animations.

Icons

Use Lucide Icons.

Outlined style only.

No colorful illustrations.

Illustrations

Use modern gradient illustrations.

Simple

Minimal

Flat

No cartoon graphics.

Charts

Use

Blue

Green

Purple

Gray

Avoid rainbow colors.

Dark Mode

Background

#020617

Cards

#0F172A

Borders

#1E293B

Primary

Same Blue

Text

#F8FAFC

Everything should maintain high contrast.

Accessibility

Minimum contrast ratio AA.

Minimum touch target

44px

Visible focus rings

Keyboard navigation

Readable typography

Never rely only on color.