### Inspiration
With a busy lifestyle but a love for cricket, I wanted a way to stay updated on the latest matches without missing a beat.

### What it does
This Chrome extension provides live score updates for ongoing cricket matches, keeping you informed right from your browser.

### How I built it
The project includes:
- **HTML**: Sets up a webpage titled "CricketZone" with a heading, an empty list for match data, and links to external styling (styles.css) and functionality (script.js) files.
- **Manifest File**: Defines the extension's name ("CricketZone"), version ("1.0.0"), description ("How's the josh-o-meter today"), manifest version (3), author ("Chanchal Sharma"), and sets the default popup (index.html) and title ("my chrome extension").
- **JavaScript**: The `getMatchData` function fetches current cricket match data from an API, formats it into HTML strings, and updates the webpage with the match details. It handles errors by logging them to the console.
- **CSS**: Styles the webpage with a clean and modern look, including background color, layout, and transitions for interactive elements. The match list is styled with alternating colors for better visual differentiation.

### Challenges I ran into
I encountered issues with fetching data from the API, but I was able to resolve them and ensure the extension works smoothly.

### Accomplishments
I'm proud of creating a functional and user-friendly Chrome extension that keeps cricket fans updated in real-time.

### What I learned
- How to build a browser extension.
- New styling options in CSS.
- How to use my browser extension effectively in my own browser.

### What's next for CricketZone
Future plans include adding more features, improving the user interface, and optimizing performance for a better user experience.
