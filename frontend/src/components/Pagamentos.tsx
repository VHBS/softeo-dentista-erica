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

  return (
    <div>
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
              <p>Parcela: {pagamento.parcela}</p>
              <p>
                Valor:{' '}
                {(pagamento.valor / 100).toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                  maximumFractionDigits: 2,
                })}
              </p>
            </div>
          );
        })}
    </div>
  );
}