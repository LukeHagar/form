import { string, object } from 'valibot'
import { valibotValidator } from '../validator'
import { FieldApi, FormApi } from '@tanstack/form-core'
import { assertType } from 'vitest'

it('should allow a Valibot validator to be passed in', () => {
  const form = new FormApi({
    defaultValues: {
      name: 'test',
    },
    validator: valibotValidator,
  } as const)
})

it('should allow a Valibot validator to handle the correct Valibot type', () => {
  const form = new FormApi({
    defaultValues: {
      name: 'test',
    },
    validator: valibotValidator,
  })

  const field = new FieldApi({
    form,
    name: 'name',
    onChange: string(),
  } as const)
})

it('should allow a Valibot validator to handle the correct Valibot type on async methods', () => {
  const form = new FormApi({
    defaultValues: {
      name: 'test',
    },
    validator: valibotValidator,
  })

  const field = new FieldApi({
    form,
    name: 'name',
    onChangeAsync: string(),
  } as const)
})

it('should allow a functional onChange to be passed when using a validator', () => {
  const form = new FormApi({
    defaultValues: {
      name: 'test',
    },
    validator: valibotValidator,
  })

  const field = new FieldApi({
    form,
    name: 'name',
    onChange: (val) => {
      assertType<'test'>(val)
      return undefined
    },
  } as const)
})

it('should not allow a validator onChange to be passed when not using a validator', () => {
  const form = new FormApi({
    defaultValues: {
      name: 'test',
    },
  })

  const field = new FieldApi({
    form,
    name: 'name',
    // @ts-expect-error Requires a validator
    onChange: string(),
  } as const)
})

// This is not possible without higher-kinded types AFAIK
it.skip('should allow not a Valibot validator with the wrong Valibot type', () => {
  const form = new FormApi({
    defaultValues: {
      name: 'test',
    },
  })

  const field = new FieldApi({
    form,
    name: 'name',
    validator: valibotValidator,
    onChange: object({}),
  } as const)
})
