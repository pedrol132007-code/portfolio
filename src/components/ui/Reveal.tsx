import type { ElementType, ReactNode, CSSProperties } from 'react';
import { useInView } from '../../hooks/useInView';

type Props = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  /** Atraso em ms, para escalonar itens vizinhos. */
  delay?: number;
  id?: string;
  role?: string;
};

/** Aparece suavemente quando entra na tela. Sem movimento se o sistema pedir menos animação. */
export function Reveal({ as: Tag = 'div', children, className, delay = 0, id, role }: Props) {
  const { ref, inView } = useInView<HTMLElement>();
  const style: CSSProperties | undefined = delay ? { transitionDelay: `${delay}ms` } : undefined;
  return (
    <Tag ref={ref} id={id} role={role} className={className} data-reveal="" data-in={inView} style={style}>
      {children}
    </Tag>
  );
}
