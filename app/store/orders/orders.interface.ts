export interface IOrders {
  id: number
  createdAt: Date
  description: string
  price: number
  title: string
  updateAt: Date
  views: number
}

export interface OrdersState {
  orders: IOrders[]
  isError: any
  isLoadingOrders: boolean
  isErrorOrders: any
  order: any
}
