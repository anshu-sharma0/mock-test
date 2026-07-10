# MockTestZone Product Blueprint

Source of truth: `Design.md` v3.0  
Product direction: premium AI-powered mock test SaaS, student-first, calm, fast, focused, outcome-driven.

This document translates the design system into a full product architecture. It intentionally does not include implementation code or visual UI production. It defines what must exist, why it exists, how users move through it, what data is needed, and how the platform can scale to 1M+ users.

---

## 1. Product North Star

MockTestZone should feel less like a coaching website and more like a focused productivity platform for exam preparation. The product should combine the discipline of a test engine, the clarity of analytics software, and the encouragement of a personal study coach.

Core product promises:

- Students know exactly what to attempt next.
- Teachers can create, publish, and analyze tests without operational friction.
- Institutes can run high-volume test programs with role control, reporting, and billing.
- Creators can monetize premium tests through a trusted marketplace.
- AI makes insights easier to understand, but never overwhelms the core test-taking workflow.

Design alignment:

- Bright surfaces, generous whitespace, strong hierarchy.
- One primary action per fold.
- AI moments use the purple accent sparingly and meaningfully.
- Test-taking is distraction-free, with a centered question canvas and clear status language.
- Analytics are progressive: summary first, drilldown second.
- Motion is functional: 200-300ms transitions, subtle card lift, smooth sidebar, chart fade-in.

Primary success metrics:

- Student activation: first test submitted within first session.
- Student retention: weekly active test attempts and study planner adherence.
- Learning outcome: score improvement, accuracy improvement, weak chapter reduction.
- Creator growth: published tests, marketplace revenue, repeat purchases.
- Institute growth: active students per organization, assigned test completion, renewal rate.
- Platform trust: payment success rate, low test interruption rate, support resolution time.

---

## 2. Core Users And Jobs

| Role | Primary Jobs | Key Product Needs |
|---|---|---|
| Guest | Understand value, browse pricing, view marketplace previews, sign up | Fast landing page, clear CTAs, trust proof, frictionless auth |
| Student | Discover tests, attempt tests, review results, improve performance | Focused dashboard, recommendations, planner, analytics, streaks, achievements |
| Teacher | Build tests, assign tests, review class performance | Question bank, test builder, batch assignment, analytics, feedback tools |
| Creator | Publish paid/free tests and grow an audience | Creator dashboard, listings, reviews, subscriptions, revenue, payouts |
| Institute Owner | Manage organization, branches, teachers, students, billing | Multi-tenant admin, roles, reports, seat management, subscriptions |
| Institute Admin | Operate day-to-day batches, assignments, student support | User management, bulk actions, live test monitoring, reports |
| Platform Admin | Moderate, support, monitor platform health, manage risk | Admin console, content review, payment oversight, audit logs |
| Support Agent | Resolve user issues | User lookup, attempt replay, payment lookup, ticket context |

---

## 3. Information Architecture

### 3.1 Top-Level Product Areas

1. Public Website
   - Home
   - Marketplace preview
   - Pricing
   - Creator program
   - Institute/Enterprise
   - Resources
   - Help center
   - Legal

2. Authentication And Onboarding
   - Sign up
   - Login
   - OTP/email verification
   - Forgot password
   - Role selection
   - Student onboarding
   - Teacher/creator onboarding
   - Institute onboarding

3. Student App
   - Dashboard
   - Test discovery
   - Test details
   - Test attempt
   - Submit confirmation
   - Results
   - Review answers
   - Analytics
   - Study planner
   - Question practice
   - Marketplace
   - Leaderboards
   - Achievements
   - Notifications
   - Profile
   - Settings
   - Help

4. Teacher And Creator App
   - Creator dashboard
   - Question bank
   - Test builder
   - Draft tests
   - Published tests
   - Assignments
   - Students/batches
   - Reviews
   - Analytics
   - Marketplace listings
   - Revenue
   - Payouts
   - Settings

5. Organization/Institute App
   - Organization dashboard
   - Branches
   - Users and roles
   - Batches/classes
   - Test library
   - Assignments
   - Live monitoring
   - Reports
   - Billing
   - Integrations
   - Audit logs
   - Organization settings

6. Platform Admin
   - Admin overview
   - Users
   - Organizations
   - Content moderation
   - Marketplace review
   - Payments
   - Support tools
   - Feature flags
   - System health
   - Audit logs

### 3.2 Sitemap

```text
/
/pricing
/marketplace
/marketplace/[listing]
/creators
/institutes
/resources
/resources/[article]
/help
/help/[article]
/contact
/legal/terms
/legal/privacy
/legal/refund-policy

/auth/login
/auth/signup
/auth/verify
/auth/forgot-password
/auth/reset-password
/onboarding
/onboarding/student
/onboarding/teacher
/onboarding/creator
/onboarding/institute

/app
/app/search
/app/notifications
/app/tests
/app/tests/[test]
/app/tests/[test]/start
/app/attempts/[attempt]
/app/attempts/[attempt]/submit
/app/results/[attempt]
/app/results/[attempt]/review
/app/analytics
/app/planner
/app/practice
/app/leaderboard
/app/achievements
/app/marketplace
/app/marketplace/[listing]
/app/subscription
/app/billing
/app/profile
/app/settings
/app/help

/creator
/creator/tests
/creator/tests/new
/creator/tests/[test]/edit
/creator/questions
/creator/questions/import
/creator/assignments
/creator/students
/creator/analytics
/creator/marketplace
/creator/revenue
/creator/payouts
/creator/reviews
/creator/settings

/org
/org/branches
/org/users
/org/roles
/org/batches
/org/tests
/org/assignments
/org/live
/org/reports
/org/billing
/org/integrations
/org/audit-logs
/org/settings

/admin
/admin/users
/admin/organizations
/admin/content
/admin/marketplace
/admin/payments
/admin/support
/admin/feature-flags
/admin/system-health
/admin/audit-logs
```

---

## 4. Global Navigation Model

### 4.1 Public Website Navigation

Top navigation:

- Left: MockTestZone logo.
- Center: Product, Marketplace, Pricing, Creators, Institutes, Resources.
- Right: Login, Get Started.

Behavior:

- Sticky white nav with backdrop blur.
- Mobile uses a compact menu with primary CTA always visible.
- Public pages always route toward signup, marketplace preview, or contact sales.

### 4.2 Student App Navigation

Sidebar:

- Dashboard
- Tests
- Practice
- Analytics
- Planner
- Marketplace
- Leaderboard
- Achievements
- Help

Top bar:

- Global search
- Notifications
- Active plan/billing shortcut
- Profile switcher

Behavior:

- Collapsible sidebar with icons-only mode.
- Primary CTA changes by context: Continue Test, Start Test, Add Study Plan, Upgrade.
- Test attempt pages remove normal navigation and use a focused test shell.

### 4.3 Teacher/Creator Navigation

Sidebar:

- Overview
- Tests
- Question Bank
- Assignments
- Students
- Analytics
- Marketplace
- Revenue
- Reviews
- Settings

Top bar:

- Search tests/questions/students
- Notifications
- Create button
- Profile/workspace switcher

### 4.4 Organization Navigation

Sidebar:

- Overview
- Branches
- Users
- Roles
- Batches
- Tests
- Assignments
- Live Monitoring
- Reports
- Billing
- Settings

Top bar:

- Organization switcher
- Search
- Notifications
- Invite button

### 4.5 Platform Admin Navigation

Sidebar:

- Overview
- Users
- Organizations
- Content
- Marketplace
- Payments
- Support
- System Health
- Audit Logs

Admin areas should look operational and dense but still respect the design system: restrained cards, clear tables, sticky filters, and no decorative content.

---

## 5. End-To-End User Flows

### 5.1 Guest To Activated Student

1. Guest lands on Home.
2. Reads hero, proof, AI insight example, marketplace preview, pricing.
3. Clicks Get Started.
4. Creates account with email, Google, or phone OTP.
5. Selects Student role.
6. Completes onboarding: exam goal, target date, subjects, current level, daily study time.
7. Lands on Student Dashboard.
8. Sees recommended diagnostic test as primary CTA.
9. Starts test, submits, views results.
10. AI creates weak chapter summary and first 7-day study plan.
11. Student saves plan and receives first achievement.

Activation definition: user submits at least one test or diagnostic and views result insight.

### 5.2 Returning Student

1. Student opens dashboard.
2. Continue Last Test or Today Plan is top-left.
3. Student attempts a recommended test or practice set.
4. Results update analytics, streak, leaderboard, achievements, and planner.
5. Notifications prompt review of weak topics or upcoming scheduled tests.

### 5.3 Teacher Creates And Assigns Test

1. Teacher opens Creator Dashboard.
2. Clicks New Test.
3. Selects exam category, subjects, duration, scoring rules, visibility.
4. Adds questions from bank, imports questions, or uses AI-assisted question formatting.
5. Reviews test structure and settings.
6. Publishes as private assignment, public free listing, or paid marketplace listing.
7. Assigns to batch with due date and retake rules.
8. Monitors submissions and reviews analytics.

### 5.4 Creator Marketplace Flow

1. Creator creates/publishes test bundle.
2. Completes listing: title, category, difficulty, sample questions, outcomes, price.
3. Listing enters review if paid/public.
4. Platform approves listing.
5. Students discover listing in Marketplace.
6. Student previews, purchases/subscribes, and starts tests.
7. Creator sees sales, reviews, conversion, refund requests, payouts.

### 5.5 Institute Setup Flow

1. Owner visits Institutes page and starts trial or contacts sales.
2. Creates organization workspace.
3. Adds branches, admins, teachers, and students.
4. Creates batches/classes.
5. Imports or creates tests.
6. Assigns tests to batches.
7. Tracks live attempts and reports.
8. Manages subscription, seats, invoices, and renewal.

### 5.6 Test Attempt Flow

1. Student opens Test Detail.
2. Reads instructions, duration, marks, sections, attempts allowed.
3. Starts test.
4. Focus shell opens with question card, timer, progress, actions, navigator.
5. Student selects options, skips, marks review, navigates sections.
6. Auto-save runs continuously.
7. Student clicks Submit.
8. Confirmation modal shows unanswered and marked-for-review counts.
9. Student submits.
10. Result is generated immediately when possible, or queued for processing if subjective/large.
11. Student views Result Summary and Review Answers.

### 5.7 Results To Improvement Flow

1. Student lands on Results Summary.
2. Top summary cards show score, accuracy, time, rank, correct/wrong/skipped.
3. AI insight card explains what changed and what to do next.
4. Student reviews wrong/skipped questions.
5. Student adds weak chapters to Study Planner.
6. Recommended tests update based on result.

### 5.8 Subscription And Payment Flow

1. User hits a paywall, pricing page, marketplace listing, or subscription page.
2. Product explains what is locked and what will be unlocked after payment.
3. User chooses plan, listing, or bundle.
4. Checkout collects payment method, coupon, tax details, and confirmation.
5. Payment succeeds, fails, or requires retry.
6. Successful payment updates entitlement immediately.
7. User is routed back to the unlocked test, marketplace listing, or dashboard.
8. Receipt appears in Billing and notification confirms access.

### 5.9 Analytics Flow

1. Student, teacher, or institute opens analytics from dashboard/result/report.
2. Summary cards provide the first answer without forcing chart interpretation.
3. Filters narrow by date, exam, subject, chapter, test, batch, branch, or student.
4. User drills into weak topics, question performance, student progress, or cohort reports.
5. User exports, assigns follow-up practice, adds tasks to planner, or sends reminders.

### 5.10 Platform Admin Journey

1. Admin opens platform overview.
2. Reviews health, moderation, payment, and support queues.
3. Opens a specific queue item.
4. Reviews full context, including user, organization, content, payment, attempt, and audit history.
5. Takes action: approve, reject, refund, suspend, reply, feature flag, or escalate.
6. Action is logged and affected user/org receives notification when appropriate.

---

## 6. Dashboard Layout Patterns

All dashboards should follow the `Design.md` structure: left sidebar, top bar with search/notifications/profile, and a main scroll area. The most important card belongs top-left, and each first viewport should have one primary CTA.

| Dashboard | First Fold Priority | Secondary Areas | Primary CTA | Design Notes |
|---|---|---|---|---|
| Student | Welcome/streak, quick stats, continue last test | Recommended tests, recent activity, AI suggestions, leaderboard snippet | Continue Test or Start Diagnostic | Calm and motivational, not gamified to the point of distraction. |
| Teacher/Creator | Revenue/tests/students/reviews stats, drafts needing action | Published tests, marketplace status, recent submissions, analytics | Create Test | More operational density than student dashboard, but still card-based and clean. |
| Institute | Active students, completion, weak subjects, live tests, billing alerts | Branch/batch comparisons, reports, assignment status | Create Assignment or Invite Users | Executive summary plus operational alerts. |
| Platform Admin | System health, queue counts, payment issues, support load | User/org trends, content moderation, feature flags | Open Highest-Risk Queue | Dense admin console with restrained visuals and strong filtering. |

---

## 7. Page Connection Map

This map explains how pages connect so designers and developers can preserve the product flow.

| Starting Page | Primary Next Pages | Connection Logic |
|---|---|---|
| Home | Signup, Pricing, Marketplace, Creators, Institutes | Public entry routes users by intent: student, creator, or institute. |
| Pricing | Signup, Subscription, Contact Sales | Guests create accounts; existing users upgrade; enterprises contact sales. |
| Marketplace | Listing, Signup, Checkout | Guests preview first, then authenticate to buy/enroll. |
| Login | Student Dashboard, Creator Dashboard, Org Dashboard, Admin Overview | Role/workspace decides landing destination. |
| Signup | Verify, Onboarding | Account must be verified and personalized before app access. |
| Onboarding | Student Dashboard, Creator Dashboard, Org Dashboard | Selected role creates the correct workspace and navigation. |
| Student Dashboard | Tests, Attempt, Results, Analytics, Planner, Marketplace | Dashboard exposes the most likely next action and supporting surfaces. |
| Tests | Test Detail | Catalog narrows choice; detail handles readiness and access. |
| Test Detail | Start Test, Checkout, Marketplace Listing | Access state decides whether user starts, buys, or previews more. |
| Start Test | Attempt | Final rules/checkpoint before the focused test shell. |
| Attempt | Submit Confirmation, Result Summary | Submission moves from focus mode to outcome mode. |
| Result Summary | Answer Review, Analytics, Study Planner, Retake | Results should lead directly to learning actions. |
| Answer Review | Practice, Planner, Report Issue | Mistakes become practice items or planner tasks. |
| Analytics | Planner, Tests, Reports/Export | Insights connect to action, retesting, and reporting. |
| Planner | Tests, Practice, Notifications | Planned work routes into execution and reminders. |
| Creator Dashboard | New Test, Question Bank, Analytics, Revenue | Creator overview sends users to production, analysis, or monetization. |
| New Test | Edit Test, Question Bank, Publish | Setup creates a draft and enters the builder. |
| Edit Test | Preview, Publish, Assignments, Marketplace | Completed tests can be private, assigned, or listed. |
| Question Bank | Edit Test, Import, Analytics | Questions feed test creation and quality analysis. |
| Assignments | Live Monitoring, Results/Reports, Notifications | Assigned tests move into monitoring and follow-up. |
| Org Dashboard | Users, Batches, Tests, Assignments, Reports, Billing | Institute overview connects setup, operation, reporting, and payment. |
| Users | Roles, Batches, Invitations | User management feeds permissions and class structure. |
| Batches | Assignments, Reports | Batches are the bridge between students and test programs. |
| Live Monitoring | Reports, Support | Active tests produce completion data and incident context. |
| Admin Overview | Users, Organizations, Content, Payments, Support, System Health | Admin starts from queues and drills into risk areas. |
| Help Center | Help Article, Support Ticket | Self-serve first, human support second. |

---

## 8. Page Blueprints

Each page below includes purpose, target user, displayed content, components/actions, navigation, required data, and future improvements.

### 8.1 Public Website Pages

| Page | Purpose And Target | Displayed Content And Components | Actions And Navigation | Required Data/APIs | Future Improvements |
|---|---|---|---|---|---|
| Home `/` | Convert guests into students, creators, or institute leads. Target: guests, students, teachers, institutes. | Hero with headline, supporting copy, 2 CTAs, dashboard-style preview, trust badges, social proof, 6-card feature grid, AI block, marketplace preview, testimonials, pricing preview, footer. | CTAs to signup, marketplace, pricing, creator/institute pages. Nav anchors to sections. | Public metrics, featured creators, featured tests, testimonials, pricing plans. | Personalize hero by exam type or referral source. Add localized versions. |
| Pricing `/pricing` | Explain plans and drive subscription. Target: students, creators, institutes. | Free, Pro, Creator, Enterprise cards with Pro highlighted, plan comparison, FAQs, trust/security notes. | Start free, upgrade, contact sales, compare features. | Plan catalog, active promotions, currency, taxes. | Usage-based pricing, regional prices, student discounts. |
| Marketplace `/marketplace` | Let guests preview quality and breadth of tests. Target: guests and students. | Search, category chips, trending tests, creator cards, ratings, price/free labels, preview locked content. | Search, filter, open listing, signup to attempt/purchase. | Listings, categories, ratings, creator stats. | SEO landing pages per exam/category. |
| Marketplace Listing `/marketplace/[listing]` | Explain one test/bundle before signup or purchase. | Title, creator, rating, category, difficulty, test count, sample questions, outcomes, reviews, price, preview. | Sign up to start, buy, follow creator, share. | Listing detail, sample questions, reviews, creator profile, purchase status. | Video intro, creator Q&A, bundle comparison. |
| Creators `/creators` | Recruit teachers/creators. Target: teachers, coaching experts. | Creator value prop, revenue model, marketplace reach, workflow preview, creator testimonials, FAQ. | Apply/start as creator, view creator pricing, login. | Creator metrics, revenue examples, policies. | Creator calculator, public creator directory. |
| Institutes `/institutes` | Convert institutes and enterprise buyers. | Enterprise value prop, multi-branch management, reporting, security, seat pricing, contact form. | Start trial, contact sales, book demo. | Enterprise plan, case studies, lead form. | ROI calculator, procurement docs. |
| Resources `/resources` | Educate and attract organic traffic. | Articles, exam guides, study strategy content, category filters. | Read article, search, signup CTA. | CMS articles, categories, authors. | Personalized resource recommendations. |
| Resource Detail `/resources/[article]` | Deep content and SEO. | Article content, related tests/resources, author, CTA. | Signup, share, browse related. | CMS article, related listings. | Interactive study templates. |
| Help Center `/help` | Reduce support load and build trust. | Search, FAQ categories, popular articles, contact support. | Search, open article, submit ticket. | Help articles, categories, support status. | AI help assistant. |
| Help Article `/help/[article]` | Explain one support topic. | Article, related articles, feedback prompt. | Mark helpful, contact support. | Article content, related topics. | Contextual product deep links. |
| Contact `/contact` | Capture sales/support/contact requests. | Contact form, support options, sales routing, response expectations. | Submit inquiry, choose reason. | Lead/ticket creation API. | Calendar booking integration. |
| Legal Pages | Communicate policies. Target: all users. | Terms, privacy, refund policy. | Navigate footer/legal. | CMS/legal content version. | Version acceptance tracking. |

### 8.2 Authentication And Onboarding Pages

| Page | Purpose And Target | Displayed Content And Components | Actions And Navigation | Required Data/APIs | Future Improvements |
|---|---|---|---|---|---|
| Login `/auth/login` | Return users to correct workspace. | Email/password, Google/social login, OTP option, forgot password, signup link. | Login, reset password, continue SSO, route by role/workspace. | Auth provider, session, role/workspace lookup. | Passkey login, institute SSO. |
| Signup `/auth/signup` | Create new account with low friction. | Email/phone/social signup, password rules, terms consent, role hint. | Create account, verify, go to onboarding. | User creation, consent records, referral code. | Referral attribution, invite-aware signup. |
| Verify `/auth/verify` | Confirm email/phone. | OTP/code input, resend, change contact. | Verify, resend, go back. | OTP verification, rate limit. | Magic link fallback. |
| Forgot Password `/auth/forgot-password` | Recover account. | Email input, confirmation state. | Send reset link, return login. | Password reset API. | Account recovery for phone-only users. |
| Reset Password `/auth/reset-password` | Set new password. | New password, confirm password, success state. | Save and login. | Token validation, password update. | Risk-based session revocation. |
| Role Selection `/onboarding` | Route new users. | Role cards: Student, Teacher/Creator, Institute. | Choose role, continue. | User profile status. | Multi-role setup at signup. |
| Student Onboarding | Personalize recommendations. | Exam goal, target date, subjects, baseline, preferred language, daily time, reminder preference. | Save and enter dashboard. | Exam taxonomy, subject list, profile API. | Diagnostic test recommendation engine. |
| Teacher Onboarding | Prepare creator workspace. | Teaching subjects, exams, content goals, public/private intent. | Create creator profile, go creator dashboard. | Creator profile, taxonomy. | Creator verification workflow. |
| Creator Onboarding | Monetization setup. | Public profile, bio, payout readiness checklist, marketplace guidelines. | Save profile, create first test. | Creator profile, KYC/payout status. | Guided first listing checklist. |
| Institute Onboarding | Build organization workspace. | Organization name, size, branch info, owner details, plan selection, invite options. | Create org, invite users, go org dashboard. | Organization creation, plan, seats. | Assisted migration from spreadsheets. |

### 8.3 Student App Pages

| Page | Purpose And Target | Displayed Content And Components | Actions And Navigation | Required Data/APIs | Future Improvements |
|---|---|---|---|---|---|
| Student Dashboard `/app` | Daily command center. Target: students. | Welcome/streak card, quick stats row, continue last test CTA, recommended tests, recent activity, AI suggestions panel, leaderboard snippet. | Continue test, start recommended test, open analytics/planner/leaderboard. | User profile, attempts, stats, recommendations, activity, AI insights, leaderboard. | Adaptive dashboard based on exam date and weakness. |
| Global Search `/app/search` | Find tests, questions, creators, results, help. | Search input, recent searches, grouped results, filters. | Search, filter, open result. | Search index, permissions, history. | Semantic search across explanations and notes. |
| Notifications `/app/notifications` | Centralize reminders and updates. | Unread/read tabs, notification cards, filters by tests/planner/billing/social. | Mark read, open target, dismiss, set preferences. | Notification feed, read state. | AI-prioritized notifications. |
| Tests `/app/tests` | Discover available tests. | Search, filters, categories, recommended tests, enrolled tests, free/paid badges, difficulty, duration. | Filter, save, open detail, start. | Test catalog, enrollment, purchase status, taxonomy. | Adaptive sorting by score gap and exam date. |
| Test Detail `/app/tests/[test]` | Prepare student before attempt. | Title, creator/org, duration, sections, marks, rules, syllabus, attempts left, reviews, instructions. | Start, enroll/buy, save, share, preview sample. | Test metadata, access rights, instructions, attempts, reviews. | Readiness score before start. |
| Start Test `/app/tests/[test]/start` | Final pre-attempt checkpoint. | Instructions, device/network checklist, timer rules, negative marking, confirmation. | Start attempt, cancel. | Test config, eligibility, attempt token. | Browser integrity checks, proctoring options. |
| Attempt `/app/attempts/[attempt]` | Zero-distraction answering. | Centered question card, question number/section, timer/progress, options, action row, sticky navigator, autosave status. | Select option, mark review, previous/next, section switch, submit. | Attempt state, questions, answers, timer, autosave, section rules. | Offline resilience, subjective responses, formula editor. |
| Submit Confirmation | Prevent accidental submission. | Modal with unanswered count, marked-review count, time left, final CTA. | Submit, return to test. | Attempt summary. | Risk prompts for abnormal patterns. |
| Result Summary `/app/results/[attempt]` | Make result understandable and actionable. | Score, rank, percentile, accuracy, avg time/question, correct/wrong/skipped, chart summary, AI prediction card. | Review answers, add weak chapters to planner, retake, share. | Result, scoring, ranking, analytics, AI insight. | Peer benchmark by cohort. |
| Answer Review `/app/results/[attempt]/review` | Learn from mistakes. | Question list, filters by wrong/skipped/marked/subject, correct answer, explanation, time spent, notes. | Filter, bookmark, report issue, add to practice, next/previous. | Attempt answers, explanations, tags, bookmarks, reports. | AI-generated alternate explanations. |
| Analytics `/app/analytics` | Track progress over time. | Summary cards, line chart, bar chart, pie chart, heatmap, weak/strong chapters, suggestions, AI prediction purple card. | Filter by exam/subject/date, drill into chapter, export. | Attempts, scores, time, taxonomy, insights. | Predictive rank and readiness simulations. |
| Study Planner `/app/planner` | Convert insights into schedule. | Calendar/list toggle, daily tasks, weak chapter blocks, test schedule, reminders, completion state. | Add task, reschedule, complete, generate AI plan. | Planner tasks, availability, weak topics, reminders. | Auto-adjust plan after missed days. |
| Practice `/app/practice` | Quick targeted learning. | Subject/chapter filters, difficulty, question mode, saved mistakes, timed practice. | Start practice, resume, review. | Question bank access, tags, past mistakes. | Adaptive drills and spaced repetition. |
| Marketplace In-App `/app/marketplace` | Buy or enroll in creator content. | Search, filters, categories, ratings, creator cards, purchased/free tabs. | Preview, buy, enroll, follow creator. | Listings, purchases, subscriptions, reviews. | Bundles, coupons, creator live events. |
| Marketplace Listing In-App | Convert with full context. | Listing detail, included tests, sample questions, reviews, creator profile, access status. | Buy, start included test, review after purchase. | Listing, order state, creator, reviews. | Trial attempts and cohort discussions. |
| Subscription `/app/subscription` | Upgrade or manage plan. | Current plan, usage, plan comparison, recommended Pro, benefits, renewal date. | Upgrade, downgrade, apply coupon, manage billing. | Plans, subscription, entitlements. | Personalized upgrade prompts. |
| Billing `/app/billing` | Payment history and invoices. | Payment methods, invoices, receipts, failed payment notices. | Add card/UPI, download invoice, retry payment. | Billing account, invoices, payment methods. | Family/group billing. |
| Leaderboard `/app/leaderboard` | Motivate through comparison. | Global/friends/batch tabs, rank, score, streak, filters by exam/date. | Filter, view profile, share rank. | Leaderboard snapshots, privacy settings. | League tiers and seasonal resets. |
| Achievements `/app/achievements` | Reward consistency and improvement. | Badges, streak milestones, score jumps, completion achievements, locked badges. | View badge, share, inspect progress. | Achievement rules, earned badges. | Achievement collections and rewards. |
| Profile `/app/profile` | Show identity and progress. | Avatar, exam goal, stats, achievements, public visibility controls. | Edit profile, share profile, manage visibility. | User profile, stats, privacy. | Public student portfolios. |
| Settings `/app/settings` | Control account and preferences. | Account, notifications, privacy, language, appearance, test preferences, connected accounts. | Update preferences, change password, delete account. | User settings, consents, devices. | Advanced accessibility presets. |
| Help `/app/help` | Contextual support inside app. | Search, suggested help, contact support, recent tickets. | Open article, submit ticket. | Help content, tickets, user context. | AI troubleshooting assistant. |

### 8.4 Teacher And Creator Pages

| Page | Purpose And Target | Displayed Content And Components | Actions And Navigation | Required Data/APIs | Future Improvements |
|---|---|---|---|---|---|
| Creator Dashboard `/creator` | Operational home for teachers/creators. | Revenue/subscribers/tests/students cards, drafts, published tests, reviews, analytics, marketplace status. | Create test, open question bank, view revenue, respond reviews. | Creator stats, tests, revenue, reviews, tasks. | Personalized growth tips. |
| Tests `/creator/tests` | Manage all tests. | Draft/published/archived tabs, filters, status, attempts, revenue, assignment status. | New test, edit, duplicate, publish, archive. | Test list, status, performance. | Bulk publish and bundle management. |
| New Test `/creator/tests/new` | Start test creation. | Setup wizard: category, syllabus, duration, scoring, visibility, sections. | Save draft, continue builder. | Taxonomy, templates, scoring presets. | AI test outline generation. |
| Edit Test `/creator/tests/[test]/edit` | Build and refine test. | Sections, question list, question editor, scoring, preview, validation panel. | Add questions, reorder, preview, publish. | Test detail, questions, validation, permissions. | Collaborative editing. |
| Question Bank `/creator/questions` | Central repository of reusable questions. | Search, filters, subject/chapter/difficulty/type, question table/cards, quality status. | Add, edit, import, tag, bulk select, export. | Questions, tags, media, usage stats. | AI quality scoring and duplicate detection. |
| Question Import `/creator/questions/import` | Add questions at scale. | Upload area, mapping, parsing preview, validation errors, import summary. | Upload, map columns, fix issues, import. | Import parser, taxonomy, validation. | OCR/image import, PDF parsing. |
| Assignments `/creator/assignments` | Assign tests to students/batches. | Assignment list, due dates, completion, reminders, attempt rules. | Assign test, edit due date, send reminder, view submissions. | Assignments, batches, submissions. | Smart reminders based on inactivity. |
| Students `/creator/students` | Track student cohorts. | Student list, batches, progress, recent attempts, weak areas. | Invite, remove, filter, open student report. | Students, batch memberships, progress. | At-risk student detection. |
| Creator Analytics `/creator/analytics` | Understand content and learners. | Test performance, question difficulty, drop-off, revenue conversion, student outcomes. | Filter, export, drill into test/question. | Attempts, question stats, sales, cohorts. | Benchmark against similar creators. |
| Marketplace `/creator/marketplace` | Manage public listings. | Listing status, price, category, conversion, reviews, approval state. | Create listing, submit for review, edit, unpublish. | Listings, moderation state, sales. | A/B testing of listing copy. |
| Revenue `/creator/revenue` | Track earnings. | Gross revenue, net revenue, fees, refunds, subscribers, trend chart. | Filter date, export, view transactions. | Orders, subscriptions, refunds, fees. | Tax reports. |
| Payouts `/creator/payouts` | Manage payout flow. | Payout balance, bank/KYC status, payout history, next payout date. | Add payout method, request payout, download statement. | Payout account, KYC, ledger. | Multi-currency payouts. |
| Reviews `/creator/reviews` | Manage reputation and feedback. | Ratings, review list, filters, reply tools, reported reviews. | Reply, report, request more context. | Reviews, listing/test context. | Sentiment trends. |
| Creator Settings | Control profile and monetization. | Public profile, notification prefs, payout settings, marketplace policies, team access. | Update, save, invite collaborator. | Creator profile, payout, team roles. | Creator team workspaces. |

### 8.5 Organization And Institute Pages

| Page | Purpose And Target | Displayed Content And Components | Actions And Navigation | Required Data/APIs | Future Improvements |
|---|---|---|---|---|---|
| Org Dashboard `/org` | Executive and operational overview. | Active students, test completion, avg score, weak subjects, live tests, billing status, alerts. | Create assignment, invite users, open reports/live monitoring. | Org metrics, assignments, billing, alerts. | Cross-branch benchmarking. |
| Branches `/org/branches` | Manage physical/logical branches. | Branch list, admins, student counts, performance summary. | Add branch, edit, archive, assign admins. | Branches, users, stats. | Regional hierarchy and territories. |
| Users `/org/users` | Manage all people. | User table, role, branch, batch, invite status, filters, bulk actions. | Invite, import CSV, suspend, change role, reset access. | Users, roles, invites, seat limits. | SCIM/SSO sync. |
| Roles `/org/roles` | Define permissions. | Role list, permission matrix, default roles. | Create role, edit permissions, assign. | RBAC schema, audit log. | Attribute-based access control. |
| Batches `/org/batches` | Organize students. | Batch cards/table, teacher, schedule, students, assigned tests. | Create batch, add students, assign teacher, open batch report. | Batches, users, assignments. | Auto-batching by level. |
| Org Tests `/org/tests` | Manage institute test library. | Internal tests, creator purchases, drafts, published status, ownership. | Create, import, assign, duplicate. | Tests, access rights, creators. | Shared library across branches. |
| Assignments `/org/assignments` | Run tests at scale. | Assignment list, target batches, due dates, completion, reminders. | Create assignment, edit, pause, send reminders, view results. | Assignments, batch membership, attempt summaries. | Assignment templates. |
| Live Monitoring `/org/live` | Monitor active tests. | Active attempts, timer status, submission rate, flagged issues, network/autosave status. | Filter, message batch, extend time if allowed, end test. | Realtime attempts, logs, proctoring events. | Proctoring and anomaly detection. |
| Reports `/org/reports` | Generate institutional reports. | Report templates, filters, branch/batch/student views, export history. | Generate, schedule, export PDF/CSV. | Aggregated analytics, report jobs. | Custom report builder. |
| Billing `/org/billing` | Manage subscription and seats. | Plan, seats used, invoices, payment method, renewal, overage alerts. | Upgrade, add seats, download invoice, contact sales. | Subscription, invoices, payment methods. | Purchase orders and annual contracts. |
| Integrations `/org/integrations` | Connect external systems. | Available integrations, status, API keys, webhooks. | Connect, disconnect, rotate keys. | Integration configs, audit. | LMS/SIS integrations. |
| Audit Logs `/org/audit-logs` | Compliance and traceability. | Log table, actor, action, resource, timestamp, filters. | Search, export. | Audit events. | Retention policies and anomaly alerts. |
| Org Settings `/org/settings` | Configure workspace. | Branding, domains, security, default test rules, notification policies. | Save, upload logo, configure policies. | Org profile, settings, security. | White-label student portals. |

### 8.6 Platform Admin Pages

| Page | Purpose And Target | Displayed Content And Components | Actions And Navigation | Required Data/APIs | Future Improvements |
|---|---|---|---|---|---|
| Admin Overview `/admin` | Monitor platform health and business. | Users, revenue, attempts, errors, moderation queue, support queue. | Open queue, drill into metrics. | Platform metrics, alerts, jobs. | Executive dashboards. |
| Users `/admin/users` | Support and moderate users. | User table, roles, status, risk flags, subscription, activity. | View, impersonate with audit, suspend, reset access. | Users, sessions, payments, audit. | Risk scoring. |
| Organizations `/admin/organizations` | Manage institutes. | Org table, plan, seats, owner, health, billing status. | View org, adjust plan, support, suspend. | Organizations, billing, activity. | Customer success notes. |
| Content `/admin/content` | Moderate questions/tests. | Review queue, reported questions, duplicate/quality flags. | Approve, reject, request changes, remove. | Content records, reports, moderation notes. | AI-assisted moderation. |
| Marketplace `/admin/marketplace` | Govern public monetized content. | Listing queue, pricing, creator status, complaints, refunds. | Approve listing, reject, feature, delist. | Listings, creator KYC, reviews. | Trust score for creators. |
| Payments `/admin/payments` | Resolve billing issues. | Transactions, subscriptions, refunds, disputes, payout ledger. | Refund, retry, inspect order, export. | Payment provider, ledger, invoices. | Automated dispute workflows. |
| Support `/admin/support` | Help agents resolve tickets. | Ticket queue, user context, attempt/payment timeline. | Reply, assign, close, escalate. | Tickets, user context, logs. | AI answer drafts. |
| Feature Flags `/admin/feature-flags` | Control rollout. | Flag list, audience rules, status, experiments. | Create, enable, disable, rollout. | Feature flag service, cohorts. | Experiment analysis. |
| System Health `/admin/system-health` | Monitor technical reliability. | API health, queue status, attempt autosave, payment webhook status. | Inspect incident, acknowledge alert. | Observability, logs, jobs. | Synthetic test attempt monitor. |
| Audit Logs `/admin/audit-logs` | Platform-level traceability. | All sensitive actions, filters, exports. | Search, export, inspect. | Audit events. | Compliance exports. |

---

## 9. Core Modules And Feature Specs

### 9.1 Test Engine

Purpose:

- Deliver reliable, low-distraction test attempts at high scale.

Capabilities:

- Objective questions: single choice, multiple choice, numeric, true/false.
- Future question types: subjective, coding, image-based, comprehension groups.
- Sections with individual timers or global timer.
- Negative marking, partial marking, custom scoring.
- Auto-save answer state.
- Mark for review, skip, answered states using design tokens.
- Keyboard shortcuts: 1-4, N, P, R.
- Submit confirmation with unanswered count.
- Result generation and delayed result mode.

Critical product rules:

- Test interface must hide marketplace, marketing, and unrelated navigation.
- Timer and progress remain visible but not visually aggressive.
- Navigator must use shape/icon plus color for accessibility.
- Auto-save state must be visible but quiet.

Key data:

- Test, TestSection, Question, Option, Attempt, AttemptAnswer, AttemptEvent, Result.

### 9.2 Question Bank

Purpose:

- Let teachers, creators, and institutes manage reusable, high-quality questions.

Capabilities:

- Create/edit questions.
- Tag by exam, subject, chapter, topic, difficulty, question type.
- Bulk import.
- Media support.
- Explanation management.
- Usage history.
- Duplicate detection.
- Reported issue workflow.

Future AI:

- Suggest tags.
- Detect duplicate questions.
- Rewrite unclear explanations.
- Estimate difficulty from performance data.

### 9.3 AI Features

AI should be useful, restrained, and clearly separated with the accent-ai purple language.

Student AI:

- Result explanation: what happened, why it matters, what to do next.
- Weak chapter prioritization.
- Study plan generation.
- Recommended tests/practice sets.
- Rank/readiness prediction.
- Alternate explanations for wrong answers.
- Natural language analytics query.

Teacher/Creator AI:

- Question formatting from raw text.
- Explanation improvement.
- Test blueprint generation.
- Difficulty estimation.
- Content quality flags.
- Review sentiment summary.

Institute AI:

- At-risk student detection.
- Batch-level weakness summary.
- Assignment recommendation.
- Report summary for owners.

Guardrails:

- AI should not replace official answers unless reviewed.
- AI insights need confidence indicators where predictions are used.
- Any AI-generated question or explanation must be marked as draft until approved.

### 9.4 Analytics

Student analytics:

- Accuracy.
- Avg time/question.
- Correct/wrong/skipped.
- Score trend.
- Subject/chapter heatmap.
- Strong and weak chapters.
- Rank/percentile where applicable.
- AI suggestions.

Teacher/creator analytics:

- Completion rate.
- Average score.
- Question difficulty.
- Discrimination index.
- Drop-off.
- Review/rating trends.
- Revenue conversion for paid content.

Institute analytics:

- Branch, batch, teacher, student, subject, and test comparisons.
- Assignment completion.
- Weakness distribution.
- Attendance/participation.
- Exportable reports.

Design behavior:

- Summary cards first.
- Charts second.
- Deep tables behind filters.
- Use blue, green, purple, gray. Avoid rainbow charts.

### 9.5 Marketplace

Purpose:

- Let students discover high-quality tests and let creators monetize expertise.

Marketplace objects:

- Creator profile.
- Listing.
- Test bundle.
- Individual test.
- Review.
- Purchase/subscription.
- Coupon.

Listing should include:

- Outcome-focused title.
- Exam/category.
- Difficulty.
- Included tests/questions.
- Creator credibility.
- Ratings and reviews.
- Sample questions.
- Refund/access policy.

Trust model:

- Marketplace review for public paid content.
- Report listing/review/question.
- Creator verification/KYC for payouts.
- Transparent ratings and refund rules.

### 9.6 Subscriptions And Payments

Plans:

- Free: limited tests/practice, basic analytics.
- Pro: full student analytics, AI planner, more attempts, premium features.
- Creator: marketplace publishing, revenue dashboard, payout.
- Enterprise: institute management, seats, reports, security, support.

Payment flows:

- Upgrade from dashboard/paywall/pricing.
- Purchase marketplace listing.
- Creator payout.
- Institute seat billing.
- Failed payment recovery.
- Refund/dispute handling.

Required behavior:

- Entitlements should be separated from payment status.
- Payment webhooks must be idempotent.
- Invoices and receipts must be accessible.
- Access changes must be immediate after successful payment.

### 9.7 Notifications

Channels:

- In-app.
- Email.
- Push/mobile later.
- SMS/WhatsApp later for institutes where appropriate.

Types:

- Test due soon.
- Scheduled test starting.
- Result ready.
- Study plan reminder.
- Achievement earned.
- Marketplace purchase.
- Creator sale/review.
- Institute assignment completion.
- Billing/payment.
- Support response.

Design behavior:

- Notifications should be scannable, grouped, and quiet.
- Urgent test states can use warning, errors use error token.

### 9.8 Leaderboards

Types:

- Global by exam.
- Batch/institute.
- Friends/private group.
- Weekly/monthly season.
- Test-specific leaderboard.

Privacy:

- Students can hide public profile.
- Institutes can control whether batch rankings are visible.
- Show rank ranges if privacy requires.

### 9.9 Study Planner

Inputs:

- Exam date.
- Available study time.
- Weak chapters.
- Upcoming assignments.
- Marketplace/enrolled tests.
- Past performance.

Outputs:

- Daily tasks.
- Test schedule.
- Practice recommendations.
- Review blocks.
- Reminder schedule.

Design:

- Calm calendar/list layout.
- Today and next action should be obvious.
- AI plan card uses purple accent, but regular tasks remain neutral.

### 9.10 Achievements

Achievement classes:

- Consistency: streaks, weekly completion.
- Performance: score jump, accuracy improvement.
- Mastery: chapter mastered.
- Endurance: full-length tests completed.
- Recovery: improved after weak result.
- Marketplace: first premium test completed.

Purpose:

- Encourage behavior, not vanity.
- Reward improvement, not only top scores.

---

## 10. Filters, Search, And Reporting

### 10.1 Global Search

Search targets:

- Tests.
- Marketplace listings.
- Questions.
- Results.
- Chapters.
- Creators.
- Students.
- Help articles.

Search design:

- Top bar search on dashboards.
- Dedicated search page for full results.
- Recent searches and quick filters.
- Permission-aware results.

### 10.2 Standard Filters

Tests:

- Exam, subject, chapter, difficulty, duration, free/paid, creator, rating, status.

Questions:

- Exam, subject, chapter, topic, difficulty, type, quality status, usage, reported.

Analytics:

- Date range, exam, subject, chapter, test, batch, branch, student.

Marketplace:

- Category, price, rating, creator, trending, difficulty, bundle size.

Reports:

- Branch, batch, teacher, test, date range, student group, performance band.

### 10.3 Reports

Student reports:

- Attempt report.
- Monthly progress report.
- Weakness report.

Teacher reports:

- Test performance.
- Student progress.
- Question analysis.

Institute reports:

- Branch/batch comparison.
- Assignment completion.
- Student ranking.
- Weak chapter map.
- Attendance/participation.
- Billing/seat usage.

Exports:

- PDF for human-friendly reports.
- CSV for data workflows.
- Scheduled email reports for institutes.

---

## 11. State Design

### 11.1 Empty States

Principles:

- Explain the next useful action.
- Use one primary CTA.
- Avoid decorative noise.

Examples:

- No tests attempted: suggest diagnostic test.
- Empty question bank: import questions or create first question.
- No marketplace purchases: show recommended free tests.
- No analytics data: explain that results appear after first attempt.
- No students in batch: invite or import students.

### 11.2 Loading States

Principles:

- Use skeletons for cards, tables, charts.
- Test attempt loading must be explicit and fast.
- Avoid spinner-only pages except short transitions.

Examples:

- Dashboard skeleton: stats row, recommendation cards, timeline.
- Analytics skeleton: summary cards, chart blocks.
- Marketplace skeleton: listing cards and filter bar.
- Attempt load: secure attempt preparation state.

### 11.3 Error States

Principles:

- Clear cause, clear next action, support path for high-risk flows.
- Preserve work whenever possible.

Examples:

- Attempt autosave failed: retry, local state preserved, warning state.
- Payment failed: retry, change method, contact support.
- Test unavailable: explain access/expiry, route to tests.
- Import failed: show row-level errors and downloadable error file.
- Result processing failed: queued retry and support ID.

### 11.4 Success States

Examples:

- Signup complete: route into onboarding.
- Test submitted: result processing or result ready.
- Plan generated: tasks added to planner.
- Question import complete: summary with errors/warnings.
- Listing approved: marketplace visibility confirmation.
- Payment success: access unlocked immediately.

---

## 12. Role-Based Permissions

| Capability | Student | Teacher | Creator | Institute Admin | Institute Owner | Platform Admin |
|---|---:|---:|---:|---:|---:|---:|
| Attempt assigned/free tests | Yes | Optional | Optional | Optional | Optional | Yes |
| Buy marketplace tests | Yes | Yes | Yes | Yes | Yes | Yes |
| Create questions | No | Yes | Yes | Yes | Yes | Yes |
| Create private tests | No | Yes | Yes | Yes | Yes | Yes |
| Publish marketplace listing | No | No | Yes | With org policy | With org policy | Yes |
| Assign tests to batch | No | Yes | Yes | Yes | Yes | Yes |
| View own analytics | Yes | Yes | Yes | Yes | Yes | Yes |
| View student analytics | No | Assigned only | Assigned/followers only | Org scope | Org scope | Yes |
| Manage org users | No | No | No | Limited | Yes | Yes |
| Manage billing | Own only | Own only | Own only | View/limited | Yes | Yes |
| Moderate content | No | Own reports only | Own reports only | Org content | Org content | Yes |
| Access audit logs | No | No | Creator actions | Org scope | Org scope | Yes |

Permission principles:

- Every resource belongs to a user, creator workspace, organization, or platform.
- Organization data must be tenant-isolated.
- Sensitive admin actions require audit logs.
- Impersonation, if allowed, must be explicit and audited.

---

## 13. Required Core Data Model

Primary entities:

- User
- Profile
- Role
- Permission
- Organization
- Branch
- Batch
- Membership
- Invitation
- Exam
- Subject
- Chapter
- Topic
- Question
- QuestionOption
- Explanation
- QuestionMedia
- Test
- TestSection
- TestQuestion
- Assignment
- Attempt
- AttemptAnswer
- AttemptEvent
- Result
- AnalyticsSnapshot
- AIInsight
- StudyPlan
- StudyTask
- Achievement
- Leaderboard
- MarketplaceListing
- CreatorProfile
- Review
- Order
- Subscription
- Payment
- Invoice
- Payout
- Notification
- SupportTicket
- AuditLog

API/service domains:

- Auth and identity.
- User/profile.
- Taxonomy.
- Test catalog.
- Test attempt engine.
- Scoring and results.
- Analytics.
- AI insights.
- Question bank.
- Marketplace.
- Billing and payments.
- Notifications.
- Reporting/export.
- Admin/moderation.
- Search.
- Audit/logging.

---

## 14. Mobile Experience

Mobile product principles:

- Prioritize student workflows first: dashboard, test attempt, result review, planner.
- Teacher/admin tools should be usable for quick actions but can be optimized for tablet/desktop.
- Keep touch targets at 44px minimum.
- Avoid dense tables on mobile; use stacked rows, filters in sheets, and progressive drilldown.

Mobile-specific behavior:

- Bottom navigation for student app: Home, Tests, Planner, Analytics, Profile.
- Attempt navigator becomes a bottom sheet or compact drawer.
- Timer and progress stay sticky at top in attempt mode.
- Filters open in full-screen or bottom sheet panels.
- Charts use summary cards plus horizontal scroll only where unavoidable.
- Marketplace cards show the most decision-critical data first: title, rating, duration/count, price/access.

Mobile risks:

- Long questions and options can cause fatigue. Use comfortable line height and stable option containers.
- Prevent accidental submits with confirmation.
- Recover from app/background interruptions with autosave and resume.

---

## 15. Scalability For 1M+ Users

Product scalability:

- Multi-tenant organization architecture from the beginning.
- Separation of student, creator, institute, and admin workspaces.
- Entitlements service independent of payment provider.
- Async jobs for result generation, reports, imports, AI insights, emails.
- Realtime services for live monitoring and active attempts.
- Search index for marketplace, tests, questions, help, and users.
- Event pipeline for analytics and audit logs.

Reliability priorities:

- Test attempt autosave must be the most reliable flow in the product.
- Submission must be idempotent.
- Payment fulfillment must be idempotent.
- Reports and AI can be delayed, but attempts and payments cannot be ambiguous.

Operational needs:

- Feature flags and staged rollouts.
- Admin support console.
- Observability for attempt save latency, submission errors, payment webhooks, queue delay.
- Data retention and export policies.
- Rate limits for auth, imports, AI, and public APIs.

---

## 16. Development Roadmap

### 16.1 MVP

Goal: validate the core student outcome loop and basic creator/institute supply.

| Feature | Business Value | Complexity | Priority |
|---|---|---:|---:|
| Public home, pricing, basic marketplace preview | High acquisition value | Medium | P0 |
| Auth, role selection, student onboarding | Required for activation | Medium | P0 |
| Student dashboard | Core retention surface | Medium | P0 |
| Test catalog and test detail | Required for discovery | Medium | P0 |
| Test attempt engine with autosave | Core product | High | P0 |
| Result summary and answer review | Core learning loop | High | P0 |
| Basic student analytics | Core differentiation | Medium | P0 |
| Basic question bank | Enables content supply | High | P0 |
| Test builder with draft/publish | Enables teachers/creators | High | P0 |
| Assignments for teacher to students/batches | Supports early B2B | Medium | P0 |
| Basic subscription/payment | Monetization | High | P0 |
| Notifications: in-app and email basics | Retention and operational | Medium | P1 |
| Empty/loading/error/success state system | Trust and polish | Medium | P0 |

MVP should include:

- Objective question types only.
- Simple marketplace purchase or Pro upgrade.
- Basic creator dashboard.
- Basic institute workspace if B2B is part of launch, otherwise private beta.
- No advanced proctoring, no mobile native app, no complex AI generation.

### 16.2 Phase 2

Goal: improve retention, monetization, and teacher workflows.

| Feature | Business Value | Complexity | Priority |
|---|---|---:|---:|
| Study planner with AI suggestions | High retention | Medium | P0 |
| Marketplace listings, reviews, creator profiles | High revenue supply | High | P0 |
| Creator revenue and payout dashboard | Creator trust | High | P0 |
| Advanced analytics: heatmaps, trends, weak chapters | High differentiation | Medium | P0 |
| Leaderboards and achievements | Engagement | Medium | P1 |
| Question import with validation | Creator/institute efficiency | Medium | P0 |
| Organization users, batches, roles | B2B growth | High | P0 |
| Reports export PDF/CSV | Institute value | Medium | P1 |
| Help center and support tickets | Trust and scale | Medium | P1 |
| Global search | UX efficiency | Medium | P1 |

### 16.3 Phase 3

Goal: scale institutional use and deepen AI differentiation.

| Feature | Business Value | Complexity | Priority |
|---|---|---:|---:|
| Live monitoring for institute tests | High B2B value | High | P0 |
| AI-generated study plan auto-adjustment | Retention | High | P0 |
| AI question quality scoring and duplicate detection | Content quality | High | P1 |
| Semantic search across questions/explanations | Productivity | High | P1 |
| Scheduled reports | Enterprise value | Medium | P1 |
| Feature flags/admin moderation console | Operational scale | Medium | P0 |
| Marketplace moderation workflow | Trust | Medium | P0 |
| Advanced billing: seats, invoices, annual plans | B2B monetization | High | P0 |
| Mobile-first refinements/PWA | Student retention | Medium | P1 |

### 16.4 Future Features

Goal: expand defensibility, enterprise depth, and learning intelligence.

- Native mobile apps.
- Proctoring and integrity checks.
- Subjective answer evaluation.
- Coding question support.
- Live classes or doubt sessions, if strategically aligned.
- Creator communities and cohorts.
- White-label institute portals.
- SSO, SCIM, and SIS/LMS integrations.
- Public student portfolios.
- Adaptive full-test generation.
- Predictive rank simulation.
- Multilingual content and regional pricing.
- Data warehouse and advanced BI for large institutes.

---

## 17. Product Prioritization Logic

High business value, lower complexity:

- Public pages.
- Auth/onboarding.
- Student dashboard.
- Test catalog.
- Basic analytics.
- In-app notifications.
- Basic achievements.

High business value, high complexity:

- Test attempt engine.
- Results/scoring.
- Payments.
- Question bank and test builder.
- Organization roles and reports.
- Marketplace payouts.

Defer until core loop is strong:

- Advanced AI content generation.
- Proctoring.
- Native mobile apps.
- Complex integrations.
- White-labeling.
- Advanced admin experimentation.

Strategic principle:

- Build the student learning loop first.
- Build creator/institute supply second.
- Build marketplace liquidity third.
- Build enterprise scale once repeatable workflows are proven.

---

## 18. Experience Quality Checklist

Use this checklist before designing or building any page:

- Does the page have one obvious primary action?
- Is the most important card or data block top-left?
- Are AI sections clearly useful and visually distinct without overuse?
- Is the page calm enough for long student sessions?
- Are all empty, loading, error, and success states defined?
- Does mobile have a real interaction model, not a squeezed desktop layout?
- Are filters and search permission-aware?
- Are payment, attempt submission, and autosave flows recoverable?
- Does the page respect the color/status meanings from `Design.md`?
- Does the experience feel like a premium SaaS tool, not a traditional LMS?
