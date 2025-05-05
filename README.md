# Portfolio ReadMe

Welcome to my portfolio website! This project is a personal showcase designed to highlight my skills, projects, and professional journey. Below you'll find an overview of the key aspects that make up the website.

## Concept

The website is conceptually designed around the theme of a chatbot, providing interactive and engaging user experiences. The design inspiration stems from a corkboard bulletin board, giving it a unique and personal touch.

## Design Methodology

I have implemented the Atomic Design methodology, structuring the project repository for better scalability and maintainability. This approach allows for the creation of reusable and interchangeable components, enhancing the overall flexibility of the website’s architecture.

## Tools and Technologies

- **Bun**: I have chosen Bun over npm for package management and scripts to leverage its faster processing capabilities and improved developer experience.
  
- **Vite & React**: The website is built with Vite, providing a rapid development environment, and React for building dynamic user interfaces.

- **Tailwind CSS**: For design and styling, I utilized Tailwind CSS, which offers a utility-first approach to create responsive and modern design patterns efficiently.

## AI & LLM Integration

I’ve added a Large Language Model (LLM) feature to enhance user interaction.  
- **Model:** Mistral-7B-Instruct-v0.2  
- **Hosting:** Deployed via Cloudflare Worker AI.

To support this feature, I’ve included a dedicated UI for LLM messages, allowing users to interact seamlessly with the chatbot.

## Deployment

The website is deployed using Cloudflare Pages with Cloudflare Workers, ensuring a fast, reliable, and scalable hosting solution. This setup helps in delivering optimal performance and security for all visitors.

## Future Enhancements

- **Multi-language Support:** Implement i18n for a multi-language UI to reach a broader audience.  
- **Code Refactoring:** Improve code structure for better maintainability and scalability.  
- **Enhanced LLM Functionality:** Incorporate system prompts to optimize LLM responses.  
- **AutoRAG Integration:** Planning to use AutoRAG with Cloudflare R2 for automated file management, though costs are a consideration.

*Note:* While I’d like to use AutoRAG in conjunction with Cloudflare, it involves costs due to storage via R2.

## Visit My Website

You can explore my portfolio at [junki-portfolio.com](https://junki-portfolio.com).

Thank you for visiting my portfolio! I hope you enjoy exploring my work and the enhancements I have planned.