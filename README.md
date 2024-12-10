# Next.js 15 App Router Unexpected Behavior with Dynamic Routes and Data Fetching

This repository demonstrates an unexpected behavior encountered when using dynamic routes and data fetching in the Next.js 15 App Router.  The issue involves inconsistencies in how data is fetched and displayed depending on the navigation method (e.g., direct link vs. internal navigation).

## Bug Report

The provided code creates a simple application with a dynamic route (`/blog/[slug]`).  Data is fetched for each blog post using `getServerSideProps`.  However, the data is not correctly loaded when the page is accessed directly via a link but works correctly when navigated internally.

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Access `/blog/post-1` directly in your browser. The page will likely be empty, or the data will not be fetched.
5. Navigate to `/` and click the link to `/blog/post-1`. The data will be fetched and displayed correctly.

## Expected Behavior

Data fetching should be consistent regardless of whether the dynamic route is accessed directly or via internal navigation within the app.

## Actual Behavior

Data fetching fails when the dynamic route is accessed directly.

## Solution

Please see the `bugSolution.js` file for a possible workaround.