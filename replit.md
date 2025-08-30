# Overview

This is a full-stack web application built with React and Express that serves as a personal appreciation website dedicated to "Noor Fatima". The application is a single-page website that showcases positive qualities, messages, and interactive features celebrating this individual. It features a modern, responsive design with smooth scrolling navigation, interactive components, and a warm aesthetic using custom color schemes and typography.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The client-side application is built using React with TypeScript and follows a component-based architecture. The UI is constructed using shadcn/ui components built on top of Radix UI primitives, providing accessibility and consistent design patterns. The application uses Vite as the build tool and development server, with Wouter for client-side routing.

**Key architectural decisions:**
- **Component Structure**: Organized into logical sections (hero, about, qualities, messages, etc.) with reusable UI components
- **Styling**: Tailwind CSS with custom CSS variables for theming, using a warm color palette with primary (coral), accent (green), and secondary (cream) colors
- **State Management**: React hooks for local component state, with TanStack Query for server state management
- **TypeScript**: Full TypeScript implementation for type safety across the application

## Backend Architecture
The server uses Express.js with TypeScript in ESM format. The architecture includes a modular routing system and an abstraction layer for data storage.

**Key architectural decisions:**
- **Storage Abstraction**: IStorage interface with MemStorage implementation for in-memory data storage of user records
- **Middleware**: Custom logging middleware for API request tracking and error handling
- **Development Setup**: Vite integration for development with HMR support
- **Build Process**: esbuild for server-side bundling in production

## Database Design
The application uses Drizzle ORM with PostgreSQL schema definition. The current schema includes a users table with id, username, and password fields, though the actual database integration appears to be minimal in the current implementation.

**Schema structure:**
- Users table with UUID primary key, unique username, and password fields
- Zod validation schemas for type-safe data insertion

## Development and Build System
The project uses a monorepo structure with shared TypeScript configurations and path aliases for clean imports. The build system supports both development and production environments with appropriate optimizations.

**Key features:**
- Shared schema definitions between client and server
- Path aliases for clean imports (@/, @shared/, @assets/)
- Hot module replacement in development
- Production builds with static file serving

# External Dependencies

## UI and Styling
- **Radix UI**: Comprehensive set of unstyled, accessible UI primitives for building the component library
- **Tailwind CSS**: Utility-first CSS framework for styling with custom theme configuration
- **Lucide React**: Icon library providing consistent iconography throughout the application
- **class-variance-authority**: Utility for creating variant-based component APIs

## Data and State Management
- **TanStack React Query**: Server state management for caching and synchronization
- **React Hook Form**: Form handling with @hookform/resolvers for validation
- **Zod**: Schema validation for type-safe data handling

## Database and ORM
- **Drizzle ORM**: TypeScript ORM for database operations with PostgreSQL support
- **@neondatabase/serverless**: Serverless PostgreSQL driver for Neon database
- **connect-pg-simple**: PostgreSQL session store for Express sessions

## Development Tools
- **Vite**: Fast build tool and development server with React plugin
- **esbuild**: Fast JavaScript bundler for production builds
- **TypeScript**: Type system for enhanced developer experience and code reliability
- **Wouter**: Lightweight client-side routing library for React