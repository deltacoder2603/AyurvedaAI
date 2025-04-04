# Ayurveda AI 🌿

## Overview

Ayurveda AI combines ancient Ayurvedic wisdom with modern AI technology to provide natural health insights, symptom analysis, and herbal remedies. This intelligent system delivers personalized and trustworthy Ayurvedic guidance through a simple conversational interface.

**[Try it live: ayurveda-ai.vercel.app](https://ayurveda-aidel.vercel.app/)**

## ✨ Features

- **Symptom Analysis**: Describe your symptoms and get Ayurvedic interpretations
- **Herbal Remedies**: Discover natural treatments based on Ayurvedic principles
- **Dosha Assessment**: Learn about your constitutional balance according to Ayurveda
- **Lifestyle Recommendations**: Get personalized diet and lifestyle suggestions
- **Natural Alternatives**: Find holistic approaches to common health concerns
- **Trustworthy Information**: Curated responses based on authentic Ayurvedic texts

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Gemini API key
- Clerk authentication keys

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/ayurveda-ai.git
   cd ayurveda-ai
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with your API keys:
   ```
   GOOGLE_API_KEY=your_gemini_api_key_here
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key_here
   CLERK_SECRET_KEY=your_clerk_secret_key_here
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3000`

## 💡 How It Works

Ayurveda AI leverages Google's Gemini API combined with advanced prompt engineering to:

1. Interpret your health queries through an Ayurvedic lens
2. Process symptoms according to traditional Ayurvedic diagnostic methods
3. Generate responses incorporating authentic Ayurvedic principles and remedies
4. Deliver personalized recommendations based on holistic health factors

## 🧠 Technical Details

- **Frontend**: React.js with Tailwind CSS
- **Backend**: Node.js with Express
- **AI Integration**: Google Gemini API with custom prompt engineering
- **Authentication**: Clerk for secure user management
- **Ayurvedic Knowledge Base**: Curated from classical texts including Charaka Samhita and Sushruta Samhita

## 📄 Usage Examples

### Asking About Symptoms
```
User: "I've been having frequent headaches, especially in the afternoon"

Ayurveda AI: "From an Ayurvedic perspective, your afternoon headaches may indicate a Pitta imbalance. 
Consider cooling herbs like Brahmi or Amalaki. Try drinking coconut water and reducing exposure 
to direct sunlight. A cooling oil like sandalwood applied to the forehead may also help."
```

### Exploring Herbal Remedies
```
User: "What are Ayurvedic approaches to managing joint pain?"

Ayurveda AI: "Ayurveda views joint pain (Sandhigata Vata) as primarily a Vata disorder. 
Beneficial herbs include Ashwagandha, Guggulu, and Shallaki. Warm oil massages with 
sesame or castor oil can help. Consider adding turmeric and ginger to your diet, 
and practice gentle yoga to improve joint mobility."
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- The ancient Ayurvedic scholars whose wisdom forms the foundation of this project
- Google's Gemini AI team for their powerful API
- All contributors and supporters of this project

---

*Disclaimer: Ayurveda AI is designed for informational purposes only and should not replace professional medical advice. Always consult with a healthcare provider before starting any new health regimen.*
