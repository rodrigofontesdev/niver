![preview](https://github.com/user-attachments/assets/74c7ac54-7797-43b3-87c8-6b3dfceebb8f)

# Niver

Niver makes it super easy to collect and manage RSVPs for birthday parties. Guests can quickly confirm their attendance through a simple and friendly interface, and all the responses go straight into a Notion database.

## Prerequisites

- Git
- Node
- Notion

## Getting Started

Clone the repository into a new directory:

```bash
git clone git@github.com:rodrigofontesdev/niver.git
```

```bash
cd niver
```

Install dependencies:

```bash
npm install
```

Set up environment variables and configure your variables:

```bash
cp .env.example .env
```

Run the development server:

```bash
npm run dev
```

## Environment Variables

| Variable             | Description                      | Example                            |
| -------------------- | -------------------------------- | ---------------------------------- |
| `NOTION_TOKEN`       | Your Internal Integration Secret | `ntn__xxx...`                      |
| `NOTION_DATABASE_ID` | ID of your Notion database       | `218d9f8ffb08888eb888ef8888ddfa8c` |

## Features

- Automatically saves responses in a well-organized database
- Personalized confirmation message based on response
- Optimized for both desktop and mobile devices
- Fully accessible with Enter key and letter shortcuts

## How to Use

### For Guests

1. Access the application
2. Click the button on the welcome screen to start the RSVP process
3. Enter your name in the first question
4. Select your attendance option
5. Submit your response and receive a personalized thank you message

### Navigation Tips

- Use **Enter** key to navigate through the form quickly
- Use **A** or **B** keys to select attendance options
- The form auto-focuses on inputs for seamless completion

### For Event Organizers

1. Set up the Notion integration following the environment variables guide
2. Deploy the application to your preferred hosting platform
3. Share the application URL with your guests
4. Monitor responses in your Notion database in real-time

### Setting up Notion Integration

1. Create a page in Notion and start an empty database with these properties:
   - Add a column **"Nome"** with type title
   - Add a column **"Resposta"** with type select
2. Go to [Notion Integrations](https://www.notion.so/profile/integrations) page
3. Create a new integration with these settings:
   - Associated workspace: Select a workspace
   - Type: Internal
   - Capabilities: Insert content
   - User capabilities: No user information
   - Access: Select a database
4. Copy the **Internal Integration Secret**
5. Copy the **database ID** from the URL
6. Paste into your environment variables

## Built With

- **Next.js:** React framework for building full-stack web applications
- **TypeScript:** Static typing for JavaScript
- **Tailwind CSS:** Utility-first CSS framework for fast and flexible styling
- **Notion:** Database integration
- **ESLint:** Static code analysis
- **Lucide React:** Beautiful and consistent icons library

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details.
