import viacep from '../../../services/viacep';

export const normalizeCep = value => {
  if (!value) return value;

  const onlyNums = value.replace(/[^\d]/g, '');

  if (onlyNums.length <= 5) return onlyNums;

  if (onlyNums.length <= 8)
    return `${onlyNums.slice(0, 5)}-${onlyNums.slice(5)}`;

  return `${onlyNums.slice(0, 5)}-${onlyNums.slice(5, 8)}`;
};

export const normalizeNum = value => {
  if (!value) return value;

  return value.replace(/[^\d]/, '');
};

const verifyCep = async value => {
  const response = await viacep.get(`${value}/json`);

  if (response.data.erro) {
    return 'CEP Inválido.';
  }
};

export const validateCep = value => {
  const cepRegex = /^\d{5}-\d{3}$/i;

  if (!value) return 'Campo Obrigatório.';

  if (!cepRegex.test(value)) return 'CEP Inválido.';

  return verifyCep(value);
};

export const validateNum = value => (value ? undefined : 'Campo Obrigatório.');
