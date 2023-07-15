import { shipsType } from './shipsType';

export type addShipsType = {
  gameId: number,
  ships: shipsType[],
  indexPlayer: number,
};