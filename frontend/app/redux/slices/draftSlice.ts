import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

export interface ClienteDraft {
  nome: string;
  cpf: string;
  telefone: string;
}

interface DraftState {
  draft: ClienteDraft | null;
}

// Função para buscar o rascunho inicial do Cookie de forma segura
const getInitialState = (): DraftState => {
  if (typeof window !== 'undefined') {
    const saved = Cookies.get('cliente_draft');
    if (saved) {
      try {
        return { draft: JSON.parse(saved) };
      } catch {
        return { draft: null };
      }
    }
  }
  return { draft: null };
};

const draftSlice = createSlice({
  name: 'draft',
  initialState: getInitialState(),
  reducers: {
    salvarProgresso: (state, action: PayloadAction<ClienteDraft>) => {
      // O Redux Toolkit usa Immer por baixo dos panos, então podemos "mutar" o estado direto
      state.draft = { ...state.draft, ...action.payload };

      // Configura a expiração (1 minuto, como no seu código original)
      const dataExpiracao = new Date();
      dataExpiracao.setMinutes(dataExpiracao.getMinutes() + 1);

      // Efeito colateral: atualiza o Cookie
      Cookies.set('cliente_draft', JSON.stringify(state.draft), { expires: dataExpiracao });
    },
    limparRascunho: (state) => {
      state.draft = null;
      Cookies.remove('cliente_draft');
    },
  },
});

export const { salvarProgresso, limparRascunho } = draftSlice.actions;
export default draftSlice.reducer;