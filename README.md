# MakeMyNotes: AI-Powered EdTech Platform

MakeMyNotes is an innovative EdTech platform designed to provide students with structured, high-quality study materials generated automatically from past exam papers and memos using advanced AI.

## Project Architecture
This repository is structured as a monorepo separating the frontend application from the heavy-processing backend engine.

- **`/frontend`**: A Next.js (React) application leveraging the App Router and Tailwind CSS for a modern, highly-responsive user interface. It consumes the backend API and renders SEO-optimized, markdown-formatted study notes.
- **`/backend`**: A Python FastAPI backend responsible for orchestrating the data pipeline. It scrapes government websites for past exam papers, uses Google Cloud Vision/Mathpix for OCR extraction, and processes the raw text with the Google Gemini API to structure the content into digestible notes.
- **Database**: The platform utilizes Supabase (PostgreSQL) for relational data mapping (Provinces -> Grades -> Subjects -> Papers) and Supabase Storage for raw PDF archival.

## Prerequisites

Before running the project locally, ensure you have the following installed:
- Node.js (v18+)
- Python (3.9+)
- Docker (optional, for local database/storage replication)

## Quick Start

### Backend Setup
1. Navigate to the backend directory: `cd backend`
2. Create a virtual environment: `python -m venv venv`
3. Activate the virtual environment:
   - Windows: `.\venv\Scripts\activate`
   - Unix/macOS: `source venv/bin/activate`
4. Install dependencies: `pip install -r requirements.txt`
5. Copy `.env.example` to `.env` and fill in your API keys (Gemini, Supabase, etc.).
6. Run the FastAPI development server: `uvicorn app.main:app --reload`

### Frontend Setup
1. Navigate to the frontend directory: `cd frontend`
2. Install dependencies: `npm install`
3. Copy `.env.example` to `.env.local` and add your public environment variables.
4. Run the Next.js development server: `npm run dev`
5. Open your browser to `http://localhost:3000`

## System Workflows
1. **Scraping Pipeline**: Periodically runs scripts in `backend/app/services/scraper/` to pull new exam papers.
2. **Processing Pipeline**: Converts PDFs to text via OCR, sends to Gemini for Markdown note generation, and stores the structured output in Supabase.
3. **Client Delivery**: The Next.js frontend queries the FastAPI endpoints to present notes dynamically based on the student's selected grade, province, and subject.
