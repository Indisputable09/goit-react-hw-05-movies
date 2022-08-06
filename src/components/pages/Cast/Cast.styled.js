import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  gap: ${p => p.theme.space[5]}px;
`;

export const ListItem = styled.li`
  width: 100%;
  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - ${p => p.theme.space[5]}px) / 5);
  }

  @media screen and (min-width: 1280px) {
    flex-basis: calc((100% - ${p => p.theme.space[4]}px * 2) / 6);
  }
`;

export const CastImg = styled.img`
  width: 200px;
  height: 200px;
`;
