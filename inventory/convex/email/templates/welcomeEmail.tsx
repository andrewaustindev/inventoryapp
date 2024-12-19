
import { renderToString } from "react-dom/server";
import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
  Heading,
} from "@react-email/components";
import Config from "@/config";

type WelcomeEmailProps = {
  username: string;
};

export function WelcomeEmail({ username }: WelcomeEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Welcome to {Config.appName}! 🎉</Preview>
      <Body style={{
        backgroundColor: "#ffffff",
        fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
      }}>
        <Container style={{ padding: "20px", maxWidth: "600px" }}>
          <Heading style={{ color: "#2563eb", marginBottom: "24px" }}>
            Welcome to {Config.appName}! 🎉
          </Heading>

          <Text style={{ fontSize: "16px" }}>Hi {username},</Text>
          
          <Text style={{ fontSize: "16px" }}>
            Thanks for joining {Config.appName}! I&apos;m excited to see what you build with it!
          </Text>

          <Section style={{ backgroundColor: "#f3f4f6", padding: "20px", borderRadius: "8px", margin: "24px 0" }}>
            <Heading as="h2" style={{ color: "#1f2937", marginTop: "0" }}>
              🚀 Ready to get started?
            </Heading>
            <Text style={{ marginBottom: "0" }}>
              Check out our comprehensive documentation to learn how to make the most of {Config.appName}. 
              Our step-by-step guides will help you get up and running quickly.
            </Text>
          </Section>

          <Link
            href={`https://${Config.domainName}/docs`}
            style={{
              display: "inline-block",
              backgroundColor: "#2563eb",
              color: "white",
              padding: "12px 24px",
              textDecoration: "none",
              borderRadius: "6px",
              fontWeight: "bold",
              margin: "16px 0",
            }}
          >
            View Documentation →
          </Link>

          <Text style={{ fontSize: "16px", marginTop: "24px" }}>
            If you have any questions, let us know at{" "}
            <Link href="https://ideasandbugz.com" style={{ color: "#2563eb" }}>
              ideasandbugz.com
            </Link>{" "}
            - we&apos;re here to help!
          </Text>

          <Text style={{ fontSize: "16px", marginTop: "24px" }}>
            Best regards,<br/>
            Andy from {Config.appName}
          </Text>

          <Hr style={{ margin: "40px 0 20px", borderColor: "#e5e7eb" }} />
          
          <Text style={{ fontSize: "12px", color: "#6b7280" }}>
            You&apos;re receiving this email because you signed up for {Config.appName}.{" "}
            If you don&apos;t want to receive these emails, you can{" "}
            <Link
              href={`https://${Config.domainName}/unsubscribe`}
              style={{ color: "#6b7280" }}
            >
              unsubscribe here
            </Link>
            .
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

export function renderWelcomeEmail(props: WelcomeEmailProps) {
  return renderToString(<WelcomeEmail {...props} />);
}

