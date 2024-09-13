import React from 'react';
import dissertationPDF from '../documents/dissertation.pdf';
import finalProjectPDF from '../documents/final_project.pdf';
import thesisPDF from '../documents/thesis.pdf';

function Education() {
  const education = [
    {
      degree: "Ph.D. in Computer Science",
      institution: "PUCRS - Pontifícia Universidade Católica do Rio Grande do Sul",
      period: "2018 - 2023",
      thesis: {
        title: "Advances in Imitation Learning from Observation",
        pdf: thesisPDF,
        filename: "thesis.pdf"
      }
    },
    {
      degree: "Master of Computer Science",
      institution: "PUCRS - Pontifícia Universidade Católica do Rio Grande do Sul",
      period: "2016 - 2018",
      thesis: {
        title: "Evaluating the feasibility of deep learning for action recognition in small datasets",
        pdf: dissertationPDF,
        filename: "dissertation.pdf"
      }
    },
    {
      degree: "A.A.T. Systems Analysis and Development",
      institution: "IFRS - Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do Sul",
      period: "2011 - 2014",
      thesis: {
        title: "Analysis of the Applicability of Artificial Intelligence Techniques in a Digital Game: An Approach with Intelligent Agents",
        pdf: finalProjectPDF,
        filename: "final_project.pdf"
      }
    }
  ];

  return (
    <section id="education">
      <h2 data-icon="🎓">Education</h2>
      <ul className="education-list">
        {education.map((edu, index) => (
          <li key={index} className="education-item">
            <h3>{edu.degree}</h3>
            <p>{edu.institution}</p>
            <p>{edu.period}</p>
            {edu.thesis && (
              <div className="thesis-info">
                <p>{edu.thesis.title}</p>
                <a 
                  href={edu.thesis.pdf} 
                  download={edu.thesis.filename}
                >
                  Download PDF
                </a>
              </div>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Education;
