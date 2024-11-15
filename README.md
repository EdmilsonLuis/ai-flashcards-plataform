# Flashcard Creator Platform  

Effortlessly create, export, and practice with AI-powered flashcards!  

---

## 🚀 Features  
- **AI-Powered Flashcard Creation**: Transform content into smart flashcards using GROQ.  
- **Content Export**: Download flashcards in your preferred format for offline use.  
- **Google Authentication**: Log in securely using NextAuth.  
- **Future Update**: Practice flashcards with a spaced repetition algorithm to optimize learning.  

---

## 🛠️ Tech Stack  
- **Framework**: Next.js  
- **Styling**: TailwindCSS, ShadCN UI  
- **AI Integration**: GROQ  
- **Database**: PostgreSQL with Prisma ORM  
- **Authentication**: NextAuth (Google OAuth)  
- **Deployment**: Docker & Coolify  

---

## 📚 How It Works  
1. **Create**: Input content, and the AI generates flashcards automatically.  
2. **Export**: Download flashcards in your preferred format.  
3. *(Coming Soon)*: **Practice** using a spaced repetition algorithm to enhance memory retention.  

---

## 🖥️ Installation  

### Prerequisites  
- Node.js (v18+ recommended)  
- Docker (optional for deployment)  

### Steps  
1. Clone the repository:  
   ```bash  
   git clone https://github.com/edmilsonluis/ai-flashcards-platform.git  
   ```  
2. Navigate to the project directory:  
   ```bash  
   cd flashcard-platform  
   ```  
3. Install dependencies:  
   ```bash  
   pnpm install  
   ```  
4. Set up your `.env` file with the required environment variables:  
   - Google OAuth credentials  
   - Database URL for Prisma  
   - Other necessary configurations  

5. Migrate the database using Prisma:  
   ```bash  
   pnpm prisma migrate dev  
   ```  

6. Start the development server:  
   ```bash  
   pnpm run dev  
   ```  
7. Open your browser at `http://localhost:3000`.  

---

## 📄 License  
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.  

---

## 🌟 Acknowledgments  
Thanks to the open-source community and AI-powered tools for inspiring this project.  

---

**Start creating smarter flashcards today!**