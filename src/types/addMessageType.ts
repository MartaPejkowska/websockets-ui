import { occupiedFieldsType } from './occupiedFieldsType'

export type addMessageType={
  message:{
    type: string,
    data: string,
    id: number,
  }
  occupiedFields:occupiedFieldsType
}
