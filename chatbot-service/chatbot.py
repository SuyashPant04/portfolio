import os
from dotenv import load_dotenv

load_dotenv()


class Chatbot:

    def __init__(self):
        self.portfolio_context = self.load_portfolio_context()

    def load_portfolio_context(self):

        try:
            with open("portfolio.txt", "r", encoding="utf-8") as file:
                return file.read()

        except Exception as error:
            print(f"Error loading portfolio context: {error}")

            return "Portfolio data unavailable."

    def generate_response(self, user_message):

        user_message = user_message.lower()

        if "skills" in user_message:
            return (
                "Suyash is skilled in React, Flask, Node.js, "
                "Machine Learning, NLP, TensorFlow, and full-stack development."
            )

        elif "projects" in user_message:
            return (
                "Some major projects include AI Portfolio Chatbot, "
                "URL Shortener, Demand Forecasting System, "
                "RNN Chatbot, Spam Classifier, and ML-Driven PUF Analysis."
            )

        elif "experience" in user_message:
            return (
                "Suyash currently works as Maintainer / Co-Founder "
                "at VidyalayaOne where he contributes to backend systems, "
                "frontend modules, analytics systems, and authentication features."
            )

        elif "education" in user_message:
            return (
                "Suyash is a Final Year Civil Engineering Undergraduate at IIT Kanpur."
            )

        elif "contact" in user_message:
            return (
                "You can contact Suyash via email at "
                "suyashp22@iitk.ac.in"
            )

        else:
            return (
                "I can answer questions about Suyash's skills, "
                "projects, experience, achievements, and technical background."
            )