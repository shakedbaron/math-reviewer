
export const metadata = {
  title: "Math Critic",
  description: "Upload exercise + solution and get critique"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he">
      <body>{children}</body>
    </html>
  );
}
