# Frontend Deployment

This guide explains how to deploy the frontend application using PM2.

## Prerequisites
- Node.js installed
- PM2 installed globally (`npm install -g pm2`)

## Deployment Instructions

1.  **Build the application:**
    ```bash
    npm run build
    ```

2.  **Serve the application using PM2:**
    Run the following command to serve the `dist` folder on port 2311:
    ```bash
    pm2 serve dist 2311 --name "frontend-cover-sales" --spa
    ```

## Managing the Process
- **List processes:** `pm2 list`
- **Stop process:** `pm2 stop frontend-cover-sales`
- **Restart process:** `pm2 restart frontend-cover-sales`
- **Delete process:** `pm2 delete frontend-cover-sales`
