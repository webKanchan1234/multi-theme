import React from "react";
import { useTheme } from "../theme/ThemeContext";

const About = () => {
  const { theme } = useTheme();

  return (
    <div className="mt-20 p-8">
      <h1 className="text-3xl font-bold mb-4">About Page</h1>
      <p>This is the about page. Current theme: {theme}</p>
    </div>
  );
};

export default About;
