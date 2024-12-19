
import { render } from "@react-email/render";
import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Link,
  Preview,
  Text,
} from "@react-email/components";
import config from "@/config";

type PurchaseEmailProps = {
  amount: number;
  transactionDate: string;
  invoiceNumber: string;
};

export function PurchaseEmail({ amount, transactionDate, invoiceNumber }: PurchaseEmailProps) {
  const amountInDollars = amount / 100;

  return (
    <Html>
      <Head />
      <Preview>Your {config.appName} purchase confirmation</Preview>
      <Body style={{
        backgroundColor: "#ffffff",
        fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
      }}>
        <Container style={{ padding: "20px", maxWidth: "600px" }}>
          <Text style={{ color: "#2563eb", fontSize: "24px", fontWeight: "bold" }}>
            Congratulations on starting your {config.appName} journey! 🎉
          </Text>

          <Text>Hi there,</Text>
          
          <Text>
            Your purchase was successful! You&apos;re now ready to start building your MVP.
          </Text>

          <Container style={{
            backgroundColor: "#f3f4f6",
            padding: "20px",
            borderRadius: "8px",
            margin: "24px 0",
          }}>
            <Text style={{ color: "#1f2937", fontWeight: "bold", marginTop: "0" }}>
              💡 How credits work:
            </Text>
            <ul>
              <li>1 credit = 1 test</li>
              <li>Credits never expire</li>
              <li>Use credits whenever you need feedback</li>
              <li>Each test can include 2 screenshots and 1 backlink</li>
              <li>Backlinks are optional, but highly encouraged</li>
              <li>You can purchase more credits anytime</li>
              <li>Also, don&apos;t forget to leave feedback and request features that you like!</li>
            </ul>
          </Container>

          <Link
            href={`https://${config.domainName}/create`}
            style={{
              backgroundColor: "#2563eb",
              color: "white",
              padding: "12px 24px",
              textDecoration: "none",
              borderRadius: "6px",
              fontWeight: "bold",
            }}
          >
            Start Your First Test →
          </Link>

          <Text style={{ marginTop: "24px" }}>
            Best regards,<br/>
            Andy from {config.appName}
          </Text>

          <Hr style={{ margin: "40px 0", borderColor: "#e5e7eb" }} />

          <Text style={{ color: "#6b7280" }}>
            <strong>Purchase Summary:</strong><br/>
            Invoice ID: {invoiceNumber}<br/>
            Transaction Date: {transactionDate}<br/>
            Amount: ${amountInDollars}
          </Text>

          <Text style={{ color: "#6b7280" }}>
            View your{" "}
            <Link
              href={`https://${config.domainName}/dashboard`}
              style={{ color: "#6b7280" }}
            >
              dashboard
            </Link>
            {" "}for updates and more.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

export function renderPurchaseEmail(props: PurchaseEmailProps) {
  return render(<PurchaseEmail {...props} />);
}