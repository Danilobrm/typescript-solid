import { OrderStatus } from './interfaces/order-status';
import { CustomerOrder } from './interfaces/customer-protocol';
import { IShoppingCart } from './interfaces/shopping-car-protocol';
import { IMessaging } from './interfaces/messaging-protocol';
import { IPersistency } from './interfaces/persistancy-protocol';

export class Order {
  private _orderStatus: OrderStatus = 'open';

  constructor(
    private readonly cart: IShoppingCart,
    private readonly messaging: IMessaging,
    private readonly persistency: IPersistency,
    private readonly customer: CustomerOrder,
  ) {}

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log('seu carrinho está vazio.');
      return;
    }

    this._orderStatus = 'closed';
    this.messaging.sendMessage(
      `Seu pedido com total de ${this.cart.totalWithDiscount()} foi recebido.`,
    );
    this.persistency.saveOrder();
    this.cart.clear();
    console.log(
      'O cliente é:',
      this.customer.getName(),
      this.customer.getIDN(),
    );
  }
}
