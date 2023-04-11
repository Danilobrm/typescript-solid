import { IPersistency } from '../classes/interfaces/persistancy-protocol';

export class Persistency implements IPersistency {
  saveOrder(): void {
    console.log('pedido salvo com sucesso');
  }
}
