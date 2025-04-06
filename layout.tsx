export const metadata = {
  title: "庫存管理系統",
  description: "夾子園每日庫存追蹤系統",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-Hant">
      <head />
      <body>{children}</body>
    </html>
  );
}
