import { describe, test, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/svelte';
import Page from './+page.svelte';

describe('/+page.svelte', () => {
  test('should render p tags', () => {
    render(Page);
    const paragraphs = screen.getAllByRole('paragraph');
    for (const paragraph of paragraphs) {
      expect(paragraph).toBeInTheDocument();
    }
  });
});
