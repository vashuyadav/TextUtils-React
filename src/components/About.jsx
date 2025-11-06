import React from "react";

const About = () => {
  return (
    <div className="container my-5">
      <h2 className="mb-4">About TextUtils</h2>
      <p className="lead">
        Welcome to <strong>TextUtils</strong> — your smart text companion!
      </p>
      <p>
        TextUtils is a simple yet powerful text utility website designed to help
        you perform quick and efficient text transformations. Whether you’re a
        student, writer, or developer, TextUtils makes it easy to format,
        analyze, and clean your text within seconds.
      </p>

      <h3 className="mt-4">🔧 Key Features</h3>
      <ul>
        <li>Convert text to <strong>UPPERCASE</strong> or <strong>lowercase</strong></li>
        <li>Capitalize the <strong>first letter</strong> of every word</li>
        <li>Count <strong>words and characters</strong> instantly</li>
        <li>Estimate <strong>reading time</strong> for your content</li>
        <li>Copy text easily to clipboard</li>
        <li>Remove extra spaces for clean formatting</li>
      </ul>

      <h3 className="mt-4">🎯 Our Mission</h3>
      <p>
        The goal of TextUtils is to provide a fast and reliable way to handle
        everyday text operations right in your browser — no need for external
        software or complex tools. It’s built with modern web technologies like
        <strong> React</strong> to ensure a smooth and responsive user
        experience.
      </p>

      <h3 className="mt-4">💡 How to Use</h3>
      <p>
        Simply type or paste your text into the input box, choose the desired
        operation (like converting to uppercase, lowercase, or title case), and
        instantly see the result. You can also copy or clear text with just one
        click.
      </p>

      <h3 className="mt-4">🌐 Technology Stack</h3>
      <ul>
        <li>Frontend: React.js (with Bootstrap for styling)</li>
        <li>Language: JavaScript (ES6+)</li>
        <li>Build Tool: Vite or Create React App</li>
      </ul>

      <p className="mt-4">
        <em>
          TextUtils — Simple, Fast, and Reliable. Transform your text the smart
          way!
        </em>
      </p>
    </div>
  );
};

export default About;
