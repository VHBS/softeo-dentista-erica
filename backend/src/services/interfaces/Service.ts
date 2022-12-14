import {
  TypeCriarPagamento,
  TypeFiltroPagamentoPorDataEntrada,
  TypeFiltroPagamentoPorDataSa√≠da,
  TypePagamentoSaida,
} from '../../@types/pagamento';

export interface IServicePagamento {
  criarPagamento: ({ data, valor, parcelas }: TypeCriarPagamento) => Promise<TypePagamentoSaida[]>;
  filtrarPagamentoPorData: ({
    dataInicial,
    dataFinal,
  }: TypeFiltroPagamentoPorDataEntrada) => Promise<TypeFiltroPagamentoPorDataSa√≠da>;
}
