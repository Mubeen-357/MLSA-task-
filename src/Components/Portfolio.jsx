/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/img3.png";

const imageAltText = "technical support";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: " Calculator website",
    description:
      "This is a simple calculator that can be used to perforn mathimatical operations",
    url: "https://www.online-calculator.com/ ",
  },
  {
    title: "Quiz Website",
    description:
      " Keeping in mind the modern day virtualication and the world moving towords performing tasks remotly, the following software was developedThis is a platform for conductinging online quizes..",
    url: "https://www.jetpunk.com/",
  },
  {
    title: "Text to handwriting website ",
    description:
      "This is an online text to Handwriting converter which takes plane text and converts it into human handwriting.",
    url: "https://www.textreverse.com/text-to-handwriting-converter.php",
  },
  {
    title: "Online video downloading website  ",
    description:
      "This tool can be used to download free online videos",
    url: "https://www.savethevideo.com/home",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
