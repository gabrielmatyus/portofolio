import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  beforeEach(() => {
    render(<App />);
  });

  it('renders the profile name', () => {
    expect(screen.getByText('Matyus Cristian-Gabriel')).toBeInTheDocument();
  });

  it('renders the profile title', () => {
    expect(screen.getByText('Software Engineer')).toBeInTheDocument();
  });

  it('renders the profile description', () => {
    expect(
      screen.getByText(/Passionate about building scalable/)
    ).toBeInTheDocument();
  });

  it('renders location', () => {
    expect(screen.getByText('Berlin, Germany')).toBeInTheDocument();
  });

  it('renders email', () => {
    expect(
      screen.getByText('gabrielmatyus@googlemail.com')
    ).toBeInTheDocument();
  });

  it('renders phone number', () => {
    expect(screen.getByText('+49 15202999520')).toBeInTheDocument();
  });

  it('renders LinkedIn link', () => {
    const link = screen.getByText('LinkedIn');
    expect(link).toBeInTheDocument();
    expect(link.closest('a')).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/gabriel-matyus-b3697a418'
    );
  });

  it('renders GitHub link', () => {
    const link = screen.getByText('GitHub');
    expect(link).toBeInTheDocument();
    expect(link.closest('a')).toHaveAttribute(
      'href',
      'https://github.com/gabrielmatyus'
    );
  });

  it('renders education institution', () => {
    expect(
      screen.getByText('University of Technology Cluj-Napoca')
    ).toBeInTheDocument();
  });

  it('renders work experience', () => {
    expect(screen.getByText('Oracle')).toBeInTheDocument();
    expect(
      screen.getByText(/Software Engineer - Jan 2002/)
    ).toBeInTheDocument();
  });

  it('renders skills', () => {
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('Node.js')).toBeInTheDocument();
    expect(screen.getByText('Kotlin')).toBeInTheDocument();
    expect(screen.getByText('Docker')).toBeInTheDocument();
    expect(screen.getByText('Kubernetes')).toBeInTheDocument();
  });

  it('renders project names', () => {
    expect(screen.getByText('Family Plans')).toBeInTheDocument();
    expect(screen.getByText('Portofolio')).toBeInTheDocument();
  });

  it('renders project descriptions', () => {
    expect(
      screen.getByText('Parental control mobile app.')
    ).toBeInTheDocument();
    expect(
      screen.getByText('Profile presentation website.')
    ).toBeInTheDocument();
  });

  it('renders project GitHub links', () => {
    const viewOnGitHubLinks = screen.getAllByText('View on GitHub');
    expect(viewOnGitHubLinks.length).toBe(2);
    expect(viewOnGitHubLinks[0].closest('a')).toHaveAttribute(
      'href',
      'https://github.com/gabrielmatyus/my-family'
    );
    expect(viewOnGitHubLinks[1].closest('a')).toHaveAttribute(
      'href',
      'https://github.com/gabrielmatyus/portofolio'
    );
  });

  it('renders project features', () => {
    expect(screen.getByText('Parental controls')).toBeInTheDocument();
    expect(screen.getByText('Location tracking')).toBeInTheDocument();
    expect(screen.getByText('Profile presentation')).toBeInTheDocument();
    expect(screen.getByText('Contact information')).toBeInTheDocument();
  });
});
