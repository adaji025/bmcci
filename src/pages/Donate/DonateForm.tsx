import { Button, Select, TextInput, Textarea } from '@mantine/core'

const DonateForm = () => {
  return (
    <div className="mt-32 app-width">
        <div className="bg-[#92CD0033]/20 px-5 py-3 mb-3 rounded w-max text-xs text-[#2C6700] font-medium">
          JOIN US
        </div>
        <div className="max-w-[600px]">
          <h2 className="font-semibold text-[32px] lg:text-[48px] leading-none">
            Kindly fill the form below to get started
          </h2>
        </div>
        <div className="mt-10 lg:w-2/3 grid sm:grid-cols-2 gap-5">
          <TextInput size="md" label="First Name" placeholder="Type here..." />
          <TextInput size="md" label="Last Name" placeholder="Type here..." />
          <Select
            size="md"
            label="Status"
            placeholder="Choose One"
            data={[
              {
                label: "Status",
                value: "status",
              },
            ]}
          />
          <TextInput
            size="md"
            label="Phone Number"
            placeholder="Type here..."
          />
          <TextInput
            size="md"
            label="Physical Address"
            placeholder="Type here..."
          />
          <TextInput
            type="email"
            size="md"
            label="Email Address"
            placeholder="Type here..."
          />
          <Textarea size="xl" label="Message" className="sm:col-span-2" />
        </div>
        <Button
          size="md"
          className="bg-primary hover:bg-primary/80 hidden lg:block mt-5 text-black"
        >
          Submit
        </Button>
      </div>
  )
}

export default DonateForm
