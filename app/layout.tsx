export const metadata = {
  title: 'Morgue: Worlds Between',
  description: 'Dark fantasy horror series',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
