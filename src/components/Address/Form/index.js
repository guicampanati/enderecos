import React from 'react';
import { Form as FinalForm, Field } from 'react-final-form';
import {
  normalizeCep,
  normalizeNum,
  validateCep,
  validateNum
} from './helpers';

const Form = ({ onSubmit, initialValues }) => (
  <div>
    <FinalForm
      onSubmit={onSubmit}
      initialValues={initialValues}
      render={({ handleSubmit, form, submitting, pristine, validating }) => (
        <form onSubmit={handleSubmit}>
          <Field name="cep" validate={validateCep} parse={normalizeCep}>
            {({ input, meta }) => (
              <div>
                <label>CEP:</label>
                <input {...input} type="text" />
                {validating && <span>Carregando...</span>}
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>

          <Field name="numero" validate={validateNum} parse={normalizeNum}>
            {({ input, meta }) => (
              <div>
                <label>Número:</label>
                <input {...input} type="text" />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>

          <Field name="complemento">
            {({ input }) => (
              <div>
                <label>Complemento</label>
                <input {...input} type="text" />
              </div>
            )}
          </Field>

          <div>
            <button
              type={'submit'}
              disabled={submitting || validating || pristine}
            >
              Salvar
            </button>

            <button
              type={'button'}
              onClick={form.reset}
              disabled={submitting || validating || pristine}
            >
              Desfazer
            </button>
          </div>
        </form>
      )}
    />
  </div>
);

export default Form;
