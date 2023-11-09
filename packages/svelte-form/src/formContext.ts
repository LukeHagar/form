import type { FormApi } from '@tanstack/form-core';
import { getContext, setContext } from 'svelte';

type FormContextType =
  | undefined
  | {
      formApi: FormApi<any, any>
      parentFieldName?: string
    }

export const formContext = setContext<FormContextType>(undefined)

export function useFormContext() {
  const formApi: FormContextType = getContext(formContext)

  if (!formApi)
    throw new Error(`You are trying to use the form API outside of a form!`)

  return formApi
}
