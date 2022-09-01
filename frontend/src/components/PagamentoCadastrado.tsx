import { useState } from 'react';

import { TypePagamentoCadastrado } from '../@types/pagamento';

type TypeProps = {
  pagamentosCadastrados: TypePagamentoCadastrado[];
  setPagamentosCadastrados: (
    value:
      | TypePagamentoCadastrado[]
      | ((prevVar: TypePagamentoCadastrado[]) => TypePagamentoCadastrado[])
  ) => void;
};

export default function PagamentoCadastrado({
  pagamentosCadastrados,
  setPagamentosCadastrados,
}: TypeProps) {
  const [mostrarDetalhes, setMostrarDetalhes] = useState<boolean>(false);
  const valorDoTratamento = pagamentosCadastrados.reduce(
    (acumulador, pagamentoData) => {
      return acumulador + pagamentoData.valor;
    },
    0
  );
  return (
    <div>
      <h1>Pagamento Cadastrado!</h1>
      <h3>
        Total:{' '}
        {(valorDoTratamento / 100).toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
          maximumFractionDigits: 2,
        })}
      </h3>
      <h3>Parcelas: {pagamentosCadastrados.length}</h3>
      <button
        type="button"
        onClick={() => setMostrarDetalhes(!mostrarDetalhes)}
      >
        Mostrar Detalhes
      </button>
      <button type="button" onClick={() => setPagamentosCadastrados([])}>
        Fechar
      </button>
      {mostrarDetalhes &&
        pagamentosCadastrados.map((pagamento) => {
          return (
            <div key={pagamento.id}>
              <p>
                Data de Vencimento:{' '}
                {new Date(pagamento.data).toLocaleDateString('pt-Br', {
                  day: '2-digit',
                  month: '2-digit',
                  year: 'numeric',
                  timeZone: 'UTC',
                })}
              </p>
              <p>
                Valor:{' '}
                {(pagamento.valor / 100).toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                  maximumFractionDigits: 2,
                })}
              </p>
              <p>Parcela: {pagamento.parcela}</p>
            </div>
          );
        })}
    </div>
  );
}
