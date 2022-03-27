import { screen, fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Project } from '../components/Project';

describe('Links on the blog app project have valid URLs', () => {
  const liveBlog = 'https://blog-app-sooty.vercel.app/';
  const blogRepo = 'https://github.com/Izarothy/blog-app';

  render(<Project title="" bg="" live={liveBlog} github={blogRepo} />);
  const project = screen.getByRole('article');

  fireEvent.mouseEnter(project);
  const [liveLink, codeLink] = screen.getAllByRole('link');

  it('Sends to the Blog App live version', () => {
    expect(liveLink).toHaveAttribute('href', liveBlog);
  });

  it('Sends to the Blog App Github Repo', () => {
    expect(codeLink).toHaveAttribute('href', blogRepo);
  });
});
