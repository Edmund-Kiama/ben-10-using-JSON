# Ben 10 Character Management App

A simple JavaScript application to manage a list of characters. It allows you to view, add, and delete characters from a list. It utilizes `fetch` to interact with a local API (located at `http://localhost:3000/characters/`).

## Features

- **View Characters**: Fetches and displays a list of characters.
- **Add Characters**: Allows users to add new characters through a form.
- **Delete Characters**: Deletes characters from the list.
- **Character Details**: Click on a character to view detailed information about them.
- **Dynamic Updates**: Automatically updates the list when a character is added or deleted.

## Setup

1. **Prerequisite**:
   - Ensure you have a local API running at `http://localhost:3000/characters/` to fetch and manage character data.
   - If you don't have an API, you can set up a JSON server to simulate one.

2. **Clone the Project**:
   - Clone or download this repository to your local machine.

3. **Open in Browser**:
   - Open the HTML file in your preferred web browser.

## How it Works

### Fetching Characters

On page load, the app will fetch a list of characters from the API and display them in a list. Each character is shown with a name and a delete button. Clicking on a character’s name shows more detailed information about the character.

### Adding a Character

Users can add a new character by filling out a form with the character's name, image URL, and description. When the form is submitted, a new character is added to the list by making a POST request to the API.

### Deleting a Character

Clicking the delete button next to a character will remove it from the list by making a DELETE request to the API.

### Character Details

Clicking on a character's name will display detailed information about that character, including their name, image, and description.

## Usage

- Open the HTML file in a browser.
- Add characters via the form by providing a name, image URL, and description.
- View the list of characters as they are fetched from the local API.
- Click on a character's name to view their details.
- Click the delete button to remove a character from the list.

## License

This project is free to use and modify. No attribution required.