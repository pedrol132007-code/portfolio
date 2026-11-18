import type { Project } from '../../content/types';
import { Gallery } from './Gallery';
import { TododayArchitecture } from './TododayArchitecture';

/** Visual de cada projeto em destaque: capturas, e embaixo o diagrama quando o projeto tem um. */
export function ProjectVisual({ project }: { project: Project }) {
  const gallery = project.images?.length ? <Gallery images={project.images} /> : null;
  const diagram = project.visual === 'tododay-architecture' ? <TododayArchitecture /> : null;
  if (gallery && diagram) {
    return (
      <div style={{ display: 'grid', gap: 'var(--space-6)' }}>
        {gallery}
        {diagram}
      </div>
    );
  }
  return gallery ?? diagram;
}
