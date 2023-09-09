import React from 'react'
import { SimpleLayout } from '@/components/SimpleLayout'

export default function Booking() {
  return (
    // <!-- Google Calendar Appointment Scheduling begin -->
    <SimpleLayout
      title="Let's talk!"
      intro="Eager to dive into details about my projects or services on a call. Open for casual conversations too—feel free to book some time!"
    >
      <iframe
        src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1Mi_PLWwGAEC2TPV4tBrhN9URxdv_809jMzD78VcNWrQUmFWNqBxetuxXGT-1txj-bZJ6VUDS9?gv=true"
        className="h-[900px] w-full rounded-lg border border-zinc-200 bg-zinc-100 shadow-lg"
        width="100%"
        height="900"
        frameborder="0"
      ></iframe>
    </SimpleLayout>
  )
}
