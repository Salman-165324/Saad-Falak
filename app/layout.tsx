import "@/styles/globals.css";
export const metadata = {
  title: "UK Business Loan & Merchant Card Machine Consultant | Saad Falak",
  description: "Get expert help securing UK business loans and card machines. Saad Falak, licensed consultant with 6+ years of experience. Free advice for UK merchants."
};

const RootLayout = ({ children }: { children: React.ReactNode; }) => {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
