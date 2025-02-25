import "./globals.css";
import Headers from '@/components/layouts/Header'
import MainLayout from "@/layout/MainLayout";
import MainProvider from "@/redux/MainProvider";


export const metadata = {
  title: "Travel Website",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      >
        <MainProvider>
          <MainLayout>{children}</MainLayout>
        </MainProvider>
      </body>
    </html>
  );
}
