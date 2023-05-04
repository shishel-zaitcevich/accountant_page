import { MouseEventHandler } from 'react';
import 'slick-carousel/slick/slick.css';

interface ArrowType {
  onClick: MouseEventHandler<HTMLSpanElement> | undefined;
  type: string;
  props: unknown;
}

export function Arrow(props: ArrowType): JSX.Element {
  let className = props.type === 'next' ? 'nextArrow' : 'prevArrow';
  className += ' arrow';
  const char = props.type === 'next' ? '👉' : '👈';
  return (
    <span className={className} onClick={props.onClick}>
      {char}
    </span>
  );
}
