import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Project } from '../components/Project';

describe('Links on the art gallery project have valid URLs', () => {
  const liveArt = 'https://art-gallery-tawerna.vercel.app';
  const artRepo = 'https://github.com/Izarothy/art-gallery-tawerna';

  render(<Project title="" bg="" live={liveArt} github={artRepo} />);
  const project = screen.getByRole('article');

  fireEvent.mouseEnter(project);
  const [liveLink, codeLink] = screen.getAllByRole('link');

  it('Sends to the Art Gallery Github Repo', () => {
    expect(codeLink).toHaveAttribute('href', artRepo);
  });
  it('Sends to the Art Gallery live version', () => {
    expect(liveLink).toHaveAttribute('href', liveArt);
  });
});
