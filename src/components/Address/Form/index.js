import React from 'react';
import { Form as FinalForm, Field } from 'react-final-form';
import {
  normalizeCep,
  normalizeNum,
  validateCep,
  validateNum
} from './helpers';
import Container from './Container';
import Wrapper from './Wrapper';
import InputLabel from './InputLabel';
import InputField from './InputField';
import Button from './Button';
import Spinner from '../../Loading/Spinner';

const Form = ({ onSubmit, initialValues }) => (
  <Container>
    <Wrapper>
      <FinalForm
        onSubmit={onSubmit}
        initialValues={initialValues}
        render={({ handleSubmit, form, submitting, pristine, validating }) => (
          <form onSubmit={handleSubmit}>
            <Field name="cep" validate={validateCep} parse={normalizeCep}>
              {({ input, meta }) => (
                <InputField error={meta.error} touched={meta.touched}>
                  <InputLabel htmlFor="cep-input">CEP</InputLabel>
                  <input id="cep-input" {...input} type="text" />
                  {validating && (
                    <Spinner style={{ left: '40%', top: '-15px' }} />
                  )}
                  {meta.error && meta.touched && <p>{meta.error}</p>}
                </InputField>
              )}
            </Field>

            <Field name="numero" validate={validateNum} parse={normalizeNum}>
              {({ input, meta }) => (
                <InputField error={meta.error} touched={meta.touched}>
                  <InputLabel htmlFor="numero-input">Número</InputLabel>
                  <input id="numero-input" {...input} type="text" />
                  {meta.error && meta.touched && <p>{meta.error}</p>}
                </InputField>
              )}
            </Field>

            <Field name="complemento">
              {({ input }) => (
                <InputField>
                  <InputLabel htmlFor="complemento-input">
                    Complemento
                  </InputLabel>
                  <input id="complemento-input" {...input} type="text" />
                </InputField>
              )}
            </Field>

            <Button disabled={submitting || validating || pristine}>
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
            </Button>
          </form>
        )}
      />
    </Wrapper>
  </Container>
);

export default Form;
