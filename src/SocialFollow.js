import React from "react";
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function SocialFollow() {
  return (
    <div className="flex items-center justify-center bg-gray-800 p-6">
      <a href="https://github.com/MounaBenAli/"
        className="github social inline-block mx-2 transition-transform hover:translate-y-[-2px]">
        <FontAwesomeIcon icon={faGithub} size="2x" className="text-black hover:text-gray-900" />
      </a>
      <a href="https://www.linkedin.com/in/mouna-ben-ali/"
        className="linkedin social inline-block mx-2 transition-transform hover:translate-y-[-2px]">
        <FontAwesomeIcon icon={faLinkedin} size="2x" className="text-blue-500 hover:text-blue-600" />
      </a>
      <a href="https://twitter.com/MunaBenAli/"
        className="twitter social inline-block mx-2 transition-transform hover:translate-y-[-2px]">
        <FontAwesomeIcon icon={faTwitter} size="2x" className="text-blue-400 hover:text-blue-500" />
      </a>
    </div>
  );
}
