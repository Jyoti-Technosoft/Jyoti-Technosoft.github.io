import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss'],
})
export class CareerComponent implements OnInit {
  careers: {
    position: string;
    experience: string;
    responsibilties: string;
    skills: string;
    qualification: string;
  }[] = [];
  careerSkillSets: {
    label: string;
    objectives: { responsiblity: string }[];
  }[] = [
    {
      label: 'Role and Responsibilities :',
      objectives: [
        { responsiblity: 'Developing new user-facing features using React.js' },
        { responsiblity: 'Building reusable components and front-end libraries for future use' },
        { responsiblity: 'Translating designs and wireframes into high-quality code' },
        { responsiblity: 'Optimizing components for maximum performance across a vast array of web-capable devices and browsers' },
        { responsiblity: 'Coordinating with various teams working on distinct layers' },
      ],
    },
    {
      label: 'Required Skills :',
      objectives: [
        { responsiblity: 'Thorough understanding of React.js and its core principles' },
        { responsiblity: 'Knowledge of React Routing' },
        { responsiblity: 'Knowledge of state management techniques like Redux/Flux, Context, etc' },
        { responsiblity: 'Familiarity with modern front-end build pipelines and tools' },
      ],
    },
    {
      label: 'Nice to have :',
      objectives: [
        { responsiblity: 'Experience with Git and Bitbucket' },
        { responsiblity: 'Knowledge of Isomorphic React' },
        { responsiblity: 'Experience with node and MongoDB' },
      ],
    },
  ];

  requiredProgrammingLanguage: string[] = [
    "React JS", "Bootstrap",
    "CSS",
    "HTML",
    "Javascript",
    "PostMan",
    "Redux",
    "Web Pack"
  ] 
  constructor() {}

  ngOnInit() {
    this.careers.push({
      position: 'React JS Developer',
      experience: 'Exp. 1.6 Years minimum',
      responsibilties: '',
      skills: '',
      qualification: '',
    });
    this.careers.push({
      position: 'Angular JS Developer',
      experience: 'Exp. 1.6 Years minimum',
      responsibilties: '',
      skills: '',
      qualification: '',
    });
    this.careers.push({
      position: 'Node JS Developer',
      experience: '1.6 Years minimum',
      responsibilties: '',
      skills: '',
      qualification: '',
    });
    this.careers.push({
      position: 'Vue JS Developer',
      experience: '1.6 Years minimum',
      responsibilties: '',
      skills: '',
      qualification: '',
    });
    this.careers.push({
      position: 'Interns',
      experience: '-',
      responsibilties: '',
      skills: '',
      qualification: '',
    });
  }
}
