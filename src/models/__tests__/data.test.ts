import { profileData, resumeData, projectsData } from '../data';

describe('profileData', () => {
  it('has all required fields', () => {
    expect(profileData).toHaveProperty('name');
    expect(profileData).toHaveProperty('title');
    expect(profileData).toHaveProperty('description');
    expect(profileData).toHaveProperty('location');
    expect(profileData).toHaveProperty('email');
    expect(profileData).toHaveProperty('phone');
    expect(profileData).toHaveProperty('linkedin');
    expect(profileData).toHaveProperty('github');
  });

  it('has non-empty string values', () => {
    expect(profileData.name).toBe('Matyus Cristian-Gabriel');
    expect(profileData.title).toBe('Software Engineer');
    expect(typeof profileData.description).toBe('string');
    expect(profileData.description.length).toBeGreaterThan(0);
    expect(profileData.location).toBe('Berlin, Germany');
    expect(profileData.email).toContain('@');
    expect(profileData.phone).toMatch(/^\+/);
    expect(profileData.linkedin).toContain('linkedin.com');
    expect(profileData.github).toContain('github.com');
  });
});

describe('resumeData', () => {
  it('has education array with valid entries', () => {
    expect(Array.isArray(resumeData.education)).toBe(true);
    expect(resumeData.education.length).toBeGreaterThan(0);
    const edu = resumeData.education[0];
    expect(edu).toHaveProperty('institution');
    expect(edu).toHaveProperty('degree');
    expect(typeof edu.institution).toBe('string');
    expect(typeof edu.degree).toBe('string');
  });

  it('has experience array with valid entries', () => {
    expect(Array.isArray(resumeData.experience)).toBe(true);
    expect(resumeData.experience.length).toBeGreaterThan(0);
    const exp = resumeData.experience[0];
    expect(exp).toHaveProperty('company');
    expect(exp).toHaveProperty('role');
    expect(exp).toHaveProperty('duration');
    expect(exp.company).toBe('Oracle');
    expect(exp.role).toBe('Software Engineer');
  });

  it('has skills array', () => {
    expect(Array.isArray(resumeData.skills)).toBe(true);
    expect(resumeData.skills.length).toBeGreaterThan(0);
    expect(resumeData.skills).toContain('TypeScript');
    expect(resumeData.skills).toContain('React');
    expect(resumeData.skills).toContain('Node.js');
  });

  it('has providers array', () => {
    expect(Array.isArray(resumeData.provider)).toBe(true);
    expect(resumeData.provider).toContain('Google Cloud');
  });
});

describe('projectsData', () => {
  it('is an array of projects', () => {
    expect(Array.isArray(projectsData)).toBe(true);
    expect(projectsData.length).toBe(2);
  });

  it('each project has required fields', () => {
    for (const project of projectsData) {
      expect(project).toHaveProperty('name');
      expect(project).toHaveProperty('description');
      expect(project).toHaveProperty('link');
      expect(project).toHaveProperty('architecture');
      expect(project).toHaveProperty('features');
      expect(typeof project.name).toBe('string');
      expect(typeof project.description).toBe('string');
      expect(typeof project.link).toBe('string');
      expect(typeof project.architecture).toBe('string');
      expect(Array.isArray(project.features)).toBe(true);
      expect(project.features.length).toBeGreaterThan(0);
    }
  });

  it('has "Family Plans" project with correct structure', () => {
    const familyPlans = projectsData.find(p => p.name === 'Family Plans');
    expect(familyPlans).toBeDefined();
    expect(familyPlans!.description).toBe('Parental control mobile app.');
    expect(familyPlans!.features).toContain('Parental controls');
    expect(familyPlans!.link).toContain('github.com');
  });

  it('has "Portofolio" project with correct structure', () => {
    const portfolio = projectsData.find(p => p.name === 'Portofolio');
    expect(portfolio).toBeDefined();
    expect(portfolio!.description).toBe('Profile presentation website.');
    expect(portfolio!.features).toContain('Profile presentation');
    expect(portfolio!.link).toContain('github.com');
  });
});
