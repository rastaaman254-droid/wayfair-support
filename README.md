# Wayfair Customer Support

## Overview
Wayfair Customer Support is a modern, full-stack web application for managing customer complaints and support tickets. Built with Next.js, React, Supabase, and Tailwind CSS.

## Features

✨ **Core Features:**
- 📝 Easy complaint submission form with validation
- 📊 Admin dashboard for managing complaints
- 🗂️ Real-time complaint tracking
- 📧 Email notifications via Formspree
- 💬 WhatsApp integration for instant messaging
- 🔐 Secure database with Supabase
- 📱 Fully responsive design
- ⚡ Fast performance with Next.js

## Technology Stack

- **Frontend:** Next.js 14, React 18, Tailwind CSS
- **Backend/Database:** Supabase (PostgreSQL)
- **Email:** Formspree
- **Hosting:** Vercel
- **Language:** TypeScript
- **UI Components:** Custom React components with Lucide icons

## Project Structure

```
wayfair-support/
├── app/
│   ├── layout.tsx              # Root layout
│   ├── globals.css             # Global styles
│   ├── page.tsx                # Home page
│   ├── submit/
│   │   └── page.tsx            # Complaint submission page
│   ├── success/
│   │   └── page.tsx            # Success confirmation page
│   └── admin/
│       └── page.tsx            # Admin dashboard
├── components/
│   ├── Header.tsx              # Navigation header
│   ├── Footer.tsx              # Footer component
│   ├── WhatsAppButton.tsx       # WhatsApp floating button
│   ├── form/
│   │   ├── ComplaintForm.tsx    # Main complaint form
│   │   ├── InputField.tsx       # Input field component
│   │   ├── TextAreaField.tsx    # Text area component
│   │   ├── SelectField.tsx      # Select dropdown component
│   │   └── CheckboxField.tsx    # Checkbox component
│   ├── admin/
│   │   ├── ComplaintsTable.tsx  # Complaints management table
│   │   └── AdminStats.tsx       # Dashboard statistics
│   ├── success/
│   │   └── SuccessPage.tsx      # Success message page
│   └── sections/
│       └── HomeSections.tsx     # Home page sections (Hero, Features, FAQ, CTA)
├── lib/
│   ├── supabase.ts            # Supabase client configuration
│   ├── types.ts               # TypeScript interfaces
│   ├── constants.ts           # App constants
│   ├── validators.ts          # Form validation logic
│   └── caseReference.ts       # Utility functions
├── supabase/
│   ├── migrations/
│   │   ├── 001_create_complaints_table.sql
│   │   └── 002_update_rls_policies.sql
│   ├── schema.json            # Database schema documentation
│   └── README.md              # Supabase setup guide
├── package.json               # Dependencies
├── tsconfig.json              # TypeScript configuration
├── next.config.ts             # Next.js configuration
├── tailwind.config.ts         # Tailwind CSS configuration
├── postcss.config.js          # PostCSS configuration
└── .env.example               # Environment variables template
```

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Supabase account
- Formspree account

### 1. Clone the Repository

```bash
git clone https://github.com/rastaaman254-droid/wayfair-support.git
cd wayfair-support
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Set Up Supabase

1. Go to [supabase.com](https://supabase.com) and create a new project
2. Go to SQL Editor and run the migrations from `supabase/migrations/`
3. Copy your project URL and anon key from Settings → API

### 4. Configure Environment Variables

```bash
cp .env.example .env.local
```

Edit `.env.local` with your credentials:

```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
NEXT_PUBLIC_FORMSPREE_ID=your_formspree_id
NEXT_PUBLIC_WHATSAPP_NUMBER=your_whatsapp_number
```

### 5. Run Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

### For Customers

1. **Visit the homepage** - Learn about the service
2. **Click "Submit Complaint"** - Fill out the complaint form
3. **Receive confirmation** - Get your case reference number
4. **Track status** - Use case reference to check complaint status

### For Admins

1. **Visit admin dashboard** - `/admin`
2. **View statistics** - See complaint overview
3. **Filter complaints** - Filter by status or other criteria
4. **Update status** - Change complaint status as needed
5. **View details** - See full complaint information

## API Endpoints

### Database Endpoints (via Supabase)

**Complaints Table:**
- GET all complaints
- POST new complaint
- PATCH update complaint status
- GET complaint by ID

**Audit Logs Table:**
- GET audit logs for complaint
- POST audit log entry

## Database Schema

### Complaints Table
```sql
- id (UUID) - Primary key
- case_reference (VARCHAR) - Unique case reference
- full_name (VARCHAR) - Customer name
- email (VARCHAR) - Customer email
- phone (VARCHAR) - Customer phone
- country (VARCHAR) - Customer country
- order_reference (VARCHAR) - Wayfair order reference
- category (VARCHAR) - Complaint category
- subject (VARCHAR) - Complaint subject
- description (TEXT) - Detailed description
- contact_method (VARCHAR) - Preferred contact method
- status (VARCHAR) - pending, in_review, resolved, closed
- created_at (TIMESTAMP) - Creation date
- updated_at (TIMESTAMP) - Last update date
- notes (TEXT) - Admin notes
- resolved_at (TIMESTAMP) - Resolution date
```

### Audit Logs Table
```sql
- id (UUID) - Primary key
- complaint_id (UUID) - Reference to complaint
- action (VARCHAR) - Action performed
- old_status (VARCHAR) - Previous status
- new_status (VARCHAR) - New status
- admin_notes (TEXT) - Admin notes
- created_at (TIMESTAMP) - Action timestamp
- created_by (VARCHAR) - User who performed action
```

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Add environment variables
5. Deploy

### Deploy to Other Platforms

The app can be deployed to any Node.js hosting platform:
- Heroku
- AWS
- DigitalOcean
- Railway
- Render

## Environment Variables

Create a `.env.local` file with:

```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=xxxxx

# Formspree (for email notifications)
NEXT_PUBLIC_FORMSPREE_ID=xxxxx

# WhatsApp
NEXT_PUBLIC_WHATSAPP_NUMBER=1234567890
```

## Scripts

```bash
# Development
npm run dev          # Start development server

# Production
npm run build        # Build for production
npm run start        # Start production server

# Quality
npm run lint         # Run ESLint
npm run type-check   # Check TypeScript
```

## Features in Detail

### Form Validation
- Real-time validation feedback
- Required field validation
- Email format validation
- Phone number format validation
- Min/max length validation

### Admin Dashboard
- Statistics overview (total, pending, in review, resolved)
- Filterable complaint table
- Status update functionality
- Sortable columns
- Responsive design

### Security
- Row Level Security (RLS) on database
- Input sanitization
- SQL injection prevention via Supabase
- CORS configuration
- Environment variable protection

## API Rate Limiting

Formspree has rate limits:
- Free plan: 50 submissions/month
- Pro plan: unlimited

Supabase has generous limits on the free tier.

## Troubleshooting

### Connection Issues
- Verify Supabase credentials
- Check network connectivity
- Review browser console for errors

### Form Submission Fails
- Ensure all required fields are filled
- Check that Supabase is configured correctly
- Verify Formspree is set up for email notifications

### Admin Dashboard Not Loading
- Check Supabase credentials
- Verify RLS policies are enabled
- Check browser console for errors

## Performance Optimization

- Next.js image optimization
- CSS minification with Tailwind
- JavaScript code splitting
- Automatic static optimization
- Database query optimization with indexes

## Security Best Practices

✅ Using Supabase Row Level Security
✅ HTTPS only in production
✅ Environment variable protection
✅ Input validation on client and server
✅ SQL injection prevention
✅ XSS protection with React

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, email support@wayfairsupport.com or visit our support page.

## Changelog

### v1.0.0 (Initial Release)
- Initial project setup
- Complaint submission form
- Admin dashboard
- Supabase integration
- Email notifications
- WhatsApp integration

## Roadmap

- [ ] User authentication for customers
- [ ] Ticket history for logged-in users
- [ ] Admin user management
- [ ] SMS notifications
- [ ] Multi-language support
- [ ] Advanced analytics
- [ ] Custom email templates
- [ ] API documentation
- [ ] Mobile app
- [ ] AI-powered complaint categorization

## Credits

- Built with [Next.js](https://nextjs.org)
- Styled with [Tailwind CSS](https://tailwindcss.com)
- Backend powered by [Supabase](https://supabase.com)
- Icons from [Lucide](https://lucide.dev)
- Form submission with [Formspree](https://formspree.io)

---

**Made with ❤️ by Rastaaman254-droid**
