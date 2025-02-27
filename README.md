## TRAVLRD Interview Project

1. Fork the repository or use it as a template or clone with `pnpx degit https://github.com/travlrd-com/final-example.git`.
2. Run `pnpm install`
3. Follow the steps outlined here: https://nextjs.org/learn/dashboard-app/setting-up-your-database#create-a-postgres-database
  - Initialize a new repository and publish it to Github (also make sure to set the repo to public)
  - Sign into your Vercel account and deploy your repository as a new project
  - Install the Vercel CLI: https://vercel.com/docs/cli
  - Run `vercel link` to link your project to the Vercel CLI
  - Create a new Postgres database on Vercel
  - Connect the database to your project via the dashboard (this will automatically add the postgres environment variables to the project)
  - Upload the remaining two environment variables to the Vercel project settings from the `.env.example` file
  - Run `vercel env pull .env.development.local` to make the latest environment variables available to your project locally
  - Run `vercel dev` to start the development server
4. Seed the database by opening `/seed` in your browser. This will create a user account that you can use to log in to the dashboard
5. Complete the interview task
6. Send us the link to your GitHub repo and the link to your deployed app (don't forget to set to public both the **GitHub repo** and the **Vercel deployment**, and make sure the **environment variables** are not tied to loaclhost)
###################
Invoices Page with Tab Filtering
This project implements an Invoices Page with dynamic tab-based filtering. The filtering system allows users to view invoices based on their status: All, Paid, Pending, Overdue, and Canceled. The selected tab is remembered by the browser, even after the page is closed or refreshed. The filtering mechanism uses server-side SQL queries to filter invoices based on the selected status, and the data is updated accordingly.

Features
# 5 Tabs for Filtering: The page has 5 tabs for filtering invoices based on their status:
  All
  Paid
  Pending
  Overdue
  Canceled
# Tab Persistence: The selected tab is remembered by the browser, even when the user closes or reloads the page, without using client-side state.

# Database Integration: The server queries the database with a dynamic filter based on the selected status.

# Server-Side Filtering: Invoices are fetched from the database, and the status is handled with SQL logic for precise filtering.

# SQL Query Filtering Logic
# Server-Side Implementation: fetchFilteredInvoices by status