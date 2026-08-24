import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";
import { FormValues } from "../ui/QuoteForm";

const startDateOptions: Record<string, string> = {
  asap: "As soon as possible",
  "1-2-weeks": "1-2 weeks",
  "1-month": "Within 1 month",
  "2-3-months": "2-3 months",
  "3-plus-months": "3+ months",
  "not-sure": "Not sure yet",
};

const budgetOptions: Record<FormValues["budget"], string> = {
  "5k-less": "$5,000 or less",
  "5k-24k": "$5,000 - $24,999",
  "25k-49k": "$25,000 - $49,999",
  "50k-99k": "$50,000 - $99,999",
  "100k-plus": "$100,000+",
};

export const QuoteConfirmationEmail = ({
  firstName,
  lastName,
  companyName,
  email,
  startDate,
  budget,
  projectDescription,
}: FormValues) => {
  const formattedStartDate = startDateOptions[startDate] || startDate;
  const formattedBudget = budgetOptions[budget] || budget;

  return (
    <Html>
      <Head />
      <Preview>Thank you for your quote request</Preview>
      <Tailwind>
        <Body className="bg-gray-100 font-sans">
          <Container className="mx-auto p-4 max-w-[600px]">
            <Section className="bg-white p-8 rounded-lg shadow-sm">
              <Heading className="text-2xl font-bold text-gray-800 mb-4">
                Quote Request Confirmation
              </Heading>
              <Text className="text-gray-600 mb-6">
                Hi {firstName}, thank you for submitting your quote request.
                We've received your information and will get back to you within
                1-2 business days.
              </Text>

              <Hr className="border-gray-200 my-6" />

              <Heading className="text-lg font-semibold text-gray-800 mb-3">
                Your Request Details
              </Heading>

              <Section className="mb-4">
                <Text className="text-gray-700 font-medium mb-1">
                  Contact Information:
                </Text>
                <Text className="text-gray-600 ml-2 mb-1">
                  Name: {firstName} {lastName}
                </Text>
                <Text className="text-gray-600 ml-2 mb-1">
                  Company: {companyName}
                </Text>
                <Text className="text-gray-600 ml-2">Email: {email}</Text>
              </Section>

              <Section className="mb-4">
                <Text className="text-gray-700 font-medium mb-1">
                  Project Information:
                </Text>
                <Text className="text-gray-600 ml-2 mb-1">
                  Estimated Start Date: {formattedStartDate}
                </Text>
                <Text className="text-gray-600 ml-2 mb-1">
                  Budget Range: {formattedBudget}
                </Text>
              </Section>

              <Section className="mb-4">
                <Text className="text-gray-700 font-medium mb-1">
                  Project Description:
                </Text>
                <Text className="text-gray-600 ml-2 bg-gray-50 p-3 rounded border border-gray-100">
                  {projectDescription || "No description provided."}
                </Text>
              </Section>

              <Hr className="border-gray-200 my-6" />

              <Text className="text-gray-600">
                If you have any questions or need to update your information,
                please reply to this email.
              </Text>

              <Text className="text-gray-600 mt-6">
                Thank you,
                <br />
                Matt Lewis
              </Text>
            </Section>

            <Text className="text-gray-500 text-sm text-center mt-4">
              © {new Date().getFullYear()} MatTech LLC. All rights reserved.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
