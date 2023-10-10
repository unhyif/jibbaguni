import { css } from 'styled-components';

export const TextEllipsis = (maxLine = 2) => css`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${maxLine};
  overflow: hidden;
`;
