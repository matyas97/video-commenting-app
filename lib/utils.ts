import { Layout, Position } from './types';

export const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ');
};

export const getRelativePosition = (
  position: Position,
  parentLayout: Layout
): Position => {
  return {
    x: (position.x / parentLayout.width) * 100,
    y: (position.y / parentLayout.height) * 100,
  };
};

export const showComments = (
  playedSeconds: number,
  commentMiliseconds: number
) => {
  const rangeConst = 500;

  const playedMiliseconds = playedSeconds * 1000;

  const bottomRange = playedMiliseconds - rangeConst;

  const topRange = playedMiliseconds + rangeConst;

  if (commentMiliseconds > bottomRange && commentMiliseconds < topRange) {
    return true;
  }

  return false;
};
