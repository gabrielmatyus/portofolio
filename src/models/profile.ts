export interface Profile {
  name: string;
  title: string;
  description: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
}

export interface Education {
  institution: string;
  degree: string;
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
}

export interface Resume {
  education: Education[];
  experience: Experience[];
  skills: string[];
  providers: CloudProviders[];
}

export interface Projects {
  name: string;
  description: string;
  link: string;
  architecture: string;
  features: string[];
}

export interface CloudProviders {
  name: string;
}