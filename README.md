# Portfolio Website

Welcome to my portfolio website project! This README file will guide you through setting up your own portfolio using the provided assets and data.

## Getting Started

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/portfolio.git
   cd portfolio
   ```

2. **Install Dependencies:**

   ```bash
   # If using npm
   npm install

   # If using yarn
   yarn install
   ```

3. **Set Up Assets:**

   - Navigate to the `assets` folder.
   - Replace the existing photos with your own portfolio images. Ensure they have appropriate names and formats (e.g., `photo.png`, `project1.png`, `project2.png`, `project3.png`).

4. **Configuration:**

   - Update the data in the following files as per your details:
     - **Intro Page Data:** Update `MainData` in the `data.js` file with your name, designation, LinkedIn, and GitHub links.
     - **Work Page Data:** Modify `Projects` in the `data.js` file to add your projects, including titles, descriptions, images, and links.
     - **About Page Data:** Update `aboutPageData` to include your skills, experience, and goals.
     - **Contact Data:** Update `ContactData` with your email address.

5. **Run the Application:**
   - Start the development server:

     ```bash
     # If using npm
     npm start

     # If using yarn
     yarn start
     ```

   - Open your browser and navigate to `http://localhost:3000` to view your portfolio website.

## Customize Your Portfolio

- **Change Content:**
  Modify the data in `data.js` to reflect your personal information and project details.

- **Add Projects:**
  Add more projects to the `Projects` array in `data.js` by including titles, descriptions, and associated skills. Ensure the images are placed in the `assets` folder and referenced correctly.

- **Style Customizations:**
  Use the CSS files or frameworks (e.g., Tailwind CSS, Bootstrap) to customize the look and feel of the website.

## Deployment

- **Deploy to Production:**
  Follow the deployment instructions for your chosen hosting service (e.g., Netlify, Vercel, GitHub Pages) to publish your portfolio website online.

## Data Overview

### Intro Page Data (`MainData`):

```javascript
{
  id: "1",
  name: "Your Name",
  photo: photo,
  designation: "Your Designation",
  subheading: "Your Subheading",
  linkedin: "Your LinkedIn Link",
  github: "Your GitHub Link",
}
```

### Work Page Data (`Projects`):

```javascript
[
  {
    id: "1",
    projectTitle: "Project Title",
    projectImage: projectImage,
    description: "Project Description",
    projectLink: "Project Live Link",
    githubLink: "GitHub Repository Link",
    skills: ["Skill1", "Skill2", ...],
  },
  // Add more projects here
]
```

### About Page Data (`aboutPageData`):

```javascript
{
  mainHeading: "Main Heading",
  paragraph: "About Me Description",
  skills: [
    {
      id: 1,
      tool: "Frontend Tools",
      toolData: "Your Frontend Tools",
    },
    {
      id: 2,
      tool: "UI Libraries",
      toolData: "Your UI Libraries",
    },
    {
      id: 3,
      tool: "Backend Tools",
      toolData: "Your Backend Tools",
    },
  ],
}
```

### Contact Data (`ContactData`):

```javascript
{
  email: "Your Email Address",
}
```

## Contributing

Feel free to fork this repository, make improvements, and submit pull requests. Contributions are welcome!

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.
