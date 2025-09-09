# Overview

This is a luxury athletic wear e-commerce application called "LUXE RUN" built with a modern full-stack architecture. The application showcases premium running gear with a focus on Korean craftsmanship and elegance. It features a responsive single-page application with smooth scrolling sections, a product gallery, brand storytelling, and a contact form. The project uses a React frontend with shadcn/ui components for a polished user experience, an Express.js backend with RESTful APIs, and PostgreSQL with Drizzle ORM for data management.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite for fast development
- **UI Framework**: shadcn/ui components with Radix UI primitives for accessibility
- **Styling**: Tailwind CSS with custom color scheme (charcoal, gold, cream, rich brown)
- **Typography**: Custom font stack using Playfair Display (serif), Montserrat (sans), and Lora (serif) from Google Fonts
- **State Management**: TanStack React Query for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Build System**: Vite with React plugin and custom aliases for clean imports

## Backend Architecture
- **Framework**: Express.js with TypeScript
- **API Pattern**: RESTful APIs with structured route handling
- **Request Logging**: Custom middleware for API request/response logging with timing
- **Error Handling**: Centralized error handling middleware
- **Development**: Hot module replacement with Vite integration in development mode
- **Storage Layer**: Abstracted storage interface with in-memory implementation for development

## Data Storage Solutions
- **Database**: PostgreSQL with Drizzle ORM
- **Schema Management**: Type-safe schema definitions with Zod validation
- **Migration System**: Drizzle Kit for database migrations
- **Connection**: Neon serverless PostgreSQL driver
- **Development Storage**: In-memory storage implementation with seeded sample data

## Authentication and Authorization
- **Session Management**: Express sessions with PostgreSQL session store (connect-pg-simple)
- **Security**: CORS configuration and request validation using Zod schemas

## External Dependencies
- **Database Provider**: Neon for serverless PostgreSQL hosting
- **Image Hosting**: Unsplash for product and brand imagery
- **Fonts**: Google Fonts for typography (Playfair Display, Montserrat, Lora)
- **Icons**: Lucide React for consistent iconography
- **Development Tools**: Replit integration with dev banner and cartographer plugin
- **Form Handling**: React Hook Form with Hookform Resolvers for form validation