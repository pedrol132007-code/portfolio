import type { Project } from '../../content/types';
import { Gallery } from './Gallery';
import { TododayArchitecture } from './TododayArchitecture';

/** Escolhe o visual de cada projeto em destaque. */
export function ProjectVisual({ project }: { project: Project }) {
  if (project.visual === 'tododay-architecture') return <TododayArchitecture />;
  if (project.images?.length) return <Gallery images={project.images} />;
  return null;
}
