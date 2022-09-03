import styled from 'styled-components';

export const MovieCardTitle = styled.h2`
  text-align: center;
  font-size: ${p => p.theme.fontSizes.l};
  color: ${p => p.theme.colors.orangered};
  margin-bottom: ${p => p.theme.space[4]}px;
`;

export const AdditionalInfo = styled.p`
  margin-bottom: ${p => p.theme.space[4]}px;
`;

export const MovieCardSubTitle = styled.h3`
  margin-bottom: ${p => p.theme.space[3]}px;
`;

export const MovieGenreList = styled.ul`
  margin-bottom: ${p => p.theme.space[4]}px;
  color: ${p => p.theme.colors.orangered};
`;
export const MovieGenreListItem = styled.li`
  margin-bottom: ${p => p.theme.space[3]}px;
`;
