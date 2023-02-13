import { EnvelopeIcon } from '@heroicons/react/24/outline'
import { Button } from '@/components/Button'
import { submit_hubspot_form } from '@/pages/api/submitNewsletterSignup'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'

export const Newsletter = () => {
  const router = useRouter()
  return (
    <Formik
      initialValues={{ email: '' }}
      validate={(values) => {
        const errors = {}
        if (!values.email) {
          errors.email = 'Required'
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address'
        }
        return errors
      }}
      onSubmit={async (values, { setSubmitting }) => {
        setSubmitting(true)
        try {
          await submit_hubspot_form(values.email)
          setSubmitting(false)
          router.push('/thank-you')
        } catch (e) {
          setSubmitting(false)
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
            <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              <EnvelopeIcon className="h-6 w-6 flex-none" />
              <span className="ml-3">Stay up to date</span>
            </h2>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Get notified when I publish something new, and unsubscribe at any
              time.
            </p>
            <div className="mt-6 flex">
              <Field
                className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
                type="email"
                name="email"
              />

              <Button
                className="ml-4 flex-none"
                type="submit"
                disabled={isSubmitting}
              >
                Join
              </Button>
            </div>
            <ErrorMessage
              name="email"
              component="div"
              className="text-xs text-red-600"
            />
          </div>
        </Form>
      )}
    </Formik>
  )
}
