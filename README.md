# FinBot 💰 — AI Financial Assistant

A finance-scoped AI chatbot built with React, TypeScript, and Google Gemini API. FinBot answers questions related to personal finance, investing, budgeting, loans, and banking — and politely declines anything outside of finance.

## Live Demo
[View Live App](https://finbot-eosin.vercel.app/)

## Why I Built This
I built FinBot to explore LLM integration in a frontend context, combining my experience in React/TypeScript with modern AI APIs. The finance theme was a natural fit given my background working on financial services projects including ICICI Two Wheeler Loans.

## Tech Stack
| Layer | Technology |
|---|---|
| Frontend | React.js, TypeScript |
| Backend | Node.js, Express |
| AI | Google Gemini API |
| Styling | CSS3 |
| Frontend Deployment | Vercel |
| Backend Deployment | Railway |

## Features
- 💬 Conversational chat UI with message bubbles
- 🔒 Finance-scoped responses — filters unrelated queries client-side before API call
- ⚡ Typing indicator while bot is responding
- 📱 Responsive design
- 🔐 API key secured on backend — never exposed to client
- ↩️ Auto-focus input after each message
- 🔄 Auto-scroll to latest message

## Architecture
User → React Frontend (Vercel)
↓
Express Backend (Railway)
↓
Google Gemini API
## Security
The Gemini API key is stored securely on the backend (Railway environment variables) and never exposed to the client. The frontend communicates with the backend via REST API.

## Running Locally

### Backend
```bash
cd server
npm install
# create .env file with GEMINI_API_KEY=your_key_here
node index.js
```

### Frontend
```bash
npm install
# create .env file with REACT_APP_API_URL=http://localhost:5000
npm start
```

## What I Learned
- Integrating LLM APIs (Google Gemini) into a React frontend
- Securing API keys using a Node.js/Express backend layer
- Prompt engineering using system instructions to scope AI behaviour
- Understanding and mitigating prompt injection vulnerabilities
- Deploying a full stack app across Vercel and Railway
