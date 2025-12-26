# Flowva Hub 🚀

## Overview
Flowva Hub is a sophisticated tool discovery and reward management platform designed for modern developers and tech enthusiasts. Built with a high-performance **TypeScript** and **React** stack, the application enables users to manage their software subscriptions, build custom tech stacks, and participate in a gamified reward ecosystem.

The project integrates **Supabase** for real-time authentication and database management, utilizing **TanStack Query** for robust server-state synchronization. The interface is meticulously crafted with **Tailwind CSS** and **Radix UI** primitives to ensure a responsive, accessible, and premium user experience.

## Features
- **Gamified Rewards System**: A daily streak mechanism that encourages user retention through point accumulation.
- **Secure Authentication**: Robust user onboarding and session management via Supabase Auth (Email & Google).
- **Tech Stack Management**: Tools for users to organize, visualize, and share their professional software stacks.
- **Dynamic Reward Redemption**: A filtered marketplace for unlocking digital rewards based on user point balances.
- **Responsive Dashboard**: A mobile-first layout featuring custom sidebar navigation and modal-driven interactions.
- **Performance Optimized**: Lazy loading and code splitting implemented via React Suspense to ensure minimal initial bundle sizes.

## Technologies Used

| Technology | Purpose |
| :--- | :--- |
| [React 19](https://react.dev/) | UI Library & Component Architecture |
| [TypeScript](https://www.typescriptlang.org/) | Type Safety & Developer Experience |
| [Vite](https://vitejs.dev/) | Next-generation Frontend Tooling |
| [Supabase](https://supabase.com/) | Backend-as-a-Service (Auth & DB) |
| [TanStack Query](https://tanstack.com/query/latest) | Asynchronous State Management |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first Styling Framework |
| [Radix UI](https://www.radix-ui.com/) | Unstyled, Accessible UI Components |
| [React Hook Form](https://react-hook-form.com/) | High-performance Form Validation |

## Getting Started

### Installation

Follow these steps to set up the development environment on your local machine:

1.  **Clone the Repository**
    ```bash
    git clone https://github.com/Lansa-18/flowvahub-assessment.git
    cd flowvahub-assessment
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Configure Environment Variables**
    Create a `.env` file in the root directory and add your Supabase credentials:
    ```env
    VITE_SUPABASE_URL=your_supabase_project_url
    VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
    ```

4.  **Start the Development Server**
    ```bash
    npm run dev
    ```

## Usage

### User Authentication
Users can register via the `/signup` route or sign in through the `/login` page. The application supports both standard email/password combinations and Google OAuth providers. Authentication state is persisted across sessions using the `useUser` hook.

### Earning Points
Once logged in, navigate to the **Rewards Hub**. 
- Click **"Claim Today's Point"** to increment your daily streak. 
- The system prevents double-claiming by checking the `last_claimed_at` timestamp against the current server time.

### Managing the Tech Stack
The **Tech Stack** section allows users to curate a list of tools. This data is managed through the `NavModalContext` and can be shared with the community via the **Share Your Stack** feature, which generates a unique referral link.

### Redeeming Rewards
The **Redeem Rewards** tab displays various items (Gift Cards, Courses, etc.). The UI dynamically calculates if a user has sufficient points to unlock an item, changing the button state from "Locked" to "Claimable" based on real-time point balances.

## API Documentation

### Base URL
The application interacts with the Supabase API Gateway.

### Endpoints

#### POST /auth/v1/signup
**Request**:
```json
{
  "email": "user@example.com",
  "password": "securePassword123"
}
```
**Response**:
Returns a user object and session JWT.

#### GET /rest/v1/streaks
**Request**:
Requires `Authorization: Bearer <JWT>` and a query filter for `user_id`.

**Response**:
```json
{
  "user_id": "uuid",
  "total_points": 150,
  "current_streak": 5,
  "last_claimed_at": "2023-10-27T10:00:00Z"
}
```

#### POST /rest/v1/rpc/claim_daily_points
**Request**:
Internal RPC call triggered by the `useClaimDailyPoints` mutation.

**Errors**:
- 400: "Already claimed today"
- 401: "Unauthorized access"

## Author Info
**Project Lead**
- GitHub: [Lansa-18](https://github.com/Lansa-18)
- LinkedIn: [Mapelujo Abdulkareem](https://linkedin.com/in/lancer18)
- Twitter: [@Lansa_18](https://x.com/Lansa_18)
- Portfolio: [lansa.dev](https://lansa.dev)

---

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)

[![Readme was generated by Dokugen](https://img.shields.io/badge/Readme%20was%20generated%20by-Dokugen-brightgreen)](https://www.npmjs.com/package/dokugen)