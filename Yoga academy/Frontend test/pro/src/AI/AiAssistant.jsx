import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AiAssistantButton, useAiAssistant } from "@sista/ai-assistant-react";

const AiAssistant = () => {
  const { registerFunctions } = useAiAssistant();
  const navigate = useNavigate();
  
  const navigateToPage = ({ page }) => {
    navigate(`${page}`);
  };

  const navigateToExternalUrl = ({ url }) => {
    window.location.href = url;
  };

  // Function to scroll down
  const scrollDown = () => {
    window.scrollBy({
      top: window.innerHeight, // scroll down by one viewport height
      behavior: "smooth", // smooth scroll
    });
  };

  // Function to scroll up
  const scrollUp = () => {
    window.scrollBy({
      top: -window.innerHeight, // scroll up by one viewport height
      behavior: "smooth", // smooth scroll
    });
  };

  

  useEffect(() => {
    const aiFunctions = [
      {
        function: {
          handler: navigateToPage,
          description:
            "Go to a specific page. Navigate to a page. Internal pages navigation. This is what the user often wants, when asking for navigation. Each page contains info about the specific topic, as you can tell from the page url.",
          parameters: {
            type: "object",
            properties: {
              page: {
                type: "string",
                description:
                  "The page to navigate to. When asked to 'Get Started', always go to /login",
                enum: [
                  "/programs",
                  "/practice",
                  "/livestream",
                  "/courses",
                  "/therapies",
                  "/dashboard",
                  "/dashboard/#courses",
                  "/dashboard/#livestream",
                  "/dashboard/#practices",
                  "/dashboard/#programs",
                  "/dashboard/#contact",
                  "/admin",
                  "/adminvalidation",
                  "/events",
                  "/reviews",
                  "/enrollments",
                  "/login",
                  "/signup",
                  "/?page=landing",
                ],
              },
            },
            required: ["page"],
          },
        },
      },
      {
        function: {
          handler: navigateToExternalUrl,
          description: "Navigate to an external URL.",
          parameters: {
            type: "object",
            properties: {
              url: {
                type: "string",
                description:
                  "The URL to navigate to. " +
                  "For 'Github' go to 'https://github.com/habebayimran'. " +
                  "For 'Google' go to 'https://www.google.com'. " +
                  "For 'Sista' go to 'https://smart.sista.ai/?utm_source=docs_apiato&utm_medium=ai_assistant&utm_campaign=user_request_for_navigation'.",
              },
            },
            required: ["url"],
          },
        },
      },
      {
        function: {
          handler: scrollDown,
          description:
            "Scroll down the page. Move down the page. Scroll to the next section.",
        },
      },
      {
        function: {
          handler: scrollUp,
          description:
            "Scroll up the page. Move up the page. Scroll to the previous section.",
        },
      },
    ];

    if (registerFunctions) {
      registerFunctions(aiFunctions);
    }
  }, [registerFunctions]);

  return <AiAssistantButton />;
};

export default AiAssistant;